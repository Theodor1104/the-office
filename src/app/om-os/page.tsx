import Link from 'next/link'
import { Users, Heart, Handshake, Target, ArrowRight } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Om os - Coworking Fællesskab',
  description: 'Lær mere om The Office Frederiksberg. Vi er et fællesskab af ambitiøse mennesker der arbejder sammen. Moderne kontorplads og mødelokaler.',
  alternates: {
    canonical: 'https://theofficeee.netlify.app/om-os',
  },
}

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif">
            Om <span className="font-semibold">The Office</span>
          </h1>
          <p className="mt-6 text-xl text-accent-light max-w-2xl">
            Mere end bare et kontor - et fællesskab af ambitiøse mennesker,
            der arbejder sammen mod deres mål.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif text-primary">
                Vores <span className="font-semibold">historie</span>
              </h2>
              <p className="mt-6 text-warm-gray leading-relaxed">
                The Office blev skabt ud fra en simpel idé: At give iværksættere,
                freelancere og små virksomheder et sted, hvor de kan arbejde
                professionelt uden at miste fleksibiliteten.
              </p>
              <p className="mt-4 text-warm-gray leading-relaxed">
                Beliggende i hjertet af Frederiksberg, kun 2 minutter fra metroen,
                tilbyder vi et miljø, hvor produktivitet møder fællesskab.
                Vores medlemmer er en blanding af kreative, tech-folk,
                konsulenter og mange andre brancher.
              </p>
              <p className="mt-4 text-warm-gray leading-relaxed">
                Vi tror på, at de bedste idéer opstår, når mennesker mødes.
                Derfor har vi skabt et rum, der fremmer både fokuseret arbejde
                og spontane samtaler ved kaffemaskinen.
              </p>
            </div>
            <div className="bg-gradient-to-br from-secondary to-surface rounded-xl aspect-square flex items-center justify-center">
              <div className="text-center text-accent/50">
                <Users size={120} />
                <p className="mt-4 text-sm">Billede af teamet</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-primary">
              Vores <span className="font-semibold">værdier</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Users className="text-accent" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Fællesskab</h3>
              <p className="text-warm-gray">
                Vi skaber rammerne for meningsfulde forbindelser.
                Her møder du mennesker, der forstår startup-livet
                og som kan blive dine næste samarbejdspartnere.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Handshake className="text-accent" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Netværk</h3>
              <p className="text-warm-gray">
                Dit næste projekt, din næste kunde eller din næste
                medstifter sidder måske ved skrivebordet ved siden af.
                Vi faciliterer forbindelser, der skaber værdi.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Target className="text-accent" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Fokus</h3>
              <p className="text-warm-gray">
                Vores rum er designet til at understøtte dybt arbejde.
                Ingen forstyrrelser, ingen støj - bare dig og dine opgaver
                i et professionelt miljø.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gradient-to-br from-primary to-accent rounded-xl aspect-video flex items-center justify-center">
              <div className="text-center text-white/50">
                <Heart size={80} />
                <p className="mt-4 text-sm">Billede af fællesskabet</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-serif text-primary">
                Et fællesskab,<br />
                <span className="font-semibold">der støtter dig</span>
              </h2>
              <p className="mt-6 text-warm-gray leading-relaxed">
                Hos The Office er du aldrig alene. Vores medlemmer hjælper
                hinanden med feedback, sparring og netværk. Vi arrangerer
                regelmæssige events, hvor du kan møde ligesindede.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center text-warm-gray">
                  <span className="text-green-600 mr-3">✓</span>
                  Månedlige netværksarrangementer
                </li>
                <li className="flex items-center text-warm-gray">
                  <span className="text-green-600 mr-3">✓</span>
                  Fælles frokost og kaffepause
                </li>
                <li className="flex items-center text-warm-gray">
                  <span className="text-green-600 mr-3">✓</span>
                  Slack-kanal for members only
                </li>
                <li className="flex items-center text-warm-gray">
                  <span className="text-green-600 mr-3">✓</span>
                  Adgang til ekspertise på tværs af brancher
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif">
            Klar til at blive en del af <span className="font-semibold">fællesskabet?</span>
          </h2>
          <p className="mt-6 text-lg text-accent-light">
            Book en gratis rundvisning og oplev The Office selv.
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
              href="/kontakt"
              className="inline-flex items-center justify-center border-2 border-accent-light/40 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Kontakt os
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
