export interface Destination {
  id: string;
  name: string;
  tagline: string;
  image: string;
  coverImage: string;
  description: string;
  bestTime: string;
  duration: string;
  costEstimate: string;
  attractions: string[];
  experiences: string[];
  rating: number;
  reviewsCount: number;
}

export const DESTINATIONS: Destination[] = [
  {
    id: "manali",
    name: "Manali",
    tagline: "The Valley of the Gods & Snowy Horizons",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80",
    coverImage: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=80",
    description: "Nestled in the breathtaking Beas River Valley, Manali is a magnetic high-altitude Himalayan resort town. Known for its gorgeous snow-dusted valleys, dense pine forests, and cool mountain air, it offers a serene escape and thrilling adventure sports in equal measure.",
    bestTime: "October to June (Snowfall in Dec - Feb)",
    duration: "5 Nights / 6 Days",
    costEstimate: "₹18,500 - ₹24,000 per person",
    attractions: ["Solang Valley", "Rohtang Pass", "Hadimba Temple", "Old Manali Cafes", "Jogini Waterfalls"],
    experiences: ["Paragliding over snowy pines", "White-water rafting on Beas River", "Cozying up by a mountain bonfire", "Shopping at Mall Road"],
    rating: 4.8,
    reviewsCount: 1420
  },
  {
    id: "goa",
    name: "Goa",
    tagline: "Sun-Kissed Beaches & Golden Portuguese Heritage",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    coverImage: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
    description: "Blessed with wide sandy beaches, swaying palms, and a tranquil seaside lifestyle, Goa is India's ultimate beach retreat. Blending a unique 450-year Portuguese heritage with coastal warmth, it is famous for its vibrant nightlife, spicy seafood, and rich historical churches.",
    bestTime: "November to February",
    duration: "4 Nights / 5 Days",
    costEstimate: "₹14,000 - ₹19,500 per person",
    attractions: ["Baga Beach", "Basilica of Bom Jesus", "Dudhsagar Falls", "Anjuna Flea Market", "Fort Aguada"],
    experiences: ["Sunset yacht cruise with music", "Scuba diving & water sports", "Exploring old Latin quarters of Panaji", "Spicy coastal culinary tour"],
    rating: 4.9,
    reviewsCount: 2310
  },
  {
    id: "darjeeling",
    name: "Darjeeling",
    tagline: "Queen of the Hills & Celestial Tea Gardens",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80",
    coverImage: "https://images.unsplash.com/photo-1618083707368-b3823daa2726?auto=format&fit=crop&w=1200&q=80",
    description: "Famed globally for its aromatic black tea and the majestic backdrop of Mt. Kanchenjunga, Darjeeling is a captivating Himalayan town. The iconic UNESCO-listed Toy Train winds its way through lush green slopes and misty cedar woods, invoking a timeless colonial charm.",
    bestTime: "March to May & October to December",
    duration: "4 Nights / 5 Days",
    costEstimate: "₹16,500 - ₹21,000 per person",
    attractions: ["Tiger Hill Sunrise", "Batasia Loop", "Himalayan Mountaineering Institute", "Ghoom Monastery", "Happy Valley Tea Estate"],
    experiences: ["Riding the vintage steam Toy Train", "Watching sunrise light up Mt. Kanchenjunga", "Premium tea tasting sessions", "Cable car ride over lush plantations"],
    rating: 4.7,
    reviewsCount: 980
  },
  {
    id: "ooty",
    name: "Ooty",
    tagline: "Blue Mountains, Misty Pines & Emerald Lake Valleys",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=600&q=80",
    coverImage: "https://images.unsplash.com/photo-1541256996761-85df2efaa164?auto=format&fit=crop&w=1200&q=80",
    description: "Affectionately called the 'Queen of Hill Stations', Ooty (Udhagamandalam) is nestled in the Nilgiri Hills of Tamil Nadu. Characterized by expansive tea estates, towering eucalyptus groves, and calm lakes, it is a picturesque haven of crisp air and serene Southern charm.",
    bestTime: "March to June & September to November",
    duration: "3 Nights / 4 Days",
    costEstimate: "₹12,500 - ₹17,000 per person",
    attractions: ["Ooty Botanical Gardens", "Doddabetta Peak", "Ooty Lake", "Pykara Waterfalls", "Tea Museum"],
    experiences: ["UNESCO Nilgiri Mountain Toy Train ride", "Boating in the misty Pykara Lake", "Strolling through green cardamom & tea plantations", "Homemade chocolate tasting tour"],
    rating: 4.6,
    reviewsCount: 1120
  },
  {
    id: "jaipur",
    name: "Jaipur",
    tagline: "The Pink City & Grand Royal Palaces",
    image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=600&q=80",
    coverImage: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
    description: "Capital of the royal state of Rajasthan, Jaipur is known as the 'Pink City' due to the distinctive color of its historic buildings. A treasure trove of magnificent hill forts, royal palaces, ornate architecture, and colorful bazaars, it reflects the ultimate Indian heritage.",
    bestTime: "October to March",
    duration: "4 Nights / 5 Days",
    costEstimate: "₹15,000 - ₹20,500 per person",
    attractions: ["Hawa Mahal", "Amer Fort", "City Palace", "Jantar Mantar", "Chokhi Dhani"],
    experiences: ["Sound & light show at Amer Fort", "Royal Rajasthani thali dining experience", "Hot air balloon ride over fort ramparts", "Bazaar shopping for hand-block print textiles"],
    rating: 4.9,
    reviewsCount: 1840
  },
  {
    id: "uttrakhand",
    name: "Uttrakhand",
    tagline: "Land of Gods, Sacred Rivers & Mighty Peaks",
    image: "https://images.unsplash.com/photo-1618083707368-b3823daa2726?auto=format&fit=crop&w=600&q=80",
    coverImage: "https://images.unsplash.com/photo-1618083707368-b3823daa2726?auto=format&fit=crop&w=1200&q=80",
    description: "Often referred to as 'Devbhumi' (Land of the Gods), Uttarakhand is characterized by majestic Himalayan peaks, pristine rivers like the Ganges, and highly sacred temples. It is a stunning blend of spiritual pilgrimage and pristine, wild nature.",
    bestTime: "March to June & September to November",
    duration: "5 Nights / 6 Days",
    costEstimate: "₹17,500 - ₹23,000 per person",
    attractions: ["Rishikesh Laxman Jhula", "Nainital Lake", "Jim Corbett National Park", "Valley of Flowers", "Haridwar Ganga Aarti"],
    experiences: ["Witnessing the spiritual Ganga Aarti", "Jungle safari to spot Bengal Tigers", "White-water rafting in Rishikesh", "Peaceful lakeside cabin stays"],
    rating: 4.8,
    reviewsCount: 1560
  }
];

export const TOUR_PACKAGES = [
  {
    title: "Celestial Himalayan Getaway (Manali)",
    destination: "Manali",
    duration: "5 Nights / 6 Days",
    price: "₹19,999",
    oldPrice: "₹24,999",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    reviews: 128,
    tags: ["Snow Mountain", "Adventure", "Couples Favorite"],
    highlights: ["Rohtang Pass Snow Tour", "Private Riverside Bonfire", "4-Star Mountain Resort stay", "Paragliding Voucher included"]
  },
  {
    title: "Coastal Luxury & Yacht Cruise (Goa)",
    destination: "Goa",
    duration: "4 Nights / 5 Days",
    price: "₹15,499",
    oldPrice: "₹19,999",
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    reviews: 244,
    tags: ["Beachside", "Luxury Yacht", "Heritage Walk"],
    highlights: ["Exclusive Private Yacht Sunset Cruise", "Beachfront 5-Star Boutique Resort", "Fontainhas Latin Quarter Guided Walk", "Scuba Diving training session"]
  },
  {
    title: "Vintage Tea Gardens & Kanchenjunga Sunrise",
    destination: "Darjeeling",
    duration: "4 Nights / 5 Days",
    price: "₹17,800",
    oldPrice: "₹22,000",
    image: "https://images.unsplash.com/photo-1618083707368-b3823daa2726?auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    reviews: 95,
    tags: ["Hill Station", "UNESCO Toy Train", "Teatasting"],
    highlights: ["Private Sunrise Chauffeur to Tiger Hill", "Colonial Heritage Hotel Accommodation", "UNESCO Toy Train Joyride", "Aromatic Tea estate harvest walk"]
  }
];
