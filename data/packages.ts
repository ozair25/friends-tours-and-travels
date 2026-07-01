export interface TourPackage {
  id: string;
  name: string;
  destination: string;
  coverImage: string;
  duration: string;
  startingPrice: string;
  shortDescription: string;
  inclusions: string[];
  exclusions: string[];
  highlights: string[];
  galleryImages: string[];
  isFeatured?: boolean;
}

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: "manali-celestial",
    name: "Celestial Himalayan Getaway",
    destination: "Manali",
    coverImage: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80",
    duration: "5 Nights / 6 Days",
    startingPrice: "₹19,999",
    shortDescription: "Experience the magic of snow-dusted valleys, towering pine forests, and high-altitude luxury in the heart of Himachal Pradesh. Perfectly curated for couples and adventure seekers alike.",
    highlights: [
      "Rohtang Pass Private Snow Excursion",
      "Sunset Hot Air Balloon Experience over Solang Valley",
      "Private Bonfire & Riverside Dining under the Stars",
      "Stay in Premium 4-Star Luxury Alpine Chalets"
    ],
    inclusions: [
      "Luxury accommodation in 4-star mountain view rooms",
      "Daily buffet breakfast & chef-crafted gourmet dinners",
      "Private AC Sedan with local expert chauffeur for all sightseeing",
      "All necessary Rohtang Pass permit fees and green tax",
      "Complimentary adventure voucher (Paragliding/River Rafting)",
      "Warm welcome drinks upon arrival"
    ],
    exclusions: [
      "Airfare or train ticket to/from Chandigarh/Delhi",
      "Lunch meals & personal laundry or beverage expenses",
      "Any entry tickets to monuments not mentioned in highlights",
      "Travel insurance & emergency evacuation charges"
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80"
    ],
    isFeatured: true
  },
  {
    id: "goa-coastal-luxury",
    name: "Coastal Luxury & Private Yacht Cruise",
    destination: "Goa",
    coverImage: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80",
    duration: "4 Nights / 5 Days",
    startingPrice: "₹15,499",
    shortDescription: "Sun-kissed sandy shores, swaying palm groves, and old-world Portuguese charm meet high-end beachfront leisure. Cruise the azure sea on an exclusive private yacht at sunset.",
    highlights: [
      "2-Hour Private Sunset Yacht Cruise with Music & Fine Wine",
      "Beachfront 5-Star Boutique Resort with Private Beach Access",
      "Guided Heritage Walk through Fontainhas (Latin Quarters)",
      "Scuba Diving introductory pool training and ocean session"
    ],
    inclusions: [
      "Luxury resort stay in beach-view suite",
      "Full daily breakfast spread & premium evening appetizers",
      "Airport pickup and drop-off in premium SUV",
      "Private sunset cruise with appetizers and drinks",
      "All sightseeing transfers in private air-conditioned vehicle",
      "Complimentary water sports voucher"
    ],
    exclusions: [
      "Meals not specified in inclusions (Lunches & Dinners)",
      "Water sports activities outside of the complimentary voucher",
      "Personal expenses, tips, and portage charges"
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80"
    ],
    isFeatured: true
  },
  {
    id: "darjeeling-vintage",
    name: "Vintage Tea Gardens & Kanchenjunga Sunrise",
    destination: "Darjeeling",
    coverImage: "https://images.unsplash.com/photo-1618083707368-b3823daa2726?auto=format&fit=crop&w=1200&q=80",
    duration: "4 Nights / 5 Days",
    startingPrice: "₹17,800",
    shortDescription: "Immerse yourself in the colonial heritage of the Queen of Hill Stations. Sip premium aromatic tea amidst rolling emerald gardens and watch the golden sun rise over majestic Mt. Kanchenjunga.",
    highlights: [
      "Chauffeur-Driven Sunrise Excursion to Tiger Hill",
      "Joyride on the historic UNESCO World Heritage Toy Train",
      "Private Tea Sommelier session and estate harvest walk",
      "Stay in an elegant British colonial-era Heritage Hotel"
    ],
    inclusions: [
      "Deluxe heritage accommodation with scenic Himalayan views",
      "Daily breakfast and customized dinner menus",
      "Private local transfers in comfortable mountain SUVs",
      "UNESCO Toy Train joyride tickets",
      "Premium tea garden tasting and entry tickets",
      "All state entry taxes, toll fees, and driver allowances"
    ],
    exclusions: [
      "Airfare or Train tickets to Bagdogra / NJP",
      "Personal shopping and lunch meals",
      "Any additional activities or monument entry fees"
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1618083707368-b3823daa2726?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
    ],
    isFeatured: true
  },
  {
    id: "jaipur-royal-heritage",
    name: "Royal Heritage of the Pink City",
    destination: "Jaipur",
    coverImage: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
    duration: "4 Nights / 5 Days",
    startingPrice: "₹16,500",
    shortDescription: "Step back into the golden age of royalty in Rajasthan. Tour majestic red sandstone forts, explore shimmering palaces, shop for artisanal crafts, and dine like royalty.",
    highlights: [
      "Royal Elephant Safari & guided tour at Amer Fort",
      "Exclusive access to the private residential quarters of City Palace",
      "Authentic multi-course Rajasthani Thali culinary evening",
      "Sunset hot air balloon flight overlooking the ancient fort ramparts"
    ],
    inclusions: [
      "Palace hotel heritage stay with royal hospitality",
      "Daily gourmet breakfasts and fine dining dinners",
      "Exclusive private AC Sedan with professional guide-driver",
      "All monument entry tickets and elephant safari tickets",
      "Block-print textile making workshop with master artisans"
    ],
    exclusions: [
      "Flight/rail tickets to Jaipur",
      "Camera fees inside monuments",
      "Personal expenses such as laundry, phone calls, and tips"
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=600&q=80"
    ],
    isFeatured: false
  },
  {
    id: "ooty-emerald-retreat",
    name: "Emerald Hills & Nilgiri Toy Train Voyage",
    destination: "Ooty",
    coverImage: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80",
    duration: "3 Nights / 4 Days",
    startingPrice: "₹12,999",
    shortDescription: "Relax in the serene southern hills of Ooty. Stroll through mist-covered cardamom and tea estates, boat on pristine emerald lakes, and enjoy homemade chocolate tasting tours.",
    highlights: [
      "UNESCO-listed Nilgiri Mountain Toy Train journey through pine valleys",
      "Private sunset boating tour on Pykara Lake with gourmet picnic basket",
      "Specialty chocolate-making class at the Tea & Chocolate Museum",
      "Trek to Doddabetta Peak, the highest summit in South India"
    ],
    inclusions: [
      "Boutique tea-estate resort stay with private deck",
      "Daily breakfast and organic farm-to-table dinners",
      "All transfers in private air-conditioned SUV with guide",
      "First-class Nilgiri Toy Train tickets",
      "Chocolate museum entry & chocolate-making workshop"
    ],
    exclusions: [
      "Airfare to Coimbatore or train to Mettupalayam",
      "Lunch meals & additional boating fees",
      "Tips, laundry, and items of a personal nature"
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541256996761-85df2efaa164?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=600&q=80"
    ],
    isFeatured: false
  },
  {
    id: "uttrakhand-sacred-peaks",
    name: "Sacred Peaks & Wilderness Expedition",
    destination: "Uttarakhand",
    coverImage: "https://images.unsplash.com/photo-1618083707368-b3823daa2726?auto=format&fit=crop&w=1200&q=80",
    duration: "5 Nights / 6 Days",
    startingPrice: "₹18,500",
    shortDescription: "A magnificent blend of spirituality and nature. Spot tigers in Jim Corbett, experience a sacred Ganga Aarti in Rishikesh, and relax in lakeside Nainital cottages.",
    highlights: [
      "Exclusive VIP Seating for the evening Ganga Aarti in Haridwar",
      "Private Open-Top Jeep Wildlife Safari inside Jim Corbett National Park",
      "Luxury Yacht Cruise on the emerald waters of Naini Lake",
      "Adrenaline-pumping white water rafting in Rishikesh with expert guides"
    ],
    inclusions: [
      "Stay in scenic lakeside boutique cottages & jungle lodges",
      "Daily breakfast and dinner (Traditional Garhwali meals included)",
      "All intercity sightseeing in private air-conditioned high-ground Sedan",
      "Jim Corbett entry permits & open-top safari booking",
      "Professional certified river rafting guide and top-tier gear"
    ],
    exclusions: [
      "Airfare to Dehradun or train tickets to Kathgodam",
      "Any adventure activities beyond Rishikesh rafting",
      "Lunch meals, personal expenses, and service tips"
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1618083707368-b3823daa2726?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=600&q=80"
    ],
    isFeatured: false
  }
];
