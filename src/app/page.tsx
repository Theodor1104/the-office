'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone, Clock, Users, MapPin, ArrowUpRight } from 'lucide-react'
import { PRICING } from '@/lib/types'
import ScrollReveal from '@/components/ScrollReveal'
import Marquee from '@/components/Marquee'

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* ===== HERO — Editorial, asymmetric ===== */}
      <section className="min-h-screen bg-primary relative flex flex-col">
        {/* Background image with parallax feel */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="The Office"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/80" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: '-4s' }} />

        {/* Main content */}
        <div className="relative z-10 flex-1 flex items-center">
          <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-32">
            <div className="grid lg:grid-cols-12 gap-8 items-end">
              {/* Left: Main headline */}
              <div className="lg:col-span-7">
                <p className="text-accent-light/80 text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in">
                  Frederiksberg · 2 min fra metro
                </p>
                <h1 className="text-white leading-[0.9] animate-fade-in-up">
                  <span className="block font-serif text-6xl md:text-8xl lg:text-[120px]">
                    The
                  </span>
                  <span className="block font-serif text-6xl md:text-8xl lg:text-[120px] italic text-accent-light">
                    Office
                  </span>
                </h1>
              </div>

              {/* Right: Intro + CTA */}
              <div className="lg:col-span-5 animate-fade-in-up delay-200">
                <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-8">
                  Mødelokale til kundemøder.<br />
                  Kontorplads i fællesskab.<br />
                  <span className="text-accent-light">After Hours — dit kontor, din tid.</span>
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/book"
                    className="group inline-flex items-center bg-white text-primary px-6 py-4 rounded-full font-semibold hover:bg-accent-light transition-all duration-300"
                  >
                    Book mødelokale
                    <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                  </Link>
                  <a
                    href="tel:+4571998877"
                    className="group inline-flex items-center border border-white/30 text-white px-6 py-4 rounded-full font-semibold hover:bg-white/10 transition-all"
                  >
                    <Phone className="mr-2" size={18} />
                    71 99 88 77
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Quick stats */}
        <div className="relative z-10 border-t border-white/10">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6">
            <div className="flex flex-wrap justify-between gap-8 text-white/60 text-sm">
              <span>Mødelokale fra <strong className="text-white">{PRICING.meeting_room.guest_per_day} kr/dag</strong></span>
              <span>Kontorplads fra <strong className="text-white">{PRICING.office.single_desk.toLocaleString('da-DK')} kr/md</strong></span>
              <span>After Hours: <strong className="text-accent-light">Ring for pris</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MARQUEE DIVIDER ===== */}
      <div className="bg-accent py-4 overflow-hidden">
        <Marquee
          text="MØDELOKALE · AFTER HOURS · KONTORPLADS · FREDERIKSBERG ·"
          className="text-white/90 text-sm tracking-[0.2em] font-medium"
        />
      </div>

      {/* ===== BENTO GRID — 3 Products ===== */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <p className="text-accent text-sm tracking-[0.2em] uppercase mb-4">Vores tilbud</p>
            <h2 className="font-serif text-4xl md:text-6xl text-primary mb-16 max-w-3xl">
              Tre måder at arbejde hos os
            </h2>
          </ScrollReveal>

          {/* Bento Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* AFTER HOURS — Large featured card */}
            <ScrollReveal delay={100} className="lg:col-span-2 lg:row-span-2">
              <a
                href="tel:+4571998877"
                className="group block h-full bg-primary text-white rounded-3xl p-8 md:p-12 relative overflow-hidden card-tilt"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-8">
                    <div className="inline-flex items-center gap-2 bg-accent/30 text-white px-4 py-2 rounded-full text-sm">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      Nyt tilbud
                    </div>
                    <ArrowUpRight className="text-white/40 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={32} />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-serif text-4xl md:text-6xl mb-4">
                      After<br />Hours
                    </h3>
                    <p className="text-xl text-accent-light mb-6 max-w-md">
                      6 kontorer tilgængelige aften og weekend. Perfekt til dig der arbejder på andre tidspunkter.
                    </p>
                  </div>

                  <div className="mt-auto">
                    <div className="flex items-center gap-4 mb-4">
                      <Clock className="text-accent-light" size={24} />
                      <span className="text-accent-light">Hverdage efter 17 · Hele weekenden</span>
                    </div>
                    <div className="flex items-center gap-4 text-2xl md:text-3xl font-semibold">
                      <Phone size={28} />
                      <span>71 99 88 77</span>
                    </div>
                    <p className="mt-2 text-sm text-accent-light">Ring og aftal en pris der passer dig</p>
                  </div>
                </div>
              </a>
            </ScrollReveal>

            {/* MØDELOKALE */}
            <ScrollReveal delay={200}>
              <Link
                href="/book"
                className="group block h-full bg-white rounded-3xl overflow-hidden card-tilt"
              >
                <div className="aspect-[4/3] relative img-hover-zoom">
                  <Image
                    src="/images/meeting/meeting-room.jpg"
                    alt="Mødelokale"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white/80 text-sm">Plads til 8 personer</p>
                    <p className="text-white text-2xl font-semibold">{PRICING.meeting_room.guest_per_day} kr/dag</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-serif text-2xl text-primary mb-2">Mødelokale</h3>
                      <p className="text-warm-gray text-sm">Whiteboard · Projektor · Kaffe</p>
                    </div>
                    <ArrowUpRight className="text-accent group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={24} />
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            {/* KONTORPLADS */}
            <ScrollReveal delay={300}>
              <Link
                href="/kontakt?emne=office"
                className="group block h-full bg-white rounded-3xl overflow-hidden relative card-tilt"
              >
                {/* Urgency badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="bg-red-500 text-white text-xs px-3 py-1.5 rounded-full font-semibold animate-pulse">
                    Kun 1 tilbage
                  </span>
                </div>

                <div className="aspect-[4/3] relative img-hover-zoom">
                  <Image
                    src="/images/office/office-main.jpg"
                    alt="Kontorplads"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white/80 text-sm">Fast plads + gratis mødelokale</p>
                    <p className="text-white text-2xl font-semibold">{PRICING.office.single_desk.toLocaleString('da-DK')} kr/md</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-serif text-2xl text-primary mb-2">Kontorplads</h3>
                      <p className="text-warm-gray text-sm">Ingen binding · Alle faciliteter</p>
                    </div>
                    <ArrowUpRight className="text-accent group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={24} />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== AFTER HOURS DEEP DIVE ===== */}
      <section className="bg-primary text-white py-24 md:py-40 relative overflow-hidden noise">
        {/* Animated background shapes */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-accent/10 shape-blob animate-blob" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/5 shape-organic animate-blob" style={{ animationDelay: '-5s' }} />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <ScrollReveal direction="left">
              <p className="text-accent-light text-sm tracking-[0.2em] uppercase mb-6">After Hours</p>
              <h2 className="font-serif text-5xl md:text-7xl leading-[1.1] mb-8">
                Dit kontor,<br />
                <span className="italic text-accent-light">din tid</span>
              </h2>
              <p className="text-xl text-white/70 leading-relaxed mb-12 max-w-lg">
                Ikke alle arbejder 9-17. Vores 6 kontorer står tomme aften og weekend —
                hvorfor ikke bruge dem? Ring og fortæl hvad du har brug for.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Fleksible tider</p>
                    <p className="text-white/60">Hverdage efter 17 · Hele weekenden</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Users size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">6 kontorer</p>
                    <p className="text-white/60">Fuldt udstyret · WiFi · Køkken</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Central beliggenhed</p>
                    <p className="text-white/60">2 min fra Frederiksberg Metro</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="relative">
                {/* Glow effect behind card */}
                <div className="absolute inset-0 bg-accent/30 rounded-3xl blur-3xl scale-90" />

                <div className="relative glass rounded-3xl p-10 md:p-12">
                  <p className="text-accent-light text-sm tracking-[0.2em] uppercase mb-6 text-center">
                    Interesseret?
                  </p>
                  <h3 className="font-serif text-3xl md:text-4xl text-center mb-4">
                    Ring til os
                  </h3>
                  <p className="text-center text-white/60 mb-10">
                    Vi finder en løsning der passer præcis til dig
                  </p>

                  <a
                    href="tel:+4571998877"
                    className="flex items-center justify-center gap-4 text-4xl md:text-5xl font-bold hover:text-accent-light transition-colors animate-glow-pulse rounded-2xl py-6"
                  >
                    <Phone size={40} />
                    <span className="number-lg">71 99 88 77</span>
                  </a>

                  <div className="mt-10 pt-8 border-t border-white/10 text-center">
                    <Link
                      href="/kontakt?emne=afterhours"
                      className="inline-flex items-center text-accent-light hover:text-white transition-colors text-reveal"
                    >
                      Eller send en besked
                      <ArrowRight className="ml-2" size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== MEETING ROOM — Immersive ===== */}
      <section className="relative min-h-screen flex items-center">
        {/* Full-bleed image */}
        <div className="absolute inset-0 img-hover-zoom">
          <Image
            src="/images/meeting/meeting-room.jpg"
            alt="Mødelokale"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 py-32">
          <div className="max-w-xl">
            <ScrollReveal>
              <p className="text-accent-light text-sm tracking-[0.2em] uppercase mb-6">Mødelokale</p>
              <h2 className="font-serif text-5xl md:text-7xl text-white leading-[1.1] mb-8">
                Imponér<br />
                <span className="italic">dine kunder</span>
              </h2>
              <p className="text-xl text-white/70 leading-relaxed mb-10">
                Et professionelt rum med alt hvad du behøver.
                Whiteboard, projektor, videokonference og god kaffe.
              </p>

              <div className="flex flex-wrap gap-4 mb-10 text-white/80">
                <span className="bg-white/10 px-4 py-2 rounded-full text-sm">8 personer</span>
                <span className="bg-white/10 px-4 py-2 rounded-full text-sm">Projektor</span>
                <span className="bg-white/10 px-4 py-2 rounded-full text-sm">Whiteboard</span>
                <span className="bg-white/10 px-4 py-2 rounded-full text-sm">Kaffe & te</span>
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <Link
                  href="/book"
                  className="group inline-flex items-center bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-accent-light transition-colors"
                >
                  Book lokalet
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <div className="text-white">
                  <p className="text-3xl font-semibold">{PRICING.meeting_room.guest_per_day} kr</p>
                  <p className="text-sm text-white/60">per dag · gratis for medlemmer</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== LAST OFFICE — Urgency ===== */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-3 order-2 lg:order-1">
              <ScrollReveal direction="left">
                <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-600 px-4 py-2 rounded-full text-sm mb-8">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="font-semibold">Kun 1 kontor tilbage</span>
                </div>

                <h2 className="font-serif text-4xl md:text-6xl text-primary leading-tight mb-6">
                  Den sidste plads<br />
                  <span className="italic text-accent">i fællesskabet</span>
                </h2>

                <p className="text-xl text-warm-gray leading-relaxed mb-10 max-w-xl">
                  Fast kontorplads med adgang til alt — køkken, lounge, mødelokale, WiFi.
                  Bliv en del af et lille, fokuseret fællesskab.
                </p>

                <div className="bg-white rounded-2xl p-6 md:p-8 mb-8 max-w-md">
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-sm text-warm-gray mb-1">Enkelt plads</p>
                      <p className="text-3xl font-semibold text-primary number-lg">{PRICING.office.single_desk.toLocaleString('da-DK')}<span className="text-lg font-normal text-warm-gray">/md</span></p>
                    </div>
                    <div>
                      <p className="text-sm text-warm-gray mb-1">Hele kontoret</p>
                      <p className="text-3xl font-semibold text-primary number-lg">{PRICING.office.full_room.toLocaleString('da-DK')}<span className="text-lg font-normal text-warm-gray">/md</span></p>
                      <p className="text-xs text-green-600 font-medium">Spar 2.000 kr</p>
                    </div>
                  </div>
                  <p className="text-sm text-warm-gray border-t border-accent-light/20 pt-4">
                    Ingen binding · 1 måneds opsigelse · Gratis mødelokale
                  </p>
                </div>

                <Link
                  href="/kontakt?emne=tour"
                  className="group inline-flex items-center bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-accent-hover transition-colors"
                >
                  Book en rundvisning
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-2 order-1 lg:order-2">
              <ScrollReveal direction="right" delay={100}>
                <div className="relative">
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden img-hover-zoom">
                    <Image
                      src="/images/office/office-main.jpg"
                      alt="Kontorplads"
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Floating card */}
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
                    <p className="text-sm text-warm-gray">Inkluderet</p>
                    <p className="text-lg font-semibold text-primary">Gratis mødelokale</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LOCATION — Minimal ===== */}
      <section className="py-16 bg-white border-t border-accent-light/20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal direction="scale">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <MapPin className="text-accent" size={20} />
                </div>
                <div>
                  <p className="font-serif text-xl text-primary">Martensens Allé 8, kælderen</p>
                  <p className="text-warm-gray">1828 Frederiksberg · 2 min fra metro</p>
                </div>
              </div>
              <Link
                href="/kontakt"
                className="inline-flex items-center text-accent hover:text-primary transition-colors text-reveal"
              >
                Se på kort
                <ArrowUpRight className="ml-2" size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-6xl text-primary mb-6">
              Klar til at<br />
              <span className="italic">komme i gang?</span>
            </h2>
            <p className="text-xl text-warm-gray mb-12">
              Book mødelokale online, ring om After Hours,<br className="hidden md:block" />
              eller kom forbi til en rundvisning.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/book"
                className="group inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-accent-hover transition-colors"
              >
                Book mødelokale
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <a
                href="tel:+4571998877"
                className="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                <Phone className="mr-2" size={18} />
                71 99 88 77
              </a>
            </div>

            <Link
              href="/priser"
              className="inline-flex items-center text-accent hover:text-primary transition-colors text-reveal"
            >
              Se alle priser
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
