'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import ProjectCard from '@/components/ProjectCard'

const projects = [
  {
    eyebrow: 'Google Nest Redesign (Grad Project)',
    subtitle: 'Reframing energy data into financial clarity — shifting users from passive monitoring to cost-aware climate control.',
    title: 'Google Nest Thermostat Redesign',
    period: 'Winter 2025',
    href: '/project/nest-thermostat?from=home',
    imageLabel: 'Add image: public/images/nest/hero.png',
  },
  {
    eyebrow: 'Ciao (Grad Project)',
    subtitle: 'Helping international students take the first step into campus life by lowering social risk and simplifying discovery.',
    title: 'Ciao — Social Experience Platform',
    period: 'Spring 2025',
    href: '/project/ciao?from=home',
    imageLabel: 'Add image: public/images/ciao/hero.png',
  },
  {
    eyebrow: 'TNC Sustainability (Grad Project)',
    subtitle: 'A connected engagement system to make conservation easier to notice, understand, and join.',
    title: 'Sustainability Communication for TNC',
    period: 'Winter 2025',
    href: '/project/tnc?from=home',
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

const MONO = { fontFamily: 'var(--font-geist-mono), Courier New, monospace' }

export default function Home() {
  const [layout, setLayout] = useState<'single' | 'grid'>('single')
  const [showScrollHint, setShowScrollHint] = useState(true)

  useEffect(() => {
    const onScroll = () => setShowScrollHint(window.scrollY < 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="w-full px-14 flex flex-col lg:flex-row pt-16 pb-32 relative">

      {/* Left zone — 48% wide, content pinned to 310px */}
      <motion.aside
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="lg:w-[48%] flex-shrink-0 lg:sticky lg:top-24 lg:self-start"
      >
        <div className="w-full lg:w-[310px]">
          {/* Square avatar */}
          <div className="w-full aspect-square rounded-2xl bg-[#e2e0dc] mb-7 overflow-hidden relative">
            <Image
              src="/images/avatar.png"
              alt="Xiaoming Zhang"
              fill
              className="object-cover"
              priority
            />
          </div>

          <h1 className="text-[42px] font-semibold leading-tight text-[#111] mb-5" style={MONO}>
            Hi! I'm Xiaoming
          </h1>

          <p className="text-[16px] text-[#444] leading-[1.85] mb-6" style={MONO}>
            a <span className="text-[#C97B3A]">UX designer</span> / problem solver /{' '}
            runner / curious observer of the world.
          </p>

          <div className="text-[14px] text-[#999] leading-relaxed mb-10 space-y-1" style={MONO}>
            <p>MFA in UX Design @ SCAD</p>
            <p>B.A. in Product Design @ Hubei University of Technology</p>
          </div>

          <div className="flex flex-col gap-3" style={MONO}>
            <a
              href="https://linkedin.com/in/xiaoming-zhang-7b3583301"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[15px] text-[#111] hover:opacity-50 transition-opacity w-fit"
            >
              LinkedIn <span className="text-[12px]">↗</span>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-[15px] text-[#111] hover:opacity-50 transition-opacity w-fit"
            >
              Resume <span className="text-[12px]">↗</span>
            </a>
          </div>
        </div>
      </motion.aside>

      {/* Right zone — projects */}
      <div className="flex-1 min-w-0 relative">

        {/* Change layout button */}
        <div className="absolute -top-1 right-0 flex flex-col items-center gap-2">
          <span
            className="text-[11px] text-[#bbb] cursor-pointer hover:text-[#111] transition-colors select-none"
            style={MONO}
            onClick={() => setLayout(l => l === 'single' ? 'grid' : 'single')}
          >
            Change layout
          </span>
          <button
            onClick={() => setLayout(l => l === 'single' ? 'grid' : 'single')}
            className="w-9 h-9 rounded-full border border-[#ccc] flex items-center justify-center text-[#999] hover:border-[#111] hover:text-[#111] transition-colors"
            aria-label="Toggle layout"
          >
            {layout === 'single' ? (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="1" y="1" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                <rect x="8" y="1" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                <rect x="1" y="8" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                <rect x="8" y="8" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2"/>
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="1" y="1" width="12" height="4" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                <rect x="1" y="7" width="12" height="4" rx="1" stroke="currentColor" strokeWidth="1.2"/>
              </svg>
            )}
          </button>
        </div>

        {/* Cards */}
        <motion.div
          layout
          className={`pt-12 ${layout === 'grid' ? 'grid grid-cols-2 gap-6' : 'flex flex-col gap-10'}`}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </motion.div>
      </div>

      {/* Scroll down hint — fixed right edge, fades out on scroll */}
      <AnimatePresence>
        {showScrollHint && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed right-6 bottom-10 flex flex-col items-center gap-2 pointer-events-none"
          >
            <div className="h-16 w-px bg-[#ccc]" />
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="w-8 h-8 rounded-full border border-[#bbb] flex items-center justify-center text-[#bbb]"
            >
              ↓
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}
