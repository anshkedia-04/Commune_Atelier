export type Category = 
  | 'Living Room'
  | 'Sofas & Lounge'
  | 'Dining'
  | 'Bedroom'
  | 'Office Furniture'
  | 'Storage & Cabinets'
  | 'Decor & Accessories';

export type InteriorStyle = 
  | 'Modern Luxury'
  | 'Minimalist'
  | 'Scandinavian'
  | 'Industrial Chic'
  | 'Classic Contemporary';

export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: Category;
  price: number;
  isPriceOnRequest?: boolean;
  shortDescription: string;
  longDescription: string;
  images: string[];
  colors: ProductColor[];
  material: string;
  dimensions: string;
  styleTags: string[];
  featured: boolean;
  specifications: Record<string, string>;
  careInstructions: string[];
  relatedProductIds: string[];
  inStock?: boolean;
  leadTime?: string;
}

export interface CollectionInfo {
  id: string;
  name: Category;
  slug: string;
  tagline: string;
  description: string;
  image: string;
  itemCount: number;
}

export interface InterestInquiry {
  productId: string;
  productName: string;
  productImage: string;
  productPrice: number;
  customerName: string;
  phone: string;
  email?: string;
  finishPreference?: string;
  message?: string;
}
