'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

export default function ImageWithFallback({ 
  src, 
  alt, 
  className = '', 
  fallbackSrc = '/images/placeholder.svg' 
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
      setHasError(true);
    } else if (hasError) {
      // If fallback also fails, show a placeholder div
      setImgSrc('');
    }
  };

  if (!imgSrc) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ minHeight: '200px' }}
      >
        <div className="text-center text-gray-500">
          <div className="text-4xl mb-2">📷</div>
          <div className="text-sm">Image not available</div>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={800}
      height={600}
      className={className}
      onError={() => handleError()}
    />
  );
} 