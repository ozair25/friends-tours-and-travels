export interface Testimonial {
  id: string;
  name: string;
  city: string;
  rating: number;
  review: string;
  image?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Aman Sharma",
    city: "New Delhi",
    rating: 5,
    review: "Our custom Manali tour package was curated flawlessly. From the luxury alpine chalet stay to the seamless Rohtang Pass permit and local driver guidance, Friends Tours & Travels went above and beyond. Truly a premium experience!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
  },
  {
    id: "t-2",
    name: "Priya Patel",
    city: "Mumbai",
    rating: 5,
    review: "I had the most unforgettable beach vacation in Goa. The private sunset yacht cruise was the highlight of our trip—super luxurious and completely hassle-free. The concierge checked on us every day to ensure everything was perfect.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
  },
  {
    id: "t-3",
    name: "Rajesh Iyer",
    city: "Bangalore",
    rating: 5,
    review: "The Darjeeling tea estate heritage package exceeded all our expectations. Waking up to Mt. Kanchenjunga sunrise from Tiger Hill and riding the UNESCO Toy Train brought back nostalgic colonial charm. Everything was planned with meticulous care.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
  },
  {
    id: "t-4",
    name: "Anjali Gupta",
    city: "Kolkata",
    rating: 5,
    review: "Exploring the royal Amer Fort and private quarters of the Jaipur Palace felt like a royal dream. The block-print textile workshop and authentic Rajasthani dining curated by Friends Tours & Travels were beautifully memorable.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80"
  },
  {
    id: "t-5",
    name: "Dr. Vikram Singh",
    city: "Hyderabad",
    rating: 5,
    review: "We booked the Uttarakhand spiritual and wildlife expedition. The VIP seating at Haridwar Aarti and private Jim Corbett jeep safari were incredibly organized. Highly recommend their service to anyone looking for premium travel plans.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80"
  }
];
