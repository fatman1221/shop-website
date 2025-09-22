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
            id: 'travel-series',
            name: '旅行系列',
            nameEn: 'Travel Series',
            products: [
              { id: '108', name: 'BRDZ-HC1501', nameEn: 'BRDZ-HC1501', sku: 'HC1501', image: '/images/products/Travel Series/BRDZ-HC1501.png', description: 'Travel hair comb for on-the-go grooming.', descriptionEn: 'Travel hair comb for on-the-go grooming.' },
              { id: '109', name: 'BRDZ-MB1401', nameEn: 'BRDZ-MB1401', sku: 'MB1401', image: '/images/products/Travel Series/BRDZ-MB1401.png', description: 'Mini bottle for travel toiletries.', descriptionEn: 'Mini bottle for travel toiletries.' },
              { id: '110', name: 'BRDZ-MB1402', nameEn: 'BRDZ-MB1402', sku: 'MB1402', image: '/images/products/Travel Series/BRDZ-MB1402.png', description: 'Compact travel container for liquids.', descriptionEn: 'Compact travel container for liquids.' },
              { id: '111', name: 'BRDZ-TB1801', nameEn: 'BRDZ-TB1801', sku: 'TB1801', image: '/images/products/Travel Series/BRDZ-TB1801.png', description: 'Travel toothbrush with protective case.', descriptionEn: 'Travel toothbrush with protective case.' },
              { id: '112', name: 'BRDZ-TB1802', nameEn: 'BRDZ-TB1802', sku: 'TB1802', image: '/images/products/Travel Series/BRDZ-TB1802.png', description: 'Portable toothbrush ideal for travel.', descriptionEn: 'Portable toothbrush ideal for travel.' }
            ]
          },
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
                products: [
                  { id: '94', name: 'BRDZ-EA317', nameEn: 'BRDZ-EA317', sku: 'EA317', image: '/images/products/Electric Toothbrush/BRDZ-EA317.jpg', description: 'Electric toothbrush with sonic technology for deep cleaning.', descriptionEn: 'Electric toothbrush with sonic technology for deep cleaning.' },
                  { id: '95', name: 'BRDZ-EA318', nameEn: 'BRDZ-EA318', sku: 'EA318', image: '/images/products/Electric Toothbrush/BRDZ-EA318.jpg', description: 'Compact sonic electric toothbrush for daily use.', descriptionEn: 'Compact sonic electric toothbrush for daily use.' },
                  { id: '96', name: 'BRDZ-EA323', nameEn: 'BRDZ-EA323', sku: 'EA323', image: '/images/products/Electric Toothbrush/BRDZ-EA323.jpg', description: 'Ergonomic handle, efficient plaque removal.', descriptionEn: 'Ergonomic handle, efficient plaque removal.' },
                  { id: '97', name: 'BRDZ-EA325', nameEn: 'BRDZ-EA325', sku: 'EA325', image: '/images/products/Electric Toothbrush/BRDZ-EA325.jpg', description: 'Multiple modes for customized brushing experience.', descriptionEn: 'Multiple modes for customized brushing experience.' },
                  { id: '98', name: 'BRDZ-EA355', nameEn: 'BRDZ-EA355', sku: 'EA355', image: '/images/products/Electric Toothbrush/BRDZ-EA355.jpg', description: 'Long battery life with fast charging.', descriptionEn: 'Long battery life with fast charging.' },
                  { id: '99', name: 'BRDZ-EA357', nameEn: 'BRDZ-EA357', sku: 'EA357', image: '/images/products/Electric Toothbrush/BRDZ-EA357.jpg', description: 'Smart timer for dentist-recommended brushing time.', descriptionEn: 'Smart timer for dentist-recommended brushing time.' },
                  { id: '100', name: 'BRDZ-EA370', nameEn: 'BRDZ-EA370', sku: 'EA370', image: '/images/products/Electric Toothbrush/BRDZ-EA370.jpg', description: 'Water-resistant design, ideal for daily hygiene.', descriptionEn: 'Water-resistant design, ideal for daily hygiene.' },
                  { id: '101', name: 'BRDZ-EB511', nameEn: 'BRDZ-EB511', sku: 'EB511', image: '/images/products/Electric Toothbrush/BRDZ-EB511.jpg', description: 'Soft bristles for sensitive gums.', descriptionEn: 'Soft bristles for sensitive gums.' },
                  { id: '102', name: 'BRDZ-EB516', nameEn: 'BRDZ-EB516', sku: 'EB516', image: '/images/products/Electric Toothbrush/BRDZ-EB516.jpg', description: 'Powerful sonic vibration for effective cleaning.', descriptionEn: 'Powerful sonic vibration for effective cleaning.' },
                  { id: '103', name: 'BRDZ-EB520', nameEn: 'BRDZ-EB520', sku: 'EB520', image: '/images/products/Electric Toothbrush/BRDZ-EB520.png', description: 'Replaceable brush heads, hygienic storage.', descriptionEn: 'Replaceable brush heads, hygienic storage.' },
                  { id: '104', name: 'BRDZ-ED710', nameEn: 'BRDZ-ED710', sku: 'ED710', image: '/images/products/Electric Toothbrush/BRDZ-ED710.png', description: 'Travel-friendly sonic toothbrush with case.', descriptionEn: 'Travel-friendly sonic toothbrush with case.' },
                  { id: '105', name: 'BRDZ-ED716', nameEn: 'BRDZ-ED716', sku: 'ED716', image: '/images/products/Electric Toothbrush/BRDZ-ED716.jpg', description: 'Advanced sonic technology with multiple intensities.', descriptionEn: 'Advanced sonic technology with multiple intensities.' }
                ]
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
                id: '68',
                name: "Women's Disposable Razors",
                nameEn: "Women's Disposable Razors",
                sku: 'WDR001',
                image: '/images/products/Women\'s Disposable Razors/1754458881_1202_2134009459.webp',
                description: 'Smooth disposable razors for women.',
                descriptionEn: 'Smooth disposable razors for women.'
              }
            ]
          },
          {
            id: 'eyebrow-razor',
            name: '眉毛剃刀',
            nameEn: 'Eyebrow Razor',
            products: [
              {
                id: '69',
                name: 'BRDZ-S1C00T06',
                nameEn: 'BRDZ-S1C00T06',
                sku: 'ER001',
                image: '/images/products/Eyebrow Razor/BRDZ-S1C00T06.png',
                description: 'Precision eyebrow razor for delicate shaping.',
                descriptionEn: 'Precision eyebrow razor for delicate shaping.'
              },
              {
                id: '70',
                name: 'BRDZ-S1P00201',
                nameEn: 'BRDZ-S1P00201',
                sku: 'ER002',
                image: '/images/products/Eyebrow Razor/BRDZ-S1P00201.png',
                description: 'Professional eyebrow razor for salon use.',
                descriptionEn: 'Professional eyebrow razor for salon use.'
              }
            ]
          },
          {
            id: 'shaving-razor',
            name: '剃须刀',
            nameEn: 'Shaving Razor',
            products: [
              {
                id: '71',
                name: 'BRDZ-K-360',
                nameEn: 'BRDZ-K-360',
                sku: 'SR001',
                image: '/images/products/Shaving Razor/BRDZ-K-360.png',
                description: 'High-quality shaving razor for smooth shaving.',
                descriptionEn: 'High-quality shaving razor for smooth shaving.'
              },
              {
                id: '72',
                name: 'BRDZ-LA-8803',
                nameEn: 'BRDZ-LA-8803',
                sku: 'SR002',
                image: '/images/products/Shaving Razor/BRDZ-LA-8803.png',
                description: 'Professional shaving razor for barber use.',
                descriptionEn: 'Professional shaving razor for barber use.'
              },
              {
                id: '73',
                name: 'BRDZ-LV-1269',
                nameEn: 'BRDZ-LV-1269',
                sku: 'SR003',
                image: '/images/products/Shaving Razor/BRDZ-LV-1269.png',
                description: 'Premium shaving razor with ergonomic design.',
                descriptionEn: 'Premium shaving razor with ergonomic design.'
              },
              {
                id: '74',
                name: 'BRDZ-LV-3060',
                nameEn: 'BRDZ-LV-3060',
                sku: 'SR004',
                image: '/images/products/Shaving Razor/BRDZ-LV-3060.png',
                description: 'Multi-blade shaving razor for close shave.',
                descriptionEn: 'Multi-blade shaving razor for close shave.'
              },
              {
                id: '75',
                name: 'BRDZ-LV-3081',
                nameEn: 'BRDZ-LV-3081',
                sku: 'SR005',
                image: '/images/products/Shaving Razor/BRDZ-LV-3081.png',
                description: 'Gentle shaving razor for sensitive skin.',
                descriptionEn: 'Gentle shaving razor for sensitive skin.'
              },
              {
                id: '76',
                name: 'BRDZ-LV-3090',
                nameEn: 'BRDZ-LV-3090',
                sku: 'SR006',
                image: '/images/products/Shaving Razor/BRDZ-LV-3090.png',
                description: 'Advanced shaving razor with precision blades.',
                descriptionEn: 'Advanced shaving razor with precision blades.'
              },
              {
                id: '77',
                name: 'BRDZ-LV-3260',
                nameEn: 'BRDZ-LV-3260',
                sku: 'SR007',
                image: '/images/products/Shaving Razor/BRDZ-LV-3260.png',
                description: 'Compact shaving razor for travel use.',
                descriptionEn: 'Compact shaving razor for travel use.'
              },
              {
                id: '78',
                name: 'BRDZ-LV-3293',
                nameEn: 'BRDZ-LV-3293',
                sku: 'SR008',
                image: '/images/products/Shaving Razor/BRDZ-LV-3293.png',
                description: 'Luxury shaving razor with premium finish.',
                descriptionEn: 'Luxury shaving razor with premium finish.'
              },
              {
                id: '79',
                name: 'BRDZ-LV-3301',
                nameEn: 'BRDZ-LV-3301',
                sku: 'SR009',
                image: '/images/products/Shaving Razor/BRDZ-LV-3301.png',
                description: 'Professional shaving razor for barbers.',
                descriptionEn: 'Professional shaving razor for barbers.'
              },
              {
                id: '80',
                name: 'BRDZ-LV-5021',
                nameEn: 'BRDZ-LV-5021',
                sku: 'SR010',
                image: '/images/products/Shaving Razor/BRDZ-LV-5021.png',
                description: 'Heavy-duty shaving razor for thick beards.',
                descriptionEn: 'Heavy-duty shaving razor for thick beards.'
              },
              {
                id: '81',
                name: 'BRDZ-LV-8617',
                nameEn: 'BRDZ-LV-8617',
                sku: 'SR011',
                image: '/images/products/Shaving Razor/BRDZ-LV-8617.png',
                description: 'Classic shaving razor with traditional design.',
                descriptionEn: 'Classic shaving razor with traditional design.'
              },
              {
                id: '82',
                name: 'BRDZ-LV-8717',
                nameEn: 'BRDZ-LV-8717',
                sku: 'SR012',
                image: '/images/products/Shaving Razor/BRDZ-LV-8717.png',
                description: 'Modern shaving razor with innovative features.',
                descriptionEn: 'Modern shaving razor with innovative features.'
              },
              {
                id: '83',
                name: 'BRDZ-LV-8732',
                nameEn: 'BRDZ-LV-8732',
                sku: 'SR013',
                image: '/images/products/Shaving Razor/BRDZ-LV-8732.png',
                description: 'Eco-friendly shaving razor for sustainable grooming.',
                descriptionEn: 'Eco-friendly shaving razor for sustainable grooming.'
              },
              {
                id: '84',
                name: 'BRDZ-LV-8751',
                nameEn: 'BRDZ-LV-8751',
                sku: 'SR014',
                image: '/images/products/Shaving Razor/BRDZ-LV-8751.png',
                description: 'Precision shaving razor for detailed grooming.',
                descriptionEn: 'Precision shaving razor for detailed grooming.'
              },
              {
                id: '85',
                name: 'BRDZ-LV-8756',
                nameEn: 'BRDZ-LV-8756',
                sku: 'SR015',
                image: '/images/products/Shaving Razor/BRDZ-LV-8756.png',
                description: 'Multi-purpose shaving razor for various needs.',
                descriptionEn: 'Multi-purpose shaving razor for various needs.'
              },
              {
                id: '86',
                name: 'BRDZ-LV-8759',
                nameEn: 'BRDZ-LV-8759',
                sku: 'SR016',
                image: '/images/products/Shaving Razor/BRDZ-LV-8759.png',
                description: 'Advanced shaving razor with cutting-edge technology.',
                descriptionEn: 'Advanced shaving razor with cutting-edge technology.'
              },
              {
                id: '87',
                name: 'BRDZ-LY-2304',
                nameEn: 'BRDZ-LY-2304',
                sku: 'SR017',
                image: '/images/products/Shaving Razor/BRDZ-LY-2304.png',
                description: 'Specialty shaving razor for specific grooming needs.',
                descriptionEn: 'Specialty shaving razor for specific grooming needs.'
              },
              {
                id: '88',
                name: 'BRDZ-LY-2701',
                nameEn: 'BRDZ-LY-2701',
                sku: 'SR018',
                image: '/images/products/Shaving Razor/BRDZ-LY-2701.png',
                description: 'Professional shaving razor for salon use.',
                descriptionEn: 'Professional shaving razor for salon use.'
              },
              {
                id: '89',
                name: 'BRDZ-MA-6620',
                nameEn: 'BRDZ-MA-6620',
                sku: 'SR019',
                image: '/images/products/Shaving Razor/BRDZ-MA-6620.png',
                description: 'Premium shaving razor with superior quality.',
                descriptionEn: 'Premium shaving razor with superior quality.'
              },
              {
                id: '90',
                name: 'BRDZ-X-03',
                nameEn: 'BRDZ-X-03',
                sku: 'SR020',
                image: '/images/products/Shaving Razor/BRDZ-X-03.png',
                description: 'Compact shaving razor for easy handling.',
                descriptionEn: 'Compact shaving razor for easy handling.'
              },
              {
                id: '91',
                name: 'BRDZ-X-08',
                nameEn: 'BRDZ-X-08',
                sku: 'SR021',
                image: '/images/products/Shaving Razor/BRDZ-X-08.png',
                description: 'Versatile shaving razor for multiple uses.',
                descriptionEn: 'Versatile shaving razor for multiple uses.'
              },
              {
                id: '92',
                name: 'BRDZ-X7-001',
                nameEn: 'BRDZ-X7-001',
                sku: 'SR022',
                image: '/images/products/Shaving Razor/BRDZ-X7-001.png',
                description: 'Innovative shaving razor with unique design.',
                descriptionEn: 'Innovative shaving razor with unique design.'
              },
              {
                id: '93',
                name: 'BRDZ-X7-002',
                nameEn: 'BRDZ-X7-002',
                sku: 'SR023',
                image: '/images/products/Shaving Razor/BRDZ-X7-002.png',
                description: 'Advanced shaving razor with modern features.',
                descriptionEn: 'Advanced shaving razor with modern features.'
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
            products: [
              {
                id: '106',
                name: 'BRDZ-BB1701',
                nameEn: 'BRDZ-BB1701',
                sku: 'BB1701',
                image: '/images/products/Bath & Bathing Accessories/BRDZ-BB1701.png',
                description: 'High-quality bath brush for effective body cleansing.',
                descriptionEn: 'High-quality bath brush for effective body cleansing.'
              },
              {
                id: '107',
                name: 'BRDZ-EG1601',
                nameEn: 'BRDZ-EG1601',
                sku: 'EG1601',
                image: '/images/products/Bath & Bathing Accessories/BRDZ-EG1601.png',
                description: 'Exfoliating glove for gentle and thorough exfoliation.',
                descriptionEn: 'Exfoliating glove for gentle and thorough exfoliation.'
              }
            ]
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
