'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { use } from 'react';
import { FlipText } from '@/components/flip-text';

const projectsData: Record<string, {
  title: string;
  category: string;
  year: string;
  client: string;
  role: string;
  overview: string;
  challenge: string;
  solution: string;
  impact: string[];
  details: { label: string; value: string }[];
}> = {
  'ecommerce-redesign': {
    title: 'E-Commerce Platform Redesign',
    category: 'Product Design',
    year: '2024',
    client: 'ShopFlow Inc.',
    role: 'Lead Product Designer',
    overview: 'A complete redesign of an e-commerce platform focusing on improving conversion rates and creating a seamless shopping experience across all devices.',
    challenge: 'The existing platform had a conversion rate of 1.2% and users were abandoning their carts at an alarming rate of 78%. The checkout process was confusing, and mobile users were particularly frustrated.',
    solution: 'We conducted extensive user research, redesigned the entire user journey, simplified the checkout process from 6 steps to 3, and implemented a new design system that improved consistency across the platform.',
    impact: [
      'Increased conversion rate from 1.2% to 3.8%',
      'Reduced cart abandonment from 78% to 42%',
      'Improved mobile revenue by 156%',
      'Decreased customer support tickets by 34%',
    ],
    details: [
      { label: 'Duration', value: '4 months' },
      { label: 'Team', value: '2 Designers, 4 Engineers, 1 PM' },
      { label: 'Platform', value: 'Web, iOS, Android' },
      { label: 'Tools', value: 'Figma, Protopie, Mixpanel' },
    ],
  },
  'financial-dashboard': {
    title: 'Financial Dashboard',
    category: 'UX/UI Design',
    year: '2024',
    client: 'FinTech Solutions',
    role: 'Senior UX/UI Designer',
    overview: 'Designed a comprehensive financial dashboard for managing investments and tracking portfolio performance with real-time data visualization.',
    challenge: 'Users needed to make quick, informed decisions based on complex financial data. The previous interface was overwhelming with too much information and poor data hierarchy.',
    solution: 'Created a modular dashboard system with customizable widgets, clear data visualization, and smart alerts. Focused on progressive disclosure to prevent information overload.',
    impact: [
      'Reduced time to find key metrics by 65%',
      'Increased daily active users by 89%',
      'Improved user satisfaction score from 6.2 to 8.9',
      'Decreased onboarding time by 40%',
    ],
    details: [
      { label: 'Duration', value: '3 months' },
      { label: 'Team', value: '1 Designer, 3 Engineers' },
      { label: 'Platform', value: 'Web, Desktop App' },
      { label: 'Tools', value: 'Figma, D3.js, Amplitude' },
    ],
  },
  'health-app': {
    title: 'Health & Wellness App',
    category: 'Mobile Design',
    year: '2023',
    client: 'WellBeing Co.',
    role: 'Product Designer',
    overview: 'Created an intuitive health tracking app that helps users monitor their wellness goals, track activities, and maintain healthy habits.',
    challenge: 'Health apps often fail because they require too much manual input. Users lose motivation when tracking becomes a chore rather than a helpful tool.',
    solution: 'Designed a gamified experience with smart defaults, automatic activity detection, and social features that make health tracking engaging and effortless.',
    impact: [
      '4.8 star rating in App Store',
      '67% of users active after 3 months',
      'Featured in App Store "Apps We Love"',
      '2.3M downloads in first year',
    ],
    details: [
      { label: 'Duration', value: '5 months' },
      { label: 'Team', value: '2 Designers, 5 Engineers, 1 PM' },
      { label: 'Platform', value: 'iOS, Android, Apple Watch' },
      { label: 'Tools', value: 'Figma, Principle, Firebase' },
    ],
  },
};

const projectSlugs = Object.keys(projectsData);

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = projectsData[slug];

  if (!project) {
    notFound();
  }

  const currentIndex = projectSlugs.indexOf(slug);
  const nextSlug = projectSlugs[(currentIndex + 1) % projectSlugs.length];
  const nextProject = projectsData[nextSlug];
  const prevSlug = projectSlugs[(currentIndex - 1 + projectSlugs.length) % projectSlugs.length];
  const prevProject = projectsData[prevSlug];

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
      <div className="max-w-2xl mx-auto px-6 md:px-8 pt-28 pb-20">

        {/* Back link */}
        <Link
          href="/#work"
          className="inline-block text-[13px] text-(--v3-fg)/40 hover:text-(--v3-fg) transition-colors mb-12"
        >
          &larr; Back
        </Link>

        {/* Title */}
        <section className="mb-12">
          <h1 className="text-xl font-medium mb-3"><FlipText>{project.title}</FlipText></h1>
          <p className="text-[15px] leading-relaxed text-(--v3-fg)/60">
            {project.overview}
          </p>
        </section>

        {/* Details */}
        <section className="mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {project.details.map((detail) => (
              <div key={detail.label}>
                <p className="text-[11px] uppercase tracking-[0.15em] text-(--v3-fg)/35 mb-1">
                  {detail.label}
                </p>
                <p className="text-[13px]">{detail.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Project image placeholder */}
        <div className="aspect-video bg-(--v3-elevated) rounded-md mb-12" />

        {/* Challenge */}
        <section className="mb-12">
          <h2 className="text-sm uppercase tracking-[0.15em] text-(--v3-fg)/35 mb-4">
            <FlipText>Challenge</FlipText>
          </h2>
          <p className="text-[15px] leading-relaxed text-(--v3-fg)/70">
            {project.challenge}
          </p>
        </section>

        {/* Solution */}
        <section className="mb-12">
          <h2 className="text-sm uppercase tracking-[0.15em] text-(--v3-fg)/35 mb-4">
            <FlipText>Solution</FlipText>
          </h2>
          <p className="text-[15px] leading-relaxed text-(--v3-fg)/70">
            {project.solution}
          </p>
        </section>

        {/* Impact */}
        <section className="mb-16">
          <h2 className="text-sm uppercase tracking-[0.15em] text-(--v3-fg)/35 mb-4">
            <FlipText>Impact</FlipText>
          </h2>
          <ul className="space-y-2">
            {project.impact.map((item, index) => (
              <li key={index} className="text-[15px] text-(--v3-fg)/70 flex items-baseline gap-3">
                <span className="w-1 h-1 bg-(--v3-fg)/25 rounded-full shrink-0 relative top-[0.4em]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Prev / Next project */}
        <section className="pt-8 border-t border-(--v3-fg)/8">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-6">
            <Link
              href={`/work/${prevSlug}`}
              className="group flex items-center gap-3 flex-1 min-w-0"
            >
              <div className="w-14 h-14 sm:w-20 sm:h-20 bg-(--v3-elevated) rounded-md shrink-0 group-hover:bg-(--v3-elevated-hover) transition-colors" />
              <div className="min-w-0">
                <p className="text-[11px] uppercase tracking-[0.15em] text-(--v3-fg)/35 mb-1">
                  Previous
                </p>
                <p className="text-sm font-medium group-hover:opacity-60 transition-opacity truncate">
                  {prevProject.title}
                </p>
              </div>
            </Link>
            <Link
              href={`/work/${nextSlug}`}
              className="group flex items-center gap-3 flex-1 min-w-0 sm:justify-end sm:text-right"
            >
              <div className="w-14 h-14 sm:w-20 sm:h-20 bg-(--v3-elevated) rounded-md shrink-0 group-hover:bg-(--v3-elevated-hover) transition-colors sm:order-last" />
              <div className="min-w-0">
                <p className="text-[11px] uppercase tracking-[0.15em] text-(--v3-fg)/35 mb-1">
                  Next
                </p>
                <p className="text-sm font-medium group-hover:opacity-60 transition-opacity truncate">
                  {nextProject.title}
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-(--v3-fg)/8">
          <p className="text-[11px] text-(--v3-fg)/25">
            &copy; {new Date().getFullYear()} Pablo García
          </p>
        </footer>
      </div>
    </main>
  );
}
