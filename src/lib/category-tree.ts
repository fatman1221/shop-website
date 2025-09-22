// 树形分类数据结构
export interface CategoryNode {
  id: string;
  name: string;
  nameEn: string;
  children?: CategoryNode[];
  products?: ProductInfo[];
}

export interface ProductInfo {
  id: string;
  name: string;
  nameEn: string;
  sku: string;
  image: string;
  description?: string;
  descriptionEn?: string;
}

// 根据图片中的分类结构创建树形数据
export const categoryTree: CategoryNode[] = [
  {
    id: 'beauty-personal-care',
    name: '美容与个人护理',
    nameEn: 'Beauty & Personal Care',
    children: [
      {
        id: 'tools-accessories',
        name: '工具与配件',
        nameEn: 'Tools & Accessories',
        children: [
          {
            id: 'cotton-balls-swabs',
            name: '棉球与棉签',
            nameEn: 'Cotton Balls & Swabs',
            children: [
              {
                id: 'cotton-swabs',
                name: '棉签',
                nameEn: 'Cotton Swabs',
                products: [
                  {
                    id: '5',
                    name: 'SNDZ-CSW100 Cotton Swabs',
                    nameEn: 'SNDZ-CSW100 Cotton Swabs',
                    sku: 'CSW100',
                    image: '/images/products/Cotton Swabs/1754458293_1205_2506014983.webp',
                    description: '100-count cotton swabs per pack, stored in a clear hygienic box to prevent dust and facilitate daily use.',
                    descriptionEn: '100-count cotton swabs per pack, stored in a clear hygienic box to prevent dust and facilitate daily use.'
                  },
                  {
                    id: '6',
                    name: 'SNDZ-CSW30 Mini Cotton Swabs',
                    nameEn: 'SNDZ-CSW30 Mini Cotton Swabs',
                    sku: 'CSW30',
                    image: '/images/products/Cotton Swabs/1754460312_1947_2011384649.webp',
                    description: '30 count cotton swabs per pack, stored in a clear hygienic box to prevent dust and facilitate daily use.',
                    descriptionEn: '30 count cotton swabs per pack, stored in a clear hygienic box to prevent dust and facilitate daily use.'
                  },
                  {
                    id: '13',
                    name: 'BRDZ-KM101',
                    nameEn: 'BRDZ-KM101',
                    sku: 'KM101',
                    image: '/images/products/Cotton Swabs/BRDZ-KM101.png',
                    description: 'High-quality cotton swabs for personal care and household use.',
                    descriptionEn: 'High-quality cotton swabs for personal care and household use.'
                  },
                  {
                    id: '14',
                    name: 'BRDZ-KM102',
                    nameEn: 'BRDZ-KM102',
                    sku: 'KM102',
                    image: '/images/products/Cotton Swabs/BRDZ-KM102.png',
                    description: 'Premium cotton swabs for gentle skincare and makeup application.',
                    descriptionEn: 'Premium cotton swabs for gentle skincare and makeup application.'
                  },
                  {
                    id: '15',
                    name: 'BRDZ-KM106',
                    nameEn: 'BRDZ-KM106',
                    sku: 'KM106',
                    image: '/images/products/Cotton Swabs/BRDZ-KM106.png',
                    description: 'Professional cotton swabs for precise cleaning and application.',
                    descriptionEn: 'Professional cotton swabs for precise cleaning and application.'
                  },
                  {
                    id: '16',
                    name: 'BRDZ-KM108',
                    nameEn: 'BRDZ-KM108',
                    sku: 'KM108',
                    image: '/images/products/Cotton Swabs/BRDZ-KM108.png',
                    description: 'Soft cotton swabs for sensitive skin care.',
                    descriptionEn: 'Soft cotton swabs for sensitive skin care.'
                  },
                  {
                    id: '17',
                    name: 'BRDZ-KM109',
                    nameEn: 'BRDZ-KM109',
                    sku: 'KM109',
                    image: '/images/products/Cotton Swabs/BRDZ-KM109.png',
                    description: 'Gentle cotton swabs for baby care and delicate applications.',
                    descriptionEn: 'Gentle cotton swabs for baby care and delicate applications.'
                  },
                  {
                    id: '18',
                    name: 'BRDZ-KM110',
                    nameEn: 'BRDZ-KM110',
                    sku: 'KM110',
                    image: '/images/products/Cotton Swabs/BRDZ-KM110.png',
                    description: 'Multi-purpose cotton swabs for various cleaning tasks.',
                    descriptionEn: 'Multi-purpose cotton swabs for various cleaning tasks.'
                  },
                  {
                    id: '19',
                    name: 'BRDZ-KM112',
                    nameEn: 'BRDZ-KM112',
                    sku: 'KM112',
                    image: '/images/products/Cotton Swabs/BRDZ-KM112.png',
                    description: 'Lint-free cotton swabs for electronics and precision work.',
                    descriptionEn: 'Lint-free cotton swabs for electronics and precision work.'
                  },
                  {
                    id: '20',
                    name: 'BRDZ-KM118',
                    nameEn: 'BRDZ-KM118',
                    sku: 'KM118',
                    image: '/images/products/Cotton Swabs/BRDZ-KM118.png',
                    description: 'Extra-soft cotton swabs for gentle makeup removal.',
                    descriptionEn: 'Extra-soft cotton swabs for gentle makeup removal.'
                  },
                  {
                    id: '21',
                    name: 'BRDZ-KM124',
                    nameEn: 'BRDZ-KM124',
                    sku: 'KM124',
                    image: '/images/products/Cotton Swabs/BRDZ-KM124.png',
                    description: 'Medical-grade cotton swabs for professional use.',
                    descriptionEn: 'Medical-grade cotton swabs for professional use.'
                  },
                  {
                    id: '22',
                    name: 'BRDZ-KM133',
                    nameEn: 'BRDZ-KM133',
                    sku: 'KM133',
                    image: '/images/products/Cotton Swabs/BRDZ-KM133.png',
                    description: 'Eco-friendly cotton swabs for sustainable personal care.',
                    descriptionEn: 'Eco-friendly cotton swabs for sustainable personal care.'
                  },
                  {
                    id: '23',
                    name: 'BRDZ-KM148',
                    nameEn: 'BRDZ-KM148',
                    sku: 'KM148',
                    image: '/images/products/Cotton Swabs/BRDZ-KM148.png',
                    description: 'Travel-size cotton swabs for on-the-go convenience.',
                    descriptionEn: 'Travel-size cotton swabs for on-the-go convenience.'
                  },
                  {
                    id: '24',
                    name: 'BRDZ-KM149',
                    nameEn: 'BRDZ-KM149',
                    sku: 'KM149',
                    image: '/images/products/Cotton Swabs/BRDZ-KM149.png',
                    description: 'Bulk cotton swabs for commercial and household use.',
                    descriptionEn: 'Bulk cotton swabs for commercial and household use.'
                  }
                ]
              },
              {
                id: 'cotton-pads-round',
                name: '棉垫与圆形',
                nameEn: 'Cotton Pads & Round',
                products: [
                  {
                    id: '7',
                    name: 'Cotton Pads',
                    nameEn: 'Cotton Pads',
                    sku: 'CP001',
                    image: '/images/products/Cotton Pads/1753760779_1143_2629376269.eps',
                    description: 'Soft cotton pads for makeup removal and skincare.',
                    descriptionEn: 'Soft cotton pads for makeup removal and skincare.'
                  },
                  {
                    id: '25',
                    name: 'BRDZ-KM213',
                    nameEn: 'BRDZ-KM213',
                    sku: 'KM213',
                    image: '/images/products/Cotton Pads/BRDZ-KM213.png',
                    description: 'High-quality cotton pads for gentle makeup removal.',
                    descriptionEn: 'High-quality cotton pads for gentle makeup removal.'
                  },
                  {
                    id: '26',
                    name: 'BRDZ-KM214',
                    nameEn: 'BRDZ-KM214',
                    sku: 'KM214',
                    image: '/images/products/Cotton Pads/BRDZ-KM214.png',
                    description: 'Premium cotton pads for sensitive skin care.',
                    descriptionEn: 'Premium cotton pads for sensitive skin care.'
                  },
                  {
                    id: '27',
                    name: 'BRDZ-KM215',
                    nameEn: 'BRDZ-KM215',
                    sku: 'KM215',
                    image: '/images/products/Cotton Pads/BRDZ-KM215.png',
                    description: 'Extra-soft cotton pads for delicate applications.',
                    descriptionEn: 'Extra-soft cotton pads for delicate applications.'
                  },
                  {
                    id: '28',
                    name: 'BRDZ-KM216',
                    nameEn: 'BRDZ-KM216',
                    sku: 'KM216',
                    image: '/images/products/Cotton Pads/BRDZ-KM216.png',
                    description: 'Professional cotton pads for skincare routines.',
                    descriptionEn: 'Professional cotton pads for skincare routines.'
                  },
                  {
                    id: '29',
                    name: 'BRDZ-KM217',
                    nameEn: 'BRDZ-KM217',
                    sku: 'KM217',
                    image: '/images/products/Cotton Pads/BRDZ-KM217.png',
                    description: 'Lint-free cotton pads for precise makeup application.',
                    descriptionEn: 'Lint-free cotton pads for precise makeup application.'
                  },
                  {
                    id: '30',
                    name: 'BRDZ-KM218',
                    nameEn: 'BRDZ-KM218',
                    sku: 'KM218',
                    image: '/images/products/Cotton Pads/BRDZ-KM218.png',
                    description: 'Gentle cotton pads for baby care and sensitive skin.',
                    descriptionEn: 'Gentle cotton pads for baby care and sensitive skin.'
                  },
                  {
                    id: '31',
                    name: 'BRDZ-KM219',
                    nameEn: 'BRDZ-KM219',
                    sku: 'KM219',
                    image: '/images/products/Cotton Pads/BRDZ-KM219.png',
                    description: 'Multi-purpose cotton pads for various beauty needs.',
                    descriptionEn: 'Multi-purpose cotton pads for various beauty needs.'
                  },
                  {
                    id: '32',
                    name: 'BRDZ-KM220',
                    nameEn: 'BRDZ-KM220',
                    sku: 'KM220',
                    image: '/images/products/Cotton Pads/BRDZ-KM220.png',
                    description: 'Eco-friendly cotton pads for sustainable beauty routines.',
                    descriptionEn: 'Eco-friendly cotton pads for sustainable beauty routines.'
                  },
                  {
                    id: '33',
                    name: 'BRDZ-KM221',
                    nameEn: 'BRDZ-KM221',
                    sku: 'KM221',
                    image: '/images/products/Cotton Pads/BRDZ-KM221.png',
                    description: 'Travel-size cotton pads for on-the-go convenience.',
                    descriptionEn: 'Travel-size cotton pads for on-the-go convenience.'
                  },
                  {
                    id: '34',
                    name: 'BRDZ-KM222',
                    nameEn: 'BRDZ-KM222',
                    sku: 'KM222',
                    image: '/images/products/Cotton Pads/BRDZ-KM222.png',
                    description: 'Bulk cotton pads for commercial and household use.',
                    descriptionEn: 'Bulk cotton pads for commercial and household use.'
                  },
                  {
                    id: '35',
                    name: 'BRDZ-KM223',
                    nameEn: 'BRDZ-KM223',
                    sku: 'KM223',
                    image: '/images/products/Cotton Pads/BRDZ-KM223.png',
                    description: 'Medical-grade cotton pads for professional use.',
                    descriptionEn: 'Medical-grade cotton pads for professional use.'
                  },
                  {
                    id: '36',
                    name: 'BRDZ-KM224',
                    nameEn: 'BRDZ-KM224',
                    sku: 'KM224',
                    image: '/images/products/Cotton Pads/BRDZ-KM224.png',
                    description: 'Round cotton pads for versatile beauty applications.',
                    descriptionEn: 'Round cotton pads for versatile beauty applications.'
                  }
                ]
              },
              {
                id: 'cotton-balls',
                name: '棉球',
                nameEn: 'Cotton Balls',
                products: [
                  {
                    id: '11',
                    name: 'BRDZ-KM302',
                    nameEn: 'BRDZ-KM302',
                    sku: 'KM302',
                    image: '/images/products/Cotton Balls/BRDZ-KM302.png',
                    description: 'High-quality cotton balls for personal care and household use.',
                    descriptionEn: 'High-quality cotton balls for personal care and household use.'
                  },
                  {
                    id: '12',
                    name: 'BRDZ-KM301',
                    nameEn: 'BRDZ-KM301',
                    sku: 'KM301',
                    image: '/images/products/Cotton Balls/BRDZ-KM301.png',
                    description: 'Premium cotton balls for gentle skincare and makeup application.',
                    descriptionEn: 'Premium cotton balls for gentle skincare and makeup application.'
                  }
                ]
              }
            ]
          },
          {
            id: 'travel-sets-kits',
            name: '旅行套装',
            nameEn: 'Travel Sets & Kits',
            children: [
              {
                id: 'makeup-brushes-set',
                name: '化妆刷套装',
                nameEn: 'Makeup Brushes Set',
                products: []
              },
              {
                id: 'refillable-containers',
                name: '可重复填充容器',
                nameEn: 'Refillable Containers',
                products: []
              },
              {
                id: 'hair-combs',
                name: '梳子',
                nameEn: 'Hair Combs',
                products: []
              },
              {
                id: 'toiletry-bags',
                name: '洗漱包',
                nameEn: 'Toiletry Bags',
                products: []
              }
            ]
          }
        ]
      },
      {
        id: 'oral-care',
        name: '口腔护理',
        nameEn: 'Oral Care',
        children: [
          {
            id: 'dental-floss-picks',
            name: '牙线与牙签',
            nameEn: 'Dental Floss & Picks',
            products: [
              {
                id: '8',
                name: 'Dental Floss',
                nameEn: 'Dental Floss',
                sku: 'DF001',
                image: '/images/products/Dental Floss/1754460088_1436_1936651498.webp',
                description: 'High-quality dental floss for oral hygiene.',
                descriptionEn: 'High-quality dental floss for oral hygiene.'
              },
              {
                id: '9',
                name: 'Floss Picks',
                nameEn: 'Floss Picks',
                sku: 'FP001',
                image: '/images/products/Floss Picks/floss-picks-green.webp',
                description: 'Convenient floss picks for easy cleaning.',
                descriptionEn: 'Convenient floss picks for easy cleaning.'
              },
              {
                id: '10',
                name: 'Interdental Brushes',
                nameEn: 'Interdental Brushes',
                sku: 'IB001',
                image: '/images/products/Interdental Brush/1754461152_1016_2041750517.eps',
                description: 'Interdental brushes for thorough cleaning.',
                descriptionEn: 'Interdental brushes for thorough cleaning.'
              }
            ]
          },
          {
            id: 'powered-toothbrushes',
            name: '电动牙刷及配件',
            nameEn: 'Powered Toothbrushes & Accessories',
            children: [
              {
                id: 'sonic',
                name: '声波',
                nameEn: 'Sonic',
                products: []
              }
            ]
          }
        ]
      },
      {
        id: 'shave-hair-removal',
        name: '剃须与脱毛',
        nameEn: 'Shave & Hair Removal',
        children: [
          {
            id: 'disposable-razors',
            name: '一次性剃须刀',
            nameEn: 'Disposable Razors',
            products: [
              {
                id: '11',
                name: "Men's Disposable Razors",
                nameEn: "Men's Disposable Razors",
                sku: 'MDR001',
                image: '/images/products/Men\'s Disposable Razors/1754458588_1550_2422247713.eps',
                description: 'High-quality disposable razors for men.',
                descriptionEn: 'High-quality disposable razors for men.'
              },
              {
                id: '12',
                name: "Women's Disposable Razors",
                nameEn: "Women's Disposable Razors",
                sku: 'WDR001',
                image: '/images/products/Women\'s Disposable Razors/1754458881_1202_2134009459.webp',
                description: 'Smooth disposable razors for women.',
                descriptionEn: 'Smooth disposable razors for women.'
              }
            ]
          }
        ]
      },
      {
        id: 'bath-bathing-accessories',
        name: '沐浴与洗浴配件',
        nameEn: 'Bath & Bathing Accessories',
        children: [
          {
            id: 'exfoliating-gloves',
            name: '去角质手套',
            nameEn: 'Exfoliating Gloves',
            products: []
          },
          {
            id: 'bath-body-brushes',
            name: '沐浴与身体刷',
            nameEn: 'Bath & Body Brushes',
            products: []
          }
        ]
      },
      {
        id: 'foot-health',
        name: '足部健康',
        nameEn: 'Foot Health',
        children: [
          {
            id: 'insoles',
            name: '鞋垫',
            nameEn: 'Insoles',
            products: []
          }
        ]
      },
      {
        id: 'skin-care',
        name: '护肤',
        nameEn: 'Skin Care',
        children: [
          {
            id: 'face',
            name: '面部',
            nameEn: 'Face',
            children: [
              {
                id: 'cloths-towelettes',
                name: '布巾与湿巾',
                nameEn: 'Cloths & Towelettes',
                products: []
              }
            ]
          }
        ]
      },
      {
        id: 'hair-care',
        name: '护发',
        nameEn: 'Hair Care',
        children: [
          {
            id: 'styling-tools-appliances',
            name: '造型工具与电器',
            nameEn: 'Styling Tools & Appliances',
            children: [
              {
                id: 'hot-air-brushes',
                name: '热风刷',
                nameEn: 'Hot-Air Brushes',
                products: []
              },
              {
                id: 'curling-tongs',
                name: '卷发棒',
                nameEn: 'Curling Tongs',
                products: []
              }
            ]
          }
        ]
      }
    ]
  }
];

// 获取所有产品（扁平化）
export function getAllProducts(): ProductInfo[] {
  const products: ProductInfo[] = [];
  
  function extractProducts(nodes: CategoryNode[]): void {
    nodes.forEach(node => {
      if (node.products) {
        products.push(...node.products);
      }
      if (node.children) {
        extractProducts(node.children);
      }
    });
  }
  
  extractProducts(categoryTree);
  return products;
}

// 根据ID查找产品
export function getProductById(id: string): ProductInfo | undefined {
  const allProducts = getAllProducts();
  return allProducts.find(product => product.id === id);
}

// 根据分类ID查找分类节点
export function getCategoryById(id: string): CategoryNode | undefined {
  function findCategory(nodes: CategoryNode[]): CategoryNode | undefined {
    for (const node of nodes) {
      if (node.id === id) return node;
      if (node.children) {
        const found = findCategory(node.children);
        if (found) return found;
      }
    }
    return undefined;
  }
  
  return findCategory(categoryTree);
}
