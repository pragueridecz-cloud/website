import { NextResponse } from 'next/server'

const SUPABASE_URL = 'https://pqmoyykyshmtiapnowxc.supabase.co'
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxbW95eWt5c2htdGlhcG5vd3hjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NzE1NjIwNSwiZXhwIjoyMDYyNzMyMjA1fQ.gSa6QTvsqcBMgpBtLKXz1YYSzjEiNpPGlYzMHGk-kX8'
const TENANT_ID = '768a3345-9118-421b-a162-2508a3b462dd'

export async function GET() {
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/tenant_settings?select=vehicles&id=eq.${TENANT_ID}&limit=1`,
    { headers: { apikey: SERVICE_KEY, Authorization: `Bearer ${SERVICE_KEY}` }, next: { revalidate: 60 } }
  )
  const data = await res.json()
  const vehicles = data?.[0]?.vehicles ?? []
  const active = vehicles.filter((v: any) => v.active !== false)
  return NextResponse.json(active, { headers: { 'Cache-Control': 'public, s-maxage=60' } })
}
