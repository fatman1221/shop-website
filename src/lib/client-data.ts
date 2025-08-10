import { Product, Category, CompanyInfo } from '@/types/product';

// Static product data
const productsData: Product[] = [
  {
    id: '1',
    name: '智能蓝牙音箱',
    nameEn: 'Smart Bluetooth Speaker',
    description: '高品质无线蓝牙音箱，支持多种音频格式，内置麦克风，续航时间长达8小时',
    descriptionEn: 'High-quality wireless Bluetooth speaker with multiple audio format support, built-in microphone, and 8-hour battery life',
    price: 89.99,
    currency: 'USD',
    category: '电子产品',
    categoryEn: 'Electronics',
    image: '/images/products/iker-urteaga-TL5Vy1IM-uA-unsplash.webp',
    amazonUrl: 'https://www.amazon.com/dp/B08XXXXXXX',
    features: ['蓝牙5.0连接', '防水设计', '8小时续航', '内置麦克风', '支持多种音频格式'],
    featuresEn: ['Bluetooth 5.0 Connection', 'Waterproof Design', '8-Hour Battery Life', 'Built-in Microphone', 'Multiple Audio Format Support'],
    specifications: {
      '尺寸': '15cm x 8cm x 8cm',
      '重量': '500g',
      '电池容量': '2000mAh',
      '连接方式': '蓝牙5.0',
      '防水等级': 'IPX4'
    },
    specificationsEn: {
      'Dimensions': '15cm x 8cm x 8cm',
      'Weight': '500g',
      'Battery Capacity': '2000mAh',
      'Connection': 'Bluetooth 5.0',
      'Waterproof Rating': 'IPX4'
    },
    inStock: true,
    rating: 4.5,
    reviewCount: 128,
    sku: 'SPK-001',
    weight: '500g',
    dimensions: '15cm x 8cm x 8cm',
    createdAt: '2024-01-15',
    updatedAt: '2024-01-15'
  },
  {
    id: '2',
    name: '无线充电器',
    nameEn: 'Wireless Charger',
    description: '快速无线充电器，支持多种设备，LED指示灯显示充电状态',
    descriptionEn: 'Fast wireless charger compatible with multiple devices, LED indicator shows charging status',
    price: 49.99,
    currency: 'USD',
    category: '电子产品',
    categoryEn: 'Electronics',
    image: '/images/products/evangeline-sarney-NnsqpLjiA94-unsplash.webp',
    amazonUrl: 'https://www.amazon.com/dp/B09XXXXXXX',
    features: ['15W快速充电', '兼容多种设备', 'LED指示灯', '过充保护', '温度控制'],
    featuresEn: ['15W Fast Charging', 'Multi-Device Compatible', 'LED Indicator', 'Overcharge Protection', 'Temperature Control'],
    specifications: {
      '输出功率': '15W',
      '输入电压': '5V/2A',
      '充电效率': '85%',
      '兼容性': 'Qi标准',
      '材质': 'ABS+PC'
    },
    specificationsEn: {
      'Output Power': '15W',
      'Input Voltage': '5V/2A',
      'Charging Efficiency': '85%',
      'Compatibility': 'Qi Standard',
      'Material': 'ABS+PC'
    },
    inStock: true,
    rating: 4.3,
    reviewCount: 89,
    sku: 'WC-002',
    weight: '200g',
    dimensions: '10cm x 10cm x 2cm',
    createdAt: '2024-01-15',
    updatedAt: '2024-01-15'
  },
  {
    id: '3',
    name: '智能手表',
    nameEn: 'Smart Watch',
    description: '多功能智能手表，健康监测，运动追踪，来电提醒',
    descriptionEn: 'Multi-functional smartwatch with health monitoring, fitness tracking, and call notifications',
    price: 199.99,
    currency: 'USD',
    category: '电子产品',
    categoryEn: 'Electronics',
    image: '/images/products/spruce-refillable-cleaning-OxdnFg-I3Lc-unsplash.webp',
    amazonUrl: 'https://www.amazon.com/dp/B10XXXXXXX',
    features: ['心率监测', 'GPS定位', '运动模式', '防水设计', '7天续航'],
    featuresEn: ['Heart Rate Monitor', 'GPS Tracking', 'Sports Modes', 'Waterproof Design', '7-Day Battery Life'],
    specifications: {
      '屏幕尺寸': '1.4英寸',
      '分辨率': '240x240',
      '电池容量': '300mAh',
      '防水等级': '5ATM',
      '连接方式': '蓝牙5.0'
    },
    specificationsEn: {
      'Screen Size': '1.4 inch',
      'Resolution': '240x240',
      'Battery Capacity': '300mAh',
      'Waterproof Rating': '5ATM',
      'Connection': 'Bluetooth 5.0'
    },
    inStock: true,
    rating: 4.7,
    reviewCount: 256,
    sku: 'SW-003',
    weight: '45g',
    dimensions: '4.5cm x 3.8cm x 1.2cm',
    createdAt: '2024-01-15',
    updatedAt: '2024-01-15'
  },
  {
    id: '4',
    name: '便携式充电宝',
    nameEn: 'Portable Power Bank',
    description: '大容量便携充电宝，支持快充，多接口设计',
    descriptionEn: 'High-capacity portable power bank with fast charging and multiple ports',
    price: 79.99,
    currency: 'USD',
    category: '电子产品',
    categoryEn: 'Electronics',
    image: '/images/products/anastasiya-badun-SbgKbW9VQ5U-unsplash.webp',
    amazonUrl: 'https://www.amazon.com/dp/B11XXXXXXX',
    features: ['20000mAh容量', '18W快充', '多接口输出', 'LED电量显示', '过充保护'],
    featuresEn: ['20000mAh Capacity', '18W Fast Charging', 'Multiple Output Ports', 'LED Power Display', 'Overcharge Protection'],
    specifications: {
      '容量': '20000mAh',
      '输出功率': '18W',
      '输入接口': 'Type-C',
      '输出接口': 'USB-A x2, Type-C',
      '充电时间': '4-6小时'
    },
    specificationsEn: {
      'Capacity': '20000mAh',
      'Output Power': '18W',
      'Input Port': 'Type-C',
      'Output Ports': 'USB-A x2, Type-C',
      'Charging Time': '4-6 hours'
    },
    inStock: true,
    rating: 4.6,
    reviewCount: 167,
    sku: 'PB-004',
    weight: '350g',
    dimensions: '15cm x 7cm x 2cm',
    createdAt: '2024-01-15',
    updatedAt: '2024-01-15'
  }
];

// Static category data
const categoriesData: Category[] = [
  {
    id: '1',
    name: '电子产品',
    nameEn: 'Electronics',
    description: '各类电子设备和配件',
    descriptionEn: 'Various electronic devices and accessories',
    image: '/images/placeholder.webp',
    productCount: 5
  },
  {
    id: '2',
    name: '家居用品',
    nameEn: 'Home & Garden',
    description: '家居装饰和生活用品',
    descriptionEn: 'Home decoration and lifestyle products',
    image: '/images/placeholder.webp',
    productCount: 0
  },
  {
    id: '3',
    name: '服装配饰',
    nameEn: 'Fashion & Accessories',
    description: '时尚服装和配饰',
    descriptionEn: 'Fashion clothing and accessories',
    image: '/images/placeholder.webp',
    productCount: 0
  },
  {
    id: '4',
    name: '运动户外',
    nameEn: 'Sports & Outdoor',
    description: '运动装备和户外用品',
    descriptionEn: 'Sports equipment and outdoor gear',
    image: '/images/placeholder.webp',
    productCount: 0
  }
];

// Static company information
const companyInfo: CompanyInfo = {
  name: 'Brave Dazzle Inc.',
  nameEn: 'Brave Dazzle Inc.',
  description: 'Brave Dazzle Inc. 是一家总部位于美国加利福尼亚州的供应链管理公司。拥有位于中国浙江的温州魅家电子科技有限公司，是亚马逊领先电动牙刷品牌7AM2M的母公司。',
  descriptionEn: 'Brave Dazzle Inc. is a supply chain management company headquartered in California, USA. It owns Wenzhou Charmhome Electronic Technology Co., Ltd., based in Zhejiang, China, and is the parent company of 7AM2M, a leading electric toothbrush brand on Amazon.',
  address: '9080 Telstar Ave, STE 305, El Monte, CA 91731',
  addressEn: '9080 Telstar Ave, STE 305, El Monte, CA 91731',
  phone: '(626)887-0707',
  email: 'samuel@bravedazzle.com',
  website: 'https://bravedazzle.com',
  logo: '/images/1fb50eb1a9e4336065a6e93af66d8d3c.png',
  about: '作为现代科技企业，Brave Dazzle整合了研发、生产、销售和客户服务。公司拥有强大的专业研发团队、先进的制造能力，并持有数十项国内外专利。拥有150多名员工和30,000平方米的生产设施，年产数百万支电动牙刷，并将产品组合扩展到牙线、剃须刀和棉签等个人护理产品。',
  aboutEn: 'As a modern technology enterprise, Brave Dazzle integrates research and development, production, sales, and customer service. The company features a strong professional R&D team, advanced manufacturing capabilities, and holds dozens of domestic and international patents. With over 150 employees and a 30,000-square-meter production facility, the company produces millions of electric toothbrushes annually and has expanded its portfolio to include personal care products such as dental floss, razors, and cotton swabs.',
  services: [
    '研发与生产',
    '供应链管理',
    '品牌运营',
    '全球销售网络',
    '客户服务',
    '质量控制'
  ],
  servicesEn: [
    'Research & Development',
    'Supply Chain Management',
    'Brand Operations',
    'Global Sales Network',
    'Customer Service',
    'Quality Control'
  ],
  mission: '通过创新技术和优质产品，为全球消费者提供卓越的个人护理解决方案',
  missionEn: 'To provide exceptional personal care solutions to global consumers through innovative technology and quality products',
  vision: '成为全球领先的个人护理产品供应链管理公司',
  visionEn: 'To become a leading global supply chain management company for personal care products',
  founded: '2015',
  employees: '150+',
  countries: '6'
};

// Client-side data service functions
export function getProducts(): Product[] {
  return productsData;
}

export function getProductById(id: string): Product | undefined {
  return productsData.find(product => product.id === id);
}

export function getCategories(): Category[] {
  return categoriesData;
}

export function getCompanyInfo(): CompanyInfo {
  return companyInfo;
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase();
  return productsData.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.nameEn.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.descriptionEn.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery) ||
    product.categoryEn.toLowerCase().includes(lowercaseQuery)
  );
} 