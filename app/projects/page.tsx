'use client';

import { motion } from 'framer-motion';

const sideProjects = [
  {
    id: 1,
    title: 'DesignKit',
    description: 'A collection of reusable UI components and design patterns for rapid prototyping.',
    year: '2024',
    status: 'Active',
    link: 'https://github.com',
    tech: ['Figma', 'React', 'Tailwind CSS'],
  },
  {
    id: 2,
    title: 'ColorPalette Generator',
    description: 'An AI-powered tool that generates harmonious color palettes based on mood and context.',
    year: '2024',
    status: 'Active',
    link: 'https://github.com',
    tech: ['Next.js', 'OpenAI', 'TypeScript'],
  },
  {
    id: 3,
    title: 'Icon Library',
    description: 'A curated collection of 500+ customizable icons for modern interfaces.',
    year: '2023',
    status: 'Completed',
    link: 'https://github.com',
    tech: ['SVG', 'Figma', 'Documentation'],
  },
  {
    id: 4,
    title: 'Portfolio Template',
    description: 'An open-source portfolio template for designers and developers.',
    year: '2023',
    status: 'Active',
    link: 'https://github.com',
    tech: ['Next.js', 'Framer Motion', 'MDX'],
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <section className="px-6 sm:px-8 lg:px-12 py-20 sm:py-32 border-b border-border/40">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-6xl font-display font-medium tracking-tight leading-[1.1] mb-6">
              Side Projects
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Experimental projects and tools built to explore new ideas and give back to the community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects List */}
      <section className="px-6 sm:px-8 lg:px-12 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-0">
            {sideProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border-t border-border/40 py-8 sm:py-10"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8">
                    <div className="sm:col-span-1 text-sm text-muted-foreground">
                      {String(project.id).padStart(2, '0')}
                    </div>

                    <div className="sm:col-span-6 lg:col-span-5">
                      <h3 className="text-xl sm:text-3xl font-display font-medium tracking-tight mb-2 group-hover:text-[#007A33] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs border border-border rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="sm:col-span-3 lg:col-span-4">
                      <span className={`inline-block px-3 py-1 text-xs rounded-full ${
                        project.status === 'Active'
                          ? 'bg-[#007A33]/10 text-[#007A33]'
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    <div className="sm:col-span-2 flex items-start justify-between sm:justify-end gap-4">
                      <span className="text-sm text-muted-foreground">
                        {project.year}
                      </span>
                      <svg
                        className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
          <div className="border-t border-border/40" />
        </div>
      </section>
    </main>
  );
}
