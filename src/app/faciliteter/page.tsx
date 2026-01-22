import Link from 'next/link'
import Image from 'next/image'
import {
  Wifi,
  Coffee,
  Monitor,
  Users,
  Mic,
  Presentation,
  Sofa,
  UtensilsCrossed,
  ArrowRight
} from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Faciliteter - Mødelokale, Podcast Studie & Mere',
  description: 'Oplev vores moderne faciliteter: Professionelt mødelokale til 8 personer, lydtæt podcast studie, højhastigheds WiFi, køkken og lounge. Alt inkluderet.',
  keywords: ['coworking faciliteter', 'mødelokale Frederiksberg', 'podcast studie København', 'kontorfællesskab faciliteter'],
  alternates: {
    canonical: 'https://theofficeee.netlify.app/faciliteter',
  },
}

export default function FacilitiesPage() {
  const facilities = [
    {
      icon: Presentation,
      name: 'Mødelokale',
      description: 'Professionelt mødelokale med plads til 8 personer. Perfekt til kundemøder, workshops og brainstorms.',
      features: ['Whiteboard', 'Projektor/skærm', 'Videokonference-udstyr', 'Kaffe & te'],
      image: '/images/meeting/meeting-room.jpg'
    },
    {
      icon: Mic,
      name: 'Podcast Studie',
      description: 'Fuldt udstyret podcast studie med professionel lydkvalitet. Book med eller uden tekniker.',
      features: ['Professionelt lydudstyr', 'Lydtæt rum', 'Video add-on muligt', 'Post-production service'],
      image: '/images/podcast/studio-main.jpg'
    },
    {
      icon: UtensilsCrossed,
      name: 'Køkken',
      description: 'Moderne, fuldt udstyret køkken med alt du behøver til din arbejdsdag.',
      features: ['Køleskab', 'Mikrobølgeovn', 'Opvaskemaskine', 'Gratis kaffe & te'],
      image: '/images/kitchen/kitchen.jpg'
    },
    {
      icon: Sofa,
      name: 'Lounge',
      description: 'Komfortabel lounge til pauser, uformelle møder og netværk med andre medlemmer.',
      features: ['Behagelige sofaer', 'Læsehjørne', 'Naturligt lys', 'Planter & grønt'],
      image: '/images/lounge/lounge.jpg'
    },
  ]

  const amenities = [
    { icon: Wifi, name: 'Højhastigheds WiFi', description: 'Stabilt og hurtigt internet i hele huset' },
    { icon: Monitor, name: 'Ergonomiske arbejdspladser', description: 'Hæve-sænke borde og kvalitetsstole' },
    { icon: Coffee, name: 'Gratis kaffe & te', description: 'Frisk kaffe og udvalg af te hele dagen' },
    { icon: Users, name: 'Fællesarealer', description: 'Plads til at mødes og netværke' },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-light">
            Vores <span className="font-semibold">faciliteter</span>
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl">
            Alt hvad du behøver for en produktiv arbejdsdag.
            Moderne indretning, professionelt udstyr og en atmosfære,
            der fremmer kreativitet og fokus.
          </p>
        </div>
      </section>

      {/* Main Facilities */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {facilities.map((facility) => (
              <div key={facility.name} className="bg-background rounded-lg overflow-hidden">
                <div className="aspect-video relative">
                  {facility.image ? (
                    <Image src={facility.image} alt={facility.name} fill className="object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary to-[#2a2a4e] flex items-center justify-center">
                      <facility.icon size={80} className="text-white" />
                    </div>
                  )}
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-primary">{facility.name}</h3>
                  <p className="mt-3 text-gray-600">{facility.description}</p>
                  <ul className="mt-4 grid grid-cols-2 gap-2">
                    {facility.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <span className="text-green-600 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-primary">
              Inkluderet i alle <span className="font-semibold">kontorpladser</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((amenity) => (
              <div key={amenity.name} className="bg-white rounded-lg p-6 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <amenity.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-semibold text-primary mb-2">{amenity.name}</h3>
                <p className="text-sm text-gray-600">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light text-primary">
                Perfekt <span className="font-semibold">beliggenhed</span>
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Vi ligger i hjertet af Frederiksberg, kun 2 minutters gang fra
                metroen. Det gør det nemt at komme til og fra - både for dig
                og dine kunder.
              </p>
              <div className="mt-6 p-4 bg-secondary/30 rounded-lg">
                <p className="font-semibold text-primary">Adresse</p>
                <p className="text-gray-600">Martensens Allé 8, kælderen</p>
                <p className="text-gray-600">1828 Frederiksberg</p>
              </div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center text-gray-600">
                  <span className="text-green-600 mr-3">✓</span>
                  2 min til Frederiksberg Metro
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-green-600 mr-3">✓</span>
                  Tæt på buslinjer
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-green-600 mr-3">✓</span>
                  Caféer og frokost i nærheden
                </li>
              </ul>
            </div>
            <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
              <div className="text-center text-gray-500">
                <p className="text-sm">Google Maps embed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light">
            Klar til at se <span className="font-semibold text-white">faciliteterne?</span>
          </h2>
          <p className="mt-6 text-lg text-gray-300">
            Book en rundvisning eller start med at booke et lokale i dag.
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
