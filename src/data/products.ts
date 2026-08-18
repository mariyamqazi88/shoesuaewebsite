import type { Product, ShoeCategory } from '../types/ecommerce';

export const PRODUCTS: Product[] = [
  {
    id: 'sho-01',
    name: 'SNIKEI Terracotta Aeroflux Sneaker',
    category: 'Sneaker',
    price: 285,
    originalPrice: 350,
    discountPercentage: 18,
    rating: 4.9,
    reviewsCount: 142,
    image: '/assets/images/shoes6.png',
    tag: 'Best Seller',
    sizes: [40, 41, 42, 43, 44, 45],
    colors: [
      { name: 'Warm Terracotta', hex: '#C29B7F' },
      { name: 'Cream White', hex: '#F5F5F7' },
      { name: 'Deep Charcoal', hex: '#111111' },
    ],
    description: 'Engineering excellence meets luxury minimalism. Crafted from premium Italian full-grain leather paired with custom aeroflux cushioning for maximum comfort.',
    features: [
      'Anatomical memory foam footbed',
      'Hand-stitched leather panels',
      'Ultra-lightweight shock absorbing sole',
      'Water-repellent finish'
    ],
    isBestSeller: true,
    isNewArrival: false,
  },
  {
    id: 'sho-02',
    name: 'Vanguard Handcrafted Oxford',
    category: 'Oxford',
    price: 340,
    originalPrice: 425,
    discountPercentage: 20,
    rating: 5.0,
    reviewsCount: 98,
    image: '/assets/images/formal_oxfords.jpg',
    tag: '20% OFF',
    sizes: [39, 40, 41, 42, 43, 44],
    colors: [
      { name: 'Cognac Brown', hex: '#8B4513' },
      { name: 'Obsidian Black', hex: '#111111' },
    ],
    description: 'Timeless elegance reinvented. Hand-burnished full-grain cognac calfskin constructed with Goodyear welt durability for lifelong refinement.',
    features: [
      'Goodyear welt construction',
      'Hand-burnished patina finish',
      'Breathable full-leather lining',
      'Non-slip stacked leather sole'
    ],
    isBestSeller: true,
    isNewArrival: false,
  },
  {
    id: 'sho-03',
    name: 'Velocity Pro Carbon Running',
    category: 'Running',
    price: 210,
    originalPrice: 280,
    discountPercentage: 25,
    rating: 4.8,
    reviewsCount: 215,
    image: '/assets/images/shoes4.png',
    tag: '25% OFF',
    sizes: [40, 41, 42, 43, 44, 45],
    colors: [
      { name: 'Solar Pulse', hex: '#E07A5F' },
      { name: 'Neutral Titanium', hex: '#71717A' },
    ],
    description: 'High-performance distance runner equipped with embedded carbon energy plates and responsive micro-foam energy return.',
    features: [
      'Integrated carbon fiber plate',
      'High-breathability engineered mesh',
      'Dynamic heel lock counter',
      'Enhanced multi-surface traction grip'
    ],
    isBestSeller: true,
    isNewArrival: true,
  },
  {
    id: 'sho-04',
    name: 'Monolith Suede Chelsea Boot',
    category: 'Boot',
    price: 360,
    originalPrice: 410,
    discountPercentage: 12,
    rating: 4.9,
    reviewsCount: 84,
    image: '/assets/images/chelsea_boot.jpg',
    tag: 'New Arrival',
    sizes: [40, 41, 42, 43, 44],
    colors: [
      { name: 'Sand Taupe', hex: '#D4A373' },
      { name: 'Espresso Suede', hex: '#4A3B32' },
    ],
    description: 'Effortless luxury style crafted from water-treated Tuscan calf suede. Features elasticized side gores and pull tab for smooth entry.',
    features: [
      'Tuscan calf suede with stain shield',
      'Elastic lateral stretch panels',
      'Cushioned arch support insole',
      'Handcrafted in small batch atelier'
    ],
    isBestSeller: true,
    isNewArrival: true,
  },
  
  {
    id: 'sho-06',
    name: 'Atelier Venetian Leather Loafer',
    category: 'Loafers',
    price: 310,
    originalPrice: 365,
    discountPercentage: 15,
    rating: 4.9,
    reviewsCount: 76,
    image: '/assets/images/lifestyle_promo.jpg',
    tag: 'Luxury Edition',
    sizes: [40, 41, 42, 43, 44],
    colors: [
      { name: 'Mahogany Brown', hex: '#5C3A21' },
      { name: 'Midnight Navy', hex: '#1D2A44' },
    ],
    description: 'Sleek slip-on profile handcrafted from supple Venetian calfskin. Ideal for elevated business casual and warm climate sophistication.',
    features: [
      'Supple unlined calfskin construction',
      'Hand-stitched apron toe detail',
      'Flex-grooved leather outsole',
      'Padded collar for sockless wear'
    ],
    isBestSeller: true,
    isNewArrival: true,
  },
  
  
  
  {
    id: 'sho-07',
    name: 'Royal Kensington Leather Derby',
    category: 'Oxford',
    price: 395,
    originalPrice: 450,
    discountPercentage: 12,
    rating: 4.95,
    reviewsCount: 62,
    image: '/assets/images/shoes5.png',
    tag: 'Top Rated',
    sizes: [40, 41, 42, 43, 44, 45],
    colors: [
      { name: 'Polished Black', hex: '#111111' },
      { name: 'Deep Burgundy', hex: '#58111A' },
    ],
    description: 'Classic open-lacing English Derby design with meticulous brogue quarter stitching and polished beeswax coat.',
    features: [
      'Open Derby lacing system',
      'Double leather welted sole',
      'Hand-waxed shine finish',
      'Arch-conforming orthotic liner'
    ],
    isBestSeller: false,
    isNewArrival: true,
  },
  
  {
    id: 'sho-08',
    name: 'Phantom Stealth Carbon Runner',
    category: 'Running',
    price: 260,
    originalPrice: 310,
    discountPercentage: 16,
    rating: 4.85,
    reviewsCount: 114,
    image: '/assets/images/shoes3.png',
    tag: 'Pro Series',
    sizes: [40, 41, 42, 43, 44],
    colors: [
      { name: 'Stealth Matte Black', hex: '#1A1A1A' },
      { name: 'Neon Coral', hex: '#FF5733' },
    ],
    description: 'Marathon-grade distance runner featuring seamless woven matrix mesh and propulsion plate energy return.',
    features: [
      'Dual-density energy foam sole',
      'Propulsion shank geometry',
      'Reflective 3M nocturnal detailing',
      'Engineered knit collar'
    ],
    isBestSeller: false,
    isNewArrival: true,
  },
  
  {
    id: 'sho-05',
    name: 'Studio Clean Minimal Low-Top',
    category: 'Sneaker',
    price: 245,
    originalPrice: 290,
    discountPercentage: 15,
    rating: 4.7,
    reviewsCount: 167,
    image: '/assets/images/sneaker_white_tan.jpg',
    tag: 'Essential',
    sizes: [39, 40, 41, 42, 43, 44, 45],
    colors: [
      { name: 'Minimal White / Tan', hex: '#F4EAE1' },
      { name: 'Pure White', hex: '#FFFFFF' },
    ],
    description: 'The definitive luxury daily sneaker. Clean crisp lines with contrasting tan suede counter and custom molded rubber cupsole.',
    features: [
      'Nappa leather upper',
      'Tan suede heel tab accent',
      'Molded removable leather footbed',
      'Durable vulcanized rubber cupsole'
    ],
    isBestSeller: true,
    isNewArrival: true,
  },
  
  
];

export const CATEGORIES: { name: ShoeCategory; count: number; image: string }[] = [
  { name: 'All', count: 28, image: '/assets/images/hero_double_shoes.jpg' },
  { name: 'Sneaker', count: 12, image: '/assets/images/sneaker_white_tan.jpg' },
    { name: 'Running', count: 9, image: '/assets/images/shoes1.png' },
  { name: 'Oxford', count: 8, image: '/assets/images/formal_oxfords.jpg' },
  { name: 'Boot', count: 5, image: '/assets/images/chelsea_boot.jpg' },
    { name: 'Loafers', count: 6, image: '/assets/images/lifestyle_promo.jpg' },

];
