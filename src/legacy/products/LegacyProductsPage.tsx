import LegacyProductsClient from './LegacyProductsClient';

export default function LegacyProductsPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-3">
            Products
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our comprehensive range of beauty and personal care products
          </p>
        </div>

        <LegacyProductsClient />
      </div>
    </div>
  );
}
