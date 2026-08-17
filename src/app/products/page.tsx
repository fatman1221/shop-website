import ProductsClient from './ProductsClient';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 pb-10 pt-14 sm:px-6 lg:px-8 lg:pb-12 lg:pt-16">
          <p className="mb-4 text-sm font-semibold uppercase text-[var(--brand-start)]">
            Product Capabilities
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold text-gray-950 md:text-5xl">
            Products
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
            Explore customizable merchandise designed to bring independent IP to life.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <ProductsClient />
      </div>
    </div>
  );
}
