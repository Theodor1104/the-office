import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { NextResponse } from 'next/server'

const PRIMARY_ADMIN_EMAIL = 'theodorhauch@gmail.com'

async function isAdmin(supabase: Awaited<ReturnType<typeof createClient>>, userId: string, email: string) {
  if (email === PRIMARY_ADMIN_EMAIL) return true
  const { data: profile } = await supabase
    .from('profiles')
    .select('is_admin')
    .eq('id', userId)
    .single()
  return profile?.is_admin === true
}

// Get all bookings (for admin)
export async function GET() {
  const supabase = await createClient()

  // Check if user is admin
  const { data: { user } } = await supabase.auth.getUser()
  if (!user || !(await isAdmin(supabase, user.id, user.email || ''))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    // Use admin client to bypass RLS
    const adminClient = createAdminClient()

    // Get all bookings with user and room info
    const { data: bookings, error } = await adminClient
      .from('bookings')
      .select(`
        *,
        profiles:user_id (full_name, email, phone, is_member),
        rooms:room_id (name, type)
      `)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Admin bookings fetch error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(bookings)
  } catch (err) {
    console.error('Admin client error:', err)
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
  }
}

// Update booking status (approve/reject)
export async function PATCH(request: Request) {
  const supabase = await createClient()

  // Check if user is admin
  const { data: { user } } = await supabase.auth.getUser()
  if (!user || !(await isAdmin(supabase, user.id, user.email || ''))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { bookingId, status } = await request.json()

  if (!['confirmed', 'rejected', 'cancelled'].includes(status)) {
    return NextResponse.json({ error: 'Invalid status' }, { status: 400 })
  }

  // Use admin client to bypass RLS
  const adminClient = createAdminClient()

  const { error } = await adminClient
    .from('bookings')
    .update({ status })
    .eq('id', bookingId)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}

// Delete booking (admin only)
export async function DELETE(request: Request) {
  const supabase = await createClient()

  // Check if user is admin
  const { data: { user } } = await supabase.auth.getUser()
  if (!user || !(await isAdmin(supabase, user.id, user.email || ''))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { bookingId } = await request.json()

  // Use admin client to bypass RLS
  const adminClient = createAdminClient()

  const { error } = await adminClient
    .from('bookings')
    .delete()
    .eq('id', bookingId)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
