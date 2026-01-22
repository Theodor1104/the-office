import Link from 'next/link'
import Image from 'next/image'
import {
  Mic,
  Video,
  Headphones,
  Settings,
  Clock,
  Users,
  ArrowRight,
  Check
} from 'lucide-react'
import { PRICING } from '@/lib/types'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Podcast Studie til Leje i København | Book Nu',
  description: 'Lej professionelt podcast studie i Frederiksberg fra 399 kr/time. Alt udstyr inkluderet, lydtæt rum, tekniker tilgængelig. Book dit studie i dag!',
  keywords: ['podcast studie leje', 'podcast studie København', 'lej podcast rum', 'podcast optagelse Frederiksberg', 'podcast udstyr leje'],
  alternates: {
    canonical: 'https://theofficeee.netlify.app/podcast',
  },
  openGraph: {
    title: 'Podcast Studie til Leje | The Office Frederiksberg',
    description: 'Professionelt podcast studie med alt udstyr inkluderet. Fra 399 kr/time. Book nu!',
  },
}

export default function PodcastPage() {
  const packages = [
    {
      name: 'Time-leje',
      price: PRICING.podcast.guest_per_hour,
      unit: '/time',
      description: 'Perfekt til korte optagelser. Medbring eget SD-kort eller køb hos os.',
      features: [
        'Adgang til studie',
        'Alt udstyr inkluderet',
        'Introduktion ved første besøg',
      ],
      popular: false,
    },
    {
      name: '3-timers DIY pakke',
      price: PRICING.podcast.guest_3hour_package,
      unit: '',
      description: 'Vores mest populære valg. Perfekt til en hel podcast-episode.',
      features: [
        'Alt udstyr inkluderet',
        'Udstyr-introduktion inkluderet',
        '3 fulde timer',
        'Spar 498 kr',
      ],
      popular: true,
    },
    {
      name: 'Med tekniker',
      price: PRICING.podcast.guest_with_technician,
      unit: '/time',
      description: 'Fokusér på indholdet - vi klarer det tekniske.',
      features: [
        'Professionel tekniker',
        'Optimal lydkvalitet sikret',
        'Redigering muligt',
        'Video add-on muligt',
      ],
      popular: false,
    },
  ]

  const addons = [
    {
      name: 'Video add-on',
      price: PRICING.podcast.video_addon,
      unit: '/time',
      description: 'Professionel video-optagelse af din podcast',
    },
    {
      name: 'Post-production',
      price: PRICING.podcast.post_production,
      unit: '/time',
      description: 'Redigering, mixing og master-levering',
    },
  ]

  const equipment = [
    'Professionelle kondensator-mikrofoner',
    'Lydtæt optagelsesrum',
    'Højkvalitets hovedtelefoner',
    'Professionel lydmixer',
    'Pop-filtre og akustisk behandling',
    'Behagelig siddearrangement',
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-white font-semibold uppercase tracking-wider">Podcast Studie</span>
              <h1 className="mt-4 text-4xl md:text-5xl font-light">
                Professionelt <span className="font-semibold">podcast studie</span>
              </h1>
              <p className="mt-6 text-xl text-gray-300">
                Alt udstyr klar til dig. Book studiet på time- eller dagsbasis
                - med eller uden tekniker. Vi sørger for lydkvaliteten.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded font-semibold hover:bg-gray-200 transition-colors"
                >
                  Book studie
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-[4/3] bg-primary/10">
              <Image
                src="/images/podcast/studio-1.jpg"
                alt="The Office Podcast Studie"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mic className="text-primary" size={28} />
              </div>
              <h3 className="font-semibold text-primary mb-2">Pro udstyr</h3>
              <p className="text-sm text-gray-600">Alt professionelt udstyr inkluderet</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="text-primary" size={28} />
              </div>
              <h3 className="font-semibold text-primary mb-2">Lydtæt rum</h3>
              <p className="text-sm text-gray-600">Akustisk behandlet for optimal lyd</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="text-primary" size={28} />
              </div>
              <h3 className="font-semibold text-primary mb-2">Video muligt</h3>
              <p className="text-sm text-gray-600">Tilkøb professionel video-optagelse</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="text-primary" size={28} />
              </div>
              <h3 className="font-semibold text-primary mb-2">Tekniker tilgængelig</h3>
              <p className="text-sm text-gray-600">Valgfri assistance under optagelse</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-primary">
              Vælg din <span className="font-semibold">pakke</span>
            </h2>
            <p className="mt-4 text-gray-600">
              Medlemmer med kontorplads booker gratis
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`bg-white rounded-lg p-8 flex flex-col ${
                  pkg.popular ? 'ring-2 ring-accent shadow-lg' : 'shadow'
                }`}
              >
                <div className="h-6">
                  {pkg.popular && (
                    <span className="bg-gray-100 text-black text-xs font-semibold px-3 py-1 rounded-full">
                      Mest populær
                    </span>
                  )}
                </div>
                <h3 className="mt-2 text-xl font-semibold text-primary">{pkg.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                  <span className="text-gray-500"> kr{pkg.unit}</span>
                </div>
                <p className="mt-4 text-gray-600 min-h-[48px]">{pkg.description}</p>
                <ul className="mt-6 space-y-3 flex-grow">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <Check className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/book"
                  className={`mt-8 block text-center py-3 rounded font-semibold transition-colors ${
                    pkg.popular
                      ? 'bg-primary text-white hover:bg-primary/90'
                      : 'bg-primary text-white hover:bg-primary/90'
                  }`}
                >
                  Book nu
                </Link>
              </div>
            ))}
          </div>

          {/* Add-ons */}
          <div className="mt-12 bg-white rounded-lg p-8 shadow">
            <h3 className="text-xl font-semibold text-primary mb-6">Tilkøb</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {addons.map((addon) => (
                <div key={addon.name} className="flex justify-between items-center p-4 bg-background rounded">
                  <div>
                    <p className="font-semibold text-primary">{addon.name}</p>
                    <p className="text-sm text-gray-600">{addon.description}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-bold text-primary">{addon.price}</span>
                    <span className="text-gray-500 text-sm"> kr{addon.unit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-lg overflow-hidden aspect-square">
              <Image
                src="/images/podcast/studio-1.jpg"
                alt="Podcast studie udstyr"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-light text-primary">
                Professionelt <span className="font-semibold">udstyr</span>
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Vores studie er fuldt udstyret med professionelt podcast-udstyr.
                Du behøver kun at medbringe dit indhold - vi klarer resten.
              </p>
              <ul className="mt-8 space-y-3">
                {equipment.map((item) => (
                  <li key={item} className="flex items-center text-gray-600">
                    <Check className="text-green-500 mr-3 flex-shrink-0" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <Clock className="text-primary flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-primary">Fleksibel booking</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Book fra 1 time til hele dage. Afbestilling gratis op til 48 timer før.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Users className="text-primary flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-primary">Plads til gæster</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Tag gæster med til din podcast. Studiet har plads til flere deltagere.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Settings className="text-primary flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-primary">Support inkluderet</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Første gang? Vi giver dig en grundig introduktion til udstyret.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light">
            Klar til at optage din <span className="font-semibold text-white">podcast?</span>
          </h2>
          <p className="mt-6 text-lg text-gray-300">
            Book studiet i dag og få professionel lydkvalitet til din næste episode.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center justify-center mt-10 bg-white text-black px-8 py-4 rounded font-semibold hover:bg-gray-200 transition-colors"
          >
            Book podcast studie
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
