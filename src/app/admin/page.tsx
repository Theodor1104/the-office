'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Users, Crown, Shield, Check, X, Calendar, Clock } from 'lucide-react'
import { format } from 'date-fns'
import { da } from 'date-fns/locale'

interface Profile {
  id: string
  email: string
  full_name: string | null
  phone: string | null
  is_member: boolean
  created_at: string
}

interface Booking {
  id: string
  start_time: string
  end_time: string
  status: string
  total_price: number
  created_at: string
  profiles: { full_name: string | null; email: string; is_member: boolean }
  rooms: { name: string; type: string }
}

const ADMIN_EMAIL = 'theodorhauch@gmail.com'

export default function AdminPage() {
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)
  const [updating, setUpdating] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'users' | 'bookings'>('bookings')
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const checkAdmin = async () => {
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) {
        router.push('/login')
        return
      }

      if (user.email !== ADMIN_EMAIL) {
        router.push('/')
        return
      }

      setIsAdmin(true)
      fetchUsers()
      fetchBookings()
    }

    checkAdmin()
  }, [router, supabase.auth])

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/admin/users')
      if (response.ok) {
        const data = await response.json()
        setProfiles(data)
      }
    } catch (error) {
      console.error('Failed to fetch users:', error)
    } finally {
      setLoading(false)
    }
  }

  const fetchBookings = async () => {
    try {
      const response = await fetch('/api/admin/bookings')
      if (response.ok) {
        const data = await response.json()
        setBookings(data)
      }
    } catch (error) {
      console.error('Failed to fetch bookings:', error)
    }
  }

  const updateBookingStatus = async (bookingId: string, status: string) => {
    setUpdating(bookingId)
    try {
      const response = await fetch('/api/admin/bookings', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bookingId, status }),
      })

      if (response.ok) {
        setBookings(bookings.map(b =>
          b.id === bookingId ? { ...b, status } : b
        ))
      }
    } catch (error) {
      console.error('Failed to update booking:', error)
    } finally {
      setUpdating(null)
    }
  }

  const toggleMember = async (userId: string, currentStatus: boolean) => {
    setUpdating(userId)
    try {
      const response = await fetch('/api/admin/users', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, is_member: !currentStatus }),
      })

      if (response.ok) {
        setProfiles(profiles.map(p =>
          p.id === userId ? { ...p, is_member: !currentStatus } : p
        ))
      }
    } catch (error) {
      console.error('Failed to update user:', error)
    } finally {
      setUpdating(null)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (!isAdmin) {
    return null
  }

  const members = profiles.filter(p => p.is_member)
  const guests = profiles.filter(p => !p.is_member)
  const pendingBookings = bookings.filter(b => b.status === 'pending')
  const confirmedBookings = bookings.filter(b => b.status === 'confirmed')

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <Shield className="text-primary" size={32} />
            <h1 className="text-3xl font-light text-primary">
              Admin <span className="font-semibold">Panel</span>
            </h1>
          </div>
          <p className="mt-2 text-gray-600">
            Administrer brugere, medlemskaber og bookinger
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg p-6 shadow">
            <p className="text-3xl font-bold text-primary">{profiles.length}</p>
            <p className="text-gray-600">Brugere i alt</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow">
            <p className="text-3xl font-bold text-green-600">{members.length}</p>
            <p className="text-gray-600">Medlemmer</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow">
            <p className="text-3xl font-bold text-yellow-600">{pendingBookings.length}</p>
            <p className="text-gray-600">Afventer godkendelse</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow">
            <p className="text-3xl font-bold text-blue-600">{confirmedBookings.length}</p>
            <p className="text-gray-600">Bekræftede bookinger</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab('bookings')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'bookings'
                ? 'bg-primary text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Calendar className="inline mr-2" size={18} />
            Bookinger {pendingBookings.length > 0 && `(${pendingBookings.length})`}
          </button>
          <button
            onClick={() => setActiveTab('users')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'users'
                ? 'bg-primary text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Users className="inline mr-2" size={18} />
            Brugere
          </button>
        </div>

        {/* Bookings Tab */}
        {activeTab === 'bookings' && (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-lg font-semibold text-primary flex items-center">
                <Calendar className="mr-2" size={20} />
                Alle bookinger
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Bruger</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Lokale</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Dato & tid</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Pris</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Handling</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {bookings.map((booking) => (
                    <tr key={booking.id} className={booking.status === 'pending' ? 'bg-yellow-50' : ''}>
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-medium text-primary">
                            {booking.profiles?.full_name || 'Ingen navn'}
                          </p>
                          <p className="text-sm text-gray-500">{booking.profiles?.email}</p>
                          {!booking.profiles?.is_member && (
                            <span className="text-xs text-orange-600">Gæst</span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {booking.rooms?.name || booking.rooms?.type}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center text-gray-600">
                          <Clock size={14} className="mr-1" />
                          {format(new Date(booking.start_time), "d. MMM yyyy 'kl.' HH:mm", { locale: da })}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {booking.total_price === 0 ? (
                          <span className="text-green-600">Gratis</span>
                        ) : (
                          `${booking.total_price} kr`
                        )}
                      </td>
                      <td className="px-6 py-4">
                        {booking.status === 'pending' ? (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                            Afventer
                          </span>
                        ) : booking.status === 'confirmed' ? (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                            Bekræftet
                          </span>
                        ) : booking.status === 'rejected' ? (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                            Afvist
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                            {booking.status}
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        {booking.status === 'pending' && (
                          <div className="flex space-x-2">
                            <button
                              onClick={() => updateBookingStatus(booking.id, 'confirmed')}
                              disabled={updating === booking.id}
                              className="inline-flex items-center px-3 py-1 rounded text-sm font-medium bg-green-100 text-green-700 hover:bg-green-200 disabled:opacity-50"
                            >
                              <Check size={14} className="mr-1" />
                              Godkend
                            </button>
                            <button
                              onClick={() => updateBookingStatus(booking.id, 'rejected')}
                              disabled={updating === booking.id}
                              className="inline-flex items-center px-3 py-1 rounded text-sm font-medium bg-red-100 text-red-700 hover:bg-red-200 disabled:opacity-50"
                            >
                              <X size={14} className="mr-1" />
                              Afvis
                            </button>
                          </div>
                        )}
                        {booking.status === 'confirmed' && (
                          <button
                            onClick={() => updateBookingStatus(booking.id, 'cancelled')}
                            disabled={updating === booking.id}
                            className="inline-flex items-center px-3 py-1 rounded text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50"
                          >
                            <X size={14} className="mr-1" />
                            Annuller
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {bookings.length === 0 && (
              <div className="p-12 text-center text-gray-500">
                <Calendar size={48} className="mx-auto mb-4 opacity-50" />
                <p>Ingen bookinger endnu</p>
              </div>
            )}
          </div>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-primary flex items-center">
              <Users className="mr-2" size={20} />
              Alle brugere
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Bruger</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Telefon</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Handling</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {profiles.map((profile) => (
                  <tr key={profile.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                          {profile.full_name?.charAt(0) || profile.email.charAt(0).toUpperCase()}
                        </div>
                        <div className="ml-3">
                          <p className="font-medium text-primary">
                            {profile.full_name || 'Ingen navn'}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{profile.email}</td>
                    <td className="px-6 py-4 text-gray-600">{profile.phone || '-'}</td>
                    <td className="px-6 py-4">
                      {profile.is_member ? (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                          <Crown size={14} className="mr-1" />
                          Medlem
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                          Gæst
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => toggleMember(profile.id, profile.is_member)}
                        disabled={updating === profile.id}
                        className={`inline-flex items-center px-4 py-2 rounded text-sm font-medium transition-colors ${
                          profile.is_member
                            ? 'bg-red-100 text-red-700 hover:bg-red-200'
                            : 'bg-green-100 text-green-700 hover:bg-green-200'
                        } disabled:opacity-50`}
                      >
                        {updating === profile.id ? (
                          'Opdaterer...'
                        ) : profile.is_member ? (
                          <>
                            <X size={14} className="mr-1" />
                            Fjern medlem
                          </>
                        ) : (
                          <>
                            <Check size={14} className="mr-1" />
                            Gør til medlem
                          </>
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {profiles.length === 0 && (
            <div className="p-12 text-center text-gray-500">
              <Users size={48} className="mx-auto mb-4 opacity-50" />
              <p>Ingen brugere endnu</p>
            </div>
          )}
        </div>
        )}
      </div>
    </div>
  )
}
