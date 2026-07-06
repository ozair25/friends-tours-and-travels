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
  const whatsappText = `Hello Friends Tours & Travels, I am highly interested in booking the tour package: "${pack.name}" (${pack.duration || 'Customized'}) for ${pack.destination}. Please guide me on booking process.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

  return (
    <div className="relative min-h-screen text-slate-800 bg-[#FAF8F5] overflow-x-hidden">
      
      {/* IMMERSIVE LUXURY SUNSET CORNER SHINE EFFECT */}
      <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden sunset-frame">
        <div className="absolute inset-2 sm:inset-4 md:inset-6 border border-[#C9A227]/15 rounded-lg sm:rounded-xl pointer-events-none" />
        <div className="absolute top-0 left-0 w-80 h-80 sunset-sunray-tl animate-sunset-shimmer opacity-35 pointer-events-none" />
        <div className="absolute top-0 right-0 w-80 h-80 sunset-sunray-tr animate-sunset-shimmer [animation-delay:2s] opacity-35 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 sunset-sunray-bl animate-sunset-shimmer [animation-delay:4s] opacity-35 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 sunset-sunray-br animate-sunset-shimmer [animation-delay:1.5s] opacity-35 pointer-events-none" />
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
        {/* Soft edge gradients to ensure white text is absolutely readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />
        
        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 z-20">
          <div className="max-w-3xl space-y-4">
            
            {/* Back Button */}
            <button 
              onClick={() => router.push('/packages')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 border border-slate-200 text-[10px] tracking-widest uppercase font-bold text-slate-800 hover:text-[#8C6A3D] hover:border-[#8C6A3D]/40 shadow-md transition-all mb-4 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              BACK TO PACKAGES
            </button>

            {/* Destination & Duration tag */}
            <div className="flex flex-wrap gap-2 items-center">
              <span className="bg-[#0B1B3A] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                {pack.destination}
              </span>
              <span className="bg-white/95 border border-slate-200 text-slate-800 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                <Calendar className="w-3.5 h-3.5 text-[#8C6A3D]" />
                {pack.duration || 'Customized'}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-bold tracking-wide uppercase leading-tight drop-shadow-lg">
              {pack.name}
            </h1>

            {/* Price Preview for Mobile */}
            {pack.startingPrice && (
              <p className="text-xs text-gray-200 sm:hidden">
                Starting at <span className="font-serif text-base text-[#C9A227] font-bold">{pack.startingPrice}</span> per person
              </p>
            )}

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
              <h2 className="font-serif text-xl sm:text-2xl text-[#0B1B3A] font-bold uppercase tracking-wider flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#8C6A3D]" />
                The Journey Overview
              </h2>
              <div className="h-[1px] w-20 bg-[#8C6A3D]/40 mb-4" />
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-sans font-medium">
                {pack.shortDescription}
              </p>
            </div>

            {/* Key Highlights */}
            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-[#0B1B3A] font-bold uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#8C6A3D]" />
                Bespoke Highlights
              </h2>
              <div className="h-[1px] w-20 bg-[#8C6A3D]/40 mb-4" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pack.highlights.map((highlight, idx) => (
                  <div key={idx} className="p-5 bg-white border border-slate-200 rounded-2xl relative flex gap-4 overflow-hidden group hover:border-[#8C6A3D]/40 duration-300 shadow-md">
                    <div className="w-8 h-8 rounded-full bg-[#8C6A3D]/10 text-[#8C6A3D] flex items-center justify-center font-mono font-bold text-xs shrink-0">
                      0{idx + 1}
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed font-sans mt-1">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              
              {/* Inclusions */}
              <div className="p-6 bg-white border border-slate-200 rounded-3xl space-y-4 shadow-lg">
                <h3 className="font-serif text-base text-emerald-600 font-bold uppercase tracking-wider flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-600" />
                  What is Included
                </h3>
                <div className="h-[1px] w-12 bg-emerald-600/20 mb-2" />
              <ul className="space-y-3">
                {(pack.inclusions || pack.whatsIncluded || []).map((inc, i) => (
                  <li key={i} className="text-xs text-slate-700 flex items-start gap-2 leading-relaxed font-medium">
                    <span className="w-4 h-4 rounded-full bg-emerald-50 flex items-center justify-center text-white shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </span>
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
              </div>

              {/* Exclusions */}
              <div className="p-6 bg-white border border-slate-200 rounded-3xl space-y-4 shadow-lg">
                <h3 className="font-serif text-base text-red-600 font-bold uppercase tracking-wider flex items-center gap-2">
                  <X className="w-5 h-5 text-red-600" />
                  What is Excluded
                </h3>
                <div className="h-[1px] w-12 bg-red-600/20 mb-2" />
              <ul className="space-y-3">
                {(pack.exclusions || []).map((exc, i) => (
                  <li key={i} className="text-xs text-slate-700 flex items-start gap-2 leading-relaxed font-medium">
                    <span className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center text-white shrink-0 mt-0.5">
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
              <h2 className="font-serif text-xl sm:text-2xl text-[#0B1B3A] font-bold uppercase tracking-wider flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#8C6A3D]" />
                Destination Gallery
              </h2>
              <div className="h-[1px] w-20 bg-[#8C6A3D]/40 mb-4" />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {(pack.galleryImages || []).map((img, i) => (
                  <div key={i} className="relative h-44 rounded-2xl overflow-hidden border border-slate-200 group shadow-md">
                    <Image
                      src={img}
                      alt={`${pack.name} Gallery ${i + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-[#020813]/10" />
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sticky Booking Sidebar (30% column) */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
              
              <div className="relative text-center pb-6 border-b border-slate-100">
                <span className="text-[10px] font-mono tracking-widest text-[#8C6A3D] uppercase font-bold">PREMIUM BOOKING DECK</span>
                
                <div className="mt-4 flex flex-col items-center justify-center">
                  <span className="text-slate-500 text-[10px] uppercase font-bold">Starting Price</span>
                  <span className="font-serif text-3xl text-[#8C6A3D] font-bold tracking-wide">{pack.startingPrice || "Custom Quote"}</span>
                  <span className="text-[10px] text-slate-500 font-sans mt-0.5">Per Guest (All Inclusive)</span>
                </div>
              </div>

              {/* Quick Info Points */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs py-1 border-b border-slate-100">
                  <span className="text-slate-500 font-semibold">Duration:</span>
                  <span className="font-bold text-slate-800">{pack.duration || "Customized"}</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1 border-b border-slate-100">
                  <span className="text-slate-500 font-semibold">Target Vibe:</span>
                  <span className="font-bold text-slate-800">Luxury & Leisure</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1 border-b border-slate-100">
                  <span className="text-slate-500 font-semibold">Guarantees:</span>
                  <span className="font-bold text-emerald-600 flex items-center gap-1">
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
                className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold text-xs tracking-widest uppercase text-center block shadow-lg border border-emerald-400 active:scale-95 duration-300"
              >
                BOOK VIA WHATSAPP
              </a>

              {/* Quick Warning/Note */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex gap-3">
                <Info className="w-5 h-5 text-[#8C6A3D] shrink-0 mt-0.5" />
                <p className="text-[10px] text-slate-600 leading-relaxed font-sans">
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
