import { Metadata } from 'next';
import React from 'react';
import GalleryClient from './gallery-client';
import { generateMetadataHelper } from '../../lib/seo';
import BreadcrumbSchema from '../../components/seo/BreadcrumbSchema';

export const metadata: Metadata = generateMetadataHelper({
  title: 'Luxury Travel & Destination Photo Gallery',
  description: 'Step into a world of pure wanderlust. Explore our curation of handpicked destination photos across Manali, Goa, Rajasthan, Ooty, and more with Friends Tours & Travels.',
  path: '/gallery',
  keywords: ['Travel Photos India', 'Manali scenery photos', 'Goa beach photos', 'Jaipur fort photos', 'Himalayan travel portfolio']
});

export default function GalleryPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Gallery', url: '/gallery' },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <GalleryClient />
    </>
  );
}
