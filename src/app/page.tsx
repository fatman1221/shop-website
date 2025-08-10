'use client';

import Link from 'next/link';
import WebPImage from '@/components/WebPImage';
import { useEffect, useState, useRef } from 'react';

export default function HomePage() {
  const [revealReady, setRevealReady] = useState(false);
  
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

  // no autoplay – corporate style prefers a single strong KV (Yonex style)

  // Lightweight intersection observer for reveal-on-scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
    );

    const toReveal = document.querySelectorAll('.reveal');
    toReveal.forEach((el) => observer.observe(el));
    setRevealReady(true);

    return () => observer.disconnect();
  }, []);

  const scrollLeft = () => {
    const container = document.getElementById('product-scroll');
    if (!container) return;
    const step = (container as HTMLElement).clientWidth; // 按可视宽度整屏滑动
    container.scrollBy({ left: -step, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const container = document.getElementById('product-scroll');
    if (!container) return;
    const step = (container as HTMLElement).clientWidth; // 按可视宽度整屏滑动
    container.scrollBy({ left: step, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen">
      {/* Hero KV (Yonex style) - Single strong visual + headline */}
      <section className="relative h-screen overflow-hidden -mt-16 bg-neutral-900">
        <WebPImage
          src={heroImages[0]}
          alt="Hero KV"
          fill
          className="object-cover w-full h-full"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center px-8 max-w-5xl reveal">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight leading-tight">
              Brave Dazzle Inc.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed font-light max-w-3xl mx-auto">
              Global supply chain and personal care solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products" className="btn-brand-grad shadow-lg text-base md:text-lg">
                Explore Products
              </Link>
              <Link href="/contact" className="btn-brand-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll-down indicator */}
        <a href="#intro" aria-label="Scroll Down" className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-white/80 hover:text-white transition-colors">
          <svg className="w-7 h-7 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
          <span className="mt-1 text-xs tracking-wider">Scroll</span>
        </a>
      </section>

      {/* Cotton Swabs Product Section */}
      <section id="intro" className="min-h-screen flex items-center bg-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-amber-200 to-orange-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-orange-200 to-amber-300 rounded-full opacity-30 animate-bounce"></div>
        
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center justify-items-center">
            {/* Left Side - Image */}
            <div className="relative w-full max-w-lg reveal">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <WebPImage
                  src="/images/index/1754455931_1763_2110344371.webp"
                  alt="Premium Cotton Swabs"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full opacity-30"></div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6 text-center lg:text-left reveal" data-reveal-delay="120">
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-6">
                  Safety Razor
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-amber-700 to-orange-600 rounded-full mb-6 mx-auto lg:mx-0"></div>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Precision-engineered razor for a close, comfortable shave and refined grooming experience.
              </p>
              
              <p className="text-base text-gray-600 leading-relaxed mb-10">
                Stainless steel head and ergonomic handle reduce irritation while improving control.
              </p>

              {/* CTA Button */}
              <div className="flex space-x-4 justify-center lg:justify-start">
                <Link href="/products" className="btn-brand-grad text-sm">View Product</Link>
                <Link href="/contact" className="btn-brand-outline text-sm">Inquire Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section - Enhanced with Animations */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-30 blur-3xl -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full opacity-30 blur-3xl translate-x-48 translate-y-48"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              New Arrivals
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our latest premium household products crafted with precision and care
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Enhanced Navigation Buttons */}
            <button
              onClick={scrollLeft}
              className="absolute -left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm shadow-xl rounded-full p-4 text-gray-700 hover:text-blue-600 hover:bg-white transition-all duration-300 hover:scale-110 group"
            >
              <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              className="absolute -right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm shadow-xl rounded-full p-4 text-gray-700 hover:text-blue-600 hover:bg-white transition-all duration-300 hover:scale-110 group"
            >
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Enhanced Product Grid - Show 3 Cards */}
            <div
              id="product-scroll"
              className="flex space-x-6 overflow-x-auto scrollbar-hide pb-6 scroll-smooth px-4 snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {productImages.map((image, index) => (
                <div 
                  key={index} 
                  className="flex-none w-80 sm:w-72 md:w-80 lg:w-72 xl:w-80 snap-start group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer reveal"
                >
                  {/* Image Container with Enhanced Effects */}
                  <div className="aspect-square relative overflow-hidden">
                    <WebPImage
                      src={image}
                      alt={`Premium Product ${index + 1}`}
                      width={400}
                      height={400}
                      className="object-cover w-full h-full group-hover:scale-125 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Animated Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">

                      {/* Enhanced Content with Slide Animation */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                          <h3 className="text-white font-semibold text-xl mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-400">
                            Premium Product
                          </h3>
                          <p className="text-white/90 text-sm mb-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-500">
                            Carefully selected for exceptional quality and performance
                          </p>
                          
                          {/* Action Buttons */}
                          <button className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 translate-y-2 group-hover:translate-y-0">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                  </div>

                  {/* Product Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                    NEW
                  </div>
                </div>
              ))}
            </div>

            {/* Progress Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {productImages.map((_, index) => (
                <div key={index} className="w-2 h-2 bg-gray-300 rounded-full hover:bg-blue-500 transition-colors duration-300 cursor-pointer"></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dental Floss Product Section */}
      <section className="min-h-screen flex items-center bg-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-16 right-16 w-40 h-40 bg-gradient-to-r from-teal-200 to-cyan-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-16 left-16 w-28 h-28 bg-gradient-to-r from-cyan-200 to-teal-300 rounded-full opacity-30 animate-bounce"></div>
        
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center justify-items-center">
            {/* Left Side - Content */}
            <div className="space-y-6 order-2 lg:order-1 text-center lg:text-left reveal" data-reveal-delay="120">
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-6">
                  Dental Floss
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full mb-6 mx-auto lg:mx-0"></div>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Gentle, high-strength floss that glides easily to remove plaque and protect gums.
              </p>
              
              <p className="text-base text-gray-600 leading-relaxed mb-10">
                Mint-coated fibers provide fresh breath while reducing friction for added comfort.
              </p>

              <div className="flex space-x-4 justify-center lg:justify-start">
                <Link href="/products" className="btn-brand-grad text-lg">View Product</Link>
                <Link href="/contact" className="btn-brand-outline text-lg">Inquire Now</Link>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative order-1 lg:order-2 w-full max-w-lg">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <WebPImage
                  src="/images/index/1754457678_1150_2307935951.webp"
                  alt="Professional Safety Razor"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
