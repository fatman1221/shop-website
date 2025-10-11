import fs from 'fs';
import path from 'path';
import { Product, Category, CompanyInfo } from '@/types/product';

const dataDirectory = path.join(process.cwd(), 'src/data');

// 读取产品数据
export function getProducts(): Product[] {
  const filePath = path.join(dataDirectory, 'products.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContents);
  return data.products;
}

// 根据ID获取产品
export function getProductById(id: string): Product | null {
  const products = getProducts();
  return products.find(product => product.id === id) || null;
}

// 根据分类获取产品
export function getProductsByCategory(category: string): Product[] {
  const products = getProducts();
  return products.filter(product => product.category === category);
}

// 获取所有分类
export function getCategories(): Category[] {
  const products = getProducts();
  const categoryMap = new Map<string, Category>();
  
  products.forEach(product => {
    if (!categoryMap.has(product.category)) {
      categoryMap.set(product.category, {
        id: product.category,
        name: product.category,
        nameEn: product.categoryEn,
        description: `${product.category}类产品`,
        descriptionEn: `${product.categoryEn} products`,
        image: `/images/categories/${product.category.toLowerCase()}.jpg`,
        productCount: 0
      });
    }
    // 更新产品数量
    const category = categoryMap.get(product.category)!;
    category.productCount++;
  });
  
  return Array.from(categoryMap.values());
}

// 读取公司信息
export function getCompanyInfo(): CompanyInfo {
  const filePath = path.join(dataDirectory, 'company.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

// 搜索产品
export function searchProducts(query: string): Product[] {
  const products = getProducts();
  const lowercaseQuery = query.toLowerCase();
  
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery)
  );
}

// 添加新产品（用于管理后台）
export function addProduct(product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Product {
  const products = getProducts();
  const newProduct: Product = {
    ...product,
    id: (products.length + 1).toString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  products.push(newProduct);
  
  const filePath = path.join(dataDirectory, 'products.json');
  fs.writeFileSync(filePath, JSON.stringify({ products }, null, 2));
  
  return newProduct;
}

// 更新产品（用于管理后台）
export function updateProduct(id: string, updates: Partial<Product>): Product | null {
  const products = getProducts();
  const index = products.findIndex(product => product.id === id);
  
  if (index === -1) return null;
  
  products[index] = {
    ...products[index],
    ...updates,
    updatedAt: new Date().toISOString()
  };
  
  const filePath = path.join(dataDirectory, 'products.json');
  fs.writeFileSync(filePath, JSON.stringify({ products }, null, 2));
  
  return products[index];
}

// 删除产品（用于管理后台）
export function deleteProduct(id: string): boolean {
  const products = getProducts();
  const filteredProducts = products.filter(product => product.id !== id);
  
  if (filteredProducts.length === products.length) return false;
  
  const filePath = path.join(dataDirectory, 'products.json');
  fs.writeFileSync(filePath, JSON.stringify({ products: filteredProducts }, null, 2));
  
  return true;
} 