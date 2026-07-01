import React from 'react';
import { SITE_URL, DEFAULT_SEO } from '../../lib/seo';
import JsonLd from './JsonLd';

export default function TravelAgencySchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    '@id': `${SITE_URL}/#travelagency`,
    name: DEFAULT_SEO.siteName,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/images/og-default.jpg`,
    description: DEFAULT_SEO.description,
    telephone: DEFAULT_SEO.contact.phone,
    email: DEFAULT_SEO.contact.email,
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: DEFAULT_SEO.address.streetAddress,
      addressLocality: DEFAULT_SEO.address.addressLocality,
      addressRegion: DEFAULT_SEO.address.addressRegion,
      postalCode: DEFAULT_SEO.address.postalCode,
      addressCountry: DEFAULT_SEO.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '22.7156',
      longitude: '75.8804',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        opens: '09:00',
        closes: '20:00'
      }
    ],
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: 'Indore',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Madhya Pradesh',
      },
      {
        '@type': 'Country',
        name: 'India',
      }
    ],
  };

  return <JsonLd schema={schema} id="travelagency-schema" />;
}
