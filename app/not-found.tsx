import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] flex flex-col items-center justify-center text-center px-4">
      <span className="text-[11px] font-mono tracking-[0.25em] text-[#8C6A3D] uppercase font-bold mb-4 block">
        ✨ Friends Tours & Travels
      </span>
      <h1 className="font-serif text-6xl text-[#0B1B3A] font-bold mb-4">404</h1>
      <h2 className="font-serif text-xl sm:text-2xl text-[#8C6A3D] font-bold mb-6">Page Not Found</h2>
      <p className="text-slate-600 text-xs sm:text-sm max-w-md mb-8 leading-relaxed font-medium">
        We couldn&apos;t find the holiday page or itinerary you are looking for. It might have been moved, or does not exist.
      </p>
      <Link
        href="/"
        className="px-8 py-3.5 bg-[#0B1B3A] hover:bg-[#8C6A3D] text-white font-bold text-xs tracking-widest uppercase rounded-xl transition-all duration-300 shadow-md cursor-pointer"
      >
        Go Back Home
      </Link>
    </div>
  );
}
