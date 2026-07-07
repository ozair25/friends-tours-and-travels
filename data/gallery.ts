export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  destination: string;
  description: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  // Manali Gallery
  {
    id: "manali-1",
    url: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
    title: "Snowy Solang",
    destination: "Manali",
    description: "The pristine white slopes of Solang Valley under clear skies."
  },
  {
    id: "manali-2",
    url: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80",
    title: "Alpine Trails",
    destination: "Manali",
    description: "Dense deodar forest trails leading to hidden mountain falls."
  },
  {
    id: "manali-3",
    url: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=800&q=80",
    title: "Mountain Streams",
    destination: "Manali",
    description: "The roaring Beas River carving through mountain valleys."
  },

  // Goa Gallery
  {
    id: "goa-1",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    title: "Palolem Serenity",
    destination: "Goa",
    description: "The scenic crescent of Palolem beach during golden hour."
  },
  {
    id: "goa-2",
    url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80",
    title: "Latin Quarter Charm",
    destination: "Goa",
    description: "Vibrant yellow and blue Portuguese villas of Fontainhas."
  },
  {
    id: "goa-3",
    url: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80",
    title: "Azure Cruises",
    destination: "Goa",
    description: "Sailing into the sunset on a private catamaran."
  },

  // Jaipur Gallery
  {
    id: "jaipur-1",
    url: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=800&q=80",
    title: "Palace of Winds",
    destination: "Jaipur",
    description: "The iconic intricately carved facade of the historic Hawa Mahal."
  },
  {
    id: "jaipur-2",
    url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
    title: "Amer Fort Grandeur",
    destination: "Jaipur",
    description: "The majestic fort walls reflecting over the peaceful Maota Lake."
  },
  {
    id: "jaipur-3",
    url: "https://res.cloudinary.com/dtrvyelcg/image/upload/v1783372596/Royal_palace_aozd0s.jpg",
    title: "Royal Courtyards",
    destination: "Jaipur",
    description: "The symmetric pillars and golden gates inside City Palace."
  },

  // Darjeeling Gallery
  {
    id: "darjeeling-1",
    url: "https://images.unsplash.com/photo-1618083707368-b3823daa2726?auto=format&fit=crop&w=800&q=80",
    title: "Tea Harvest",
    destination: "Darjeeling",
    description: "Pluckers working on the lush green hills of the Happy Valley Estate."
  },
  {
    id: "darjeeling-2",
    url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    title: "Misty Valley Steam",
    destination: "Darjeeling",
    description: "The vintage steam engine Toy Train chugging along Batasia Loop."
  },
  {
    id: "darjeeling-3",
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    title: "Kanchenjunga Glow",
    destination: "Darjeeling",
    description: "First morning light painting the snowy peaks of Mt. Kanchenjunga."
  },

  // Ooty Gallery
  {
    id: "ooty-1",
    url: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
    title: "Nilgiri Cardamom Hills",
    destination: "Ooty",
    description: "Sprawling, tiered tea plantations blanketed in mountain mist."
  },
  {
    id: "ooty-2",
    url: "https://images.unsplash.com/photo-1541256996761-85df2efaa164?auto=format&fit=crop&w=800&q=80",
    title: "Eucalyptus Walks",
    destination: "Ooty",
    description: "Sun rays breaking through towering blue gum pine forests."
  },
  {
    id: "ooty-3",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    title: "Emerald Pykara",
    destination: "Ooty",
    description: "Lush green pine-wood shores framing the serene Pykara Lake."
  },

  // Uttarakhand Gallery
  {
    id: "uttar-1",
    url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=800&q=80",
    title: "Rishikesh Hanging Bridge",
    destination: "Uttarakhand",
    description: "The famous Lakshman Jhula suspension bridge over the emerald Ganges."
  },
  {
    id: "uttar-2",
    url: "https://res.cloudinary.com/dtrvyelcg/image/upload/v1783372596/Ganga_Arti_In_Haridwar_tknlj6.jpg",
    title: "Sacred Aarti",
    destination: "Uttarakhand",
    description: "Hundreds of glowing lamps during the Ganga Aarti ceremony at Har Ki Pauri."
  },
  {
    id: "uttar-3",
    url: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=800&q=80",
    title: "Corbett Wilderness",
    destination: "Uttarakhand",
    description: "Mist clearing over the thick sal woods and grassland of Jim Corbett."
  }
];
