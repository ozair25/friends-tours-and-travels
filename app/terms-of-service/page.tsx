import { Metadata } from 'next';
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service | Friends Tours & Travels',
  description: 'Review the Terms of Service governing the booking, payment, and execution of luxury holiday packages curated by Friends Tours & Travels.',
};

export default function TermsOfServicePage() {
  return (
    <main className="min-relative min-h-screen bg-[#FAF8F5] text-[#0B1B3A]">
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
            <span className="text-[10px] tracking-[0.3em] font-serif uppercase text-[#C9A227] font-semibold">Agreements &amp; Guidelines</span>
            <span className="h-[1px] w-8 bg-[#C9A227]/60" />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-wider mb-6 text-[#0B1B3A] uppercase">
            TERMS OF <span className="text-[#8C6A3D] italic font-serif">SERVICE</span>
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
              &ldquo;By engaging with our concierge services, you enter a mutual covenant dedicated to the highest standards of safety, respect, and seamless travel excellence.&rdquo;
            </p>

            <div className="border-l-2 border-[#C9A227] pl-6 py-2">
              <h2 className="font-serif text-xl font-bold text-[#0B1B3A] uppercase tracking-wider mb-3">1. Agreement to Terms</h2>
              <p>
                Welcome to Friends Tours &amp; Travels. By accessing our platform, utilizing our online resources, or engaging us to design and execute your travel itineraries, you agree to be bound by these Terms of Service. If you do not agree to all terms, please refrain from using our services.
              </p>
            </div>

            <div className="border-l-2 border-[#C9A227] pl-6 py-2">
              <h2 className="font-serif text-xl font-bold text-[#0B1B3A] uppercase tracking-wider mb-3">2. Booking &amp; Curations</h2>
              <p>
                All custom tour itineraries and price estimates are subject to availability at the time of official booking. Itinerary structures, hotel classifications, flight availability, and local permits vary dynamically based on seasons. Bookings are only finalized upon receipt of initial deposit and written confirmation from our agency coordinators.
              </p>
            </div>

            <div className="border-l-2 border-[#C9A227] pl-6 py-2">
              <h2 className="font-serif text-xl font-bold text-[#0B1B3A] uppercase tracking-wider mb-3">3. Payment, Revisions &amp; Cancellations</h2>
              <p>
                Payments must be processed via authorized banking channels or official gateways. Any custom revision requests made after booking confirmation are subject to ancillary supplier fees. Cancellation schedules, refund ratios, and non-refundable deposits differ per tour package and are thoroughly outlined prior to final invoice settlement.
              </p>
            </div>

            <div className="border-l-2 border-[#C9A227] pl-6 py-2">
              <h2 className="font-serif text-xl font-bold text-[#0B1B3A] uppercase tracking-wider mb-3">4. Travel Documents &amp; Permits</h2>
              <p>
                Travelers hold full personal responsibility to secure valid identification cards, visa permits, medical clearances, and passport validity requirements for respective destinations. We hold no liability for delays, cancellations, or denied entries arising from incomplete or inaccurate documentation.
              </p>
            </div>

            <div className="border-l-2 border-[#C9A227] pl-6 py-2">
              <h2 className="font-serif text-xl font-bold text-[#0B1B3A] uppercase tracking-wider mb-3">5. Force Majeure &amp; Liability</h2>
              <p>
                We strive for continuous, impeccable tour executions. However, we are not responsible for delays, itinerary changes, cancellations, or loss of luggage arising from force majeure events including, but not limited to, weather calamities, flight schedule changes, government-mandated lockdowns, acts of God, or political disruptions.
              </p>
            </div>

            <div className="border-l-2 border-[#C9A227] pl-6 py-2">
              <h2 className="font-serif text-xl font-bold text-[#0B1B3A] uppercase tracking-wider mb-3">6. User Behavior</h2>
              <p>
                We ask our guests to conduct themselves with absolute dignity, respecting the diverse cultural heritages, local guides, transport coordinators, and eco-systems of each destination. We reserve the right to cancel any ongoing tour service, without refund, for clients exhibiting hazardous or highly disruptive behaviors.
              </p>
            </div>

            <div className="border-l-2 border-[#C9A227] pl-6 py-2">
              <h2 className="font-serif text-xl font-bold text-[#0B1B3A] uppercase tracking-wider mb-3">7. Updates to Terms</h2>
              <p>
                We reserve the right to update these Terms of Service periodically to reflect changes in regulatory standards or service procedures. Your continued usage of our agency services constitutes active agreement with the newly implemented provisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
