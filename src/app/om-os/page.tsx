import { Users, Heart, Handshake, Target } from 'lucide-react'

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-light">
            Om <span className="font-semibold">The Office</span>
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl">
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
              <h2 className="text-3xl font-light text-primary">
                Vores <span className="font-semibold">historie</span>
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                The Office blev skabt ud fra en simpel idé: At give iværksættere,
                freelancere og små virksomheder et sted, hvor de kan arbejde
                professionelt uden at miste fleksibiliteten.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Beliggende i hjertet af Frederiksberg, kun 2 minutter fra metroen,
                tilbyder vi et miljø, hvor produktivitet møder fællesskab.
                Vores medlemmer er en blanding af kreative, tech-folk,
                konsulenter og mange andre brancher.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Vi tror på, at de bedste idéer opstår, når mennesker mødes.
                Derfor har vi skabt et rum, der fremmer både fokuseret arbejde
                og spontane samtaler ved kaffemaskinen.
              </p>
            </div>
            <div className="bg-gradient-to-br from-secondary to-secondary/50 rounded-lg aspect-square flex items-center justify-center">
              <div className="text-center text-primary/50">
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
            <h2 className="text-3xl md:text-4xl font-light text-primary">
              Vores <span className="font-semibold">værdier</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Users className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Fællesskab</h3>
              <p className="text-gray-600">
                Vi skaber rammerne for meningsfulde forbindelser.
                Her møder du mennesker, der forstår startup-livet
                og som kan blive dine næste samarbejdspartnere.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Handshake className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Netværk</h3>
              <p className="text-gray-600">
                Dit næste projekt, din næste kunde eller din næste
                medstifter sidder måske ved skrivebordet ved siden af.
                Vi faciliterer forbindelser, der skaber værdi.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Target className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Fokus</h3>
              <p className="text-gray-600">
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
            <div className="order-2 md:order-1 bg-gradient-to-br from-primary to-[#2a2a4e] rounded-lg aspect-video flex items-center justify-center">
              <div className="text-center text-white/50">
                <Heart size={80} />
                <p className="mt-4 text-sm">Billede af fællesskabet</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-light text-primary">
                Et fællesskab,<br />
                <span className="font-semibold">der støtter dig</span>
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Hos The Office er du aldrig alene. Vores medlemmer hjælper
                hinanden med feedback, sparring og netværk. Vi arrangerer
                regelmæssige events, hvor du kan møde ligesindede.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center text-gray-600">
                  <span className="text-green-600 mr-3">✓</span>
                  Månedlige netværksarrangementer
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-green-600 mr-3">✓</span>
                  Fælles frokost og kaffepause
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-green-600 mr-3">✓</span>
                  Slack-kanal for members only
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-green-600 mr-3">✓</span>
                  Adgang til ekspertise på tværs af brancher
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
