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

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-8 pt-16 pb-32">
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-[32px] font-semibold tracking-tight mb-16"
      >
        Work
      </motion.h1>
      <div className="flex flex-col gap-20">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} {...project} index={i} />
        ))}
      </div>
    </div>
  )
}
