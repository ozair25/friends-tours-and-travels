import { Metadata } from 'next';
import React from 'react';
import HomePageClient from './page-client';
import { generateMetadataHelper } from '../lib/seo';

export const metadata: Metadata = generateMetadataHelper({
  path: '/',
});

export default function Page() {
  return <HomePageClient />;
}
