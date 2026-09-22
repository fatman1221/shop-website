'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FormEvent, useCallback, useEffect, useRef, useState } from 'react';

const heroSlides = [
  { src: '/images/hero/hero-1-web.jpg', alt: 'Hand-painted enamel pins in production' },
  { src: '/images/hero/hero-2-web.jpg', alt: 'IP merchandise sampling' },
  { src: '/images/hero/hero-3-web.jpg', alt: 'Collectible figures craftsmanship' },
  { src: '/images/hero/hero-4-web.jpg', alt: 'Plush and soft goods production' },
  { src: '/images/hero/hero-5-web.jpg', alt: 'Product packaging and design' },
  { src: '/images/hero/hero-6-web.jpg', alt: 'IP-themed accessories' },
  { src: '/images/hero/hero-7-web.jpg', alt: 'Finished merchandise collection' },
];

const workSteps = [
  {
    title: 'IP-Faithful Design',
    text: 'IP insight · Fan culture · Brand language',
  },
  {
    title: 'Shape the Product',
    text: 'Concepts · Design · Product strategy',
  },
  {
    title: 'Develop & Prototype',
    text: 'Sampling · Materials · Product refinement',
  },
  {
    title: 'Produce Flexibly',
    text: 'Flexible MOQ · Fast sampling response · Quality control',
  },
  {
    title: 'Bring to Market',
    text: 'Logistics · Channels · Launch support',
  },
  {
    title: 'Grow the Business',
    text: 'Community expansion · Scale-up · Ongoing cash flow',
  },
];

const stats = [
  { value: '100+', label: 'Product Categories' },
  { value: '150+', label: 'Global Warehouses' },
  { value: '< 10 days', label: 'Sampling Speed' },
  { value: '< 100', label: 'Minimum Order' },
];

const startOptions = [
  'Help me explore product ideas',
  'Show me samples',
  'Start with a prototype',
];

export default function HomePage() {
  const [submitting, setSubmitting] = useState(false);
  const [selectedStarts, setSelectedStarts] = useState<string[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((current) => (current + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (current) => (current - 1 + heroSlides.length) % heroSlides.length
    );
  }, []);

  const resetAutoplay = useCallback(() => {
    if (slideTimer.current) clearInterval(slideTimer.current);
    slideTimer.current = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);
  }, []);

  useEffect(() => {
    slideTimer.current = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);
    return () => {
      if (slideTimer.current) clearInterval(slideTimer.current);
    };
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    resetAutoplay();
  };

  const toggleStartOption = (option: string) => {
    setSelectedStarts((current) =>
      current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option]
    );
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (selectedStarts.length === 0) {
      alert('Please choose where we should start.');
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const ip = String(formData.get('ip') || '').trim();
    const contact = String(formData.get('contact') || '').trim();
    const notes = String(formData.get('notes') || '').trim();

    const payload = {
      name,
      email: contact,
      company: ip,
      message: [
        `IP: ${ip}`,
        `Where should we start: ${selectedStarts.join(', ')}`,
        notes ? `Notes: ${notes}` : 'Notes: None',
      ].join('\n'),
    };

    try {
      setSubmitting(true);
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        cache: 'no-store',
      });

      if (response.ok) {
        alert('Submitted successfully');
        form.reset();
        setSelectedStarts([]);
      } else {
        const data = await response.json().catch(() => ({}));
        alert(data?.error || 'Submit failed');
      }
    } catch {
      alert('Network error, please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-neutral-950">
      {/* ============ Hero + Carousel ============ */}
      <section className="relative -mt-16 flex min-h-screen items-center overflow-hidden">
        {/* Slides */}
        {heroSlides.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className={`object-cover transition-transform duration-[7000ms] ease-out ${
                index === currentSlide ? 'scale-105' : 'scale-100'
              }`}
            />
          </div>
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/40" />

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-32 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-neutral-950 md:text-6xl lg:text-7xl">
              Where Great <span className="text-brand">IPs</span> Become Real Products
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-700 md:text-xl">
              Welcome to Brave Dazzle, your IP merchandise development partner. We help
              game, anime, animation, entertainment and lifestyle IPs turn their worlds
              into products fans want to own — from concept to consumer, with one
              partner. You focus on your IP. We handle the rest!
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#start-a-project" className="btn-brand-grad text-sm">
                START A PROJECT
              </a>
              <span className="text-sm text-neutral-500">
                Start your project with Brave Dazzle.
              </span>
            </div>
          </div>
        </div>

        {/* Carousel arrows */}
        <button
          aria-label="Previous slide"
          onClick={() => {
            prevSlide();
            resetAutoplay();
          }}
          className="absolute left-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 text-neutral-800 backdrop-blur transition hover:bg-white md:flex"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          aria-label="Next slide"
          onClick={() => {
            nextSlide();
            resetAutoplay();
          }}
          className="absolute right-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 text-neutral-800 backdrop-blur transition hover:bg-white md:flex"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 right-6 z-20 flex items-center gap-2 lg:right-8">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.src}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'w-8 bg-brand'
                  : 'w-2 bg-neutral-900/30 hover:bg-neutral-900/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* ============ How We Work: 6-step flow ============ */}
      <section className="bg-[#f7f3ea] px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
              How We Work
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {workSteps.map((step, index) => (
              <article
                key={step.title}
                className="relative border border-neutral-950/10 bg-white p-7 transition hover:border-[var(--brand-start)] hover:shadow-lg md:p-8"
              >
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--brand-start)] text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-semibold text-neutral-950">{step.title}</h3>
                  {index < workSteps.length - 1 && (
                    <svg
                      aria-hidden
                      className="ml-auto hidden h-5 w-5 text-[var(--brand-start)] lg:block"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 7l5 5-5 5" />
                    </svg>
                  )}
                </div>
                <p className="text-sm leading-6 text-neutral-600">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA banner ============ */}
      <section className="bg-white px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl bg-[linear-gradient(90deg,var(--brand-start),var(--brand-end))] px-6 py-16 text-center text-white md:px-16 md:py-20">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            HAVE AN IP? LET&apos;S MAKE IT REAL.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/85 md:text-lg">
            Tell us about your IP. We&apos;ll show you what&apos;s possible.
          </p>
          <a
            href="#start-a-project"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-sm font-semibold uppercase tracking-wide text-neutral-900 transition hover:bg-neutral-100"
          >
            Start a Project
          </a>
        </div>
      </section>

      {/* ============ By the numbers ============ */}
      <section className="bg-[#f7f3ea] px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold uppercase tracking-tight text-neutral-950 md:text-4xl">
              Brave Dazzle by the Numbers
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-semibold text-brand md:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-3 text-xs font-medium uppercase tracking-wide text-neutral-600 md:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Let's talk form ============ */}
      <section
        id="start-a-project"
        className="bg-white px-6 py-20 text-neutral-950 lg:px-8 lg:py-28"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase text-brand">Let&apos;s talk.</p>
            <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
              No fees. No pressure. Just a conversation.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-neutral-600">
              Tell us about your IP, your fans, and what you&apos;re thinking. We&apos;ll turn it into a clear product plan.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              name="name"
              className="w-full border border-neutral-200 bg-white px-4 py-4 text-neutral-950 placeholder:text-neutral-400 focus:border-[var(--brand-start)] focus:outline-none"
              placeholder="Your name / Your studio name *"
              required
            />
            <input
              name="ip"
              className="w-full border border-neutral-200 bg-white px-4 py-4 text-neutral-950 placeholder:text-neutral-400 focus:border-[var(--brand-start)] focus:outline-none"
              placeholder="Your IP *"
              required
            />
            <input
              name="contact"
              className="w-full border border-neutral-200 bg-white px-4 py-4 text-neutral-950 placeholder:text-neutral-400 focus:border-[var(--brand-start)] focus:outline-none"
              placeholder="Email or WhatsApp *"
              required
            />

            <fieldset className="border border-neutral-200 p-4">
              <legend className="px-2 text-sm text-neutral-600">Where should we start? *</legend>
              <div className="grid gap-3 pt-2 md:grid-cols-3">
                {startOptions.map((option) => (
                  <label key={option} className="flex cursor-pointer items-start gap-3 text-sm text-neutral-700">
                    <input
                      type="checkbox"
                      checked={selectedStarts.includes(option)}
                      onChange={() => toggleStartOption(option)}
                      className="mt-1 h-4 w-4 accent-[var(--brand-start)]"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <textarea
              name="notes"
              rows={5}
              className="w-full border border-neutral-200 bg-white px-4 py-4 text-neutral-950 placeholder:text-neutral-400 focus:border-[var(--brand-start)] focus:outline-none"
              placeholder="Notes"
            />
            <button
              type="submit"
              className="btn-brand-grad w-full disabled:cursor-not-allowed disabled:opacity-60"
              disabled={submitting}
            >
              {submitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
