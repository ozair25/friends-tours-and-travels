'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Search, MapPin, Calendar, ArrowRight, Compass } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { TOUR_PACKAGES } from '../../data/packages';

export default function PackagesClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  // Filter unique destinations for quick selector buttons
  const destinations = ['All', ...Array.from(new Set(TOUR_PACKAGES.map(p => p.destination)))];

  // Filtering Logic
  const filteredPackages = TOUR_PACKAGES.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === 'All' || p.destination === activeFilter;
    return matchesSearch && matchesFilter;
  });

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

      {/* HERO SECTION */}
      <section className="relative pt-36 pb-20 bg-gradient-to-b from-[#EFECE6]/40 via-[#FAF8F5] to-[#FAF8F5] flex flex-col items-center justify-center text-center px-4">
        {/* Subtle decorative sky glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#C9A227]/5 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFECE6] border border-[#C9A227]/30 mb-6"
          >
            <Compass className="w-4 h-4 text-[#8C6A3D] animate-spin-slow" />
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#0B1B3A] uppercase font-bold">
              MONTHLY HOT DEALS
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#0B1B3A] font-bold tracking-tight uppercase leading-none"
          >
            OUR CURATED <span className="text-[#8C6A3D] italic font-serif">JOURNEYS</span>
          </motion.h1>

          {/* Slogan ornament */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex items-center gap-3 mt-6 w-48 sm:w-64"
          >
            <div className="h-[1px] flex-1 bg-[#8C6A3D]/40"></div>
            <div className="w-2 h-2 rounded-full bg-[#8C6A3D]"></div>
            <div className="h-[1px] flex-1 bg-[#8C6A3D]/40"></div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs sm:text-sm text-slate-700 mt-6 max-w-xl leading-relaxed font-sans font-medium"
          >
            Discover handpicked, all-inclusive luxury holiday experiences across India. Plan with confidence — our itineraries are bespoke, flexible, and updated monthly for seasonal excellence.
          </motion.p>
        </div>
      </section>

      {/* FILTER & SEARCH BAR SECTION */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Search Input */}
          <div className="relative w-full md:max-w-md">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <Search className="w-5 h-5 text-slate-400" />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by destination or package name..."
              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-[#8C6A3D] text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-0 duration-300 font-medium"
            />
          </div>

          {/* Quick Destination Selectors */}
          <div className="flex flex-wrap gap-2 justify-center w-full md:w-auto">
            {destinations.map((dest) => (
              <button
                key={dest}
                onClick={() => setActiveFilter(dest)}
                className={`px-4 py-2 rounded-xl text-[10px] font-bold tracking-widest uppercase transition-all duration-300 ${
                  activeFilter === dest
                    ? 'bg-[#0B1B3A] text-white shadow-md'
                    : 'bg-slate-100 border border-slate-200 text-slate-700 hover:text-[#8C6A3D] hover:border-[#8C6A3D]/30'
                }`}
              >
                {dest}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* TOUR PACKAGES LISTING GRID */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <AnimatePresence mode="popLayout">
          {filteredPackages.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPackages.map((pack, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  key={pack.id}
                  className="group relative bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xl hover:border-[#8C6A3D]/50 duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Cover Photo */}
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={pack.coverImage}
                        alt={pack.name}
                        fill
                        className="object-cover group-hover:scale-110 duration-500"
                        referrerPolicy="no-referrer"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020813]/60 via-[#020813]/10 to-transparent" />
                      
                      {/* Destination tag */}
                      <span className="absolute top-4 left-4 bg-[#0B1B3A]/90 border border-white/10 text-[#C9A227] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full backdrop-blur-sm">
                        {pack.destination}
                      </span>

                      {/* Duration badge */}
                      <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-white/90 border border-slate-200 rounded-lg px-2.5 py-1 text-[10px] text-slate-800 backdrop-blur-sm font-bold shadow-sm">
                        <Calendar className="w-3.5 h-3.5 text-[#8C6A3D]" />
                        <span>{pack.duration}</span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-1 text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2 font-bold">
                        <span>Luxury Concierge</span>
                        <span className="w-1 h-1 rounded-full bg-slate-400" />
                        <span>All Inclusive</span>
                      </div>

                      <h3 className="font-serif text-xl text-[#0B1B3A] font-bold tracking-wide leading-snug group-hover:text-[#8C6A3D] transition-colors duration-300">
                        {pack.name}
                      </h3>

                      <p className="text-xs text-slate-600 mt-3 leading-relaxed line-clamp-3">
                        {pack.shortDescription}
                      </p>

                      {/* Highlights preview */}
                      <div className="mt-5 pt-5 border-t border-slate-100">
                        <span className="text-[9px] font-mono uppercase text-[#8C6A3D] tracking-widest font-bold">Key Highlights:</span>
                        <ul className="space-y-1.5 mt-2">
                          {pack.highlights.slice(0, 2).map((high, i) => (
                            <li key={i} className="text-xs text-slate-700 flex items-start gap-1.5 font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#8C6A3D] shrink-0 mt-1.5" />
                              <span className="line-clamp-1">{high}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Pricing and Action */}
                  <div className="p-6 pt-0">
                    <div className="flex items-center justify-between pt-5 border-t border-slate-100">
                      <div>
                        <span className="text-[10px] text-slate-500 block uppercase tracking-wider font-bold">STARTING PRICE</span>
                        <span className="font-serif text-lg text-[#8C6A3D] font-bold">{pack.startingPrice} <span className="text-[10px] text-slate-500 font-sans">/ pax</span></span>
                      </div>
                      
                      <Link 
                        href={`/packages/${pack.id}`}
                        prefetch={true}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#0B1B3A] text-white hover:bg-[#8C6A3D] text-[10px] font-bold tracking-widest uppercase rounded-xl duration-300 group/btn shadow-md"
                      >
                        VIEW DETAILS
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 duration-300" />
                      </Link>
                    </div>
                  </div>

                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center text-center py-20 border border-dashed border-slate-300 bg-white rounded-3xl"
            >
              <Compass className="w-12 h-12 text-[#8C6A3D] animate-bounce mb-4" />
              <h3 className="font-serif text-lg text-[#0B1B3A] font-bold">No Curated Packages Found</h3>
              <p className="text-xs text-slate-600 max-w-xs mt-2 leading-relaxed">
                We couldn&apos;t find matching results for your query. Try selecting another destination or refine your search.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <Footer />

    </div>
  );
}
