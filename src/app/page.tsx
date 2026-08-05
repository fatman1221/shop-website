'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';

const workSteps = [
  {
    title: 'Fan Mapping',
    text: "We immerse ourselves in fan communities - Discord, Reddit, forums, and real-life gatherings. We learn what they truly care about, what turns them off, and what they'd actually pay for.",
  },
  {
    title: 'IP Character Incubation',
    text: 'We incubate original IP characters from the ground up - concept design, visual development, and full character creation - to boost brand recognition and market impact.',
  },
  {
    title: 'Product Innovation',
    text: 'Based on fan insights, we design products fans genuinely want - not logo-stamped merch, but items they would proudly show off as a badge of belonging.',
  },
  {
    title: 'Global Orchestration',
    text: 'You name the destination - Europe, North America, Southeast Asia, anywhere. We figure out the route. No middlemen, no handoffs.',
  },
];

const stats = [
  { value: '100+', label: 'Product Categories' },
  { value: '150+', label: 'Global Warehouses' },
  { value: '<7', label: 'Sample in 7 Days' },
  { value: '<100', label: 'Minimum Order' },
];

const startOptions = [
  'Start with a Fan Expansion Note',
  'Show me 3 concept sketches',
  'Start with a physical prototype',
];

export default function HomePage() {
  const [submitting, setSubmitting] = useState(false);
  const [selectedStarts, setSelectedStarts] = useState<string[]>([]);

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
    <main className="home-snap-page min-h-screen bg-[#f7f3ea] text-neutral-950">
      <section className="home-snap-section relative h-screen overflow-hidden bg-white -mt-16">
        <div className="relative z-10 mx-auto flex h-screen max-w-7xl flex-col justify-center px-6 pb-16 pt-32 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-center">
            <div className="max-w-4xl">
              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] text-neutral-950 md:text-7xl lg:text-8xl">
                Turn niche passions into global resonance
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600 md:text-xl">
                Full-spectrum IP product solutions - from design to market activation.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#lets-talk"
                  className="btn-brand-grad inline-flex items-center justify-center text-sm"
                >
                  Let&apos;s talk
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-800 transition hover:border-[var(--brand-start)] hover:text-brand"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="max-w-sm border-l-2 border-[var(--brand-start)] bg-neutral-50 px-6 py-5 text-neutral-950 lg:justify-self-end">
              <p className="text-xs font-semibold uppercase text-brand">Creative Fields</p>
              <p className="mt-4 text-2xl font-semibold leading-tight text-neutral-900 md:text-3xl">
                IP · Fandom · Creativity · Digital · Brand
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="mx-auto grid max-w-7xl grid-cols-2 bg-[linear-gradient(90deg,var(--brand-start),var(--brand-end))] px-6 py-5 text-white md:grid-cols-4 lg:px-8">
            {stats.map((stat) => (
              <div key={stat.label} className="py-3 md:px-5">
                <div className="text-3xl font-semibold md:text-4xl">{stat.value}</div>
                <div className="mt-1 text-xs uppercase text-white/68">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-snap-section flex min-h-screen items-center bg-[#f7f3ea] px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-14 text-center">
            <h2 className="text-5xl font-semibold tracking-tight text-neutral-950 md:text-7xl">
              How We Work
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {workSteps.map((step, index) => (
              <article key={step.title} className="border border-neutral-950/10 bg-[#f7f3ea] p-7 md:p-8">
                <div className="mb-8 text-sm font-semibold text-neutral-500">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-2xl font-semibold text-neutral-950">{step.title}</h3>
                <p className="mt-5 text-base leading-7 text-neutral-600">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="lets-talk" className="home-snap-section flex min-h-screen items-center bg-white px-6 py-20 text-neutral-950 lg:px-8 lg:py-28">
        <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase text-brand">Let&apos;s talk.</p>
            <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
              A conversation costs nothing. A partnership starts here.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-neutral-600">
              Tell us the IP, audience, and first move you have in mind. We will help turn the signal into a practical product path.
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
