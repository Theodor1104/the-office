import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone, Clock, Users, MapPin, Presentation, ChevronDown } from 'lucide-react'
import { PRICING } from '@/lib/types'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Office | Mødelokale & Kontorplads i Frederiksberg',
  description: 'Book mødelokale fra 750 kr/dag. Lej den sidste kontorplads. After Hours: 6 kontorer aften & weekend. 2 min fra Frederiksberg Metro.',
  keywords: ['mødelokale Frederiksberg', 'kontorplads København', 'coworking', 'after hours kontor'],
  alternates: {
    canonical: 'https://theofficeee.netlify.app',
  },
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* ===== HERO — Cinematic, minimal ===== */}
      <section className="relative min-h-screen flex items-center justify-center bg-primary">
        <Image
          src="/images/hero.jpg"
          alt="The Office"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-accent-light text-sm tracking-[0.3em] uppercase mb-6 animate-fade-in">
            Frederiksberg
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] animate-fade-in-up">
            Dit næste
            <span className="block font-semibold italic">arbejdssted</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-accent-light/90 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Mødelokale · Kontorplads · After Hours
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
            <Link
              href="/book"
              className="group inline-flex items-center justify-center bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-accent-light transition-all duration-300"
            >
              Book mødelokale
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <a
              href="tel:+4571998877"
              className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
            >
              <Phone className="mr-2" size={18} />
              Ring til os
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <ChevronDown className="text-white/50" size={32} />
        </div>
      </section>

      {/* ===== 3 PRODUCTS — Visual hierarchy ===== */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-primary">
              Tre måder at bruge <span className="italic">The Office</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Meeting Room Card */}
            <Link href="/book" className="group card-premium p-8 hover-lift">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <Presentation className="text-accent" size={24} />
              </div>
              <h3 className="font-serif text-2xl text-primary mb-2">Mødelokale</h3>
              <p className="text-warm-gray mb-4">
                Professionelt rum til 8 personer. Perfekt til kundemøder og workshops.
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-semibold text-primary">{PRICING.meeting_room.guest_per_day}</span>
                <span className="text-warm-gray">kr/dag</span>
              </div>
              <p className="text-sm text-green-600 mt-1">Gratis for medlemmer</p>
              <div className="mt-6 flex items-center text-accent font-medium group-hover:text-primary transition-colors">
                Book nu <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={18} />
              </div>
            </Link>

            {/* After Hours Card — Featured */}
            <a href="tel:+4571998877" className="group relative card-premium p-8 hover-lift bg-primary text-white overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="bg-accent text-white text-xs px-3 py-1 rounded-full font-semibold">
                  Populær
                </span>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                <Clock className="text-white" size={24} />
              </div>
              <h3 className="font-serif text-2xl mb-2">After Hours</h3>
              <p className="text-accent-light mb-4">
                6 kontorer tilgængelige aften og weekend. Fleksibel løsning.
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-semibold">Ring for pris</span>
              </div>
              <p className="text-sm text-accent-light mt-1">Skræddersyet til dig</p>
              <div className="mt-6 flex items-center text-accent-light font-medium group-hover:text-white transition-colors">
                <Phone className="mr-2" size={18} />
                +45 71 99 88 77
              </div>
            </a>

            {/* Office Card */}
            <Link href="/kontakt?emne=office" className="group card-premium p-8 hover-lift relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-semibold animate-pulse">
                  Sidste plads
                </span>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <Users className="text-accent" size={24} />
              </div>
              <h3 className="font-serif text-2xl text-primary mb-2">Kontorplads</h3>
              <p className="text-warm-gray mb-4">
                Fast plads i fællesskabet. Alle faciliteter og gratis mødelokale.
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-semibold text-primary">{PRICING.office.single_desk.toLocaleString('da-DK')}</span>
                <span className="text-warm-gray">kr/md</span>
              </div>
              <p className="text-sm text-warm-gray mt-1">Ingen binding</p>
              <div className="mt-6 flex items-center text-accent font-medium group-hover:text-primary transition-colors">
                Kontakt os <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={18} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== MEETING ROOM — Immersive ===== */}
      <section className="relative">
        <div className="grid lg:grid-cols-2 min-h-[80vh]">
          {/* Image */}
          <div className="relative h-[50vh] lg:h-auto img-hover-zoom">
            <Image
              src="/images/meeting/meeting-room.jpg"
              alt="Mødelokale"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/20 lg:bg-gradient-to-l" />
          </div>

          {/* Content */}
          <div className="bg-white flex items-center">
            <div className="px-8 lg:px-16 py-16 lg:py-24 max-w-xl">
              <span className="text-accent text-sm tracking-[0.2em] uppercase">Mødelokale</span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl text-primary leading-tight">
                Imponér dine kunder
              </h2>
              <p className="mt-6 text-lg text-warm-gray leading-relaxed">
                Et professionelt rum med alt hvad du behøver. Whiteboard, projektor,
                videokonference og god kaffe — vi har tænkt på det hele.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-sm text-primary">Plads til 8</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-sm text-primary">Projektor</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-sm text-primary">Whiteboard</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-sm text-primary">Kaffe & te</span>
                </div>
              </div>

              <div className="mt-10 flex items-center gap-6">
                <Link
                  href="/book"
                  className="group inline-flex items-center bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-accent-hover transition-colors"
                >
                  Book lokalet
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
                <div>
                  <p className="text-2xl font-semibold text-primary">{PRICING.meeting_room.guest_per_day} kr</p>
                  <p className="text-sm text-warm-gray">per dag</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== AFTER HOURS — The Star ===== */}
      <section className="bg-primary text-white py-24 md:py-32 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-light px-4 py-2 rounded-full text-sm mb-8">
                <Clock size={16} />
                <span>Nyt tilbud</span>
              </div>

              <h2 className="font-serif text-4xl md:text-6xl leading-tight">
                After Hours
              </h2>
              <p className="mt-2 font-serif text-4xl md:text-6xl italic text-accent-light">
                Dit kontor, din tid
              </p>

              <p className="mt-8 text-xl text-accent-light/80 leading-relaxed max-w-lg">
                Alle 6 kontorer er ledige aften og weekend. Perfekt til dig der
                arbejder på andre tidspunkter — eller bare har brug for ro.
              </p>

              <div className="mt-12 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    <Clock className="text-accent-light" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Fleksible tider</p>
                    <p className="text-sm text-accent-light/70">Hverdage efter 17 · Hele weekenden</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    <Users className="text-accent-light" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">6 kontorer</p>
                    <p className="text-sm text-accent-light/70">Fuldt udstyret · Ergonomiske møbler</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    <MapPin className="text-accent-light" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Central beliggenhed</p>
                    <p className="text-sm text-accent-light/70">2 min fra Frederiksberg Metro</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 text-center">
                <p className="text-accent-light text-sm tracking-[0.2em] uppercase mb-4">Interesseret?</p>
                <h3 className="font-serif text-3xl md:text-4xl mb-4">Ring og hør mere</h3>
                <p className="text-accent-light/70 mb-8">
                  Vi finder en løsning der passer præcis til dig
                </p>
                <a
                  href="tel:+4571998877"
                  className="inline-flex items-center justify-center text-3xl md:text-4xl font-bold hover:text-accent-light transition-colors"
                >
                  <Phone className="mr-4" size={32} />
                  71 99 88 77
                </a>
                <div className="mt-8 pt-8 border-t border-white/10">
                  <Link
                    href="/kontakt?emne=afterhours"
                    className="inline-flex items-center text-accent-light hover:text-white transition-colors"
                  >
                    Eller send en besked
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LAST OFFICE — Urgency ===== */}
      <section className="py-24 md:py-32 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-600 px-4 py-2 rounded-full text-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="font-medium">Kun 1 kontor tilbage</span>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight">
                Den sidste plads i fællesskabet
              </h2>
              <p className="mt-6 text-lg text-warm-gray leading-relaxed">
                Bliv en del af et lille, fokuseret fællesskab. Fast kontorplads,
                alle faciliteter, og gratis adgang til mødelokalet når du har brug for det.
              </p>

              <div className="mt-10 p-6 bg-white rounded-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-warm-gray">Enkelt plads</p>
                    <p className="text-3xl font-semibold text-primary">{PRICING.office.single_desk.toLocaleString('da-DK')} kr<span className="text-lg font-normal text-warm-gray">/md</span></p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-warm-gray">Hele kontoret</p>
                    <p className="text-3xl font-semibold text-primary">{PRICING.office.full_room.toLocaleString('da-DK')} kr<span className="text-lg font-normal text-warm-gray">/md</span></p>
                    <p className="text-xs text-green-600">Spar 2.000 kr</p>
                  </div>
                </div>
                <div className="border-t border-accent-light/20 pt-4 mt-4">
                  <p className="text-sm text-warm-gray">
                    Ingen binding · Opsig med 1 måneds varsel · Gratis mødelokale
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/kontakt?emne=tour"
                  className="group inline-flex items-center bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-accent-hover transition-colors"
                >
                  Book en rundvisning
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden img-hover-zoom">
                <Image
                  src="/images/office/office-main.jpg"
                  alt="Kontorplads"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LOCATION — Simple ===== */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 text-accent mb-4">
            <MapPin size={20} />
            <span className="text-sm tracking-[0.2em] uppercase">Beliggenhed</span>
          </div>
          <p className="font-serif text-2xl md:text-3xl text-primary">
            Martensens Allé 8, kælderen<br />
            <span className="text-warm-gray">1828 Frederiksberg</span>
          </p>
          <p className="mt-4 text-warm-gray">2 minutters gang fra Frederiksberg Metro</p>
        </div>
      </section>

      {/* ===== FINAL CTA — Clean ===== */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-primary">
            Klar til at komme i gang?
          </h2>
          <p className="mt-6 text-lg text-warm-gray">
            Book mødelokale online, ring om After Hours, eller kom forbi til en rundvisning.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="group inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-accent-hover transition-colors"
            >
              Book mødelokale
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
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
            className="inline-block mt-8 text-accent hover:text-primary transition-colors"
          >
            Se alle priser →
          </Link>
        </div>
      </section>
    </div>
  )
}
