export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  collection: string;
  rating: number;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'The Vesper Sectional anchored our duplex living room with quiet majesty. The bouclé textile has a substantial, tactile weight that synthetic fabrics can never replicate.',
    author: 'Devika Singhania',
    role: 'Principal Architect, Studio Sthapati',
    location: 'Mumbai & Alibaug',
    collection: 'Living Room Atelier',
    rating: 5
  },
  {
    id: 'test-2',
    quote: 'Finding monolithic travertine crafted with such reverence for natural stone veining is rare. The Solis dining table transforms dinner into an architectural ceremony.',
    author: 'Karan Mehra',
    role: 'Collector & Creative Director',
    location: 'New Delhi, Golf Links',
    collection: 'Dining Collection',
    rating: 5
  },
  {
    id: 'test-3',
    quote: 'The Valentin credenza’s tambour woodwork moves like silk. It proves that utility and museum-grade sculptural joinery belong in the same sentence.',
    author: 'Aanya Vardhan',
    role: 'Interior Stylist & Curator',
    location: 'Bangalore, Indiranagar',
    collection: 'Storage & Cabinets',
    rating: 5
  }
];
