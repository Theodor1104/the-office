export default function StructuredData() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://theofficeee.netlify.app/#business',
    name: 'The Office Frederiksberg',
    alternateName: 'The Office Coworking',
    description: 'Professionelt coworking space og podcast studie i hjertet af Frederiksberg. Book mødelokale, podcast-rum eller lej kontorplads.',
    url: 'https://theofficeee.netlify.app',
    telephone: '+45 XX XX XX XX',
    email: 'kontakt@theoffice.dk',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Frederiksberg Allé',
      addressLocality: 'Frederiksberg',
      postalCode: '2000',
      addressRegion: 'Hovedstaden',
      addressCountry: 'DK',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 55.6761,
      longitude: 12.5683,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '20:00',
      },
    ],
    priceRange: '$$',
    image: [
      'https://theofficeee.netlify.app/images/hero.jpg',
      'https://theofficeee.netlify.app/images/podcast/studio-1.jpg',
    ],
    sameAs: [
      'https://www.facebook.com/theofficefrederiksberg',
      'https://www.instagram.com/theofficefrederiksberg',
      'https://www.linkedin.com/company/theofficefrederiksberg',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Kontorplads',
            description: 'Fast kontorplads i moderne kontorfællesskab',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mødelokale',
            description: 'Book mødelokale til 8 personer',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Podcast Studie',
            description: 'Professionelt podcast studie med alt udstyr inkluderet',
          },
        },
      ],
    },
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'The Office Frederiksberg',
    url: 'https://theofficeee.netlify.app',
    logo: 'https://theofficeee.netlify.app/images/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+45 XX XX XX XX',
      contactType: 'customer service',
      availableLanguage: ['Danish', 'English'],
    },
  }

  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'The Office Frederiksberg',
    url: 'https://theofficeee.netlify.app',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://theofficeee.netlify.app/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
    </>
  )
}
