# 🏛️ COMMUNE ATELIER — Luxury Furniture Digital Showroom

[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![CSS Modules](https://img.shields.io/badge/CSS-Vanilla_%26_Modules-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

> A modern, editorial furniture e-commerce showcase website, taking **strict UI/UX inspiration from [one8commune.co.in](https://one8commune.co.in/)**. Designed as a digital showroom for architectural, bespoke living pieces.

---

## ✨ Design Philosophy & Visual Language

Taking cues from the bold, high-fashion presentation of One8 Commune:
- **Atmospheric Palette:** Deep obsidian (`#0e0d0c`), warm espresso (`#1c1b18`), tactile parchment ivory contrast spreads (`#f6f3ec`), champagne gold highlights (`#c9a86a`), and smoked walnut tones.
- **Editorial Typography:** Dramatic display headlines in **Cormorant Garamond** (with delicate italic accents), clean modern typography in **Plus Jakarta Sans**, and tracked uppercase architectural badges in **Cinzel**.
- **Magazine-Style Layouts:** Asymmetrical masonry grids, full-width photo spreads, split-screen storytelling, and subtle ticker marquees.
- **Zero Tailwind CSS:** Engineered entirely with pure Vanilla CSS and CSS Modules utilizing centralized design tokens (`variables.css` & `global.css`).

---

## 🚀 Key Features

### 1. 🛋️ Editorial Living Showroom (Home)
- **Cinematic Hero:** High-impact visual stage featuring *"Furniture That Defines Your Space"* with dual CTAs and ambient badges.
- **Editorial Ticker Marquee:** Continuous brass ticker highlighting signature atelier materials and techniques.
- **7 Curated Collections:** Editorial tiles for *Living Room, Sofas & Lounge, Dining, Bedroom, Office Furniture, Storage & Cabinets, and Decor & Accessories*.
- **Featured Works Grid:** Highlighted silhouettes with pricing in INR, swatches, and direct inquiry actions.
- **Alabaster Ivory Brand Story:** High-contrast editorial split section introducing the brand's architectural philosophy.
- **Noble Materials & Craftsmanship:** Deep-dive cards showcasing FSC® American Black Walnut, Tivoli Travertine, Belgian Linen, and ergonomic geometry.
- **Patron Sentiments:** Realistic sample testimonials from architects and curators.

### 2. 🤖 AI-Powered Frontend Features
- **Floating AI Furniture Stylist:** Site-wide floating assistant with ambient gold pulsing trigger. Features clickable prompt chips (*"Help me furnish my living room"*, *"Show me modern wooden furniture"*, *"Find a sofa for a small apartment"*, *"Help me choose furniture under ₹50,000"*). Evaluates queries against the real product catalog and embeds interactive product cards with direct detail links and inquiry buttons.
- **Interactive AI Room Styling Engine:** Discovery questionnaire allowing users to pick *Room Type*, *Interior Movement* (Modern Luxury, Japandi Minimalist, etc.), *Tonal Palette*, and *Budget Scope* to generate a tailored room concept and matched product recommendations.

### 3. 🎨 Customization Studio — Coming Soon (`/customization`)
- **Teaser & Blueprint Visualizer:** Dedicated showcase for the upcoming bespoke configurator.
- **Interactive Controls:** Toggle between furniture pieces (*The Vesper Sectional, Kanso Armchair, Valentin Credenza*), live upholstery swatches, hardwood species, metal hardware, and an interactive centimetre dimension slider.
- **VIP Early Access Modal:** Validated notification modal with demo confirmation feedback and toast notifications.

### 4. 🗂️ Comprehensive Product Catalog (`/collections`)
- Complete archive of **24 realistic luxury furniture silhouettes**.
- Category filtering with deep URL search parameter support (`?category=Dining`).
- Live search across product titles, descriptions, and materials.
- Aesthetic direction chips (*Modern Luxury, Minimalist, Scandinavian, Industrial Chic, Classic Contemporary*).
- Multi-criteria sorting (Price Low/High, Name A-Z/Z-A, Curated Featured).
- Empty state with single-click filter reset.

### 5. 🔍 Detailed Silhouette Pages (`/product/:slug`)
- Multi-angle image gallery with smooth transitions and thumbnail selection.
- Architectural specifications table (*Joinery, Cushioning, Timber, Suspension, Origin*).
- Finish & textile swatch selector with active feedback.
- Care instructions and dimension blueprints.
- Complementary silhouette pairings grid.
- One-click triggers for the **Private Interest Modal** and **AI Stylist Consultation**.

### 6. 📝 Private Interest Modal & Concierge System
- Client-side validated form collecting customer name, 10-digit phone number, optional email, preferred finish, and project notes.
- Transparent demo disclaimer informing the user that inquiries are simulated entirely on the frontend.
- Site-wide Toast notification engine.

### 7. 📍 Showrooms & Contact (`/contact`)
- Showroom coordinates for flagship galleries in **Mumbai**, **New Delhi**, and **Bangalore**.
- Validated concierge inquiry form and stylized architectural radar map placeholder.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Routing** | [React Router 7](https://reactrouter.com/) |
| **Styling** | Vanilla CSS & CSS Modules (Strictly no Tailwind CSS) |
| **Animations** | [Framer Motion 12](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Typography** | Cormorant Garamond, Plus Jakarta Sans, Cinzel |

---

## 📁 Project Architecture

```
furniture-website/
├── public/
│   └── favicon.svg                    # Gold atelier monogram
├── src/
│   ├── types/
│   │   └── product.ts                 # Product & Collection interfaces
│   ├── data/
│   │   ├── products.ts                # 24 catalog silhouettes
│   │   ├── collections.ts             # 7 curated collection environments
│   │   └── testimonials.ts            # Patrons dataset
│   ├── context/
│   │   ├── InterestModalContext.tsx   # Global inquiry modal state
│   │   ├── ChatbotContext.tsx         # Global AI stylist drawer state
│   │   └── ToastContext.tsx           # Floating toast notification system
│   ├── utils/
│   │   ├── formatPrice.ts             # INR currency formatting
│   │   └── aiResponseEngine.ts        # Chatbot intent & keyword matcher
│   ├── components/
│   │   ├── Navbar/                    # Translucent header & mobile drawer
│   │   ├── Footer/                    # Editorial footer & social links
│   │   ├── Hero/                      # Cinematic living room stage
│   │   ├── ProductCard/               # Product card with swatches & actions
│   │   ├── ProductGrid/               # Responsive animated grid & empty state
│   │   ├── ProductFilters/            # Search bar, category pills, sort
│   │   ├── ProductGallery/            # Multi-angle gallery stage
│   │   ├── InterestModal/             # Private inquiry modal
│   │   ├── AIChatbot/                 # Floating AI assistant
│   │   ├── RoomStylingAssistant/      # Interactive room styling demo
│   │   ├── CustomizationPreview/      # Interactive material visualizer
│   │   ├── Newsletter/                # Gazette subscription card
│   │   ├── Breadcrumbs/               # Trail navigation
│   │   └── ScrollToTop.tsx            # Scroll restoration on route change
│   ├── pages/
│   │   ├── Home/                      # Main exhibition page
│   │   ├── Collections/               # Full catalog explorer
│   │   ├── ProductDetails/            # Silhouette deep-dive view
│   │   ├── About/                     # Brand manifesto & pillars
│   │   ├── Customization/             # Dedicated studio teaser
│   │   ├── Contact/                   # Galleries & concierge
│   │   └── NotFound/                  # 404 error page
│   ├── styles/
│   │   ├── variables.css              # Design tokens & color system
│   │   └── global.css                 # Typography & utility classes
│   ├── App.tsx                        # Router & global provider assembly
│   ├── index.css                      # Global import entry
│   └── main.tsx                       # React root entry
├── index.html                         # Google Fonts & metadata
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 💻 Local Setup & Development

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- [npm](https://www.npmjs.com/) (v9.0.0 or higher)

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/furniture-website.git
cd furniture-website
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Navigate to `http://localhost:5173/` in your browser.

### 4. Build for production
```bash
npm run build
```

### 5. Preview production build
```bash
npm run preview
```

---

## 📌 Disclaimer
This is a **frontend-only demonstration showcase**. 
- No real payment gateway, shopping cart, or order-booking backend is implemented.
- Product inquiries, newsletter subscriptions, and customization early-access signups are processed and demonstrated locally within the client's browser.
- Design principles and UX inspiration are attributed to [one8commune.co.in](https://one8commune.co.in/).

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE).
