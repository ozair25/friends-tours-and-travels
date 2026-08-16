import { Metadata } from 'next';
import React from 'react';
import GalleryClient from './gallery-client';
import { generateMetadataHelper } from '../../lib/seo';
import BreadcrumbSchema from '../../components/seo/BreadcrumbSchema';

export const metadata: Metadata = generateMetadataHelper({
  title: 'Travel Gallery & Occasion Festive Flyers',
  description: 'Explore our curation of handpicked destination photos and limited-edition festive occasion flyers for Friendship Day, Independence Day, and holidays with Friends Tours & Travels.',
  path: '/gallery',
  keywords: ['Travel Photos India', 'Festive Tour Flyers', 'Independence Day Holiday Deals', 'Manali scenery photos', 'Goa beach photos', 'Jaipur fort photos', 'Himalayan travel portfolio']
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
