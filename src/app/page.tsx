'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone, MapPin, Clock, Users, Coffee, Mic } from 'lucide-react'
import { PRICING } from '@/lib/types'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* ===== HERO — Full-screen, image-focused ===== */}
      <section className="h-[70vh] min-h-[500px] relative flex items-end">
        <Image
          src="/images/hero.jpg"
          alt="The Office"
          fill
          className="object-cover"
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDBAURAAYSIRMxQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8Ax9f3B3Jb0r7u89tU9Zaql1h8yVkMuGDdqo7+Egf0/SNqNu3a0UNprbfDPSVdJAqhQ4K8IUAMqexnsLJGP2Gkej/RNJSirF2z/9k="
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />

        <div className="relative z-10 w-full pb-24 md:pb-32">
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
                  href="tel:+4530342272"
                  className="inline-flex items-center bg-white/10 backdrop-blur text-white px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-colors"
                >
                  <Phone className="mr-2" size={16} />
                  30 34 22 72
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Curved transition to next section */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="var(--background)"/>
          </svg>
        </div>
      </section>

      {/* ===== PRODUCTS — Visual cards ===== */}
      <section className="pt-8 pb-20 md:pt-12 md:pb-28 bg-background -mt-1">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-5xl text-primary mb-12">
              Vores tilbud
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* AFTER HOURS */}
            <ScrollReveal delay={100}>
              <a
                href="tel:+4530342272"
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden block"
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
                  <span className="inline-flex items-center text-accent-light text-sm">
                    <Phone size={14} className="mr-2" />
                    30 34 22 72
                  </span>
                </div>
              </a>
            </ScrollReveal>

            {/* MØDELOKALE */}
            <ScrollReveal delay={200}>
              <Link
                href="/book"
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden block"
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
            </ScrollReveal>

            {/* KONTORPLADS */}
            <ScrollReveal delay={300}>
              <Link
                href="/kontakt?emne=office"
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden block"
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
            </ScrollReveal>

            {/* PODCAST STUDIE */}
            <ScrollReveal delay={400}>
              <a
                href="https://theofficestudio.dk/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden block"
              >
                <Image
                  src="/images/podcast/podcast-studio.jpg"
                  alt="Podcast Studie"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-2 bg-purple-600 text-white text-xs px-3 py-1.5 rounded-full">
                    <Mic size={12} />
                    Studio
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white/60 text-sm mb-1">Lydisoleret rum</p>
                  <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">Podcast Studie</h3>
                  <p className="text-white/70 text-sm mb-4">Professionelt udstyr inkl.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-white text-sm">Se mere på theofficestudio.dk</span>
                    <ArrowRight className="text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" size={20} />
                  </div>
                </div>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== AFTER HOURS HIGHLIGHT ===== */}
      <section className="py-20 md:py-28 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <p className="text-accent-light text-sm tracking-[0.2em] uppercase mb-4">After Hours</p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                Dit kontor,<br />
                <span className="italic text-accent-light">din tid</span>
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-lg">
                Ikke alle arbejder 9-17. Vores 6 kontorer står tomme aften og weekend —
                hvorfor ikke bruge dem?
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <Clock className="mx-auto mb-2 text-accent-light" size={24} />
                  <p className="text-sm text-white/70">Fleksible tider</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <Users className="mx-auto mb-2 text-accent-light" size={24} />
                  <p className="text-sm text-white/70">6 kontorer</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <Coffee className="mx-auto mb-2 text-accent-light" size={24} />
                  <p className="text-sm text-white/70">Alle faciliteter</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={100}>
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-2xl" />
                <div className="relative bg-white/10 backdrop-blur rounded-2xl p-8 md:p-10 text-center">
                  <p className="text-accent-light text-sm tracking-wider uppercase mb-4">Ring til os</p>
                  <a
                    href="tel:+4530342272"
                    className="block text-4xl md:text-5xl font-bold mb-4 hover:text-accent-light transition-colors"
                  >
                    30 34 22 72
                  </a>
                  <p className="text-white/60 mb-6">Vi finder en løsning der passer dig</p>
                  <Link
                    href="/kontakt?emne=afterhours"
                    className="inline-flex items-center text-accent-light hover:text-white transition-colors text-sm"
                  >
                    Eller send en besked
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== MEETING ROOM HIGHLIGHT ===== */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/meeting/meeting-room.jpg"
            alt="Mødelokale"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-xl">
            <ScrollReveal>
              <p className="text-accent-light text-sm tracking-[0.2em] uppercase mb-4">Mødelokale</p>
              <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-6">
                Imponér dine kunder
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                Et professionelt rum med alt hvad du behøver.
                Whiteboard, projektor, videokonference og god kaffe.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm text-white/80">8 personer</span>
                <span className="bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm text-white/80">Projektor</span>
                <span className="bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm text-white/80">Whiteboard</span>
                <span className="bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm text-white/80">Kaffe</span>
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <Link
                  href="/book"
                  className="inline-flex items-center bg-white text-primary px-6 py-3 rounded-full font-medium hover:bg-accent-light transition-colors"
                >
                  Book nu
                  <ArrowRight className="ml-2" size={18} />
                </Link>
                <div className="text-white">
                  <span className="text-2xl font-semibold">{PRICING.meeting_room.guest_per_day} kr</span>
                  <span className="text-white/60 text-sm ml-2">/ dag</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-5xl text-primary mb-6">
              Klar til at komme i gang?
            </h2>
            <p className="text-lg text-warm-gray mb-10">
              Book mødelokale online, ring om After Hours,
              eller kom forbi til en rundvisning.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/book"
                className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-accent-hover transition-colors"
              >
                Book mødelokale
                <ArrowRight className="ml-2" size={18} />
              </Link>
              <a
                href="tel:+4530342272"
                className="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-4 rounded-full font-medium hover:bg-primary hover:text-white transition-colors"
              >
                <Phone className="mr-2" size={18} />
                30 34 22 72
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-warm-gray">
              <MapPin size={16} />
              <span>Martensens Allé 8, 1828 Frederiksberg</span>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
