import Link from 'next/link';
import { Product } from '@/types/product';
import ImageWithFallback from './ImageWithFallback';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 group">
      {/* Product Image */}
      <div className="relative">
        <ImageWithFallback
          src={product.image}
          alt={product.nameEn}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {!product.inStock && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Out of Stock
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-lg font-medium text-gray-800 mb-3 leading-tight">
          {product.nameEn}
        </h3>
        
        <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-2">
          {product.descriptionEn}
        </p>
        
        <div className="flex justify-center">
          <Link
            href={`/products/${product.id}`}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white font-medium text-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:from-purple-700 hover:via-indigo-700 hover:to-purple-800"
          >
            View Details
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 