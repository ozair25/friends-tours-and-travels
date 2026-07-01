import { Metadata } from 'next';
import React from 'react';
import AboutClient from './about-client';
import { generateMetadataHelper } from '../../lib/seo';
import BreadcrumbSchema from '../../components/seo/BreadcrumbSchema';

export const metadata: Metadata = generateMetadataHelper({
  title: 'About Our Legacy & Values',
  description: 'Discover the story behind Friends Tours & Travels, Indore’s premium bespoke travel agency. Learn about our luxury custom planning and 24/7 client concierge since 2012.',
  path: '/about',
  keywords: ['About Friends Tours', 'Bespoke Travel Indore', 'Indore Travel Agency story', 'Luxury Travel Curation India']
});

export default function AboutPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about' },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <AboutClient />
    </>
  );
}
