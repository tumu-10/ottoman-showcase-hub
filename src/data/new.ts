export interface Product { id: string; name: string; category: ProductCategory; subcategory: string; price: number; description: string; specifications: Record<string, string>; images: string[]; inStock: boolean; featured: boolean; manufacturer: string; model: string; }
 export type ProductCategory = 
 'agricultural' | 'beekeeping' | 'vocational' | 'medical' | 'promotional'; 
 export const categories =
  [ { id: 'agricultural', name: 'Agricultural Tools & Equipment', description: 'Professional farming and agricultural machinery for enhanced productivity', icon: '🚜' }, { id: 'beekeeping', name: 'Beekeeping Equipment', description: 'Complete beekeeping solutions for honey production and hive management', icon: '🐝' }, { id: 'vocational', name: 'Vocational Items', description: 'Professional tools and equipment for various trades and vocations', icon: '🔧' }, { id: 'medical', name: 'Medical Equipment', description: 'Advanced medical devices and healthcare solutions', icon: '🏥' }, { id: 'promotional', name: 'Promotional Items', description: 'Custom branded products and corporate promotional materials', icon: '🎁' } ] as const;
const agriculturalProducts: Product[] = [
   { "id": "1",
     "name": "Bee hives",
     "specifications": { "Type": "Kenya Top Bar (KTB)" },
     "price": 130000,
     "category": "agricultural",
     "subcategory": "Bee Hives",
     "description": "Professional bee hives with Kenya Top Bar (KTB) specifications for efficient honey production",
     "manufacturer": "Ottoman Enterprise", "model": "KTB-001", "inStock": true, "featured": true,
     "images": [ "https://i.imghippo.com/files/LHJ2233dns.jpg" ] },
  { "id": "2", "name": "Beehive stands", "specifications": { "Material": "Metallic Stands" }, "price": 80000, "category": "agricultural", "subcategory": "Bee Hives", "description": "Durable metallic stands for beehive support and stability", "manufacturer": "Ottoman Enterprise", "model": "BHS-001", "inStock": true, "featured": true, "images": ["https://i.imghippo.com/files/VA8671Apc.jpg"] },
  { "id": "3", "name": "Binding wires", "specifications": { "Package": "Rolls" }, "price": 180000, "category": "agricultural", "subcategory": "Farm Tools", "description": "High-quality binding wires in rolls for beekeeping construction", "manufacturer": "Ottoman Enterprise", "model": "BW-001", "inStock": true, "featured": true, "images": ["https://i.imghippo.com/files/YLz8845wB.jpg"] },
  { "id": "4", "name": "Nails 2''", "specifications": { "Size": "2 inches" }, "price": 6000, "category": "agricultural", "subcategory": "Farm Tools", "description": "2-inch nails for beehive construction and maintenance", "manufacturer": "Ottoman Enterprise", "model": "N2-001", "inStock": true, "featured": false, "images": ["https://i.imghippo.com/files/vcZ5508chA.jpg"] },
  { "id": "5", "name": "Beehives overalls", "specifications": { "Type": "Protective overalls" }, "price": 100000, "category": "agricultural", "subcategory": "Protective Gear", "description": "Protective overalls for safe beekeeping operations", "manufacturer": "Ottoman Enterprise", "model": "BO-001", "inStock": true, "featured": true, "images": ["https://i.imghippo.com/files/JaP2017Lrc.jpg"] },
  { "id": "a6", "name": "Gloves", "specifications": { "Type": "Protective gloves" }, "price": 25000, "category": "agricultural", "subcategory": "Protective Gear", "description": "Protective gloves for beekeeping safety", "manufacturer": "Ottoman Enterprise", "model": "G-001", "inStock": true, "featured": false, "images": ["https://i.imghippo.com/files/dHGt6266qcY.jpg"] },
  { "id": "7", "name": "Gumboots", "specifications": { "Type": "Waterproof boots" }, "price": 35000, "category": "agricultural", "subcategory": "Protective Gear", "description": "Waterproof gumboots for beekeeping operations", "manufacturer": "Ottoman Enterprise", "model": "GB-001", "inStock": true, "featured": false, "images": ["https://i.imghippo.com/files/qMW8475hZE.jpg"] } ]
    // ---------------------- Beekeeping Products ----------------------
const beekeepingProducts: Product[] = [
  
  
];

// ---------------------- Vocational Products ----------------------
const vocationalProducts: Product[] = [
  {
    id: "v1",
    name: "Kenwood K-500",
    specifications: { "Type": "Electric" },
    price: 60000,
    category: "vocational",
    subcategory: "Electronics",
    description: "Professional electric Kenwood K-500",
    manufacturer: "Kenwood",
    model: "K-500",
    inStock: true,
    featured: true,
    images: ["https://i.imghippo.com/files/Uzfh5289Elo.webp"]
  },
 
  {
    id: "8",
    name: "NiceBuckets",
    specifications: { "Type": "Plastic Bucket" },
    price: 15000,
    category: "vocational",
    subcategory: "Plumbing",
    description: "Durable plastic buckets",
    manufacturer: "Generic",
    model: "NB-001",
    inStock: true,
    featured: false,
    images: ["https://i.imghippo.com/files/BlyT1706DU.jpg"]
  },
  {
    id: "9",
    name: "Daniela 12 pcs/pack",
    specifications: { "Type": "Pack of 12" },
    price: 15000,
    category: "vocational",
    subcategory: "Carpentry",
    description: "Daniela pack of 12 items",
    manufacturer: "Generic",
    model: "DL-12",
    inStock: true,
    featured: false,
    images: []
  },
  {
    id: "10",
    name: "Italian Made",
    specifications: { "Type": "Chair" },
    price: 120000,
    category: "vocational",
    subcategory: "Carpentry",
    description: "Italian made chair",
    manufacturer: "Italian Brand",
    model: "IM-001",
    inStock: true,
    featured: false,
    images: ["https://i.imghippo.com/files/AGsg9723Wjo.webp"]
  },
  {
    id: "11",
    name: "Nice Plastic armless Chair",
    specifications: { "Type": "Plastic Chair" },
    price: 25000,
    category: "vocational",
    subcategory: "Carpentry",
    description: "Comfortable plastic armless chair",
    manufacturer: "Generic",
    model: "NPAC-001",
    inStock: true,
    featured: false,
    images: ["https://i.imghippo.com/files/fJfX1364bIQ.jpg"]
  },
  {
    id: "12",
    name: "Trolly 4 levels",
    specifications: { "Type": "4-level Trolly" },
    price: 35000,
    category: "vocational",
    subcategory: "Carpentry",
    description: "4-level trolly for storage",
    manufacturer: "Generic",
    model: "TR-004",
    inStock: true,
    featured: false,
    images: ["https://i.imghippo.com/files/aip8779uBI.jpg"]
  },
  {
    id: "13",
    name: "Size 60X80 cm",
    specifications: { "Dimensions": "60X80 cm" },
    price: 35000,
    category: "vocational",
    subcategory: "Carpentry",
    description: "Product with size 60x80 cm",
    manufacturer: "Generic",
    model: "SZ-6080",
    inStock: true,
    featured: false,
    images: []
  },
  {
    id: "14",
    name: "Brand Singer or Equivalent",
    specifications: { "Type": "Sewing Machine" },
    price: 400000,
    category: "vocational",
    subcategory: "Electronics",
    description: "Singer brand or equivalent sewing machine",
    manufacturer: "Singer",
    model: "SNG-001",
    inStock: true,
    featured: true,
    images: ["https://i.imghippo.com/files/mNx4769JM.jpg"]
  },
  {
    id: "15",
    name: "Brand Higlead or Equivalent",
    specifications: { "Type": "Sewing Machine" },
    price: 750000,
    category: "vocational",
    subcategory: "Electronics",
    description: "Higlead brand or equivalent sewing machine",
    manufacturer: "Higlead",
    model: "HG-001",
    inStock: true,
    featured: true,
    images: ["https://i.imghippo.com/files/oy2748Cwo.jpg"]
  },
  {
    id: "16",
    name: "Brand Palie brother KH871",
    specifications: { "Type": "Sewing Machine" },
    price: 500000,
    category: "vocational",
    subcategory: "Electronics",
    description: "Palie Brother KH871 sewing machine",
    manufacturer: "Palie",
    model: "KH871",
    inStock: true,
    featured: false,
    images: ["https://i.imghippo.com/files/lCT4784Gg.jpg"]
  },
  {
    id: "17",
    name: "Brand Philips or Equivalent",
    specifications: { "Type": "Electrical Device" },
    price: 80000,
    category: "vocational",
    subcategory: "Electronics",
    description: "Philips brand or equivalent electrical device",
    manufacturer: "Philips",
    model: "PH-001",
    inStock: true,
    featured: false,
    images: ["https://i.imghippo.com/files/FYzV3721q.jpg"]
  },
  {
    id: "18",
    name: "8 inch metallic scissors",
    specifications: { "Size": "8 inch" },
    price: 17000,
    category: "vocational",
    subcategory: "Carpentry",
    description: "High quality 8 inch metallic scissors",
    manufacturer: "Generic",
    model: "SC-008",
    inStock: true,
    featured: false,
    images: ["https://i.imghippo.com/files/yIoG6913Gpg.jpg"]
  },
  {
    id: "19",
    name: "Tailor Tape 60''/1.5m",
    specifications: { "Length": "60 inch / 1.5 m" },
    price: 15000,
    category: "vocational",
    subcategory: "Carpentry",
    description: "Tailor measuring tape",
    manufacturer: "Generic",
    model: "TT-150",
    inStock: true,
    featured: false,
    images: ["https://i.imghippo.com/files/rx3741Qs.jpg"]
  },
  {
    id: "20",
    name: "Assorted sewing threads",
    specifications: {},
    price: 0,
    category: "vocational",
    subcategory: "Electronics",
    description: "Assorted sewing threads",
    manufacturer: "Generic",
    model: "ST-001",
    inStock: true,
    featured: false,
    images: ["https://i.imghippo.com/files/xPVE4713P.jpg"]
  },
  {
    id: "21",
    name: "Nice stool",
    specifications: {},
    price: 16000,
    category: "vocational",
    subcategory: "Carpentry",
    description: "Nice stool for workshop",
    manufacturer: "Generic",
    model: "ST-001",
    inStock: true,
    featured: false,
    images: ["https://i.imghippo.com/files/ejVE8769rB.jpg"]
  },
  {
    id: "22",
    name: "Lubricant 125ml per bottle",
    specifications: { "Volume": "125ml" },
    price: 1500,
    category: "vocational",
    subcategory: "Electronics",
    description: "Lubricant for sewing machines",
    manufacturer: "Generic",
    model: "LB-125",
    inStock: true,
    featured: false,
    images: ["https://i.imghippo.com/files/vaE4997v.jpg"]
  },
  {
    id: "23",
    name: "Treadle sewing machine (singer)",
    specifications: { "Type": "Manual" },
    price: 350000,
    category: "vocational",
    subcategory: "Electronics",
    description: "Treadle sewing machine by Singer",
    manufacturer: "Singer",
    model: "TS-001",
    inStock: true,
    featured: true,
    images: ["https://i.imghippo.com/files/USlC8514khg.jpg"]
  },
  {
    id: "24",
    name: "Electrical Sewing Machine",
    specifications: { "Type": "Electric" },
    price: 1300000,
    category: "vocational",
    subcategory: "Electronics",
    description: "Electrical sewing machine",
    manufacturer: "Generic",
    model: "ESM-001",
    inStock: true,
    featured: true,
    images: ["https://i.imghippo.com/files/Qog7237VKU.jpg"]
  },
  {
    id: "25",
    name: "Knitting Machine",
    specifications: { "Type": "Knitting" },
    price: 500000,
    category: "vocational",
    subcategory: "Electronics",
    description: "Knitting machine for textile work",
    manufacturer: "Generic",
    model: "KM-001",
    inStock: true,
    featured: false,
    images: ["https://i.imghippo.com/files/lCT4784Gg.jpg"]
  },
  {
    id: "26",
    name: "Overlock Machine Heavy Duty",
    specifications: { "Type": "Heavy Duty" },
    price: 1700000,
    category: "vocational",
    subcategory: "Electronics",
    description: "Heavy duty overlock machine",
    manufacturer: "Generic",
    model: "OM-001",
    inStock: true,
    featured: true,
    images: ["https://i.imghippo.com/files/Qog7237VKU.jpg"]
  },
  {
    id: "27",
    name: "Dress Form",
    specifications: {},
    price: 160000,
    category: "vocational",
    subcategory: "Carpentry",
    description: "Dress form for tailoring",
    manufacturer: "Generic",
    model: "DF-001",
    inStock: true,
    featured: false,
    images: ["https://i.imghippo.com/files/bR1765KM.jpg"]
  },
  {
    id: "28",
    name: "Dummies",
    specifications: {},
    price: 150000,
    category: "vocational",
    subcategory: "Carpentry",
    description: "Tailoring dummies",
    manufacturer: "Generic",
    model: "DM-001",
    inStock: true,
    featured: false,
    images: ["https://i.imghippo.com/files/fHt4741lQ.jpg"]
  },
  {
    id: "29",
    name: "Full Length Mirror",
    specifications: {},
    price: 150000,
    category: "vocational",
    subcategory: "Carpentry",
    description: "Full length mirror for tailoring and display",
    manufacturer: "Generic",
    model: "FLM-001",
    inStock: true,
    featured: false,
    images: ["https://i.imghippo.com/files/TWI4317FiM.jpg"]
  },
  {
    id: "30",
    name: "Juuki Heavy Duty S/M (Commercial)",
    specifications: { "Type": "Commercial" },
    price: 1700000,
    category: "vocational",
    subcategory: "Electronics",
    description: "Juuki Heavy Duty Sewing Machine",
    manufacturer: "Juuki",
    model: "JHDS-001",
    inStock: true,
    featured: true,
    images: ["https://i.imghippo.com/files/oua1754dNM.jpg"]
  },
  {
    id: "31",
    name: "Flat iron",
    specifications: { "Type": "Commercial" },
    price: 65000,
    category: "vocational",
    subcategory: "Electronics",
    description: "Flat iron for clothing",
    manufacturer: "Generic",
    model: "FI-001",
    inStock: true,
    featured: false,
    images: ["https://i.imghippo.com/files/tH3050gF.jpg"]
  },
  {
    id: "32",
    name: "Cutting Outside Scissors (10\")",
    specifications: {},
    price: 21000,
    category: "vocational",
    subcategory: "Carpentry",
    description: "10-inch cutting scissors",
    manufacturer: "Generic",
    model: "COS-010",
    inStock: true,
    featured: false,
    images: ["https://i.imghippo.com/files/pTUT6587BTs.jpg"]
  },
  {
    id: "33",
    name: "Power Stabilizer",
    specifications: {},
    price: 220000,
    category: "vocational",
    subcategory: "Electronics",
    description: "Electrical power stabilizer",
    manufacturer: "Generic",
    model: "PS-001",
    inStock: true,
    featured: false,
    images: ["https://i.imghippo.com/files/QvB6151AZY.jpg"]
  },
  {
    id: "34",
    name: "Power Extension Cables",
    specifications: {},
    price: 55000,
    category: "vocational",
    subcategory: "Electronics",
    description: "Power extension cables for electrical connections",
    manufacturer: "Generic",
    model: "PEC-001",
    inStock: true,
    featured: false,
    images: ["https://i.imghippo.com/files/gzyH7206uKE.jpg"]
  }
];


// ---------------------- Medical Products ----------------------
const medicalProducts: Product[] = [
 
];

// ---------------------- Promotional Products ----------------------
const promotionalProducts: Product[] = [
  {
    id: "37",
    name: "Custom Branded Mug",
    specifications: { "Material": "Ceramic", "Type": "Promotional" },
    price: 5000,
    category: "promotional",
    subcategory: "Custom Gifts",
    description: "Customizable promotional mug with your logo",
    manufacturer: "PromoCorp",
    model: "MUG-001",
    inStock: true,
    featured: false,
    images: ["https://i.imghippo.com/files/rm2815tgU.jpg"]
  },
  {
    id: "38",
    name: "Promotional T-Shirt",
    specifications: { "Material": "Cotton", "Type": "Promotional" },
    price: 12000,
    category: "promotional",
    subcategory: "T-Shirts",
    description: "High-quality promotional T-shirt for events and giveaways",
    manufacturer: "PromoCorp",
    model: "TS-001",
    inStock: true,
    featured: true,
    images: ["https://i.imghippo.com/files/ysdP2591Jqk.jpg"]
  }
];

// ---------------------- Export All Products ----------------------
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


const projects = [
  {
    id: 1,
    title: "Modernization of Al-Rashid Agricultural Complex",
    description: "Complete overhaul of irrigation systems and equipment modernization for a 500-hectare agricultural facility.",
    category: "Agricultural",
    location: "Antalya, Turkey",
    date: "2024",
    teamSize: "12 specialists",
    image: "agricultural-tractor.jpg",
    highlights: [
      "Installed 15 ProField Tractor 2000X units",
      "Deployed smart irrigation covering 500 hectares", 
      "Increased crop yield by 35%",
      "Reduced water consumption by 25%"
    ],
    status: "Completed"
  },
  {
    id: 2,
    title: "Honey Production Facility Setup",
    description: "Establishment of a modern honey production facility with complete beekeeping equipment installation.",
    category: "Beekeeping",
    location: "Izmir, Turkey",
    date: "2024",
    teamSize: "8 specialists",
    image: "beekeeping-hive.jpg",
    highlights: [
      "Set up 200 BeeMax Langstroth hive systems",
      "Installed professional honey extraction facility",
      "Trained 25 beekeepers on modern techniques",
      "Achieved 40% increase in honey production"
    ],
    status: "Completed"
  },
  {
    id: 3,
    title: "Medical Equipment Upgrade - Central Hospital",
    description: "Comprehensive medical equipment installation and staff training for a 300-bed hospital facility.",
    category: "Medical",
    location: "Istanbul, Turkey", 
    date: "2024",
    teamSize: "15 specialists",
    image: "project-medical.jpg",
    highlights: [
      "Installed 50+ pieces of advanced medical equipment",
      "Provided comprehensive staff training",
      "Ensured full regulatory compliance",
      "24/7 support system implementation"
    ],
    status: "In Progress"
  },
  {
    id: 4,
    title: "Industrial Workshop Equipment Installation",
    description: "Complete vocational workshop setup for a technical training institute with modern equipment.",
    category: "Vocational",
    location: "Bursa, Turkey",
    date: "2023",
    teamSize: "10 specialists", 
    image: "vocational-tools.jpg",
    highlights: [
      "Equipped 8 specialized workshops",
      "Installed 200+ professional tools",
      "Trained 50 instructors",
      "Enhanced student learning outcomes by 60%"
    ],
    status: "Completed"
  },
  {
    id: 5,
    title: "Corporate Branding Initiative",
    description: "Large-scale promotional items production and distribution for a multinational corporation.",
    category: "Promotional", 
    location: "Ankara, Turkey",
    date: "2023",
    teamSize: "6 specialists",
    image: "promotional-items.jpg",
    highlights: [
      "Produced 50,000+ branded items",
      "Delivered to 25 international offices",
      "Achieved 95% client satisfaction",
      "Completed 2 weeks ahead of schedule"
    ],
    status: "Completed"
  },
  {
    id: 6,
    title: "Smart Farm Technology Integration",
    description: "Implementation of IoT-enabled agricultural equipment for precision farming operations.",
    category: "Agricultural",
    location: "Konya, Turkey",
    date: "2023", 
    teamSize: "14 specialists",
    image: "project-tech.jpg",
    highlights: [
      "Integrated IoT sensors across 300 hectares",
      "Deployed autonomous farming equipment",
      "Reduced operational costs by 30%",
      "Implemented predictive maintenance system"
    ],
    status: "Completed"
  }
];
