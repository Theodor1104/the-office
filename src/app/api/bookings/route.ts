import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET() {
  const supabase = await createClient()

  const { data: bookings, error } = await supabase
    .from('bookings')
    .select(`
      *,
      profiles:user_id (full_name, email),
      rooms:room_id (name, type)
    `)
    .gte('start_time', new Date().toISOString())
    .order('start_time', { ascending: true })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(bookings)
}

export async function POST(request: Request) {
  const supabase = await createClient()

  // Check if user is authenticated
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()
  const { room_type, start_time, end_time, notes } = body

  // Get room ID based on type
  const { data: room, error: roomError } = await supabase
    .from('rooms')
    .select('id')
    .eq('type', room_type)
    .single()

  if (roomError || !room) {
    return NextResponse.json({ error: 'Room not found' }, { status: 404 })
  }

  // Get user profile to check if member
  const { data: profile } = await supabase
    .from('profiles')
    .select('is_member')
    .eq('id', user.id)
    .single()

  const isMember = profile?.is_member || false

  // Calculate price (0 for members)
  let totalPrice = 0
  if (!isMember) {
    if (room_type === 'meeting') {
      totalPrice = 750 // per day
    } else if (room_type === 'podcast') {
      totalPrice = 699 // 3-hour package
    }
  }

  // Check for conflicts (only confirmed bookings block the slot)
  const { data: existingBookings } = await supabase
    .from('bookings')
    .select('id')
    .eq('room_id', room.id)
    .eq('status', 'confirmed')
    .gte('end_time', start_time)
    .lte('start_time', end_time)

  if (existingBookings && existingBookings.length > 0) {
    return NextResponse.json({ error: 'Time slot already booked' }, { status: 409 })
  }

  // Set status based on membership: members get instant confirmation, non-members need approval
  const bookingStatus = isMember ? 'confirmed' : 'pending'

  // Create booking
  const { data: booking, error: bookingError } = await supabase
    .from('bookings')
    .insert({
      user_id: user.id,
      room_id: room.id,
      start_time,
      end_time,
      status: bookingStatus,
      total_price: totalPrice,
      notes
    })
    .select()
    .single()

  if (bookingError) {
    return NextResponse.json({ error: bookingError.message }, { status: 500 })
  }

  return NextResponse.json(booking, { status: 201 })
}

// Cancel own booking (user must own booking, and it must be at least 48h before start time)
export async function DELETE(request: Request) {
  const supabase = await createClient()

  // Check if user is authenticated
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { bookingId } = await request.json()

  // Get the booking to verify ownership and check time
  const { data: booking, error: fetchError } = await supabase
    .from('bookings')
    .select('user_id, start_time, status')
    .eq('id', bookingId)
    .single()

  if (fetchError || !booking) {
    return NextResponse.json({ error: 'Booking not found' }, { status: 404 })
  }

  // Check if user owns the booking
  if (booking.user_id !== user.id) {
    return NextResponse.json({ error: 'Not your booking' }, { status: 403 })
  }

  // Check if booking is already cancelled
  if (booking.status === 'cancelled') {
    return NextResponse.json({ error: 'Booking already cancelled' }, { status: 400 })
  }

  // Check if at least 48 hours before start time
  const startTime = new Date(booking.start_time)
  const now = new Date()
  const hoursUntilStart = (startTime.getTime() - now.getTime()) / (1000 * 60 * 60)

  if (hoursUntilStart < 48) {
    return NextResponse.json({
      error: 'Kan ikke aflyse mindre end 48 timer før booking'
    }, { status: 400 })
  }

  // Cancel the booking (set status to cancelled instead of deleting)
  const { error: updateError } = await supabase
    .from('bookings')
    .update({ status: 'cancelled' })
    .eq('id', bookingId)

  if (updateError) {
    return NextResponse.json({ error: updateError.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
