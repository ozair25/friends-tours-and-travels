'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Compass, Phone, Mail, MapPin, ChevronRight, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#020813] border-t border-white/5 pt-20 pb-10 z-20 overflow-hidden">
      {/* Decorative gold background beam */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C9A227]/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-6">
            <Link href="/" prefetch={true} className="flex items-center group">
              <div className="relative w-[180px] h-[48px] flex items-center justify-start">
                <Image
                  src="https://res.cloudinary.com/dtrvyelcg/image/upload/v1782808794/ChatGPT_Image_Jun_30_2026_02_06_00_PM_h7ytx3.png"
                  alt="Friends Tours & Travels"
                  fill
                  sizes="180px"
                  className="object-contain object-left group-hover:opacity-90 duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
            </Link>
            
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Friends Tours & Travels is a premier boutique travel curation agency. We specialize in designing bespoke packages and luxury vacations across India&apos;s most sought-after destinations.
            </p>

            {/* Accent lines with airplane */}
            <div className="flex items-center gap-2 mt-2">
              <div className="h-[1px] w-12 bg-[#C9A227]/30" />
              <span className="text-xs text-[#C9A227] font-serif italic">Est. 2012</span>
              <div className="h-[1px] w-20 bg-[#C9A227]/30" />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif text-sm text-white font-semibold tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#C9A227] rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home Page', path: '/' },
                { label: 'Tour Packages', path: '/packages' },
                { label: 'Travel Gallery', path: '/gallery' },
                { label: 'Customer Stories', path: '/about#testimonials' },
                { label: 'About Our Agency', path: '/about' },
                { label: 'Get in Touch', path: '/contact' },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link 
                    href={item.path}
                    prefetch={true}
                    className="text-xs text-gray-400 hover:text-[#C9A227] flex items-center gap-1 group duration-300"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#C9A227]/60 group-hover:translate-x-1 duration-300" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="font-serif text-sm text-white font-semibold tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#C9A227] rounded-full" />
              Contact Details
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                <span className="text-xs text-gray-400 leading-relaxed">
                  12, Royal Plaza Block C, Opp. Central Mall, Indore, Madhya Pradesh - 452001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C9A227] shrink-0" />
                <a href="tel:+919303271444" className="text-xs text-gray-400 hover:text-[#C9A227] duration-300">
                  +91 93032 71444
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C9A227] shrink-0" />
                <a href="mailto:lpagrawal48@gmail.com" className="text-xs text-gray-400 hover:text-[#C9A227] duration-300">
                  lpagrawal48@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours & Action */}
          <div>
            <h4 className="font-serif text-sm text-white font-semibold tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#C9A227] rounded-full" />
              Business Hours
            </h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-xs text-gray-400">
                <Clock className="w-4 h-4 text-[#C9A227] shrink-0" />
                <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
              </li>
              <li className="flex items-center gap-3 text-xs text-gray-400">
                <Clock className="w-4 h-4 text-[#C9A227]/60 shrink-0" />
                <span>Sunday: Closed (Available for emergency bookings)</span>
              </li>
            </ul>
            
            <a 
              href="https://wa.me/919303271444?text=Hi%2C%20I%20want%20to%20enquire%20about%20your%20tour%20packages%21"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C9A227] hover:bg-amber-400 text-brand-blue text-xs font-bold tracking-widest uppercase rounded-xl duration-300 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 active:scale-95"
            >
              CHAT ON WHATSAPP
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} Friends Tours & Travels. All Rights Reserved. Luxury travel concierge.
          </p>
          <div className="flex gap-6">
            <Link href="/contact" prefetch={true} className="text-[10px] text-gray-500 hover:text-[#C9A227] duration-300">About Agency</Link>
            <Link href="/contact" prefetch={true} className="text-[10px] text-gray-500 hover:text-[#C9A227] duration-300">Privacy Policy</Link>
            <Link href="/contact" prefetch={true} className="text-[10px] text-gray-500 hover:text-[#C9A227] duration-300">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
