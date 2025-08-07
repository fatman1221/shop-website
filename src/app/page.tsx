'use client';

import Link from 'next/link';
import WebPImage from '@/components/WebPImage';
import { useEffect, useState, useRef } from 'react';
import { getCategories } from '@/lib/client-data';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // All images array for full-screen carousel
  const allImages = [
    '/images/index/1753755312_1970_2290195981.webp',
    '/images/index/1754455341_1846_1658765743.webp',
    '/images/index/1754455369_1617_2614519433.webp',
    '/images/index/1754455931_1763_2110344371.webp',
    '/images/index/1754455939_1348_2560386097.webp',
    '/images/index/1754455969_1908_2393891865.webp',
    '/images/index/1754457670_1800_1147815752.webp',
    '/images/index/1754457678_1150_2307935951.webp',
    '/images/index/1754457710_1232_2039277554.webp',
  ];

  // Full-screen carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % allImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [allImages.length]);

  return (
    <main className="min-h-screen">
      {/* Full-Screen Image Carousel */}
      <section className="relative h-screen overflow-hidden">
        {/* Full-Screen Images */}
        {allImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <WebPImage
              src={image}
              alt={`Premium Product ${index + 1}`}
              fill
              className="object-cover w-full h-full"
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        ))}
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center px-8 max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight leading-tight drop-shadow-lg">
              Premium
              <span className="block font-normal text-white">Daily Essentials</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed font-light max-w-2xl mx-auto">
              Professional cross-border trade providing quality household products
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/products"
                className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Shop Now
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        
        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {allImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white shadow-lg scale-110' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + allImages.length) % allImages.length)}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-300 z-20"
        >
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % allImages.length)}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-300 z-20"
        >
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-20">
          <svg className="w-8 h-8 text-white/70 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
          <span className="text-sm text-white/70">Scroll down</span>
        </div>
      </section>



      {/* CTA Section - Enhanced */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Ready to Explore Our Products?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Discover premium household essentials carefully selected for quality and value. Start your journey to a better lifestyle today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact Us
            </Link>
            <Link
              href="/products"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
