'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Compass } from 'lucide-react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an analytics or logging service in production
    console.error('App Router Boundary Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#FAF8F5] flex flex-col items-center justify-center text-center px-4">
      {/* Decorative Brand Accent */}
      <div className="flex items-center gap-2 mb-4">
        <Compass className="w-5 h-5 text-[#C9A227] animate-spin-slow" />
        <span className="text-[10px] font-mono tracking-[0.25em] text-[#0B1B3A] uppercase font-bold">
          Friends Tours & Travels
        </span>
      </div>

      <h1 className="font-serif text-5xl sm:text-6xl text-[#0B1B3A] font-bold mb-4">500</h1>
      <h2 className="font-serif text-xl sm:text-2xl text-[#C9A227] font-bold mb-6 italic">
        A Connection Departure Interruption Occurred
      </h2>
      <p className="text-slate-600 text-xs sm:text-sm max-w-md mb-8 leading-relaxed font-medium">
        We encountered a temporary server anomaly while curating your travel view. Rest assured, our digital concierge team is already resolving this.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
        <button
          onClick={() => reset()}
          className="px-8 py-3.5 bg-[#0B1B3A] hover:bg-[#C9A227] text-white font-bold text-xs tracking-widest uppercase rounded-xl transition-all duration-300 shadow-md cursor-pointer border border-transparent"
        >
          Try Re-loading Page
        </button>
        <Link
          href="/"
          className="px-8 py-3.5 bg-transparent hover:bg-[#0B1B3A]/5 text-[#0B1B3A] font-bold text-xs tracking-widest uppercase rounded-xl transition-all duration-300 border border-[#0B1B3A]/20 cursor-pointer"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
