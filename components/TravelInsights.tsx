'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  Bookmark, 
  Search, 
  X, 
  Share2, 
  Copy, 
  Check, 
  ChevronRight, 
  Compass, 
  ArrowRight, 
  Sparkles, 
  Mail, 
  Facebook, 
  Twitter,
  Send,
  User
} from 'lucide-react';

interface Article {
  id: string;
  category: 'Destination Guides' | 'Travel Tips' | 'Seasonal Offers';
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content: string[];
  tags: string[];
}

const INSIGHTS_ARTICLES: Article[] = [
  {
    id: 'rajasthan-luxury-guide',
    category: 'Destination Guides',
    title: 'Chasing the Golden Hour: A Luxury Guide to Royal Rajasthan',
    excerpt: 'From private hot-air balloon safaris to romantic dining under the desert stars, discover the ultimate curated heritage experiences.',
    readTime: '6 min read',
    date: 'July 10, 2026',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'LP Agrawal',
      role: 'Founder & Chief Curator',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    tags: ['Rajasthan', 'Heritage Hotels', 'Private Safaris', 'Luxury Dining'],
    content: [
      'Rajasthan, the land of Maharajas, is a vibrant tapestry of majestic forts, golden deserts, and historic palaces. For the discerning traveller, Rajasthan is not just a destination; it is an immersive step back into an era of unparalleled royal grandeur.',
      'Our curations begin in the Pink City of Jaipur, where we arrange private sunset viewings at Nahargarh Fort, overlooking the sparkling city. Stay at the opulent Rambagh Palace, once the residence of the Maharaja of Jaipur, and experience a personalized butler service that caters to your every desire.',
      'In Udaipur, the City of Lakes, we recommend a private boat charter at dusk on Lake Pichola. Watch the white marble walls of Taj Lake Palace shimmer under the twilight, followed by an exclusive rooftop dinner with custom-crafted royal cuisine.',
      'For adventure seekers with an eye for luxury, a private hot-air balloon flight over Amber Fort provides breathtaking panoramas. Or, venture into the Thar Desert of Jaisalmer, where luxury tented camps offer private candle-lit dining on the dunes, accompanied by traditional folk musicians under a canopy of stars.',
      'At Friends Tours & Travels, we tailor every detail—from secure, private luxury transfers with highly experienced chauffeurs, to exclusive access to palace quarters normally closed to the public. Let us craft your royal Rajasthani narrative.'
    ]
  },
  {
    id: 'art-of-elegant-packing',
    category: 'Travel Tips',
    title: 'The Art of Elegant Packing: Essential Guidelines for Global Voyagers',
    excerpt: 'Streamline your journeys with our curated checklist for luxury resort wear, evening soirées, and effortless international flight transitions.',
    readTime: '4 min read',
    date: 'June 28, 2026',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Simran Agrawal',
      role: 'Luxury Concierge Director',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    tags: ['Travel Tips', 'Packing', 'Luggage Guide', 'Airport Fast Track'],
    content: [
      'True luxury travel is as much about the journey as the destination. Arriving effortlessly polished, with garments pristine and ready for a cocktail evening or an impromptu safari, is an art form.',
      'First, invest in premium, lightweight hard-shell luggage. Brands like Rimowa or Globe-Trotter offer both timeless editorial elegance and heavy-duty protection for high-value holiday wear. Always place a tracker like an AirTag inside every piece of luggage.',
      'Focus on a capsule wardrobe crafted from fine natural fibres. Breathable linen and premium silk are perfect for tropical resorts in South India or Goa, while fine merino wool and cashmere are indispensable for chilly evenings in the high hills of Darjeeling or Gulmarg.',
      'For footwear, always separate shoes in individual cotton dust bags to protect your clothing. We recommend packing structured cedar shoe trees to maintain footwear shape, and rolling smaller delicate items inside garments to maximize space and reduce creases.',
      'Finally, always pack a designated, accessible travel organizer containing all flight vouchers, visa approvals, passport credentials, and medication. Our concierge team manages fast-track customs clearances for our guests at major airports to make sure your arrival is as smooth as silk.'
    ]
  },
  {
    id: 'kerala-monsoon-serenade',
    category: 'Seasonal Offers',
    title: 'Monsoon Serenade: Curated Ayurvedic Retreats in Kerala & Coorg',
    excerpt: 'Experience the healing, magical properties of monsoon Ayurveda, private houseboat cruises, and misty green tea estates with seasonal privileges.',
    readTime: '5 min read',
    date: 'July 01, 2026',
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'LP Agrawal',
      role: 'Founder & Chief Curator',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    tags: ['Kerala', 'Coorg', 'Ayurveda', 'Monsoon Retreat', 'Exclusive Offer'],
    content: [
      'The monsoon season in India is a period of spectacular natural rebirth. The hills of Coorg turn a brilliant emerald green, and the backwaters of Kerala flow with absolute tranquility. According to ancient wisdom, this wet and cool season is the absolute best time for Ayurvedic healing treatments.',
      'We have partnered with some of the finest luxury wellness resorts in Kerala, such as Niraamaya Retreats and Kumarakom Lake Resort, to offer our clients exclusive monsoon privileges, including complimentary spa vouchers and private consultations with master practitioners.',
      'Board a fully air-conditioned, luxury private Kettuvallam (houseboat) in Alleppey. Cruise through palm-fringed canals while listening to the rhythmic rain. Enjoy a private chef who prepares freshly caught pearl spot fish with local Malabari spices right on board.',
      'In Coorg, escape to private villas nestled within dense coffee plantations. Our seasonal package includes a complimentary private coffee-brewing workshop with master roasters, estate trekking guided by naturalists, and evening fireside wine tastings in your chalet.',
      'This exclusive seasonal package is valid for travel throughout August and September. Book before July 31st to secure premium room upgrades and flexible dates.'
    ]
  },
  {
    id: 'darjeeling-colonial-heritage',
    category: 'Destination Guides',
    title: 'Elegance of the East: Unveiling Darjeeling’s Colonial Tea Estates',
    excerpt: 'Sip pristine, first-flush Darjeeling tea overlooking Mount Kanchenjunga while residing at historic colonial bungalow estates.',
    readTime: '5 min read',
    date: 'May 15, 2026',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Simran Agrawal',
      role: 'Luxury Concierge Director',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    tags: ['Darjeeling', 'Tea Estate', 'Himalayas', 'Colonial Heritage'],
    content: [
      'Perched in the majestic foothills of the Eastern Himalayas, Darjeeling is a timeless haven of rolling mist, historic railways, and the world’s most sought-after tea. It remains a pinnacle for travellers seeking crisp mountain air and refined colonial charm.',
      'Stay at the legendary Glenburn Tea Estate, a boutique retreat established by a Scottish tea company in 1859. Set on a hill overlooking the River Rungeet and the mighty peaks of Kanchenjunga, this estate offers an immersive step back into colonial elegance.',
      'Awaken to bed-tea served in fine bone china, followed by a personalized tour of the tea fields with a resident planter. Learn the delicate process of tea plucking and taste the rare first-flush leaves, known internationally as the "Champagne of Teas".',
      'We also arrange private charters on the historic Darjeeling Toy Train, a UNESCO World Heritage site. Wind through lush mountainsides and local loops in a private, first-class steam locomotive compartment, catching glimpses of local Himalayan villages.',
      'From private dining rooms serving bespoke Anglo-Indian meals to cozy fireplace gatherings in your wooden chalet, we curate Darjeeling with a level of hospitality that is warm, personal, and profoundly elegant.'
    ]
  },
  {
    id: 'hassle-free-visa-assistance',
    category: 'Travel Tips',
    title: 'Bespoke Visa Curation: Navigating Seamless International Leisure Travel',
    excerpt: 'A comprehensive checklist by our elite concierge team on fast-track processing, paper clarity, and luxury-tier holiday destinations.',
    readTime: '7 min read',
    date: 'April 20, 2026',
    image: 'https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'LP Agrawal',
      role: 'Founder & Chief Curator',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    tags: ['Visa Guide', 'International Travel', 'Concierge Services', 'Border Planning'],
    content: [
      'For global leisure travellers, international bureaucracy should never dull the anticipation of a beautiful holiday. Navigating visas for Europe’s Schengen zone, the UK, or exotic Asian retreats can be simple when handled by experienced advisors.',
      'Our dedicated documentation team begins by pre-screening all required materials—ensuring bank declarations, business proofs, and taxation records perfectly align with consulate guidelines. This rigorous pre-check eliminates 99% of common application pitfalls.',
      'We also offer premium doorstep biometric collection and expedited processing coordinates through VFS Global whenever available. You can complete your requirements in absolute privacy, without waiting in standard public lines.',
      'If you seek a spontaneous escape, consider high-end, visa-on-arrival or visa-free destinations for Indian passport holders, such as the tropical waters of Thailand, the Maldives, or Mauritius. We can arrange completely spontaneous itineraries to these spots in under 48 hours.',
      'With Friends Tours & Travels, you are supported at every step. From local flight connections to fast-track arrival escorts, your borders are crossed with effortless ease.'
    ]
  },
  {
    id: 'gulmarg-winter-chalets',
    category: 'Seasonal Offers',
    title: 'Winter Splendour: Private Ski Chalets & Snow Adventures in Gulmarg',
    excerpt: 'Secure early-booking advantages in Kashmir’s premier winter wonderland. Indulge in private heated pools and guided skiing excursions.',
    readTime: '6 min read',
    date: 'August 12, 2026',
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Simran Agrawal',
      role: 'Luxury Concierge Director',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    tags: ['Gulmarg', 'Kashmir', 'Ski Resort', 'Winter Chalet', 'Early Bird Offer'],
    content: [
      'Gulmarg, nestled deep within the Pir Panjal range of Kashmir, is widely celebrated as Asia’s finest powder snow skiing resort. From December to March, this valley is covered in deep snow, resembling a romantic alpine postcard.',
      'We are proud to offer booking access to premium, highly-coveted ski chalets at The Khyber Himalayan Resort & Spa. Perched 8,825 feet above sea level amidst pristine pine trees, this property blends rustic Kashmiri timber with world-class five-star facilities.',
      'Our early-bird seasonal package includes a private, certified skiing instructor for your group, access to the Khyber’s beautiful, glass-enclosed heated indoor pool overlooking snowy pine peaks, and private ski equipment rentals delivered straight to your door.',
      'In the evenings, we arrange fireside Kashmiri Wazwan dining—a multi-course traditional feast featuring aromatic lamb, saffron rice, and local Kahwa tea brewed over live coals inside your private balcony conservatory.',
      'Winter chalets fill up months in advance. Secure your early-bird reservation by booking before September 15th to enjoy exclusive ski-pass inclusions and complimentary airport pick-ups from Srinagar in premium luxury SUVs.'
    ]
  }
];

export default function TravelInsights() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('friends_tours_blog_bookmarks');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error(e);
        }
      }
    }
    return [];
  });
  const [viewBookmarksOnly, setViewBookmarksOnly] = useState<boolean>(false);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Handle bookmark toggle
  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Avoid opening the article modal
    const updated = bookmarkedIds.includes(id)
      ? bookmarkedIds.filter(item => item !== id)
      : [...bookmarkedIds, id];
    
    setBookmarkedIds(updated);
    if (typeof window !== 'undefined') {
      localStorage.setItem('friends_tours_blog_bookmarks', JSON.stringify(updated));
    }
  };

  // Filter articles
  const filteredArticles = INSIGHTS_ARTICLES.filter(article => {
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesBookmark = !viewBookmarksOnly || bookmarkedIds.includes(article.id);

    return matchesCategory && matchesSearch && matchesBookmark;
  });

  // Share link function
  const handleCopyLink = (id: string) => {
    if (typeof window !== 'undefined') {
      const url = `${window.location.origin}/#insights?article=${id}`;
      navigator.clipboard.writeText(url).then(() => {
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2500);
      });
    }
  };

  // Pre-fill enquiry and scroll to contact
  const handleBookEnquiry = (title: string) => {
    setSelectedArticle(null); // Close modal
    
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        
        // Find the textarea or contact form container and insert pre-filled text
        const textarea = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement;
        if (textarea) {
          textarea.value = `Hi Friends Tours & Travels team,\n\nI was reading your luxury travel insights article: "${title}". I am highly interested in booking a personalized luxury holiday inspired by this itinerary. Please reach out to me with curated proposals and quotation details. Thank you!`;
          // Dispatch input event to update react state if any
          const event = new Event('input', { bubbles: true });
          textarea.dispatchEvent(event);
        }
      }
    }, 400);
  };

  // Generate Article Schema markup for the selected or all blogs
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    'name': 'Friends Tours & Travels - Luxury Travel Insights',
    'description': 'Elegantly curated travel guidebooks, professional tips, and exclusive seasonal holiday packages designed by travel curators in Indore.',
    'publisher': {
      '@type': 'TravelAgency',
      'name': 'Friends Tours & Travels',
      'logo': 'https://res.cloudinary.com/dtrvyelcg/image/upload/v1782917857/ChatGPT_Image_Jul_1_2026_08_27_19_PM_wjic7a.png',
      'url': 'https://friendstoursandtravel.com'
    },
    'blogPost': INSIGHTS_ARTICLES.map(article => ({
      '@type': 'BlogPosting',
      '@id': `https://friendstoursandtravel.com/#insights?article=${article.id}`,
      'headline': article.title,
      'description': article.excerpt,
      'datePublished': '2026-07-10T12:00:00+05:30', // standard structured date
      'image': article.image,
      'author': {
        '@type': 'Person',
        'name': article.author.name,
        'jobTitle': article.author.role
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'Friends Tours & Travels'
      },
      'mainEntityOfPage': `https://friendstoursandtravel.com/#insights?article=${article.id}`
    }))
  };

  return (
    <section id="insights" className="relative py-24 bg-gradient-to-b from-[#FAF8F5] to-white border-t border-slate-200 z-20">
      
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="px-3 py-1 rounded-full border border-[#C9A227]/30 bg-[#C9A227]/5 text-[#C9A227] text-[10px] tracking-[0.25em] font-bold uppercase inline-block">
            EDITORIAL JOURNAL
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-wide font-bold text-[#0B1B3A] uppercase">
            TRAVEL <span className="text-[#8C6A3D]">INSIGHTS</span>
          </h2>
          <div className="h-[2.5px] w-24 bg-gradient-to-r from-[#C9A227] to-[#8C6A3D] mx-auto rounded-full" />
          
          <p className="font-script text-[#C9A227] text-2xl sm:text-3xl italic block pl-1">
            Elegantly curated stories, tips, and guidebooks for the discerning traveller
          </p>
        </div>

        {/* Search, Categories & Saved Filters Control Board */}
        <div className="bg-[#FAF8F5]/80 border border-[#8C6A3D]/20 rounded-3xl p-6 mb-12 shadow-sm space-y-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            
            {/* Search Input */}
            <div className="relative w-full lg:max-w-md">
              <input
                id="blog-search-input"
                type="text"
                placeholder="Search guidebooks, destinations, tips..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white text-slate-800 border border-slate-200 focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227]/40 pl-11 pr-4 py-3 rounded-2xl text-xs sm:text-sm outline-none transition-all duration-300 font-medium"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X className="w-3.5 h-3.5 text-slate-400" />
                </button>
              )}
            </div>

            {/* Bookmarks Toggle button */}
            <button
              id="bookmarks-toggle-btn"
              onClick={() => setViewBookmarksOnly(!viewBookmarksOnly)}
              className={`w-full lg:w-auto px-5 py-3 rounded-2xl border transition-all duration-300 flex items-center justify-center gap-2.5 text-xs tracking-wider uppercase font-bold cursor-pointer ${
                viewBookmarksOnly 
                  ? 'bg-[#0B1B3A] border-[#0B1B3A] text-white shadow-md' 
                  : 'bg-white border-slate-200 text-[#0B1B3A] hover:bg-slate-50'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${viewBookmarksOnly ? 'fill-[#C9A227] text-[#C9A227]' : 'text-[#8C6A3D]'}`} />
              <span>SAVED INSIGHTS ({bookmarkedIds.length})</span>
            </button>

          </div>

          {/* Categories Tab Pill Slider */}
          <div className="flex flex-wrap gap-2.5 justify-center sm:justify-start border-t border-slate-200/60 pt-4">
            {['All', 'Destination Guides', 'Travel Tips', 'Seasonal Offers'].map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  id={`category-tab-${category.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-xl text-[10px] tracking-widest font-bold uppercase transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#8C6A3D] text-white shadow-md shadow-[#8C6A3D]/10 hover:bg-[#5C4527]'
                      : 'bg-white text-slate-600 hover:text-[#0B1B3A] border border-slate-100 hover:border-slate-300'
                  }`}
                >
                  {category === 'All' ? 'All Stories' : category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Blog Article Cards Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((article, index) => {
                const isBookmarked = bookmarkedIds.includes(article.id);
                return (
                  <motion.div
                    key={article.id}
                    id={`article-card-${article.id}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    onClick={() => setSelectedArticle(article)}
                    className="group bg-white rounded-3xl overflow-hidden border border-[#8C6A3D]/15 hover:border-[#C9A227]/40 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col h-full relative"
                  >
                    
                    {/* Floating Bookmark/Save icon */}
                    <button
                      id={`bookmark-btn-${article.id}`}
                      onClick={(e) => toggleBookmark(article.id, e)}
                      className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 flex items-center justify-center text-[#0B1B3A] hover:bg-white hover:scale-110 active:scale-95 duration-300 shadow-sm cursor-pointer"
                      title={isBookmarked ? 'Remove Bookmark' : 'Save Article'}
                    >
                      <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-[#C9A227] text-[#C9A227]' : 'text-[#8C6A3D]'}`} />
                    </button>

                    {/* Image Container with high quality overlay framing */}
                    <div className="relative h-[220px] w-full overflow-hidden shrink-0">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3A]/40 to-transparent" />
                      
                      {/* Visual Pill Category Badge */}
                      <span className="absolute bottom-4 left-4 px-2.5 py-1 rounded-md bg-[#0B1B3A] border border-white/10 text-white font-mono text-[9px] tracking-wider uppercase font-bold">
                        {article.category}
                      </span>
                    </div>

                    {/* Card Content body */}
                    <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                      
                      {/* Meta reading stats */}
                      <div className="flex items-center gap-4 text-slate-500 text-[10px] tracking-wider uppercase font-semibold">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#C9A227]" />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#C9A227]" />
                          {article.readTime}
                        </span>
                      </div>

                      {/* Header Title */}
                      <div className="space-y-2">
                        <h3 className="font-serif text-lg text-[#0B1B3A] font-bold tracking-wide group-hover:text-[#8C6A3D] leading-snug duration-300">
                          {article.title}
                        </h3>
                        <p className="text-slate-600 text-xs line-clamp-3 leading-relaxed">
                          {article.excerpt}
                        </p>
                      </div>

                      {/* Divider */}
                      <div className="h-[1px] w-full bg-[#8C6A3D]/10 pt-1" />

                      {/* Card Footer detail */}
                      <div className="flex items-center justify-between pt-1">
                        
                        {/* Author */}
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-[#FAF8F5] border border-[#8C6A3D]/30 flex items-center justify-center text-[#8C6A3D] shrink-0">
                            <User className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <p className="text-[10px] font-bold text-[#0B1B3A] uppercase tracking-wider">{article.author.name}</p>
                            <p className="text-[9px] text-slate-400 font-medium">{article.author.role}</p>
                          </div>
                        </div>

                        {/* Read Link */}
                        <span className="text-[10px] tracking-widest font-black uppercase text-[#8C6A3D] group-hover:text-[#C9A227] flex items-center gap-1 transition-colors duration-300">
                          READ ARTICLE
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 duration-300" />
                        </span>

                      </div>

                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        ) : (
          /* Empty Search or Bookmark State */
          <div className="bg-white border border-[#8C6A3D]/20 p-12 rounded-3xl text-center max-w-lg mx-auto space-y-6 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-[#FAF8F5] border border-[#8C6A3D]/20 flex items-center justify-center mx-auto text-[#8C6A3D]">
              <Compass className="w-8 h-8 animate-spin-slow" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-xl font-bold text-[#0B1B3A] uppercase">
                {viewBookmarksOnly ? 'No Saved Insights Yet' : 'No Journeys Found'}
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto">
                {viewBookmarksOnly 
                  ? 'Click the bookmark icon on any travel card to save stories or guidelines for your future holiday inspirations.' 
                  : 'We could not find any guidebooks matching your search term. Please try adjusting your keywords.'}
              </p>
            </div>
            <button
              id="reset-filter-btn"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
                setViewBookmarksOnly(false);
              }}
              className="px-6 py-2.5 bg-[#0B1B3A] hover:bg-[#C9A227] text-white text-[10px] font-bold tracking-widest uppercase rounded-xl transition-all duration-300 cursor-pointer"
            >
              Reset Search Filter
            </button>
          </div>
        )}

      </div>

      {/* DETAILED ARTICLE READER MODAL OVERLAY */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            id="blog-modal-overlay"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing
              className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-[#8C6A3D]/35 relative"
              id={`article-reader-${selectedArticle.id}`}
            >
              
              {/* Close Button absolute */}
              <button
                id="close-reader-btn"
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/45 border border-white/10 flex items-center justify-center text-white hover:bg-[#8C6A3D] hover:scale-105 transition-all duration-300 cursor-pointer shadow-md"
                title="Close Reader"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Scrollable Container */}
              <div className="overflow-y-auto flex-grow scrollbar">
                
                {/* Hero Header with high opacity overlay */}
                <div className="relative h-[250px] sm:h-[350px] w-full">
                  <Image
                    src={selectedArticle.image}
                    alt={selectedArticle.title}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/30" />
                  
                  {/* Floating Content over Image */}
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-2 sm:space-y-3">
                    <span className="px-2.5 py-1 rounded-md bg-[#C9A227] text-white font-mono text-[9px] sm:text-[10px] tracking-wider uppercase font-bold inline-block">
                      {selectedArticle.category}
                    </span>
                    <h1 className="font-serif text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide leading-tight uppercase drop-shadow-md">
                      {selectedArticle.title}
                    </h1>
                  </div>
                </div>

                {/* Article Content Layout */}
                <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Author, metadata & Sharing (3 cols) */}
                  <div className="lg:col-span-4 space-y-6 border-b lg:border-b-0 lg:border-r border-slate-100 pb-6 lg:pb-0 lg:pr-6">
                    
                    {/* Author Premium card */}
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-[#FAF8F5] border border-[#8C6A3D]/30 flex items-center justify-center text-[#8C6A3D] shadow-sm shrink-0">
                        <User className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#0B1B3A] uppercase tracking-wider">{selectedArticle.author.name}</p>
                        <p className="text-[10px] text-slate-400 font-semibold">{selectedArticle.author.role}</p>
                      </div>
                    </div>

                    {/* Metadata list */}
                    <div className="space-y-2 text-[11px] text-slate-500 font-semibold uppercase tracking-wider pt-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#C9A227]" />
                        <span>Published: {selectedArticle.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#C9A227]" />
                        <span>Reading Duration: {selectedArticle.readTime}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="space-y-2">
                      <h4 className="text-[10px] font-bold text-[#0B1B3A] tracking-widest uppercase">Tagged In:</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedArticle.tags.map(tag => (
                          <span 
                            key={tag}
                            className="px-2 py-1 bg-slate-100 rounded-md text-[9px] text-slate-600 font-bold uppercase tracking-wider"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Share widgets */}
                    <div className="space-y-3 pt-4 border-t border-slate-100">
                      <h4 className="text-[10px] font-bold text-[#0B1B3A] tracking-widest uppercase flex items-center gap-1.5">
                        <Share2 className="w-3.5 h-3.5 text-[#C9A227]" />
                        Share This Insight:
                      </h4>
                      <div className="flex flex-wrap items-center gap-2">
                        
                        {/* Copy Link Button */}
                        <button
                          id={`copy-url-btn-${selectedArticle.id}`}
                          onClick={() => handleCopyLink(selectedArticle.id)}
                          className={`px-3 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-wider border transition-all duration-300 flex items-center gap-1 cursor-pointer ${
                            copiedId === selectedArticle.id
                              ? 'bg-green-50 border-green-200 text-green-600'
                              : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          {copiedId === selectedArticle.id ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3 text-slate-400" />}
                          <span>{copiedId === selectedArticle.id ? 'Copied URL!' : 'Copy Link'}</span>
                        </button>

                        {/* Social Share triggers */}
                        <a
                          id="share-fb-btn"
                          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? `${window.location.origin}/#insights?article=${selectedArticle.id}` : '')}`}
                          target="_blank"
                          rel="noreferrer"
                          className="w-7 h-7 rounded-lg border border-slate-200 bg-white hover:bg-[#3b5998]/5 text-[#3b5998] flex items-center justify-center transition-colors shadow-sm"
                          title="Share on Facebook"
                        >
                          <Facebook className="w-3.5 h-3.5 fill-[#3b5998]" />
                        </a>

                        <a
                          id="share-twitter-btn"
                          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`Check out this luxury travel article: ${selectedArticle.title}`)}&url=${encodeURIComponent(typeof window !== 'undefined' ? `${window.location.origin}/#insights?article=${selectedArticle.id}` : '')}`}
                          target="_blank"
                          rel="noreferrer"
                          className="w-7 h-7 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center transition-colors shadow-sm"
                          title="Share on X (Twitter)"
                        >
                          <Twitter className="w-3.5 h-3.5 fill-slate-700 text-slate-700" />
                        </a>

                        <a
                          id="share-wa-btn"
                          href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`Check out this travel insight: ${selectedArticle.title} - ${typeof window !== 'undefined' ? `${window.location.origin}/#insights?article=${selectedArticle.id}` : ''}`)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="w-7 h-7 rounded-lg border border-slate-200 bg-white hover:bg-emerald-50 text-emerald-600 flex items-center justify-center transition-colors shadow-sm"
                          title="Share on WhatsApp"
                        >
                          <Send className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500 rotate-45" />
                        </a>

                      </div>
                    </div>

                  </div>

                  {/* Right Column: Article Paragraphs & Call-to-action (8 cols) */}
                  <div className="lg:col-span-8 space-y-6">
                    
                    {/* Editorial Content */}
                    <div className="space-y-4 text-[#0B1B3A] text-xs sm:text-sm leading-relaxed font-medium">
                      {selectedArticle.content.map((para, i) => (
                        <p 
                          key={i} 
                          className={i === 0 ? 'text-slate-800 text-sm sm:text-base font-serif italic border-l-2 border-[#C9A227] pl-4 mb-6' : 'text-slate-600'}
                        >
                          {para}
                        </p>
                      ))}
                    </div>

                    {/* Decorative gold emblem line */}
                    <div className="flex items-center justify-center gap-3 pt-6 pb-2">
                      <div className="h-[1px] w-20 bg-[#8C6A3D]/25" />
                      <Compass className="w-4 h-4 text-[#C9A227] animate-spin-slow" />
                      <div className="h-[1px] w-20 bg-[#8C6A3D]/25" />
                    </div>

                    {/* Highly relevant interactive Call to Action Card */}
                    <div className="bg-[#FAF8F5] border border-[#8C6A3D]/30 p-6 rounded-3xl text-center space-y-4">
                      <h4 className="font-serif text-[#0B1B3A] text-sm sm:text-base font-extrabold uppercase tracking-wide">
                        Inspired by this beautiful itinerary?
                      </h4>
                      <p className="text-slate-500 text-[11px] sm:text-xs max-w-lg mx-auto leading-relaxed">
                        Allow our veteran travel designers to tailor this experience precisely to your calendar, preferences, and desires. Click below to begin your bespoke reservation.
                      </p>
                      <button
                        id={`enquire-article-cta-${selectedArticle.id}`}
                        onClick={() => handleBookEnquiry(selectedArticle.title)}
                        className="px-8 py-3.5 bg-[#0B1B3A] hover:bg-[#C9A227] text-white font-bold text-xs tracking-widest uppercase rounded-xl shadow-md hover:scale-[1.02] duration-300 transition-all flex items-center gap-2 mx-auto cursor-pointer"
                      >
                        <Compass className="w-4 h-4 text-[#C9A227]" />
                        <span>Enquire About This Journey</span>
                      </button>
                    </div>

                  </div>

                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
