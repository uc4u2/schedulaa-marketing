export const MARKETING_CONTACT = {
  email: 'admin@schedulaa.com',
  callDisplay: '+1 (514) 430-0970',
  callHref: 'tel:+15144300970',
  whatsappDisplay: '+1 (647) 849-4913',
  whatsappHref: 'https://wa.me/16478494913',
  serviceArea: 'Based in Ontario, Canada. Serving businesses across Canada and the United States remotely.',
} as const;

export const buildMarketingContactJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Schedulaa',
  url: 'https://www.schedulaa.com',
  email: MARKETING_CONTACT.email,
  telephone: '+15144300970',
  areaServed: [
    { '@type': 'Country', name: 'Canada' },
    { '@type': 'Country', name: 'United States' },
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: '+15144300970',
      email: MARKETING_CONTACT.email,
      areaServed: ['CA', 'US'],
    },
    {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      url: MARKETING_CONTACT.whatsappHref,
      areaServed: ['CA', 'US'],
    },
  ],
});
