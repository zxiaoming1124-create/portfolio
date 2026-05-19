'use client'

import { motion } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'

const projects = [
  {
    eyebrow: 'Google Nest Redesign (Grad Project)',
    subtitle: 'Reframing energy data into financial clarity — shifting users from passive monitoring to cost-aware climate control.',
    title: 'Google Nest Thermostat Redesign',
    period: 'Winter 2025',
    href: '/project/nest-thermostat?from=work',
    imageLabel: 'Add image: public/images/nest/hero.png',
  },
  {
    eyebrow: 'Ciao (Grad Project)',
    subtitle: 'Helping international students take the first step into campus life by lowering social risk and simplifying discovery.',
    title: 'Ciao — Social Experience Platform',
    period: 'Spring 2025',
    href: '/project/ciao?from=work',
    imageLabel: 'Add image: public/images/ciao/hero.png',
  },
  {
    eyebrow: 'TNC Sustainability (Grad Project)',
    subtitle: 'A connected engagement system to make conservation easier to notice, understand, and join.',
    title: 'Sustainability Communication for TNC',
    period: 'Winter 2025',
    href: '/project/tnc?from=work',
    imageLabel: 'Add image: public/images/tnc/hero.png',
  },
  {
    eyebrow: 'Financial Systems (Grad Project)',
    subtitle: 'Exploring how financial services can be redesigned for greater accessibility and human understanding.',
    title: 'Reimagining the Future of Financial Systems',
    period: 'Winter 2024',
    href: undefined,
    imageLabel: 'Coming soon',
  },
]

export default function ProjectsPage() {
  return (
    <div className="w-full px-14 pt-16 pb-32">
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-[40px] font-semibold tracking-tight mb-16"
      >
        Work
      </motion.h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} {...project} index={i} />
        ))}
      </div>
    </div>
  )
}
