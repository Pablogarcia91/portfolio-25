'use client';

import Link from 'next/link';
import { FlipText } from '@/components/flip-text';

const contactMethods = [
  {
    name: 'Email',
    value: 'hellopgarciadesign@gmail.com',
    href: 'mailto:hellopgarciadesign@gmail.com',
  },
  {
    name: 'LinkedIn',
    value: 'pablo-garcia-pedro',
    href: 'https://www.linkedin.com/in/pablo-garcia-pedro/',
  },
];

export default function Contact() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-(--v3-bg)/90 backdrop-blur-sm">
        <div className="max-w-2xl mx-auto px-6 md:px-8 py-4">
          <Link href="/" className="text-sm font-medium hover:opacity-50 transition-opacity">
            pgarciadesign
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 md:px-8 pt-24 sm:pt-28 pb-20">

        {/* Back link */}
        <Link
          href="/"
          className="inline-block text-[13px] text-(--v3-fg)/40 hover:text-(--v3-fg) transition-colors mb-8 sm:mb-12"
        >
          &larr; Back
        </Link>

        {/* Intro */}
        <section className="mb-10 sm:mb-16">
          <h1 className="text-xl font-medium mb-4"><FlipText>Get in touch</FlipText></h1>
          <p className="text-[14px] sm:text-[15px] leading-relaxed text-(--v3-fg)/60">
            Always happy to connect — whether it&apos;s a project, a question, or just a hello.
          </p>
        </section>

        {/* Contact methods */}
        <section className="mb-10 sm:mb-16">
          <div className="space-y-2 text-sm">
            {contactMethods.map((method) => (
              <a
                key={method.name}
                href={method.href}
                target={method.name === 'Email' ? undefined : '_blank'}
                rel={method.name === 'Email' ? undefined : 'noopener noreferrer'}
                className="group flex items-center justify-between p-3 -mx-3 rounded-lg hover:bg-(--v3-elevated) transition-colors"
              >
                <div>
                  <p className="text-[11px] uppercase tracking-[0.12em] text-(--v3-fg)/35 mb-0.5">
                    {method.name}
                  </p>
                  <p className="text-sm text-(--v3-fg)/60 group-hover:text-(--v3-fg) transition-colors">
                    {method.value}
                  </p>
                </div>
                <svg
                  className="w-4 h-4 text-(--v3-fg)/30 group-hover:text-(--v3-fg) transition-colors shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-(--v3-fg)/8">
          <p className="text-[11px] text-(--v3-fg)/25">
            &copy; {new Date().getFullYear()} Pablo García
          </p>
        </footer>
      </div>
    </main>
  );
}
