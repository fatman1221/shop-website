export interface IpProduct {
  id: string;
  name: string;
  categoryId: string;
  image: string;
}

export interface IpProductCategory {
  id: string;
  name: string;
}

export const ipProductCategories: IpProductCategory[] = [
  { id: 'apparel', name: 'Apparel' },
  { id: 'board-games', name: 'Board Games' },
  { id: 'collectibles', name: 'Collectibles' },
  { id: 'figures-statues', name: 'Figures & Statues' },
  { id: 'lifestyle-daily-goods', name: 'Lifestyle & Daily Goods' },
  { id: 'pins-metal-accessories', name: 'Pins & Metal Accessories' },
  { id: 'plush-toys', name: 'Plush Toys' },
];

export const ipProducts: IpProduct[] = [
  {
    id: 'baseball-cap',
    name: 'Baseball Cap',
    categoryId: 'apparel',
    image: '/images/product/Apparel 服饰/Baseball Cap 棒球帽.jpg',
  },
  {
    id: 'hoodie',
    name: 'Hoodie',
    categoryId: 'apparel',
    image: '/images/product/Apparel 服饰/Hoodie 连帽衫.jpg',
  },
  {
    id: 't-shirt',
    name: 'T-Shirt',
    categoryId: 'apparel',
    image: '/images/product/Apparel 服饰/T-Shirt T恤.jpg',
  },
  {
    id: 'card-game-box-set',
    name: 'Card Game Box Set',
    categoryId: 'board-games',
    image: '/images/product/Board Games 桌游/Card Game Box Set 卡牌桌游套盒.jpg',
  },
  {
    id: 'poker',
    name: 'Poker',
    categoryId: 'board-games',
    image: '/images/product/Board Games 桌游/Poker 扑克.jpg',
  },
  {
    id: 'polyhedral-dice',
    name: 'Polyhedral Dice',
    categoryId: 'board-games',
    image: '/images/product/Board Games 桌游/Polyhedral Dice 跑团骰子.jpg',
  },
  {
    id: 'collectible-cards',
    name: 'Collectible Cards',
    categoryId: 'collectibles',
    image: '/images/product/Collectibles 卡牌/Collectible Cards 收藏卡.jpg',
  },
  {
    id: 'holographic-foil-cards',
    name: 'Holographic Foil Cards',
    categoryId: 'collectibles',
    image: '/images/product/Collectibles 卡牌/Holographic Foil Cards 镭射卡.jpg',
  },
  {
    id: 'pvc-figure',
    name: 'PVC Figure',
    categoryId: 'figures-statues',
    image: '/images/product/Figures & Statues 手办与雕像/PVC Figure PVC手办.jpg',
  },
  {
    id: 'resin-statue',
    name: 'Resin Statue',
    categoryId: 'figures-statues',
    image: '/images/product/Figures & Statues 手办与雕像/Resin Statue 树脂雕像.jpg',
  },
  {
    id: 'coffee-mug',
    name: 'Coffee Mug',
    categoryId: 'lifestyle-daily-goods',
    image: '/images/product/Lifestyle & Daily Goods 生活用品/Coffee Mug 马克杯.jpg',
  },
  {
    id: 'keychain',
    name: 'Keychain',
    categoryId: 'lifestyle-daily-goods',
    image: '/images/product/Lifestyle & Daily Goods 生活用品/Keychain 钥匙扣.jpg',
  },
  {
    id: 'tumbler',
    name: 'Tumbler',
    categoryId: 'lifestyle-daily-goods',
    image: '/images/product/Lifestyle & Daily Goods 生活用品/Tumbler 随行杯.jpg',
  },
  {
    id: 'enamel-pin',
    name: 'Enamel Pin',
    categoryId: 'pins-metal-accessories',
    image: '/images/product/Pins & Metal Accessories 徽章与金属配件/Enamel Pin 珐琅徽章.jpg',
  },
  {
    id: 'metal-bookmark',
    name: 'Metal Bookmark',
    categoryId: 'pins-metal-accessories',
    image: '/images/product/Pins & Metal Accessories 徽章与金属配件/Metal Bookmark 金属书签.jpg',
  },
  {
    id: 'metal-keychain',
    name: 'Metal Keychain',
    categoryId: 'pins-metal-accessories',
    image: '/images/product/Pins & Metal Accessories 徽章与金属配件/Metal Keychain 金属钥匙扣.jpg',
  },
  {
    id: 'plush-coin-purse',
    name: 'Plush Coin Purse',
    categoryId: 'plush-toys',
    image: '/images/product/Plush Toys 毛绒玩具/Plush Coin Purse 毛绒零钱包.jpg',
  },
  {
    id: 'plush-figure',
    name: 'Plush Figure',
    categoryId: 'plush-toys',
    image: '/images/product/Plush Toys 毛绒玩具/Plush Figure 毛绒公仔.jpg',
  },
  {
    id: 'plush-keychain',
    name: 'Plush Keychain',
    categoryId: 'plush-toys',
    image: '/images/product/Plush Toys 毛绒玩具/Plush Keychain 毛绒挂件.jpg',
  },
];
