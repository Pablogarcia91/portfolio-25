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
  'Investments-dashboard': {
    title: 'Financial Dashboard',
    category: 'Product Design',
    year: '2025',
    client: 'Vega Investments',
    role: 'Senior Product Designer',
    overview: 'Crafted the digital infrastructure for an alternative investment platform, unifying General Partners and Limited Partners under a seamless operational ecosystem.',
    challenge: 'General Partners and Limited Partners needed a unified platform to manage complex investment operations. The existing tooling was fragmented across spreadsheets and legacy software, leading to slow decision-making and high operational overhead.',
    solution: 'Designed an end-to-end platform that centralises fund management, portfolio tracking, and investor reporting. Built a flexible component system that accommodates the varied workflows of GPs and LPs without sacrificing clarity.',
    impact: [
      'Unified GP and LP workflows into a single interface',
      'Reduced reporting preparation time significantly',
      'Improved investor transparency and trust',
      'Deployed to production at Vega Investments',
    ],
    details: [
      { label: 'Year', value: '2025' },
      { label: 'Role', value: 'Senior Product Designer' },
      { label: 'Platform', value: 'Web App' },
      { label: 'Tools', value: 'Figma, Protopie' },
    ],
  },
  'energy-platform': {
    title: 'Energy Storage',
    category: 'Product Design',
    year: '2024',
    client: 'elmeunebot',
    role: 'Product Designer',
    overview: 'Engineered the battery management interface for an electric facility, optimizing energy storage operations and maximizing plant efficiency.',
    challenge: 'Plant operators needed real-time visibility into battery state, charge cycles, and grid interactions. The absence of a dedicated interface meant decisions were delayed and efficiency was left on the table.',
    solution: 'Designed a monitoring and control dashboard that surfaces battery health, energy flow, and efficiency metrics at a glance. Focused on data density without overwhelming the operator.',
    impact: [
      'Real-time battery state monitoring across all units',
      'Streamlined operator decision-making',
      'Improved plant efficiency through better data visibility',
    ],
    details: [
      { label: 'Year', value: '2024' },
      { label: 'Role', value: 'Product Designer' },
      { label: 'Platform', value: 'Web App' },
      { label: 'Tools', value: 'Figma' },
    ],
  },
  'cars-marketplace': {
    title: 'Creditas Auto',
    category: 'Product Design',
    year: '2023',
    client: 'Creditas',
    role: 'Product Designer',
    overview: 'Designed the user experience for a second-hand car marketplace, streamlining the buying and selling process with speed and simplicity.',
    challenge: 'The used car market in Brazil is fragmented and trust is low. Users struggled with complex listing flows, opaque pricing, and lack of confidence in the purchase process.',
    solution: 'Redesigned the listing and browsing experience from the ground up, simplifying the seller flow to a few key steps and making the buyer journey transparent with clear pricing and vehicle history.',
    impact: [
      'Reduced listing creation time',
      'Increased buyer trust through transparent pricing',
      'Improved conversion through simplified checkout',
    ],
    details: [
      { label: 'Year', value: '2023' },
      { label: 'Role', value: 'Product Designer' },
      { label: 'Platform', value: 'Web, Mobile' },
      { label: 'Tools', value: 'Figma, Maze' },
    ],
  },
  'core-platform': {
    title: 'Lucera Energía',
    category: 'Product Design',
    year: '2021',
    client: 'Lucera Energía',
    role: 'Product Designer',
    overview: 'Designed the home energy dashboard for a consumption platform, empowering users to monitor, save, and optimize their household energy usage.',
    challenge: 'Residential energy consumers had no intuitive way to understand their usage patterns or act on them. The existing billing interface was opaque and left users feeling powerless over their costs.',
    solution: 'Created a consumption dashboard that breaks down energy use by time of day, appliance category, and cost. Added actionable recommendations that guide users toward meaningful savings.',
    impact: [
      'Gave users first-time visibility into consumption patterns',
      'Improved engagement with energy-saving recommendations',
      'Reduced support contacts by clarifying billing breakdowns',
    ],
    details: [
      { label: 'Year', value: '2021' },
      { label: 'Role', value: 'Product Designer' },
      { label: 'Platform', value: 'Web App' },
      { label: 'Tools', value: 'Figma, Hotjar' },
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
