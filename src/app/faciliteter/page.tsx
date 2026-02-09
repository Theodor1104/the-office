import Link from 'next/link'
import Image from 'next/image'
import {
  Wifi,
  Coffee,
  Monitor,
  Users,
  Presentation,
  Sofa,
  UtensilsCrossed,
  Mic,
  ArrowRight
} from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Faciliteter - Mødelokale, Køkken, Lounge & Podcast-studie',
  description: 'Oplev vores moderne faciliteter: Professionelt mødelokale, køkken, lounge og lydisoleret podcast-studie. Alt inkluderet.',
  keywords: ['coworking faciliteter', 'mødelokale Frederiksberg', 'kontorfællesskab faciliteter', 'podcast studie København'],
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
    {
      icon: Mic,
      name: 'Podcast-studie',
      description: 'Professionelt lydstudie til podcast-optagelser, videoindhold og voiceovers. Lydisoleret rum med alt udstyr.',
      features: ['Professionelle mikrofoner', 'Lydisoleret rum', 'Mixerpult', 'Studiehøretelefoner'],
      image: '/images/podcast/podcast-studio.jpg'
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
          <h1 className="text-4xl md:text-5xl font-serif">
            Vores <span className="font-semibold">faciliteter</span>
          </h1>
          <p className="mt-6 text-xl text-accent-light max-w-2xl">
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
              <div key={facility.name} className="bg-background rounded-xl overflow-hidden">
                <div className="aspect-video relative">
                  {facility.image ? (
                    <Image src={facility.image} alt={facility.name} fill className="object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <facility.icon size={80} className="text-white" />
                    </div>
                  )}
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-primary">{facility.name}</h3>
                  <p className="mt-3 text-warm-gray">{facility.description}</p>
                  <ul className="mt-4 grid grid-cols-2 gap-2">
                    {facility.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-warm-gray">
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
            <h2 className="text-3xl md:text-4xl font-serif text-primary">
              Inkluderet i alle <span className="font-semibold">kontorpladser</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((amenity) => (
              <div key={amenity.name} className="bg-white rounded-xl p-6 text-center">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <amenity.icon className="text-accent" size={28} />
                </div>
                <h3 className="font-semibold text-primary mb-2">{amenity.name}</h3>
                <p className="text-sm text-warm-gray">{amenity.description}</p>
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
              <h2 className="text-3xl font-serif text-primary">
                Perfekt <span className="font-semibold">beliggenhed</span>
              </h2>
              <p className="mt-6 text-warm-gray leading-relaxed">
                Vi ligger i hjertet af Frederiksberg, kun 2 minutters gang fra
                metroen. Det gør det nemt at komme til og fra - både for dig
                og dine kunder.
              </p>
              <div className="mt-6 p-4 bg-secondary/30 rounded-lg">
                <p className="font-semibold text-primary">Adresse</p>
                <p className="text-warm-gray">Martensens Allé 8, kælderen</p>
                <p className="text-warm-gray">1828 Frederiksberg</p>
              </div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center text-warm-gray">
                  <span className="text-green-600 mr-3">✓</span>
                  2 min til Frederiksberg Allé Metro
                </li>
                <li className="flex items-center text-warm-gray">
                  <span className="text-green-600 mr-3">✓</span>
                  Tæt på buslinjer
                </li>
                <li className="flex items-center text-warm-gray">
                  <span className="text-green-600 mr-3">✓</span>
                  Caféer og frokost i nærheden
                </li>
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.847!2d12.5234!3d55.6784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652530e68c3599b%3A0x4dd4d1d87e3d3e0!2sMartensens%20All%C3%A9%208%2C%201828%20Frederiksberg!5e0!3m2!1sda!2sdk!4v1699999999999!5m2!1sda!2sdk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Office lokation"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif">
            Klar til at se <span className="font-semibold text-white">faciliteterne?</span>
          </h2>
          <p className="mt-6 text-lg text-accent-light">
            Book en gratis rundvisning og se faciliteterne selv, eller book mødelokale direkte.
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
