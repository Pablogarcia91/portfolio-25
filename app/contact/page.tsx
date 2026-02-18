'use client';

import { motion } from 'framer-motion';

const contactMethods = [
  {
    name: 'Email',
    value: 'hello@pablogarcia.com',
    href: 'mailto:hello@pablogarcia.com',
  },
  {
    name: 'LinkedIn',
    value: 'linkedin.com/in/pablogarcia',
    href: 'https://linkedin.com/in/pablogarcia',
  },
  {
    name: 'Twitter',
    value: '@pablogarcia',
    href: 'https://twitter.com/pablogarcia',
  },
  {
    name: 'Dribbble',
    value: 'dribbble.com/pablogarcia',
    href: 'https://dribbble.com/pablogarcia',
  },
];

export default function Contact() {
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
              Let's Work Together
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              I'm always interested in hearing about new projects and opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="px-6 sm:px-8 lg:px-12 py-20 border-b border-border/40">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20"
          >
            <div className="lg:col-span-4">
              <h2 className="text-sm uppercase tracking-wider text-muted-foreground">
                Get in Touch
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-8">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.name}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, delay: index * 0.1 }}
                    className="block group"
                  >
                    <div className="flex items-center justify-between py-4 border-t border-border/40">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          {method.name}
                        </p>
                        <p className="text-base sm:text-lg group-hover:text-[#007A33] transition-colors">
                          {method.value}
                        </p>
                      </div>
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
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </motion.a>
                ))}
                <div className="border-t border-border/40" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Availability */}
      <section className="px-6 sm:px-8 lg:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20"
          >
            <div className="lg:col-span-4">
              <h2 className="text-sm uppercase tracking-wider text-muted-foreground">
                Availability
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#007A33] rounded-full animate-pulse" />
                  <p className="text-base">
                    Currently available for new projects
                  </p>
                </div>
                <p className="text-base text-muted-foreground">
                  I typically respond within 24 hours. Looking forward to hearing about your project.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
