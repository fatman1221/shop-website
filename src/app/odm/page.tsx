import WebPImage from '@/components/WebPImage';
import Link from 'next/link';

export default function ODMPage() {

  const steps = [
    {
      number: '01',
      title: 'Product Selection & Requirements Communication',
      description: 'First, you can select product types or specific models of interest from our product library. You provide brand materials (such as Logo, color codes) and preliminary design requirements (such as function, style, positioning, etc.).',
      image: '/images/odm/2450469935.webp',
      icon: '📋'
    },
    {
      number: '02', 
      title: 'Proposal Design & Confirmation',
      description: 'Based on your requirements, our professional design team will provide design proposals, including product appearance and packaging, until the proposal receives your final confirmation.',
      image: '/images/odm/omd.webp',
      icon: '🎨'
    },
    {
      number: '03',
      title: 'Sample Production & Confirmation', 
      description: 'After the design proposal is confirmed, we will produce physical samples for you to ensure all details of the product, such as feel, function, and quality, meet your expectations.',
      image: '/images/odm/shutterstock_2291349107.webp',
      icon: '🔬'
    },
    {
      number: '04',
      title: 'Order Negotiation & Mass Production',
      description: 'After the samples are confirmed, we will proceed with order negotiations. After both parties sign the order contract, the factory will commence mass production, strictly adhering to the sample standards for quality control.',
      image: '/images/odm/shutterstock_2456126665.webp',
      icon: '🏭'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 tracking-tight mb-6 animate-slide-up">
              ODM/OEM
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-slide-up">
              We Can Provide You with Complete Customized Solutions
            </p>
            <div className="mt-8 animate-slide-up">
              <span className="inline-block text-sm font-semibold bg-gradient-to-r from-[var(--brand-start)]/10 to-[var(--brand-end)]/10 text-[var(--brand-start)] px-4 py-2 rounded-full">
                Custom Manufacturing Services
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div key={step.number} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                    <WebPImage
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-[var(--brand-start)] to-[var(--brand-end)] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{step.icon}</div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-[var(--brand-start)] to-[var(--brand-end)] rounded-full"></div>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Feature highlights */}
                  <div className="pt-4">
                    <div className="flex flex-wrap gap-2">
                      {index === 0 && (
                        <>
                          <span className="px-3 py-1 bg-[var(--brand-start)]/10 text-[var(--brand-start)] text-sm rounded-full">Product Library</span>
                          <span className="px-3 py-1 bg-[var(--brand-start)]/10 text-[var(--brand-start)] text-sm rounded-full">Brand Materials</span>
                          <span className="px-3 py-1 bg-[var(--brand-start)]/10 text-[var(--brand-start)] text-sm rounded-full">Design Requirements</span>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <span className="px-3 py-1 bg-[var(--brand-start)]/10 text-[var(--brand-start)] text-sm rounded-full">Professional Design</span>
                          <span className="px-3 py-1 bg-[var(--brand-start)]/10 text-[var(--brand-start)] text-sm rounded-full">Product Appearance</span>
                          <span className="px-3 py-1 bg-[var(--brand-start)]/10 text-[var(--brand-start)] text-sm rounded-full">Packaging Design</span>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <span className="px-3 py-1 bg-[var(--brand-start)]/10 text-[var(--brand-start)] text-sm rounded-full">Physical Samples</span>
                          <span className="px-3 py-1 bg-[var(--brand-start)]/10 text-[var(--brand-start)] text-sm rounded-full">Quality Control</span>
                          <span className="px-3 py-1 bg-[var(--brand-start)]/10 text-[var(--brand-start)] text-sm rounded-full">Function Testing</span>
                        </>
                      )}
                      {index === 3 && (
                        <>
                          <span className="px-3 py-1 bg-[var(--brand-start)]/10 text-[var(--brand-start)] text-sm rounded-full">Order Negotiation</span>
                          <span className="px-3 py-1 bg-[var(--brand-start)]/10 text-[var(--brand-start)] text-sm rounded-full">Mass Production</span>
                          <span className="px-3 py-1 bg-[var(--brand-start)]/10 text-[var(--brand-start)] text-sm rounded-full">Quality Standards</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="w-16 h-16 bg-gradient-to-r from-[var(--brand-start)] to-[var(--brand-end)] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🤝</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Regarding MOQ
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              To seek long-term cooperation, therefore, initially you don&apos;t need to worry about the minimum order quantity; 
              feel free to contact us for small-volume test orders at any time. If you are satisfied with our service and products, 
              I believe we will have more opportunities for cooperation in the future.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-[var(--brand-start)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🚀</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">No MOQ Worries</h3>
                <p className="text-sm text-gray-600">Start with small test orders</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-[var(--brand-start)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">💼</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Long-term Partnership</h3>
                <p className="text-sm text-gray-600">Build lasting business relationships</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-[var(--brand-start)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">⭐</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Quality Focus</h3>
                <p className="text-sm text-gray-600">Satisfaction guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
            Ready to Start Your Custom Project?
          </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your ODM/OEM requirements and let&apos;s bring your vision to life.
            </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="btn-brand-grad px-8 py-3 text-lg font-medium hover:scale-105 transition-transform duration-200"
            >
              Get Started
            </Link>
            <Link 
              href="/products" 
              className="btn-brand-outline px-8 py-3 text-lg font-medium hover:scale-105 transition-transform duration-200"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
