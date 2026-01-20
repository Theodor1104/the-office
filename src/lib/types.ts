// Database types
export interface User {
  id: string
  email: string
  full_name: string
  phone?: string
  is_member: boolean // true = har kontorplads, false = gæst
  created_at: string
}

export interface Room {
  id: string
  name: string
  type: 'meeting' | 'podcast' | 'office'
  description: string
  price_per_hour?: number // null for gratis (medlemmer)
  price_per_day?: number
  price_per_month?: number
  capacity: number
  amenities: string[]
  images: string[]
}

export interface Booking {
  id: string
  user_id: string
  room_id: string
  start_time: string
  end_time: string
  status: 'pending' | 'confirmed' | 'cancelled'
  total_price: number // 0 for medlemmer
  notes?: string
  created_at: string
}

// Pricing constants
export const PRICING = {
  meeting_room: {
    guest_per_day: 750,
    member_per_day: 0,
  },
  podcast: {
    guest_per_hour: 399,
    guest_3hour_package: 699,
    guest_with_technician: 799,
    video_addon: 199,
    post_production: 499,
    member_per_hour: 0,
  },
  office: {
    single_desk: 2500,
    full_room: 8000,
    desks_available: 4,
  },
} as const

// Navigation items
export const NAV_ITEMS = [
  { name: 'Forside', href: '/' },
  { name: 'Om os', href: '/om-os' },
  { name: 'Faciliteter', href: '/faciliteter' },
  { name: 'Priser', href: '/priser' },
  { name: 'Podcast', href: '/podcast' },
  { name: 'Book nu', href: '/book' },
  { name: 'Kontakt', href: '/kontakt' },
] as const
