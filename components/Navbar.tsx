'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Menu, X, ChevronRight, Phone } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', path: '/' },
    { label: 'TOUR PACKAGES', path: '/packages' },
    { label: 'GALLERY', path: '/gallery' },
    { label: 'ABOUT US', path: '/about' },
    { label: 'CONTACT US', path: '/contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#020813]/95 backdrop-blur-md border-b border-white/5 h-20' 
            : 'bg-transparent h-24 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          
          {/* Logo Brand with Custom Compass Logo */}
          <Link href="/" className="flex items-center gap-3 md:gap-3.5 group">
            <div className="relative w-12 h-12 md:w-[55px] md:h-[55px] flex items-center justify-center rounded-full border border-brand-gold/30 bg-brand-navy p-1 group-hover:border-brand-gold duration-300">
              <svg viewBox="0 0 100 100" className="w-full h-full text-brand-gold animate-spin-slow">
                {/* Compass Circle */}
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2,2" />
                <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="1" />
                {/* Compass Points */}
                <path d="M50,15 L53,42 L80,45 L53,48 L50,85 L47,48 L20,45 L47,42 Z" fill="currentColor" opacity="0.8" />
                <path d="M50,22 L52,42 L70,45 L52,48 L50,78 L48,48 L30,45 L48,42 Z" fill="#020813" />
                {/* Center Core */}
                <circle cx="50" cy="50" r="6" fill="currentColor" />
                <circle cx="50" cy="50" r="2" fill="#020813" />
              </svg>
              {/* Overlay Star Compass Label */}
              <span className="absolute text-[6px] md:text-[7px] font-bold text-brand-gold-light -top-1 md:-top-[5px] font-serif">N</span>
              <span className="absolute text-[6px] md:text-[7px] font-bold text-brand-gold-light -bottom-1 md:-bottom-[5px] font-serif">S</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg md:text-[21px] tracking-widest font-semibold leading-tight text-white group-hover:text-brand-gold duration-300">
                FRIENDS
              </span>
              <span className="font-serif text-[10px] md:text-[11.5px] tracking-[0.25em] font-medium leading-none text-brand-gold flex items-center gap-1">
                TOURS & TRAVELS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  prefetch={true}
                  className={`relative font-sans text-xs tracking-widest font-semibold transition-all duration-300 py-2 hover:text-[#C9A227] ${
                    isActive ? 'text-[#C9A227]' : 'text-gray-300/90'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#C9A227] to-[#FAF5E6] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://wa.me/919303271444?text=Hi%2C%20I%20want%20to%20enquire%20about%20your%20tour%20packages%21"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full border border-[#C9A227] text-[#C9A227] text-xs font-semibold tracking-wider hover:bg-[#C9A227] hover:text-[#020813] active:scale-95 duration-300 flex items-center gap-2 group shadow-lg shadow-amber-500/5 hover:shadow-amber-500/20"
            >
              ENQUIRE NOW
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 duration-300" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-[#C9A227] hover:bg-white/5 transition-colors"
            aria-label="Toggle navigation menu"
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
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-full bg-[#020813]/98 border-b border-white/10 shadow-2xl overflow-hidden md:hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-5 bg-gradient-to-b from-[#020813] to-[#0B1B3A]/40">
                {navLinks.map((link) => {
                  const isActive = pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      href={link.path}
                      prefetch={true}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-xs font-semibold tracking-widest py-2 border-b border-white/5 transition-colors hover:text-[#C9A227] ${
                        isActive ? 'text-[#C9A227]' : 'text-gray-300'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <a 
                  href="https://wa.me/919303271444?text=Hi%2C%20I%20want%20to%20enquire%20about%20your%20tour%20packages%21"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-4 w-full py-3 bg-[#C9A227] text-brand-blue rounded-xl font-bold text-xs tracking-widest text-center uppercase shadow-lg hover:bg-amber-400 duration-300 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  CHAT ON WHATSAPP
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
