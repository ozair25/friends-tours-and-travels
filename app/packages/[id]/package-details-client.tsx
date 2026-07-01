'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { 
  Calendar, 
  Check, 
  X, 
  ArrowLeft, 
  Compass, 
  Sparkles, 
  ShieldCheck, 
  MapPin, 
  Info 
} from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { TourPackage } from '../../../data/packages';

interface PackageDetailsClientProps {
  pack: TourPackage;
}

export default function PackageDetailsClient({ pack }: PackageDetailsClientProps) {
  const router = useRouter();

  // Pre-filled WhatsApp message
  const whatsappNumber = "919303271444";
  const whatsappText = `Hello Friends Tours & Travels, I am highly interested in booking the tour package: "${pack.name}" (${pack.duration}) for ${pack.destination}. Please guide me on booking process.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

  return (
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

      {/* LARGE HERO BANNER */}
      <section className="relative h-[60vh] min-h-[400px] w-full z-10 overflow-hidden">
        <Image
          src={pack.coverImage}
          alt={pack.name}
          fill
          priority
          className="object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Soft edge gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020813] via-[#020813]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020813]/60 via-transparent to-transparent" />
        
        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 z-20">
          <div className="max-w-3xl space-y-4">
            
            {/* Back Button */}
            <button 
              onClick={() => router.push('/packages')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#020813]/85 border border-white/10 text-[10px] tracking-widest uppercase font-bold text-gray-300 hover:text-[#C9A227] hover:border-[#C9A227]/30 transition-all mb-4"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              BACK TO PACKAGES
            </button>

            {/* Destination & Duration tag */}
            <div className="flex flex-wrap gap-2 items-center">
              <span className="bg-[#C9A227] text-brand-blue text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                {pack.destination}
              </span>
              <span className="bg-[#0B1B3A]/90 border border-white/10 text-gray-300 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#C9A227]" />
                {pack.duration}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-semibold tracking-wide uppercase leading-tight drop-shadow-md">
              {pack.name}
            </h1>

            {/* Price Preview for Mobile */}
            <p className="text-xs text-gray-400 sm:hidden">
              Starting at <span className="font-serif text-base text-[#C9A227] font-bold">{pack.startingPrice}</span> per person
            </p>

          </div>
        </div>
      </section>

      {/* SPLIT COLUMN DETAILS */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Details (70% column) */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Journey Overview */}
            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-white font-semibold uppercase tracking-wider flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#C9A227]" />
                The Journey Overview
              </h2>
              <div className="h-[1px] w-20 bg-[#C9A227]/40 mb-4" />
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                {pack.shortDescription}
              </p>
            </div>

            {/* Key Highlights */}
            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-white font-semibold uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#C9A227]" />
                Bespoke Highlights
              </h2>
              <div className="h-[1px] w-20 bg-[#C9A227]/40 mb-4" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pack.highlights.map((highlight, idx) => (
                  <div key={idx} className="p-5 bg-[#0B1B3A]/30 border border-white/5 rounded-2xl relative flex gap-4 overflow-hidden group hover:border-[#C9A227]/30 duration-300">
                    <div className="w-8 h-8 rounded-full bg-[#C9A227]/10 text-[#C9A227] flex items-center justify-center font-mono font-bold text-xs shrink-0">
                      0{idx + 1}
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed font-sans mt-1">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              
              {/* Inclusions */}
              <div className="p-6 bg-[#0B1B3A]/30 border border-white/5 rounded-3xl space-y-4">
                <h3 className="font-serif text-base text-emerald-400 font-semibold uppercase tracking-wider flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-400" />
                  What is Included
                </h3>
                <div className="h-[1px] w-12 bg-emerald-500/20 mb-2" />
                <ul className="space-y-3">
                  {pack.inclusions.map((inc, i) => (
                    <li key={i} className="text-xs text-gray-300 flex items-start gap-2 leading-relaxed">
                      <span className="w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="p-6 bg-[#0B1B3A]/30 border border-white/5 rounded-3xl space-y-4">
                <h3 className="font-serif text-base text-red-400 font-semibold uppercase tracking-wider flex items-center gap-2">
                  <X className="w-5 h-5 text-red-400" />
                  What is Excluded
                </h3>
                <div className="h-[1px] w-12 bg-red-500/20 mb-2" />
                <ul className="space-y-3">
                  {pack.exclusions.map((exc, i) => (
                    <li key={i} className="text-xs text-gray-300 flex items-start gap-2 leading-relaxed">
                      <span className="w-4 h-4 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 shrink-0 mt-0.5">
                        <X className="w-3 h-3" />
                      </span>
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Destination Photo Gallery */}
            <div className="space-y-4 pt-4">
              <h2 className="font-serif text-xl sm:text-2xl text-white font-semibold uppercase tracking-wider flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#C9A227]" />
                Destination Gallery
              </h2>
              <div className="h-[1px] w-20 bg-[#C9A227]/40 mb-4" />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {pack.galleryImages.map((img, i) => (
                  <div key={i} className="relative h-44 rounded-2xl overflow-hidden border border-white/5 group shadow-md">
                    <Image
                      src={img}
                      alt={`${pack.name} Gallery ${i + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-[#020813]/20" />
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sticky Booking Sidebar (30% column) */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-[#0B1B3A]/60 border border-[#C9A227]/25 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-2xl space-y-6">
              
              <div className="relative text-center pb-6 border-b border-white/5">
                <span className="text-[10px] font-mono tracking-widest text-[#C9A227] uppercase">PREMIUM BOOKING DECK</span>
                
                <div className="mt-4 flex flex-col items-center justify-center">
                  <span className="text-gray-400 text-[10px] uppercase">Starting Price</span>
                  <span className="font-serif text-3xl text-[#C9A227] font-semibold tracking-wide">{pack.startingPrice}</span>
                  <span className="text-[10px] text-gray-500 font-sans mt-0.5">Per Guest (All Inclusive)</span>
                </div>
              </div>

              {/* Quick Info Points */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs py-1 border-b border-white/5">
                  <span className="text-gray-400">Duration:</span>
                  <span className="font-bold text-white">{pack.duration}</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1 border-b border-white/5">
                  <span className="text-gray-400">Target Vibe:</span>
                  <span className="font-bold text-white">Luxury & Leisure</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1 border-b border-white/5">
                  <span className="text-gray-400">Guarantees:</span>
                  <span className="font-bold text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 shrink-0" />
                    Verified Agent
                  </span>
                </div>
              </div>

              {/* Booking Button */}
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold text-xs tracking-widest uppercase text-center block shadow-lg shadow-emerald-500/20 border border-emerald-400 active:scale-95 duration-300"
              >
                BOOK VIA WHATSAPP
              </a>

              {/* Quick Warning/Note */}
              <div className="p-4 bg-[#020813] border border-white/5 rounded-2xl flex gap-3">
                <Info className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
                <p className="text-[10px] text-gray-400 leading-relaxed font-sans">
                  Rates are dynamic and vary by seasonal flight fares. No immediate charges will be deducted. Booking is processed upon direct consultation with our travel concierge.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      <Footer />

    </div>
  );
}
