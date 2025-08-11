import fs from 'fs';
import path from 'path';
import WebPImage from '@/components/WebPImage';
import ProductsClient from './ProductsClient';

type CategoryImages = {
  category: string;
  images: string[];
};

function toTitleCase(text: string) {
  return text
    .replace(/[-_]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

function readCategoryImageGroups(): CategoryImages[] {
  const productsDir = path.join(process.cwd(), 'public', 'images', 'products');
  const groups: CategoryImages[] = [];
  const uncategorized: string[] = [];

  const isImage = (file: string) => /\.(webp|jpg|jpeg|png|gif|svg)$/i.test(file);

  if (!fs.existsSync(productsDir)) return groups;

  const entries = fs.readdirSync(productsDir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(productsDir, entry.name);
    if (entry.isDirectory()) {
      const files = fs
        .readdirSync(fullPath)
        .filter((f) => isImage(f))
        .map((f) => `/images/products/${entry.name}/${f}`);
      if (files.length > 0) {
        groups.push({ category: toTitleCase(entry.name), images: files });
      }
    } else if (entry.isFile() && isImage(entry.name)) {
      uncategorized.push(`/images/products/${entry.name}`);
    }
  }

  if (uncategorized.length > 0) {
    groups.unshift({ category: 'Uncategorized', images: uncategorized });
  }

  return groups.sort((a, b) => a.category.localeCompare(b.category));
}

function slugifyCategory(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-');
}

export default async function ProductsPage() {
  const groups = readCategoryImageGroups();
  const visibleGroups = groups.filter((g) => g.images.length > 0);
  // Debug logs in dev
  if (process.env.NODE_ENV !== 'production') {
    console.log('[products] cwd=', process.cwd());
    console.log('[products] groups total=', groups.length);
    console.log('[products] visibleGroups total=', visibleGroups.length);
    visibleGroups.forEach((g) => console.log('[products] group', g.category, g.images.slice(0, 3)));
  }

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-3">
            Products
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Curated by your folder structure under /public/images/products
          </p>
        </div>

        {visibleGroups.length === 0 ? (
          <div className="text-center py-20 text-gray-600">
            No product images found. Please add images to /public/images/products.
          </div>
        ) : (
          <ProductsClient groups={visibleGroups} />
        )}
      </div>
    </div>
  );
}