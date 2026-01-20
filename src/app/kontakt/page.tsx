'use client'

import { useState } from 'react'
import { Mail, MapPin, Phone, Send, Check } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simuler form submission - i virkeligheden ville dette sende til en API
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSubmitted(true)
    setLoading(false)
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-light">
            Kontakt <span className="font-semibold">os</span>
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl">
            Har du spørgsmål om kontorpladser, booking eller andet?
            Vi svarer hurtigst muligt.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-6">Send os en besked</h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-green-800">Tak for din henvendelse!</h3>
                  <p className="mt-2 text-green-600">
                    Vi vender tilbage til dig hurtigst muligt.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Navn *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
                        placeholder="Dit navn"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
                        placeholder="din@email.dk"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
                        placeholder="+45 12 34 56 78"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Emne
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
                      >
                        <option value="general">Generel henvendelse</option>
                        <option value="office">Kontorplads</option>
                        <option value="meeting">Mødelokale</option>
                        <option value="podcast">Podcast studie</option>
                        <option value="tour">Rundvisning</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Besked *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition resize-none"
                      placeholder="Skriv din besked her..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary text-white py-4 rounded font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      'Sender...'
                    ) : (
                      <>
                        Send besked
                        <Send className="ml-2" size={20} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-6">Kontaktinformation</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Adresse</h3>
                    <p className="mt-1 text-gray-600">
                      Martensens Allé 8, kælderen<br />
                      1828 Frederiksberg
                    </p>
                    <p className="mt-2 text-sm text-gray-500">
                      2 min gang fra Frederiksberg Metro
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Email</h3>
                    <a
                      href="mailto:hello@theofficestudio.dk"
                      className="mt-1 text-gray-600 hover:text-white transition-colors"
                    >
                      hello@theofficestudio.dk
                    </a>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin size={48} className="mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Google Maps</p>
                </div>
              </div>

              {/* Quick info */}
              <div className="mt-8 p-6 bg-secondary/30 rounded-lg">
                <h3 className="font-semibold text-primary mb-3">Hurtig info</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    <span className="font-medium">Kontorpladser:</span> Kun 4 ledige!
                  </li>
                  <li>
                    <span className="font-medium">Booking:</span> Gratis for medlemmer
                  </li>
                  <li>
                    <span className="font-medium">Aflysning:</span> Gratis op til 48 timer før
                  </li>
                  <li>
                    <span className="font-medium">Betaling:</span> Faktura efter aftale
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
