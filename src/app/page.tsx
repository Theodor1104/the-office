import Link from 'next/link'
import Image from 'next/image'
import { Mic, Users, Monitor, Clock, ArrowRight, Presentation, Coffee } from 'lucide-react'
import { PRICING } from '@/lib/types'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary text-white min-h-[80vh] flex items-center">
        <Image
          src="/images/hero.jpg"
          alt="The Office coworking space"
          fill
          className="object-cover grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              Dit professionelle
              <span className="block font-semibold">coworking space</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
              Book professionelt podcast studie eller mød dine kunder i vores mødelokale.
              Bliv en del af fællesskabet med din egen kontorplads.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                className="inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded font-semibold hover:bg-gray-200 transition-colors"
              >
                Book nu
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-4 rounded font-semibold hover:border-white transition-colors"
              >
                Kontakt os
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/podcast" className="group p-6 bg-secondary rounded-lg hover:bg-primary hover:text-white transition-all">
              <Mic className="mb-3 text-primary group-hover:text-white" size={28} />
              <h3 className="font-semibold">Podcast Studie</h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-300 mt-1">Fra {PRICING.podcast.guest_per_hour} kr/time</p>
            </Link>
            <Link href="/book" className="group p-6 bg-secondary rounded-lg hover:bg-primary hover:text-white transition-all">
              <Presentation className="mb-3 text-primary group-hover:text-white" size={28} />
              <h3 className="font-semibold">Mødelokale</h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-300 mt-1">{PRICING.meeting_room.guest_per_day} kr/dag</p>
            </Link>
            <Link href="/kontakt" className="group p-6 bg-secondary rounded-lg hover:bg-primary hover:text-white transition-all">
              <Users className="mb-3 text-primary group-hover:text-white" size={28} />
              <h3 className="font-semibold">Kontorplads</h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-300 mt-1">{PRICING.office.single_desk.toLocaleString('da-DK')} kr/md</p>
            </Link>
            <Link href="/faciliteter" className="group p-6 bg-secondary rounded-lg hover:bg-primary hover:text-white transition-all">
              <Coffee className="mb-3 text-primary group-hover:text-white" size={28} />
              <h3 className="font-semibold">Faciliteter</h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-300 mt-1">Se hvad vi tilbyder</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Podcast Studio Section */}
      <section className="py-20 md:py-32 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0">
                <Image
                  src="/images/podcast/studio-main.jpg"
                  alt="The Office Podcast Studie"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div>
              <span className="text-white/60 text-sm font-semibold uppercase tracking-widest">Podcast Studie</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-light leading-tight">
                Professionel
                <span className="block font-semibold">lydkvalitet</span>
              </h2>
              <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                Fuldt udstyret podcast studie med professionelle mikrofoner,
                lydtæt rum og mulighed for video.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-3">
                  <Mic className="text-white/60" size={18} />
                  <span>Pro mikrofoner</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Monitor className="text-white/60" size={18} />
                  <span>Video add-on</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="text-white/60" size={18} />
                  <span>Tekniker tilgængelig</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="text-white/60" size={18} />
                  <span>Fleksibel booking</span>
                </div>
              </div>
              <div className="mt-10">
                <Link
                  href="/podcast"
                  className="inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded font-semibold hover:bg-gray-200 transition-colors"
                >
                  Se mere & book
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <p className="mt-4 text-white/60 text-sm">Fra {PRICING.podcast.guest_per_hour} kr/time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Space Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-primary/60 text-sm font-semibold uppercase tracking-wider">Kontorpladser</span>
                <span className="bg-primary text-white text-xs px-3 py-1 rounded-full">Kun 4 tilbage</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-primary leading-tight">
                Bliv en del af
                <span className="block font-semibold">fællesskabet</span>
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Fast kontorplads med adgang til alle faciliteter.
                Medlemmer booker mødelokale og podcast studie gratis.
              </p>
              <div className="mt-10">
                <p className="text-3xl font-semibold text-primary">
                  {PRICING.office.single_desk.toLocaleString('da-DK')} kr
                  <span className="text-lg font-normal text-gray-500">/måned</span>
                </p>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center mt-6 bg-primary text-white px-8 py-4 rounded font-semibold hover:bg-gray-800 transition-colors"
                >
                  Kontakt os
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative aspect-[4/3] rounded-lg overflow-hidden">
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

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-primary">
            Klar til at komme <span className="font-semibold">i gang?</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Book podcast studie, mødelokale eller kontakt os om kontorplads.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded font-semibold hover:bg-gray-800 transition-colors"
            >
              Book nu
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              href="/priser"
              className="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-4 rounded font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Se priser
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
