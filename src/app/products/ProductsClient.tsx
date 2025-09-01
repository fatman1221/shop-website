'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import WebPImage from '@/components/WebPImage';


type CategoryImages = {
  category: string;
  images: string[];
};

// 自定义产品信息，基于文件夹名称
const getCustomProductInfo = (category: string, imageIndex: number) => {
  const customInfo: Record<string, Array<{
    name: string;
    sku: string;
  }>> = {
    'Cotton Swabs': [
      {
        name: 'SNDZ-CSW100 Cotton Swabs',
        sku: 'CSW100'
      },
      {
        name: 'SNDZ-CSW30 Mini Cotton Swabs', 
        sku: 'CSW30'
      },
      {
        name: 'SNDZ-CSW100 Cotton Swabs',
        sku: 'CSW100'
      }
    ]
  };
  
  return customInfo[category]?.[imageIndex] || {
    name: `${category} #${imageIndex + 1}`,
    sku: ''
  };
};

function classNames(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export default function ProductsClient({ groups }: { groups: CategoryImages[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const tabs = useMemo(() => groups.map((g) => g.category), [groups]);
  const activeGroup = groups[activeIndex] ?? groups[0];

  useEffect(() => {
    // 确保越界时回到 0
    if (activeIndex >= groups.length) setActiveIndex(0);
  }, [groups.length, activeIndex]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      const images = activeGroup.images;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev === null ? 0 : (prev + 1) % images.length));
      if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev === null ? 0 : (prev - 1 + images.length) % images.length));
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxIndex, activeGroup.images]);

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* 移动端置顶吸附标签（横向滚动） */}
      <div className="md:hidden sticky top-20 z-10 -mx-4 px-4 py-2 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {tabs.map((label, idx) => (
            <button
              key={`m-${label}`}
              onClick={() => setActiveIndex(idx)}
              className={classNames(
                'whitespace-nowrap text-sm',
                idx === activeIndex ? 'btn-brand-grad' : 'btn-brand-outline bg-white'
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      {/* 左侧标签（竖排，一条一条） */}
      <aside className="hidden md:block md:w-56 md:flex-none md:border-r md:border-gray-200 md:pr-6">
        <div className="md:sticky md:top-28">
          <div className="space-y-2">
            {tabs.map((label, idx) => (
              <button
                key={label}
                onClick={() => setActiveIndex(idx)}
                className={classNames(
                  'w-full text-left text-sm relative',
                  idx === activeIndex
                    ? 'btn-brand-grad font-medium shadow-sm'
                    : 'btn-brand-outline bg-white'
                )}
              >
                <span
                  className={classNames(
                    'absolute left-0 top-1/2 -translate-y-1/2 h-6 rounded-r-md',
                    idx === activeIndex ? 'w-1' : 'w-0'
                  )}
                  style={{ backgroundColor: 'var(--brand-start)' }}
                />
                {label}
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* 右侧图片内容（仅显示当前选中分类） */}
      <div className="flex-1">
        {/* 面包屑 + 标题 */}
        <nav className="text-sm text-gray-500 mb-2">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-gray-700">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{activeGroup.category}</span>
        </nav>

        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            {activeGroup.category}
            <span className="ml-3 align-middle text-sm text-gray-400 font-normal">{activeGroup.images.length}</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {activeGroup.images.map((src, idx) => (
            <div
              key={`${activeGroup.category}-${idx}`}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-200 hover:shadow-md transition-all hover-border-brand"
            >
              <div className="relative aspect-[4/3] w-full text-left">
                {/* 图片区域 - 支持点击进入详情页和预览 */}
                <div className="relative w-full h-full">
                  <WebPImage
                    src={src}
                    alt={`${activeGroup.category} ${idx + 1}`}
                    fill
                    className="object-contain w-full h-full transition-transform duration-500 ease-out group-hover:scale-[1.02] cursor-pointer"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                    priority={idx < 2}
                  />
                  
                  {/* 点击图片进入详情页 */}
                  {(() => {
                    if (activeGroup.category === 'Cotton Swabs') {
                      const productId = idx === 0 ? '5' : '6';
                      return (
                        <Link 
                          href={`/products/${productId}`}
                          className="absolute inset-0 z-10"
                          aria-label={`Go to ${activeGroup.category} details`}
                        />
                      );
                    }
                    return null;
                  })()}
                  
                  {/* 预览按钮覆盖层 */}
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(idx)}
                    className="absolute inset-0 z-20 opacity-0 hover:opacity-100 transition-opacity duration-200 bg-black/10 hover:bg-black/20 flex items-center justify-center"
                    aria-label="Open preview"
                  >
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
              {/* Content under image */}
              <div className="p-4 sm:p-5">
                {(() => {
                  const productInfo = getCustomProductInfo(activeGroup.category, idx);
                  return (
                    <>
                      <h3 className="text-sm font-medium text-gray-900 truncate">{productInfo.name}</h3>
                      {productInfo.sku && (
                        <p className="mt-1 text-xs text-gray-400">SKU: {productInfo.sku}</p>
                      )}
                      <div className="mt-4 flex items-center gap-2">
                        <button className="btn-brand-outline btn-sm" onClick={() => setLightboxIndex(idx)}>Preview</button>
                        {(() => {
                          // 为 Cotton Swabs 产品提供正确的链接
                          if (activeGroup.category === 'Cotton Swabs') {
                            const productId = idx === 0 ? '5' : '6'; // 第一个图片是 SNDZ-CSW100 (ID: 5), 第二个是 SNDZ-CSW30 (ID: 6)
                            return (
                              <Link href={`/products/${productId}`} className="btn-brand-grad btn-sm">
                                Details
                              </Link>
                            );
                          }
                          return (
                            <button className="btn-brand-grad btn-sm">Details</button>
                          );
                        })()}
                      </div>
                    </>
                  );
                })()}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox 预览 + 缩略图导航（当前分类） */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" role="dialog" aria-modal="true">
          <button
            aria-label="Close"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            aria-label="Prev"
            onClick={() => setLightboxIndex((prev) => prev === null ? 0 : (prev - 1 + activeGroup.images.length) % activeGroup.images.length)}
            className="absolute left-4 md:left-8 text-white/80 hover:text-white transition-colors"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="relative w-full max-w-6xl">
            <div className="relative aspect-[16/10]">
              <WebPImage
                src={activeGroup.images[lightboxIndex]}
                alt={`${activeGroup.category} preview ${lightboxIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
            <div className="mt-4 flex gap-2 overflow-x-auto no-scrollbar py-2">
              {activeGroup.images.map((thumb, tIdx) => (
                <button
                  key={tIdx}
                  onClick={() => setLightboxIndex(tIdx)}
                  className={classNames(
                    'relative w-24 h-16 flex-none rounded-md ring-1 overflow-hidden',
                    tIdx === lightboxIndex ? 'ring-white' : 'ring-white/30 hover:ring-white/60'
                  )}
                  aria-label={`Thumbnail ${tIdx + 1}`}
                >
                  <WebPImage
                    src={thumb}
                    alt={`thumb ${tIdx + 1}`}
                    fill
                    className="object-cover"
                    sizes="96px"
                    priority={tIdx < 4}
                  />
                </button>
              ))}
            </div>
          </div>

          <button
            aria-label="Next"
            onClick={() => setLightboxIndex((prev) => prev === null ? 0 : (prev + 1) % activeGroup.images.length)}
            className="absolute right-4 md:right-8 text-white/80 hover:text-white transition-colors"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}


