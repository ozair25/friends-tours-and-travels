import { Metadata } from 'next';
import React from 'react';
import PackagesClient from './packages-client';
import { generateMetadataHelper } from '../../lib/seo';
import BreadcrumbSchema from '../../components/seo/BreadcrumbSchema';
import PackageSchema from '../../components/seo/PackageSchema';
import { TOUR_PACKAGES } from '../../data/packages';

export const metadata: Metadata = generateMetadataHelper({
  title: 'Bespoke India Tour Packages & Luxury Holidays',
  description: 'Explore curated, all-inclusive luxury vacation packages. Discover handpicked boutique stays, private chauffeurs, and customized tour itineraries for Manali, Goa, Rajasthan, and Ooty.',
  path: '/packages',
  keywords: ['Luxury India Tour Packages', 'Bespoke Honeymoon Packages', 'Private Driver Sightseeing India', 'Indore Travel Packages']
});

export default function TourPackagesPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Tour Packages', url: '/packages' },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      {/* Generate TouristTrip Schemas dynamically for search engines */}
      {TOUR_PACKAGES.map((pkg) => (
        <PackageSchema
          key={pkg.id}
          id={pkg.id}
          name={pkg.name}
          description={pkg.shortDescription}
          image={pkg.coverImage}
          duration={pkg.duration}
          startingPrice={pkg.startingPrice}
          destination={pkg.destination}
          highlights={pkg.highlights}
        />
      ))}
      <PackagesClient />
    </>
  );
}
