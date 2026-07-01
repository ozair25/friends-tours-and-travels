import { Metadata } from 'next';
import React from 'react';
import { notFound } from 'next/navigation';
import { TOUR_PACKAGES } from '../../../data/packages';
import PackageDetailsClient from './package-details-client';
import { generateMetadataHelper } from '../../../lib/seo';
import BreadcrumbSchema from '../../../components/seo/BreadcrumbSchema';
import PackageSchema from '../../../components/seo/PackageSchema';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const pack = TOUR_PACKAGES.find((p) => p.id === id);
  if (!pack) {
    return generateMetadataHelper({ title: 'Package Not Found' });
  }

  return generateMetadataHelper({
    title: `${pack.name} (${pack.duration}) - ${pack.destination} Tour`,
    description: pack.shortDescription,
    path: `/packages/${pack.id}`,
    ogImage: pack.coverImage,
    keywords: [
      pack.destination,
      pack.name,
      `${pack.destination} package`,
      `${pack.destination} trip from Indore`,
      'custom holiday itinerary',
    ],
  });
}

// Statically generate routes for all existing packages
export async function generateStaticParams() {
  return TOUR_PACKAGES.map((pkg) => ({
    id: pkg.id,
  }));
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const pack = TOUR_PACKAGES.find((p) => p.id === id);

  if (!pack) {
    notFound();
  }

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Tour Packages', url: '/packages' },
    { name: pack.name, url: `/packages/${pack.id}` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <PackageSchema
        id={pack.id}
        name={pack.name}
        description={pack.shortDescription}
        image={pack.coverImage}
        duration={pack.duration}
        startingPrice={pack.startingPrice}
        destination={pack.destination}
        highlights={pack.highlights}
      />
      <PackageDetailsClient pack={pack} />
    </>
  );
}
