'use client';

import React, { useState, useEffect, useSyncExternalStore } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, 
  MapPin, 
  Calendar, 
  Users, 
  Plane, 
  Phone, 
  Mail, 
  MessageSquare, 
  Check, 
  X, 
  Menu, 
  Star, 
  ChevronRight, 
  ChevronDown, 
  Clock, 
  ShieldCheck, 
  Award, 
  Briefcase, 
  Sparkles, 
  Download, 
  Printer, 
  Heart, 
  Map, 
  Search,
  CheckCircle2,
  HelpCircle,
  TrendingUp
} from 'lucide-react';
import { DESTINATIONS, Destination } from '../lib/destinations';
import { TOUR_PACKAGES } from '../data/packages';

export default function HomePage() {
  const router = useRouter();
  const isClient = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  // Navigation & UI States
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  
  // Custom Trip Enquiry State
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquirySuccess, setEnquirySuccess] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    duration: '5',
    travelers: '2',
    travelStyle: 'Luxury Heritage',
    message: ''
  });

  // Active navigation tracking on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      const sections = ['home', 'destinations', 'packages', 'about', 'contact'];
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Quick prefills
  const handlePrefillEnquiry = (destName: string) => {
    setEnquiryForm(prev => ({ ...prev, destination: destName }));
    setEnquiryModalOpen(true);
  };

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappNum = "919303271444";
    const emailAddr = "lpagrawal48@gmail.com";
    
    // 1. Build WhatsApp Text
    const waText = `Hello Friends Tours & Travels,\n\nI would like to submit a luxury travel enquiry:\n- Name: ${enquiryForm.name}\n- Email: ${enquiryForm.email}\n- Phone: ${enquiryForm.phone}\n- Destination: ${enquiryForm.destination}\n- Duration: ${enquiryForm.duration} Days\n- Travelers: ${enquiryForm.travelers}\n- Travel Style: ${enquiryForm.travelStyle}\n- Message/Preferences: ${enquiryForm.message || 'N/A'}\n\nPlease contact me with a bespoke itinerary!`;
    const whatsappUrl = `https://wa.me/${whatsappNum}?text=${encodeURIComponent(waText)}`;
    
    // 2. Build Email Mailto Link
    const mailSubject = `Luxury Travel Enquiry - ${enquiryForm.name} - ${enquiryForm.destination}`;
    const mailBody = `Dear Friends Tours & Travels Team,\n\nI would like to submit a luxury travel enquiry with the following preferences:\n\nCUSTOMER DETAILS:\n- Full Name: ${enquiryForm.name}\n- Email: ${enquiryForm.email}\n- Phone: ${enquiryForm.phone}\n\nTRIP PREFERENCES:\n- Selected Holiday Spot: ${enquiryForm.destination}\n- Preferred Duration: ${enquiryForm.duration} Days\n- Number of Travelers: ${enquiryForm.travelers}\n- Travel Style / Vibe: ${enquiryForm.travelStyle}\n\nMESSAGE / CUSTOM REQUESTS:\n${enquiryForm.message || 'None'}\n\nPlease guide me with the custom booking details and curated luxury itineraries.\n\nWarm regards,\n${enquiryForm.name}`;
    const mailtoUrl = `mailto:${emailAddr}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
    
    // 3. Trigger Both Redirects
    // Open WhatsApp in a new window/tab
    window.open(whatsappUrl, '_blank');
    
    // Launch mail client in the current window
    window.location.href = mailtoUrl;

    setEnquirySuccess(true);
    setTimeout(() => {
      setEnquirySuccess(false);
      setEnquiryModalOpen(false);
      // Reset form
      setEnquiryForm({
        name: '',
        email: '',
        phone: '',
        destination: '',
        duration: '5',
        travelers: '2',
        travelStyle: 'Luxury Heritage',
        message: ''
      });
    }, 4000);
  };

  // Printable Itinerary
  const handlePrintItinerary = () => {
    window.print();
  };

  if (!isClient) {
    return (
      <div className="relative min-h-screen text-slate-800 bg-[#FAF8F5] flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-16 h-16 animate-spin duration-1000">
            <Compass className="w-16 h-16 text-[#8C6A3D]" />
          </div>
          <span className="font-serif text-sm tracking-[0.2em] text-[#0B1B3A]/80 uppercase animate-pulse font-bold">
            Friends Tours & Travels
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen text-slate-800 bg-[#FAF8F5] overflow-x-hidden selection:bg-amber-400 selection:text-slate-900">
      
      {/* IMMERSIVE LUXURY SUNSET CORNER SHINE & LIGHTNING EDGE EFFECT */}
      <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden sunset-frame">
        {/* Glowing border frame with subtle gold sunset stroke */}
        <div className="absolute inset-2 sm:inset-4 md:inset-6 border border-brand-gold/15 rounded-lg sm:rounded-xl pointer-events-none" />
        
        {/* Corner 1: Top-Left Sunset Burst */}
        <div className="absolute top-0 left-0 w-80 h-80 sunset-sunray-tl animate-sunset-shimmer opacity-80 pointer-events-none" />
        <div className="absolute top-4 left-4 w-12 h-12 flex items-center justify-center opacity-45 pointer-events-none">
          <div className="w-1.5 h-1.5 bg-brand-gold rounded-full filter blur-[1px] animate-pulse pointer-events-none" />
        </div>

        {/* Corner 2: Top-Right Crimson Sun flare */}
        <div className="absolute top-0 right-0 w-80 h-80 sunset-sunray-tr animate-sunset-shimmer [animation-delay:2s] opacity-75 pointer-events-none" />
        <div className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center opacity-45 pointer-events-none">
          <div className="w-1.5 h-1.5 bg-brand-gold rounded-full filter blur-[1px] animate-pulse pointer-events-none" />
        </div>

        {/* Corner 3: Bottom-Left Amber Shine */}
        <div className="absolute bottom-0 left-0 w-80 h-80 sunset-sunray-bl animate-sunset-shimmer [animation-delay:4s] opacity-75 pointer-events-none" />
        <div className="absolute bottom-4 left-4 w-12 h-12 flex items-center justify-center opacity-45 pointer-events-none">
          <div className="w-1.5 h-1.5 bg-brand-gold rounded-full filter blur-[1px] animate-pulse pointer-events-none" />
        </div>

        {/* Corner 4: Bottom-Right Warm Sunset Flare */}
        <div className="absolute bottom-0 right-0 w-80 h-80 sunset-sunray-br animate-sunset-shimmer [animation-delay:1.5s] opacity-80 pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-12 h-12 flex items-center justify-center opacity-45 pointer-events-none">
          <div className="w-1.5 h-1.5 bg-brand-gold rounded-full filter blur-[1px] animate-pulse pointer-events-none" />
        </div>

        {/* Framing edge lighting beams on left/right and top/bottom */}
        <div className="absolute left-2 sm:left-4 md:left-6 top-0 bottom-0 w-[1px] sunset-edge-glow-v opacity-40 pointer-events-none" />
        <div className="absolute right-2 sm:right-4 md:right-6 top-0 bottom-0 w-[1px] sunset-edge-glow-v opacity-40 pointer-events-none" />
        <div className="absolute top-2 sm:top-4 md:top-6 left-0 right-0 h-[1px] sunset-edge-glow-h opacity-45 pointer-events-none" />
        <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 left-0 right-0 h-[1px] sunset-edge-glow-h opacity-45 pointer-events-none" />

        {/* Extra golden sunray reflections */}
        <div className="absolute top-0 left-1/4 w-[1px] h-32 bg-gradient-to-b from-brand-gold/30 via-amber-500/10 to-transparent transform -rotate-12 origin-top pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[1px] h-32 bg-gradient-to-t from-amber-500/30 via-brand-gold/10 to-transparent transform -rotate-12 origin-bottom pointer-events-none" />
      </div>

      {/* BACKGROUND DECORATIVE ELEMENTS */}
      <div className="absolute top-0 left-0 w-full h-[120vh] bg-gradient-to-b from-[#EFECE6]/40 via-[#FAF8F5]/80 to-[#FAF8F5] pointer-events-none z-0" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#C9A227]/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute top-2/3 left-0 w-96 h-96 bg-[#8C6A3D]/5 rounded-full filter blur-[120px] pointer-events-none" />

      {/* TOP FLOATING NAVIGATION BAR */}
      <header className="fixed top-0 left-0 w-full bg-[#0B1B3A] backdrop-blur-md border-b border-white/10 z-50 transition-all duration-300 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* SVG Vector Logo (matches the high fidelity logo of the image) */}
          <a href="#home" className="flex items-center gap-3 md:gap-3.5 group">
            <div className="relative w-12 h-12 md:w-[55px] md:h-[55px] flex items-center justify-center rounded-full border border-brand-gold/45 bg-[#0B1B3A] p-1 group-hover:border-brand-gold duration-300">
              <svg viewBox="0 0 100 100" className="w-full h-full text-brand-gold animate-spin-slow">
                {/* Compass Circle */}
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2,2" />
                <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="1" />
                {/* Compass Points */}
                <path d="M50,15 L53,42 L80,45 L53,48 L50,85 L47,48 L20,45 L47,42 Z" fill="currentColor" opacity="0.8" />
                <path d="M50,22 L52,42 L70,45 L52,48 L50,78 L48,48 L30,45 L48,42 Z" fill="#0B1B3A" />
                {/* Center Core */}
                <circle cx="50" cy="50" r="6" fill="currentColor" />
                <circle cx="50" cy="50" r="2" fill="#0B1B3A" />
              </svg>
              {/* Overlay Star Compass Label */}
              <span className="absolute text-[6px] md:text-[7px] font-bold text-brand-gold-light -top-1 md:-top-[5px] font-serif">N</span>
              <span className="absolute text-[6px] md:text-[7px] font-bold text-brand-gold-light -bottom-1 md:-bottom-[5px] font-serif">S</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg md:text-[21px] tracking-widest font-semibold leading-tight text-white group-hover:text-[#C9A227] duration-300">
                FRIENDS
              </span>
              <span className="font-serif text-[10px] md:text-[11.5px] tracking-[0.25em] font-medium leading-none text-[#C9A227] flex items-center gap-1">
                TOURS & TRAVELS
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {[
              { label: 'HOME', path: '#home', id: 'home' },
              { label: 'POPULAR DESTINATIONS', path: '#destinations', id: 'destinations' },
              { label: 'TOUR PACKAGES', path: '/packages', id: 'packages' },
              { label: 'GALLERY', path: '/gallery', id: 'gallery' },
              { label: 'ABOUT US', path: '/about', id: 'about' },
              { label: 'CONTACT US', path: '/contact', id: 'contact' },
            ].map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.label}
                  href={link.path}
                  prefetch={true}
                  className={`relative font-sans text-xs tracking-widest font-bold transition-all duration-300 py-2 hover:text-[#C9A227] ${
                    isActive ? 'text-[#C9A227]' : 'text-slate-100'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#C9A227] to-[#8C6A3D] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => handlePrefillEnquiry('')}
              className="px-5 py-2.5 rounded-full border border-[#C9A227] bg-[#C9A227] text-[#0B1B3A] text-xs font-bold tracking-wider hover:bg-transparent hover:text-white hover:border-white active:scale-95 duration-300 flex items-center gap-2 group shadow-lg"
            >
              ENQUIRE NOW
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 duration-300" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:text-[#C9A227] hover:bg-white/5 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/10 bg-[#0B1B3A] px-4 py-6 flex flex-col gap-4 shadow-2xl"
            >
              {[
                { label: 'Home', path: '#home', id: 'home' },
                { label: 'Popular Destinations', path: '#destinations', id: 'destinations' },
                { label: 'Tour Packages', path: '/packages', id: 'packages' },
                { label: 'Gallery', path: '/gallery', id: 'gallery' },
                { label: 'About Us', path: '/about', id: 'about' },
                { label: 'Contact Us', path: '/contact', id: 'contact' },
              ].map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <Link
                    key={link.label}
                    href={link.path}
                    prefetch={true}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2 rounded-lg text-sm font-bold tracking-wide transition-colors ${
                      isActive 
                        ? 'bg-white/10 text-[#C9A227] border-l-2 border-[#C9A227]' 
                        : 'text-slate-200 hover:text-[#C9A227] hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <button 
                onClick={() => {
                  handlePrefillEnquiry('');
                  setMobileMenuOpen(false);
                }}
                className="mt-2 w-full py-3 bg-[#C9A227] text-[#0B1B3A] text-sm font-semibold tracking-widest rounded-xl hover:bg-amber-400 active:scale-[0.98] duration-300 shadow-xl flex items-center justify-center gap-2"
              >
                ENQUIRE NOW
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer to prevent layout shift from fixed header */}
      <div className="h-20 w-full" />

      {/* HERO BANNER SECTION (Matches Airplane + Cloud reference image perfectly) */}
      <section id="home" className="relative min-h-[95vh] sm:min-h-screen lg:min-h-[110vh] flex flex-col justify-between items-center pt-16 pb-20 sm:pb-24 px-4 z-10 overflow-hidden">
        
        {/* Sky Background with Clouds and Dreamliner plane */}
        <div className="absolute inset-0 z-0">
          {/* Mobile View Background Image */}
          <div className="block sm:hidden absolute inset-0">
            <Image
              src="https://res.cloudinary.com/dtrvyelcg/image/upload/v1782943271/ChatGPT_Image_Jul_1_2026_12_44_13_AM_q0ctqd.png"
              alt="Dreamliner plane flying in pristine blue sky and soft clouds"
              fill
              className="object-cover object-[70%_center] opacity-100 brightness-105"
              style={{
                marginLeft: '4px',
                marginRight: '-5px',
                marginBottom: '-3px',
                paddingBottom: '-1px',
                paddingTop: '-1px',
                paddingLeft: '-1px',
                paddingRight: '-3px',
                marginTop: '-90px',
              }}
              priority
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop View Background Image */}
          <div className="hidden sm:block absolute inset-0">
            <Image
              src="https://res.cloudinary.com/dtrvyelcg/image/upload/v1782943255/ChatGPT_Image_Jul_1_2026_05_58_58_PM_vdx6is.png"
              alt="Dreamliner plane flying in pristine blue sky and soft clouds"
              fill
              className="object-cover sm:object-center opacity-100 brightness-105"
              style={{
                marginTop: '-44px',
                marginLeft: '5px',
                marginRight: '-4px',
                marginBottom: '-5px',
                paddingBottom: '-3px',
                paddingRight: '-4px',
                paddingLeft: '-3px',
                paddingTop: '-10px',
              }}
              priority
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Left-side Dark Overlay for Desktop Only */}
          <div className="hidden sm:block absolute inset-y-0 left-0 w-[45%] z-[2] pointer-events-none" style={{ background: 'linear-gradient(to right, rgba(11, 27, 58, 0.95) 0%, rgba(11, 27, 58, 0.6) 65%, rgba(11, 27, 58, 0) 100%)' }} />

          {/* Mobile View Dark Overlay for superb readability */}
          <div className="block sm:hidden absolute inset-0 bg-gradient-to-b from-[#0B1B3A]/60 via-[#0B1B3A]/30 to-transparent z-[2] pointer-events-none" />

          {/* Sophisticated gradient overlay to blend into light cream at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/10 via-transparent to-[#FAF8F5]/10" />
        </div>

        {/* MOBILE ONLY HERO CONTENT */}
        <div className="sm:hidden relative w-full flex flex-col items-center justify-between h-full z-20">
          <div className="relative max-w-4xl mx-auto text-center flex flex-col items-center mt-6 z-20">
            {/* Friends Logo Right Above the Airplane */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <div className="relative flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/dtrvyelcg/image/upload/v1782917857/ChatGPT_Image_Jul_1_2026_08_27_19_PM_wjic7a.png"
                  alt="Friends Tours & Travels Official Logo"
                  className="w-[276px] h-[306px] object-contain -translate-y-[10%] translate-x-[15px]"
                  style={{
                    marginLeft: '85px',
                    marginTop: '-148px',
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = document.getElementById('logo-fallback-mobile');
                    if (fallback) fallback.classList.remove('hidden');
                  }}
                />
                <div 
                  id="logo-fallback-mobile" 
                  className="hidden absolute inset-0 flex flex-col items-center justify-center p-4 text-center"
                >
                  <Compass className="w-12 h-12 text-brand-gold animate-pulse mb-1" />
                  <span className="font-serif text-[10px] tracking-[0.2em] text-[#F7F1E1] uppercase font-semibold">
                    Friends
                  </span>
                  <span className="text-[7px] tracking-[0.1em] text-brand-gold uppercase">
                    Tours & Travels
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Tagline above heading */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3 justify-center w-full mb-4 mt-6"
            >
              <div className="h-[1px] w-6 bg-[#C9A227]/80"></div>
              <span
                className="text-[11px] tracking-[0.25em] font-serif italic font-extrabold text-[#C9A227] uppercase whitespace-nowrap"
                style={{
                  paddingTop: '-3px',
                  paddingLeft: '-1px',
                  paddingRight: '-1px',
                  paddingBottom: '-1px',
                  marginLeft: '-36px',
                  marginRight: '-40px',
                  marginTop: '-140px',
                  textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 1px 2px rgba(0,0,0,0.9)',
                }}
              >
                Explore • <span className="text-white font-extrabold">Experience</span> • Enjoy
              </span>
              <div className="h-[1px] w-6 bg-[#C9A227]/80"></div>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative select-none text-center mb-4 px-4 hero-title-wrapper"
            >
              {/* Soft radial gradient background for supreme readability */}
              <div 
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                style={{
                  width: '900px',
                  height: '420px',
                  background: 'radial-gradient(ellipse, rgba(11,27,58,0.7) 0%, rgba(11,27,58,0.45) 40%, rgba(11,27,58,0.15) 65%, rgba(11,27,58,0) 100%)',
                  filter: 'blur(35px)',
                  zIndex: -1,
                }}
              />
              <h1 
                className="font-serif font-extrabold text-white text-[36px] tracking-tight leading-none uppercase"
                style={{
                  textShadow: '0 2px 10px rgba(0,0,0,0.8), 0 4px 20px rgba(0,0,0,0.5)',
                }}
              >
                YOUR JOURNEY,
              </h1>
              <h2 
                className="font-script text-[#C9A227] text-[64px] leading-none font-normal block mt-2 transform -rotate-1 pl-2"
                style={{
                  textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,0.9)',
                }}
              >
                Our Priority
              </h2>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-gray-100 text-xs md:text-sm leading-relaxed px-6 max-w-[340px] mb-8 text-center font-medium"
              style={{
                textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 1px 2px rgba(0,0,0,0.9)',
              }}
            >
              Discover unforgettable destinations with expertly crafted holiday packages across India.
            </motion.p>

            {/* Side by side buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-3.5 w-full justify-center px-6 items-center"
            >
              <a
                href="#packages"
                className="w-full max-w-[280px] px-8 py-3.5 bg-[#8C6A3D] text-white font-bold text-xs tracking-widest uppercase hover:bg-[#FAF8F5] hover:text-[#8C6A3D] hover:border-[#8C6A3D] border border-[#8C6A3D] rounded-full flex items-center justify-center gap-2 shadow-xl active:scale-95 duration-300"
              >
                EXPLORE PACKAGES
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full max-w-[280px] px-8 py-3.5 bg-white border border-[#8C6A3D]/30 text-slate-800 font-bold text-xs tracking-widest uppercase rounded-full flex items-center justify-center gap-2 shadow-xl active:scale-95 duration-300 hover:bg-slate-50"
              >
                <Compass className="w-4 h-4 text-[#8C6A3D]" />
                CONTACT US
              </a>
            </motion.div>
          </div>

          {/* Mobile Trust Section */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center gap-3.5 mt-10 py-3.5 px-4 bg-white/80 backdrop-blur-md border border-[#8C6A3D]/20 w-full max-w-[345px] mx-auto rounded-2xl shadow-lg relative z-20"
          >
            <div className="flex items-center gap-1.5">
              <span className="text-sm">⭐</span>
              <div className="text-left">
                <p className="text-[10px] font-bold text-slate-900 leading-none">4.9/5 Rating</p>
                <p className="text-[8px] text-slate-600 mt-0.5 leading-none whitespace-nowrap font-medium">Google Reviews</p>
              </div>
            </div>
            <div className="h-5 w-[1px] bg-[#8C6A3D]/25"></div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm">👥</span>
              <div className="text-left">
                <p className="text-[10px] font-bold text-slate-900 leading-none">5000+</p>
                <p className="text-[8px] text-slate-600 mt-0.5 leading-none whitespace-nowrap font-medium">Happy Travellers</p>
              </div>
            </div>
            <div className="h-5 w-[1px] bg-[#8C6A3D]/25"></div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm">🛡️</span>
              <div className="text-left">
                <p className="text-[10px] font-bold text-slate-900 leading-none">10+ Years</p>
                <p className="text-[8px] text-slate-600 mt-0.5 leading-none whitespace-nowrap font-medium">Experience</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* DESKTOP ONLY HERO CONTENT */}
        <div className="hidden sm:flex flex-col justify-center items-stretch w-full max-w-7xl mx-auto px-6 lg:px-8 relative z-20 h-full py-10">
          
          <div className="flex flex-col items-start text-left mt-10 md:mt-16 w-full md:w-[50%] lg:w-[45%]">
            
            {/* Tagline above heading */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3 w-full mb-6"
            >
              <div className="h-[1px] w-8 bg-[#C9A227]/80"></div>
              <span className="text-[10px] md:text-xs tracking-[0.3em] font-semibold text-[#C9A227] uppercase whitespace-nowrap">
                EXPLORE • <span className="text-white">EXPERIENCE</span> • ENJOY
              </span>
              <div className="h-[1px] w-12 bg-[#C9A227]/80"></div>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative select-none"
            >
              <h1 
                className="font-serif font-extrabold text-white text-5xl md:text-6xl lg:text-[76px] xl:text-[84px] tracking-tight leading-none uppercase"
                style={{
                  textShadow: '0 2px 10px rgba(0,0,0,0.5), 0 4px 20px rgba(0,0,0,0.3)',
                }}
              >
                YOUR JOURNEY,
              </h1>
              <h2 
                className="font-script text-[#C9A227] text-5xl md:text-6xl lg:text-[85px] xl:text-[95px] leading-none font-normal block mt-1 lg:mt-2 pl-2 transform -rotate-1"
                style={{
                  textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                }}
              >
                Our Priority
              </h2>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-100 text-sm md:text-base lg:text-lg leading-relaxed mt-4 md:mt-6 max-w-[500px] font-medium"
              style={{
                textShadow: '0 1px 3px rgba(0,0,0,0.4)',
              }}
            >
              Discover unforgettable destinations with expertly crafted holiday packages across India.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center gap-4 mt-8"
            >
              <a
                href="#packages"
                className="px-8 py-3.5 bg-[#8C6A3D] text-white font-bold text-xs tracking-widest uppercase hover:bg-white hover:text-[#8C6A3D] border border-[#8C6A3D] hover:scale-105 duration-300 rounded-full flex items-center justify-center gap-2 shadow-xl active:scale-95"
              >
                EXPLORE PACKAGES
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-8 py-3.5 bg-white border border-[#8C6A3D]/40 text-slate-800 font-bold text-xs tracking-widest uppercase hover:bg-slate-50 hover:scale-105 duration-300 rounded-full flex items-center justify-center gap-2 shadow-xl active:scale-95"
              >
                <Compass className="w-4 h-4 text-[#8C6A3D]" />
                PLAN MY TRIP
              </a>
            </motion.div>

            {/* Trust Section */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-4 md:gap-6 mt-12 py-3 border-t border-b border-[#C9A227]/25 w-full max-w-[520px]"
            >
              <div className="flex items-center gap-2">
                <span className="text-base text-[#C9A227]">⭐</span>
                <div>
                  <p className="text-xs font-bold text-white leading-none">4.9/5 Rating</p>
                  <p className="text-[9px] text-slate-200 mt-0.5 leading-none whitespace-nowrap font-medium">Happy Travellers</p>
                </div>
              </div>
              <div className="h-6 w-[1px] bg-[#C9A227]/20"></div>
              <div className="flex items-center gap-2">
                <span className="text-base text-[#C9A227]">👥</span>
                <div>
                  <p className="text-xs font-bold text-white leading-none">5000+</p>
                  <p className="text-[9px] text-slate-200 mt-0.5 leading-none whitespace-nowrap font-medium">Happy Travellers</p>
                </div>
              </div>
              <div className="h-6 w-[1px] bg-[#C9A227]/20"></div>
              <div className="flex items-center gap-2">
                <span className="text-base text-[#C9A227]">🛡️</span>
                <div>
                  <p className="text-xs font-bold text-white leading-none">10+ Years</p>
                  <p className="text-[9px] text-slate-200 mt-0.5 leading-none whitespace-nowrap font-medium">Trusted Experience</p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </section>

      {/* POPULAR DESTINATIONS SECTION (Matches horizontal 6 circular list precisely) */}
      <section id="destinations" className="relative pt-24 pb-24 sm:pt-28 bg-gradient-to-b from-[#FAF8F5] to-white border-t border-slate-200 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Plane Divider */}
          <div className="flex items-center gap-6 justify-center mb-12">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#8C6A3D]/40 max-w-xs" />
            <Plane className="w-5 h-5 text-[#8C6A3D] animate-pulse" />
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#8C6A3D]/40 max-w-xs" />
          </div>

          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl tracking-[0.2em] font-bold text-[#8C6A3D] uppercase">
              POPULAR DESTINATIONS
            </h2>
            <p className="text-sm text-slate-600 tracking-wider max-w-lg mx-auto mt-3 font-medium">
              Handpicked celestial getaways crafted to perfection for your wanderlust. Click on any spot to dive deep.
            </p>
          </div>

          {/* Destinations Circular Grid (6 circle spots side by side) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 px-2 justify-center">
            {DESTINATIONS.map((dest, idx) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center group cursor-pointer"
                onClick={() => setSelectedDestination(dest)}
              >
                {/* Circular image framed beautifully in double gold rings */}
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 border border-[#8C6A3D]/20 bg-white shadow-lg group-hover:shadow-[#8C6A3D]/30 group-hover:border-[#8C6A3D] duration-500 overflow-hidden mb-4">
                  {/* Outer spinning border highlight */}
                  <div className="absolute inset-0 rounded-full border border-dashed border-[#8C6A3D]/40 opacity-0 group-hover:opacity-100 group-hover:animate-spin-slow duration-500 pointer-events-none" />
                  
                  {/* Inner image container */}
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      className="object-cover group-hover:scale-110 duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent duration-300" />
                  </div>
                </div>

                {/* Destination Title Underneath */}
                <span className="font-serif text-sm tracking-[0.2em] font-bold text-slate-800 group-hover:text-[#8C6A3D] transition-colors duration-300 uppercase">
                  {dest.name}
                </span>
                
                {/* Visual badge highlight */}
                <span className="text-[10px] font-mono text-[#8C6A3D] mt-1 uppercase tracking-widest font-bold opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                  {dest.duration}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Travel Benefits Banner below destinations */}
          <div className="mt-24 border border-slate-200 py-10 bg-white rounded-2xl shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 divide-y sm:divide-y-0 lg:divide-x divide-slate-200">
              
              <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left px-4 pt-4 sm:pt-0">
                <div className="w-12 h-12 rounded-full border border-[#8C6A3D]/20 bg-[#8C6A3D]/5 flex items-center justify-center text-[#8C6A3D] shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-serif tracking-widest font-bold text-[#0B1B3A] uppercase">
                    BEST PRICE GUARANTEE
                  </h4>
                  <p className="text-[11px] text-slate-600 mt-1 tracking-wide font-medium">
                    Premium holidays matches, uncompromised value.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left px-4 pt-6 sm:pt-0">
                <div className="w-12 h-12 rounded-full border border-[#8C6A3D]/20 bg-[#8C6A3D]/5 flex items-center justify-center text-[#8C6A3D] shrink-0">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-serif tracking-widest font-bold text-[#0B1B3A] uppercase">
                    CUSTOMIZED TOUR PACKAGES
                  </h4>
                  <p className="text-[11px] text-slate-600 mt-1 tracking-wide font-medium">
                    Bespoke itineraries crafted directly to your desires.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left px-4 pt-6 lg:pt-0">
                <div className="w-12 h-12 rounded-full border border-[#8C6A3D]/20 bg-[#8C6A3D]/5 flex items-center justify-center text-[#8C6A3D] shrink-0">
                  <Phone className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-xs font-serif tracking-widest font-bold text-[#0B1B3A] uppercase">
                    24/7 TRAVEL ASSISTANCE
                  </h4>
                  <p className="text-[11px] text-slate-600 mt-1 tracking-wide font-medium">
                    Live concierge support guiding you every single step.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left px-4 pt-6 lg:pt-0">
                <div className="w-12 h-12 rounded-full border border-[#8C6A3D]/20 bg-[#8C6A3D]/5 flex items-center justify-center text-[#8C6A3D] shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-serif tracking-widest font-bold text-[#0B1B3A] uppercase">
                    SAFE & COMFORTABLE JOURNEYS
                  </h4>
                  <p className="text-[11px] text-slate-600 mt-1 tracking-wide font-medium">
                    Elite vehicles, luxury hotels, and secure tours.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>



      {/* PREMIUM TOUR PACKAGES SECTION (With beautiful cards and tags) */}
      <section id="packages" className="relative py-24 bg-gradient-to-b from-[#FAF8F5] to-white border-t border-slate-200 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl tracking-[0.2em] font-bold text-[#8C6A3D] uppercase">
              CELESTIAL TOUR PACKAGES
            </h2>
            <p className="text-sm text-slate-600 tracking-wider max-w-lg mx-auto mt-3 font-medium">
              Meticulously planned travel packages with luxury hotels, scenic guides, and comfortable rides already configured.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TOUR_PACKAGES.map((pkg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-[#8C6A3D]/40 duration-300 flex flex-col justify-between shadow-xl shadow-slate-100"
              >
                {/* Photo Header */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={pkg.coverImage}
                    alt={pkg.name}
                    fill
                    className="object-cover group-hover:scale-105 duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full border border-[#8C6A3D]/30 flex items-center gap-1 text-xs">
                    <Star className="w-3.5 h-3.5 text-brand-gold fill-brand-gold" />
                    <span className="font-semibold text-slate-800">4.8</span>
                    <span className="text-[10px] text-slate-500">(120)</span>
                  </div>

                  {/* Destination Tag */}
                  <div className="absolute bottom-4 right-4 px-3 py-1 bg-[#8C6A3D] text-white text-[9px] font-bold tracking-widest uppercase rounded">
                    {pkg.destination}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Tags row */}
                    <div className="flex gap-2 mb-3">
                      <span className="text-[10px] font-mono tracking-wider uppercase text-[#8C6A3D] font-bold">#Luxury</span>
                      <span className="text-[10px] font-mono tracking-wider uppercase text-[#8C6A3D] font-bold">#Concierge</span>
                      <span className="text-[10px] font-mono tracking-wider uppercase text-[#8C6A3D] font-bold">#Bespoke</span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-[#0B1B3A] leading-snug group-hover:text-[#8C6A3D] duration-300">
                      {pkg.name}
                    </h3>
                    
                    <span className="text-[11px] text-[#8C6A3D] font-bold mt-1 block tracking-wider font-mono uppercase">
                      {pkg.duration}
                    </span>

                    {/* Highlights collapse box */}
                    <ul className="mt-5 space-y-2">
                      {pkg.highlights.slice(0, 3).map((h, i) => (
                        <li key={i} className="text-xs text-slate-700 flex items-start gap-2 font-medium">
                          <Check className="w-4 h-4 text-[#8C6A3D] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price Block & Action Button */}
                  <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] text-slate-500 uppercase block tracking-widest font-bold">PACKAGE COST</span>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xl font-bold font-serif text-[#8C6A3D]">{pkg.startingPrice}</span>
                        <span className="text-xs text-slate-400 line-through font-light">
                          {pkg.startingPrice ? `₹${Math.floor(parseInt(pkg.startingPrice.replace(/[^\d]/g, '')) * 1.25).toLocaleString('en-IN')}` : ''}
                        </span>
                      </div>
                    </div>
                    <Link
                      href={`/packages/${pkg.id}`}
                      prefetch={true}
                      className="px-4 py-2 bg-[#0B1B3A] text-white font-bold text-[10px] tracking-widest uppercase rounded-lg hover:bg-[#8C6A3D] duration-300 inline-flex items-center shadow-md"
                    >
                      VIEW DETAILS
                    </Link>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="py-24 bg-gradient-to-b from-[#EFECE6] to-[#FAF8F5] border-t border-slate-200 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl tracking-[0.2em] font-bold text-[#8C6A3D] uppercase">
              WANDERLUST GALLERY
            </h2>
            <p className="text-sm text-slate-600 tracking-wider max-w-lg mx-auto mt-3 font-medium">
              A visually stunning glance into the unforgettable memories captured by our beloved travellers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { title: "Snowy Beas River", src: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80", span: "col-span-2 row-span-2" },
              { title: "Sunset Goa Beach", src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80", span: "col-span-1" },
              { title: "Darjeeling Tea Harvest", src: "https://images.unsplash.com/photo-1618083707368-b3823daa2726?auto=format&fit=crop&w=600&q=80", span: "col-span-1" },
              { title: "Misty Ooty Lake", src: "https://images.unsplash.com/photo-1541256996761-85df2efaa164?auto=format&fit=crop&w=600&q=80", span: "col-span-1" },
              { title: "Amer Fort Sunset", src: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80", span: "col-span-1" },
              { title: "Uttarakhand Sacred Temple", src: "https://images.unsplash.com/photo-1618083707368-b3823daa2726?auto=format&fit=crop&w=600&q=80", span: "col-span-2" }
            ].map((img, idx) => (
              <div 
                key={idx} 
                className={`relative overflow-hidden rounded-2xl group border border-white/5 shadow-md aspect-video md:aspect-auto md:h-64 ${img.span}`}
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-[10px] font-mono text-brand-gold font-semibold uppercase tracking-widest">
                    TRAVELLER LOG
                  </span>
                  <h4 className="font-serif text-sm font-medium text-white tracking-wide mt-1">
                    {img.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section id="about" className="py-24 bg-gradient-to-b from-[#FAF8F5] to-[#EFECE6] border-t border-slate-200 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-[350px] sm:h-[450px] rounded-3xl overflow-hidden border border-[#8C6A3D]/20 shadow-2xl z-10">
                <Image
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80"
                  alt="Friends Tours and Travels team planning trips"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5]/85 via-transparent to-transparent" />
              </div>
              {/* Backglow circle */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#8C6A3D]/10 rounded-full filter blur-3xl pointer-events-none" />
              {/* Overlay Stat Card */}
              <div className="absolute bottom-6 right-6 bg-white/95 border border-[#8C6A3D]/20 p-4 rounded-2xl backdrop-blur-md shadow-2xl z-20 max-w-[200px]">
                <span className="font-serif text-3xl font-bold text-[#8C6A3D] block">12k+</span>
                <span className="text-[10px] text-slate-600 uppercase tracking-widest block font-bold mt-1 leading-relaxed">
                  Happy Travellers Hosted Globally
                </span>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="px-3 py-1 rounded-full border border-[#8C6A3D]/30 bg-[#8C6A3D]/5 text-[#8C6A3D] text-[10px] tracking-[0.25em] font-bold uppercase">
                ESTABLISHED 2014 • 12+ YEARS TRUSTED
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl tracking-wide font-bold text-[#0B1B3A] uppercase leading-tight">
                WHO WE ARE AT <br />
                <span className="text-[#8C6A3D]">FRIENDS TOURS & TRAVELS</span>
              </h2>
              <p className="text-sm text-slate-800 leading-relaxed font-medium">
                Based in Indore, Madhya Pradesh—India&apos;s cleanest city and commercial hub of MP—we have been serving wanderlust enthusiasts for over 12 years with bespoke, seamless, and deeply memorable travel packages. Our team comprises passion-driven pathfinders, certified destination consultants, and around-the-clock concierges who share one unified goal: **making your holiday unforgettable**.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                From high-altitude Himalayan snowy peaks in Manali, down through misty, fragrant Darjeeling tea estates, into the royal sand dune palaces of Jaipur, we build journeys that respect your pacing, fit your lifestyle, and ensure flawless safety.
              </p>

              {/* Highlights Bullet Rows */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#8C6A3D]/10 flex items-center justify-center text-[#8C6A3D] shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-800 tracking-wide">100% Tailored Holidays</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#8C6A3D]/10 flex items-center justify-center text-[#8C6A3D] shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-800 tracking-wide">Premium Handpicked Stays</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#8C6A3D]/10 flex items-center justify-center text-[#8C6A3D] shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-800 tracking-wide">Secure Chauffeurs & Rides</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#8C6A3D]/10 flex items-center justify-center text-[#8C6A3D] shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-800 tracking-wide">Zero Hidden Expenses</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CONTACT & DETAILED ENQUIRY SECTION */}
      <section id="contact" className="py-24 bg-gradient-to-b from-[#EFECE6] to-[#FAF8F5] border-t border-slate-200 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Contact details list (Left 5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="px-3 py-1 rounded-full border border-[#8C6A3D]/30 bg-[#8C6A3D]/5 text-[#8C6A3D] text-[10px] tracking-[0.25em] font-bold uppercase">
                  GET IN TOUCH
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl tracking-wide font-bold text-[#0B1B3A] mt-4 uppercase">
                  CONNECT WITH US
                </h2>
                <p className="text-sm text-slate-600 mt-2 max-w-sm font-medium">
                  Whether you require an immediate quote or wish to sit with our destination specialists over a virtual coffee, we are responsive 24/7.
                </p>
              </div>

              <div className="space-y-6">
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full border border-[#8C6A3D]/30 bg-white flex items-center justify-center text-[#8C6A3D] shrink-0 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest font-bold">Call Concierge</h4>
                    <p className="text-sm font-bold text-slate-800 mt-1 hover:text-[#8C6A3D] duration-300">
                      <a href="tel:+919303271444">+91 93032 71444</a>
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5 font-medium">Available 24/7 / WhatsApp support</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full border border-[#8C6A3D]/30 bg-white flex items-center justify-center text-[#8C6A3D] shrink-0 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest font-bold">Email Enquiries</h4>
                    <p className="text-sm font-bold text-slate-800 mt-1 hover:text-[#8C6A3D] duration-300">
                      <a href="mailto:lpagrawal48@gmail.com">lpagrawal48@gmail.com</a>
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5 font-medium">Response within 2 hours guaranteed</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full border border-[#8C6A3D]/30 bg-white flex items-center justify-center text-[#8C6A3D] shrink-0 shadow-sm">
                    <Map className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest font-bold">Head Office</h4>
                    <p className="text-sm text-slate-700 mt-1 leading-relaxed font-medium">
                      Lg-13, Bansi Trade Centre, 581/5, MG Road, Indore, Madhya Pradesh – 452001 <br />
                      <span className="text-xs text-[#8C6A3D] font-bold mt-1 block">India&apos;s cleanest city & commercial hub of MP</span>
                    </p>
                  </div>
                </div>

              </div>

              {/* Floating review summary */}
              <div className="bg-white border border-slate-200 p-6 rounded-2xl relative overflow-hidden shadow-lg">
                <div className="flex gap-1 text-brand-gold mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <p className="text-xs text-slate-700 italic leading-relaxed font-medium">
                  &ldquo;Friends Tours organized our honeymoon trip to Goa beautifully. The private sunset cruise was a dream. Zero hassles, pristine luxury resort, highly recommended!&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#8C6A3D]/20 text-[#8C6A3D] flex items-center justify-center text-xs font-bold uppercase">
                    AS
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-800">Ananya & Sid</h5>
                    <p className="text-[9px] text-slate-500 font-medium">Goa Luxury Package Travellers</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Standard contact form (Right 7 cols) */}
            <div className="lg:col-span-7 bg-white border border-slate-200 p-8 rounded-3xl shadow-2xl relative">
              <h3 className="text-lg font-serif text-[#8C6A3D] font-bold tracking-wide mb-6">
                Submit Travel Enquiry
              </h3>

              <form onSubmit={handleEnquirySubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-600 tracking-wider uppercase mb-1.5 font-bold">Full Name</label>
                    <input
                      type="text"
                      required
                      value={enquiryForm.name}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-[#8C6A3D] text-sm text-slate-800 rounded-xl focus:outline-none placeholder:text-slate-400 focus:ring-1 focus:ring-[#8C6A3D]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-600 tracking-wider uppercase mb-1.5 font-bold">Email Address</label>
                    <input
                      type="email"
                      required
                      value={enquiryForm.email}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                      placeholder="jane@domain.com"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-[#8C6A3D] text-sm text-slate-800 rounded-xl focus:outline-none placeholder:text-slate-400 focus:ring-1 focus:ring-[#8C6A3D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-600 tracking-wider uppercase mb-1.5 font-bold">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={enquiryForm.phone}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-[#8C6A3D] text-sm text-slate-800 rounded-xl focus:outline-none placeholder:text-slate-400 focus:ring-1 focus:ring-[#8C6A3D]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-600 tracking-wider uppercase mb-1.5 font-bold">Selected Holiday Spot</label>
                    <input
                      type="text"
                      required
                      value={enquiryForm.destination}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, destination: e.target.value })}
                      placeholder="E.g., Manali, Goa, Ooty..."
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-[#8C6A3D] text-sm text-slate-800 rounded-xl focus:outline-none placeholder:text-slate-400 focus:ring-1 focus:ring-[#8C6A3D]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-600 tracking-wider uppercase mb-1.5 font-bold">Preferences / Message</label>
                  <textarea
                    rows={4}
                    value={enquiryForm.message}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, message: e.target.value })}
                    placeholder="Describe your perfect holiday vibe, any family needs, hotel class preferences, or timing notes..."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-[#8C6A3D] text-sm text-slate-800 rounded-xl focus:outline-none resize-none placeholder:text-slate-400 focus:ring-1 focus:ring-[#8C6A3D]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#0B1B3A] text-white font-bold text-xs tracking-widest uppercase rounded-xl hover:bg-[#8C6A3D] active:scale-[0.98] duration-300 shadow-xl flex items-center justify-center gap-2"
                >
                  <Plane className="w-4 h-4 animate-bounce" />
                  SUBMIT HOLIDAY ENQUIRY
                </button>
              </form>

              {/* Submit Success Overlay Overlay */}
              <AnimatePresence>
                {enquirySuccess && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-white/95 rounded-3xl flex flex-col items-center justify-center text-center p-6 sm:p-8 z-30"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 animate-bounce">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h4 className="font-serif text-xl text-[#0B1B3A] font-bold tracking-wide">Enquiry Successfully Logged!</h4>
                    <p className="text-xs text-slate-600 mt-2 max-w-sm leading-relaxed font-medium">
                      Thank you for trusting Friends Tours & Travels. Our specialist is drafting your quotation and will connect within 2 hours. Let&apos;s make your journey unforgettable!
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative bg-[#020813] border-t border-white/5 pt-16 pb-8 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/5">
            
            {/* Column 1: Logo and motto */}
            <div className="space-y-4">
              <a href="#home" className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full border border-brand-gold/30 bg-brand-navy p-1 flex items-center justify-center text-brand-gold">
                  <Compass className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-base tracking-widest font-semibold text-white">FRIENDS</span>
                  <span className="font-serif text-[8px] tracking-[0.25em] font-medium text-brand-gold leading-none">TOURS & TRAVELS</span>
                </div>
              </a>
              <p className="text-xs text-gray-400 leading-relaxed font-light">
                Premium, customized and uncompromised leisure holidays crafted with passion. Let&apos;s make your next adventure unforgettable.
              </p>
              <div className="flex gap-1.5 text-brand-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-brand-gold" />
                ))}
                <span className="text-[10px] text-gray-300 font-medium ml-1">4.9/5 Certified Agency</span>
              </div>
            </div>

            {/* Column 2: Popular spots links */}
            <div>
              <h4 className="font-serif text-xs font-semibold tracking-widest text-brand-gold uppercase mb-4">POPULAR SPOTS</h4>
              <ul className="space-y-2.5">
                {DESTINATIONS.slice(0, 4).map(dest => (
                  <li key={dest.id}>
                    <a 
                      href="#destinations" 
                      onClick={() => setSelectedDestination(dest)}
                      className="text-xs text-gray-400 hover:text-brand-gold hover:underline duration-300 flex items-center gap-1 group"
                    >
                      <ChevronRight className="w-3 h-3 text-brand-gold/50 group-hover:translate-x-0.5 duration-300" />
                      {dest.name} Tour Packages
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Custom planning links */}
            <div>
              <h4 className="font-serif text-xs font-semibold tracking-widest text-brand-gold uppercase mb-4">HOLIDAY PLANNERS</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/packages" className="text-xs text-gray-400 hover:text-brand-gold hover:underline duration-300 flex items-center gap-1">
                    <Compass className="w-3 h-3 text-brand-gold/50" />
                    Prepackaged Luxury Tours
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-xs text-gray-400 hover:text-brand-gold hover:underline duration-300 flex items-center gap-1">
                    <Award className="w-3 h-3 text-brand-gold/50" />
                    Our Travelers Experiences
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact summary */}
            <div>
              <h4 className="font-serif text-xs font-semibold tracking-widest text-brand-gold uppercase mb-4">NEED ASSISTANCE?</h4>
              <p className="text-xs text-gray-400 leading-relaxed font-light">
                Connect directly with our 24/7 client booking team for tailored plans or quotes.
              </p>
              <div className="mt-4 space-y-1.5">
                <p className="text-xs text-white font-semibold flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-brand-gold" />
                  <a href="tel:+919303271444" className="hover:text-brand-gold transition-colors">+91 9303271444</a>
                </p>
                <p className="text-xs text-white font-semibold flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-brand-gold" />
                  <a href="mailto:lpagrawal48@gmail.com" className="hover:text-brand-gold transition-colors">lpagrawal48@gmail.com</a>
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Copyright bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
            <p className="text-[10px] text-gray-500 font-light">
              &copy; {new Date().getFullYear()} Friends Tours & Travels. All Rights Reserved. Crafted for premium celestial wanderlust.
            </p>
            <div className="flex gap-6">
              <Link href="/about" className="text-[10px] text-gray-500 hover:text-brand-gold">About Agency</Link>
              <Link href="/contact" className="text-[10px] text-gray-500 hover:text-brand-gold">Privacy Policy</Link>
              <Link href="/contact" className="text-[10px] text-gray-500 hover:text-brand-gold">Terms of Service</Link>
            </div>
          </div>

        </div>
      </footer>

      {/* DETAILED DESTINATION DRAWER / OVERLAY MODAL */}
      <AnimatePresence>
        {selectedDestination && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedDestination(null)}
          >
            {/* Sliding Panel drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="w-full max-w-xl bg-white border-l border-slate-200 h-screen overflow-y-auto relative p-6 sm:p-8 flex flex-col justify-between shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                
                {/* Close trigger */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-mono tracking-widest text-[#8C6A3D] font-bold uppercase">
                    DESTINATION FACT SHEET
                  </span>
                  <button 
                    onClick={() => setSelectedDestination(null)}
                    className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Cover Image Header */}
                <div className="relative h-60 w-full rounded-2xl overflow-hidden border border-slate-200 mb-6 shadow-md">
                  <Image
                    src={selectedDestination.coverImage}
                    alt={selectedDestination.name}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold tracking-wide uppercase">
                      {selectedDestination.name}
                    </h3>
                    <p className="text-xs text-brand-gold mt-1 font-medium">
                      {selectedDestination.tagline}
                    </p>
                  </div>
                </div>

                {/* Quick Info Bar */}
                <div className="grid grid-cols-2 gap-4 bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6">
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">SUGGESTED PACE</span>
                    <span className="text-xs font-bold text-slate-800 mt-1 block">{selectedDestination.duration}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">BEST TIME TO VISIT</span>
                    <span className="text-xs font-bold text-slate-800 mt-1 block">{selectedDestination.bestTime}</span>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-4">
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {selectedDestination.description}
                  </p>

                  {/* Core Attractions list */}
                  <div>
                    <h4 className="text-xs font-serif text-[#8C6A3D] font-bold uppercase tracking-widest mb-2 flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-[#8C6A3D]" />
                      Top Attractions to Visit
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedDestination.attractions.map((attr, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-[10px] text-slate-800 hover:border-[#8C6A3D]/40 duration-300 font-bold">
                          {attr}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Curated Experiences */}
                  <div>
                    <h4 className="text-xs font-serif text-[#8C6A3D] font-bold uppercase tracking-widest mb-2 flex items-center gap-1">
                      <Compass className="w-4 h-4 text-[#8C6A3D]" />
                      Unforgettable Key Experiences
                    </h4>
                    <ul className="space-y-2">
                      {selectedDestination.experiences.map((exp, i) => (
                        <li key={i} className="text-xs text-slate-700 flex items-start gap-2 leading-relaxed font-medium">
                          <Check className="w-4 h-4 text-[#8C6A3D] shrink-0 mt-0.5" />
                          {exp}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

              </div>

              {/* Drawer footer triggers */}
              <div className="mt-10 pt-6 border-t border-slate-200 grid grid-cols-2 gap-4">
                <button
                  onClick={() => {
                    setSelectedDestination(null);
                    handlePrefillEnquiry(selectedDestination.name);
                  }}
                  className="w-full py-3 bg-[#0B1B3A] text-white border border-[#0B1B3A] font-bold text-[10px] tracking-widest uppercase rounded-xl hover:bg-[#8C6A3D] hover:border-[#8C6A3D] duration-300 shadow-md flex items-center justify-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  ENQUIRE NOW
                </button>
                <a
                  href={`https://wa.me/919303271444?text=${encodeURIComponent(`hii, i want enquiry about your packages ! I am interested in a custom tour to ${selectedDestination.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setSelectedDestination(null)}
                  className="w-full py-3 bg-[#8C6A3D] text-white font-bold text-[10px] tracking-widest uppercase rounded-xl hover:bg-[#8C6A3D]/90 duration-300 shadow-md flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  QUICK ENQUIRE
                </a>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* QUICK ENQUIRY GENERAL POPUP MODAL */}
      <AnimatePresence>
        {enquiryModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setEnquiryModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-lg bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 relative shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Close trigger */}
              <button 
                onClick={() => setEnquiryModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-6">
                <span className="text-[10px] font-mono tracking-widest text-[#8C6A3D] font-bold uppercase block">
                  FRIENDS TOURS & TRAVELS
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-slate-800 font-bold mt-1">
                  Holiday Enquiry Form
                </h3>
                <p className="text-xs text-slate-600 mt-1 max-w-xs mx-auto leading-relaxed font-medium">
                  Provide your preferences and let our dedicated destination concierges curate a stellar package.
                </p>
              </div>

              <form onSubmit={handleEnquirySubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] text-slate-600 tracking-wider uppercase mb-1 font-bold">Full Name</label>
                    <input
                      type="text"
                      required
                      value={enquiryForm.name}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                      placeholder="Jane"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#8C6A3D] text-xs text-slate-800 focus:outline-none placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-slate-600 tracking-wider uppercase mb-1 font-bold">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={enquiryForm.phone}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                      placeholder="+91..."
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#8C6A3D] text-xs text-slate-800 focus:outline-none placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] text-slate-600 tracking-wider uppercase mb-1 font-bold">Email Address</label>
                  <input
                    type="email"
                    required
                    value={enquiryForm.email}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                    placeholder="jane@domain.com"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#8C6A3D] text-xs text-slate-800 focus:outline-none placeholder:text-slate-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] text-slate-600 tracking-wider uppercase mb-1 font-bold">Holiday Spot</label>
                    <input
                      type="text"
                      required
                      value={enquiryForm.destination}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, destination: e.target.value })}
                      placeholder="E.g., Goa"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#8C6A3D] text-xs text-slate-800 focus:outline-none placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-slate-600 tracking-wider uppercase mb-1 font-bold">Travel Vibe</label>
                    <select
                      value={enquiryForm.travelStyle}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, travelStyle: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#8C6A3D] text-xs text-slate-800 focus:outline-none"
                    >
                      <option value="Luxury Beachfront">Luxury Beachfront</option>
                      <option value="Alpine Adventure">Alpine Adventure</option>
                      <option value="Heritage & Culture">Heritage & Culture</option>
                      <option value="Calm Wellness & Spa">Calm Wellness & Spa</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] text-slate-600 tracking-wider uppercase mb-1 font-bold">Preferences / Custom requests</label>
                  <textarea
                    rows={3}
                    value={enquiryForm.message}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, message: e.target.value })}
                    placeholder="E.g., Sunrise tour, kid bed, pure veg food, direct non-stop flights..."
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#8C6A3D] text-xs text-slate-800 focus:outline-none resize-none placeholder:text-slate-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#0B1B3A] text-white font-bold text-xs tracking-widest uppercase rounded-xl hover:bg-[#8C6A3D] duration-300 shadow-xl flex items-center justify-center gap-1.5"
                >
                  <Plane className="w-4 h-4" />
                  SUBMIT ENQUIRY
                </button>
              </form>

              {/* Popup Success message overlay */}
              <AnimatePresence>
                {enquirySuccess && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-white rounded-3xl flex flex-col items-center justify-center text-center p-6 z-30"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 animate-bounce">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-serif text-lg text-[#0B1B3A] font-bold">Enquiry Successfully Logged</h4>
                    <p className="text-xs text-slate-600 mt-2 max-w-xs leading-relaxed mx-auto font-medium">
                      Our booking specialist is designing your custom holiday package and will connect with you via email shortly. Let&apos;s make your trip unforgettable!
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOATING WHATSAPP BUTTON */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-6 right-6 z-50 group pointer-events-auto"
      >
        <a
          href={`https://wa.me/919303271444?text=${encodeURIComponent("hii, i want enquiry about your packages !")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-emerald-500 rounded-full text-white shadow-2xl shadow-emerald-500/30 hover:bg-emerald-600 transition-all duration-300 border border-emerald-400 relative"
          aria-label="Chat with us on WhatsApp"
        >
          {/* Pulsing glow ring */}
          <span className="absolute -inset-1.5 rounded-full bg-emerald-500/20 animate-ping opacity-75 pointer-events-none" />
          
          {/* Elegant gold outer ring border to match design system */}
          <span className="absolute -inset-0.5 rounded-full border border-brand-gold/40 group-hover:border-brand-gold duration-300 pointer-events-none" />

          {/* WhatsApp icon */}
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.335 4.978L2 22l5.133-1.347a9.921 9.921 0 0 0 4.876 1.277h.005c5.505 0 9.99-4.478 9.99-9.985C22 6.478 17.517 2 12.012 2zm6.059 14.13c-.273.766-1.584 1.393-2.185 1.482-.556.082-1.282.131-3.676-.856-3.061-1.261-5.029-4.385-5.181-4.587-.152-.202-1.234-1.64-1.234-3.125 0-1.485.782-2.215 1.06-2.518.278-.303.608-.379.81-.379.202 0 .405.001.582.009.186.008.435-.072.68.513.253.607.862 2.094.937 2.246.076.152.126.329.025.531-.1.203-.152.329-.303.506-.152.177-.319.395-.455.531-.152.152-.311.319-.133.626.178.303.791 1.306 1.696 2.111.117.104.225.158.337.214.771.531 1.214.622 1.657.43.152-.063.607-.253.76-.506.152-.253.152-.469.106-.513-.046-.044-.177-.101-.371-.197-.194-.096-1.144-.564-1.321-.627-.177-.063-.303-.096-.43.096-.126.19-.49.62-.601.747-.11.127-.221.139-.397.051-.177-.089-.747-.275-1.423-.878-.526-.469-.882-1.049-.985-1.226-.104-.177-.011-.273.078-.362.08-.08.177-.207.266-.311.089-.104.12-.177.18-.303.059-.127.029-.24-.015-.329-.044-.089-.43-1.037-.591-1.423-.157-.377-.319-.325-.435-.331-.112-.005-.24-.006-.367-.006-.127 0-.334.047-.509.24-.174.192-.667.652-.667 1.59s.682 1.847.778 1.977c.096.13 1.343 2.051 3.253 2.878.455.197.809.314 1.085.402.457.145.874.125 1.203.076.367-.054 1.127-.461 1.286-.906.159-.445.159-.827.112-.906-.047-.08-.177-.123-.371-.219z" />
          </svg>
          
          {/* Elegant Tooltip */}
          <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-brand-blue border border-brand-gold/30 px-3 py-1.5 rounded-lg shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none hidden sm:block">
            <span className="text-[10px] text-brand-gold tracking-widest font-semibold uppercase">Chat on WhatsApp</span>
          </div>
        </a>
      </motion.div>

      {/* 3-Dot / Section Vertical Side Navigation */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4 bg-white/95 backdrop-blur-md border border-[#8C6A3D]/25 p-3.5 rounded-full shadow-2xl">
        {[
          { label: 'HOME', id: 'home' },
          { label: 'DESTINATIONS', id: 'destinations' },
          { label: 'PACKAGES', id: 'packages' },
          { label: 'CONTACT US', id: 'contact' },
        ].map((sec) => (
          <button
            key={sec.id}
            onClick={() => {
              setActiveSection(sec.id);
              const element = document.getElementById(sec.id);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              } else {
                router.push(`/#${sec.id}`);
              }
            }}
            className="group relative flex items-center justify-center w-4 h-4 rounded-full focus:outline-none"
            aria-label={`Go to ${sec.label}`}
          >
            {/* Tooltip */}
            <span className="absolute right-8 px-2.5 py-1.5 bg-white border border-[#8C6A3D]/30 text-[#8C6A3D] text-[10px] tracking-widest font-mono font-bold uppercase rounded shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap translate-x-2 group-hover:translate-x-0">
              {sec.label}
            </span>
            
            {/* The Dot */}
            <span className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSection === sec.id 
                ? 'bg-[#8C6A3D] scale-150 ring-4 ring-[#8C6A3D]/20' 
                : 'bg-slate-400 hover:bg-[#8C6A3D]'
            }`} />
          </button>
        ))}
      </div>

    </div>
  );
}
