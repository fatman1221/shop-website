'use client';

import { useState } from 'react';
import WebPImage from '@/components/WebPImage';
import Link from 'next/link';
import { Product } from '@/types/product';

interface ProductDetailClientProps {
  product: Product;
  recommendedProducts: Product[];
}

export default function ProductDetailClient({ product, recommendedProducts }: ProductDetailClientProps) {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  // 模拟多张产品图片
  const productImages = [
    product.image,
    '/images/products/evangeline-sarney-NnsqpLjiA94-unsplash.webp',
    '/images/products/spruce-refillable-cleaning-OxdnFg-I3Lc-unsplash.webp',
    '/images/products/anastasiya-badun-SbgKbW9VQ5U-unsplash.webp'
  ];

  // 模拟亚马逊链接
  const amazonLink = `https://www.amazon.com/s?k=${encodeURIComponent(product.nameEn)}`;

  return (
    <div className="bg-white min-h-screen">
      {/* Product Details - Main Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Main Product Image */}
          <div className="relative">
            <div
              className="cursor-zoom-in group relative"
              onClick={() => setShowModal(true)}
            >
              <WebPImage
                src={productImages[selectedImage]}
                alt={product.nameEn}
                width={600}
                height={600}
                className="w-full h-96 object-contain rounded-2xl shadow-lg border border-gray-200 group-hover:border-purple-300 transition-all duration-300 bg-white"
              />
              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-purple-600 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <span className="inline-block text-xs font-semibold bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 px-3 py-1 rounded-full mb-4">
                {product.categoryEn}
              </span>
              <h1 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
                {product.nameEn}
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {product.descriptionEn}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Benefits</h3>
              <ul className="space-y-3">
                {product.featuresEn.map((feature, index) => (
                  <li key={index} className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Info */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-800 mb-3">Product Information</h4>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span className="font-medium">Weight:</span>
                  <span>{product.weight}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Dimensions:</span>
                  <span>{product.dimensions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Material:</span>
                  <span>Premium Quality</span>
                </div>
              </div>
            </div>

            {/* Buy Button - Positioned at bottom right */}
            <div className="flex justify-end pt-4">
              <a
                href={amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:from-purple-700 hover:via-indigo-700 hover:to-purple-800"
              >
                Buy
              </a>
            </div>
          </div>
        </div>

        {/* Product Images Gallery */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Product Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {productImages.map((image, index) => (
              <div
                key={index}
                className={`relative cursor-pointer group rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  selectedImage === index 
                    ? 'border-purple-500 shadow-lg' 
                    : 'border-gray-200 hover:border-purple-300'
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <WebPImage
                  src={image}
                  alt={`${product.nameEn} - Image ${index + 1}`}
                  width={300}
                  height={300}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {selectedImage === index && (
                  <div className="absolute inset-0 bg-purple-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Product Details</h3>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-4">
              This premium quality product is designed to meet the highest standards of quality and durability. 
              Made with carefully selected materials and manufactured using advanced techniques, it ensures 
              long-lasting performance and reliability.
            </p>
            <p className="mb-4">
              Our products undergo rigorous quality control processes to guarantee that each item meets our 
              strict quality standards. We are committed to providing you with products that not only meet 
              your needs but exceed your expectations.
            </p>
            <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Features:</h4>
            <ul className="space-y-2">
              <li>High-quality materials for durability</li>
              <li>Precision engineering for optimal performance</li>
              <li>Safety tested and certified</li>
              <li>Easy to use and maintain</li>
              <li>Environmentally friendly design</li>
            </ul>
          </div>
        </div>

        {/* Recommended Products */}
        {recommendedProducts.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">You Might Also Like</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recommendedProducts.map((recProduct) => (
                <Link
                  key={recProduct.id}
                  href={`/products/${recProduct.id}`}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <div className="relative">
                    <WebPImage
                      src={recProduct.image}
                      alt={recProduct.nameEn}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-medium text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                      {recProduct.nameEn}
                    </h4>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {recProduct.descriptionEn}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Modal for zoomed image */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white" onClick={() => setShowModal(false)}>
          <div className="relative w-full h-full flex items-center justify-center p-8" onClick={e => e.stopPropagation()}>
            <WebPImage
              src={productImages[selectedImage]}
              alt={product.nameEn}
              width={1200}
              height={1200}
              className="w-full h-full max-h-[85vh] object-contain"
            />
            <button
              className="absolute top-6 right-6 bg-gray-800/80 backdrop-blur-sm text-white rounded-full p-3 hover:bg-gray-800 transition-all duration-300 shadow-lg hover:scale-110 z-10"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* Navigation arrows for multiple images */}
            {productImages.length > 1 && (
              <>
                <button
                  className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-gray-800/80 backdrop-blur-sm text-white rounded-full p-3 hover:bg-gray-800 transition-all duration-300 shadow-lg hover:scale-110 disabled:opacity-50 z-10"
                  onClick={() => setSelectedImage(prev => prev > 0 ? prev - 1 : productImages.length - 1)}
                  aria-label="Previous image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-gray-800/80 backdrop-blur-sm text-white rounded-full p-3 hover:bg-gray-800 transition-all duration-300 shadow-lg hover:scale-110 z-10"
                  onClick={() => setSelectedImage(prev => prev < productImages.length - 1 ? prev + 1 : 0)}
                  aria-label="Next image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
            {/* Image counter */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800/80 text-white px-4 py-2 rounded-full text-sm z-10">
              {selectedImage + 1} / {productImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 