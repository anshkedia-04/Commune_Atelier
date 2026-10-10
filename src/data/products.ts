import type { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 'prod-01',
    slug: 'vesper-modular-sectional',
    name: 'The Vesper Modular Sectional',
    category: 'Sofas & Lounge',
    price: 245000,
    shortDescription: 'Architectural low-slung comfort crafted with textured Italian bouclé and kiln-dried European beech frame.',
    longDescription: 'The Vesper Modular Sectional reinterprets monumental brutalist architecture through soft, welcoming contours. Designed for conversational living rooms, each module features multi-density feather-blend cushioning wrapped in heavyweight woven bouclé. The low ground clearance and generous depth create an immediate sense of grounded elegance.',
    images: [
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=85'
    ],
    colors: [
      { name: 'Oatmeal Bouclé', hex: '#EDE8E0' },
      { name: 'Charcoal Weave', hex: '#2A2928' },
      { name: 'Warm Terracotta', hex: '#A85C45' },
      { name: 'Smoked Sage', hex: '#7E8576' }
    ],
    material: 'Italian Bouclé & Solid Beech Hardwood',
    dimensions: 'W: 320cm × D: 185cm × H: 72cm (Seat Height: 41cm)',
    styleTags: ['Modern Luxury', 'Minimalist'],
    featured: true,
    specifications: {
      'Frame': 'FSC® Certified Solid European Beech & Birch Plywood',
      'Cushioning': 'Hypoallergenic goose feather & high-resilience memory foam',
      'Suspension': 'Heavy-gauge Italian sinuous steel springs',
      'Assembly': 'Modular interlocking brackets (white-glove assembled)',
      'Origin': 'Handcrafted in Atelier Verona Workshops'
    },
    careInstructions: [
      'Vacuum bi-weekly using a soft brush attachment on low suction.',
      'Blot liquid spills immediately with an undyed dry cloth; do not rub.',
      'Professional dry cleaning recommended for stubborn stains.',
      'Keep away from prolonged direct harsh sunlight to preserve yarn luster.'
    ],
    relatedProductIds: ['prod-04', 'prod-12', 'prod-20'],
    inStock: true,
    leadTime: '3-4 Weeks Bespoke Build'
  },
  {
    id: 'prod-02',
    slug: 'kanso-sculptural-armchair',
    name: 'Kanso Sculptural Armchair',
    category: 'Sofas & Lounge',
    price: 89000,
    shortDescription: 'Japanese minimal silhouette with curved American walnut armrests and warm textured upholstery.',
    longDescription: 'Rooted in the Zen aesthetic of Kanso (simplicity), this statement lounge chair balances sculptural negative space with reassuring structural weight. The sweeping armrests are milled from continuous American walnut, hand-sanded and hand-rubbed with organic botanical wax oil.',
    images: [
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1400&q=85'
    ],
    colors: [
      { name: 'Chalk White', hex: '#F5F5F0' },
      { name: 'Saddle Tan', hex: '#8B5A2B' },
      { name: 'Obsidian Black', hex: '#1C1B1A' }
    ],
    material: 'American Black Walnut & Textured Wool Blend',
    dimensions: 'W: 84cm × D: 88cm × H: 76cm',
    styleTags: ['Minimalist', 'Scandinavian'],
    featured: true,
    specifications: {
      'Timber': 'FSC®-certified kiln-dried American Black Walnut',
      'Finish': 'Zero-VOC matte botanical hardwax oil',
      'Upholstery': '80% Natural Wool, 20% Organic Flax',
      'Weight Capacity': '160 kg',
      'Origin': 'Designed in Kyoto, Crafted in Verona'
    },
    careInstructions: [
      'Wipe timber frame with a slightly damp microfiber cloth.',
      'Treat solid walnut once yearly with natural beeswax conditioner.',
      'Brush wool gently with a textile lint brush.'
    ],
    relatedProductIds: ['prod-01', 'prod-04', 'prod-18'],
    inStock: true,
    leadTime: 'Ready to Dispatch'
  },
  {
    id: 'prod-03',
    slug: 'solis-travertine-dining-table',
    name: 'The Solis Monolithic Dining Table',
    category: 'Dining',
    price: 310000,
    isPriceOnRequest: false,
    shortDescription: 'Honied Roman travertine oval table balanced on twin cylindrical fluted stone pillars.',
    longDescription: 'A monument to organic permanence. The Solis dining table features an uninterrupted 260cm bullnose slab of genuine Navona travertine, distinguished by its subtle creamy cavities and golden mineral banding. Hand-finished with an invisible matte sealant that resists everyday wine and oil spills while celebrating the raw touch of natural limestone.',
    images: [
      'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1400&q=85'
    ],
    colors: [
      { name: 'Roman Travertine', hex: '#E5D8C3' },
      { name: 'Silver Travertine', hex: '#B8B3A8' },
      { name: 'Nero Marquina', hex: '#1E1E1E' }
    ],
    material: 'Solid Honed Travertine Limestone',
    dimensions: 'L: 260cm × W: 115cm × H: 75cm (Seats 8-10)',
    styleTags: ['Modern Luxury', 'Classic Contemporary'],
    featured: true,
    specifications: {
      'Tabletop': '35mm honed and resin-filled natural travertine with softened bevel',
      'Base': 'Twin hollow-core fluted travertine monoliths with steel internal core',
      'Total Weight': '210 kg (Delivered in three secure sections)',
      'Finish': 'Breathable food-grade penetrating oleophobic sealer',
      'Origin': 'Tivoli Quarries, Hand-assembled by Commune Artisans'
    },
    careInstructions: [
      'Use coasters and placemats for acidic foods (citrus, vinegar, wine).',
      'Clean solely with pH-neutral stone cleaner or warm water.',
      'Re-apply natural stone impregnator annually.'
    ],
    relatedProductIds: ['prod-08', 'prod-16', 'prod-19'],
    inStock: false,
    leadTime: '5-6 Weeks Made-to-Order'
  },
  {
    id: 'prod-04',
    slug: 'archetype-marble-coffee-table',
    name: 'Archetype Low Marble Coffee Table',
    category: 'Living Room',
    price: 76000,
    shortDescription: 'Dual-tiered coffee table uniting honed Carrara marble with smoked dark oak framework.',
    longDescription: 'Rooted in timeless geometry, the Archetype Coffee Table features a cantilevered disc of Italian Carrara marble suspended over a low-profile smoked oak plinth. The play of light between the cool crystalline veining and warm, open-pore timber creates an arresting focal point for spacious living areas.',
    images: [
      'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1400&q=85'
    ],
    colors: [
      { name: 'Carrara & Smoked Oak', hex: '#DCDAD5' },
      { name: 'Calacatta & Walnut', hex: '#EBE5D8' },
      { name: 'Nero & Black Ash', hex: '#232221' }
    ],
    material: 'Honed Carrara Marble & Smoked Oak',
    dimensions: 'Dia: 110cm × H: 34cm',
    styleTags: ['Modern Luxury', 'Minimalist'],
    featured: true,
    specifications: {
      'Top': '20mm solid Italian Carrara marble with honed satin touch',
      'Substructure': 'Engineered birch core with quartersawn smoked oak veneer',
      'Edges': 'Subtle 4mm radius chamfered perimeter',
      'Weight': '58 kg'
    },
    careInstructions: [
      'Avoid placing hot mugs directly on stone surface without coasters.',
      'Wipe down with soft cotton cloth immediately after spills.'
    ],
    relatedProductIds: ['prod-01', 'prod-02', 'prod-12'],
    inStock: true,
    leadTime: 'Ready to Dispatch'
  },
  {
    id: 'prod-05',
    slug: 'kyoto-floating-platform-bed',
    name: 'The Kyoto Floating Platform Bed',
    category: 'Bedroom',
    price: 195000,
    shortDescription: 'Concealed base platform bed with an integrated wingback upholstered headboard and soft perimeter LED glow.',
    longDescription: 'The Kyoto platform bed seems to hover effortlessly above the floor. Designed to create a quiet sanctuary, it incorporates an extended architectural headboard upholstered in acoustically absorbent Belgian linen, framed by mitred American walnut trim. Optional floating bedside nightstands attach seamlessly to the headboard wings.',
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1540518614846-7ede433c4b49?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85'
    ],
    colors: [
      { name: 'Raw Natural Walnut', hex: '#5D4037' },
      { name: 'Bleached Scandinavian Ash', hex: '#D7CCC8' },
      { name: 'Deep Espresso Oak', hex: '#27201C' }
    ],
    material: 'American Walnut & Washed Belgian Linen',
    dimensions: 'King Size: L: 228cm × W: 204cm × Headboard H: 105cm',
    styleTags: ['Scandinavian', 'Minimalist'],
    featured: true,
    specifications: {
      'Frame': 'Reinforced steel inner bridge with solid American walnut surround',
      'Slats': 'Multi-zone flexible beech sprung slats for spinal alignment',
      'Upholstery': 'Removable, dry-cleanable linen slipcover',
      'Clearance': 'Low-slung 14cm cantilever base'
    },
    careInstructions: [
      'Vacuum headboard periodically with textile brush.',
      'Spot clean with mild pH-balanced linen detergent.'
    ],
    relatedProductIds: ['prod-09', 'prod-14', 'prod-20'],
    inStock: true,
    leadTime: '2-3 Weeks'
  },
  {
    id: 'prod-06',
    slug: 'valentin-fluted-sideboard',
    name: 'Valentin Fluted Walnut Credenza',
    category: 'Storage & Cabinets',
    price: 148000,
    shortDescription: 'Tambour fluted walnut doors, concealed soft-touch drawers, and brushed brass inset hardware.',
    longDescription: 'Master craftsmanship meets practical entertaining storage. The Valentin Credenza is defined by its rhythmic vertical fluting, carved with precision from solid American black walnut. Four seamless soft-close push doors open to reveal adjustable interior shelving and integrated cutouts for cable pass-throughs.',
    images: [
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1400&q=85'
    ],
    colors: [
      { name: 'Smoked Walnut', hex: '#4A3525' },
      { name: 'Ebonized Black Ash', hex: '#1F1E1D' },
      { name: 'Warm Caramel Oak', hex: '#9E7250' }
    ],
    material: 'Solid American Walnut & Brushed Brass',
    dimensions: 'W: 200cm × D: 48cm × H: 75cm',
    styleTags: ['Modern Luxury', 'Industrial Chic'],
    featured: true,
    specifications: {
      'Joinery': 'Blind mitred waterfall corners and hand-turned brass feet',
      'Hardware': 'Blum® soft-close hinges with micro-adjustability',
      'Shelving': 'Three adjustable solid wood shelves with brass pegs',
      'Weight': '82 kg'
    },
    careInstructions: [
      'Dust with a dry lint-free cloth along the grain direction of the fluting.',
      'Protect brass elements from caustic chemical sprays.'
    ],
    relatedProductIds: ['prod-03', 'prod-04', 'prod-11'],
    inStock: true,
    leadTime: 'Ready to Dispatch'
  },
  {
    id: 'prod-07',
    slug: 'atelier-executive-writing-desk',
    name: 'Atelier Cantilever Executive Desk',
    category: 'Office Furniture',
    price: 165000,
    shortDescription: 'Asymmetric leather-inlaid work desk with wireless charging docks and integrated cord conduits.',
    longDescription: 'Created for discerning home studios and executive libraries, the Atelier Desk champions clarity of thought. A sculptural cantilevered top is lined with supple saddle leather that patinas beautifully with age. A hidden magnetic modesty panel and internal cable raceway keep technology discreetly out of sight.',
    images: [
      'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1580481077195-c328ad0213c0?auto=format&fit=crop&w=1400&q=85'
    ],
    colors: [
      { name: 'Cognac Leather & Walnut', hex: '#7D4726' },
      { name: 'Black Leather & Ash', hex: '#222120' }
    ],
    material: 'American Walnut, Full-Grain Leather & Matte Steel',
    dimensions: 'W: 180cm × D: 80cm × H: 75cm',
    styleTags: ['Modern Luxury', 'Industrial Chic'],
    featured: true,
    specifications: {
      'Top': 'Solid walnut with top-grain Italian saddle leather writing pad',
      'Drawer': 'Soft-glide velvet-lined organizer drawer with brass dividers',
      'Cable Management': 'Recessed brass grommet with drop-down cable basket',
      'Finish': 'Matte UV-cured scratch-resistant protective lacquer'
    },
    careInstructions: [
      'Condition leather twice yearly with dedicated leather balm.',
      'Use felt coasters under porcelain or metallic cups.'
    ],
    relatedProductIds: ['prod-10', 'prod-11', 'prod-15'],
    inStock: true,
    leadTime: '1-2 Weeks'
  },
  {
    id: 'prod-08',
    slug: 'aurelia-cane-dining-chair',
    name: 'Aurelia Cane & Walnut Dining Chair',
    category: 'Dining',
    price: 36000,
    shortDescription: 'Ergonomically curved solid walnut frame paired with natural Viennese hand-woven cane webbing.',
    longDescription: 'The Aurelia dining chair offers exceptional dining comfort without visual heaviness. Handcrafted from sustainably harvested walnut, the backrest features traditional octagonal Viennese cane weave that breathes naturally, complemented by a padded seat upholstered in warm sand bouclé.',
    images: [
      'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1400&q=85'
    ],
    colors: [
      { name: 'Natural Cane / Walnut', hex: '#825938' },
      { name: 'Natural Cane / Black Oak', hex: '#252321' }
    ],
    material: 'Solid Walnut, Viennese Cane & Wool Cushion',
    dimensions: 'W: 54cm × D: 56cm × H: 81cm (Seat Height: 47cm)',
    styleTags: ['Scandinavian', 'Classic Contemporary'],
    featured: false,
    specifications: {
      'Frame': 'Hand-shaped solid walnut with mortise and tenon joinery',
      'Cane': '1st-Grade Indonesian Rattan Caning',
      'Seat': 'High-density foam over webbed base',
      'Weight': '6.8 kg each'
    },
    careInstructions: [
      'Mist caning lightly with water every 6 months to maintain fiber flexibility.',
      'Keep away from dry electric radiators.'
    ],
    relatedProductIds: ['prod-03', 'prod-16', 'prod-17'],
    inStock: true,
    leadTime: 'In Stock'
  },
  {
    id: 'prod-09',
    slug: 'milo-monolith-nightstand',
    name: 'Milo Monolithic Bedside Table',
    category: 'Bedroom',
    price: 42000,
    shortDescription: 'Brutalist curved bedside table with open display niche and concealed push-to-open drawer.',
    longDescription: 'Carved with softened bullnose edges, the Milo Nightstand brings quiet sculptural poise to the bedside. Features a smooth velvet-lined drawer for personal essentials and an open lower alcove ideal for art books or nighttime reading.',
    images: [
      'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1400&q=85'
    ],
    colors: [
      { name: 'Alabaster Limestone Finish', hex: '#EBE7DF' },
      { name: 'Smoked Walnut', hex: '#483526' },
      { name: 'Earthy Terracotta Clay', hex: '#A8614E' }
    ],
    material: 'Cast Mineral Composite & Oak Interior',
    dimensions: 'W: 52cm × D: 44cm × H: 50cm',
    styleTags: ['Minimalist', 'Modern Luxury'],
    featured: false,
    specifications: {
      'Shell': 'Ultra-smooth matte polymer-mineral matrix with stone feel',
      'Drawer': 'Soft-close undermount Blum slides',
      'Weight': '24 kg'
    },
    careInstructions: [
      'Clean surface with soft cloth dampened with mild soap solution.',
      'Avoid abrasive scouring sponges.'
    ],
    relatedProductIds: ['prod-05', 'prod-14', 'prod-20'],
    inStock: true,
    leadTime: 'In Stock'
  },
  {
    id: 'prod-10',
    slug: 'solari-ergonomic-leather-desk-chair',
    name: 'Solari Executive Leather Armchair',
    category: 'Office Furniture',
    price: 78000,
    shortDescription: 'Tailored Italian aniline leather conference swivel chair on a cast aluminum bronze-finish base.',
    longDescription: 'Blending corporate authority with residential warmth, the Solari combines synchronized tilt mechanics, continuous lumbar contouring, and buttery full-grain Italian leather stitched with artisanal hand-corded detailing.',
    images: [
      'https://images.unsplash.com/photo-1580481077195-c328ad0213c0?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=85'
    ],
    colors: [
      { name: 'Cognac Amber', hex: '#94582D' },
      { name: 'Deep Espresso', hex: '#2A1F19' },
      { name: 'Slate Gray', hex: '#58595B' }
    ],
    material: 'Aniline Italian Leather & Cast Bronze Alloy',
    dimensions: 'W: 66cm × D: 68cm × H: 96-104cm',
    styleTags: ['Modern Luxury', 'Classic Contemporary'],
    featured: false,
    specifications: {
      'Mechanism': 'Synchronous 3-position tilt-lock with tension dial',
      'Base': '5-star die-cast aluminum base in antique bronze finish',
      'Casters': 'Soft polyurethane multi-surface floor casters'
    },
    careInstructions: [
      'Wipe with dedicated leather cleaner quarterly.',
      'Buff with dry cloth to restore natural oils.'
    ],
    relatedProductIds: ['prod-07', 'prod-11', 'prod-15'],
    inStock: true,
    leadTime: 'In Stock'
  },
  {
    id: 'prod-11',
    slug: 'helio-architectural-bookcase',
    name: 'Helio Open Modular Bookcase',
    category: 'Storage & Cabinets',
    price: 135000,
    shortDescription: 'Asymmetric floor-to-ceiling display shelving system in darkened steel and American walnut.',
    longDescription: 'The Helio Bookcase turns personal collections, ceramics, and literature into an architectural gallery. Its rhythmic horizontal spans are held by slim vertical steel uprights, allowing natural room light to filter effortlessly across the shelves.',
    images: [
      'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=85'
    ],
    colors: [
      { name: 'Smoked Walnut & Black Steel', hex: '#3B2F27' },
      { name: 'Bleached Ash & Raw Brass', hex: '#C2B8AC' }
    ],
    material: 'Solid American Walnut & Powder-Coated Steel',
    dimensions: 'W: 160cm × D: 38cm × H: 200cm',
    styleTags: ['Industrial Chic', 'Minimalist'],
    featured: false,
    specifications: {
      'Shelves': '5 solid 32mm thick solid walnut display boards',
      'Stanchions': 'Heavy tubular steel with micro-adjustable brass levelers',
      'Wall Anchoring': 'Concealed earthquake safety wall brackets included'
    },
    careInstructions: [
      'Dust with soft microfiber duster.',
      'Avoid placing soaked or dripping flower vases directly on timber.'
    ],
    relatedProductIds: ['prod-06', 'prod-07', 'prod-13'],
    inStock: true,
    leadTime: '2 Weeks'
  },
  {
    id: 'prod-12',
    slug: 'brut-fluted-brass-floor-lamp',
    name: 'Brut Fluted Brass Floor Lamp',
    category: 'Decor & Accessories',
    price: 48000,
    shortDescription: 'Heavy cast brass pedestal lamp with a textured linen shade and warm dimmable foot switch.',
    longDescription: 'Emitting an atmospheric gallery glow, the Brut Floor Lamp features a weighted reeded brass column counterbalanced by a wide drum shade tailored in raw Belgian linen. Provides both ambient uplight and warm intimate task illumination.',
    images: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1400&q=85'
    ],
    colors: [
      { name: 'Brushed Brass', hex: '#CDB380' },
      { name: 'Aged Gunmetal', hex: '#3E3E3E' },
      { name: 'Antique Bronze', hex: '#584333' }
    ],
    material: 'Solid Hand-Spun Brass & Unbleached Linen',
    dimensions: 'Dia: 45cm × H: 155cm',
    styleTags: ['Modern Luxury', 'Classic Contemporary'],
    featured: false,
    specifications: {
      'Electrical': 'E27 Warm 2700K LED included; inline floor dimmer switch',
      'Cord': '3-meter black herringbone braided fabric cable',
      'Base Weight': '14 kg solid stability weight'
    },
    careInstructions: [
      'Wipe brass with dry clean jeweler cloth.',
      'Do not apply chemical brass cleaners to retain protective beeswax coat.'
    ],
    relatedProductIds: ['prod-01', 'prod-02', 'prod-04'],
    inStock: true,
    leadTime: 'In Stock'
  },
  {
    id: 'prod-13',
    slug: 'terra-sculptural-ceramic-vessels',
    name: 'Terra Sculptural Ceramic Vessels (Set of 3)',
    category: 'Decor & Accessories',
    price: 24500,
    shortDescription: 'Wheel-thrown volcanic stoneware with raw tactile slip glaze and organic asymmetry.',
    longDescription: 'Created in collaboration with Kyoto ceramists, each vessel in this triptych is hand-turned from coarse stoneware clay infused with volcanic ash. The textured, unglazed exterior contrasts with a water-sealed interior suitable for botanicals or striking standalone display.',
    images: [
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1400&q=85'
    ],
    colors: [
      { name: 'Pumice White', hex: '#DFDDD7' },
      { name: 'Charcoal Basalt', hex: '#2A2928' },
      { name: 'Terracotta Sand', hex: '#BA7A5C' }
    ],
    material: 'Volcanic Stoneware Clay',
    dimensions: 'Vessel A: H: 38cm, Vessel B: H: 28cm, Vessel C: H: 20cm',
    styleTags: ['Minimalist', 'Scandinavian'],
    featured: false,
    specifications: {
      'Method': 'Wheel-thrown and pit-fired at 1,280°C',
      'Interior': 'Food-safe clear water barrier glaze',
      'Felt Pad': 'Velvet scratch-protector under each base'
    },
    careInstructions: [
      'Hand wash with warm water only.',
      'Allow to dry thoroughly before storing.'
    ],
    relatedProductIds: ['prod-04', 'prod-06', 'prod-12'],
    inStock: true,
    leadTime: 'In Stock'
  },
  {
    id: 'prod-14',
    slug: 'somnus-boucle-daybed',
    name: 'Somnus Sculptural Daybed',
    category: 'Sofas & Lounge',
    price: 138000,
    shortDescription: 'Cylindrical bolster cushion daybed resting on a solid walnut plinth.',
    longDescription: 'Positioned at the boundary between furniture and fine sculpture, the Somnus Daybed functions effortlessly as a room divider, gallery bench, or reading lounge. Features an elongated channel-tufted bolster secured by magnetic leather saddle straps.',
    images: [
      'https://images.unsplash.com/photo-1540518614846-7ede433c4b49?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1400&q=85'
    ],
    colors: [
      { name: 'Ivory Bouclé', hex: '#F0ECE4' },
      { name: 'Forest Velvet', hex: '#2D3A30' },
      { name: 'Camel Suede', hex: '#B89066' }
    ],
    material: 'Italian Wool Bouclé & Walnut Base',
    dimensions: 'L: 200cm × W: 85cm × H: 45cm',
    styleTags: ['Modern Luxury', 'Minimalist'],
    featured: false,
    specifications: {
      'Base': 'Chamfered solid American walnut base with recessed glides',
      'Cushioning': 'Triple-layer reflex foam core with feather topper',
      'Straps': 'Vegetable-tanned full-grain harness leather'
    },
    careInstructions: [
      'Vacuum gently using soft fabric attachment.',
      'Rotate cushion periodically for even wear.'
    ],
    relatedProductIds: ['prod-01', 'prod-02', 'prod-05'],
    inStock: true,
    leadTime: '3 Weeks'
  },
  {
    id: 'prod-15',
    slug: 'nordic-minimalist-credenza',
    name: 'Nordic Slatted Media Console',
    category: 'Storage & Cabinets',
    price: 115000,
    shortDescription: 'Continuous slatted wood acoustic doors that permit remote control and soundbar transmission.',
    longDescription: 'Designed for contemporary living rooms where entertainment tech should stay invisible. The slatted front allows infrared remote signals and acoustic frequencies to pass through cleanly while masking cables, receivers, and game consoles.',
    images: [
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=1400&q=85'
    ],
    colors: [
      { name: 'Natural White Oak', hex: '#D2C3B0' },
      { name: 'Smoked Walnut', hex: '#483626' }
    ],
    material: 'Solid White Oak & Acoustic Mesh',
    dimensions: 'W: 210cm × D: 45cm × H: 54cm',
    styleTags: ['Scandinavian', 'Minimalist'],
    featured: false,
    specifications: {
      'Doors': 'Slatted solid oak with micro-fiber acoustic backing',
      'Ventilation': 'Perforated base ventilation channels to prevent electronics overheating',
      'Weight Capacity': 'Tested up to 100 kg on top surface'
    },
    careInstructions: [
      'Wipe down with soft cotton cloth.',
      'Protect from intense moisture or spilled drinks.'
    ],
    relatedProductIds: ['prod-04', 'prod-06', 'prod-07'],
    inStock: true,
    leadTime: 'Ready to Dispatch'
  },
  {
    id: 'prod-16',
    slug: 'florence-smoked-glass-chandelier',
    name: 'Florence Smoked Glass Pendant Cluster',
    category: 'Decor & Accessories',
    price: 64000,
    shortDescription: 'Mouth-blown fluted amber glass globes suspended from an architectural brass canopy.',
    longDescription: 'Capturing the golden light of an Italian sunset, the Florence pendant features five organic glass globes hand-blown in Murano traditions. Each globe displays delicate air bubbles and thickness nuances that disperse light in mesmerizing refractions.',
    images: [
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1400&q=85'
    ],
    colors: [
      { name: 'Smoked Amber & Brass', hex: '#C29858' },
      { name: 'Moon Glass & Gunmetal', hex: '#8C8D90' }
    ],
    material: 'Mouth-Blown Glass & Solid Brass',
    dimensions: 'Canopy: Dia: 40cm, Suspension Drop: Adjustable up to 220cm',
    styleTags: ['Modern Luxury', 'Classic Contemporary'],
    featured: true,
    specifications: {
      'Glass': '5 bespoke hand-blown tinted borosilicate glass vessels',
      'Lamp Holders': 'G9 Dimmable Warm LED capsules included',
      'Compatibility': 'Triac & Dali dimming systems supported'
    },
    careInstructions: [
      'Clean glass spheres using alcohol-free glass cleaner and lint-free microfiber.',
      'Turn off main power before wiping.'
    ],
    relatedProductIds: ['prod-03', 'prod-08', 'prod-12'],
    inStock: true,
    leadTime: '1-2 Weeks'
  },
  {
    id: 'prod-17',
    slug: 'zenith-reclaimed-elm-bench',
    name: 'Zenith Reclaimed Elm Dining Bench',
    category: 'Dining',
    price: 49000,
    shortDescription: 'Centuries-old reclaimed elm wood bench celebrating natural grain checks, butterfly keys, and live edges.',
    longDescription: 'Every Zenith bench carries more than a century of history. Rescued from heritage structural beams, the timber is hand-planed and secured with hand-cut walnut butterfly keys that celebrate the timber’s natural movement and soul.',
    images: [
      'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1400&q=85'
    ],
    colors: [
      { name: 'Weathered Heritage Elm', hex: '#87705B' },
      { name: 'Charred Shou Sugi Ban', hex: '#262422' }
    ],
    material: '100+ Year Reclaimed Elm Wood & Walnut Keys',
    dimensions: 'L: 190cm × W: 38cm × H: 46cm',
    styleTags: ['Industrial Chic', 'Scandinavian'],
    featured: false,
    specifications: {
      'Timber': 'Ancient reclaimed elm with authentic patina and saw marks',
      'Joinery': 'Traditional mortise, tenon, and exposed end-grain butterfly joints',
      'Finish': 'Natural organic tung oil buffed to matte sheen'
    },
    careInstructions: [
      'Apply light coat of Danish oil once every two years.',
      'Wipe with slightly moist cotton cloth.'
    ],
    relatedProductIds: ['prod-03', 'prod-08', 'prod-19'],
    inStock: true,
    leadTime: 'In Stock'
  },
  {
    id: 'prod-18',
    slug: 'roma-curved-boucle-sofa',
    name: 'Roma Crescent Bouclé Sofa',
    category: 'Living Room',
    price: 215000,
    shortDescription: 'Gentle curved semi-circular sofa designed for intimate organic gatherings and conversation.',
    longDescription: 'Curved silhouettes eliminate hard corners and welcome guests with effortless warmth. The Roma Crescent Sofa features an unbroken sculptural backrest that cradles the human form, wrapped in opulent heavy-weight textured bouclé.',
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1400&q=85'
    ],
    colors: [
      { name: 'Ivory Bouclé', hex: '#EDE8DF' },
      { name: 'Almond Taupe', hex: '#BCAD9B' },
      { name: 'Midnight Navy', hex: '#1C2738' }
    ],
    material: 'Luxury Italian Bouclé & Birch Frame',
    dimensions: 'W: 260cm × D: 110cm × H: 78cm',
    styleTags: ['Modern Luxury', 'Minimalist'],
    featured: true,
    specifications: {
      'Frame': 'Reinforced curved birch laminate with lifetime structural guarantee',
      'Padding': 'Dacron-wrapped high density 42kg/m³ foam',
      'Legs': 'Concealed solid ash feet'
    },
    careInstructions: [
      'Regular light vacuuming.',
      'Professional dry cleaning only for spills.'
    ],
    relatedProductIds: ['prod-01', 'prod-02', 'prod-04'],
    inStock: true,
    leadTime: '3-4 Weeks'
  },
  {
    id: 'prod-19',
    slug: 'orla-calacatta-console-table',
    name: 'Orla Calacatta Viola Console Table',
    category: 'Living Room',
    price: 185000,
    isPriceOnRequest: true,
    shortDescription: 'Striking purple and cream Calacatta Viola marble console carved with geometric waterfall legs.',
    longDescription: 'A showpiece for entrance galleries and living salons. The Orla Console features hand-selected Italian Calacatta Viola marble with bold burgundy and violet crystalline veins on a creamy backdrop. The waterfall edge joinery continues the natural marble grain uninterrupted across both vertical legs.',
    images: [
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1400&q=85'
    ],
    colors: [
      { name: 'Calacatta Viola', hex: '#A3686E' },
      { name: 'Carrara Pure White', hex: '#EDECE8' },
      { name: 'Verde Alpi Green', hex: '#2F4838' }
    ],
    material: 'Solid Italian Calacatta Viola Marble',
    dimensions: 'W: 140cm × D: 38cm × H: 82cm',
    styleTags: ['Modern Luxury', 'Classic Contemporary'],
    featured: true,
    specifications: {
      'Stone Origin': 'Apuan Alps, Carrara, Italy',
      'Finish': 'Polished satin honed with hydrophobic anti-stain treatment',
      'Weight': '85 kg',
      'Joints': 'Mitred 45-degree waterfall bookmatched joints'
    },
    careInstructions: [
      'Clean exclusively with mild stone soap.',
      'Never allow perfumes, diffusers, or citrus to sit directly on stone.'
    ],
    relatedProductIds: ['prod-03', 'prod-04', 'prod-06'],
    inStock: false,
    leadTime: 'Limited Atelier Edition — Inquire for Next Cask'
  },
  {
    id: 'prod-20',
    slug: 'umbra-hand-knotted-wool-rug',
    name: 'Umbra Architectural Hand-Knotted Rug',
    category: 'Decor & Accessories',
    price: 68000,
    shortDescription: 'High-low carved pile Tibetan wool and raw bamboo silk rug in tonal neutral geometry.',
    longDescription: 'Woven entirely by hand by master carpet weavers over 120 days, the Umbra rug combines high-altitude Tibetan wool with luminous bamboo silk. The hand-carved relief contours create a tactile landscape underfoot that shifts in depth with changing daylight.',
    images: [
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1400&q=85'
    ],
    colors: [
      { name: 'Chalk & Sand Dune', hex: '#E2DDD3' },
      { name: 'Smoke & Slate', hex: '#87837C' },
      { name: 'Warm Terracotta', hex: '#A06752' }
    ],
    material: '70% Tibetan Mountain Wool, 30% Bamboo Silk',
    dimensions: '240cm × 300cm (Custom Sizes on Request)',
    styleTags: ['Modern Luxury', 'Minimalist'],
    featured: false,
    specifications: {
      'Knot Density': '100 Knots per square inch (Hand-knotted)',
      'Pile Height': 'Multi-level relief 10mm - 14mm',
      'Backing': 'Natural organic latex-free weave'
    },
    careInstructions: [
      'Vacuum without rotary beater bar.',
      'Professional rug wash recommended every 2-3 years.'
    ],
    relatedProductIds: ['prod-01', 'prod-05', 'prod-18'],
    inStock: true,
    leadTime: 'In Stock'
  },
  {
    id: 'prod-21',
    slug: 'sora-arched-full-length-mirror',
    name: 'Sora Monumental Arched Brass Mirror',
    category: 'Decor & Accessories',
    price: 52000,
    shortDescription: 'Dramatic 210cm full-height floor mirror in seamless hand-patinated antiqued brass frame.',
    longDescription: 'Expands natural light and spatial depth with theatrical elegance. The Sora Mirror features an oversized architectural arch with museum-grade distortion-free silvered mirror glass, enclosed within a hand-welded solid brass frame.',
    images: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=85'
    ],
    colors: [
      { name: 'Aged Patina Brass', hex: '#A89262' },
      { name: 'Matte Cast Black', hex: '#1D1C1B' }
    ],
    material: 'Solid Brass & 6mm Ultra-Clear Float Glass',
    dimensions: 'W: 95cm × H: 210cm × D: 4cm',
    styleTags: ['Modern Luxury', 'Classic Contemporary'],
    featured: false,
    specifications: {
      'Glass': '6mm lead-free copper-free mirror with shatterproof safety film',
      'Mounting': 'Can lean securely with anti-tip anchor kit or mount flush',
      'Weight': '38 kg'
    },
    careInstructions: [
      'Spray glass cleaner onto cloth first, not directly onto the brass frame.'
    ],
    relatedProductIds: ['prod-05', 'prod-09', 'prod-19'],
    inStock: true,
    leadTime: 'In Stock'
  },
  {
    id: 'prod-22',
    slug: 'paloma-italian-leather-armchair',
    name: 'Paloma Sculpted Leather Armchair',
    category: 'Living Room',
    price: 112000,
    shortDescription: 'Deep envelope lounge chair in glove-soft full grain Italian saddle leather with blackened steel base.',
    longDescription: 'Tailored like bespoke haute couture. The Paloma Armchair envelops the sitter in supple vegetable-tanned Italian leather with inverted seam detailing. The feather-down topper provides sink-in relaxation balanced by crisp modernist lines.',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1400&q=85'
    ],
    colors: [
      { name: 'Warm Tobacco Leather', hex: '#7E4C2A' },
      { name: 'Olive Drab Leather', hex: '#4B533E' },
      { name: 'Charcoal Noir', hex: '#201E1D' }
    ],
    material: 'Full-Grain Italian Aniline Leather & Steel',
    dimensions: 'W: 92cm × D: 95cm × H: 78cm',
    styleTags: ['Industrial Chic', 'Modern Luxury'],
    featured: true,
    specifications: {
      'Leather': 'Grade-A 1.6mm thickness Italian aniline cowhide',
      'Base': 'Laser-cut blackened tubular steel frame with floor glides',
      'Cushions': 'Down-blend wrapped around cold-cure molded core'
    },
    careInstructions: [
      'Wipe with clean damp chamois.',
      'Protect from intense heat sources.'
    ],
    relatedProductIds: ['prod-01', 'prod-04', 'prod-14'],
    inStock: true,
    leadTime: 'Ready to Dispatch'
  },
  {
    id: 'prod-23',
    slug: 'lucida-minimal-wardrobe',
    name: 'Lucida Bespoke Slatted Wardrobe System',
    category: 'Storage & Cabinets',
    price: 290000,
    isPriceOnRequest: true,
    shortDescription: 'Modular floor-to-ceiling wardrobe with smoked glass doors, walnut interior drawers, and proximity sensors.',
    longDescription: 'The pinnacle of personalized storage. Lucida combines semi-translucent bronze tempered glass with warm American walnut cabinetry. Concealed micro-sensors gently illuminate interior clothing rails and velvet accessory trays as you approach.',
    images: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=85'
    ],
    colors: [
      { name: 'Bronze Glass & Walnut', hex: '#4A3B2C' },
      { name: 'Smoked Noir & Black Ash', hex: '#1C1B19' }
    ],
    material: 'Bronze Tempered Glass, Walnut & Integrated LED',
    dimensions: 'W: 240cm × D: 62cm × H: 240cm',
    styleTags: ['Modern Luxury', 'Minimalist'],
    featured: false,
    specifications: {
      'Door Frames': 'Ultra-slim anodized bronze aluminum profiles',
      'Glass': '8mm tempered shatter-resistant smoked bronze glass',
      'Interior': 'Adjustable hanging bays, felt watch drawer, shoe display racks',
      'Lighting': 'Warm 2700K integrated LED strips with micro PIR sensors'
    },
    careInstructions: [
      'Wipe glass with lint-free microfiber.',
      'Treat internal timber with wood conditioner twice annually.'
    ],
    relatedProductIds: ['prod-05', 'prod-06', 'prod-09'],
    inStock: false,
    leadTime: 'Bespoke Architectural Installation (4-6 Weeks)'
  },
  {
    id: 'prod-24',
    slug: 'solarium-solid-teak-accent-table',
    name: 'Solarium Sculpted Teak Accent Table',
    category: 'Living Room',
    price: 34000,
    shortDescription: 'Turned from a single salvage teak log with hourglass silhouette and organic charred finish.',
    longDescription: 'Doubling as an occasional side table, footrest, or art plinth, the Solarium accent table is lathe-turned from solid reclaimed timber. Small natural fissures and knots are stabilized with raw brass keys, ensuring each piece is one-of-a-kind.',
    images: [
      'https://images.unsplash.com/photo-1512212621149-107ffe572d2f?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1400&q=85'
    ],
    colors: [
      { name: 'Natural Honey Teak', hex: '#A57342' },
      { name: 'Charred Black Yakisugi', hex: '#201F1E' }
    ],
    material: '100% Solid Plantation Teak',
    dimensions: 'Dia: 38cm × H: 48cm',
    styleTags: ['Minimalist', 'Scandinavian'],
    featured: false,
    specifications: {
      'Construction': 'Solid carved timber (Not hollow)',
      'Weight': '19 kg',
      'Base': 'Cork protective floor coaster included'
    },
    careInstructions: [
      'Wipe with dry microfiber cloth.',
      'Natural checking in timber over seasons is a hallmark of organic solid wood.'
    ],
    relatedProductIds: ['prod-01', 'prod-02', 'prod-04'],
    inStock: true,
    leadTime: 'In Stock'
  }
];
