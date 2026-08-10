'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FlipText } from '@/components/flip-text';

const experience = [
  {
    period: '2024 — Current',
    role: 'Senior Product Designer',
    company: 'Vega Investments / UK 🇬🇧',
    description: 'Working across different workstreams depending on the trade phase, blending design engineering with vibe coding. Building out a VUI design system and using AI-driven prototyping to move faster from concept to functional flow.',
  },
  {
    period: '2024 — Current',
    role: 'Associate Professor',
    company: 'IEM Business School',
    description: 'Teaching Fundamentals of Interface Design II, focused on building components with interactive variants and practical prototyping skills. Guiding students on usability, content hierarchy, and UI best practices.',
  },
  {
    period: '2023 — 2024',
    role: 'Product Designer',
    company: 'elmeunebot',
    description: 'Owned product strategy while acting as the connection point between stakeholders and clients. Designed navigation flows and interactions to bring new features to life.',
  },
  {
    period: '2023 — 2023',
    role: 'Senior Product Designer',
    company: 'Clidrive',
    description: 'Shaped product strategy and business vision through continuous discovery with Product and Engineering teams. Designed navigation flows, interactions, and high-fidelity prototypes.',
  },
  {
    period: '2021 — 2023',
    role: 'Product Designer',
    company: 'Creditas / BRA 🇧🇷',
    description: 'Led research and continuous discovery alongside Product and Engineering teams across Valencia and São Paulo. Designed navigation flows and prototypes, validated them with real users, and tracked results against key metrics.',
  },
  {
    period: '2019 — 2021',
    role: 'Product Designer',
    company: 'Lucera Energía',
    description: 'Designed and built the Neon design system alongside landing pages, web pieces, and the Lucera App. Provided ongoing design support for the Energy GO and Más Móvil energía products.',
  },
  {
    period: '2018 — 2019',
    role: 'Display Designer',
    company: 'SCPF',
    description: 'Designed digital pieces and laid out newsletters for clients including BMW, Danone, and Selenta Group. Built dynamic, CSS-driven banners for multiple campaigns.',
  },
  {
    period: '2017 — 2018',
    role: 'Visual web designer',
    company: 'Flashback group',
    description: 'Handled graphic design across on- and offline formats, from advertising pieces to online campaigns. Designed, laid out, and built web pages with HTML5, CSS3, WordPress, and PHP, plus branding and web support.',
  },
  {
    period: '2015 — 2017',
    role: 'Visual web designer',
    company: 'Cuatroochenta',
    description: 'Designed graphic pieces for Google Ads and social media campaigns, plus web components for client sites. Built and laid out web pages with HTML5, CSS3, WordPress, and PHP.',
  },
];


const education = [
  { title: 'Financial Investment Principles', place: 'Oxford University', year: '2025' },
  { title: 'Master\'s Degree in Interaction Design and User Experience (UX)', place: 'Univesitat Oberta de Catalunya', year: '2022' },
  { title: 'Bachelor\'s Degree in Industrial Design and Product Development', place: 'Universitat Jaume I', year: '2014' },
  ];

const languages = [
  { name: 'Español', level: 'Native' },
  { name: 'Valencià/Català', level: 'Native' },
  { name: 'English', level: 'Upper Intermediate (B2)' },
  { name: 'Português', level: 'Nível Profissional' },
];

export default function About() {
  const [expanded, setExpanded] = useState(false);

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
          <h1 className="text-xl font-medium mb-4"><FlipText>About</FlipText></h1>
          <p className="text-[14px] sm:text-[15px] leading-relaxed text-(--v3-fg)/60"> Based in València 🥘🍊. I love finding and developing possible solutions to different problems to make everyone&apos;s life a little bit easier. Understand how to translate the needs of the user to digital products.</p>
        </section>

        {/* Bio */}
        <section className="mb-10 sm:mb-16">
          <h2 className="text-sm uppercase tracking-[0.15em] text-(--v3-fg)/35 mb-4">
            <FlipText>Background</FlipText>
          </h2>
          <div className="space-y-4">
            <p className="text-[14px] sm:text-[15px] leading-relaxed text-(--v3-fg)/70">
              Throughout my career, I&apos;ve had the opportunity to work with startups and established companies, helping them transform complex challenges into intuitive, delightful user experiences.
            </p>
            <p className="text-[14px] sm:text-[15px] leading-relaxed text-(--v3-fg)/70">
              Experience working in small and large teams. Different sectors and types of companies. Most importantly, I feel comfortable in any type of environment based on a strong contribution to team culture.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-10 sm:mb-16">
          <h2 className="text-sm uppercase tracking-[0.15em] text-(--v3-fg)/35 mb-6 sm:mb-8">
            <FlipText>Experience</FlipText>
          </h2>
          <div>
            <div className="relative">
              <div
                className={`space-y-8 overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                  expanded ? 'max-h-[2000px]' : 'max-h-[420px]'
                }`}
              >
                {experience.map((job, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:gap-6">
                    <span className="text-[13px] text-(--v3-fg)/30 sm:w-28 sm:shrink-0 mb-0.5 sm:mb-0">
                      {job.period}
                    </span>
                    <div>
                      <p className="text-sm font-medium">{job.role}</p>
                      <p className="text-[13px] text-(--v3-fg)/45 mb-1.5">{job.company}</p>
                      <p className="text-[13px] leading-relaxed text-(--v3-fg)/50">{job.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Fade overlay */}
              <div
                className={`pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-(--v3-bg) to-transparent transition-opacity duration-500 ${
                  expanded ? 'opacity-0' : 'opacity-100'
                }`}
              />
            </div>

            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-4 text-[13px] text-(--v3-fg)/40 hover:text-(--v3-fg) transition-colors cursor-pointer"
            >
              {expanded ? 'See less ↑' : 'See more ↓'}
            </button>
          </div>
        </section>

        {/* Education & Languages */}
        <div className="space-y-10 sm:space-y-16 mb-10 sm:mb-16">
          <section>
            <h2 className="text-sm uppercase tracking-[0.15em] text-(--v3-fg)/35 mb-4">
              <FlipText>Education</FlipText>
            </h2>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.title}>
                  <p className="text-sm font-medium">{edu.title}</p>
                  <p className="text-[13px] text-(--v3-fg)/45">{edu.place}, {edu.year}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-sm uppercase tracking-[0.15em] text-(--v3-fg)/35 mb-4">
              <FlipText>Languages</FlipText>
            </h2>
            <div className="space-y-4">
              {languages.map((lang) => (
                <div key={lang.name}>
                  <p className="text-sm font-medium">{lang.name}</p>
                  <p className="text-[13px] text-(--v3-fg)/45">{lang.level}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

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
