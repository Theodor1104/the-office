'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  User,
  Calendar,
  LogOut,
  Plus,
  Clock,
  MapPin,
  Check,
  X,
  Star
} from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { format } from 'date-fns'
import { da } from 'date-fns/locale'

interface UserData {
  email: string
  full_name: string
  phone?: string
  is_member: boolean
}

interface Booking {
  id: string
  room_name: string
  room_type: string
  start_time: string
  end_time: string
  status: 'pending' | 'confirmed' | 'cancelled'
  total_price: number
}

export default function MyPage() {
  const [user, setUser] = useState<UserData | null>(null)
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user: authUser } } = await supabase.auth.getUser()

      if (!authUser) {
        router.push('/login')
        return
      }

      // Get profile data from database
      const { data: profile } = await supabase
        .from('profiles')
        .select('full_name, phone, is_member')
        .eq('id', authUser.id)
        .single()

      setUser({
        email: authUser.email || '',
        full_name: profile?.full_name || authUser.user_metadata?.full_name || 'Bruger',
        phone: profile?.phone || authUser.user_metadata?.phone,
        is_member: profile?.is_member || false,
      })

      // Fetch user's bookings from database
      const { data: userBookings } = await supabase
        .from('bookings')
        .select(`
          id,
          start_time,
          end_time,
          status,
          total_price,
          rooms:room_id (name, type)
        `)
        .eq('user_id', authUser.id)
        .gte('start_time', new Date().toISOString())
        .order('start_time', { ascending: true })

      if (userBookings) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setBookings(userBookings.map((b: any) => ({
          id: b.id,
          room_name: b.rooms?.name || 'Ukendt lokale',
          room_type: b.rooms?.type || 'meeting',
          start_time: b.start_time,
          end_time: b.end_time,
          status: b.status as 'pending' | 'confirmed' | 'cancelled',
          total_price: b.total_price,
        })))
      }

      setLoading(false)
    }

    getUser()
  }, [router, supabase])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="mt-4 text-gray-600">Indlæser...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-light text-primary">
              Velkommen, <span className="font-semibold">{user?.full_name}</span>
            </h1>
            <p className="mt-1 text-gray-600">
              {user?.is_member ? (
                <span className="flex items-center text-green-600">
                  <Star size={16} className="mr-1 fill-green-600" /> Medlem - gratis booking
                </span>
              ) : (
                'Gæst'
              )}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center text-gray-600 hover:text-primary transition-colors"
          >
            <LogOut size={20} className="mr-2" />
            Log ud
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profil */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <User className="mr-2 text-primary" size={20} />
                Min profil
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-500">Email</label>
                  <p className="font-medium">{user?.email}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Navn</label>
                  <p className="font-medium">{user?.full_name}</p>
                </div>
                {user?.phone && (
                  <div>
                    <label className="text-sm text-gray-500">Telefon</label>
                    <p className="font-medium">{user.phone}</p>
                  </div>
                )}
                <div>
                  <label className="text-sm text-gray-500">Status</label>
                  <p className="font-medium">
                    {user?.is_member ? (
                      <span className="text-green-600">Medlem (kontorplads)</span>
                    ) : (
                      <span className="text-gray-600">Gæst</span>
                    )}
                  </p>
                </div>
              </div>

              {!user?.is_member && (
                <div className="mt-6 p-4 bg-secondary/30 rounded">
                  <p className="text-sm text-gray-600">
                    Interesseret i en kontorplads? Som medlem får du gratis adgang til mødelokale og podcast studie.
                  </p>
                  <Link
                    href="/kontakt"
                    className="inline-block mt-3 text-primary font-semibold text-sm hover:underline"
                  >
                    Kontakt os for info
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Bookinger */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-primary flex items-center">
                  <Calendar className="mr-2 text-primary" size={20} />
                  Mine bookinger
                </h2>
                <Link
                  href="/book"
                  className="flex items-center bg-white text-black px-4 py-2 rounded font-medium hover:bg-gray-200 transition-colors"
                >
                  <Plus size={18} className="mr-1" />
                  Ny booking
                </Link>
              </div>

              {bookings.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <Calendar size={48} className="mx-auto mb-4 opacity-50" />
                  <p>Du har ingen kommende bookinger</p>
                  <Link href="/book" className="text-primary font-semibold hover:underline mt-2 inline-block">
                    Book dit første lokale
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {bookings.map((booking) => (
                    <div
                      key={booking.id}
                      className="border border-gray-200 rounded-lg p-4 hover:border-accent transition-colors"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-primary">{booking.room_name}</h3>
                          <div className="flex items-center text-sm text-gray-600 mt-1">
                            <Clock size={14} className="mr-1" />
                            {format(new Date(booking.start_time), "d. MMMM yyyy 'kl.' HH:mm", { locale: da })}
                            {' - '}
                            {format(new Date(booking.end_time), 'HH:mm')}
                          </div>
                        </div>
                        <div className="text-right">
                          <span
                            className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                              booking.status === 'confirmed'
                                ? 'bg-green-100 text-green-800'
                                : booking.status === 'pending'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {booking.status === 'confirmed' && <Check size={12} className="mr-1" />}
                            {booking.status === 'cancelled' && <X size={12} className="mr-1" />}
                            {booking.status === 'confirmed' && 'Bekræftet'}
                            {booking.status === 'pending' && 'Afventer'}
                            {booking.status === 'cancelled' && 'Annulleret'}
                          </span>
                          <p className="mt-2 text-sm font-medium">
                            {booking.total_price === 0 ? (
                              <span className="text-green-600">Gratis</span>
                            ) : (
                              <span>{booking.total_price} kr</span>
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Alle bookinger oversigt */}
            <div className="bg-white rounded-lg shadow p-6 mt-8">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <MapPin className="mr-2 text-primary" size={20} />
                Lokaleoversigt - alle bookinger
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Se hvornår lokalerne er booket af andre
              </p>
              <Link
                href="/book"
                className="text-primary font-semibold hover:underline"
              >
                Se kalender med alle bookinger →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
