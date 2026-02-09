import Link from 'next/link'
import Image from 'next/image'
import { Users, ArrowRight, Presentation, Phone, Clock, Building2, Check } from 'lucide-react'
import { PRICING } from '@/lib/types'
import { Metadata } from 'next'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'Coworking Space i Frederiksberg | The Office',
  description: 'The Office er dit professionelle coworking space i Frederiksberg. Book mødelokale fra 750 kr/dag eller lej kontorplads. 2 min fra metroen. Book en rundvisning!',
  keywords: ['coworking Frederiksberg', 'kontorfællesskab København', 'mødelokale leje', 'kontorplads Frederiksberg', 'mødelokale Frederiksberg'],
  alternates: {
    canonical: 'https://theofficeee.netlify.app',
  },
}

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary text-white min-h-[80vh] flex items-center">
        <Image
          src="/images/hero.jpg"
          alt="The Office coworking space"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-primary/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
              Dit professionelle
              <span className="block font-semibold">coworking space</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-accent-light max-w-2xl">
              Book mødelokale til dine kunder, lej kontorplads i fællesskabet, eller brug vores kontorer after hours — i hjertet af Frederiksberg.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                className="inline-flex items-center justify-center bg-secondary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white transition-colors"
              >
                Book mødelokale
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                href="/kontakt?emne=tour"
                className="inline-flex items-center justify-center border-2 border-accent-light/40 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Book en rundvisning
              </Link>
            </div>
            <Link
              href="/priser"
              className="inline-block mt-4 text-accent-light hover:text-white transition-colors text-sm underline underline-offset-4"
            >
              Se priser →
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section — 3 products */}
      <section className="py-12 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/book" className="group p-6 bg-white rounded-xl hover:bg-accent hover:text-white transition-all shadow-sm">
              <Presentation className="mb-3 text-accent group-hover:text-white" size={28} />
              <h3 className="font-semibold">Book mødelokale</h3>
              <p className="text-sm text-warm-gray group-hover:text-white/80 mt-1">Fra {PRICING.meeting_room.guest_per_day} kr/dag — gratis for medlemmer</p>
            </Link>
            <a href="tel:+4571998877" className="group p-6 bg-white rounded-xl hover:bg-primary hover:text-white transition-all shadow-sm">
              <Clock className="mb-3 text-accent group-hover:text-white" size={28} />
              <h3 className="font-semibold">After Hours kontorplads</h3>
              <p className="text-sm text-warm-gray group-hover:text-white/80 mt-1">6 kontorer — aften & weekend. Ring og hør mere</p>
            </a>
            <Link href="/kontakt?emne=office" className="group p-6 bg-white rounded-xl hover:bg-accent hover:text-white transition-all shadow-sm">
              <Users className="mb-3 text-accent group-hover:text-white" size={28} />
              <h3 className="font-semibold">Fast kontorplads</h3>
              <p className="text-sm text-warm-gray group-hover:text-white/80 mt-1">Fra {PRICING.office.single_desk.toLocaleString('da-DK')} kr/md — sidste kontor!</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-semibold text-primary">10+</p>
              <p className="mt-1 text-sm text-warm-gray">Medlemmer & virksomheder</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-semibold text-primary">50+</p>
              <p className="mt-1 text-sm text-warm-gray">Møder holdt</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-semibold text-primary">2 min</p>
              <p className="mt-1 text-sm text-warm-gray">Fra Frederiksberg Metro</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meeting Room Section — Hero-style, primary product */}
      <section className="relative bg-primary text-white">
        <div className="relative h-64 md:h-80">
          <Image
            src="/images/meeting/meeting-room.jpg"
            alt="Mødelokale hos The Office"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/80" />
          <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-8 pb-8">
            <div className="max-w-7xl mx-auto">
              <span className="text-accent-light text-sm font-semibold uppercase tracking-wider">Mødelokale</span>
              <h2 className="mt-2 font-serif text-4xl md:text-5xl leading-tight">
                Professionelle <span className="font-semibold">kundemøder</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-accent-light leading-relaxed">
                Imponér dine kunder i vores fuldt udstyrede mødelokale med plads til 8 personer.
                Whiteboard, projektor, videokonference-udstyr og kaffe — alt er klar til dig.
              </p>
              <ul className="mt-8 grid grid-cols-2 gap-3">
                <li className="flex items-center text-sm text-accent-light">
                  <Check className="text-green-400 mr-2 flex-shrink-0" size={16} />
                  Plads til 8 personer
                </li>
                <li className="flex items-center text-sm text-accent-light">
                  <Check className="text-green-400 mr-2 flex-shrink-0" size={16} />
                  Whiteboard & projektor
                </li>
                <li className="flex items-center text-sm text-accent-light">
                  <Check className="text-green-400 mr-2 flex-shrink-0" size={16} />
                  Videokonference-udstyr
                </li>
                <li className="flex items-center text-sm text-accent-light">
                  <Check className="text-green-400 mr-2 flex-shrink-0" size={16} />
                  Kaffe, te & vand
                </li>
                <li className="flex items-center text-sm text-accent-light">
                  <Check className="text-green-400 mr-2 flex-shrink-0" size={16} />
                  Højhastigheds WiFi
                </li>
                <li className="flex items-center text-sm text-accent-light">
                  <Check className="text-green-400 mr-2 flex-shrink-0" size={16} />
                  2 min fra metroen
                </li>
              </ul>
            </div>
            <div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-3xl font-bold">{PRICING.meeting_room.guest_per_day} kr</p>
                    <p className="text-sm text-accent-light">per dag</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-green-400">Gratis</p>
                    <p className="text-sm text-accent-light">for medlemmer</p>
                  </div>
                </div>
                <Link
                  href="/book"
                  className="block text-center bg-secondary text-primary py-4 rounded-lg font-semibold hover:bg-white transition-colors"
                >
                  Book mødelokale nu
                  <ArrowRight className="inline ml-2" size={18} />
                </Link>
              </div>
              <Link
                href="/faciliteter"
                className="mt-4 inline-block text-accent-light hover:text-white transition-colors text-sm underline underline-offset-4"
              >
                Se alle faciliteter →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* After Hours Section — Full-width, high visual impact */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center mb-12">
            <span className="bg-accent text-white text-sm px-4 py-1.5 rounded-full font-semibold">Nyt tilbud — After Hours</span>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-primary leading-tight">
              Brug kontoret <span className="font-semibold">aften & weekend</span>
            </h2>
            <p className="mt-4 text-lg text-warm-gray max-w-2xl mx-auto">
              Alle 6 kontorer er ledige uden for normal åbningstid. Perfekt til projektarbejde,
              studiegrupper, freelancere eller fokuserede arbejdssessions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="text-primary" size={28} />
              </div>
              <h3 className="font-semibold text-primary text-lg mb-2">6 kontorer</h3>
              <p className="text-sm text-warm-gray">Fuldt udstyrede arbejdspladser med ergonomiske møbler og alt du behøver</p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-primary" size={28} />
              </div>
              <h3 className="font-semibold text-primary text-lg mb-2">Aften & weekend</h3>
              <p className="text-sm text-warm-gray">Hverdage efter kl. 17 og hele weekenden. Fleksibel adgang der passer din kalender</p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="text-green-600" size={28} />
              </div>
              <h3 className="font-semibold text-primary text-lg mb-2">Alt inkluderet</h3>
              <p className="text-sm text-warm-gray">WiFi, køkken, kaffe, lounge og alle faciliteter er inkluderet i prisen</p>
            </div>
          </div>

          <div className="max-w-xl mx-auto bg-primary text-white rounded-2xl p-8 md:p-10 text-center">
            <p className="text-accent-light text-sm font-semibold uppercase tracking-wider mb-2">Fleksibel pris</p>
            <h3 className="font-serif text-2xl md:text-3xl mb-3">Ring og aftal en løsning</h3>
            <p className="text-accent-light mb-6">Vi skræddersyr en aftale der passer dit behov og budget</p>
            <a
              href="tel:+4571998877"
              className="inline-flex items-center justify-center text-2xl md:text-3xl font-bold text-white hover:text-accent-light transition-colors"
            >
              <Phone className="mr-3" size={28} />
              +45 71 99 88 77
            </a>
            <div className="mt-6 pt-6 border-t border-white/20">
              <Link
                href="/kontakt?emne=afterhours"
                className="inline-flex items-center bg-secondary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white transition-colors"
              >
                Eller skriv til os
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Office Space Section — Central but compact */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-accent text-sm font-semibold uppercase tracking-wider">Fast kontorplads</span>
                <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full animate-pulse">Sidste ledige kontor!</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-primary leading-tight">
                Bliv en del af <span className="font-semibold">fællesskabet</span>
              </h2>
              <p className="mt-4 text-warm-gray leading-relaxed">
                Fast kontorplads i dagtimerne med adgang til alle faciliteter.
                Lej en enkelt plads eller hele kontoret til dit team.
                Medlemmer booker mødelokale gratis.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-background rounded-xl p-4">
                  <p className="text-2xl font-semibold text-primary">
                    {PRICING.office.single_desk.toLocaleString('da-DK')} kr
                  </p>
                  <p className="text-sm text-warm-gray">/måned per plads</p>
                </div>
                <div className="bg-background rounded-xl p-4">
                  <p className="text-2xl font-semibold text-primary">
                    {PRICING.office.full_room.toLocaleString('da-DK')} kr
                  </p>
                  <p className="text-sm text-warm-gray">/måned — hele kontoret</p>
                  <p className="text-xs text-green-600 font-medium mt-1">Spar 2.000 kr/md</p>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/kontakt?emne=tour"
                  className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-hover transition-colors"
                >
                  Book en rundvisning
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <p className="mt-3 text-sm text-warm-gray">
                  Ingen binding · Opsig med 1 måneds varsel
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/office/office-main.jpg"
                alt="Kontorpladser hos The Office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-primary">
              Ofte stillede <span className="font-semibold">spørgsmål</span>
            </h2>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary">
            Klar til at se <span className="font-semibold">The Office?</span>
          </h2>
          <p className="mt-6 text-lg text-warm-gray">
            Book mødelokale, book en rundvisning eller ring til os om after hours.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-hover transition-colors"
            >
              Book mødelokale
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              href="/kontakt?emne=tour"
              className="inline-flex items-center justify-center border-2 border-primary/20 text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Book en rundvisning
            </Link>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-warm-gray">
            <Phone size={16} />
            <span className="text-sm">After hours?</span>
            <a href="tel:+4571998877" className="text-sm font-semibold text-primary hover:text-accent transition-colors">
              Ring +45 71 99 88 77
            </a>
          </div>
          <Link
            href="/priser"
            className="inline-block mt-4 text-accent hover:text-primary transition-colors text-sm underline underline-offset-4"
          >
            Se alle priser →
          </Link>
        </div>
      </section>
    </div>
  )
}
