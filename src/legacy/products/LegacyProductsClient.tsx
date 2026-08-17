'use client';

import { useState } from 'react';
import Link from 'next/link';
import WebPImage from '@/components/WebPImage';
import CategoryTree from '@/components/CategoryTree';
import { categoryTree, ProductInfo } from '@/lib/category-tree';

export default function LegacyProductsClient() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProducts, setSelectedProducts] = useState<ProductInfo[]>([]);

  const handleCategoryClick = (categoryId: string, products: ProductInfo[]) => {
    setSelectedCategory(categoryId);
    setSelectedProducts(products);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <aside className="lg:w-80 lg:flex-none lg:border-r lg:border-gray-200 lg:pr-6">
        <div className="lg:sticky lg:top-28">
          <CategoryTree
            categories={categoryTree}
            onCategoryClick={handleCategoryClick}
            selectedCategory={selectedCategory}
          />
        </div>
      </aside>

      <div className="flex-1">
        {selectedProducts.length > 0 ? (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {selectedProducts[0]?.nameEn || 'Products'}
              </h2>
              <p className="text-gray-600">
                {selectedProducts.length} product{selectedProducts.length !== 1 ? 's' : ''} found
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedProducts.map((product) => (
                <div
                  key={product.id}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-200 hover:shadow-md transition-all hover:border-green-500"
                >
                  <div className="relative aspect-[4/3] w-full">
                    <WebPImage
                      src={product.image}
                      alt={product.nameEn}
                      fill
                      className="object-contain w-full h-full transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  <div className="p-4 sm:p-5">
                    <h3 className="text-sm font-medium text-gray-900 truncate mb-1">
                      {product.nameEn}
                    </h3>
                    <p className="text-xs text-gray-500 mb-2">SKU: {product.sku}</p>

                    {product.descriptionEn && (
                      <p className="text-xs text-gray-600 mb-4 line-clamp-2">
                        {product.descriptionEn}
                      </p>
                    )}

                    <Link
                      href={`/products/${product.id}`}
                      className="btn-brand-grad btn-sm block text-center"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Welcome to Our Products
              </h3>
              <p className="text-gray-600 mb-6">
                Browse our comprehensive range of beauty and personal care products.
                Click on any category to view products.
              </p>
              <div className="text-sm text-gray-500">
                <p>Click on categories to expand and view products</p>
                <p>Products will be displayed in the right panel</p>
                <p>Click &quot;Details&quot; to view full product information</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
