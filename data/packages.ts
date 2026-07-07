export interface TourPackage {
  id: string;
  name: string;
  destination: string;
  coverImage: string;
  shortDescription: string;
  highlights: string[];
  whatsIncluded: string[];
  bestFor: string;
  badge: string;
  type: 'international' | 'domestic';
  duration?: string;
  startingPrice?: string;
  inclusions?: string[];
  exclusions?: string[];
  galleryImages?: string[];
}

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: "vietnam-custom",
    name: "Vietnam",
    destination: "Vietnam",
    coverImage: "https://res.cloudinary.com/dtrvyelcg/image/upload/v1783371318/Ba_Na_Hills_py5cqt.jpg",
    shortDescription: "Experience the perfect blend of vibrant cities, breathtaking landscapes, luxury cruises, ancient towns, and unforgettable cultural experiences across Vietnam.",
    highlights: [
      "Hanoi City Tour",
      "Ninh Binh (Hoa Lu & Tam Coc)",
      "Halong Bay Overnight Luxury Cruise",
      "Da Nang",
      "Bana Hills",
      "Golden Bridge",
      "Fantasy Park",
      "Marble Mountain",
      "Coconut Village",
      "Hoi An Ancient Town",
      "Lantern Boat Experience"
    ],
    whatsIncluded: [
      "Airport Transfers",
      "Private Air-conditioned Transportation",
      "Guided Sightseeing Tours",
      "Entrance Tickets",
      "Luxury Cruise Experience",
      "Daily Breakfast",
      "Selected Lunch & Dinner",
      "English Speaking Guide"
    ],
    bestFor: "Couples • Families • Honeymoon • Friends",
    badge: "🔥 Trending",
    type: "international"
  },
  {
    id: "singapore-custom",
    name: "Singapore",
    destination: "Singapore",
    coverImage: "https://res.cloudinary.com/dtrvyelcg/image/upload/v1783371317/Best_Time_to_Visit_Singapore__Weather_Seasons_Travel_Tips_avad9v.jpg",
    shortDescription: "Discover Singapore's iconic skyline, world-famous attractions, thrilling theme parks, and unforgettable waterfront experiences.",
    highlights: [
      "Singapore City Tour",
      "Marina Bay Sands Observation Deck",
      "Gardens by the Bay",
      "Flower Dome",
      "Cloud Forest",
      "Sentosa Island",
      "Cable Car Ride",
      "Madame Tussauds",
      "Wings of Time Show",
      "Universal Studios Singapore"
    ],
    whatsIncluded: [
      "Airport Transfers",
      "Private Transfers",
      "Guided City Tour",
      "Attraction Entry Tickets",
      "Comfortable Accommodation",
      "Daily Breakfast"
    ],
    bestFor: "Families • Couples • Kids • First-Time International Travellers",
    badge: "⭐ Most Loved",
    type: "international"
  },
  {
    id: "bali-custom",
    name: "Bali",
    destination: "Bali",
    coverImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Relax in tropical paradise with beautiful beaches, luxury villas, vibrant nightlife, and unforgettable Balinese experiences.",
    highlights: [
      "Seminyak",
      "Luxury Pool Villa Stay",
      "Beach Experiences",
      "Bali Nightlife",
      "Shopping Streets",
      "Romantic Getaway",
      "Premium Resorts",
      "Cultural Experiences"
    ],
    whatsIncluded: [
      "Hotel Accommodation",
      "Airport Transfers",
      "Comfortable Transportation",
      "Daily Breakfast",
      "Customizable Sightseeing"
    ],
    bestFor: "Honeymoon • Couples • Luxury Vacation • Friends",
    badge: "❤️ Honeymoon Favourite",
    type: "international"
  },
  {
    id: "baku-custom",
    name: "Baku (Azerbaijan)",
    destination: "Baku",
    coverImage: "https://res.cloudinary.com/dtrvyelcg/image/upload/v1783341964/Baku_Azerbaycan_z1yc1f.jpg",
    shortDescription: "Explore the Land of Fire with stunning modern architecture, ancient UNESCO heritage, mountain adventures, and unique natural wonders.",
    highlights: [
      "Baku City Tour",
      "Heydar Aliyev Center",
      "Baku Boulevard",
      "Old City (UNESCO)",
      "Maiden Tower",
      "Flame Temple (Ateshgah)",
      "Yanar Dag (Fire Mountain)",
      "Shahdag Mountain Resort",
      "Cable Car Ride",
      "Gobustan Rock Art",
      "Mud Volcano Region",
      "Deniz Mall"
    ],
    whatsIncluded: [
      "Airport Transfers",
      "Hotel Accommodation",
      "Daily Breakfast",
      "Guided Sightseeing",
      "Entrance Tickets",
      "English Speaking Guide",
      "Comfortable Transportation"
    ],
    bestFor: "Families • Adventure Lovers • Culture Enthusiasts • Groups",
    badge: "✨ Hidden Gem",
    type: "international"
  },
  {
    id: "dubai-custom",
    name: "Dubai",
    destination: "Dubai",
    coverImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Indulge in futuristic architectures, record-breaking monuments, ultra-luxury shopping, and thrilling desert adventures in the jewel of the Middle East.",
    highlights: [
      "Burj Khalifa",
      "Dubai Mall",
      "Desert Safari",
      "Dhow Cruise Dinner",
      "Dubai Marina",
      "Palm Jumeirah",
      "Atlantis",
      "Museum of the Future",
      "Miracle Garden",
      "Global Village",
      "Luxury Shopping",
      "Ferrari World (Optional)"
    ],
    whatsIncluded: [
      "Premium Hotel Accommodation",
      "Dubai Airport Transfers",
      "Guided City Tour with Burj Khalifa Tickets",
      "Desert Safari with BBQ Dinner & Entertainment",
      "Marina Dhow Cruise Dinner",
      "Visa Assistance & Insurance Support"
    ],
    bestFor: "Luxury • Honeymoon • Families • Shopping",
    badge: "Luxury Escape",
    type: "international"
  },
  {
    id: "bhutan-custom",
    name: "Bhutan",
    destination: "Bhutan",
    coverImage: "https://res.cloudinary.com/dtrvyelcg/image/upload/v1783341964/Bhutan_Holidays_rayapx.jpg",
    shortDescription: "Unveil the mystical charm of the Last Shangri-La. Wander through peaceful dzongs, green valleys, and pristine prayer-flag draped mountain passes.",
    highlights: [
      "Paro",
      "Thimphu",
      "Tiger's Nest Monastery",
      "Buddha Dordenma",
      "Dochula Pass",
      "Punakha Dzong",
      "Himalayan Landscapes",
      "Traditional Villages",
      "Prayer Flags",
      "Local Culture"
    ],
    whatsIncluded: [
      "Premium Bhutanese Resorts",
      "Private Chauffeur Driven Vehicle",
      "All Inner-Line Permits & Entry Fees",
      "English-Speaking Bhutanese Guide",
      "Daily Breakfast & Dinner",
      "Tiger's Nest Hiking Assistance"
    ],
    bestFor: "Nature • Spiritual • Couples",
    badge: "Peaceful Paradise",
    type: "international"
  },
  {
    id: "nepal-custom",
    name: "Nepal",
    destination: "Nepal",
    coverImage: "https://res.cloudinary.com/dtrvyelcg/image/upload/v1783341963/This_Himalayan_trek_climbs_to_17_598_feet_where_ordinary_travelers_transform_Lonely_Planet_ranks____jduycb.jpg",
    shortDescription: "Embark on an epic journey to the rooftop of the world. Experience majestic Himalayan backdrops, vibrant spiritual temples, and lush lake valleys.",
    highlights: [
      "Kathmandu",
      "Pashupatinath Temple",
      "Boudhanath Stupa",
      "Pokhara",
      "Phewa Lake",
      "Sarangkot Sunrise",
      "Davis Falls",
      "Gupteshwor Cave",
      "Mountain Views",
      "Adventure Activities"
    ],
    whatsIncluded: [
      "Premium Accommodation",
      "AC Private Transfers",
      "Guided Sightseeing in Kathmandu & Pokhara",
      "Sarangkot Hill Sunrise Trip",
      "Boat Ride at Phewa Lake",
      "Entrance Fees & Permits"
    ],
    bestFor: "Families • Adventure • Pilgrimage",
    badge: "Himalayan Adventure",
    type: "international"
  },
  {
    id: "moscow-custom",
    name: "Moscow (Russia)",
    destination: "Moscow",
    coverImage: "https://res.cloudinary.com/dtrvyelcg/image/upload/v1783371318/The_Kremlin_in_Moscow_Russia_etzsoq.jpg",
    shortDescription: "Immerse yourself in spectacular Imperial history, iconic red brick spires, legendary underground palaces, and the unmatched grandeur of Russia's cultural heart.",
    highlights: [
      "Red Square",
      "Kremlin",
      "Saint Basil's Cathedral",
      "Moscow Metro",
      "Bolshoi Theatre",
      "Sparrow Hills",
      "Gorky Park",
      "Arbat Street",
      "River Cruise",
      "Luxury Shopping"
    ],
    whatsIncluded: [
      "Luxury Hotel Accommodation",
      "Airport Pick-up & Drop-off",
      "Kremlin & Metro Station Guided Tours",
      "Saint Basil's Entrance Tickets",
      "Premium River Cruise on Moskva River",
      "Visa Invitation Letter Support"
    ],
    bestFor: "History • Luxury • Couples",
    badge: "European Experience",
    type: "international"
  },
  {
    id: "thailand-custom",
    name: "Thailand",
    destination: "Thailand",
    coverImage: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Savor the ultimate tropical escape with stunning golden temples, exotic floating markets, sapphire waters, and the legendary warm hospitality of the Land of Smiles.",
    highlights: [
      "Bangkok",
      "Pattaya",
      "Coral Island",
      "Floating Market",
      "Alcazar Show",
      "Safari World",
      "Marine Park",
      "Temple Tours",
      "Nightlife",
      "Shopping"
    ],
    whatsIncluded: [
      "Hotel Accommodation",
      "Airport Transfers",
      "Private Sightseeing Tours",
      "Daily Breakfast",
      "Coral Island Speedboat Tour with Lunch",
      "Temple Tour Entry Tickets"
    ],
    bestFor: "Couples • Families • Friends • Shoppers",
    badge: "Beach Favourite",
    type: "international"
  },
  {
    id: "malaysia-custom",
    name: "Malaysia",
    destination: "Malaysia",
    coverImage: "https://res.cloudinary.com/dtrvyelcg/image/upload/v1783341964/16_Of_The_Very_Best_Places_To_See_In_Kuala_Lumpur_Malaysia_-_Hand_Luggage_Only_-_Travel_Food_Photography_Blog_mc1ydb.jpg",
    shortDescription: "Experience 'Truly Asia' with towering futuristic skylines, cooling mountain resorts, legendary historical caves, and incredibly diverse culinary traditions.",
    highlights: [
      "Kuala Lumpur",
      "Petronas Towers",
      "Genting Highlands",
      "Batu Caves",
      "Sunway Lagoon",
      "Cable Car",
      "Shopping",
      "City Tours"
    ],
    whatsIncluded: [
      "Hotel Accommodation",
      "Airport & City Transfers",
      "Daily Breakfast",
      "Genting Highlands Day Tour",
      "Cable Car Ride Tickets",
      "Kuala Lumpur Guided City Tour"
    ],
    bestFor: "Families • Couples • Shoppers • Kids",
    badge: "Family Favourite",
    type: "international"
  },
  {
    id: "maldives-custom",
    name: "Maldives",
    destination: "Maldives",
    coverImage: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Escape to private overwater villas, untouched white-sand rings, and impossibly clear turquoise lagoons tailored for pure romantic indulgence.",
    highlights: [
      "Water Villas",
      "White Sand Beaches",
      "Snorkelling",
      "Scuba Diving",
      "Luxury Resorts",
      "Sunset Cruise",
      "Candlelight Dinner",
      "Crystal Clear Lagoons"
    ],
    whatsIncluded: [
      "Luxury Overwater Villa Stay",
      "Speedboat or Seaplane Transfers",
      "All Inclusive Daily Meals & Drinks",
      "Sunset Cruise & Fishing Tour",
      "Snorkelling Equipment",
      "Romantic Candlelight Beach Dinner"
    ],
    bestFor: "Honeymoon • Couples • Luxury Seekers • Water Sports",
    badge: "Honeymoon Paradise",
    type: "international"
  },
  {
    id: "leh-ladakh-custom",
    name: "Leh Ladakh",
    destination: "Leh Ladakh",
    coverImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Discover the breathtaking beauty of Ladakh with high mountain passes, crystal-clear lakes, monasteries, desert valleys, and unforgettable Himalayan adventures.",
    highlights: [
      "Leh City",
      "Shanti Stupa",
      "Leh Palace",
      "Hall of Fame Museum",
      "Magnetic Hill",
      "Sangam (Indus & Zanskar Confluence)",
      "Gurudwara Pathar Sahib",
      "Khardung La Pass",
      "Nubra Valley",
      "Hunder Sand Dunes",
      "Double-Humped Camel Ride",
      "Turtuk Village",
      "Pangong Lake",
      "Chang La Pass",
      "Hemis Monastery",
      "Thiksey Monastery",
      "Shey Palace",
      "Rancho School (3 Idiots)"
    ],
    whatsIncluded: [
      "Airport Transfers",
      "Comfortable Transportation",
      "Hotel Accommodation",
      "Breakfast & Dinner",
      "Guided Sightseeing",
      "Inner Line Permits",
      "Oxygen Cylinder Support",
      "All Toll & Parking Charges"
    ],
    bestFor: "Adventure Lovers • Nature Enthusiasts • Families • Couples • Road Trip Lovers",
    badge: "🏔️ Adventure Favourite",
    type: "domestic"
  },
  {
    id: "char-dham-custom",
    name: "Char Dham Yatra",
    destination: "Char Dham",
    coverImage: "https://res.cloudinary.com/dtrvyelcg/image/upload/v1783341963/download_8_wklik3.jpg",
    shortDescription: "Embark on the sacred Char Dham pilgrimage through the Himalayas, visiting India's four most revered shrines with comfortable accommodations and guided travel.",
    highlights: [
      "Haridwar",
      "Har Ki Pauri Ganga Aarti",
      "Yamunotri Temple",
      "Gangotri Temple",
      "Kedarnath Temple",
      "Helicopter Darshan (Available)",
      "Badrinath Temple",
      "Mana Village",
      "Bhim Pul",
      "Vyas Gufa",
      "Vishwanath Temple",
      "Harsil Valley",
      "Rudraprayag",
      "Devprayag",
      "Rishikesh",
      "Himalayan Scenic Drive"
    ],
    whatsIncluded: [
      "Hotel Accommodation",
      "Comfortable Transportation",
      "Breakfast & Dinner",
      "Sightseeing",
      "Registration Assistance",
      "Helicopter Package (where applicable)",
      "Pilgrimage Assistance"
    ],
    bestFor: "Families • Senior Citizens • Pilgrims • Spiritual Travelers",
    badge: "🛕 Spiritual Journey",
    type: "domestic"
  },
  {
    id: "kashmir-custom",
    name: "Kashmir",
    destination: "Kashmir",
    coverImage: "https://res.cloudinary.com/dtrvyelcg/image/upload/v1783341963/8-Day_Jammu_and_Kashmir_Tour___Lelife_Holidays_vbyslw.jpg",
    shortDescription: "Step into Paradise on Earth. Cruise through the tranquil waters of Dal Lake, walk in lush Mughal Gardens, and stand in awe of the snow-kissed meadows of Gulmarg.",
    highlights: [
      "Srinagar",
      "Dal Lake",
      "Shikara Ride",
      "Gulmarg",
      "Gondola Ride",
      "Pahalgam",
      "Sonmarg",
      "Mughal Gardens",
      "Houseboat Stay",
      "Snow Activities"
    ],
    whatsIncluded: [
      "Luxury Houseboat Stay",
      "Premium Resort Accommodation",
      "Private Sightseeing Cab",
      "Daily Breakfast & Dinner",
      "Complimentary Shikara Ride",
      "Gulmarg & Pahalgam Excursions"
    ],
    bestFor: "Families • Honeymoon • Nature",
    badge: "Heaven on Earth",
    type: "domestic"
  },
  {
    id: "andaman-custom",
    name: "Andaman Islands",
    destination: "Andaman",
    coverImage: "https://res.cloudinary.com/dtrvyelcg/image/upload/v1783371049/Andaman_Islands_Tour_Packages_i5cusy.jpg",
    shortDescription: "Relax on award-winning white-sand shores, explore ancient historical cellular structures, and dive into vibrant reef systems on beautiful secluded islands.",
    highlights: [
      "Cellular Jail",
      "Radhanagar Beach",
      "Havelock Island",
      "Neil Island",
      "Scuba Diving",
      "Snorkelling",
      "Glass Bottom Boat",
      "Sunset Beaches",
      "Water Sports"
    ],
    whatsIncluded: [
      "Beach Resort Accommodation",
      "Inter-Island Ferry Tickets (Private Cruise)",
      "All Sightseeing & Beach Transfers",
      "Daily Breakfast",
      "Cellular Jail Light & Sound Show Tickets",
      "Complimentary Snorkelling Session"
    ],
    bestFor: "Couples • Honeymoon • Adventure",
    badge: "Island Escape",
    type: "domestic"
  },
  {
    id: "manali-custom",
    name: "Manali",
    destination: "Manali",
    coverImage: "https://res.cloudinary.com/dtrvyelcg/image/upload/v1783371050/Manali_lujsri.jpg",
    shortDescription: "Experience a classic Himalayan escape with high-octane adventure sports, snow-covered valleys, local spiritual temples, and panoramic alpine views.",
    highlights: [
      "Solang Valley",
      "Atal Tunnel",
      "Sissu",
      "Rohtang Pass",
      "Hidimba Temple",
      "Mall Road",
      "River Rafting",
      "Paragliding",
      "Snow Activities"
    ],
    whatsIncluded: [
      "Hotel Accommodation",
      "Private Sightseeing Vehicle",
      "Daily Breakfast & Dinner",
      "Atal Tunnel & Sissu Day Trip",
      "Solang Valley Adventure Sightseeing",
      "Local Guided Tour"
    ],
    bestFor: "Adventure • Couples • Families",
    badge: "Mountain Adventure",
    type: "domestic"
  },
  {
    id: "goa-custom",
    name: "Goa",
    destination: "Goa",
    coverImage: "https://res.cloudinary.com/dtrvyelcg/image/upload/v1783371050/calangute_beach_lymbzp.jpg",
    shortDescription: "Unwind along vibrant sandy beaches, legendary Portuguese historic forts, thrilling watersport bays, and the sunset cruise party of India's favorite coastline.",
    highlights: [
      "North Goa",
      "South Goa",
      "Baga Beach",
      "Calangute Beach",
      "Dudhsagar Falls",
      "Fort Aguada",
      "Cruise Party",
      "Water Sports",
      "Nightlife",
      "Beach Shacks"
    ],
    whatsIncluded: [
      "Premium Beachside Hotel",
      "Airport/Station Transfers",
      "Daily Breakfast",
      "North & South Goa Tours",
      "Mandovi River Sunset Cruise Tickets",
      "Private Sightseeing Vehicle"
    ],
    bestFor: "Friends • Honeymoon • Family",
    badge: "Beach Paradise",
    type: "domestic"
  },
  {
    id: "kerala-custom",
    name: "Kerala",
    destination: "Kerala",
    coverImage: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Float through serene coconut-lined backwaters, hike through lush rolling tea gardens in Munnar, and witness breathtaking traditional performing arts.",
    highlights: [
      "Munnar",
      "Thekkady",
      "Alleppey Houseboat",
      "Kumarakom",
      "Tea Gardens",
      "Periyar Wildlife",
      "Backwaters",
      "Spice Plantations",
      "Kathakali Show"
    ],
    whatsIncluded: [
      "Premium Resort & Houseboat Stays",
      "Private AC Vehicle for Entire Trip",
      "Daily Breakfast (All Meals in Houseboat)",
      "Munnar Tea Gardens Tour",
      "Periyar Wildlife Sanctuary Visit",
      "Spice Plantation Tour & Spice Kit"
    ],
    bestFor: "Families • Couples • Nature",
    badge: "God's Own Country",
    type: "domestic"
  },
  {
    id: "meghalaya-custom",
    name: "Meghalaya",
    destination: "Meghalaya",
    coverImage: "https://res.cloudinary.com/dtrvyelcg/image/upload/v1783371050/Meghalaya_-_Scotland_of_the_East_ttjny4.jpg",
    shortDescription: "Explore the misty Abode of the Clouds. Trek down to stunning double-decker living root bridges, sail on glass-clear rivers, and stand under towering waterfalls.",
    highlights: [
      "Shillong",
      "Cherrapunji",
      "Living Root Bridges",
      "Dawki River",
      "Mawlynnong Village",
      "Elephant Falls",
      "Laitlum Canyon",
      "Caves",
      "Waterfalls"
    ],
    whatsIncluded: [
      "Premium Boutique Hotel Stays",
      "Private Sightseeing Cab",
      "Daily Breakfast",
      "Guided Trek to Double Decker Root Bridge",
      "Dawki River Boating Experience",
      "Cherrapunji Waterfalls Sightseeing"
    ],
    bestFor: "Nature • Adventure • Photography",
    badge: "Hidden Paradise",
    type: "domestic"
  }
];
