import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const sb = createClient(
  'https://pqmoyykyshmtiapnowxc.supabase.co',
  process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxbW95eWt5c2htdGlhcG5vd3hjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3ODE1NjIwNSwiZXhwIjoyMDkzNzMyMjA1fQ.JR1T8uCQKYEp-27qjBTlyGIP2HzUoXoLXablgFjqLxw'
)

const CORS = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET' }

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS })
}

export async function GET() {
  const [zones, matrix, pricing, settings] = await Promise.all([
    sb.from('pricing_zones').select('*').order('sort_order'),
    sb.from('zone_matrix').select('*'),
    sb.from('distance_pricing').select('*').order('km_from'),
    sb.from('tenant_settings').select('*').limit(1).single(),
  ])

  return NextResponse.json({
    zones: zones.data || [],
    zone_matrix: matrix.data || [],
    distance_pricing: pricing.data || [],
    settings: settings.data || {},
  }, { headers: CORS })
}
