import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

// Primary admin email - always has access (fallback)
const PRIMARY_ADMIN_EMAIL = 'theodorhauch@gmail.com'

async function isAdmin(supabase: Awaited<ReturnType<typeof createClient>>, userId: string, email: string) {
  // Primary admin always has access
  if (email === PRIMARY_ADMIN_EMAIL) return true

  // Check database for is_admin flag
  const { data: profile } = await supabase
    .from('profiles')
    .select('is_admin')
    .eq('id', userId)
    .single()

  return profile?.is_admin === true
}

export async function GET() {
  const supabase = await createClient()

  // Check if user is admin
  const { data: { user } } = await supabase.auth.getUser()
  if (!user || !(await isAdmin(supabase, user.id, user.email || ''))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Get all profiles
  const { data: profiles, error } = await supabase
    .from('profiles')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(profiles)
}

export async function PATCH(request: Request) {
  const supabase = await createClient()

  // Check if user is admin
  const { data: { user } } = await supabase.auth.getUser()
  if (!user || !(await isAdmin(supabase, user.id, user.email || ''))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { userId, is_member, is_admin } = await request.json()

  // Build update object
  const updateData: { is_member?: boolean; is_admin?: boolean } = {}
  if (typeof is_member === 'boolean') updateData.is_member = is_member
  if (typeof is_admin === 'boolean') updateData.is_admin = is_admin

  const { error } = await supabase
    .from('profiles')
    .update(updateData)
    .eq('id', userId)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
