import { Metadata } from 'next';
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { generateMetadataHelper } from '../../lib/seo';
import BreadcrumbSchema from '../../components/seo/BreadcrumbSchema';

export const metadata: Metadata = generateMetadataHelper({
  title: 'Privacy Policy',
  description: 'Learn how Friends Tours & Travels collects, protects, and handles your personal information with the utmost care and confidentiality.',
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Privacy Policy', url: '/privacy-policy' },
  ];

  return (
    <main className="relative min-h-screen bg-[#FAF8F5] text-[#0B1B3A]">
      <BreadcrumbSchema items={breadcrumbItems} />
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-36 pb-16 bg-gradient-to-b from-[#EFECE6]/40 via-[#FAF8F5] to-[#FAF8F5] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[#0B1B3A]/5 mix-blend-multiply" />
        
        {/* Subtle decorative sky glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#C9A227]/5 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Accent Badge */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-[1px] w-8 bg-[#C9A227]/60" />
            <span className="text-[10px] tracking-[0.3em] font-serif uppercase text-[#C9A227] font-semibold">Legal &amp; Trust</span>
            <span className="h-[1px] w-8 bg-[#C9A227]/60" />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-wider mb-6 text-[#0B1B3A] uppercase">
            PRIVACY <span className="text-[#8C6A3D] italic font-serif">POLICY</span>
          </h1>

          <p className="text-xs text-slate-500 font-mono tracking-widest uppercase">
            Last Updated: July 6, 2026
          </p>
        </div>
      </section>

      {/* Decorative divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#C9A227]/30 to-transparent" />
      </div>

      {/* Editorial Content */}
      <section className="py-20 bg-white relative z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none text-sm leading-relaxed text-slate-700 space-y-8">
            <p className="text-base text-[#0B1B3A] font-serif italic text-center max-w-2xl mx-auto mb-12">
              &ldquo;At Friends Tours &amp; Travels, we believe trust is the ultimate luxury. We are committed to safeguarding the privacy and security of your personal data as we curate your ideal journeys.&rdquo;
            </p>

            <div className="border-l-2 border-[#C9A227] pl-6 py-2">
              <h2 className="font-serif text-xl font-bold text-[#0B1B3A] uppercase tracking-wider mb-3">1. Introduction</h2>
              <p>
                Friends Tours &amp; Travels (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is dedicated to protecting your privacy. This Privacy Policy outlines how we collect, use, process, and protect your personal information when you visit our website, use our services, or inquire about our custom curated tour packages.
              </p>
            </div>

            <div className="border-l-2 border-[#C9A227] pl-6 py-2">
              <h2 className="font-serif text-xl font-bold text-[#0B1B3A] uppercase tracking-wider mb-3">2. Information We Collect</h2>
              <p className="mb-4">
                To create exquisite, personalized itineraries, we may collect the following categories of information:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Contact Information:</strong> Your name, email address, telephone number, and communication preferences.</li>
                <li><strong>Travel Details:</strong> Preferred destinations, travel dates, accommodation standards, and special assistance or dietary requests.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, operating system, and browsing behavior on our platform.</li>
              </ul>
            </div>

            <div className="border-l-2 border-[#C9A227] pl-6 py-2">
              <h2 className="font-serif text-xl font-bold text-[#0B1B3A] uppercase tracking-wider mb-3">3. How We Use Your Information</h2>
              <p className="mb-4">
                We process your personal information to fulfill our luxury concierge promises, including:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Designing, reserving, and managing your custom-tailored travel itineraries.</li>
                <li>Responding directly to inquiries, booking requests, and message boards.</li>
                <li>Improving our digital experience, styling choices, and user accessibility.</li>
                <li>Fulfilling legal, safety, and regulatory compliance obligations.</li>
              </ul>
            </div>

            <div className="border-l-2 border-[#C9A227] pl-6 py-2">
              <h2 className="font-serif text-xl font-bold text-[#0B1B3A] uppercase tracking-wider mb-3">4. Information Sharing &amp; Trust</h2>
              <p>
                We do not sell, rent, or trade your personal information to third parties. We share data strictly with trusted service partners (such as premier hotels, luxury transport services, and local tour guides) solely to secure your bookings and ensure a flawless travel experience.
              </p>
            </div>

            <div className="border-l-2 border-[#C9A227] pl-6 py-2">
              <h2 className="font-serif text-xl font-bold text-[#0B1B3A] uppercase tracking-wider mb-3">5. Data Security</h2>
              <p>
                We implement state-of-the-art security practices to protect your data from unauthorized access, alteration, disclosure, or destruction. However, please be aware that no internet transmission is 100% secure, and we advise caution when sharing highly sensitive personal identifiers.
              </p>
            </div>

            <div className="border-l-2 border-[#C9A227] pl-6 py-2">
              <h2 className="font-serif text-xl font-bold text-[#0B1B3A] uppercase tracking-wider mb-3">6. Cookies &amp; Tracking</h2>
              <p>
                Our platform uses cookies and localized state engines to improve page load times, remember preferences, and analyze traffic patterns. You can choose to disable cookies through your individual browser settings at any time.
              </p>
            </div>

            <div className="border-l-2 border-[#C9A227] pl-6 py-2">
              <h2 className="font-serif text-xl font-bold text-[#0B1B3A] uppercase tracking-wider mb-3">7. Contact Us</h2>
              <p>
                If you have any questions or concerns regarding this Privacy Policy or would like to request access or correction to your data, please reach out to us at <a href="mailto:lpagrawal48@gmail.com" className="text-[#8C6A3D] underline font-medium">lpagrawal48@gmail.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
