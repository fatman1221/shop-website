import WebPImage from '@/components/WebPImage';

export default function ODMPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-8xl font-light text-gray-900 tracking-tight mb-8">
            <span className="brand-gradient-text">ODM/OEM</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            We Can Provide You with Complete Customized Solutions
          </p>
          <div className="inline-block text-lg font-semibold bg-gradient-to-r from-[var(--brand-start)]/10 to-[var(--brand-end)]/10 text-[var(--brand-start)] px-8 py-4 rounded-full">
            Custom Manufacturing Services
          </div>
          
          {/* Scroll Down Indicator */}
          <div className="flex justify-center mt-20">
            <div className="flex flex-col items-center animate-bounce">
              <span className="text-sm text-gray-500 mb-3">Scroll Down</span>
              <svg className="w-8 h-8 text-[var(--brand-start)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section>
        {/* Step 1 */}
        <div className="min-h-screen flex items-center py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                <div className="relative">
                  <WebPImage
                    src="/images/odm/2450469935.webp"
                    alt="Product Selection"
                    width={1200}
                    height={800}
                    className="w-full rounded-2xl shadow-2xl"
                  />
                </div>
              <div className="space-y-8">
                <div className="flex items-center mb-6">
                  <span className="w-16 h-16 bg-gradient-to-r from-[var(--brand-start)] to-[var(--brand-end)] rounded-full flex items-center justify-center text-white font-bold text-2xl mr-6 flex-shrink-0">1</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Product Selection & Requirements Communication
                  </h2>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  First, you can select product types or specific models of interest from our product library. You provide brand materials (such as Logo, color codes) and preliminary design requirements (such as function, style, positioning, etc.).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="min-h-screen flex items-center py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                <div className="lg:order-2">
                  <WebPImage
                    src="/images/odm/omd.webp"
                    alt="Proposal Design"
                    width={1200}
                    height={800}
                    className="w-full rounded-2xl shadow-2xl"
                  />
                </div>
              <div className="lg:order-1 space-y-8">
                <div className="flex items-center mb-6">
                  <span className="w-16 h-16 bg-gradient-to-r from-[var(--brand-start)] to-[var(--brand-end)] rounded-full flex items-center justify-center text-white font-bold text-2xl mr-6 flex-shrink-0">2</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Proposal Design & Confirmation
                  </h2>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Based on your requirements, our professional design team will provide design proposals, including product appearance and packaging, until the proposal receives your final confirmation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="min-h-screen flex items-center py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                <div className="relative">
                  <WebPImage
                    src="/images/odm/shutterstock_2291349107.webp"
                    alt="Sample Production"
                    width={1500}
                    height={1000}
                    className="w-full rounded-2xl shadow-2xl"
                  />
                </div>
              <div className="space-y-8">
                <div className="flex items-center mb-6">
                  <span className="w-16 h-16 bg-gradient-to-r from-[var(--brand-start)] to-[var(--brand-end)] rounded-full flex items-center justify-center text-white font-bold text-2xl mr-6 flex-shrink-0">3</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Sample Production & Confirmation
                  </h2>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  After the design proposal is confirmed, we will produce physical samples for you to ensure all details of the product, such as feel, function, and quality, meet your expectations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="min-h-screen flex items-center py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                <div className="lg:order-2">
                  <WebPImage
                    src="/images/odm/shutterstock_2456126665.webp"
                    alt="Mass Production"
                    width={1500}
                    height={1000}
                    className="w-full rounded-2xl shadow-2xl"
                  />
                </div>
              <div className="lg:order-1 space-y-8">
                <div className="flex items-center mb-6">
                  <span className="w-16 h-16 bg-gradient-to-r from-[var(--brand-start)] to-[var(--brand-end)] rounded-full flex items-center justify-center text-white font-bold text-2xl mr-6 flex-shrink-0">4</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Order Negotiation & Mass Production
                  </h2>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  After the samples are confirmed, we will proceed with order negotiations. After both parties sign the order contract, the factory will commence mass production, strictly adhering to the sample standards for quality control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOQ Section */}
      <section className="min-h-screen flex items-center py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-16">
              <span className="brand-gradient-text">Regarding MOQ</span>
            </h2>
            <div className="bg-white rounded-3xl shadow-2xl p-16 md:p-24 max-w-5xl mx-auto">
              <p className="text-2xl text-gray-600 leading-relaxed">
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