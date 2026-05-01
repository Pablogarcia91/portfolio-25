'use client';

import Link from 'next/link';
import Image from 'next/image';
import { use } from 'react';
import { notFound } from 'next/navigation';

const projects: Record<string, {
  number: string;
  title: string;
  client: string;
  year: string;
  role: string;
  duration: string;
  tools: string;
  image: string;
  overview: string;
  context: string;
  problem: string;
  process: { phase: string; label: string; description: string }[];
  solution: { heading: string; body: string }[];
  impact: { value: string; label: string }[];
  next: { slug: string; title: string; client: string; image: string };
}> = {
  'Investments-dashboard': {
    number: '01',
    title: 'Financial Dashboard',
    client: 'Vega Investments',
    year: '2025',
    role: 'Senior Product Designer',
    duration: '6 months',
    tools: 'Figma · Protopie · Maze',
    image: '/selected-work/Vega.png',
    overview: 'Vega Investments is an alternative investment platform operating in the UK. I led the end-to-end design of the core platform — a unified workspace where General Partners manage fund operations and Limited Partners track their portfolios in real time.',
    context: 'Alternative investment management is an industry still largely running on spreadsheets, fragmented SaaS tools, and manual email threads. GPs need to track capital deployment, manage fund reporting, and communicate with dozens of LPs — all while maintaining compliance. LPs, on the other side, often have no live visibility into their portfolio.',
    problem: 'The core tension: two very different users — GPs who need control and depth, LPs who need clarity and trust — sharing the same system. Every design decision had to serve both without compromising either. Previous attempts at unified platforms had failed by either overwhelming LPs with operational detail or leaving GPs without the granularity they needed.',
    process: [
      {
        phase: '01',
        label: 'Discovery',
        description: '3 weeks of stakeholder interviews with 4 GPs and 6 LPs across three fund vintages. Mapped the current-state journey for both user types and audited 5 competing tools.',
      },
      {
        phase: '02',
        label: 'Architecture',
        description: 'Defined the information architecture and jobs-to-be-done for each role. Established a dual-mode navigation pattern — same URL structure, role-contextual views.',
      },
      {
        phase: '03',
        label: 'Design',
        description: 'Built a component library in Figma covering 80+ components. Went from rough wireframes to high-fidelity prototypes across 4 core modules: Fund Overview, Capital Tracking, Document Vault, and LP Portal.',
      },
      {
        phase: '04',
        label: 'Testing',
        description: 'Two rounds of remote usability testing with 10 participants. Identified and resolved 3 critical navigation failures and simplified the capital account detail flow from 7 steps to 3.',
      },
      {
        phase: '05',
        label: 'Delivery',
        description: '4-week engineering handoff with weekly design QA sessions. Built a living documentation site in Notion. Platform shipped to production.',
      },
    ],
    solution: [
      {
        heading: 'Dual-mode navigation',
        body: 'A persistent context rail lets users switch between GP View (operational) and LP View (portfolio) without losing their place. The mental model is clear: one platform, two lenses.',
      },
      {
        heading: 'Progressive disclosure for complex data',
        body: 'Financial data is dense by nature. The dashboard surfaces the three metrics each user type cares about most, with deeper breakdowns available on demand — never upfront. This reduced cognitive load and improved first-time task success from 54% to 91%.',
      },
      {
        heading: 'LP Portal with real-time access',
        body: 'LPs can access capital account statements, distribution notices, and fund performance data without contacting the GP team. This eliminated a full reporting cycle that previously took 3 business days and now happens in under an hour.',
      },
    ],
    impact: [
      { value: '–3 days', label: 'Reporting cycle time' },
      { value: '91%', label: 'Task success rate' },
      { value: '100%', label: 'LP onboarding rate' },
      { value: '54→91', label: 'First-attempt success' },
    ],
    next: { slug: 'energy-platform', title: 'Energy Storage', client: 'elmeunebot', image: '/selected-work/Elmeunebot.png' },
  },

  'energy-platform': {
    number: '02',
    title: 'Energy Storage',
    client: 'elmeunebot',
    year: '2024',
    role: 'Product Designer',
    duration: '4 months',
    tools: 'Figma · Maze',
    image: '/selected-work/Elmeunebot.png',
    overview: 'Battery management interface for an electric facility, optimizing energy storage operations and maximizing plant efficiency through real-time monitoring and control.',
    context: 'Energy storage plants are becoming increasingly complex as battery technology scales. Operators need to manage charge cycles, predict degradation, and optimise for grid tariffs — all in real time, often with legacy SCADA systems as the only reference.',
    problem: 'The operators had no dedicated interface for battery management. Decisions were made from raw data exports and phone calls with the engineering team. Efficiency was left on the table because the right information wasn\'t available at the right moment.',
    process: [
      { phase: '01', label: 'Discovery', description: 'On-site visits to the facility. Shadowed 3 operators across different shift patterns to understand real-world workflows and pain points.' },
      { phase: '02', label: 'Architecture', description: 'Mapped the key data streams and control actions. Prioritised ruthlessly: what does an operator need to see in the first 10 seconds of their shift?' },
      { phase: '03', label: 'Design', description: 'High-density dashboard design balancing data density with clarity. Explored 4 different layout approaches before converging on a status-first pattern.' },
      { phase: '04', label: 'Testing', description: 'Scenario-based usability testing with 5 operators. Validated decision time for 6 common operator scenarios.' },
      { phase: '05', label: 'Delivery', description: 'Handed off to the engineering team with full annotated specs. Provided two weeks of implementation support.' },
    ],
    solution: [
      { heading: 'Status-first dashboard', body: 'The primary view surfaces battery state, current charge rate, and efficiency index at a glance. Everything else is secondary.' },
      { heading: 'Alert hierarchy', body: 'Three-tier alert system (info, warning, critical) with clear recommended actions, reducing response time to anomalies.' },
      { heading: 'Shift handover report', body: 'Auto-generated end-of-shift summary giving incoming operators instant context without manual documentation.' },
    ],
    impact: [
      { value: '–40%', label: 'Decision time' },
      { value: '3-tier', label: 'Alert system' },
      { value: '4.6/5', label: 'Operator satisfaction' },
      { value: '100%', label: 'Shift coverage' },
    ],
    next: { slug: 'cars-marketplace', title: 'Creditas Auto', client: 'Creditas', image: '/selected-work/Creditas.png' },
  },

  'cars-marketplace': {
    number: '03',
    title: 'Creditas Auto',
    client: 'Creditas',
    year: '2023',
    role: 'Product Designer',
    duration: '5 months',
    tools: 'Figma · Maze · Hotjar',
    image: '/selected-work/Creditas.png',
    overview: 'User experience for a second-hand car marketplace in Brazil, streamlining the buying and selling process with speed and simplicity.',
    context: 'Brazil\'s used car market is one of the largest in the world but deeply fragmented. Creditas, known for its fintech products, was entering the market with a differentiated offer: transparent pricing, financing built in, and a trust layer backed by the Creditas brand.',
    problem: 'The challenge was building trust fast. Used car transactions carry high anxiety — buyers fear hidden problems, sellers fear lowball offers. Every friction point in the flow amplifies that anxiety and kills conversion.',
    process: [
      { phase: '01', label: 'Discovery', description: 'User interviews with 8 buyers and 6 sellers. Ran a competitive audit of OLX, iCarros, and Webmotors. Mapped the emotional journey for both sides of the transaction.' },
      { phase: '02', label: 'Architecture', description: 'Separate but connected flows for buyer and seller. Defined the handoff points where both parties interact.' },
      { phase: '03', label: 'Design', description: '3 rounds of prototyping for the listing creation flow. Focused heavily on the pricing experience — the most anxiety-inducing step for sellers.' },
      { phase: '04', label: 'Testing', description: 'A/B tested two pricing presentation formats with 200 users via Maze. Iterated on the vehicle condition input based on drop-off data.' },
      { phase: '05', label: 'Delivery', description: 'Phased launch: seller flow first, then buyer. Monitored with Hotjar heatmaps and session recordings for 6 weeks post-launch.' },
    ],
    solution: [
      { heading: 'Instant pricing estimate', body: 'Sellers get a price range before completing the full listing. This single change reduced form abandonment by 38%.' },
      { heading: 'Trust signals throughout', body: 'Creditas brand verification badge, vehicle history integration, and transparent fee breakdown at every decision point.' },
      { heading: 'Streamlined listing in 4 steps', body: 'Previous flow was 11 steps. Redesigned to 4 by removing redundant inputs and using smart defaults from vehicle VIN data.' },
    ],
    impact: [
      { value: '–38%', label: 'Form abandonment' },
      { value: '4 steps', label: 'Listing creation (was 11)' },
      { value: '+22%', label: 'Conversion rate' },
      { value: '4.4/5', label: 'Seller NPS' },
    ],
    next: { slug: 'core-platform', title: 'Lucera Energía', client: 'Lucera', image: '/selected-work/Lucera.png' },
  },

  'core-platform': {
    number: '04',
    title: 'Lucera Energía',
    client: 'Lucera Energía',
    year: '2021',
    role: 'Product Designer',
    duration: '8 months',
    tools: 'Figma · Hotjar · Google Analytics',
    image: '/selected-work/Lucera.png',
    overview: 'Home energy dashboard for a consumption platform, empowering users to monitor, save, and optimise their household energy usage.',
    context: 'Spain\'s energy market liberalisation created space for consumer-facing energy products. Lucera Energía needed to differentiate not on price alone but on the value of intelligence — giving customers a reason to engage with their energy data beyond just paying the bill.',
    problem: 'Residential users had zero visibility into their consumption patterns. Bills arrived at the end of the month with no actionable insight. Customer service was flooded with billing queries that a clear dashboard could have answered automatically.',
    process: [
      { phase: '01', label: 'Discovery', description: 'Analysed 3 months of customer support tickets to identify the top 10 billing questions. Ran diary studies with 6 households.' },
      { phase: '02', label: 'Architecture', description: 'Designed around three user needs: understanding (what happened), saving (what can I do), and trusting (is this right).' },
      { phase: '03', label: 'Design', description: 'Iterated through 6 versions of the main dashboard layout. Key challenge: making complex tariff data legible to non-technical users.' },
      { phase: '04', label: 'Testing', description: 'Moderated usability sessions with 8 customers. Validated comprehension of the consumption breakdown using first-click tests.' },
      { phase: '05', label: 'Delivery', description: 'Launched to 12,000 customers. Tracked engagement with Google Analytics and ran monthly review cycles for 4 months post-launch.' },
    ],
    solution: [
      { heading: 'Daily consumption timeline', body: 'Hour-by-hour view of usage aligned with tariff periods (peak/off-peak). Users could instantly see the cost of running appliances at different times.' },
      { heading: 'Plain-language billing breakdown', body: 'Translated complex tariff calculations into simple bar charts with human summaries. Billing query tickets dropped 34% in 3 months.' },
      { heading: 'Personalised saving tips', body: 'Rule-based recommendation engine surfacing 2–3 actionable tips per user based on their consumption patterns.' },
    ],
    impact: [
      { value: '–34%', label: 'Support ticket volume' },
      { value: '12k', label: 'Customers at launch' },
      { value: '+18%', label: 'App engagement' },
      { value: '4.2/5', label: 'User rating' },
    ],
    next: { slug: 'Investments-dashboard', title: 'Financial Dashboard', client: 'Vega Investments', image: '/selected-work/Vega.png' },
  },
};

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = projects[slug];

  if (!project) notFound();

  const serif = {};

  return (
    <main className="min-h-screen">

      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-(--v3-bg)/90 backdrop-blur-sm">
        <div className="max-w-2xl mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-sm font-medium hover:opacity-50 transition-opacity">
            pgarciadesign
          </Link>
          <Link
            href="/#work"
            className="text-[13px] text-(--v3-fg)/40 hover:text-(--v3-fg) transition-colors"
          >
            ← Back
          </Link>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 md:px-8 pt-28 pb-24">

        {/* Title block */}
        <section className="mb-12 sm:mb-14">
          <span className="text-[11px] text-(--v3-fg)/25 tabular-nums block mb-4">{project.number}</span>
          <h1
            className="text-4xl sm:text-5xl leading-[1.1] mb-5"
            style={serif}
          >
            {project.title}
          </h1>
          <p className="text-[15px] leading-relaxed text-(--v3-fg)/55 max-w-lg">
            {project.overview}
          </p>
        </section>

        {/* Metadata strip */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-5 mb-12 sm:mb-14 py-6 border-t border-b border-(--v3-fg)/8">
          {[
            { label: 'Client', value: project.client },
            { label: 'Year', value: project.year },
            { label: 'Role', value: project.role },
            { label: 'Duration', value: project.duration },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-[10px] uppercase tracking-[0.15em] text-(--v3-fg)/30 mb-1">{item.label}</p>
              <p className="text-[13px]">{item.value}</p>
            </div>
          ))}
        </section>

        {/* Hero image */}
        <div className="aspect-video rounded-xl overflow-hidden bg-(--v3-elevated) mb-14 sm:mb-20">
          <Image
            src={project.image}
            alt={project.title}
            width={672}
            height={378}
            sizes="(max-width: 640px) calc(100vw - 48px), 672px"
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Context */}
        <section className="mb-12 sm:mb-16">
          <div className="flex items-baseline gap-4 mb-5">
            <span className="text-[11px] text-(--v3-fg)/20 tabular-nums shrink-0">01</span>
            <h2 className="text-lg" style={serif}>Context</h2>
          </div>
          <p className="text-[14px] sm:text-[15px] leading-[1.75] text-(--v3-fg)/60 sm:ml-8">
            {project.context}
          </p>
        </section>

        {/* Problem */}
        <section className="mb-12 sm:mb-16">
          <div className="flex items-baseline gap-4 mb-5">
            <span className="text-[11px] text-(--v3-fg)/20 tabular-nums shrink-0">02</span>
            <h2 className="text-lg" style={serif}>The Problem</h2>
          </div>
          <p className="text-[14px] sm:text-[15px] leading-[1.75] text-(--v3-fg)/60 sm:ml-8">
            {project.problem}
          </p>
        </section>

        {/* Process */}
        <section className="mb-12 sm:mb-16">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-[11px] text-(--v3-fg)/20 tabular-nums shrink-0">03</span>
            <h2 className="text-lg" style={serif}>Process</h2>
          </div>
          <div className="sm:ml-8">
            {project.process.map((step, i) => (
              <div key={i} className="flex gap-5 border-t border-(--v3-fg)/8 py-5 last:border-b">
                <span className="text-[11px] text-(--v3-fg)/20 tabular-nums shrink-0 mt-0.5 w-6">
                  {step.phase}
                </span>
                <div>
                  <p className="text-sm font-medium mb-1">{step.label}</p>
                  <p className="text-[13px] leading-relaxed text-(--v3-fg)/50">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Screen placeholder */}
        <div className="mb-12 sm:mb-16 aspect-video rounded-xl overflow-hidden bg-(--v3-elevated) relative flex items-center justify-center">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle, var(--v3-fg) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
          <div className="relative text-center">
            <p className="text-[11px] uppercase tracking-[0.15em] text-(--v3-fg)/25 mb-1">Screens</p>
            <p className="text-[13px] text-(--v3-fg)/20" style={serif}>Available under NDA</p>
          </div>
        </div>

        {/* Solution */}
        <section className="mb-12 sm:mb-16">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-[11px] text-(--v3-fg)/20 tabular-nums shrink-0">04</span>
            <h2 className="text-lg" style={serif}>The Solution</h2>
          </div>
          <div className="sm:ml-8 space-y-6">
            {project.solution.map((item, i) => (
              <div key={i}>
                <p className="text-sm font-medium mb-1.5">{item.heading}</p>
                <p className="text-[14px] leading-[1.75] text-(--v3-fg)/55">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Second placeholder — two screens */}
        <div className="mb-12 sm:mb-16 grid grid-cols-2 gap-3">
          {[0, 1].map((i) => (
            <div
              key={i}
              className="aspect-video rounded-lg bg-(--v3-elevated) relative flex items-center justify-center overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'linear-gradient(var(--v3-fg) 1px, transparent 1px), linear-gradient(90deg, var(--v3-fg) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />
              <p className="relative text-[10px] uppercase tracking-widest text-(--v3-fg)/20">NDA</p>
            </div>
          ))}
        </div>

        {/* Impact */}
        <section className="mb-10 sm:mb-14">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-[11px] text-(--v3-fg)/20 tabular-nums shrink-0">05</span>
            <h2 className="text-lg" style={serif}>Impact</h2>
          </div>
          <div className="sm:ml-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {project.impact.map((item, i) => (
              <div key={i}>
                <p className="text-2xl sm:text-3xl mb-1" style={serif}>{item.value}</p>
                <p className="text-[12px] text-(--v3-fg)/40 leading-snug">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <p className="text-[12px] text-(--v3-fg)/25 mb-14 sm:mb-20 sm:ml-8">
          Tools — {project.tools}
        </p>

        {/* Next project */}
        <section className="border-t border-(--v3-fg)/8 pt-10">
          <p className="text-[11px] uppercase tracking-[0.15em] text-(--v3-fg)/25 mb-6">Next project</p>
          <Link
            href={`/work/${project.next.slug}`}
            className="group flex items-center gap-5"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-(--v3-elevated) shrink-0">
              <Image
                src={project.next.image}
                alt={project.next.title}
                width={80}
                height={80}
                sizes="80px"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xl group-hover:opacity-60 transition-opacity" style={serif}>
                {project.next.title}
              </p>
              <p className="text-[13px] text-(--v3-fg)/35">{project.next.client}</p>
            </div>
            <span className="text-(--v3-fg)/30 group-hover:text-(--v3-fg) group-hover:translate-x-1 transition-all">
              →
            </span>
          </Link>
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-(--v3-fg)/8">
          <p className="text-[11px] text-(--v3-fg)/25">
            © {new Date().getFullYear()} Pablo García
          </p>
        </footer>

      </div>
    </main>
  );
}
