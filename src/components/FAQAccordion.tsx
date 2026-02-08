'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'Hvad er inkluderet i prisen?',
    answer: 'Alle kontorpladser inkluderer fast skrivebord, ergonomisk stol, højhastigheds WiFi, adgang til køkken og lounge, gratis kaffe og te, og gratis booking af mødelokale. Der er ingen skjulte gebyrer.',
  },
  {
    question: 'Er der binding?',
    answer: 'Nej, vi har ingen bindingsperiode. Du kan opsige din kontorplads med én måneds varsel. Vi tror på, at du bliver fordi du vil — ikke fordi du skal.',
  },
  {
    question: 'Kan jeg se kontoret først?',
    answer: 'Selvfølgelig! Book en gratis rundvisning, så viser vi dig rundt og svarer på alle dine spørgsmål. Du er også velkommen til at møde nogle af vores medlemmer.',
  },
  {
    question: 'Hvem arbejder hos The Office?',
    answer: 'Vores medlemmer er en blanding af freelancere, iværksættere, konsulenter og små teams fra forskellige brancher. Det skaber et dynamisk fællesskab med mulighed for sparring og netværk.',
  },
  {
    question: 'Hvad sker der når jeg booker mødelokale?',
    answer: 'Gæster betaler 750 kr/dag. Medlemmer med kontorplads booker gratis. Du vælger dato og tidspunkt online, og vi bekræfter din booking hurtigst muligt.',
  },
  {
    question: 'Hvad er forskellen på gæst og medlem?',
    answer: 'Gæster kan booke mødelokalet til dagspris. Medlemmer har deres egen faste kontorplads, gratis mødelokale, adgang til alle faciliteter og er en del af fællesskabet.',
  },
  {
    question: 'Hvad er After Hours?',
    answer: 'After Hours er vores tilbud til dig, der har brug for kontorplads aften og weekend. Alle 6 kontorer er ledige uden for normal åbningstid. Ring til os på +45 71 99 88 77, så finder vi en løsning der passer dig.',
  },
]

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="max-w-3xl mx-auto">
      <div className="divide-y divide-accent-light/20">
        {faqs.map((faq, index) => (
          <div key={index}>
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between py-5 text-left group"
            >
              <span className="text-lg font-medium text-primary group-hover:text-accent transition-colors pr-4">
                {faq.question}
              </span>
              <ChevronDown
                size={20}
                className={`text-accent flex-shrink-0 transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${
                openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
              }`}
            >
              <p className="text-warm-gray leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
