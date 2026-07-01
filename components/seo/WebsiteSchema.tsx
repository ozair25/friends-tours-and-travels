import React from 'react';
import { SITE_URL, DEFAULT_SEO } from '../../lib/seo';
import JsonLd from './JsonLd';

export default function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: DEFAULT_SEO.siteName,
    description: DEFAULT_SEO.description,
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    potentialAction: [
      {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${SITE_URL}/packages?search={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    ],
  };

  return <JsonLd schema={schema} id="website-schema" />;
}
