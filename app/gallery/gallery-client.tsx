'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, X, ChevronLeft, ChevronRight, MapPin, ZoomIn } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { GALLERY_ITEMS, GalleryItem } from '../../data/gallery';

export default function GalleryClient() {
  const [activeTab, setActiveTab] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Group unique destinations for tab filters
  const destinations = ['All', 'Manali', 'Goa', 'Jaipur', 'Darjeeling', 'Ooty', 'Uttarakhand'];

  // Filtered gallery items
  const filteredItems = GALLERY_ITEMS.filter(item => 
    activeTab === 'All' || item.destination === activeTab
  );

  // Lightbox handlers
  const openLightbox = (item: GalleryItem) => {
    // Find absolute index of item in the filtered list
    const index = filteredItems.findIndex(x => x.id === item.id);
    setLightboxIndex(index !== -1 ? index : null);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null && lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    } else if (lightboxIndex === 0) {
      setLightboxIndex(filteredItems.length - 1); // Wrap around
    }
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null && lightboxIndex < filteredItems.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    } else if (lightboxIndex === filteredItems.length - 1) {
      setLightboxIndex(0); // Wrap around
    }
  };

  const currentLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

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

      {/* HERO BANNER SECTION */}
      <section className="relative pt-36 pb-16 bg-gradient-to-b from-[#EFECE6]/40 via-[#FAF8F5] to-[#FAF8F5] flex flex-col items-center justify-center text-center px-4">
        {/* Subtle decorative sky glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#C9A227]/10 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#C9A227]/40 mb-6 backdrop-blur-sm"
          >
            <Compass className="w-4 h-4 text-[#8C6A3D] animate-spin-slow" />
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#0B1B3A] uppercase font-bold">
              PORTFOLIO OF WANDERLUST
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#0B1B3A] font-bold tracking-tight uppercase leading-none"
          >
            WANDERLUST <span className="text-[#8C6A3D] italic font-serif">GALLERY</span>
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
            Step into the magnificent realms we have unlocked for travelers. Filter photos by destination, explore raw details, and feel the visual essence of your next luxury holiday.
          </motion.p>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap gap-2.5 justify-center py-3 border-b border-[#0B1B3A]/10">
          {destinations.map((dest) => (
            <button
              key={dest}
              onClick={() => {
                setActiveTab(dest);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-sm relative ${
                activeTab === dest
                  ? 'text-white bg-[#0B1B3A] scale-105'
                  : 'text-slate-800 bg-[#FAF8F5] hover:text-[#C9A227] hover:bg-white border border-[#0B1B3A]/10'
              }`}
            >
              {dest}
            </button>
          ))}
        </div>
      </section>

      {/* GALLERY GRID SECTION */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <AnimatePresence mode="popLayout">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => openLightbox(item)}
                className="group relative h-72 rounded-3xl overflow-hidden border border-[#0B1B3A]/10 cursor-pointer shadow-xl hover:border-[#C9A227] duration-300 bg-[#FAF8F5]"
              >
                <Image
                  src={item.url}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 duration-500"
                  sizes="(max-w-768px) 100vw, 33vw"
                  referrerPolicy="no-referrer"
                />
                
                {/* Dark Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020813] via-[#020813]/40 to-transparent opacity-80 sm:opacity-0 sm:group-hover:opacity-90 duration-300" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-2 sm:translate-y-4 sm:group-hover:translate-y-0 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 duration-300 z-10">
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono tracking-widest text-[#C9A227] uppercase flex items-center gap-1 font-bold">
                      <MapPin className="w-3.5 h-3.5 text-[#C9A227]" />
                      {item.destination}
                    </span>
                    <h3 className="font-serif text-lg text-white font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-gray-200 leading-normal font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Floating Zoom Icon */}
                <div className="absolute top-4 right-4 p-2 rounded-full bg-[#020813]/80 border border-white/10 text-[#C9A227] opacity-100 sm:opacity-0 sm:group-hover:opacity-100 duration-300 backdrop-blur-sm shadow">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {currentLightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-[#020813]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between relative z-10 w-full max-w-7xl mx-auto py-2">
              <div className="flex flex-col">
                <span className="text-[9px] font-mono tracking-widest text-[#C9A227] uppercase flex items-center gap-1 font-bold">
                  <MapPin className="w-3.5 h-3.5" />
                  {currentLightboxItem.destination}
                </span>
                <span className="text-white text-xs sm:text-sm font-semibold tracking-wide mt-0.5">
                  {currentLightboxItem.title}
                </span>
              </div>
              
              <button 
                onClick={closeLightbox}
                className="p-3 rounded-full hover:bg-white/5 text-gray-300 hover:text-white transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Middle Slider Container */}
            <div className="relative flex-1 flex items-center justify-center w-full max-w-5xl mx-auto my-4">
              {/* Left Arrow Trigger */}
              <button 
                onClick={showPrev}
                className="absolute left-0 sm:-left-12 z-20 p-3 rounded-full bg-[#020813]/60 hover:bg-[#C9A227] border border-white/5 hover:border-[#C9A227] text-white hover:text-[#020813] duration-300 shadow backdrop-blur-sm"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Main Image Viewport */}
              <div 
                className="relative w-full h-[65vh] sm:h-[70vh] rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-[#020813]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={currentLightboxItem.url}
                  alt={currentLightboxItem.title}
                  fill
                  className="object-contain"
                  sizes="(max-w-1024px) 100vw, 1024px"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Right Arrow Trigger */}
              <button 
                onClick={showNext}
                className="absolute right-0 sm:-right-12 z-20 p-3 rounded-full bg-[#020813]/60 hover:bg-[#C9A227] border border-white/5 hover:border-[#C9A227] text-white hover:text-[#020813] duration-300 shadow backdrop-blur-sm"
                aria-label="Next Image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Info Bar */}
            <div className="text-center relative z-10 w-full max-w-xl mx-auto pb-4">
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-md mx-auto">
                {currentLightboxItem.description}
              </p>
              <span className="inline-block text-[10px] font-mono text-gray-500 mt-3 tracking-widest uppercase">
                IMAGE {lightboxIndex !== null ? lightboxIndex + 1 : 0} OF {filteredItems.length}
              </span>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      <Footer />

    </div>
  );
}
