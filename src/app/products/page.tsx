'use client';

import { useState, useEffect } from 'react';
import { getProducts, getCategories, searchProducts } from '@/lib/client-data';
import { Product, Category } from '@/types/product';
import ProductCard from '@/components/ProductCard';
import WebPImage from '@/components/WebPImage';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const allProducts = getProducts();
    const allCategories = getCategories();
    setProducts(allProducts);
    setCategories(allCategories);
    setFilteredProducts(allProducts);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    let filtered = products;

    // Filter by categories
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product => selectedCategories.includes(product.categoryEn));
    }

    // Filter by search query
    if (searchQuery) {
      filtered = searchProducts(searchQuery);
      if (selectedCategories.length > 0) {
        filtered = filtered.filter(product => selectedCategories.includes(product.categoryEn));
      }
    }

    setFilteredProducts(filtered);
  }, [selectedCategories, searchQuery, products]);

  const clearFilters = () => {
    setSelectedCategories([]);
    setSearchQuery('');
  };

  const toggleCategory = (categoryName: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryName)
        ? prev.filter(cat => cat !== categoryName)
        : [...prev, categoryName]
    );
  };

  const productImages = [
    '/images/products/iker-urteaga-TL5Vy1IM-uA-unsplash.webp',
    '/images/products/evangeline-sarney-NnsqpLjiA94-unsplash.webp',
    '/images/products/spruce-refillable-cleaning-OxdnFg-I3Lc-unsplash.webp',
    '/images/products/anastasiya-badun-SbgKbW9VQ5U-unsplash.webp'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Products</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our comprehensive range of high-quality products sourced from around the world
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Sidebar - Filters */}
        <div className="lg:w-1/4">
          <div className="bg-white rounded-2xl shadow-md p-6 mb-8 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Filters</h3>
            {/* Search */}
            <div className="mb-6">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                Search Products
              </label>
              <input
                type="text"
                id="search"
                placeholder="Search by name, description, or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2 border-2 border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-gray-50 text-gray-800 placeholder-gray-400"
              />
            </div>
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Categories
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <label key={category.id} className={`flex items-center px-4 py-2 rounded-full border-2 cursor-pointer transition-all text-sm font-medium
                    ${selectedCategories.includes(category.nameEn)
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-purple-600 shadow-md'
                      : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-purple-50 hover:border-purple-200'}
                  `}>
                    <input
                      type="checkbox"
                      value={category.nameEn}
                      checked={selectedCategories.includes(category.nameEn)}
                      onChange={() => toggleCategory(category.nameEn)}
                      className="mr-2 accent-purple-600"
                    />
                    {category.nameEn} <span className="ml-1 text-xs">({category.productCount})</span>
                  </label>
                ))}
              </div>
            </div>
            {/* Active Filters */}
            {(selectedCategories.length > 0 || searchQuery) && (
              <div className="mt-6 pt-4 border-t border-gray-100">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Active Filters:</h4>
                <div className="space-y-2">
                  {selectedCategories.length > 0 && (
                    <span className="inline-block bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                      Categories: {selectedCategories.map(cat => cat).join(', ')}
                      <button
                        onClick={() => setSelectedCategories([])}
                        className="ml-2 text-purple-600 hover:text-purple-800"
                      >
                        ×
                      </button>
                    </span>
                  )}
                  {searchQuery && (
                    <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      Search: "{searchQuery}"
                      <button
                        onClick={() => setSearchQuery('')}
                        className="ml-2 text-gray-600 hover:text-gray-800"
                      >
                        ×
                      </button>
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Side - Products */}
        <div className="lg:w-3/4">
          {/* Results Summary */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </div>

          {/* Products Grid */}
          {isLoading ? (
            <div className="text-center py-12">
              <div className="text-purple-300 text-6xl mb-4">⏳</div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">Loading...</h3>
              <p className="text-gray-600">Please wait while we load the products</p>
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-purple-300 text-6xl mb-4">🔍</div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">No products found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search criteria or select a different category
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 