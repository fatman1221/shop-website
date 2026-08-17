'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ipProductCategories, ipProducts } from '@/data/ip-products';

export default function ProductsClient() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const visibleProducts = selectedCategory === 'all'
    ? ipProducts
    : ipProducts.filter((product) => product.categoryId === selectedCategory);
  const selectedCategoryName = selectedCategory === 'all'
    ? 'All Products'
    : ipProductCategories.find((category) => category.id === selectedCategory)?.name ?? 'Products';

  const getCategoryCount = (categoryId: string) => (
    ipProducts.filter((product) => product.categoryId === categoryId).length
  );

  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
      <aside className="lg:sticky lg:top-28 lg:w-64 lg:flex-none">
        <h2 className="mb-4 text-sm font-semibold uppercase text-gray-500">
          Categories
        </h2>

        <div className="flex gap-2 overflow-x-auto pb-2 lg:block lg:space-y-1 lg:overflow-visible lg:pb-0">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`flex min-h-11 shrink-0 items-center justify-between gap-4 rounded-md px-4 py-3 text-left text-sm transition-colors lg:w-full ${
              selectedCategory === 'all'
                ? 'bg-[var(--brand-start)] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span className="font-medium">All Products</span>
            <span className={selectedCategory === 'all' ? 'text-white/75' : 'text-gray-500'}>
              {ipProducts.length}
            </span>
          </button>

          {ipProductCategories.map((category) => {
            const isSelected = selectedCategory === category.id;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setSelectedCategory(category.id)}
                className={`flex min-h-11 shrink-0 items-center justify-between gap-4 rounded-md px-4 py-3 text-left text-sm transition-colors lg:w-full ${
                  isSelected
                    ? 'bg-[var(--brand-start)] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="font-medium">{category.name}</span>
                <span className={isSelected ? 'text-white/75' : 'text-gray-500'}>
                  {getCategoryCount(category.id)}
                </span>
              </button>
            );
          })}
        </div>
      </aside>

      <section className="min-w-0 flex-1" aria-live="polite">
        <div className="mb-6 flex items-end justify-between gap-4 border-b border-gray-200 pb-4">
          <h2 className="text-2xl font-semibold text-gray-950 md:text-3xl">
            {selectedCategoryName}
          </h2>
          <p className="shrink-0 text-sm text-gray-500">
            {visibleProducts.length} product{visibleProducts.length === 1 ? '' : 's'}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {visibleProducts.map((product) => {
            const category = ipProductCategories.find((item) => item.id === product.categoryId);

            return (
              <article
                key={product.id}
                className="group overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>
                <div className="border-t border-gray-100 p-5">
                  <p className="mb-2 text-xs font-semibold uppercase text-[var(--brand-start)]">
                    {category?.name}
                  </p>
                  <h3 className="text-lg font-semibold text-gray-950">
                    {product.name}
                  </h3>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
