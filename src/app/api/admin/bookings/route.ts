import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

const ADMIN_EMAIL = 'theodorhauch@gmail.com'

// Get all bookings (for admin)
export async function GET() {
  const supabase = await createClient()

  // Check if user is admin
  const { data: { user } } = await supabase.auth.getUser()
  if (!user || user.email !== ADMIN_EMAIL) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Get all bookings with user and room info
  const { data: bookings, error } = await supabase
    .from('bookings')
    .select(`
      *,
      profiles:user_id (full_name, email, is_member),
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
  if (!user || user.email !== ADMIN_EMAIL) {
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
