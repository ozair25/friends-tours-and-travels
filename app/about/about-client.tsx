'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Compass, Award, ShieldCheck, Heart, Sparkles, Map, Users, ArrowRight, Star, Quote } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { TESTIMONIALS } from '../../data/testimonials';

export default function AboutClient() {
  const values = [
    {
      icon: <Sparkles className="w-5 h-5 text-[#8C6A3D]" />,
      title: "Bespoke Customization",
      description: "We don't believe in off-the-shelf templates. Every schedule, stay, and route is meticulously planned according to your exact holiday cravings."
    },
    {
      icon: <Award className="w-5 h-5 text-[#8C6A3D]" />,
      title: "Handpicked Stays",
      description: "Our destination experts continuously vet and select only the highest rated premium boutique resorts and 4-star/5-star colonial heritage hotels."
    },
    {
      icon: <Users className="w-5 h-5 text-[#8C6A3D]" />,
      title: "Dedicated Chauffeurs",
      description: "Travel safely and securely in premium private cars guided by handpicked local chauffeurs who double as friendly, knowledgeable destination guides."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#8C6A3D]" />,
      title: "24/7 Concierge Care",
      description: "Rest easy knowing our operations desk actively monitors your flight, checks, and transfers live to guarantee immediate emergency support."
    }
  ];

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
              SINCE 2012
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#0B1B3A] font-bold tracking-tight uppercase leading-none"
          >
            OUR LEGACY & <span className="text-[#8C6A3D] italic font-serif">VALUES</span>
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
            className="text-xs sm:text-sm text-slate-700 font-medium mt-6 max-w-xl leading-relaxed font-sans"
          >
            Friends Tours & Travels was built on a simple promise: to replace standardized commercial vacations with deeply personalized, stress-free luxury adventures.
          </motion.p>
        </div>
      </section>

      {/* CORE COMPANY STORY & IMAGE */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-6">
            <span className="text-[10px] font-mono tracking-widest text-[#8C6A3D] uppercase font-bold">WHO WE ARE</span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#0B1B3A] font-bold uppercase tracking-wider">
              An Exquisite Travel Curation Agency
            </h2>
            <div className="h-[1px] w-20 bg-[#8C6A3D]/40" />
            
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-sans font-medium">
              Founded over a decade ago in 2012, Friends Tours & Travels began as a small family-run consultancy with a profound passion for introducing travelers to the majestic peaks of Manali, the golden sands of Goa, and the royal heritage forts of Rajasthan.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              Today, we operate as a full-service boutique travel agency. We combine cutting-edge technology (like our customized planning suites) with old-school hospitality. We ensure that you bypass the tourism traps, enjoy exclusive VIP amenities, and explore India exactly the way you want.
            </p>

            <div className="pt-4">
              <Link 
                href="/packages"
                prefetch={true}
                className="inline-flex items-center gap-1.5 px-6 py-3 bg-[#0B1B3A] text-white hover:bg-[#8C6A3D] text-xs font-bold tracking-widest uppercase rounded-xl transition-all duration-300 shadow-md"
              >
                DISCOVER OUR TOURS
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Large Editorial Framed Image */}
          <div className="relative h-[400px] w-full rounded-3xl overflow-hidden border-2 border-[#8C6A3D]/40 shadow-2xl group">
            <Image
              src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80"
              alt="Mountain Travel Story"
              fill
              className="object-cover group-hover:scale-105 duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-[#020813]/10" />
          </div>

        </div>
      </section>

      {/* VISION & MISSION DUAL CARDS */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vision */}
          <div className="p-8 bg-white border border-slate-200/80 rounded-3xl space-y-4 shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-[#8C6A3D]/10 flex items-center justify-center text-[#8C6A3D] mb-4">
              <Map className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg text-[#0B1B3A] font-bold uppercase tracking-wider">Our Vision</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              To be recognized as India&apos;s leading boutique travel agency, acclaimed for setting the standard in personalized luxury, safety, and cultural authenticity. We strive to pioneer journeys that honor both the traveler and local communities.
            </p>
          </div>

          {/* Mission */}
          <div className="p-8 bg-white border border-slate-200/80 rounded-3xl space-y-4 shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-[#8C6A3D]/10 flex items-center justify-center text-[#8C6A3D] mb-4">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg text-[#0B1B3A] font-bold uppercase tracking-wider">Our Mission</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              To design meticulously curated travel packages that seamlessly blend comfort, leisure, and raw discovery. We promise absolute pricing transparency, flawless local coordination, and responsive, customer-first service from initial consult to return journey.
            </p>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US - VALUE PROPOSITIONS */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-20">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-[10px] font-mono tracking-widest text-[#8C6A3D] uppercase font-bold">THE FRIENDS PROMISE</span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#0B1B3A] font-bold uppercase tracking-wider">
            Our Customer-First Approach
          </h2>
          <div className="h-[1px] w-20 bg-[#8C6A3D]/40 mx-auto" />
          <p className="text-xs text-slate-600 leading-relaxed">
            Every vacation we construct is framed by four absolute travel guarantees, designed to keep your focus purely on enjoying the experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, idx) => (
            <div key={idx} className="p-6 bg-white border border-slate-200/80 rounded-3xl hover:border-[#8C6A3D]/40 duration-300 shadow-lg text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#8C6A3D]/10 flex items-center justify-center mb-5">
                {val.icon}
              </div>
              <h3 className="font-serif text-sm text-[#0B1B3A] font-bold tracking-wide mb-3 uppercase">
                {val.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-200 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-[10px] font-mono tracking-widest text-[#8C6A3D] uppercase font-bold">GUEST DIARIES</span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#0B1B3A] font-bold uppercase tracking-wider">
            Client Success Stories
          </h2>
          <div className="h-[1px] w-20 bg-[#8C6A3D]/40 mx-auto" />
          <p className="text-xs text-slate-600 leading-relaxed font-sans">
            Discover why our loyal clients choose Friends Tours & Travels time and again for their bespoke luxury experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              key={test.id}
              className="bg-white border border-slate-200/80 p-8 rounded-3xl flex flex-col justify-between relative hover:border-[#8C6A3D]/40 duration-300 group shadow-xl"
            >
              {/* Double quotation icon */}
              <div className="absolute top-6 right-8 text-black/5 group-hover:text-[#8C6A3D]/5 duration-300 pointer-events-none">
                <Quote className="w-16 h-16 fill-current" />
              </div>

              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#8C6A3D] fill-[#8C6A3D]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic font-sans mb-8">
                  &ldquo;{test.review}&rdquo;
                </p>
              </div>

              {/* User Identity Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                {test.image ? (
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#8C6A3D]/40">
                    <Image
                      src={test.image}
                      alt={test.name}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-full bg-[#EFECE6] border-2 border-[#8C6A3D]/40 flex items-center justify-center text-xs font-serif font-bold text-[#8C6A3D]">
                    {test.name.substring(0, 2).toUpperCase()}
                  </div>
                )}
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#0B1B3A] tracking-wide">{test.name}</h4>
                  <span className="text-[10px] text-[#8C6A3D] font-mono tracking-wider uppercase">{test.city}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA PROMPT SECTION */}
      <section className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 mb-32 scroll-mt-24">
        <div className="bg-gradient-to-r from-[#0B1B3A] to-[#0D284F] border border-[#C9A227]/30 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#C9A227]/5 rounded-full filter blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center space-y-6">
            <div className="w-12 h-12 rounded-full bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227] mb-2">
              <Heart className="w-6 h-6 fill-current animate-pulse text-[#C9A227]" />
            </div>
            
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-semibold uppercase tracking-wider">
              READY TO BE OUR NEXT <span className="text-[#C9A227] italic">SUCCESS STORY</span>?
            </h2>
            
            <p className="text-xs text-gray-300 max-w-md leading-relaxed font-sans">
              Connect with our boutique destination specialists today and design an unforgettably luxurious vacation package tailored completely to you.
            </p>

            <Link 
              href="/contact"
              prefetch={true}
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#C9A227] text-slate-900 font-bold text-xs tracking-widest uppercase rounded-full hover:bg-amber-400 active:scale-95 duration-300 shadow-xl shadow-amber-500/10"
            >
              PLAN YOUR TRIP NOW
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}
