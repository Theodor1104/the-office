import { createClient } from '@/lib/supabase/server'
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

  // Get all bookings with user and room info
  const { data: bookings, error } = await supabase
    .from('bookings')
    .select(`
      *,
      profiles:user_id (full_name, email, phone, is_member),
      rooms:room_id (name, type)
    `)
    .order('created_at', { ascending: false })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(bookings)
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

  const { error } = await supabase
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

  const { error } = await supabase
    .from('bookings')
    .delete()
    .eq('id', bookingId)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
