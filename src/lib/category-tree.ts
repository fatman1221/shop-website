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
              }
            ]
          },
          {
            id: 'cotton-balls',
            name: '棉球',
            nameEn: 'Cotton Balls',
            products: []
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
