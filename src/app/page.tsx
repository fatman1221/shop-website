'use client';

import Link from 'next/link';
import WebPImage from '@/components/WebPImage';
import { useEffect, useState, useRef } from 'react';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Hero carousel images
  const heroImages = [
    '/images/index/1753755312_1970_2290195981.webp',
    '/images/index/1754455341_1846_1658765743.webp',
    '/images/index/1754455369_1617_2614519433.webp',
  ];

  // Product showcase images  
  const productImages = [
    '/images/index/1754455931_1763_2110344371.webp',
    '/images/index/1754455939_1348_2560386097.webp',
    '/images/index/1754455969_1908_2393891865.webp',
    '/images/index/1754457670_1800_1147815752.webp',
    '/images/index/1754457678_1150_2307935951.webp',
    '/images/index/1754457710_1232_2039277554.webp',
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [heroImages.length, isAutoPlaying]);

  const scrollLeft = () => {
    const container = document.getElementById('product-scroll');
    if (container) {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById('product-scroll');
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Carousel Section - Full Screen */}
      <section className="relative h-screen overflow-hidden">
        {/* Carousel Images */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <WebPImage
              src={image}
              alt={`Hero Slide ${index + 1}`}
              fill
              className="object-cover w-full h-full"
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        ))}
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center px-8 max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight leading-tight drop-shadow-lg">
              Premium
              <span className="block font-normal text-white">Daily Essentials</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed font-light max-w-2xl mx-auto drop-shadow-md">
              Professional cross-border trade providing quality household products
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/products"
                className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                LEARN MORE
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                SHOP NOW
              </Link>
            </div>
          </div>
        </div>
        
        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 3000);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white shadow-lg scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <button
          onClick={() => {
            setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
            setIsAutoPlaying(false);
            setTimeout(() => setIsAutoPlaying(true), 3000);
          }}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-300 z-20"
        >
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
            setIsAutoPlaying(false);
            setTimeout(() => setIsAutoPlaying(true), 3000);
          }}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-300 z-20"
        >
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </section>

      {/* Product Showcase Section - Horizontal Scroll */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
              New Arrivals
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our latest premium household products
            </p>
          </div>
          
          {/* Horizontal Scrolling Container */}
          <div className="relative">
            {/* Scroll Navigation Buttons */}
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 text-gray-600 hover:text-purple-600 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 text-gray-600 hover:text-purple-600 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Scrollable Product Grid */}
            <div
              id="product-scroll"
              className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {productImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-none w-80 group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="aspect-square">
                    <WebPImage
                      src={image}
                      alt={`Product ${index + 1}`}
                      width={320}
                      height={320}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  {/* Product Info Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-medium text-lg mb-1">Premium Product</h3>
                      <p className="text-white/80 text-sm mb-2">Carefully selected for quality</p>
                      <button className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors duration-300">
                        LEARN MORE
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6">
            Beyond What You See
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Professional cross-border trade providing quality household products. We bring you carefully curated items that make everyday life better.
          </p>
          <Link
            href="/about"
            className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
          >
            Discover More
          </Link>
        </div>
      </section>
    </main>
  );
}
