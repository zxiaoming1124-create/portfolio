'use client'

import { motion } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'

const projects = [
  {
    title: 'Google Nest Thermostat Redesign',
    tags: ['UI Design', 'UX Research'],
    period: 'Winter 2025',
    description: 'Reframing energy data into financial clarity — shifting users from passive monitoring to cost-aware climate control.',
    href: '/project/nest-thermostat',
    imageLabel: 'public/images/nest/hero.png',
  },
  {
    title: 'Ciao — Social Experience Platform',
    tags: ['UI Design', 'Interaction Design'],
    period: 'Spring 2025',
    description: 'Helping international students take the first step into campus life by lowering social risk and simplifying discovery.',
    href: '/project/ciao',
    imageLabel: 'public/images/ciao/hero.png',
  },
  {
    title: 'Sustainability Communication Systems for TNC',
    tags: ['Service Design', 'UX Research'],
    period: 'Winter 2025',
    description: 'A connected engagement system to make conservation easier to notice, understand, and join.',
    href: '/project/tnc',
    imageLabel: 'public/images/tnc/hero.png',
  },
  {
    title: 'Reimagining the Future of Financial Systems',
    tags: ['UX Research', 'Strategy'],
    period: 'Winter 2024',
    description: 'Exploring how financial services can be redesigned for greater accessibility and human understanding.',
    href: undefined,
    imageLabel: 'Coming soon',
  },
]

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-8">

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="pt-24 pb-28"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[14px] text-[#999] mb-6"
        >
          UX Designer · Based in Savannah, GA
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-[40px] sm:text-[52px] font-semibold leading-[1.15] tracking-tight text-[#111] max-w-3xl"
        >
          Designing experiences that feel clear,{' '}
          <span className="text-[#bbb]">human, and worth using.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-7 text-[16px] text-[#888] leading-relaxed max-w-xl"
        >
          I'm Xiaoming — a UX and Service Designer at SCAD, focused on research, interaction design, and real-world impact.
        </motion.p>
      </motion.section>

      {/* Projects */}
      <section className="pb-32">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-[12px] text-[#bbb] uppercase tracking-widest mb-10"
        >
          Selected Work
        </motion.p>
        <div className="flex flex-col gap-20">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>
      </section>

    </div>
  )
}
