'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Clock,
  Mic,
  Presentation,
  Users,
  Check,
  Info
} from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isToday, addDays } from 'date-fns'
import { da } from 'date-fns/locale'
import { PRICING } from '@/lib/types'

interface UserData {
  email: string
  is_member: boolean
}

interface BookingData {
  id: string
  start_time: string
  rooms: { type: string; name: string }
  profiles: { full_name: string }
}

export default function BookingPage() {
  const [user, setUser] = useState<UserData | null>(null)
  const [loading, setLoading] = useState(true)
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedRoom, setSelectedRoom] = useState<'meeting' | 'podcast'>('meeting')
  const [selectedTime, setSelectedTime] = useState('')
  const [bookingSubmitted, setBookingSubmitted] = useState(false)
  const [bookings, setBookings] = useState<BookingData[]>([])
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user: authUser } } = await supabase.auth.getUser()

      if (authUser) {
        // Get profile to check membership status
        const { data: profile } = await supabase
          .from('profiles')
          .select('is_member')
          .eq('id', authUser.id)
          .single()

        setUser({
          email: authUser.email || '',
          is_member: profile?.is_member || false,
        })
      }
      setLoading(false)
    }

    const fetchBookings = async () => {
      try {
        const response = await fetch('/api/bookings')
        if (response.ok) {
          const data = await response.json()
          setBookings(data)
        }
      } catch (error) {
        console.error('Failed to fetch bookings:', error)
      }
    }

    getUser()
    fetchBookings()
  }, [supabase])

  const days = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  })

  const firstDayOfMonth = startOfMonth(currentMonth).getDay()
  const adjustedFirstDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1 // Adjust for Monday start

  const getBookingsForDate = (date: Date) => {
    return bookings.filter(b => isSameDay(new Date(b.start_time), date))
  }

  const timeSlots = [
    '08:00 - 11:00',
    '11:00 - 14:00',
    '14:00 - 17:00',
    '17:00 - 20:00',
  ]

  const handleBooking = async () => {
    if (!user) {
      router.push('/login')
      return
    }

    if (!selectedDate || !selectedTime) return

    setLoading(true)

    // Parse time slot to create start and end times
    const [startHour] = selectedTime.split(' - ')[0].split(':')
    const [endHour] = selectedTime.split(' - ')[1].split(':')

    const startTime = new Date(selectedDate)
    startTime.setHours(parseInt(startHour), 0, 0, 0)

    const endTime = new Date(selectedDate)
    endTime.setHours(parseInt(endHour), 0, 0, 0)

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          room_type: selectedRoom,
          start_time: startTime.toISOString(),
          end_time: endTime.toISOString(),
        }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Booking failed')
      }

      setBookingSubmitted(true)
    } catch (error) {
      console.error('Booking error:', error)
      alert('Der opstod en fejl ved booking. Prøv igen.')
    } finally {
      setLoading(false)
    }
  }

  const rooms = [
    {
      id: 'meeting' as const,
      name: 'Mødelokale',
      icon: Presentation,
      price: user?.is_member ? 0 : PRICING.meeting_room.guest_per_day,
      capacity: 8,
    },
    {
      id: 'podcast' as const,
      name: 'Podcast Studie',
      icon: Mic,
      price: user?.is_member ? 0 : PRICING.podcast.guest_3hour_package,
      capacity: 4,
    },
  ]

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (bookingSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="text-green-600" size={40} />
          </div>
          <h1 className="text-2xl font-semibold text-primary">Booking modtaget!</h1>
          <p className="mt-4 text-gray-600">
            Din booking af {selectedRoom === 'meeting' ? 'mødelokalet' : 'podcast studiet'} den{' '}
            {selectedDate && format(selectedDate, "d. MMMM yyyy", { locale: da })} kl. {selectedTime} er modtaget.
          </p>
          {!user?.is_member && (
            <p className="mt-4 text-sm text-gray-500">
              Vi sender en faktura til din email.
            </p>
          )}
          <div className="mt-8 space-y-3">
            <Link
              href="/min-side"
              className="block w-full bg-primary text-white py-3 rounded font-semibold hover:bg-primary/90 transition-colors"
            >
              Se mine bookinger
            </Link>
            <button
              onClick={() => {
                setBookingSubmitted(false)
                setSelectedDate(null)
                setSelectedTime('')
              }}
              className="block w-full border border-gray-300 text-gray-700 py-3 rounded font-semibold hover:bg-gray-50 transition-colors"
            >
              Lav ny booking
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-light">
            Book <span className="font-semibold">lokale</span>
          </h1>
          <p className="mt-4 text-gray-300">
            {user ? (
              user.is_member ? (
                <span className="text-white">Du er medlem - alle bookinger er gratis!</span>
              ) : (
                'Vælg lokale, dato og tidspunkt for din booking'
              )
            ) : (
              <>
                <Link href="/login" className="text-white hover:underline">Log ind</Link> for at booke
              </>
            )}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!user && (
          <div className="mb-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start">
            <Info className="text-yellow-600 flex-shrink-0 mr-3 mt-0.5" size={20} />
            <div>
              <p className="text-yellow-800 font-medium">Login påkrævet</p>
              <p className="text-yellow-700 text-sm mt-1">
                Du skal være logget ind for at booke. <Link href="/login" className="underline">Log ind</Link> eller{' '}
                <Link href="/opret-konto" className="underline">opret en konto</Link>.
              </p>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Room Selection */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <CalendarIcon className="mr-2 text-primary" size={20} />
                Vælg lokale
              </h2>

              <div className="space-y-3">
                {rooms.map((room) => (
                  <button
                    key={room.id}
                    onClick={() => setSelectedRoom(room.id)}
                    className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                      selectedRoom === room.id
                        ? 'border-accent bg-accent/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <room.icon className={selectedRoom === room.id ? 'text-accent' : 'text-gray-400'} size={24} />
                        <span className="ml-3 font-medium text-primary">{room.name}</span>
                      </div>
                      {selectedRoom === room.id && <Check className="text-primary" size={20} />}
                    </div>
                    <div className="mt-2 flex items-center justify-between text-sm">
                      <span className="text-gray-500 flex items-center">
                        <Users size={14} className="mr-1" /> Op til {room.capacity}
                      </span>
                      <span className={room.price === 0 ? 'text-green-600 font-semibold' : 'text-gray-600'}>
                        {room.price === 0 ? 'Gratis' : `${room.price} kr`}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Calendar */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow p-6">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-primary capitalize">
                  {format(currentMonth, 'MMMM yyyy', { locale: da })}
                </h2>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                    disabled={isSameMonth(currentMonth, new Date())}
                    className="p-2 hover:bg-gray-100 rounded transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                    disabled={currentMonth > addMonths(new Date(), 11)}
                    className="p-2 hover:bg-gray-100 rounded transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

              {/* Weekday headers */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {['Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør', 'Søn'].map((day) => (
                  <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar days */}
              <div className="grid grid-cols-7 gap-1">
                {/* Empty cells for days before month starts */}
                {Array.from({ length: adjustedFirstDay }).map((_, i) => (
                  <div key={`empty-${i}`} className="aspect-square" />
                ))}

                {days.map((day) => {
                  const dayBookings = getBookingsForDate(day)
                  const hasBooking = dayBookings.some(b => b.rooms?.type === selectedRoom)
                  const isPast = day < new Date(new Date().setHours(0, 0, 0, 0))

                  return (
                    <button
                      key={day.toISOString()}
                      onClick={() => !isPast && setSelectedDate(day)}
                      disabled={isPast}
                      className={`aspect-square p-1 rounded-lg transition-all relative ${
                        isPast
                          ? 'text-gray-300 cursor-not-allowed'
                          : selectedDate && isSameDay(day, selectedDate)
                          ? 'bg-accent text-white font-semibold'
                          : isToday(day)
                          ? 'text-primary font-semibold hover:bg-gray-100'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span className="text-sm">{format(day, 'd')}</span>
                      {hasBooking && !isPast && (
                        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-red-400 rounded-full" />
                      )}
                    </button>
                  )
                })}
              </div>

              {/* Legend */}
              <div className="mt-4 flex items-center space-x-4 text-xs text-gray-500">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-1" />
                  Optaget
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-1" />
                  Valgt
                </div>
              </div>
            </div>

            {/* Time Selection */}
            {selectedDate && (
              <div className="mt-6 bg-white rounded-lg shadow p-6">
                <h3 className="font-semibold text-primary mb-4 flex items-center">
                  <Clock className="mr-2 text-primary" size={20} />
                  Vælg tidspunkt - {format(selectedDate, "d. MMMM", { locale: da })}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setSelectedTime(slot)}
                      className={`p-3 rounded border-2 transition-all ${
                        selectedTime === slot
                          ? 'border-accent bg-accent/5 text-primary'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>

                {/* Booking summary */}
                {selectedTime && (
                  <div className="mt-6 p-4 bg-secondary/30 rounded-lg">
                    <h4 className="font-semibold text-primary mb-3">Din booking</h4>
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="text-gray-500">Lokale:</span>{' '}
                        <span className="font-medium">{selectedRoom === 'meeting' ? 'Mødelokale' : 'Podcast Studie'}</span>
                      </p>
                      <p>
                        <span className="text-gray-500">Dato:</span>{' '}
                        <span className="font-medium">{format(selectedDate, "d. MMMM yyyy", { locale: da })}</span>
                      </p>
                      <p>
                        <span className="text-gray-500">Tid:</span>{' '}
                        <span className="font-medium">{selectedTime}</span>
                      </p>
                      <p>
                        <span className="text-gray-500">Pris:</span>{' '}
                        <span className={`font-medium ${rooms.find(r => r.id === selectedRoom)?.price === 0 ? 'text-green-600' : ''}`}>
                          {rooms.find(r => r.id === selectedRoom)?.price === 0
                            ? 'Gratis (medlem)'
                            : `${rooms.find(r => r.id === selectedRoom)?.price} kr`}
                        </span>
                      </p>
                    </div>
                    <button
                      onClick={handleBooking}
                      disabled={!user}
                      className="mt-4 w-full bg-white text-black py-3 rounded font-semibold hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {user ? 'Bekræft booking' : 'Log ind for at booke'}
                    </button>
                    <p className="mt-2 text-xs text-gray-500 text-center">
                      Gratis afbestilling op til 48 timer før
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* All bookings overview */}
            <div className="mt-6 bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-primary mb-4">Kommende bookinger</h3>
              <div className="space-y-3">
                {bookings.length === 0 ? (
                  <p className="text-gray-500 text-sm">Ingen kommende bookinger</p>
                ) : (
                  bookings.slice(0, 5).map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                      <div className="flex items-center">
                        {booking.rooms?.type === 'meeting' ? (
                          <Presentation className="text-gray-400 mr-3" size={18} />
                        ) : (
                          <Mic className="text-gray-400 mr-3" size={18} />
                        )}
                        <div>
                          <p className="text-sm font-medium text-primary">
                            {booking.rooms?.name || 'Ukendt lokale'}
                          </p>
                          <p className="text-xs text-gray-500">
                            {format(new Date(booking.start_time), "d. MMMM 'kl.' HH:mm", { locale: da })}
                          </p>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">
                        {booking.profiles?.full_name || 'Anonym'}
                      </span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
