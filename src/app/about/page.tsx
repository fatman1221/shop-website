import { getCompanyInfo } from '@/lib/client-data';

export default function AboutPage() {
  const companyInfo = getCompanyInfo();

  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-8 md:pt-36">
        {/* KV 标题 + 一句话简介（极简，垂直居中感） */}
        <section className="text-center mb-20 animate-slide-up">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 tracking-tight mb-6">
            About {companyInfo.nameEn}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {companyInfo.descriptionEn}
          </p>
        </section>

        {/* 关键数字（极简三项，轻动画） */}
        <section className="pt-10 border-t border-gray-100">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            <div className="animate-slide-up">
              <div className="text-4xl md:text-5xl font-light brand-gradient-text">{companyInfo.founded}</div>
              <div className="text-sm uppercase tracking-wider text-gray-500 mt-2">Founded</div>
            </div>
            <div className="animate-slide-up">
              <div className="text-4xl md:text-5xl font-light brand-gradient-text">{companyInfo.employees}</div>
              <div className="text-sm uppercase tracking-wider text-gray-500 mt-2">Employees</div>
            </div>
            <div className="animate-slide-up">
              <div className="text-4xl md:text-5xl font-light brand-gradient-text">{companyInfo.countries}</div>
              <div className="text-sm uppercase tracking-wider text-gray-500 mt-2">Countries</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 