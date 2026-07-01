import { Metadata } from 'next';
import React from 'react';
import { Compass, Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { generateMetadataHelper } from '../../lib/seo';
import BreadcrumbSchema from '../../components/seo/BreadcrumbSchema';

export const metadata: Metadata = generateMetadataHelper({
  title: 'Contact Us | Luxury Travel Concierge Indore',
  description: 'Reach out to Indore’s top boutique travel operators. Get customized luxury tour advice, chat with concierge specialists on WhatsApp, or visit our central Indore lounge.',
  path: '/contact',
  keywords: ['Contact Friends Tours', 'Indore Travel Agency phone number', 'Indore travel office address', 'Indore luxury tour booking']
});

export default function ContactUsPage() {
  const whatsappNumber = "919303271444";
  const prefilledText = "Hello Friends Tours & Travels, I am on your website and would like to enquire about your customized holiday packages. Please connect with me!";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(prefilledText)}`;

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Contact Us', url: '/contact' },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <div className="relative min-h-screen text-gray-100 bg-[#020813] overflow-x-hidden">
        
        {/* IMMERSIVE LUXURY SUNSET CORNER SHINE EFFECT */}
        <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden sunset-frame">
          <div className="absolute inset-2 sm:inset-4 md:inset-6 border border-[#C9A227]/15 rounded-lg sm:rounded-xl pointer-events-none" />
          <div className="absolute top-0 left-0 w-80 h-80 sunset-sunray-tl animate-sunset-shimmer opacity-80 pointer-events-none" />
          <div className="absolute top-0 right-0 w-80 h-80 sunset-sunray-tr animate-sunset-shimmer [animation-delay:2s] opacity-75 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 sunset-sunray-bl animate-sunset-shimmer [animation-delay:4s] opacity-75 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-80 h-80 sunset-sunray-br animate-sunset-shimmer [animation-delay:1.5s] opacity-80 pointer-events-none" />
        </div>

        <Navbar />

        {/* HERO BANNER SECTION */}
        <section className="relative pt-36 pb-16 bg-gradient-to-b from-[#0B1B3A]/60 via-[#020813] to-[#020813] flex flex-col items-center justify-center text-center px-4">
          {/* Subtle decorative sky glow */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#C9A227]/5 rounded-full filter blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            {/* Tagline Badge */}
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1B3A] border border-[#C9A227]/30 mb-6">
              <Compass className="w-4 h-4 text-[#C9A227] animate-spin-slow" />
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#FAF5E6] uppercase font-bold">
                WE ARE ALWAYS LIVE
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-semibold tracking-tight uppercase leading-none">
              GET IN <span className="text-[#C9A227] italic font-serif">TOUCH</span>
            </h1>

            {/* Slogan ornament */}
            <div className="flex items-center gap-3 mt-6 w-48 sm:w-64">
              <div className="h-[1px] flex-1 bg-[#C9A227]/40"></div>
              <div className="w-2 h-2 rounded-full bg-[#C9A227]"></div>
              <div className="h-[1px] flex-1 bg-[#C9A227]/40"></div>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 mt-6 max-w-xl leading-relaxed font-sans">
              Ready to chart your next grand escapade? Speak directly with our boutique destination specialists on WhatsApp or visit our central Indore concierge lounge.
            </p>
          </div>
        </section>

        {/* TWO COLUMN DETAILS GRID */}
        <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            
            {/* Column 1: Contact Detail Blocks */}
            <div className="flex flex-col justify-between gap-8 bg-[#0B1B3A]/30 border border-white/5 rounded-3xl p-8 sm:p-10 shadow-2xl">
              <div className="space-y-6">
                <span className="text-[10px] font-mono tracking-widest text-[#C9A227] uppercase block">CONTACT CHANNELS</span>
                <h2 className="font-serif text-2xl text-white font-semibold uppercase tracking-wider">
                  Direct Travel Concierge
                </h2>
                <div className="h-[1px] w-20 bg-[#C9A227]/40" />

                {/* Detail Items */}
                <div className="space-y-6 pt-4">
                  
                  {/* Phone */}
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227] shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block">CONCIERGE DIRECT LINE</span>
                      <a href="tel:+919303271444" className="text-sm sm:text-base font-semibold text-white hover:text-[#C9A227] transition-colors mt-0.5 block">
                        +91 93032 71444
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block">BUSINESS ENQUIRIES</span>
                      <a href="mailto:lpagrawal48@gmail.com" className="text-sm sm:text-base font-semibold text-white hover:text-[#C9A227] transition-colors mt-0.5 block">
                        lpagrawal48@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Office Address */}
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227] shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block">OFFICE LOUNGE</span>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans mt-1">
                        12, Royal Plaza Block C, Opp. Central Mall, Indore, Madhya Pradesh - 452001
                      </p>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227] shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block">AVAILABILITY HOURS</span>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans mt-1">
                        Monday to Saturday: 9:00 AM - 8:00 PM <br />
                        Sunday: Closed (Emergency hotline active for ongoing travelers)
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Direct WhatsApp Call to Action Button */}
              <div className="pt-8 border-t border-white/5">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl font-bold text-xs tracking-widest uppercase text-center flex items-center justify-center gap-2 shadow-2xl shadow-emerald-500/20 border border-emerald-400 duration-300 active:scale-95"
                >
                  <MessageSquare className="w-5 h-5" />
                  CHAT ON WHATSAPP
                </a>
              </div>

            </div>

            {/* Column 2: Google Maps Embed Card */}
            <div className="bg-[#0B1B3A]/30 border border-white/5 rounded-3xl overflow-hidden relative shadow-2xl h-[450px] lg:h-auto min-h-[400px]">
              {/* Elegant outer border framing on map */}
              <div className="absolute inset-4 border border-[#C9A227]/25 rounded-2xl pointer-events-none z-10" />
              
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.119747515206!2d75.8789392!3d22.7238218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd3c9dfb8cf5%3A0xe53fa2d7ea6d1cf9!2sCentral%20Mall!5e0!3m2!1sen!2sin!4v1682800000000!5m2!1sen!2sin" 
                className="w-full h-full border-none opacity-85 hover:opacity-100 duration-500" 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Friends Tours & Travels Office Map Position"
              />
            </div>

          </div>
        </section>

        <Footer />

      </div>
    </>
  );
}
