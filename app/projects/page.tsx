'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FlipText } from '@/components/flip-text';

const sideProjects = [
  {
    title: 'Beat Weaver',
    description: 'Cool keyboard to play around and make your own beats.',
    url: 'https://beaver-keyboard.vercel.app/',
    image: '/side-projects/keyboard-beaver.png',
    year: '2024',
  },
  {
    title: 'Financial Dictionary',
    description: 'Learn and become familiar with financial terminologies.',
    url: 'https://finance-dictionary.vercel.app/',
    image: '/side-projects/dictionary.png',
    year: '2024',
  },
  {
    title: 'BSV Flamingos',
    description: 'Collect game statistics of my team and be open for all.',
    url: 'https://bsv-flamingos.vercel.app/',
    image: '/side-projects/flamingos.png',
    year: '2023',
  },
  {
    title: 'Habit Tracker',
    description: 'Easy way to start a new healthy life habits.',
    url: 'https://personal-progress-mate.lovable.app/',
    image: '/side-projects/habits-app.png',
    year: '2023',
  },
];

export default function Projects() {
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
          <h1 className="text-xl font-medium mb-4"><FlipText>Side Projects</FlipText></h1>
          <p className="text-[14px] sm:text-[15px] leading-relaxed text-(--v3-fg)/60">
            Things I build outside of work — experiments, tools, and fun ideas.
          </p>
        </section>

        {/* Projects */}
        <section>
          <div className="space-y-2">
            {sideProjects.map((project) => (
              <a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-3 -mx-3 rounded-lg hover:bg-(--v3-elevated) transition-colors"
              >
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-md shrink-0 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-0.5">
                    <p className="text-sm font-medium group-hover:opacity-60 transition-opacity">
                      {project.title}
                    </p>
                    <span className="text-[11px] text-(--v3-fg)/25 shrink-0">{project.year}</span>
                  </div>
                  <p className="text-[13px] text-(--v3-fg)/45 sm:truncate">{project.description}</p>
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
        <footer className="mt-16 pt-8 border-t border-(--v3-fg)/8">
          <p className="text-[11px] text-(--v3-fg)/25">
            &copy; {new Date().getFullYear()} Pablo García
          </p>
        </footer>
      </div>
    </main>
  );
}
