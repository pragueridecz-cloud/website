import { NextResponse } from 'next/server'

// Tenhle repo nemá @supabase/supabase-js jako závislost, jde se přímo přes REST.
const SB_URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1`
const SB_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!
const H = { 'apikey': SB_KEY, 'Authorization': `Bearer ${SB_KEY}` }
const CORS = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET' }

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS })
}

export async function GET() {
  const [zones, matrix, pricing, settings] = await Promise.all([
    fetch(`${SB_URL}/pricing_zones?select=*&order=sort_order.asc`, { headers: H }).then(r => r.json()),
    fetch(`${SB_URL}/zone_matrix?select=*`, { headers: H }).then(r => r.json()),
    fetch(`${SB_URL}/distance_pricing?select=*&order=km_from.asc`, { headers: H }).then(r => r.json()),
    fetch(`${SB_URL}/tenant_settings?select=*&limit=1`, { headers: H }).then(r => r.json()),
  ])

  return NextResponse.json({
    zones: zones || [],
    zone_matrix: matrix || [],
    distance_pricing: pricing || [],
    settings: settings?.[0] || {},
  }, { headers: CORS })
}
