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
            children: [
              {
                id: 'dental-floss',
                name: '牙线',
                nameEn: 'Dental Floss',
                products: [
                  {
                    id: '37',
                    name: 'BRDZ-FD001',
                    nameEn: 'BRDZ-FD001',
                    sku: 'FD001',
                    image: '/images/products/Dental Floss/BRDZ-FD001.png',
                    description: 'High-quality dental floss for effective oral hygiene.',
                    descriptionEn: 'High-quality dental floss for effective oral hygiene.'
                  },
                  {
                    id: '38',
                    name: 'BRDZ-FD002',
                    nameEn: 'BRDZ-FD002',
                    sku: 'FD002',
                    image: '/images/products/Dental Floss/BRDZ-FD002.png',
                    description: 'Premium dental floss for gentle cleaning.',
                    descriptionEn: 'Premium dental floss for gentle cleaning.'
                  },
                  {
                    id: '39',
                    name: 'BRDZ-FD003',
                    nameEn: 'BRDZ-FD003',
                    sku: 'FD003',
                    image: '/images/products/Dental Floss/BRDZ-FD003.png',
                    description: 'Extra-strong dental floss for tough cleaning.',
                    descriptionEn: 'Extra-strong dental floss for tough cleaning.'
                  },
                  {
                    id: '40',
                    name: 'BRDZ-FD004',
                    nameEn: 'BRDZ-FD004',
                    sku: 'FD004',
                    image: '/images/products/Dental Floss/BRDZ-FD004.png',
                    description: 'Flavored dental floss for fresh breath.',
                    descriptionEn: 'Flavored dental floss for fresh breath.'
                  },
                  {
                    id: '41',
                    name: 'BRDZ-FD005',
                    nameEn: 'BRDZ-FD005',
                    sku: 'FD005',
                    image: '/images/products/Dental Floss/BRDZ-FD005.png',
                    description: 'Waxed dental floss for smooth cleaning.',
                    descriptionEn: 'Waxed dental floss for smooth cleaning.'
                  },
                  {
                    id: '42',
                    name: 'BRDZ-FD006',
                    nameEn: 'BRDZ-FD006',
                    sku: 'FD006',
                    image: '/images/products/Dental Floss/BRDZ-FD006.png',
                    description: 'Unwaxed dental floss for natural cleaning.',
                    descriptionEn: 'Unwaxed dental floss for natural cleaning.'
                  },
                  {
                    id: '43',
                    name: 'BRDZ-FD007',
                    nameEn: 'BRDZ-FD007',
                    sku: 'FD007',
                    image: '/images/products/Dental Floss/BRDZ-FD007.png',
                    description: 'Biodegradable dental floss for eco-friendly care.',
                    descriptionEn: 'Biodegradable dental floss for eco-friendly care.'
                  }
                ]
              },
              {
                id: 'floss-picks',
                name: '牙签',
                nameEn: 'Floss Picks',
                products: [
                  {
                    id: '44',
                    name: 'BRDZ-401',
                    nameEn: 'BRDZ-401',
                    sku: 'FP401',
                    image: '/images/products/Floss Picks/BRDZ-401.png',
                    description: 'Convenient floss picks for easy cleaning.',
                    descriptionEn: 'Convenient floss picks for easy cleaning.'
                  },
                  {
                    id: '45',
                    name: 'BRDZ-4013',
                    nameEn: 'BRDZ-4013',
                    sku: 'FP4013',
                    image: '/images/products/Floss Picks/BRDZ-4013.png',
                    description: 'Professional floss picks for thorough cleaning.',
                    descriptionEn: 'Professional floss picks for thorough cleaning.'
                  },
                  {
                    id: '46',
                    name: 'BRDZ-402',
                    nameEn: 'BRDZ-402',
                    sku: 'FP402',
                    image: '/images/products/Floss Picks/BRDZ-402.png',
                    description: 'Gentle floss picks for sensitive gums.',
                    descriptionEn: 'Gentle floss picks for sensitive gums.'
                  },
                  {
                    id: '47',
                    name: 'BRDZ-BT002',
                    nameEn: 'BRDZ-BT002',
                    sku: 'FPBT002',
                    image: '/images/products/Floss Picks/BRDZ-BT002.png',
                    description: 'Bulk floss picks for commercial use.',
                    descriptionEn: 'Bulk floss picks for commercial use.'
                  },
                  {
                    id: '48',
                    name: 'BRDZ-SFR004',
                    nameEn: 'BRDZ-SFR004',
                    sku: 'FPSFR004',
                    image: '/images/products/Floss Picks/BRDZ-SFR004.png',
                    description: 'Specialty floss picks for specific needs.',
                    descriptionEn: 'Specialty floss picks for specific needs.'
                  },
                  {
                    id: '49',
                    name: 'BRDZ-SFR033',
                    nameEn: 'BRDZ-SFR033',
                    sku: 'FPSFR033',
                    image: '/images/products/Floss Picks/BRDZ-SFR033.png',
                    description: 'Advanced floss picks for professional cleaning.',
                    descriptionEn: 'Advanced floss picks for professional cleaning.'
                  },
                  {
                    id: '50',
                    name: 'BRDZ-SFR036',
                    nameEn: 'BRDZ-SFR036',
                    sku: 'FPSFR036',
                    image: '/images/products/Floss Picks/BRDZ-SFR036.png',
                    description: 'Precision floss picks for tight spaces.',
                    descriptionEn: 'Precision floss picks for tight spaces.'
                  },
                  {
                    id: '51',
                    name: 'BRDZ-SFR058',
                    nameEn: 'BRDZ-SFR058',
                    sku: 'FPSFR058',
                    image: '/images/products/Floss Picks/BRDZ-SFR058.png',
                    description: 'Multi-purpose floss picks for various needs.',
                    descriptionEn: 'Multi-purpose floss picks for various needs.'
                  },
                  {
                    id: '52',
                    name: 'SNDZ-2508-FLP90',
                    nameEn: 'SNDZ-2508-FLP90',
                    sku: 'FLP90',
                    image: '/images/products/Floss Picks/SNDZ-2508-FLP90.png',
                    description: 'Professional floss picks for dental care.',
                    descriptionEn: 'Professional floss picks for dental care.'
                  }
                ]
              },
              {
                id: 'interdental-brushes',
                name: '牙间刷',
                nameEn: 'Interdental Brushes',
                products: [
                  {
                    id: '53',
                    name: 'BRDZ-501',
                    nameEn: 'BRDZ-501',
                    sku: 'IB501',
                    image: '/images/products/Interdental Brush/BRDZ-501.png',
                    description: 'High-quality interdental brushes for thorough cleaning.',
                    descriptionEn: 'High-quality interdental brushes for thorough cleaning.'
                  },
                  {
                    id: '54',
                    name: 'BRDZ-502',
                    nameEn: 'BRDZ-502',
                    sku: 'IB502',
                    image: '/images/products/Interdental Brush/BRDZ-502.png',
                    description: 'Gentle interdental brushes for sensitive gums.',
                    descriptionEn: 'Gentle interdental brushes for sensitive gums.'
                  },
                  {
                    id: '55',
                    name: 'BRDZ-503',
                    nameEn: 'BRDZ-503',
                    sku: 'IB503',
                    image: '/images/products/Interdental Brush/BRDZ-503.png',
                    description: 'Professional interdental brushes for dental care.',
                    descriptionEn: 'Professional interdental brushes for dental care.'
                  },
                  {
                    id: '56',
                    name: 'BRDZ-BT1501',
                    nameEn: 'BRDZ-BT1501',
                    sku: 'IBBT1501',
                    image: '/images/products/Interdental Brush/BRDZ-BT1501.png',
                    description: 'Bulk interdental brushes for commercial use.',
                    descriptionEn: 'Bulk interdental brushes for commercial use.'
                  },
                  {
                    id: '57',
                    name: 'BRDZ-BT1502',
                    nameEn: 'BRDZ-BT1502',
                    sku: 'IBBT1502',
                    image: '/images/products/Interdental Brush/BRDZ-BT1502.png',
                    description: 'Specialty interdental brushes for specific needs.',
                    descriptionEn: 'Specialty interdental brushes for specific needs.'
                  },
                  {
                    id: '58',
                    name: 'BRDZ-BT1503',
                    nameEn: 'BRDZ-BT1503',
                    sku: 'IBBT1503',
                    image: '/images/products/Interdental Brush/BRDZ-BT1503.png',
                    description: 'Advanced interdental brushes for professional use.',
                    descriptionEn: 'Advanced interdental brushes for professional use.'
                  },
                  {
                    id: '59',
                    name: 'BRDZ-BT1504',
                    nameEn: 'BRDZ-BT1504',
                    sku: 'IBBT1504',
                    image: '/images/products/Interdental Brush/BRDZ-BT1504.png',
                    description: 'Precision interdental brushes for tight spaces.',
                    descriptionEn: 'Precision interdental brushes for tight spaces.'
                  },
                  {
                    id: '60',
                    name: 'BRDZ-BT1505',
                    nameEn: 'BRDZ-BT1505',
                    sku: 'IBBT1505',
                    image: '/images/products/Interdental Brush/BRDZ-BT1505.png',
                    description: 'Multi-size interdental brushes for various gaps.',
                    descriptionEn: 'Multi-size interdental brushes for various gaps.'
                  },
                  {
                    id: '61',
                    name: 'BRDZ-BT1506',
                    nameEn: 'BRDZ-BT1506',
                    sku: 'IBBT1506',
                    image: '/images/products/Interdental Brush/BRDZ-BT1506.png',
                    description: 'Eco-friendly interdental brushes for sustainable care.',
                    descriptionEn: 'Eco-friendly interdental brushes for sustainable care.'
                  },
                  {
                    id: '62',
                    name: 'BRDZ-BT1507',
                    nameEn: 'BRDZ-BT1507',
                    sku: 'IBBT1507',
                    image: '/images/products/Interdental Brush/BRDZ-BT1507.png',
                    description: 'Travel interdental brushes for on-the-go care.',
                    descriptionEn: 'Travel interdental brushes for on-the-go care.'
                  },
                  {
                    id: '63',
                    name: 'BRDZ-BT1508',
                    nameEn: 'BRDZ-BT1508',
                    sku: 'IBBT1508',
                    image: '/images/products/Interdental Brush/BRDZ-BT1508.png',
                    description: 'Professional interdental brushes for dental offices.',
                    descriptionEn: 'Professional interdental brushes for dental offices.'
                  },
                  {
                    id: '64',
                    name: 'BRDZ-SP001',
                    nameEn: 'BRDZ-SP001',
                    sku: 'IBSP001',
                    image: '/images/products/Interdental Brush/BRDZ-SP001.png',
                    description: 'Specialty interdental brushes for specific conditions.',
                    descriptionEn: 'Specialty interdental brushes for specific conditions.'
                  },
                  {
                    id: '65',
                    name: 'BRDZ-SP004',
                    nameEn: 'BRDZ-SP004',
                    sku: 'IBSP004',
                    image: '/images/products/Interdental Brush/BRDZ-SP004.png',
                    description: 'Advanced interdental brushes for complex cleaning.',
                    descriptionEn: 'Advanced interdental brushes for complex cleaning.'
                  },
                  {
                    id: '66',
                    name: 'BRDZ-SP005',
                    nameEn: 'BRDZ-SP005',
                    sku: 'IBSP005',
                    image: '/images/products/Interdental Brush/BRDZ-SP005.png',
                    description: 'Premium interdental brushes for optimal oral health.',
                    descriptionEn: 'Premium interdental brushes for optimal oral health.'
                  }
                ]
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
