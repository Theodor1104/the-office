'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone, MapPin } from 'lucide-react'
import { PRICING } from '@/lib/types'

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* ===== HERO — Full-screen, image-focused ===== */}
      <section className="h-screen relative flex items-end">
        <Image
          src="/images/hero.jpg"
          alt="The Office"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />

        {/* Content at bottom */}
        <div className="relative z-10 w-full pb-16 md:pb-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="max-w-2xl">
              <h1 className="text-white mb-6">
                <span className="block font-serif text-5xl md:text-7xl lg:text-8xl">
                  The Office
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8">
                Mødelokale · Kontorplads · After Hours
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/book"
                  className="inline-flex items-center bg-white text-primary px-6 py-3 rounded-full font-medium hover:bg-accent-light transition-colors"
                >
                  Book mødelokale
                  <ArrowRight className="ml-2" size={18} />
                </Link>
                <a
                  href="tel:+4571998877"
                  className="inline-flex items-center bg-white/10 backdrop-blur text-white px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-colors"
                >
                  <Phone className="mr-2" size={16} />
                  71 99 88 77
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== THREE PRODUCTS — Visual cards ===== */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-6">

            {/* AFTER HOURS */}
            <a
              href="tel:+4571998877"
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/hero.jpg"
                alt="After Hours"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-2 bg-accent text-white text-xs px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Nyt
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white/60 text-sm mb-1">Aften & weekend</p>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">After Hours</h3>
                <p className="text-white/70 text-sm mb-4">6 kontorer · Ring for pris</p>
                <span className="inline-flex items-center text-accent-light text-sm group-hover:gap-2 transition-all">
                  <Phone size={14} className="mr-2" />
                  71 99 88 77
                </span>
              </div>
            </a>

            {/* MØDELOKALE */}
            <Link
              href="/book"
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/meeting/meeting-room.jpg"
                alt="Mødelokale"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white/60 text-sm mb-1">Op til 8 personer</p>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">Mødelokale</h3>
                <p className="text-white/70 text-sm mb-4">Projektor · Whiteboard · Kaffe</p>
                <div className="flex items-center justify-between">
                  <span className="text-white text-xl font-medium">{PRICING.meeting_room.guest_per_day} kr/dag</span>
                  <ArrowRight className="text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" size={20} />
                </div>
              </div>
            </Link>

            {/* KONTORPLADS */}
            <Link
              href="/kontakt?emne=office"
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/office/office-main.jpg"
                alt="Kontorplads"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="bg-red-500 text-white text-xs px-3 py-1.5 rounded-full font-medium">
                  Kun 1 tilbage
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white/60 text-sm mb-1">Fast plads · Ingen binding</p>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">Kontorplads</h3>
                <p className="text-white/70 text-sm mb-4">+ gratis mødelokale</p>
                <div className="flex items-center justify-between">
                  <span className="text-white text-xl font-medium">{PRICING.office.single_desk.toLocaleString('da-DK')} kr/md</span>
                  <ArrowRight className="text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" size={20} />
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* ===== LOCATION + CTA — Compact ===== */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="flex items-center gap-4">
              <MapPin className="text-accent-light flex-shrink-0" size={24} />
              <div>
                <p className="font-serif text-xl">Martensens Allé 8</p>
                <p className="text-white/60 text-sm">1828 Frederiksberg · 2 min fra metro</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/book"
                className="inline-flex items-center bg-white text-primary px-6 py-3 rounded-full font-medium hover:bg-accent-light transition-colors"
              >
                Book mødelokale
              </Link>
              <a
                href="tel:+4571998877"
                className="inline-flex items-center border border-white/30 text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
              >
                <Phone className="mr-2" size={16} />
                Ring os
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
