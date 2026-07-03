import type {Metadata} from 'next';
import { Inter, Cinzel, Great_Vibes } from 'next/font/google';
import './globals.css'; // Global styles
import { generateMetadataHelper } from '../lib/seo';
import OrganizationSchema from '../components/seo/OrganizationSchema';
import TravelAgencySchema from '../components/seo/TravelAgencySchema';
import WebsiteSchema from '../components/seo/WebsiteSchema';
import LocalBusinessSchema from '../components/seo/LocalBusinessSchema';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
 });

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-script',
  display: 'swap',
});

export const metadata: Metadata = generateMetadataHelper({
  path: '/',
});

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable} ${greatVibes.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="antialiased bg-[#FAF8F5] text-slate-900 min-h-screen font-sans selection:bg-amber-400 selection:text-slate-900" suppressHydrationWarning>
        {/* Centralized Global SEO Schemas */}
        <OrganizationSchema />
        <TravelAgencySchema />
        <WebsiteSchema />
        <LocalBusinessSchema />
        {children}
      </body>
    </html>
  );
}
