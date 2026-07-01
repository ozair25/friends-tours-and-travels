import React from 'react';
import { SITE_URL, DEFAULT_SEO } from '../../lib/seo';
import JsonLd from './JsonLd';

interface PackageSchemaProps {
  id: string;
  name: string;
  description: string;
  image: string;
  duration: string;
  startingPrice: string;
  destination: string;
  highlights: string[];
}

export default function PackageSchema({
  id,
  name,
  description,
  image,
  duration,
  startingPrice,
  destination,
  highlights,
}: PackageSchemaProps) {
  // Parse clean numeric price from string like "₹19,999" -> 19999
  const numericPrice = parseInt(startingPrice.replace(/[^0-9]/g, ''), 10) || 15000;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    '@id': `${SITE_URL}/packages/${id}#trip`,
    name: name,
    description: description,
    image: image,
    touristType: 'Leisure, Luxury Travelers',
    duration: duration,
    itinerary: highlights.map((hl, idx) => ({
      '@type': 'HowToStep',
      position: idx + 1,
      name: hl,
      text: hl,
    })),
    subTrip: {
      '@type': 'TouristTrip',
      name: `${destination} Exploration`,
      destination: {
        '@type': 'Place',
        name: destination,
      },
    },
    offers: {
      '@type': 'Offer',
      price: numericPrice,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/packages/${id}`,
      offeredBy: {
        '@type': 'TravelAgency',
        name: DEFAULT_SEO.siteName,
        url: SITE_URL,
      },
    },
    provider: {
      '@type': 'TravelAgency',
      name: DEFAULT_SEO.siteName,
      url: SITE_URL,
    },
  };

  return <JsonLd schema={schema} id={`package-schema-${id}`} />;
}
