'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  ZoomIn, 
  Sparkles, 
  MessageSquare, 
  Calendar,
  Share2,
  Check,
  Copy,
  ExternalLink
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { GALLERY_ITEMS, GalleryItem, OCCASION_FLYERS, OccasionFlyer } from '../../data/gallery';

export default function GalleryClient() {
  const [activeTab, setActiveTab] = useState('All');
  const [flyerFilter, setFlyerFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [selectedFlyer, setSelectedFlyer] = useState<OccasionFlyer | null>(null);
  const [copiedFlyerId, setCopiedFlyerId] = useState<string | null>(null);

  const whatsappNumber = "919303271444";

  // Unique flyer categories for filter tabs
  const flyerOccasions = ['All', 'Independence Day', "Friendship's Day", 'Festive Holidays', 'Special Celebrations', 'Holiday Deals'];
  const filteredFlyers = OCCASION_FLYERS.filter(
    f => flyerFilter === 'All' || f.occasion === flyerFilter
  );

  // Group unique destinations for tab filters
  const destinations = ['All', 'Manali', 'Goa', 'Jaipur', 'Darjeeling', 'Ooty', 'Uttarakhand'];

  // Filtered gallery items
  const filteredItems = GALLERY_ITEMS.filter(item => 
    activeTab === 'All' || item.destination === activeTab
  );

  // Lightbox handlers for photo gallery
  const openLightbox = (item: GalleryItem) => {
    const index = filteredItems.findIndex(x => x.id === item.id);
    setLightboxIndex(index !== -1 ? index : null);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null && lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    } else if (lightboxIndex === 0) {
      setLightboxIndex(filteredItems.length - 1);
    }
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null && lightboxIndex < filteredItems.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    } else if (lightboxIndex === filteredItems.length - 1) {
      setLightboxIndex(0);
    }
  };

  const currentLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  // Copy flyer link
  const handleCopyFlyerLink = (flyer: OccasionFlyer, e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof window !== 'undefined') {
      const url = `${window.location.origin}/gallery#flyer-${flyer.id}`;
      navigator.clipboard.writeText(url).then(() => {
        setCopiedFlyerId(flyer.id);
        setTimeout(() => setCopiedFlyerId(null), 2500);
      });
    }
  };

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
      <section className="relative pt-36 pb-16 bg-gradient-to-b from-[#EFECE6]/40 via-[#FAF8F5] to-[#FAF8F5] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Ambient background image */}
        <div className="absolute inset-0 z-0 opacity-70 pointer-events-none">
          <Image
            src="https://res.cloudinary.com/dtrvyelcg/image/upload/v1783374253/travel_world_traveltheworld_aeshetic_travelaesthetic_a2glqf.webp"
            alt="Wanderlust Gallery Page Background"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#FAF8F5]/40 mix-blend-multiply" />
        </div>

        {/* Subtle decorative sky glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#C9A227]/10 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF8F5]/90 border border-[#C9A227]/50 mb-6 shadow-md backdrop-blur-sm"
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
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#0B1B3A] font-bold tracking-tight uppercase leading-none text-center"
            style={{ textShadow: '0 2px 4px rgba(255, 255, 255, 0.95), 0 4px 12px rgba(255, 255, 255, 0.85), 0 0 20px rgba(255, 255, 255, 0.6)' }}
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
            className="text-xs sm:text-sm text-[#0B1B3A] mt-6 max-w-xl leading-relaxed font-sans font-bold text-center"
            style={{ textShadow: '0 1px 3px rgba(255, 255, 255, 0.95), 0 2px 8px rgba(255, 255, 255, 0.9)' }}
          >
            Step into the magnificent realms we have unlocked for travelers. Browse our festive occasion flyers, filter photos by destination, and feel the visual essence of your next luxury holiday.
          </motion.p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* OCCASION & FESTIVE FLYERS SECTION */}
      {/* ========================================================================= */}
      <section id="occasion-flyers" className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl border border-[#8C6A3D]/20 p-6 sm:p-10 shadow-xl relative overflow-hidden">
          {/* Subtle gold background gradient blob */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A227]/5 rounded-full filter blur-[80px] pointer-events-none" />

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 text-[#8C6A3D] text-[10px] font-mono font-bold tracking-widest uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#C9A227] animate-pulse" />
                FESTIVE &amp; OCCASION RELEASES
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#0B1B3A] font-bold tracking-tight uppercase">
                OCCASION <span className="text-[#8C6A3D] italic font-serif">FLYERS</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-xl leading-relaxed">
                Special announcements, festive vacation plans, and customized tour flyers celebrating occasions like Independence Day, Friendship&apos;s Day, and seasonal holidays.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello Friends Tours & Travels, I'd like to enquire about your special occasion holiday offers and custom packages.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold tracking-wider uppercase shadow-md transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                ENQUIRE VIA WHATSAPP
              </a>
            </div>
          </div>

          {/* Occasion Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {flyerOccasions.map((occasion) => {
              const isActive = flyerFilter === occasion;
              return (
                <button
                  key={occasion}
                  onClick={() => setFlyerFilter(occasion)}
                  className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-sm cursor-pointer ${
                    isActive
                      ? 'bg-[#0B1B3A] text-[#C9A227] border border-[#C9A227]/40 shadow-md scale-105'
                      : 'bg-white/90 text-slate-700 hover:bg-white hover:text-[#0B1B3A] border border-slate-200'
                  }`}
                >
                  {occasion}
                </button>
              );
            })}
          </div>

          {/* Flyers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFlyers.map((flyer, index) => {
              const flyerWhatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                `Hello Friends Tours & Travels, I saw your "${flyer.title}" flyer on your website gallery. I would like to enquire about booking this special holiday package!`
              )}`;

              return (
                <motion.div
                  key={flyer.id}
                  id={`flyer-${flyer.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-[#FAF8F5] rounded-3xl overflow-hidden border border-[#8C6A3D]/25 hover:border-[#C9A227] shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col"
                >
                  {/* Flyer Image Container (Portrait aspect for flyers) */}
                  <div 
                    onClick={() => setSelectedFlyer(flyer)}
                    className="relative aspect-[3/4] w-full overflow-hidden cursor-pointer bg-slate-900"
                  >
                    <Image
                      src={flyer.url}
                      alt={flyer.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-700 p-1"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      referrerPolicy="no-referrer"
                    />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                      {flyer.isLatest && (
                        <span className="px-3 py-1 rounded-full bg-[#0B1B3A] text-[#C9A227] border border-[#C9A227]/40 text-[9px] font-mono font-bold tracking-widest uppercase shadow-md flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-[#C9A227]" />
                          LATEST
                        </span>
                      )}
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#0B1B3A] border border-slate-200 text-[9px] font-mono font-bold tracking-wider uppercase ml-auto shadow-sm">
                        {flyer.occasion}
                      </span>
                    </div>

                    {/* Hover Overlay with Quick Zoom Prompt */}
                    <div className="absolute inset-0 bg-[#020813]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-4">
                      <div className="p-3 rounded-full bg-white text-[#0B1B3A] shadow-xl group-hover:scale-110 transition-transform duration-300">
                        <ZoomIn className="w-6 h-6 text-[#8C6A3D]" />
                      </div>
                      <span className="text-white text-xs font-bold tracking-wider uppercase drop-shadow">
                        Click to View Full Flyer
                      </span>
                    </div>
                  </div>

                  {/* Flyer Card Details */}
                  <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                    <div>
                      {flyer.date && (
                        <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-1.5">
                          <Calendar className="w-3 h-3 text-[#8C6A3D]" />
                          <span>{flyer.date}</span>
                        </div>
                      )}
                      <h3 className="font-serif text-lg font-bold text-[#0B1B3A] leading-snug group-hover:text-[#8C6A3D] transition-colors">
                        {flyer.title}
                      </h3>
                      {flyer.tagline && (
                        <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                          {flyer.tagline}
                        </p>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-3 border-t border-slate-200/80 flex items-center gap-2">
                      <a
                        href={flyerWhatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 px-3 rounded-xl bg-[#0B1B3A] hover:bg-[#8C6A3D] text-white text-[10px] sm:text-xs font-bold tracking-wider uppercase text-center flex items-center justify-center gap-1.5 transition-colors duration-300 shadow-sm cursor-pointer"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Enquire Now</span>
                      </a>

                      <button
                        onClick={(e) => handleCopyFlyerLink(flyer, e)}
                        className="p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-[#0B1B3A] transition-colors shadow-sm cursor-pointer"
                        title="Share / Copy Link"
                      >
                        {copiedFlyerId === flyer.id ? (
                          <Check className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Share2 className="w-4 h-4 text-slate-600" />
                        )}
                      </button>

                      <button
                        onClick={() => setSelectedFlyer(flyer)}
                        className="p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-[#0B1B3A] transition-colors shadow-sm cursor-pointer"
                        title="View Fullscreen"
                      >
                        <ExternalLink className="w-4 h-4 text-[#8C6A3D]" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* DESTINATION PHOTO PORTFOLIO SECTION */}
      {/* ========================================================================= */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="text-center space-y-2 mb-8">
          <span className="text-[10px] font-mono tracking-[0.25em] text-[#8C6A3D] uppercase font-bold">
            HANDPICKED DESTINATIONS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0B1B3A] font-bold tracking-tight uppercase">
            DESTINATION <span className="text-[#8C6A3D] italic font-serif">GALLERY</span>
          </h2>
        </div>

        {/* FILTER TABS */}
        <div className="flex flex-wrap gap-2.5 justify-center py-3 border-b border-[#0B1B3A]/10 mb-12">
          {destinations.map((dest) => (
            <button
              key={dest}
              onClick={() => {
                setActiveTab(dest);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-sm relative cursor-pointer ${
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

      {/* PHOTO GALLERY GRID SECTION */}
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
                  sizes="(max-width: 768px) 100vw, 33vw"
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

      {/* ========================================================================= */}
      {/* FULLSCREEN FLYER MODAL / LIGHTBOX */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedFlyer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedFlyer(null)}
            className="fixed inset-0 z-50 bg-[#020813]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between relative z-10 w-full max-w-7xl mx-auto py-2">
              <div className="flex flex-col">
                <span className="text-[10px] font-mono tracking-widest text-[#C9A227] uppercase flex items-center gap-1 font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
                  {selectedFlyer.occasion} Special Flyer
                </span>
                <span className="text-white text-sm sm:text-base font-semibold tracking-wide mt-0.5 font-serif">
                  {selectedFlyer.title}
                </span>
              </div>
              
              <button 
                onClick={() => setSelectedFlyer(null)}
                className="p-3 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close Flyer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Flyer Viewer Box */}
            <div className="relative flex-1 flex items-center justify-center w-full max-w-4xl mx-auto my-3">
              <div 
                className="relative w-full h-[70vh] sm:h-[75vh] rounded-2xl overflow-hidden shadow-2xl border border-[#8C6A3D]/40 bg-[#020813]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedFlyer.url}
                  alt={selectedFlyer.title}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  referrerPolicy="no-referrer"
                  priority
                />
              </div>
            </div>

            {/* Bottom Actions Bar */}
            <div className="text-center relative z-10 w-full max-w-xl mx-auto pb-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  `Hello Friends Tours & Travels, I would like to book or enquire about your special "${selectedFlyer.title}" holiday package!`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-105"
              >
                <MessageSquare className="w-4 h-4" />
                Book or Enquire on WhatsApp
              </a>

              <a
                href={selectedFlyer.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 border border-white/20 transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-[#C9A227]" />
                Open Original Image
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* FULLSCREEN PHOTO LIGHTBOX MODAL */}
      {/* ========================================================================= */}
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
                className="p-3 rounded-full hover:bg-white/5 text-gray-300 hover:text-white transition-colors cursor-pointer"
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
                className="absolute left-0 sm:-left-12 z-20 p-3 rounded-full bg-[#020813]/60 hover:bg-[#C9A227] border border-white/5 hover:border-[#C9A227] text-white hover:text-[#020813] duration-300 shadow backdrop-blur-sm cursor-pointer"
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
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Right Arrow Trigger */}
              <button 
                onClick={showNext}
                className="absolute right-0 sm:-right-12 z-20 p-3 rounded-full bg-[#020813]/60 hover:bg-[#C9A227] border border-white/5 hover:border-[#C9A227] text-white hover:text-[#020813] duration-300 shadow backdrop-blur-sm cursor-pointer"
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
