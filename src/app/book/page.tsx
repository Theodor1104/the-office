'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Clock,
  Presentation,
  Users,
  Check
} from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isToday, addDays } from 'date-fns'
import { da } from 'date-fns/locale'

interface UserData {
  email: string
  is_member: boolean
}

interface BookingData {
  id: string
  start_time: string
  end_time: string
  rooms: { type: string; name: string }
  profiles: { full_name: string }
}

export default function BookingPage() {
  const [user, setUser] = useState<UserData | null>(null)
  const [loading, setLoading] = useState(true)
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedRoom, setSelectedRoom] = useState<'meeting'>('meeting')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [bookingSubmitted, setBookingSubmitted] = useState(false)
  const [bookings, setBookings] = useState<BookingData[]>([])
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user: authUser } } = await supabase.auth.getUser()

      if (!authUser) {
        // Not logged in - redirect to login
        router.push('/login?redirect=/book')
        return
      }

      // Get profile to check membership status
      const { data: profile } = await supabase
        .from('profiles')
        .select('is_member')
        .eq('id', authUser.id)
        .single()

      // Non-members cannot access the booking page
      if (!profile?.is_member) {
        router.push('/kontakt?emne=meeting')
        return
      }

      setUser({
        email: authUser.email || '',
        is_member: true, // Only members get here
      })
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

  // Generate time options with 5-minute intervals (08:00 to 20:00)
  const timeOptions: string[] = []
  for (let hour = 8; hour <= 20; hour++) {
    for (let minute = 0; minute < 60; minute += 5) {
      if (hour === 20 && minute > 0) break // Stop at 20:00
      const h = hour.toString().padStart(2, '0')
      const m = minute.toString().padStart(2, '0')
      timeOptions.push(`${h}:${m}`)
    }
  }

  // Check if a specific time range conflicts with existing bookings
  const hasTimeConflict = (start: string, end: string, date: Date) => {
    if (!start || !end) return false

    const [startHour, startMinute] = start.split(':').map(Number)
    const [endHour, endMinute] = end.split(':').map(Number)

    const rangeStart = new Date(date)
    rangeStart.setHours(startHour, startMinute, 0, 0)

    const rangeEnd = new Date(date)
    rangeEnd.setHours(endHour, endMinute, 0, 0)

    // Check if any booking overlaps with this time range for the selected room
    return bookings.some(booking => {
      if (booking.rooms?.type !== selectedRoom) return false

      const bookingStart = new Date(booking.start_time)
      const bookingEnd = new Date(booking.end_time)

      // Check for overlap: ranges overlap if one starts before the other ends
      return rangeStart < bookingEnd && rangeEnd > bookingStart
    })
  }

  // Get available end times based on selected start time
  const getAvailableEndTimes = () => {
    if (!startTime) return []
    const startIndex = timeOptions.indexOf(startTime)
    // End time must be after start time
    return timeOptions.slice(startIndex + 1)
  }

  const handleBooking = async () => {
    if (!user) {
      router.push('/login')
      return
    }

    if (!selectedDate || !startTime || !endTime) return

    setLoading(true)

    // Parse selected times
    const [startHour, startMinute] = startTime.split(':').map(Number)
    const [endHour, endMinute] = endTime.split(':').map(Number)

    const bookingStartTime = new Date(selectedDate)
    bookingStartTime.setHours(startHour, startMinute, 0, 0)

    const bookingEndTime = new Date(selectedDate)
    bookingEndTime.setHours(endHour, endMinute, 0, 0)

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          room_type: selectedRoom,
          start_time: bookingStartTime.toISOString(),
          end_time: bookingEndTime.toISOString(),
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        alert(data.error || 'Der opstod en fejl ved booking. Prøv igen.')
        return
      }

      setBookingSubmitted(true)
    } catch (error) {
      console.error('Booking error:', error)
      alert('Der opstod en fejl. Tjek din internetforbindelse og prøv igen.')
    } finally {
      setLoading(false)
    }
  }

  const rooms = [
    {
      id: 'meeting' as const,
      name: 'Mødelokale',
      icon: Presentation,
      price: 0, // Members always book for free
      capacity: 8,
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
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="text-green-600" size={40} />
          </div>
          <h1 className="text-2xl font-semibold text-primary">Booking bekræftet!</h1>
          <p className="mt-4 text-warm-gray">
            Din booking af mødelokalet den{' '}
            {selectedDate && format(selectedDate, "d. MMMM yyyy", { locale: da })} kl. {startTime} - {endTime} er bekræftet.
          </p>
          <div className="mt-8 space-y-3">
            <Link
              href="/min-side"
              className="block w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Se mine bookinger
            </Link>
            <button
              onClick={() => {
                setBookingSubmitted(false)
                setSelectedDate(null)
                setStartTime('')
                setEndTime('')
              }}
              className="block w-full border border-accent-light/50 text-primary py-3 rounded-lg font-semibold hover:bg-surface transition-colors"
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
      <section className="bg-primary text-white pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif">
            Book <span className="font-semibold">mødelokale</span>
          </h1>
          <p className="mt-4 text-white">
            Som medlem booker du gratis. Vælg dato og tidspunkt herunder.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Room Selection */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <CalendarIcon className="mr-2 text-accent" size={20} />
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
                        : 'border-accent-light/30 hover:border-accent-light'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <room.icon className={selectedRoom === room.id ? 'text-accent' : 'text-accent-light'} size={24} />
                        <span className="ml-3 font-medium text-primary">{room.name}</span>
                      </div>
                      {selectedRoom === room.id && <Check className="text-primary" size={20} />}
                    </div>
                    <div className="mt-2 flex items-center justify-between text-sm">
                      <span className="text-warm-gray flex items-center">
                        <Users size={14} className="mr-1" /> Op til {room.capacity}
                      </span>
                      <span className={room.price === 0 ? 'text-green-600 font-semibold' : 'text-warm-gray'}>
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
            <div className="bg-white rounded-xl shadow p-6">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-primary capitalize">
                  {format(currentMonth, 'MMMM yyyy', { locale: da })}
                </h2>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                    disabled={isSameMonth(currentMonth, new Date())}
                    className="p-2 hover:bg-surface rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                    disabled={currentMonth > addMonths(new Date(), 11)}
                    className="p-2 hover:bg-surface rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

              {/* Weekday headers */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {['Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør', 'Søn'].map((day) => (
                  <div key={day} className="text-center text-sm font-medium text-warm-gray py-2">
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
                          ? 'text-accent-light/50 cursor-not-allowed'
                          : selectedDate && isSameDay(day, selectedDate)
                          ? 'bg-accent text-white font-semibold'
                          : isToday(day)
                          ? 'text-primary font-semibold hover:bg-surface'
                          : 'text-foreground hover:bg-surface'
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
              <div className="mt-4 flex items-center space-x-4 text-xs text-warm-gray">
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
              <div className="mt-6 bg-white rounded-xl shadow p-6">
                <h3 className="font-semibold text-primary mb-4 flex items-center">
                  <Clock className="mr-2 text-accent" size={20} />
                  Vælg tidspunkt - {format(selectedDate, "d. MMMM", { locale: da })}
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {/* Start Time */}
                  <div>
                    <label className="block text-sm font-medium text-warm-gray mb-2">
                      Starttid
                    </label>
                    <select
                      value={startTime}
                      onChange={(e) => {
                        setStartTime(e.target.value)
                        setEndTime('') // Reset end time when start time changes
                      }}
                      className="w-full p-3 border-2 border-accent-light/30 rounded-lg focus:border-accent focus:outline-none transition-colors"
                    >
                      <option value="">Vælg starttid</option>
                      {timeOptions.slice(0, -1).map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* End Time */}
                  <div>
                    <label className="block text-sm font-medium text-warm-gray mb-2">
                      Sluttid
                    </label>
                    <select
                      value={endTime}
                      onChange={(e) => setEndTime(e.target.value)}
                      disabled={!startTime}
                      className="w-full p-3 border-2 border-accent-light/30 rounded-lg focus:border-accent focus:outline-none transition-colors disabled:bg-surface disabled:cursor-not-allowed"
                    >
                      <option value="">Vælg sluttid</option>
                      {getAvailableEndTimes().map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Conflict warning */}
                {startTime && endTime && hasTimeConflict(startTime, endTime, selectedDate) && (
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                    Det valgte tidsrum overlapper med en eksisterende booking. Vælg venligst et andet tidspunkt.
                  </div>
                )}

                {/* Booking summary */}
                {startTime && endTime && !hasTimeConflict(startTime, endTime, selectedDate) && (
                  <div className="mt-6 p-4 bg-secondary/30 rounded-lg">
                    <h4 className="font-semibold text-primary mb-3">Din booking</h4>
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="text-warm-gray">Lokale:</span>{' '}
                        <span className="font-medium">Mødelokale</span>
                      </p>
                      <p>
                        <span className="text-warm-gray">Dato:</span>{' '}
                        <span className="font-medium">{format(selectedDate, "d. MMMM yyyy", { locale: da })}</span>
                      </p>
                      <p>
                        <span className="text-warm-gray">Tid:</span>{' '}
                        <span className="font-medium">{startTime} - {endTime}</span>
                      </p>
                      <p>
                        <span className="text-warm-gray">Pris:</span>{' '}
                        <span className="font-medium text-green-600">Gratis (medlem)</span>
                      </p>
                    </div>
                    <button
                      onClick={handleBooking}
                      className="mt-4 w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-accent-hover transition-colors"
                    >
                      Bekræft booking
                    </button>
                    <p className="mt-2 text-xs text-warm-gray text-center">
                      Gratis afbestilling op til 48 timer før
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* All bookings overview */}
            <div className="mt-6 bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold text-primary mb-4">Kommende bookinger</h3>
              <div className="space-y-3">
                {bookings.length === 0 ? (
                  <p className="text-warm-gray text-sm">Ingen kommende bookinger</p>
                ) : (
                  bookings.slice(0, 5).map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between py-2 border-b border-accent-light/20 last:border-0">
                      <div className="flex items-center">
                        <Presentation className="text-accent-light mr-3" size={18} />
                        <div>
                          <p className="text-sm font-medium text-primary">
                            {booking.rooms?.name || 'Ukendt lokale'}
                          </p>
                          <p className="text-xs text-warm-gray">
                            {format(new Date(booking.start_time), "d. MMMM 'kl.' HH:mm", { locale: da })}
                          </p>
                        </div>
                      </div>
                      <span className="text-sm text-warm-gray">
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
