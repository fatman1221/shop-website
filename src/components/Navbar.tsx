'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { getCompanyInfo } from '@/lib/client-data';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const companyInfo = getCompanyInfo();

  useEffect(() => {
    const updateScrolled = () => {
      // 当滚动超过视窗高度 70% 时认为离开了 hero（更早变为白底，避免空白期）
      const threshold = Math.max(window.innerHeight * 0.7, 300);
      setIsScrolled(window.scrollY > threshold);
    };

    // 立即计算一次，避免首帧状态不正确
    updateScrolled();

    window.addEventListener('scroll', updateScrolled);
    return () => window.removeEventListener('scroll', updateScrolled);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isHomePage && !isScrolled
        ? 'bg-transparent' 
        : 'bg-white/95 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <Image
                  src={companyInfo.logo}
                  alt={companyInfo.nameEn}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className={`text-xl font-light transition-colors duration-300 ${
                isHomePage && !isScrolled ? 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]' : 'text-gray-900'
              }`} style={isHomePage && !isScrolled ? { textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.4)' } : {}}>
                {companyInfo.nameEn}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`hover:text-purple-400 px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                isHomePage && !isScrolled ? 'text-white/95' : 'text-gray-700 hover:text-purple-600'
              }`}
              style={isHomePage && !isScrolled ? { textShadow: '0 2px 4px rgba(0,0,0,0.6)' } : {}}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={`hover:text-purple-400 px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                isHomePage && !isScrolled ? 'text-white/95' : 'text-gray-700 hover:text-purple-600'
              }`}
              style={isHomePage && !isScrolled ? { textShadow: '0 2px 4px rgba(0,0,0,0.6)' } : {}}
            >
              Products
            </Link>
            <Link
              href="/about"
              className={`hover:text-purple-400 px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                isHomePage && !isScrolled ? 'text-white/95' : 'text-gray-700 hover:text-purple-600'
              }`}
              style={isHomePage && !isScrolled ? { textShadow: '0 2px 4px rgba(0,0,0,0.6)' } : {}}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`hover:text-purple-400 px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                isHomePage && !isScrolled ? 'text-white/95' : 'text-gray-700 hover:text-purple-600'
              }`}
              style={isHomePage && !isScrolled ? { textShadow: '0 2px 4px rgba(0,0,0,0.6)' } : {}}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`focus:outline-none transition-colors duration-300 ${
                isHomePage && !isScrolled ? 'text-white' : 'text-gray-700'
              }`}
              style={isHomePage && !isScrolled ? { filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.6))' } : {}}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg border border-white/20">
              <Link
                href="/"
                className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium transition-colors rounded-md hover:bg-purple-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium transition-colors rounded-md hover:bg-purple-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium transition-colors rounded-md hover:bg-purple-50"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium transition-colors rounded-md hover:bg-purple-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 