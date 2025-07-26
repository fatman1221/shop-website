import { getCompanyInfo } from '@/lib/client-data';

export default function AboutPage() {
  const companyInfo = getCompanyInfo();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About {companyInfo.nameEn}</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {companyInfo.descriptionEn}
        </p>
      </div>

      {/* Company Story */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-lg text-gray-600 mb-6">
            {companyInfo.aboutEn}
          </p>
          <p className="text-gray-600">
            Since our founding in {companyInfo.founded}, we have been dedicated to connecting businesses 
            with high-quality products from around the world. Our commitment to excellence and customer 
            satisfaction has made us a trusted partner in the global trade industry.
          </p>
        </div>
        <div className="bg-gray-100 rounded-lg p-8">
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{companyInfo.founded}</div>
              <div className="text-sm text-gray-600">Founded</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{companyInfo.employees}</div>
              <div className="text-sm text-gray-600">Employees</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{companyInfo.countries}</div>
              <div className="text-sm text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-blue-50 p-8 rounded-lg">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <span className="text-blue-600 text-xl">🎯</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
          <p className="text-gray-600">{companyInfo.missionEn}</p>
        </div>
        <div className="bg-green-50 p-8 rounded-lg">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <span className="text-green-600 text-xl">🔮</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Vision</h3>
          <p className="text-gray-600">{companyInfo.visionEn}</p>
        </div>
      </div>

      {/* Services */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companyInfo.servicesEn.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 text-xl">
                  {['🛒', '🚚', '📋', '📊', '🔍', '⚙️'][index] || '📦'}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{service}</h3>
              <p className="text-gray-600">
                Professional {service.toLowerCase()} services to help your business succeed in the global market.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Values */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 text-2xl">🤝</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Trust</h3>
            <p className="text-gray-600">Building long-term relationships based on trust and reliability</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-600 text-2xl">⭐</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality</h3>
            <p className="text-gray-600">Delivering the highest quality products and services</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-yellow-600 text-2xl">💡</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
            <p className="text-gray-600">Continuously improving and adapting to market changes</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-purple-600 text-2xl">🌍</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Global</h3>
            <p className="text-gray-600">Connecting businesses across borders and cultures</p>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-gray-500 text-2xl">👨‍💼</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">John Smith</h3>
            <p className="text-gray-600 mb-2">CEO & Founder</p>
            <p className="text-sm text-gray-500">15+ years in international trade</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-gray-500 text-2xl">👩‍💼</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Sarah Johnson</h3>
            <p className="text-gray-600 mb-2">Operations Director</p>
            <p className="text-sm text-gray-500">Expert in supply chain management</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-gray-500 text-2xl">👨‍💻</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Mike Chen</h3>
            <p className="text-gray-600 mb-2">Business Development</p>
            <p className="text-sm text-gray-500">Specialist in Asian markets</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Work With Us?</h2>
        <p className="text-lg mb-6">
          Let's discuss how we can help your business grow globally
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
} 