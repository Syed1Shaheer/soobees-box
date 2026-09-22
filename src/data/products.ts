export interface ProductItem {
  id: string;
  name: string;
  code: string;
  category: 'Small Boxes' | 'Medium Boxes' | 'Rectangular Sets' | 'Specialty' | 'Bangle Boxes' | 'Large Sets' | 'Coins & Chains';
  categorySlug: string;
  itemType: string;
  description: string;
  standardColors: string[];
  dimensions?: string;
  hasCustomBranding: boolean;
}

export const DOCUMENTED_COLORS = [
  { name: 'Black', hex: '#1C1D21' },
  { name: 'Maroon', hex: '#631D27' },
  { name: 'Red', hex: '#8F1E28' },
  { name: 'Blue', hex: '#1E3A5F' },
  { name: 'Purple', hex: '#4A284D' },
];

export const PRODUCTS: ProductItem[] = [
  // Small Jewelry Boxes
  {
    id: '0221',
    name: '2*2 Ring Foam',
    code: '0221',
    category: 'Small Boxes',
    categorySlug: 'small-boxes',
    itemType: 'Single Ring',
    description: 'Small square velvet box with round foam insert tailored for a single ring presentation.',
    standardColors: ['Black', 'Maroon', 'Red', 'Blue', 'Purple'],
    hasCustomBranding: true
  },
  {
    id: '0222',
    name: '2*2 Challa',
    code: '0222',
    category: 'Small Boxes',
    categorySlug: 'small-boxes',
    itemType: 'Plain Ring / Band',
    description: 'Small square box specifically configured for plain bands and traditional challa rings.',
    standardColors: ['Black', 'Maroon', 'Red', 'Blue', 'Purple'],
    hasCustomBranding: true
  },
  {
    id: '0340',
    name: '2*2 Tops',
    code: '0340',
    category: 'Small Boxes',
    categorySlug: 'small-boxes',
    itemType: 'Stud / Tops Earrings',
    description: 'Compact square presentation box with twin puncture slits for stud earrings.',
    standardColors: ['Black', 'Maroon', 'Red', 'Blue', 'Purple'],
    hasCustomBranding: true
  },
  {
    id: '0230',
    name: '2*2 Finger',
    code: '0230',
    category: 'Small Boxes',
    categorySlug: 'small-boxes',
    itemType: 'Statement / Finger Ring',
    description: 'Small square box crafted for prominent finger rings with wider insert clearance.',
    standardColors: ['Black', 'Maroon', 'Red', 'Blue', 'Purple'],
    hasCustomBranding: true
  },
  {
    id: '0331',
    name: '2*2 Ginni',
    code: '0331',
    category: 'Small Boxes',
    categorySlug: 'small-boxes',
    itemType: 'Single Gold Coin',
    description: 'Square velvet presentation box with precision coin recess for a single gold coin.',
    standardColors: ['Black', 'Maroon', 'Red', 'Blue', 'Purple'],
    hasCustomBranding: true
  },
  {
    id: '0227',
    name: '2*2 Locket',
    code: '0227',
    category: 'Small Boxes',
    categorySlug: 'small-boxes',
    itemType: 'Pendant / Locket',
    description: 'Small square box with cushioned velvet bed for individual lockets and delicate pendants.',
    standardColors: ['Black', 'Maroon', 'Red', 'Blue', 'Purple'],
    hasCustomBranding: true
  },
  {
    id: '0224',
    name: '2*2 Bali',
    code: '0224',
    category: 'Small Boxes',
    categorySlug: 'small-boxes',
    itemType: 'Hoop / Bali Earrings',
    description: 'Specially slotted square velvet box engineered to hold hoop and bali style earrings upright.',
    standardColors: ['Black', 'Maroon', 'Red', 'Blue', 'Purple'],
    hasCustomBranding: true
  },

  // Medium Jewelry Boxes
  {
    id: '0313',
    name: '2.5*2.25 Tops',
    code: '0313',
    category: 'Medium Boxes',
    categorySlug: 'medium-boxes',
    itemType: 'Medium Stud Earrings',
    description: 'Medium proportioned velvet box providing additional border presence for stud earrings.',
    standardColors: ['Black', 'Maroon', 'Red', 'Blue', 'Purple'],
    hasCustomBranding: true
  },
  {
    id: '0317',
    name: '2.5*2.25 Locket Tops',
    code: '0317',
    category: 'Medium Boxes',
    categorySlug: 'medium-boxes',
    itemType: 'Locket + Tops Set',
    description: 'Medium velvet presentation box designed to house a matched locket and earring pair.',
    standardColors: ['Black', 'Maroon', 'Red', 'Blue', 'Purple'],
    hasCustomBranding: true
  },
  {
    id: '0344',
    name: '2.5*2.25 Clip Tops',
    code: '0344',
    category: 'Medium Boxes',
    categorySlug: 'medium-boxes',
    itemType: 'Clip-on Earrings',
    description: 'Medium presentation box with tensioned clip-on earring fasteners.',
    standardColors: ['Black', 'Maroon', 'Red', 'Blue', 'Purple'],
    hasCustomBranding: true
  },
  {
    id: '0373',
    name: '2.5*2.25 Bali',
    code: '0373',
    category: 'Medium Boxes',
    categorySlug: 'medium-boxes',
    itemType: 'Medium Hoop Earrings',
    description: 'Medium format box with reinforced earring mounts for hoop and bali jewelry.',
    standardColors: ['Black', 'Maroon', 'Red', 'Blue', 'Purple'],
    hasCustomBranding: true
  },

  // Rectangular Jewelry Boxes
  {
    id: '0404',
    name: '3*5/2*5 Locket Tops',
    code: '0404',
    category: 'Rectangular Sets',
    categorySlug: 'rectangular-sets',
    itemType: 'Locket + Tops Set',
    description: 'Rectangular elongated box providing balanced spacing for pendant and matching earring tops.',
    standardColors: ['Black', 'Maroon', 'Red', 'Blue', 'Purple'],
    hasCustomBranding: true
  },
  {
    id: '0403',
    name: '3*5/2*5 Locket Set',
    code: '0403',
    category: 'Rectangular Sets',
    categorySlug: 'rectangular-sets',
    itemType: 'Divided Locket Set',
    description: 'Rectangular velvet box featuring divided interior inserts for complete locket ensembles.',
    standardColors: ['Black', 'Maroon', 'Red', 'Blue', 'Purple'],
    hasCustomBranding: true
  },
  {
    id: '0208',
    name: '3*5/2*5 Clip Tops',
    code: '0208',
    category: 'Rectangular Sets',
    categorySlug: 'rectangular-sets',
    itemType: 'Clip Earrings Set',
    description: 'Rectangular box configured specifically for broader clip-style earring pairings.',
    standardColors: ['Black', 'Maroon', 'Red', 'Blue', 'Purple'],
    hasCustomBranding: true
  },
  {
    id: '0282',
    name: '3*5/2*5 Bunda',
    code: '0282',
    category: 'Rectangular Sets',
    categorySlug: 'rectangular-sets',
    itemType: 'Bunda-Style Earrings',
    description: 'Rectangular presentation box with deep clearance for traditional bunda-style earrings.',
    standardColors: ['Black', 'Maroon', 'Red', 'Blue', 'Purple'],
    hasCustomBranding: true
  },

  // Specialty Boxes
  {
    id: '0394',
    name: '3.5*2.5 Double Ginni',
    code: '0394',
    category: 'Specialty',
    categorySlug: 'specialty',
    itemType: 'Two Gold Coins',
    description: 'Precision dual-recess velvet box built to present two gold coins side-by-side.',
    standardColors: ['Black', 'Maroon', 'Red', 'Blue', 'Purple'],
    hasCustomBranding: true
  },
  {
    id: '0398',
    name: '3.5*2.5 Jhumki',
    code: '0398',
    category: 'Specialty',
    categorySlug: 'specialty',
    itemType: 'Jhumki Earrings',
    description: 'Specialty box with elevated ceiling and suspension insert for dimensional jhumki earrings.',
    standardColors: ['Black', 'Maroon', 'Red', 'Blue', 'Purple'],
    hasCustomBranding: true
  },
  {
    id: '0288',
    name: '3.5*2.5 Cufling',
    code: '0288',
    category: 'Specialty',
    categorySlug: 'specialty',
    itemType: 'Cufflinks Pair',
    description: 'Dedicated presentation box with double elastic loop fasteners for fine mens cufflinks.',
    standardColors: ['Black', 'Maroon', 'Red', 'Blue', 'Purple'],
    hasCustomBranding: true
  },
  {
    id: '0296',
    name: '3.5*2.5 Dubble Lastic',
    code: '0296',
    category: 'Specialty',
    categorySlug: 'specialty',
    itemType: 'Double Elastic Fastener',
    description: 'Multi-purpose jewelry box featuring dual elastic strap retention for versatile pieces.',
    standardColors: ['Black', 'Maroon', 'Red', 'Blue', 'Purple'],
    hasCustomBranding: true
  },

  // Bangle Boxes
  {
    id: '0446',
    name: '2 Chori',
    code: '0446',
    category: 'Bangle Boxes',
    categorySlug: 'bangle-boxes',
    itemType: '2 Bangles',
    description: 'Cylindrical velvet bangle box tailored to store and display two bangles securely.',
    standardColors: ['Black', 'Maroon', 'Red', 'Blue', 'Purple'],
    hasCustomBranding: true
  },
  {
    id: '0274',
    name: '4 Chori',
    code: '0274',
    category: 'Bangle Boxes',
    categorySlug: 'bangle-boxes',
    itemType: '4 Bangles',
    description: 'Structured velvet bangle box sized for four traditional bangles with padded interior bar.',
    standardColors: ['Black', 'Maroon', 'Red', 'Blue', 'Purple'],
    hasCustomBranding: true
  },
  {
    id: '0436',
    name: '6 Chori',
    code: '0436',
    category: 'Bangle Boxes',
    categorySlug: 'bangle-boxes',
    itemType: '6 Bangles',
    description: 'Spacious velvet bangle box engineered for six bangles or complete bridal sets.',
    standardColors: ['Black', 'Maroon', 'Red', 'Blue', 'Purple'],
    hasCustomBranding: true
  },

  // Larger Square Boxes
  {
    id: '0278-set',
    name: '4*4 Locket Set',
    code: '0278',
    category: 'Large Sets',
    categorySlug: 'large-sets',
    itemType: 'Complete Locket Set',
    description: 'Large square format box providing ample showcase space for a complete locket set.',
    standardColors: ['Black', 'Maroon', 'Red', 'Blue', 'Purple'],
    hasCustomBranding: true
  },
  {
    id: '0310',
    name: '4*4 Clip Bunda',
    code: '0310',
    category: 'Large Sets',
    categorySlug: 'large-sets',
    itemType: 'Clip Bunda Earrings Set',
    description: 'Substantial square box with reinforced mountings for clip bunda statement jewelry.',
    standardColors: ['Black', 'Maroon', 'Red', 'Blue', 'Purple'],
    hasCustomBranding: true
  },
  {
    id: '0418',
    name: '4*4 Locket Bunde',
    code: '0418',
    category: 'Large Sets',
    categorySlug: 'large-sets',
    itemType: 'Locket + Bunda Set',
    description: 'Expansive square presentation box accommodating both locket piece and matching bunde earrings.',
    standardColors: ['Black', 'Maroon', 'Red', 'Blue', 'Purple'],
    hasCustomBranding: true
  },
  {
    id: '0278-tops',
    name: '4*4 Locket Tops',
    code: '0278',
    category: 'Large Sets',
    categorySlug: 'large-sets',
    itemType: 'Locket + Tops Set',
    description: 'Large square presentation box for premium bridal locket and stud earring arrangements.',
    standardColors: ['Black', 'Maroon', 'Red', 'Blue', 'Purple'],
    hasCustomBranding: true
  },

  // Coins & Chains
  {
    id: '0301',
    name: '3 Ginni',
    code: '0301',
    category: 'Coins & Chains',
    categorySlug: 'coins-chains',
    itemType: 'Three Gold Coins',
    description: 'Triple-recess velvet box custom manufactured for three gold coins in linear arrangement.',
    standardColors: ['Black', 'Maroon', 'Red', 'Blue', 'Purple'],
    hasCustomBranding: true
  },
  {
    id: '0304',
    name: '4 Ginni',
    code: '0304',
    category: 'Coins & Chains',
    categorySlug: 'coins-chains',
    itemType: 'Four Gold Coins',
    description: 'Four-recess presentation box for commemorative or investment gold coins.',
    standardColors: ['Black', 'Maroon', 'Red', 'Blue', 'Purple'],
    hasCustomBranding: true
  },
  {
    id: '0237',
    name: 'Chain Leher',
    code: '0237',
    category: 'Coins & Chains',
    categorySlug: 'coins-chains',
    itemType: 'Necklace Chains',
    description: 'Long rectangular velvet box equipped with chain stay hooks for necklaces and chains.',
    standardColors: ['Black', 'Maroon', 'Red', 'Blue', 'Purple'],
    hasCustomBranding: true
  }
];

export const CATEGORIES = [
  'All Boxes',
  'Small Boxes',
  'Medium Boxes',
  'Rectangular Sets',
  'Specialty',
  'Bangle Boxes',
  'Large Sets',
  'Coins & Chains'
];

export const BUSINESS_INFO = {
  name: "Soobee's Box",
  tagline: "Built for Every Piece You Sell",
  localTagline: "Har Zewar, Har Ghari — Apna Andaaz",
  positioning: "Pakistan's Complete Jewelry & Watch Packaging Manufacturer",
  differentiator: "Your Logo. Our Craftsmanship.",
  colorsNote: "Available colors across most lines include Black, Maroon, Red, Blue, and Purple.",
  factoryLocation: {
    title: "Manufacturing & Bulk Facility",
    area: "S.I.T.E. Area, Karachi, Pakistan",
    purpose: "Direct factory manufacturing, wholesale fulfillment, bulk packaging pickups, custom die-stamping"
  },
  retailOutlet: {
    title: "Retail Outlet",
    address: "First Floor, Hyderi Gold Mark Mall, Shop #34 to 37, Federal B Area Block H, North Nazimabad Town, Karachi, 74700, Pakistan",
    purpose: "Sample inspection, immediate stock purchases, retailer consultation"
  },
  contacts: {
    headOffice: "0333-1145554",
    salesOfficers: [
      { name: "Sales Officer 1", phone: "0333-1145552" },
      { name: "Sales Officer 2", phone: "0333-1145556" },
      { name: "Sales Officer 3", phone: "0333-1145557" }
    ]
  },
  linktree: "https://linktr.ee/soobeesbox"
};

export function createWhatsAppUrl(phone: string, message: string): string {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const international = cleanPhone.startsWith('0') ? '92' + cleanPhone.slice(1) : cleanPhone;
  return `https://wa.me/${international}?text=${encodeURIComponent(message)}`;
}
