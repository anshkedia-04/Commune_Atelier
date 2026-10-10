import type { Product } from '../types/product';
import { products } from '../data/products';

export interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  recommendedProducts?: Product[];
  actionSuggestion?: {
    label: string;
    route?: string;
  };
  timestamp: string;
}

export const getAIResponse = (userQuery: string): { text: string; recommendedProducts?: Product[]; actionSuggestion?: { label: string; route?: string } } => {
  const query = userQuery.toLowerCase().trim();

  // 1. Budget under 50,000 / under 100,000 / price search
  if (query.includes('under') && (query.includes('50000') || query.includes('50,000') || query.includes('50k') || query.includes('50 thousand'))) {
    const matches = products.filter(p => !p.isPriceOnRequest && p.price <= 50000).slice(0, 3);
    return {
      text: "Here are exceptional atelier pieces within ₹50,000, combining heirloom materials like solid plantation teak, hand-spun brass, and cast mineral composite:",
      recommendedProducts: matches,
      actionSuggestion: { label: "Explore All Designs Under ₹50K", route: "/collections" }
    };
  }

  if (query.includes('under') && (query.includes('100000') || query.includes('1,00,000') || query.includes('1 lakh') || query.includes('100k'))) {
    const matches = products.filter(p => !p.isPriceOnRequest && p.price <= 100000).slice(0, 3);
    return {
      text: "Within ₹1,00,000, we recommend these timeless pieces, from the Kanso Sculptural Armchair to our Carrara marble coffee tables:",
      recommendedProducts: matches,
      actionSuggestion: { label: "Browse Accessible Luxury", route: "/collections" }
    };
  }

  // 2. Customization Studio inquiries
  if (query.includes('custom') || query.includes('personalize') || query.includes('finish') || query.includes('color option') || query.includes('make it yours')) {
    return {
      text: "Our upcoming Customization Studio — 'Your Vision. Your Furniture.' — is launching soon! You will be able to handpick European bouclés, saddle leathers, smoked timber species, and custom dimensions. You can explore the interactive 3D preview in our Studio section right now.",
      actionSuggestion: { label: "Experience Customization Preview", route: "/customization" }
    };
  }

  // 3. Living Room
  if (query.includes('living room') || query.includes('lounge') || query.includes('drawing room')) {
    const matches = products.filter(p => p.category === 'Living Room' || p.category === 'Sofas & Lounge').slice(0, 3);
    return {
      text: "For a refined living salon, we focus on conversational geometry and tactile comfort. Here are our premier centerpieces:",
      recommendedProducts: matches,
      actionSuggestion: { label: "View Living Room Atelier", route: "/collections" }
    };
  }

  // 4. Dining / Dinner / Table
  if (query.includes('dining') || query.includes('dinner') || query.includes('dining table') || query.includes('chair')) {
    const matches = products.filter(p => p.category === 'Dining').slice(0, 3);
    return {
      text: "Our dining collection bridges monumental stone carving with ergonomic seating comfort. Here are our top dining recommendations:",
      recommendedProducts: matches,
      actionSuggestion: { label: "Explore Dining Suite", route: "/collections" }
    };
  }

  // 5. Bedroom / Bed / Nightstand
  if (query.includes('bedroom') || query.includes('bed') || query.includes('nightstand') || query.includes('sleep')) {
    const matches = products.filter(p => p.category === 'Bedroom').slice(0, 3);
    return {
      text: "Creating an acoustic, serene sanctuary begins with grounded low-profile silhouettes and natural linen textures:",
      recommendedProducts: matches,
      actionSuggestion: { label: "View Bedroom Sanctuaries", route: "/collections" }
    };
  }

  // 6. Office / Desk / Workspace / Study
  if (query.includes('office') || query.includes('desk') || query.includes('work') || query.includes('study')) {
    const matches = products.filter(p => p.category === 'Office Furniture').slice(0, 3);
    return {
      text: "For the executive home study, we craft architectural cantilevered timber desks and synchronized Italian aniline leather seating:",
      recommendedProducts: matches,
      actionSuggestion: { label: "View Executive Office Pieces", route: "/collections" }
    };
  }

  // 7. Small spaces / apartment / compact
  if (query.includes('small space') || query.includes('apartment') || query.includes('compact') || query.includes('studio apartment')) {
    const matches = products.filter(p => p.id === 'prod-02' || p.id === 'prod-24' || p.id === 'prod-14');
    return {
      text: "For intimate spaces and modern urban apartments, prioritize pieces with elevated leg profiles, dual functionality, and open negative space. The Kanso Armchair and Solarium Accent Table offer sculptural beauty without visual bulk:",
      recommendedProducts: matches,
      actionSuggestion: { label: "Filter Small-Footprint Silhouettes", route: "/collections" }
    };
  }

  // 8. Wood / Walnut / Teak / Timber
  if (query.includes('wood') || query.includes('walnut') || query.includes('teak') || query.includes('oak')) {
    const matches = products.filter(p => p.material.toLowerCase().includes('walnut') || p.material.toLowerCase().includes('oak') || p.material.toLowerCase().includes('teak')).slice(0, 3);
    return {
      text: "We source only FSC®-certified American Black Walnut, reclaimed heritage elm, and plantation teak, sealed with zero-VOC hardwax oils to celebrate raw organic grain:",
      recommendedProducts: matches,
      actionSuggestion: { label: "Browse Solid Timber Archive", route: "/collections" }
    };
  }

  // 9. Marble / Stone / Travertine
  if (query.includes('marble') || query.includes('stone') || query.includes('travertine')) {
    const matches = products.filter(p => p.material.toLowerCase().includes('marble') || p.material.toLowerCase().includes('travertine')).slice(0, 3);
    return {
      text: "Our stone pieces are hand-carved in Tivoli and Carrara traditions, featuring Navona travertine and Calacatta Viola slabs sealed for longevity:",
      recommendedProducts: matches,
      actionSuggestion: { label: "Explore Stone Creations", route: "/collections" }
    };
  }

  // 10. Compare / Comparison
  if (query.includes('compare') || query.includes('difference') || query.includes('versus') || query.includes('vs')) {
    const sofa1 = products.find(p => p.id === 'prod-01')!;
    const sofa2 = products.find(p => p.id === 'prod-18')!;
    return {
      text: "Comparing our two signature sofas: The Vesper Sectional is low-slung, rectilinear, and modular for expansive social living; while the Roma Crescent Sofa offers an organic, curved silhouette designed for intimate conversations and sculptural presence.",
      recommendedProducts: [sofa1, sofa2],
      actionSuggestion: { label: "Compare Specs on Collections", route: "/collections" }
    };
  }

  // 11. Dimensions / Measurements / Shipping
  if (query.includes('dimension') || query.includes('size') || query.includes('measurement') || query.includes('delivery') || query.includes('shipping')) {
    return {
      text: "All our pieces feature architectural dimensions calibrated for modern residences and private villas. We offer white-glove delivery, room placement, and uncrating across India. You can view precise blueprints and centimetre dimensions on each product detail page.",
      actionSuggestion: { label: "Explore Catalog Specifications", route: "/collections" }
    };
  }

  // Default fallback matching any keyword or general greeting
  const generalMatches = products.filter(p => p.featured).slice(0, 3);
  return {
    text: `I'd love to guide your interior curation. Whether you are redesigning an open-concept living area, selecting tactile bouclés, or seeking custom dimensions, here are 3 signature pieces from our current atelier:`,
    recommendedProducts: generalMatches,
    actionSuggestion: { label: "Explore Complete Catalog", route: "/collections" }
  };
};
