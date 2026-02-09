import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const supabase = await createClient()

  try {
    const { name, email, phone, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Navn, email og besked er påkrævet' },
        { status: 400 }
      )
    }

    const { error } = await supabase
      .from('contact_submissions')
      .insert({
        name,
        email,
        phone: phone || null,
        subject: subject || 'general',
        message,
      })

    if (error) {
      console.error('Error saving message:', error)
      return NextResponse.json(
        { error: 'Kunne ikke gemme beskeden' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Error processing message:', err)
    return NextResponse.json(
      { error: 'Der opstod en fejl' },
      { status: 500 }
    )
  }
}
