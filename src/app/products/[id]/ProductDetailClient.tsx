'use client';

import { useState } from 'react';
import WebPImage from '@/components/WebPImage';
import { Product } from '@/types/product';

interface ProductDetailClientProps {
  product: Product;
  recommendedProducts: Product[];
}

// 棉签产品特殊信息
const getCottonSwabDetails = (productId: string) => {
  const details: Record<string, {
    packageQuantity: string;
    materialDesign: string;
    wideApplications: string;
  }> = {
    '5': { // SNDZ-CSW100
      packageQuantity: '100-count cotton swabs per pack, stored in a clear hygienic box to prevent dust and facilitate daily use.',
      materialDesign: 'Tips made of 100% natural organic cotton, soft absorbent, and lint-free. Wooden or paper stick (chlorine-free and cruelty-free), smooth and sturdy after high-temperature treatment. Rounded end for gentle applications, Pointed end for precision cleaning in hard-to-reach areas.',
      wideApplications: 'Personal care: Makeup application/removal (lipstick, eyeliner), baby hygiene (toes, nose), pet care. Household cleaning: Electronics (keyboards, phone ports), collectibles, delicate surfaces.'
    },
    '6': { // SNDZ-CSW30
      packageQuantity: '30 count cotton swabs per pack, stored in a clear hygienic box to prevent dust and facilitate daily use.',
      materialDesign: 'Made with 100% cotton for a soft, gentle touch with hygienic protection, perfect for baby\'s sensitive skin or minor scrapes. Extra-thick cotton tips stay fresh longer, ideal for sensitive skin care and ointment application.',
      wideApplications: 'First aid, hygiene, and gentle cleaning: A trusted companion for daily care and travel needs. Makeup & beauty touch-ups: Perfect for fixing smudges, removing makeup, and nail touch-ups on the go.'
    }
  };
  return details[productId];
};

export default function ProductDetailClient({ product, recommendedProducts }: ProductDetailClientProps) {
  const [showModal, setShowModal] = useState(false);

  // 获取棉签产品详细信息
  const cottonSwabDetails = getCottonSwabDetails(product.id);

  return (
    <div className="bg-white min-h-screen">
      {/* Product Details - Main Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center text-sm text-[var(--brand-start)] hover:text-[var(--brand-end)] transition-colors duration-200 opacity-70 hover:opacity-100"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
        </div>
        
        {/* Simplified structure with vertical divider */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start mb-16">
            {/* Main Product Image */}
            <div className="relative -ml-8">
              <div
                className="cursor-zoom-in group relative"
                onClick={() => setShowModal(true)}
              >
                <WebPImage
                  src={product.image}
                  alt={product.nameEn}
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain rounded-2xl shadow-lg border border-gray-200 group-hover:border-[var(--brand-start)] transition-all duration-300 bg-white"
                />
                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[var(--brand-start)] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-[var(--brand-start)]"></div>

            {/* Product Details - Simplified */}
            <div className="space-y-6 -ml-4">
              <div>
                <span className="inline-block text-xs font-semibold bg-gradient-to-r from-[var(--brand-start)]/10 to-[var(--brand-end)]/10 text-[var(--brand-start)] px-3 py-1 rounded-full mb-4">
                  {product.categoryEn}
                </span>
                              <h1 className="text-4xl font-light text-gray-800 mb-4 leading-tight whitespace-nowrap">
                {product.nameEn}
              </h1>
              </div>

              {/* Cotton Swabs Detailed Specifications */}
              {cottonSwabDetails && (
                <div className="space-y-6 pt-8 border-t border-gray-200">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Package & Quantity</h3>
                    <p className="text-gray-600 leading-relaxed">{cottonSwabDetails.packageQuantity}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Material & Design</h3>
                    <p className="text-gray-600 leading-relaxed">{cottonSwabDetails.materialDesign}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Wide Applications</h3>
                    <p className="text-gray-600 leading-relaxed">{cottonSwabDetails.wideApplications}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for zoomed image */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white" onClick={() => setShowModal(false)}>
          <div className="relative w-full h-full flex items-center justify-center p-8" onClick={e => e.stopPropagation()}>
            <WebPImage
              src={product.image}
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
          </div>
        </div>
      )}
    </div>
  );
} 