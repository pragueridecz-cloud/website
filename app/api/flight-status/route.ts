import { NextRequest, NextResponse } from 'next/server'

// Tenhle repo nemá @supabase/supabase-js jako závislost (viz app/api/pricing/route.ts) —
// stejně jako tam, jde se přímo přes REST rozhraní.
const SB_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SB_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY

const BASE = 'https://fr24api.flightradar24.com/api/live'

// Krátká cache, ať se company_settings nečte přes Supabase při každém požadavku.
// Nastavení → API klíče v adminu má přednost před env proměnnou, aby úprava
// klíče tam měla okamžitý efekt i když je ve Vercelu nastavená fallback hodnota.
let cachedKey: { value: string; expires: number } | null = null
async function getFr24Key(): Promise<string | null> {
  if (cachedKey && cachedKey.expires > Date.now()) return cachedKey.value
  if (!SB_URL || !SB_KEY) return process.env.FR24_API_KEY || null
  const res = await fetch(`${SB_URL}/rest/v1/tenant_settings?select=company_settings&limit=1`, {
    headers: { apikey: SB_KEY, Authorization: `Bearer ${SB_KEY}` },
  })
  const rows = res.ok ? await res.json() : []
  const key = rows?.[0]?.company_settings?.fr24_key || process.env.FR24_API_KEY || null
  if (key) cachedKey = { value: key, expires: Date.now() + 5 * 60 * 1000 }
  return key
}
const CORS = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,OPTIONS' }

const IATA: Record<string, string> = {
  'václava havla': 'PRG', 'vaclava havla': 'PRG', 'ruzyně': 'PRG', 'ruzyne': 'PRG',
  'vídeň': 'VIE', 'wien': 'VIE', 'schwechat': 'VIE',
  'bratislava': 'BTS', 'štefánik': 'BTS',
  'budapešť': 'BUD', 'budapest': 'BUD', 'liszt': 'BUD',
  'mnichov': 'MUC', 'münchen': 'MUC', 'munich': 'MUC',
  'frankfurt': 'FRA', 'drážďany': 'DRS', 'dresden': 'DRS',
  'berlín': 'BER', 'berlin': 'BER', 'brandenburg': 'BER',
  'brno': 'BRQ', 'tuřany': 'BRQ', 'ostrava': 'OSR', 'janáčka': 'OSR',
}

function toIata(s: string) {
  const l = s.toLowerCase()
  for (const [k, v] of Object.entries(IATA)) if (l.includes(k)) return v
  return s.length <= 4 ? s.toUpperCase() : 'PRG'
}

function mapFlight(f: any) {
  const etaMs = f.eta ? new Date(f.eta).getTime() - Date.now() : null
  return { flight: f.flight || f.callsign, origin: f.orig_iata, destination: f.dest_iata, eta: f.eta, eta_mins: etaMs ? Math.round(etaMs / 60000) : null, status: 'airborne' }
}

export async function OPTIONS() { return new NextResponse(null, { status: 204, headers: CORS }) }

export async function GET(req: NextRequest) {
  const p = req.nextUrl.searchParams
  const FR24_KEY = await getFr24Key()
  if (!FR24_KEY) return NextResponse.json({ error: 'not configured' }, { status: 500, headers: CORS })
  const fr24 = { 'NameToken': FR24_KEY, 'Accept': 'application/json' }
  try {
    if (p.get('airport')) {
      const iata = toIata(p.get('airport')!)
      const res = await fetch(`${BASE}/flight-positions/full?airports=${iata}&limit=15`, { headers: fr24 })
      const data = res.ok ? await res.json() : { data: [] }
      return NextResponse.json({ results: (data.data || []).map(mapFlight).filter((f: any) => f.flight).slice(0, 12) }, { headers: CORS })
    }
    if (p.get('search')) {
      const q = p.get('search')!.toUpperCase().replace(/\s/g, '')
      const res = await fetch(`${BASE}/flight-positions/full?flights=${q}&limit=10`, { headers: fr24 })
      const data = res.ok ? await res.json() : { data: [] }
      return NextResponse.json({ results: (data.data || []).map(mapFlight).filter((f: any) => f.flight) }, { headers: CORS })
    }
    const fn = (p.get('flight') || '').toUpperCase().replace(/\s/g, '')
    const res = await fetch(`${BASE}/flight-positions/full?flights=${fn}`, { headers: fr24 })
    const data = res.ok ? await res.json() : { data: [] }
    const pos = data.data?.[0]
    if (pos) {
      const etaMs = pos.eta ? new Date(pos.eta).getTime() - Date.now() : null
      return NextResponse.json({ found: true, status: 'airborne', flight: pos.flight || fn, origin: pos.orig_iata, destination: pos.dest_iata, eta: pos.eta, eta_mins: etaMs ? Math.round(etaMs / 60000) : null }, { headers: CORS })
    }
    return NextResponse.json({ found: false, flight: fn }, { headers: CORS })
  } catch (e: any) {
    return NextResponse.json({ error: 'error', detail: e.message }, { status: 500, headers: CORS })
  }
}
