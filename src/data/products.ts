export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  description: string;
  specifications: Record<string, string>;
  images: string[];
  inStock: boolean;
  featured: boolean;
  manufacturer: string;
  model: string;
}

export type ProductCategory = 'agricultural' | 'beekeeping' | 'vocational' | 'medical' | 'promotional';

export const categories = [
  { 
    id: 'agricultural', 
    name: 'Agricultural Tools & Equipment', 
    description: 'Professional farming and agricultural machinery for enhanced productivity',
    icon: '🚜'
  },
  { 
    id: 'beekeeping', 
    name: 'Beekeeping Equipment', 
    description: 'Complete beekeeping solutions for honey production and hive management',
    icon: '🐝'
  },
  { 
    id: 'vocational', 
    name: 'Vocational Items', 
    description: 'Professional tools and equipment for various trades and vocations',
    icon: '🔧'
  },
  { 
    id: 'medical', 
    name: 'Medical Equipment', 
    description: 'Advanced medical devices and healthcare solutions',
    icon: '🏥'
  },
  { 
    id: 'promotional', 
    name: 'Promotional Items', 
    description: 'Custom branded products and corporate promotional materials',
    icon: '🎁'
  }
] as const;

// Agricultural Products (50+ items)
const agriculturalProducts: Product[] = [
  {
    id: 'ag-001',
    name: 'ProField Tractor 2000X',
    category: 'agricultural',
    price: 85000,
    description: 'Heavy-duty agricultural tractor with advanced hydraulic system and precision GPS guidance.',
    specifications: {
      'Engine Power': '200 HP',
      'Fuel Type': 'Diesel',
      'Weight': '8,500 kg',
      'Max Speed': '40 km/h',
      'Hydraulic Capacity': '120 L/min'
    },
    images: ['https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800', 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=800'],
    inStock: true,
    featured: true,
    manufacturer: 'ProField Industries',
    model: '2000X'
  },
  {
    id: 'ag-002',
    name: 'SmartSeed Planter Pro',
    category: 'agricultural',
    price: 45000,
    description: 'Precision seed planting equipment with variable rate technology for optimal crop placement.',
    specifications: {
      'Planting Width': '12 rows',
      'Seed Capacity': '2,000 kg',
      'GPS Compatible': 'Yes',
      'Depth Control': 'Pneumatic',
      'Power Requirement': '150 HP'
    },
    images: ['https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800'],
    inStock: true,
    featured: false,
    manufacturer: 'SmartSeed Tech',
    model: 'Planter Pro'
  },
  {
    id: 'ag-003',
    name: 'HarvestMax Combine 500',
    category: 'agricultural',
    price: 320000,
    description: 'Advanced combine harvester with intelligent grain separation and yield monitoring.',
    specifications: {
      'Cutting Width': '9.1 m',
      'Grain Tank': '12,000 L',
      'Engine Power': '450 HP',
      'Cleaning System': 'Multi-stage',
      'Threshing Type': 'Axial-flow'
    },
    images: ['https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800', 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=800'],
    inStock: true,
    featured: true,
    manufacturer: 'HarvestMax Corp',
    model: 'Combine 500'
  },
  // Continue with more agricultural products...
  {
    id: 'ag-004',
    name: 'IrrigatePro Sprinkler System',
    category: 'agricultural',
    price: 12000,
    description: 'Automated irrigation system with smart water management and remote monitoring.',
    specifications: {
      'Coverage Area': '50 hectares',
      'Water Pressure': '2.5-4.0 bar',
      'Control Type': 'Digital',
      'Material': 'Galvanized Steel',
      'Warranty': '5 years'
    },
    images: ['https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800'],
    inStock: true,
    featured: false,
    manufacturer: 'IrrigatePro',
    model: 'SP-5000'
  },
  {
    id: 'ag-005',
    name: 'SoilMaster Cultivator',
    category: 'agricultural',
    price: 18500,
    description: 'Heavy-duty soil cultivation equipment for field preparation and weed control.',
    specifications: {
      'Working Width': '4.5 m',
      'Tine Type': 'Spring-loaded',
      'Depth Range': '5-30 cm',
      'Frame Material': 'High-strength steel',
      'Weight': '2,800 kg'
    },
    images: ['https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=800'],
    inStock: true,
    featured: false,
    manufacturer: 'SoilMaster',
    model: 'SM-450'
  }
  // Add 45+ more agricultural products following this pattern...
];

// Generate additional agricultural products programmatically
for (let i = 6; i <= 55; i++) {
  const productTypes = [
    'Fertilizer Spreader', 'Disc Harrow', 'Hay Baler', 'Mower', 'Plow', 'Tedder',
    'Rake', 'Seeder', 'Sprayer', 'Trailer', 'Manure Spreader', 'Chisel Plow'
  ];
  const manufacturers = ['AgriTech', 'FarmMaster', 'CropPro', 'FieldKing', 'AgroMax'];
  
  const productType = productTypes[(i - 6) % productTypes.length];
  const manufacturer = manufacturers[(i - 6) % manufacturers.length];
  
  agriculturalProducts.push({
    id: `ag-${i.toString().padStart(3, '0')}`,
    name: `${manufacturer} ${productType} ${Math.floor(Math.random() * 9000) + 1000}`,
    category: 'agricultural',
    price: Math.floor(Math.random() * 50000) + 5000,
    description: `Professional ${productType.toLowerCase()} designed for efficient agricultural operations.`,
    specifications: {
      'Model Year': '2024',
      'Warranty': `${Math.floor(Math.random() * 3) + 2} years`,
      'Power Requirement': `${Math.floor(Math.random() * 200) + 50} HP`,
      'Weight': `${Math.floor(Math.random() * 5000) + 1000} kg`,
      'Certification': 'CE, ISO 9001'
    },
    images: ['https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800'],
    inStock: Math.random() > 0.1,
    featured: Math.random() > 0.8,
    manufacturer,
    model: `${productType.replace(' ', '')}-${Math.floor(Math.random() * 9000) + 1000}`
  });
}

// Beekeeping Products (50+ items)
const beekeepingProducts: Product[] = [
  {
    id: 'bk-001',
    name: 'BeeMax Langstroth Hive System',
    category: 'beekeeping',
    price: 285,
    description: 'Complete 10-frame Langstroth hive with frames, foundation, and ventilated cover.',
    specifications: {
      'Frame Count': '10 frames',
      'Material': 'Cedar wood',
      'Dimensions': '50.8 x 40.6 x 24.4 cm',
      'Frame Type': 'Assembled',
      'Foundation': 'Wax-coated'
    },
    images: ['https://images.unsplash.com/photo-1498936178812-4b2e558d2937?w=800', 'https://images.unsplash.com/photo-1498936178812-4b2e558d2937?w=800'],
    inStock: true,
    featured: true,
    manufacturer: 'BeeMax',
    model: 'LH-10'
  },
  {
    id: 'bk-002',
    name: 'Professional Bee Suit Ultra',
    category: 'beekeeping',
    price: 165,
    description: 'Premium ventilated bee suit with attached veil and reinforced knees.',
    specifications: {
      'Material': 'Cotton-polyester blend',
      'Veil Type': 'Round, fencing style',
      'Ventilation': 'Ultra-ventilated',
      'Pockets': '6 cargo pockets',
      'Sizes': 'S-XXXL available'
    },
    images: ['https://images.unsplash.com/photo-1498936178812-4b2e558d2937?w=800'],
    inStock: true,
    featured: true,
    manufacturer: 'BeePro',
    model: 'Ultra-V3'
  }
  // Continue pattern for 48+ more beekeeping products...
];

// Generate additional beekeeping products
for (let i = 3; i <= 52; i++) {
  const productTypes = [
    'Smoker', 'Hive Tool', 'Honey Extractor', 'Uncapping Knife', 'Queen Excluder',
    'Feeder', 'Bee Brush', 'Frame Puller', 'Honey Tank', 'Wax Melter'
  ];
  const manufacturers = ['BeeMax', 'HoneyPro', 'HiveTech', 'BeeKeeper Supply', 'ApiMax'];
  
  const productType = productTypes[(i - 3) % productTypes.length];
  const manufacturer = manufacturers[(i - 3) % manufacturers.length];
  
  beekeepingProducts.push({
    id: `bk-${i.toString().padStart(3, '0')}`,
    name: `${manufacturer} ${productType} ${Math.floor(Math.random() * 900) + 100}`,
    category: 'beekeeping',
    price: Math.floor(Math.random() * 800) + 50,
    description: `Professional ${productType.toLowerCase()} for efficient beekeeping operations.`,
    specifications: {
      'Material': 'Stainless steel',
      'Warranty': `${Math.floor(Math.random() * 2) + 1} year`,
      'Certification': 'Food grade',
      'Origin': 'EU manufactured',
      'Weight': `${Math.floor(Math.random() * 5) + 0.5} kg`
    },
    images: ['https://images.unsplash.com/photo-1498936178812-4b2e558d2937?w=800'],
    inStock: Math.random() > 0.05,
    featured: Math.random() > 0.85,
    manufacturer,
    model: `${productType.replace(' ', '')}-${Math.floor(Math.random() * 900) + 100}`
  });
}

// Continue this pattern for vocational, medical, and promotional products...
// For brevity, I'll create the basic structure and a few examples for each

const vocationalProducts: Product[] = [];
const medicalProducts: Product[] = [];
const promotionalProducts: Product[] = [];

// Generate vocational products
for (let i = 1; i <= 50; i++) {
  const productTypes = [
    'Power Drill', 'Angle Grinder', 'Circular Saw', 'Welding Machine', 'Safety Helmet',
    'Work Gloves', 'Tool Box', 'Measuring Tape', 'Level', 'Socket Set'
  ];
  const manufacturers = ['ProTool', 'WorkMaster', 'IndustrialMax', 'TradePro', 'CraftTech'];
  
  const productType = productTypes[(i - 1) % productTypes.length];
  const manufacturer = manufacturers[(i - 1) % manufacturers.length];
  
  vocationalProducts.push({
    id: `vc-${i.toString().padStart(3, '0')}`,
    name: `${manufacturer} ${productType} ${Math.floor(Math.random() * 9000) + 1000}`,
    category: 'vocational',
    price: Math.floor(Math.random() * 2000) + 100,
    description: `Professional-grade ${productType.toLowerCase()} for demanding work environments.`,
    specifications: {
      'Power Rating': `${Math.floor(Math.random() * 2000) + 500}W`,
      'Warranty': `${Math.floor(Math.random() * 3) + 1} years`,
      'Safety Rating': 'IP65',
      'Material': 'Industrial grade',
      'Certification': 'CE, UL Listed'
    },
    images: ['https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800', 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800'],
    inStock: Math.random() > 0.1,
    featured: Math.random() > 0.85,
    manufacturer,
    model: `${productType.replace(' ', '')}-${Math.floor(Math.random() * 9000) + 1000}`
  });
}

// Generate medical products
for (let i = 1; i <= 50; i++) {
  const productTypes = [
    'Patient Monitor', 'Defibrillator', 'X-Ray Machine', 'Ultrasound Scanner', 'IV Pump',
    'Surgical Light', 'Operating Table', 'Autoclave', 'Ventilator', 'ECG Machine'
  ];
  const manufacturers = ['MediTech', 'HealthMax', 'BioMed Pro', 'MedDevice Inc', 'CareMax'];
  
  const productType = productTypes[(i - 1) % productTypes.length];
  const manufacturer = manufacturers[(i - 1) % manufacturers.length];
  
  medicalProducts.push({
    id: `md-${i.toString().padStart(3, '0')}`,
    name: `${manufacturer} ${productType} ${Math.floor(Math.random() * 9000) + 1000}`,
    category: 'medical',
    price: Math.floor(Math.random() * 100000) + 10000,
    description: `Advanced ${productType.toLowerCase()} for modern healthcare facilities.`,
    specifications: {
      'FDA Approved': 'Yes',
      'Warranty': `${Math.floor(Math.random() * 3) + 2} years`,
      'Power Supply': '220V AC',
      'Certification': 'FDA, CE, ISO 13485',
      'Service': '24/7 support available'
    },
    images: ['https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800', 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800'],
    inStock: Math.random() > 0.15,
    featured: Math.random() > 0.8,
    manufacturer,
    model: `${productType.replace(' ', '')}-${Math.floor(Math.random() * 9000) + 1000}`
  });
}

// Generate promotional products
for (let i = 1; i <= 50; i++) {
  const productTypes = [
    'Custom Mug', 'Branded Pen', 'Logo T-Shirt', 'Promotional Bag', 'Business Card Holder',
    'Desk Calendar', 'USB Drive', 'Stress Ball', 'Keychain', 'Notebook'
  ];
  const manufacturers = ['PromoMax', 'BrandCraft', 'CustomPro', 'PromotionalPlus', 'LogoMaster'];
  
  const productType = productTypes[(i - 1) % productTypes.length];
  const manufacturer = manufacturers[(i - 1) % manufacturers.length];
  
  promotionalProducts.push({
    id: `pm-${i.toString().padStart(3, '0')}`,
    name: `${manufacturer} ${productType} ${Math.floor(Math.random() * 900) + 100}`,
    category: 'promotional',
    price: Math.floor(Math.random() * 500) + 10,
    description: `High-quality ${productType.toLowerCase()} perfect for corporate branding and marketing.`,
    specifications: {
      'Customization': 'Logo printing available',
      'Material': 'Premium quality',
      'Min Order': `${Math.floor(Math.random() * 50) + 25} pieces`,
      'Lead Time': `${Math.floor(Math.random() * 10) + 5} business days`,
      'Colors': 'Multiple options'
    },
    images: ['https://images.unsplash.com/photo-1581090464777-f3220bbe1e8b?w=800', 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800'],
    inStock: true,
    featured: Math.random() > 0.9,
    manufacturer,
    model: `${productType.replace(' ', '')}-${Math.floor(Math.random() * 900) + 100}`
  });
}

export const allProducts: Product[] = [
  ...agriculturalProducts,
  ...beekeepingProducts,
  ...vocationalProducts,
  ...medicalProducts,
  ...promotionalProducts
];

export const getProductsByCategory = (category: ProductCategory): Product[] => {
  return allProducts.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return allProducts.filter(product => product.featured);
};

export const getProductById = (id: string): Product | undefined => {
  return allProducts.find(product => product.id === id);
};
