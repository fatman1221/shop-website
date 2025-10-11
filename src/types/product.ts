export interface Product {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  price: number;
  currency: string;
  category: string;
  categoryEn: string;
  image: string;
  amazonUrl: string;
  features: string[];
  featuresEn: string[];
  specifications: Record<string, string>;
  specificationsEn: Record<string, string>;
  inStock: boolean;
  rating: number;
  reviewCount: number;
  sku: string;
  weight: string;
  dimensions: string;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  image: string;
  productCount: number;
}

export interface CompanyInfo {
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  address: string;
  addressEn: string;
  phone: string;
  email: string;
  website: string;
  logo: string;
  about: string;
  aboutEn: string;
  services: string[];
  servicesEn: string[];
  mission: string;
  missionEn: string;
  vision: string;
  visionEn: string;
  founded: string;
  employees: string;
  countries: string;
} 