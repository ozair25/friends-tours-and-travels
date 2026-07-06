# Friends Tours & Travels

A luxury, travel-focused, editorial web application built for **Friends Tours & Travels**, Indore's premier travel agency. Crafted with a premium aesthetic, this application provides an immersive experience for travellers to explore curated destinations, view detailed itineraries, and seamlessly customize their dream holidays.

---

## 🌟 Key Features

- **Luxury Brand Aesthetics**: Custom theme featuring a curated color palette of Royal Navy (`#0B1B3A`) and Brand Gold (`#C9A227`) combined with editorial layout spacing.
- **Curated International & Domestic Packages**: Fully detailed packages showcasing destinations like Malaysia, Bhutan, Manali, Rajasthan, Goa, and Kerala, complete with highlights, inclusions, and day-by-day itineraries.
- **Popular Destinations Hub**: Interactive, sleek destination cards with elegant layouts and zoom effects to explore top travel spots.
- **Customize My Trip Integration**: High-converting, interactive form enabling visitors to request personalized, bespoke travel itineraries, directly integrated with WhatsApp and Email prefill concierge systems.
- **Immersive Gallery**: A curated visual catalog showcasing handpicked travel highlights with high-performance lazy-loaded imagery.
- **Mobile-First Precision**: Thoroughly optimized responsive layouts ensuring flawless performance, zero layout shift, and tactile touch targets across mobile, tablet, and desktop viewports.
- **SEO & Metadata Optimized**: Fully production-ready headers, semantic HTML structures, and page meta configurations to achieve top performance on search engine indexes.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router & React 19 Server Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strictly typed schemas and layouts)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (Custom design utility tokens)
- **Animations**: [Framer Motion](https://motion.dev/) (Subtle premium transitions and lightweight keyframes)
- **Icons**: [Lucide React](https://lucide.dev/) (Clean minimalist iconography)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js (version 18.17.0 or higher)** installed on your machine.

### Installation

1. Clone the repository to your local workspace:
   ```bash
   git clone <repository-url>
   cd friends-tours-travels
   ```

2. Install the project dependencies:
   ```bash
   npm install
   ```

### Environment Configuration

1. Create a `.env` file in the root directory of the project:
   ```bash
   cp .env.example .env
   ```

2. Configure your environment variables within `.env`:
   - `APP_URL`: The production or local base URL (e.g., `http://localhost:3000`).

### Development Server

Launch the local development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to experience the live application.

### Production Build

1. Build the production application bundle:
   ```bash
   npm run build
   ```

2. Start the optimized node production server:
   ```bash
   npm run start
   ```

---

## 📁 Directory Structure

```
├── app/                  # Next.js App Router (pages, layouts, routes)
│   ├── about/            # Editorial about page
│   ├── contact/          # Concierge contact and feedback portal
│   ├── gallery/          # Visual travel catalog page
│   ├── packages/         # Curated package details routing
│   └── page.tsx          # Homepage container
├── components/           # Reusable UI widgets (Navbar, Footer, Ornaments)
├── data/                 # Local tour package data schemas
├── lib/                  # Utilities, typography configs, and map lists
├── public/               # Optimized local assets, logos, and banners
├── package.json          # Node scripts and project dependencies
└── tsconfig.json         # TypeScript compiler configurations
```

---

## 🎨 Design System & Branding Guidelines

To maintain the pristine luxury aesthetic of **Friends Tours & Travels**, ensure all visual additions strictly conform to these tokens:

- **Primary Colors**:
  - Royal Navy: `#0B1B3A`
  - Brand Gold: `#C9A227`
  - Accent Gold (Darker): `#8C6A3D`
  - Cream Backgrounds: `#F7F1E1`
- **Typography Pairings**:
  - Headings: `Playfair Display` (Classic, timeless editorial serif)
  - Navigation/Body: `Inter` (Clean, crisp modern geometric sans-serif)
  - Code/Telemetry accents: `JetBrains Mono`

---

## 📄 License

This project is proprietary and custom-built for Friends Tours & Travels. All rights reserved.
