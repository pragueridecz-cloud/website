import { NextResponse } from 'next/server'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!
const TENANT_ID = '768a3345-9118-421b-a162-2508a3b462dd'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/tenant_settings?select=vehicles&id=eq.${TENANT_ID}&limit=1`,
      {
        headers: {
          'apikey': SERVICE_KEY,
          'Authorization': `Bearer ${SERVICE_KEY}`,
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      }
    )
    
    if (!res.ok) {
      console.error('Supabase error:', res.status, await res.text())
      return NextResponse.json([])
    }
    
    const data = await res.json()
    const vehicles = data?.[0]?.vehicles ?? []
    const active = Array.isArray(vehicles) 
      ? vehicles.filter((v: any) => v.active !== false)
      : []
    
    return NextResponse.json(active)
  } catch (err) {
    console.error('vehicles route error:', err)
    return NextResponse.json([])
  }
}
