'use client';

import Link from 'next/link';
import WebPImage from '@/components/WebPImage';
import { useEffect, useState, useRef } from 'react';
import { getCategories, getCompanyInfo } from '@/lib/client-data';

export default function HomePage() {
  const [showFeatured, setShowFeatured] = useState(false);
  const featuredRef = useRef<HTMLDivElement>(null);
  const categories = getCategories();
  const companyInfo = getCompanyInfo();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (featuredRef.current) {
        const rect = featuredRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setShowFeatured(true);
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Half Image Half Content */}
      <section className="relative h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-purple-50 to-indigo-50">
        {/* Left Side - Content */}
        <div className="w-1/2 h-full flex items-center justify-center">
          <div className="max-w-lg px-8 text-center transition-all duration-1000 ease-out">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-8 tracking-tight leading-tight">
              Quality
              <span className="block font-normal bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 bg-clip-text text-transparent">Daily Essentials</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed font-light">
              Your one-stop shop for premium household essentials. From personal care to home organization, we bring you carefully curated products that make everyday life better.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link
                href="/products"
                className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-purple-700 hover:via-indigo-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Shop Now
              </Link>
              <Link
                href="/contact"
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 hover:text-white transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        {/* Right Side - Image 保持不变 */}
        <div className="w-1/2 h-full flex items-center justify-center">
          <div className="relative w-11/12 h-5/6 max-w-xl max-h-[500px] flex items-center justify-center">
            <div className="relative w-full h-full overflow-hidden rounded-[2rem] shadow-2xl border-4 border-white/20 backdrop-blur-sm">
              <WebPImage
                src="/images/index/mike-petrucci-c9FQyqIECds-unsplash.webp"
                alt="Quality Home Essentials"
                fill
                className="object-cover w-full h-full"
                priority
                sizes="45vw"
              />
              {/* 添加渐变遮罩效果 */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-indigo-500/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section - Soft Background */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
              Product Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of household essentials
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => {
              const categoryImages = [
                '/images/categories/alexander-andrews-Bvr1TxrLGfs-unsplash.webp',
                '/images/categories/vladimir-gladkov-d1hKXgFJUKw-unsplash.webp',
                '/images/categories/artboard-studio-c-KRSHct7Ho-unsplash.webp',
                '/images/categories/etactics-inc-QkwTbJLT9Bs-unsplash.webp'
              ];
              return (
                <div key={category.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 hover:border-purple-200">
                  <div className="aspect-square bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                    <WebPImage
                      src={categoryImages[index] || '/images/placeholder.svg'}
                      alt={category.nameEn}
                      width={300}
                      height={300}
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{category.nameEn}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{category.descriptionEn}</p>
                  <Link
                    href={`/products?category=${category.id}`}
                    className="text-purple-600 hover:text-indigo-600 font-medium text-sm transition-colors duration-300 flex items-center"
                  >
                    View Products
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Section - Clean White Background */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6" ref={featuredRef}>
          <div className={`text-center mb-16 transition-all duration-1000 ${showFeatured ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}> 
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our most popular household products trusted by families worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              '/images/products/iker-urteaga-TL5Vy1IM-uA-unsplash.webp',
              '/images/products/evangeline-sarney-NnsqpLjiA94-unsplash.webp',
              '/images/products/spruce-refillable-cleaning-OxdnFg-I3Lc-unsplash.webp',
              '/images/products/anastasiya-badun-SbgKbW9VQ5U-unsplash.webp'
            ].map((image, index) => (
              <Link href="/products" key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 focus:outline-none border border-gray-100 hover:border-purple-200">
                <div className={`aspect-square transition-all duration-1000 ${showFeatured ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}> 
                  <WebPImage
                    src={image}
                    alt={`Featured Product ${index + 1}`}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 rounded-xl"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-purple-700/60 via-indigo-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-medium text-lg">Product {index + 1}</h3>
                    <p className="text-white/80 text-sm">Explore our products</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Soft Purple Background */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Ready to Start Trading?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Get in touch with us to discuss your import and export needs. We&apos;re here to help you succeed in the global market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-700 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
            <Link
              href="/products"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-purple-700 transition-all duration-300"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
