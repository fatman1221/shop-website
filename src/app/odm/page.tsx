import WebPImage from '@/components/WebPImage';

export default function ODMPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 tracking-tight mb-6">
              <span className="brand-gradient-text">ODM/OEM</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We Can Provide You with Complete Customized Solutions
            </p>
            <div className="mt-8">
              <span className="inline-block text-sm font-semibold bg-gradient-to-r from-[var(--brand-start)]/10 to-[var(--brand-end)]/10 text-[var(--brand-start)] px-4 py-2 rounded-full">
                Custom Manufacturing Services
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps - Full Screen */}
      <section>
        <div className="max-w-7xl mx-auto">
          {/* Step 1 */}
          <div className="min-h-screen flex items-center py-20 md:py-32">
            <div className="w-full px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="relative">
                  <WebPImage
                    src="/images/odm/2450469935.webp"
                    alt="Product Selection"
                    width={600}
                    height={400}
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-light text-gray-900">
                    <span className="text-[var(--brand-start)]">1.</span> Product Selection & Requirements Communication
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    First, you can select product types or specific models of interest from our product library. You provide brand materials (such as Logo, color codes) and preliminary design requirements (such as function, style, positioning, etc.).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="min-h-screen flex items-center py-20 md:py-32 bg-gray-50">
            <div className="w-full px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="lg:order-2">
                  <WebPImage
                    src="/images/odm/omd.webp"
                    alt="Proposal Design"
                    width={600}
                    height={400}
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
                <div className="lg:order-1 space-y-6">
                  <h3 className="text-2xl font-light text-gray-900">
                    <span className="text-[var(--brand-start)]">2.</span> Proposal Design & Confirmation
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Based on your requirements, our professional design team will provide design proposals, including product appearance and packaging, until the proposal receives your final confirmation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="min-h-screen flex items-center py-20 md:py-32">
            <div className="w-full px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="relative">
                  <WebPImage
                    src="/images/odm/shutterstock_2291349107.webp"
                    alt="Sample Production"
                    width={600}
                    height={400}
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-light text-gray-900">
                    <span className="text-[var(--brand-start)]">3.</span> Sample Production & Confirmation
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    After the design proposal is confirmed, we will produce physical samples for you to ensure all details of the product, such as feel, function, and quality, meet your expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="min-h-screen flex items-center py-20 md:py-32 bg-gray-50">
            <div className="w-full px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="lg:order-2">
                  <WebPImage
                    src="/images/odm/shutterstock_2456126665.webp"
                    alt="Mass Production"
                    width={600}
                    height={400}
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
                <div className="lg:order-1 space-y-6">
                  <h3 className="text-2xl font-light text-gray-900">
                    <span className="text-[var(--brand-start)]">4.</span> Order Negotiation & Mass Production
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    After the samples are confirmed, we will proceed with order negotiations. After both parties sign the order contract, the factory will commence mass production, strictly adhering to the sample standards for quality control.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOQ Section - Full Screen */}
      <section className="min-h-screen flex items-center py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-16">
              <span className="brand-gradient-text">Regarding MOQ</span>
            </h2>
            <div className="bg-white rounded-3xl shadow-2xl p-12 md:p-20 max-w-4xl mx-auto">
              <p className="text-xl text-gray-600 leading-relaxed">
                To seek long-term cooperation, therefore, initially you don&apos;t need to worry about the minimum order quantity; 
                feel free to contact us for small-volume test orders at any time. If you are satisfied with our service and products, 
                I believe we will have more opportunities for cooperation in the future.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}