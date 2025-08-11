'use client';

import { getCompanyInfo } from '@/lib/client-data';
import { useState } from 'react';

export default function ContactPage() {
  const companyInfo = getCompanyInfo();
  const [submitting, setSubmitting] = useState(false);

  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 标题 */}
        <section className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 tracking-tight mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">We respond within 24 hours on business days</p>
          <div className="w-28 h-0.5 mx-auto bg-gradient-to-r from-[var(--brand-start)] to-[var(--brand-end)] rounded-full mt-4" />
        </section>

        {/* 联系方式卡片（品牌色 + 轻动画） */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyInfo.addressEn)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="panel-brand border border-gray-200 rounded-xl p-6 text-center transition-transform duration-300 hover:shadow-md hover:-translate-y-1 animate-slide-up block"
            style={{animationDelay: '0ms'}}
          >
            <div className="mx-auto mb-3 w-10 h-10 rounded-full bg-[color-mix(in_oklab,var(--brand-start)_20%,transparent)] text-brand flex items-center justify-center">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3Zm0 0c2.761 0 5 2.239 5 5v2H7v-2c0-2.761 2.239-5 5-5Z"/></svg>
            </div>
            <div className="text-sm uppercase tracking-wider text-gray-500 mb-1">Address</div>
            <div className="text-gray-900">{companyInfo.addressEn}</div>
          </a>
          <a href={`tel:${companyInfo.phone.replace(/[^\d+]/g,'')}`} className="panel-brand border border-gray-200 rounded-xl p-6 text-center transition-transform duration-300 hover:shadow-md hover:-translate-y-1 animate-slide-up block" style={{animationDelay: '80ms'}}>
            <div className="mx-auto mb-3 w-10 h-10 rounded-full bg-[color-mix(in_oklab,var(--brand-start)_20%,transparent)] text-brand flex items-center justify-center">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M2 5l3.5-.7a2 2 0 0 1 2.1 1l1.4 2.7a2 2 0 0 1-.5 2.4l-1.2 1a12 12 0 0 0 5.8 5.8l1-1.2a2 2 0 0 1 2.4-.5l2.7 1.4a2 2 0 0 1 1 2.1L19 22a3 3 0 0 1-3 2.5C7.82 24.5 1.5 18.18 1.5 10A3 3 0 0 1 2 5Z"/></svg>
            </div>
            <div className="text-sm uppercase tracking-wider text-gray-500 mb-1">Phone</div>
            <div className="text-gray-900">{companyInfo.phone}</div>
          </a>
          <a href={`mailto:${companyInfo.email}`} className="panel-brand border border-gray-200 rounded-xl p-6 text-center transition-transform duration-300 hover:shadow-md hover:-translate-y-1 animate-slide-up block" style={{animationDelay: '160ms'}}>
            <div className="mx-auto mb-3 w-10 h-10 rounded-full bg-[color-mix(in_oklab,var(--brand-start)_20%,transparent)] text-brand flex items-center justify-center">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1H4a1 1 0 0 1-1-1V7c0-.55.45-1 1-1Zm0 0l8 6 8-6"/></svg>
            </div>
            <div className="text-sm uppercase tracking-wider text-gray-500 mb-1">Email</div>
            <div className="text-gray-900">{companyInfo.email}</div>
          </a>
        </section>

        {/* 极简表单（品牌色） */}
        <section>
          <form className="space-y-4" onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget as HTMLFormElement;
            const formData = new FormData(form);
            const payload = {
              name: String(formData.get('name') || ''),
              email: String(formData.get('email') || ''),
              company: String(formData.get('company') || ''),
              message: String(formData.get('message') || ''),
            };
            try {
              setSubmitting(true);
              const ctrl = new AbortController();
              const timeout = setTimeout(() => ctrl.abort(), 120000); // 120s 超时，避免 Google 网络慢导致前端过早中断
              const url = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || '/api/contact';
              console.log('[contact][CLIENT] start', {
                url,
                online: typeof navigator !== 'undefined' ? navigator.onLine : undefined,
                payload,
                time: new Date().toISOString(),
              });
              const res = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
                cache: 'no-store',
                signal: ctrl.signal,
              });
              clearTimeout(timeout);
              if (res.ok) {
                const data = await res.json().catch(() => ({}));
                console.log('[contact][CLIENT] success', { status: res.status, data });
                alert('Submitted successfully');
                form.reset();
              } else {
                const data = await res.json().catch(() => ({}));
                console.warn('[contact][CLIENT] failed', { status: res.status, data });
                alert(data?.error || 'Submit failed');
              }
            } catch (err: any) {
              console.error('[contact][CLIENT] error', { name: err?.name, message: err?.message, err });
              if (err?.name === 'AbortError') {
                alert('已发送请求，服务器可能仍在写入，请稍后在表格中查看是否已新增。如未写入，请再试一次。');
              } else {
                alert('Network error, please try again.');
              }
            } finally {
              setSubmitting(false);
            }
          }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="name" className="w-full px-4 py-3 rounded-lg input-brand" placeholder="Full Name *" required />
              <input name="email" type="email" className="w-full px-4 py-3 rounded-lg input-brand" placeholder="Email *" required />
            </div>
            <input name="company" className="w-full px-4 py-3 rounded-lg input-brand" placeholder="Company" />
            <textarea name="message" rows={6} className="w-full px-4 py-3 rounded-lg input-brand" placeholder="Message *" required />
            <button type="submit" className="w-full btn-brand-grad disabled:opacity-60" disabled={submitting}>
              {submitting ? 'Sending…' : 'Send'}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
} 