import Link from 'next/link'
import { ArrowRight, Check, Star } from 'lucide-react'
import { PRICING } from '@/lib/types'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Priser - Kontorplads & Mødelokale',
  description: 'Se priser for kontorplads fra 2.500 kr/md og mødelokale fra 750 kr/dag. Medlemmer booker gratis. Ingen binding.',
  keywords: ['kontorplads pris', 'mødelokale pris København', 'coworking priser Frederiksberg'],
  alternates: {
    canonical: 'https://theofficeee.netlify.app/priser',
  },
}

export default function PricingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif">
            Vores <span className="font-semibold">priser</span>
          </h1>
          <p className="mt-6 text-xl text-accent-light max-w-2xl">
            Gennemsigtige priser uden overraskelser.
            Medlemmer med kontorplads får gratis adgang til mødelokale.
          </p>
        </div>
      </section>

      {/* Office Space Pricing */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="bg-red-600 text-white text-sm px-3 py-1 rounded-full animate-pulse">Sidste ledige kontor!</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-serif text-primary">
              Kontorpladser
            </h2>
            <p className="mt-4 text-warm-gray max-w-2xl mx-auto">
              Fast kontorplads med adgang til alle faciliteter.
              Som medlem får du gratis booking af mødelokale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Single Desk */}
            <div className="bg-background rounded-xl p-8">
              <h3 className="text-xl font-semibold text-primary">Enkelt kontorplads</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-primary">{PRICING.office.single_desk.toLocaleString('da-DK')}</span>
                <span className="text-warm-gray"> kr/måned</span>
              </div>
              <p className="mt-4 text-warm-gray">
                Din egen faste plads i vores fælles kontorlandskab.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center text-sm text-warm-gray">
                  <Check className="text-green-600 mr-2" size={16} />
                  Fast skrivebord
                </li>
                <li className="flex items-center text-sm text-warm-gray">
                  <Check className="text-green-600 mr-2" size={16} />
                  Ergonomisk stol
                </li>
                <li className="flex items-center text-sm text-warm-gray">
                  <Check className="text-green-600 mr-2" size={16} />
                  Gratis mødelokale
                </li>
                <li className="flex items-center text-sm text-warm-gray">
                  <Check className="text-green-600 mr-2" size={16} />
                  Adgang til køkken & lounge
                </li>
                <li className="flex items-center text-sm text-warm-gray">
                  <Check className="text-green-600 mr-2" size={16} />
                  Højhastigheds WiFi
                </li>
              </ul>
              <Link
                href="/kontakt?emne=tour"
                className="mt-8 block text-center bg-primary text-white py-3 rounded-lg font-semibold hover:bg-accent-hover transition-colors"
              >
                Book en rundvisning
              </Link>
            </div>

            {/* Full Room */}
            <div className="bg-primary text-white rounded-xl p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Star className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Hele rummet (4 pladser)</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold">{PRICING.office.full_room.toLocaleString('da-DK')}</span>
                <span className="text-accent-light"> kr/måned</span>
              </div>
              <p className="mt-2 text-white text-sm">Spar 2.000 kr/måned</p>
              <p className="mt-4 text-accent-light">
                Perfekt til et lille team. Få jeres eget dedikerede rum.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center text-sm text-accent-light">
                  <Check className="text-green-600 mr-2" size={16} />
                  4 faste skriveborde
                </li>
                <li className="flex items-center text-sm text-accent-light">
                  <Check className="text-green-600 mr-2" size={16} />
                  Privat rum
                </li>
                <li className="flex items-center text-sm text-accent-light">
                  <Check className="text-green-600 mr-2" size={16} />
                  Gratis mødelokale
                </li>
                <li className="flex items-center text-sm text-accent-light">
                  <Check className="text-green-600 mr-2" size={16} />
                  Alle faciliteter inkluderet
                </li>
                <li className="flex items-center text-sm text-accent-light">
                  <Check className="text-green-600 mr-2" size={16} />
                  Mulighed for branding
                </li>
              </ul>
              <Link
                href="/kontakt?emne=tour"
                className="mt-8 block text-center bg-secondary text-primary py-3 rounded-lg font-semibold hover:bg-white transition-colors"
              >
                Book en rundvisning
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* After Hours Pricing */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="bg-accent text-white text-sm px-3 py-1 rounded-full">Nyt tilbud</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-serif text-primary">
              After Hours
            </h2>
            <p className="mt-4 text-warm-gray max-w-2xl mx-auto">
              Brug vores kontorer aften og weekend. Alle 6 kontorer er ledige uden for normal åbningstid.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-primary text-white rounded-xl p-8">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">Aften & Weekend</h3>
                  <p className="mt-2 text-accent-light">Kontorplads efter kl. 17 på hverdage og hele weekenden</p>
                </div>
              </div>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center text-sm text-accent-light">
                  <Check className="text-green-400 mr-2" size={16} />
                  6 fuldt udstyrede kontorer
                </li>
                <li className="flex items-center text-sm text-accent-light">
                  <Check className="text-green-400 mr-2" size={16} />
                  WiFi, køkken & alle faciliteter
                </li>
                <li className="flex items-center text-sm text-accent-light">
                  <Check className="text-green-400 mr-2" size={16} />
                  Fleksibel aftale — ring og hør nærmere
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-accent-light text-sm mb-2">Ring og aftal en pris der passer dig:</p>
                <a
                  href="tel:+4530342272"
                  className="inline-flex items-center text-xl font-bold text-white hover:text-accent-light transition-colors"
                >
                  +45 30 34 22 72
                </a>
              </div>
              <Link
                href="/kontakt?emne=afterhours"
                className="mt-6 block text-center bg-secondary text-primary py-3 rounded-lg font-semibold hover:bg-white transition-colors"
              >
                Kontakt os om After Hours
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Meeting Room Pricing */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-primary">
              Mødelokale
            </h2>
            <p className="mt-4 text-warm-gray">
              Professionelt mødelokale til kundemøder, workshops og brainstorms
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-background rounded-xl p-8 shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-primary">Dagsleje</h3>
                  <p className="mt-2 text-warm-gray">Fuld dag med adgang til alle faciliteter</p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-bold text-primary">{PRICING.meeting_room.guest_per_day}</span>
                  <span className="text-warm-gray"> kr</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-accent-light/30">
                <div className="flex items-center justify-between">
                  <span className="text-warm-gray">Medlemspris (har kontorplads)</span>
                  <span className="text-green-600 font-semibold">Gratis</span>
                </div>
              </div>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center text-sm text-warm-gray">
                  <Check className="text-green-600 mr-2" size={16} />
                  Plads til 8 personer
                </li>
                <li className="flex items-center text-sm text-warm-gray">
                  <Check className="text-green-600 mr-2" size={16} />
                  Whiteboard & projektor
                </li>
                <li className="flex items-center text-sm text-warm-gray">
                  <Check className="text-green-600 mr-2" size={16} />
                  Kaffe & te inkluderet
                </li>
              </ul>
              <Link
                href="/book"
                className="mt-8 block text-center bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Book mødelokale
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif">
            Klar til at komme <span className="font-semibold text-white">i gang?</span>
          </h2>
          <p className="mt-6 text-lg text-accent-light">
            Book en gratis rundvisning, book mødelokale eller ring om after hours.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt?emne=tour"
              className="inline-flex items-center justify-center bg-secondary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white transition-colors"
            >
              Book en rundvisning
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              href="/book"
              className="inline-flex items-center justify-center border-2 border-accent-light/40 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Book mødelokale
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
