import { MetadataRoute } from 'next';
import { SITE_URL } from '../lib/seo';
import { TOUR_PACKAGES } from '../data/packages';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about',
    '/packages',
    '/gallery',
    '/contact',
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const dynamicPackageRoutes = TOUR_PACKAGES.map((pkg) => ({
    url: `${SITE_URL}/packages/${pkg.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...dynamicPackageRoutes];
}
