import { Metadata } from 'next';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://friendstourstravels.com';

export const DEFAULT_SEO = {
  siteName: 'Friends Tours & Travels',
  defaultTitle: 'Friends Tours & Travels | Luxury Travel Agency in Indore',
  titleTemplate: '%s | Friends Tours & Travels',
  description: 'Premium travel booking and tour planning agency in Indore, Madhya Pradesh. Discover popular destinations like Manali, Goa, Darjeeling, Ooty, Jaipur, and Uttarakhand with our customized luxury tour packages.',
  keywords: [
    'Friends Tours & Travels',
    'Travel Agency Indore',
    'Tour Planner Indore',
    'Luxury Packages Indore',
    'Bespoke Itinerary Planner',
    'Manali Packages',
    'Goa Tour Packages',
    'Darjeeling Tea Garden Tour',
    'Ooty Hills Trip',
    'Jaipur Heritage Tour',
    'Uttarakhand Tour Package',
    'Indore Travels',
    'Boutique Travel Agent Indore',
    'Best Tours Travels Indore',
    'Holiday Booking Indore'
  ],
  author: 'Friends Tours & Travels',
  creator: 'Friends Tours & Travels Team',
  publisher: 'Friends Tours & Travels',
  address: {
    streetAddress: '12, Royal Plaza Block C, Opp. Central Mall',
    addressLocality: 'Indore',
    addressRegion: 'Madhya Pradesh',
    postalCode: '452001',
    addressCountry: 'IN',
  },
  contact: {
    phone: '+919303271444',
    formattedPhone: '+91 93032 71444',
    email: 'lpagrawal48@gmail.com',
  }
};

interface SeoProps {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  keywords?: string[];
  noIndex?: boolean;
}

export function generateMetadataHelper({
  title,
  description,
  path = '',
  ogImage = '/images/og-default.jpg',
  keywords = [],
  noIndex = false,
}: SeoProps): Metadata {
  const finalTitle = title ? `${title} | ${DEFAULT_SEO.siteName}` : DEFAULT_SEO.defaultTitle;
  const finalDescription = description || DEFAULT_SEO.description;
  const canonicalUrl = `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
  const mergedKeywords = Array.from(new Set([...DEFAULT_SEO.keywords, ...keywords]));

  return {
    title: title ? { absolute: finalTitle } : { default: DEFAULT_SEO.defaultTitle, template: DEFAULT_SEO.titleTemplate },
    description: finalDescription,
    keywords: mergedKeywords,
    authors: [{ name: DEFAULT_SEO.author }],
    creator: DEFAULT_SEO.creator,
    publisher: DEFAULT_SEO.publisher,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      url: canonicalUrl,
      siteName: DEFAULT_SEO.siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title || DEFAULT_SEO.siteName,
        },
      ],
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: finalTitle,
      description: finalDescription,
      images: [ogImage],
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/icon.png', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
    },
    manifest: '/manifest.json',
  };
}
