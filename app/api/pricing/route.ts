import { NextResponse } from 'next/server'

const SB_URL = 'https://pqmoyykyshmtiapnowxc.supabase.co/rest/v1'
const SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxbW95eWt5c2htdGlhcG5vd3hjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3ODE1NjIwNSwiZXhwIjoyMDkzNzMyMjA1fQ.JR1T8uCQKYEp-27qjBTlyGIP2HzUoXoLXablgFjqLxw'
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
