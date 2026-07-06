'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Search, MapPin, Calendar, ArrowRight, Compass, Star, X, Check, ChevronRight } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { TOUR_PACKAGES } from '../../data/packages';

export default function PackagesClient() {
  const [isPlannerOpen, setIsPlannerOpen] = useState(false);
  // Smart Trip Planner Form State
  const [plannerForm, setPlannerForm] = useState({
    destination: '',
    travelDate: '',
    travellersCount: '2'
  });

  const handlePlannerSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const waText = `Hello Friends Tours & Travels,\n\nI would like a customized holiday package.\n\n📍 Destination: ${plannerForm.destination}\n📅 Travel Date: ${plannerForm.travelDate}\n👨‍👩‍👧‍👦 Travellers: ${plannerForm.travellersCount}\n\nPlease share the best itinerary and quotation for my trip.\n\nThank you!`;
    const waUrl = `https://wa.me/919303271444?text=${encodeURIComponent(waText)}`;

    const mailSubject = `Customized Holiday Package - ${plannerForm.destination}`;
    const mailBody = `Hello Friends Tours & Travels,\n\nI would like a customized holiday package with the following preferences:\n\n📍 Destination: ${plannerForm.destination}\n📅 Travel Date: ${plannerForm.travelDate}\n👨‍👩‍👧‍👦 Travellers: ${plannerForm.travellersCount}\n\nPlease share the best itinerary and quotation for my trip.\n\nThank you!`;
    const mailUrl = `mailto:friendstoursandtravelsindore@gmail.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

    // Open WhatsApp
    window.open(waUrl, '_blank');
    
    // Open email client
    setTimeout(() => {
      window.location.href = mailUrl;
    }, 1500);

    setEnquirySuccess(true);
    setTimeout(() => {
      setEnquirySuccess(false);
      setPlannerForm({
        destination: '',
        travelDate: '',
        travellersCount: '2'
      });
    }, 3000);
  };

  // Custom Trip Enquiry State
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquirySuccess, setEnquirySuccess] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    duration: 'Customized',
    travelers: '2',
    travelStyle: 'Luxury Bespoke',
    message: ''
  });

  const handlePrefillEnquiry = (destName: string) => {
    setEnquiryForm(prev => ({ ...prev, destination: destName }));
    setEnquiryModalOpen(true);
  };

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // WhatsApp prefilled text redirect
    const waText = `Hello Friends Tours & Travels,\n\nI would like to submit a travel enquiry:\n- Name: ${enquiryForm.name}\n- Email: ${enquiryForm.email}\n- Phone: ${enquiryForm.phone}\n- Destination: ${enquiryForm.destination}\n- Travelers: ${enquiryForm.travelers}\n- Travel Style: ${enquiryForm.travelStyle}\n- Message/Preferences: ${enquiryForm.message || 'N/A'}\n\nPlease contact me with a bespoke itinerary!`;
    const waUrl = `https://wa.me/919303271444?text=${encodeURIComponent(waText)}`;
    
    // Email client fallback mailto
    const mailSubject = `Bespoke Holiday Enquiry - ${enquiryForm.name} - ${enquiryForm.destination}`;
    const mailBody = `Dear Friends Tours & Travels Team,\n\nI would like to submit a travel enquiry with the following preferences:\n\nCUSTOMER DETAILS:\n- Full Name: ${enquiryForm.name}\n- Email: ${enquiryForm.email}\n- Phone: ${enquiryForm.phone}\n\nTRIP PREFERENCES:\n- Selected Holiday Spot: ${enquiryForm.destination}\n- Number of Travelers: ${enquiryForm.travelers}\n- Travel Vibe: ${enquiryForm.travelStyle}\n\nMESSAGE / CUSTOM REQUESTS:\n${enquiryForm.message || 'None'}\n\nPlease guide me with the custom booking details and curated bespoke itineraries.\n\nWarm regards,\n${enquiryForm.name}`;
    const mailUrl = `mailto:friendstoursandtravelsindore@gmail.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
    
    // Attempt WhatsApp, fallback to Email Client after a brief moment
    window.open(waUrl, '_blank');
    setTimeout(() => {
      window.location.href = mailUrl;
    }, 1500);

    setEnquirySuccess(true);
    setTimeout(() => {
      setEnquirySuccess(false);
      setEnquiryModalOpen(false);
      setEnquiryForm({
        name: '',
        email: '',
        phone: '',
        destination: '',
        duration: 'Customized',
        travelers: '2',
        travelStyle: 'Luxury Bespoke',
        message: ''
      });
    }, 3000);
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
              BESPOKE DESTINATIONS
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B1B3A] font-bold tracking-tight uppercase leading-none"
          >
            CURATED <span className="text-[#8C6A3D] italic font-serif">INSPIRATIONS</span>
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
            className="text-xs sm:text-sm text-slate-700 mt-6 max-w-2xl leading-relaxed font-sans font-medium"
          >
            Discover our trending domestic and international destinations. Every trip is fully customized according to your travel dates, budget, and travel preferences. Simply send us your enquiry and our travel experts will prepare the perfect personalized quotation.
          </motion.p>
        </div>
      </section>

      {/* SMART TRIP PLANNER SECTION (Glassmorphism Form or Quick Customize CTA) */}
      <section className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="relative bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-[#8C6A3D]/5 overflow-hidden">
          {/* Subtle gold glow elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A227]/5 rounded-full filter blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#8C6A3D]/5 rounded-full filter blur-[80px] pointer-events-none" />

          <AnimatePresence mode="wait">
            {!isPlannerOpen ? (
              <motion.div
                key="collapsed-planner"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 text-center py-6 flex flex-col items-center justify-center"
              >
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#8C6A3D] uppercase font-bold mb-3 block">
                  ✨ Plan Your Dream Holiday
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#0B1B3A] font-bold uppercase tracking-tight mb-2">
                  Where do you wanna go!
                </h3>
                <p className="text-xs text-slate-500 tracking-wide max-w-md mx-auto mb-8 font-medium leading-relaxed">
                  Craft a fully customized itinerary with our travel specialists designed around your budget and schedule.
                </p>

                <button
                  type="button"
                  onClick={() => setIsPlannerOpen(true)}
                  className="px-8 py-4 bg-[#0B1B3A] hover:bg-[#8C6A3D] text-white font-bold text-xs tracking-widest uppercase rounded-xl duration-300 transition-all shadow-lg flex items-center gap-2.5 cursor-pointer transform hover:scale-[1.02]"
                >
                  <Compass className="w-4 h-4 text-[#C9A227]" />
                  <span>CUSTOMISE MY TOUR</span>
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="expanded-planner"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <div className="flex justify-between items-start mb-8 border-b border-slate-100 pb-5">
                  <div>
                    <span className="text-[10px] font-mono tracking-[0.25em] text-[#8C6A3D] uppercase font-bold mb-1.5 block">
                      ✨ Plan Your Dream Holiday
                    </span>
                    <h2 className="font-serif text-xl sm:text-2xl text-[#0B1B3A] font-bold uppercase tracking-tight">
                      Curate Your Custom Getaway
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsPlannerOpen(false)}
                    className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors duration-200"
                    title="Close form"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form onSubmit={handlePlannerSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Destination */}
                    <div>
                      <label className="block text-[10px] font-mono font-bold tracking-wider text-[#8C6A3D] uppercase mb-2">
                        📍 Destination
                      </label>
                      <input
                        type="text"
                        required
                        value={plannerForm.destination}
                        onChange={(e) => setPlannerForm({ ...plannerForm, destination: e.target.value })}
                        placeholder="Where would you like to travel?"
                        className="w-full px-4 py-3 bg-white/80 border border-slate-200 rounded-xl focus:border-[#8C6A3D] text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#8C6A3D] duration-300 font-medium"
                      />
                    </div>

                    {/* Travel Date */}
                    <div>
                      <label className="block text-[10px] font-mono font-bold tracking-wider text-[#8C6A3D] uppercase mb-2">
                        📅 Travel Date
                      </label>
                      <input
                        type="date"
                        required
                        value={plannerForm.travelDate}
                        onChange={(e) => setPlannerForm({ ...plannerForm, travelDate: e.target.value })}
                        className="w-full px-4 py-3 bg-white/80 border border-slate-200 rounded-xl focus:border-[#8C6A3D] text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#8C6A3D] duration-300 font-medium"
                      />
                    </div>

                    {/* Number of Travellers */}
                    <div>
                      <label className="block text-[10px] font-mono font-bold tracking-wider text-[#8C6A3D] uppercase mb-2">
                        👨‍👩‍👧‍👦 Number of Travellers
                      </label>
                      <input
                        type="number"
                        min="1"
                        required
                        value={plannerForm.travellersCount}
                        onChange={(e) => setPlannerForm({ ...plannerForm, travellersCount: e.target.value })}
                        className="w-full px-4 py-3 bg-white/80 border border-slate-200 rounded-xl focus:border-[#8C6A3D] text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#8C6A3D] duration-300 font-medium"
                      />
                    </div>
                  </div>

                  {/* Submit button */}
                  <div className="pt-4 max-w-md mx-auto">
                    <button
                      type="submit"
                      className="w-full py-4 bg-[#0B1B3A] text-white hover:bg-[#8C6A3D] font-bold text-xs tracking-widest uppercase rounded-xl duration-300 transition-colors shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>💬 GET MY CUSTOMIZED PACKAGE</span>
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Success message overlay inside the card */}
          {enquirySuccess && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#FAF8F5]/95 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6 z-30"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center mb-4 shadow-sm">
                <Check className="w-6 h-6 text-emerald-600" />
              </div>
              <h4 className="font-serif text-lg text-[#0B1B3A] font-bold">Trip Planner Submitted</h4>
              <p className="text-[11px] text-slate-600 max-w-xs mt-2 leading-relaxed font-medium">
                Our experts will custom-craft your package! WhatsApp details and Email options are opening in your browser...
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* TOUR PACKAGES LISTING GRID */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="space-y-24">
          
          {/* INTERNATIONAL DESTINATIONS SECTION */}
          <div>
            <div className="text-center mb-12">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#8C6A3D] uppercase font-bold mb-3 block">
                🌏 Girdle the Globe
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#0B1B3A] font-bold uppercase tracking-tight">
                Trending International Destinations
              </h2>
              <div className="h-[2px] w-24 bg-[#8C6A3D] mx-auto mt-4 mb-3" />
              <p className="text-xs text-slate-600 font-medium max-w-2xl mx-auto">
                Bespoke luxury itineraries crafted for high-end international escapes.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {TOUR_PACKAGES.filter(p => p.type === 'international').map((pack, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  key={pack.id}
                  className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-[#8C6A3D]/40 duration-300 flex flex-col justify-between shadow-xl shadow-slate-100/50"
                >
                  {/* Photo Header */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={pack.coverImage}
                      alt={pack.name}
                      fill
                      className="object-cover group-hover:scale-105 duration-500"
                      referrerPolicy="no-referrer"
                    />
                    {/* Category overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-md rounded-full border border-[#8C6A3D]/30 flex items-center gap-1 text-[10px] font-bold text-[#8C6A3D] uppercase tracking-wider shadow-sm">
                      <span>{pack.badge}</span>
                    </div>

                    {/* Destination Tag */}
                    <div className="absolute bottom-4 right-4 px-3 py-1 bg-[#8C6A3D] text-white text-[9px] font-bold tracking-widest uppercase rounded">
                      🌍 International
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-[#0B1B3A] leading-snug group-hover:text-[#8C6A3D] duration-300 uppercase tracking-wide">
                        {pack.name}
                      </h3>
                      
                      <p className="text-xs text-slate-600 mt-3 leading-relaxed font-medium">
                        {pack.shortDescription}
                      </p>

                      {/* Highlights & What's Included */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 pt-5 border-t border-slate-100">
                        <div>
                          <h4 className="text-[10px] font-mono uppercase text-[#8C6A3D] tracking-widest font-bold mb-3 flex items-center gap-1">
                            <span>✨</span> Destination Highlights
                          </h4>
                          <ul className="space-y-1.5">
                            {pack.highlights.map((h, i) => (
                              <li key={i} className="text-xs text-slate-700 flex items-start gap-1.5 font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#8C6A3D] shrink-0 mt-2" />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-[10px] font-mono uppercase text-[#8C6A3D] tracking-widest font-bold mb-3 flex items-center gap-1">
                            <span>🧳</span> What&apos;s Included
                          </h4>
                          <ul className="space-y-1.5">
                            {pack.whatsIncluded.map((item, i) => (
                              <li key={i} className="text-xs text-slate-700 flex items-start gap-1.5 font-medium">
                                <Check className="w-3.5 h-3.5 text-[#8C6A3D] shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Best For */}
                      <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-mono uppercase text-[#8C6A3D] tracking-widest font-bold">Best For:</span>
                        <span className="text-xs text-slate-600 font-semibold bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">{pack.bestFor}</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="mt-8 pt-5 border-t border-slate-100">
                      <button
                        onClick={() => handlePrefillEnquiry(pack.destination)}
                        className="w-full py-3.5 bg-[#0B1B3A] text-white hover:bg-[#8C6A3D] font-bold text-xs tracking-widest uppercase rounded-xl duration-300 transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>✨ Get Customized Quote</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* DOMESTIC DESTINATIONS SECTION */}
          <div>
            <div className="text-center mb-12">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#8C6A3D] uppercase font-bold mb-3 block">
                🇮🇳 Incredible India
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#0B1B3A] font-bold uppercase tracking-tight">
                Most Loved Domestic Destinations
              </h2>
              <div className="h-[2px] w-24 bg-[#8C6A3D] mx-auto mt-4 mb-3" />
              <p className="text-xs text-slate-600 font-medium max-w-2xl mx-auto">
                Discover the sublime landscapes and holy shrines within our homeland.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {TOUR_PACKAGES.filter(p => p.type === 'domestic').map((pack, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  key={pack.id}
                  className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-[#8C6A3D]/40 duration-300 flex flex-col justify-between shadow-xl shadow-slate-100/50"
                >
                  {/* Photo Header */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={pack.coverImage}
                      alt={pack.name}
                      fill
                      className="object-cover group-hover:scale-105 duration-500"
                      referrerPolicy="no-referrer"
                    />
                    {/* Category overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-md rounded-full border border-[#8C6A3D]/30 flex items-center gap-1 text-[10px] font-bold text-[#8C6A3D] uppercase tracking-wider shadow-sm">
                      <span>{pack.badge}</span>
                    </div>

                    {/* Destination Tag */}
                    <div className="absolute bottom-4 right-4 px-3 py-1 bg-[#8C6A3D] text-white text-[9px] font-bold tracking-widest uppercase rounded">
                      🇮🇳 Domestic
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-[#0B1B3A] leading-snug group-hover:text-[#8C6A3D] duration-300 uppercase tracking-wide">
                        {pack.name}
                      </h3>
                      
                      <p className="text-xs text-slate-600 mt-3 leading-relaxed font-medium">
                        {pack.shortDescription}
                      </p>

                      {/* Highlights & What's Included */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 pt-5 border-t border-slate-100">
                        <div>
                          <h4 className="text-[10px] font-mono uppercase text-[#8C6A3D] tracking-widest font-bold mb-3 flex items-center gap-1">
                            <span>✨</span> Destination Highlights
                          </h4>
                          <ul className="space-y-1.5">
                            {pack.highlights.map((h, i) => (
                              <li key={i} className="text-xs text-slate-700 flex items-start gap-1.5 font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#8C6A3D] shrink-0 mt-2" />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-[10px] font-mono uppercase text-[#8C6A3D] tracking-widest font-bold mb-3 flex items-center gap-1">
                            <span>🧳</span> What&apos;s Included
                          </h4>
                          <ul className="space-y-1.5">
                            {pack.whatsIncluded.map((item, i) => (
                              <li key={i} className="text-xs text-slate-700 flex items-start gap-1.5 font-medium">
                                <Check className="w-3.5 h-3.5 text-[#8C6A3D] shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Best For */}
                      <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-mono uppercase text-[#8C6A3D] tracking-widest font-bold">Best For:</span>
                        <span className="text-xs text-slate-600 font-semibold bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">{pack.bestFor}</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="mt-8 pt-5 border-t border-slate-100">
                      <button
                        onClick={() => handlePrefillEnquiry(pack.destination)}
                        className="w-full py-3.5 bg-[#0B1B3A] text-white hover:bg-[#8C6A3D] font-bold text-xs tracking-widest uppercase rounded-xl duration-300 transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>✨ Get Customized Quote</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM MESSAGE WRAPPER */}
        <div className="mt-20">
          {/* PREMIUM MESSAGE BELOW THE SECTION */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mt-20 p-8 sm:p-12 bg-[#0B1B3A] text-white rounded-3xl relative overflow-hidden shadow-2xl border border-[#C9A227]/30"
              >
                {/* Background elements */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,162,39,0.15),transparent_60%)] pointer-events-none" />
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#C9A227]/5 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
                  <span className="text-xs font-mono text-[#C9A227] tracking-[0.2em] uppercase font-bold mb-3 block">
                    Bespoke Crafted Itineraries
                  </span>
                  
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-bold mb-4 uppercase">
                    Your Dream Holiday, Designed Just for You
                  </h3>

                  <div className="h-[2px] w-24 bg-[#C9A227] mb-6" />

                  <p className="text-xs sm:text-sm text-slate-200 max-w-3xl mb-8 leading-relaxed font-medium">
                    Every holiday is uniquely crafted for you. Simply share your destination, travel dates, number of travellers, and budget. Our travel experts will design a personalized itinerary with the best hotels, sightseeing, transfers, and a customized quotation.
                  </p>

                  <button
                    onClick={() => handlePrefillEnquiry('')}
                    className="px-8 py-4 bg-[#C9A227] hover:bg-[#8C6A3D] text-white font-bold text-xs tracking-widest uppercase rounded-xl transition-all duration-300 shadow-lg shadow-[#C9A227]/20 flex items-center gap-2.5 cursor-pointer hover:scale-105"
                  >
                    <span>CUSTOMIZE MY TRIP</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </div>
          </section>

      {/* QUICK ENQUIRY POPUP MODAL */}
      <AnimatePresence>
        {enquiryModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Dark background glass backdrop overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setEnquiryModalOpen(false)}
              className="absolute inset-0 bg-[#0B1B3A]/80 backdrop-blur-md"
            />

            {/* Modal Body Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative bg-[#FAF8F5] border border-[#C9A227]/30 w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
            >
              <button 
                onClick={() => setEnquiryModalOpen(false)}
                className="absolute top-5 right-5 text-slate-500 hover:text-[#8C6A3D] transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-6">
                <span className="text-[10px] font-mono tracking-widest text-[#8C6A3D] uppercase font-bold">Curated Bespoke Escape</span>
                <h3 className="font-serif text-2xl text-[#0B1B3A] font-bold mt-1">
                  Holiday Enquiry Form
                </h3>
                <div className="h-[2px] w-12 bg-[#8C6A3D] mx-auto mt-2" />
              </div>

              <form onSubmit={handleEnquirySubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono font-bold tracking-wider text-slate-600 uppercase mb-1.5">Full Name</label>
                    <input
                      type="text"
                      required
                      value={enquiryForm.name}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:border-[#8C6A3D] text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-0 duration-300 font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono font-bold tracking-wider text-slate-600 uppercase mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={enquiryForm.phone}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:border-[#8C6A3D] text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-0 duration-300 font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono font-bold tracking-wider text-slate-600 uppercase mb-1.5">Email Address</label>
                    <input
                      type="email"
                      required
                      value={enquiryForm.email}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                      placeholder="e.g. rahul@example.com"
                      className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:border-[#8C6A3D] text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-0 duration-300 font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono font-bold tracking-wider text-slate-600 uppercase mb-1.5">Holiday Spot</label>
                    <input
                      type="text"
                      required
                      value={enquiryForm.destination}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, destination: e.target.value })}
                      placeholder="Destination Name"
                      className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:border-[#8C6A3D] text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-0 duration-300 font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono font-bold tracking-wider text-slate-600 uppercase mb-1.5">Travelers Count & Preference</label>
                  <select
                    value={enquiryForm.travelStyle}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, travelStyle: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:border-[#8C6A3D] text-xs text-slate-800 focus:outline-none focus:ring-0 duration-300 font-medium"
                  >
                    <option value="Honeymoon Couple">Honeymoon / Couple Journey</option>
                    <option value="Family Holiday">Family Holiday Trip</option>
                    <option value="Group Celebration">Friends / Group Getaway</option>
                    <option value="Solo Discovery">Solo Explorer Itinerary</option>
                    <option value="Corporate Retreat">Corporate Wellness Trip</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-mono font-bold tracking-wider text-slate-600 uppercase mb-1.5">Tell us about your Dates, Budget, or Preferences</label>
                  <textarea
                    rows={3}
                    value={enquiryForm.message}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, message: e.target.value })}
                    placeholder="e.g. Planning for October, preferred 5-star resorts, budget: ₹2 Lakhs."
                    className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:border-[#8C6A3D] text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-0 duration-300 font-medium resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#8C6A3D] hover:bg-[#0B1B3A] text-white font-mono text-[10px] tracking-widest uppercase rounded-xl transition-all duration-300 shadow-md font-bold"
                >
                  SUBMIT ENQUIRY
                </button>
              </form>

              {enquirySuccess && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-[#FAF8F5] flex flex-col items-center justify-center text-center p-6"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center mb-4">
                    <Check className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h4 className="font-serif text-lg text-[#0B1B3A] font-bold">Enquiry Successfully Logged</h4>
                  <p className="text-[11px] text-slate-600 max-w-xs mt-2 leading-relaxed font-medium">
                    Our team will craft your custom itinerary! WhatsApp details and falling back to Mailto client...
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />

    </div>
  );
}
