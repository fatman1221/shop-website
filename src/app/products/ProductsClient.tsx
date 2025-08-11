'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import WebPImage from '@/components/WebPImage';

type CategoryImages = {
  category: string;
  images: string[];
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
              <button
                type="button"
                onClick={() => setLightboxIndex(idx)}
                className="relative aspect-[4/3] w-full text-left"
                aria-label="Open preview"
              >
                <WebPImage
                  src={src}
                  alt={`${activeGroup.category} ${idx + 1}`}
                  fill
                  className="object-contain w-full h-full transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  priority={idx < 2}
                />
              </button>
              {/* Content under image */}
              <div className="p-4 sm:p-5">
                <h3 className="text-sm font-medium text-gray-900 truncate">{activeGroup.category} #{idx + 1}</h3>
                <p className="mt-1 text-xs text-gray-500">High-quality curated product imagery</p>
                <div className="mt-4 flex items-center gap-2">
                  <button className="btn-brand-outline btn-sm" onClick={() => setLightboxIndex(idx)}>Preview</button>
                  <button className="btn-brand-grad btn-sm">Details</button>
                </div>
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


