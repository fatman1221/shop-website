import { notFound } from 'next/navigation';
import { getProductById, getProducts } from '@/lib/client-data';
import WebPImage from '@/components/WebPImage';
import Link from 'next/link';
import ProductDetailClient from './ProductDetailClient';

interface ProductDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  // 获取推荐产品（同类别的前3个产品）
  const allProducts = getProducts();
  const recommendedProducts = allProducts
    .filter(p => p.categoryEn === product.categoryEn && p.id !== product.id)
    .slice(0, 3);

  return <ProductDetailClient product={product} recommendedProducts={recommendedProducts} />;
} 