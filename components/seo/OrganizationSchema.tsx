import React from 'react';
import { SITE_URL, DEFAULT_SEO } from '../../lib/seo';
import JsonLd from './JsonLd';

export default function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: DEFAULT_SEO.siteName,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      '@id': `${SITE_URL}/#logo`,
      url: `${SITE_URL}/logo.png`,
      caption: DEFAULT_SEO.siteName,
    },
    image: {
      '@id': `${SITE_URL}/#logo`,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: DEFAULT_SEO.contact.phone,
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi'],
    },
    sameAs: [
      'https://www.facebook.com/friendstourstravels',
      'https://www.instagram.com/friendstourstravels',
      'https://twitter.com/friendstours',
    ],
  };

  return <JsonLd schema={schema} id="organization-schema" />;
}
