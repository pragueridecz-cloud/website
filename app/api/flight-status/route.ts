import { NextRequest, NextResponse } from 'next/server'

const FR24_KEY = '019f2988-3173-7201-983c-93062c60b0c5|Cy5pj9dcxKXbVmDtqDzP9mBM9PUpnPN57JeUn1l0ea0f17f2'
const BASE = 'https://fr24api.flightradar24.com/api/live'
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
