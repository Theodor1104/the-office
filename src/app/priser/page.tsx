import Link from 'next/link'
import { ArrowRight, Check, Star } from 'lucide-react'
import { PRICING } from '@/lib/types'

export default function PricingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-light">
            Vores <span className="font-semibold">priser</span>
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl">
            Gennemsigtige priser uden overraskelser.
            Medlemmer med kontorplads får gratis adgang til mødelokale og podcast studie.
          </p>
        </div>
      </section>

      {/* Office Space Pricing */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full">Kun 4 pladser tilbage!</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-light text-primary">
              Kontorpladser
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Fast kontorplads med adgang til alle faciliteter.
              Som medlem får du gratis booking af mødelokale og podcast studie.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Single Desk */}
            <div className="bg-background rounded-lg p-8">
              <h3 className="text-xl font-semibold text-primary">Enkelt kontorplads</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-primary">{PRICING.office.single_desk.toLocaleString('da-DK')}</span>
                <span className="text-gray-500"> kr/måned</span>
              </div>
              <p className="mt-4 text-gray-600">
                Din egen faste plads i vores fælles kontorlandskab.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="text-green-600 mr-2" size={16} />
                  Fast skrivebord
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="text-green-600 mr-2" size={16} />
                  Ergonomisk stol
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="text-green-600 mr-2" size={16} />
                  Gratis mødelokale
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="text-green-600 mr-2" size={16} />
                  Gratis podcast studie
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="text-green-600 mr-2" size={16} />
                  Adgang til køkken & lounge
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="text-green-600 mr-2" size={16} />
                  Højhastigheds WiFi
                </li>
              </ul>
              <Link
                href="/kontakt"
                className="mt-8 block text-center bg-primary text-white py-3 rounded font-semibold hover:bg-primary/90 transition-colors"
              >
                Kontakt os
              </Link>
            </div>

            {/* Full Room */}
            <div className="bg-primary text-white rounded-lg p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Star className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Hele rummet (4 pladser)</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold">{PRICING.office.full_room.toLocaleString('da-DK')}</span>
                <span className="text-gray-300"> kr/måned</span>
              </div>
              <p className="mt-2 text-white text-sm">Spar 2.000 kr/måned</p>
              <p className="mt-4 text-gray-300">
                Perfekt til et lille team. Få jeres eget dedikerede rum.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center text-sm text-gray-300">
                  <Check className="text-green-600 mr-2" size={16} />
                  4 faste skriveborde
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <Check className="text-green-600 mr-2" size={16} />
                  Privat rum
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <Check className="text-green-600 mr-2" size={16} />
                  Gratis mødelokale
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <Check className="text-green-600 mr-2" size={16} />
                  Gratis podcast studie
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <Check className="text-green-600 mr-2" size={16} />
                  Alle faciliteter inkluderet
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <Check className="text-green-600 mr-2" size={16} />
                  Mulighed for branding
                </li>
              </ul>
              <Link
                href="/kontakt"
                className="mt-8 block text-center bg-white text-black py-3 rounded font-semibold hover:bg-gray-200 transition-colors"
              >
                Kontakt os
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Meeting Room Pricing */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-primary">
              Mødelokale
            </h2>
            <p className="mt-4 text-gray-600">
              Professionelt mødelokale til kundemøder, workshops og brainstorms
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-primary">Dagsleje</h3>
                  <p className="mt-2 text-gray-600">Fuld dag med adgang til alle faciliteter</p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-bold text-primary">{PRICING.meeting_room.guest_per_day}</span>
                  <span className="text-gray-500"> kr</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Medlemspris (har kontorplads)</span>
                  <span className="text-green-600 font-semibold">Gratis</span>
                </div>
              </div>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="text-green-600 mr-2" size={16} />
                  Plads til 8 personer
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="text-green-600 mr-2" size={16} />
                  Whiteboard & projektor
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="text-green-600 mr-2" size={16} />
                  Kaffe & te inkluderet
                </li>
              </ul>
              <Link
                href="/book"
                className="mt-8 block text-center bg-primary text-white py-3 rounded font-semibold hover:bg-primary/90 transition-colors"
              >
                Book mødelokale
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Podcast Pricing */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-primary">
              Podcast studie
            </h2>
            <p className="mt-4 text-gray-600">
              Professionelt udstyr og lydkvalitet til din podcast
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-primary">Service</th>
                  <th className="text-right py-4 px-4 font-semibold text-primary">Gæstepris</th>
                  <th className="text-right py-4 px-4 font-semibold text-primary">Medlemspris</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4">Time-leje</td>
                  <td className="py-4 px-4 text-right">{PRICING.podcast.guest_per_hour} kr/time</td>
                  <td className="py-4 px-4 text-right text-green-600 font-semibold">Gratis</td>
                </tr>
                <tr className="border-b border-gray-100 bg-accent/5">
                  <td className="py-4 px-4">
                    3-timers DIY pakke
                    <span className="ml-2 bg-white text-black text-xs px-2 py-0.5 rounded">Populær</span>
                  </td>
                  <td className="py-4 px-4 text-right">{PRICING.podcast.guest_3hour_package} kr</td>
                  <td className="py-4 px-4 text-right text-green-600 font-semibold">Gratis</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4">Med tekniker</td>
                  <td className="py-4 px-4 text-right">{PRICING.podcast.guest_with_technician} kr/time</td>
                  <td className="py-4 px-4 text-right text-green-600 font-semibold">Gratis</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4">Video add-on</td>
                  <td className="py-4 px-4 text-right">{PRICING.podcast.video_addon} kr/time</td>
                  <td className="py-4 px-4 text-right text-green-600 font-semibold">Gratis</td>
                </tr>
                <tr>
                  <td className="py-4 px-4">Post-production</td>
                  <td className="py-4 px-4 text-right">{PRICING.podcast.post_production} kr/time</td>
                  <td className="py-4 px-4 text-right">{PRICING.podcast.post_production} kr/time</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/podcast"
              className="inline-flex items-center text-primary font-semibold hover:underline"
            >
              Læs mere om podcast studiet <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light">
            Klar til at komme <span className="font-semibold text-white">i gang?</span>
          </h2>
          <p className="mt-6 text-lg text-gray-300">
            Kontakt os for at høre mere om kontorpladser, eller book direkte online.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded font-semibold hover:bg-gray-200 transition-colors"
            >
              Book lokale
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-4 rounded font-semibold hover:border-accent hover:text-white transition-colors"
            >
              Kontakt os
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
