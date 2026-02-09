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

export async function GET() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user || !(await isAdmin(supabase, user.id, user.email || ''))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { data: messages, error } = await supabase
    .from('contact_submissions')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(messages)
}

export async function DELETE(request: Request) {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user || !(await isAdmin(supabase, user.id, user.email || ''))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { messageId } = await request.json()

  const { error } = await supabase
    .from('contact_submissions')
    .delete()
    .eq('id', messageId)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
