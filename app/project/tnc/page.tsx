'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import ImagePlaceholder from '@/components/ImagePlaceholder'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay },
})

export default function TNCPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <motion.div {...fade(0)} className="mb-10">
        <Link href="/project" className="inline-flex items-center gap-1.5 text-sm text-[#0a0a0a]/40 hover:text-[#0a0a0a] transition-colors mb-8">
          <ArrowLeft size={14} /> All Projects
        </Link>
        <p className="text-[11px] text-[#0a0a0a]/30 uppercase tracking-widest mb-3">Winter 2025</p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight mb-4">
          Designing Visibility for Conservation
        </h1>
        <p className="text-[15px] text-[#0a0a0a]/55 leading-relaxed">
          A connected engagement system built to make conservation easier to notice, understand, and join — reframing how The Nature Conservancy Georgia connects with broader audiences.
        </p>
        <div className="flex flex-wrap gap-2 mt-5">
          {['UX Research', 'Service Design', 'Systems Thinking'].map(tag => (
            <span key={tag} className="text-[11px] text-[#0a0a0a]/50 border border-black/[0.08] rounded-full px-2.5 py-0.5">{tag}</span>
          ))}
        </div>
      </motion.div>

      <motion.div {...fade(0.08)} className="mb-12">
        <ImagePlaceholder label="public/images/tnc/hero.png" aspect="aspect-video" />
      </motion.div>

      <motion.div {...fade(0.1)} className="grid grid-cols-4 gap-4 mb-14 p-6 rounded-2xl border border-black/[0.06] bg-white">
        {[['80+', 'Countries'], ['100+', 'Marine projects'], ['1,000+', 'Scientists'], ['125M+', 'Acres protected']].map(([n, l]) => (
          <div key={l} className="text-center">
            <p className="text-xl font-semibold mb-0.5">{n}</p>
            <p className="text-[11px] text-[#0a0a0a]/35 leading-snug">{l}</p>
          </div>
        ))}
      </motion.div>

      <Section title="Project Overview" delay={0.12}>
        <p>This project rethinks how conservation is seen, understood, and acted upon. I led research and experience design to translate fragmented communication into a more visible, connected engagement system — helping broader audiences move from awareness to participation.</p>
      </Section>

      <Section title="Research Phase" delay={0.14}>
        <p>This phase focused on the existing communication ecosystem — identifying where visibility was strong, where pathways broke down, and how current touchpoints compared with stronger conservation organizations and best practices.</p>
        <p>Despite its global impact, TNC Georgia was struggling to connect with broader audiences beyond its existing donor base.</p>
        <ImagePlaceholder label="public/images/tnc/research.png" aspect="aspect-video" />
      </Section>

      <Section title="Audience Segmentation" delay={0.16}>
        <p>Based on research patterns, we reframed TNC Georgia's outreach into four audience groups with different motivations, expectations, and preferred ways of participating — moving from one primary donor audience to four engagement segments.</p>
        <div className="rounded-2xl border border-black/[0.06] bg-white p-5">
          <p className="text-[11px] text-[#0a0a0a]/30 uppercase tracking-widest mb-2">Example Persona</p>
          <p className="text-[13px] text-[#0a0a0a]/65 leading-relaxed">Jasmine is actively engaged in sustainability and community activities, responding best to communication that feels approachable, visual, and socially engaging.</p>
        </div>
        <ImagePlaceholder label="public/images/tnc/audience.png" aspect="aspect-video" />
      </Section>

      <Section title="Connected Engagement System" delay={0.18}>
        <p>Rather than redesigning isolated touchpoints, this solution reorganizes TNC's communication into a more connected system — bringing together digital and physical channels to support clearer discovery, stronger participation, and long-term engagement.</p>
        <ImagePlaceholder label="public/images/tnc/system.png" aspect="aspect-video" />
      </Section>

      <Section title="Structuring Understanding Across Channels" delay={0.2}>
        <p className="mb-5">The website and supporting materials were reorganized into a clearer information path, helping people understand where to go, what matters most, and what to do next.</p>
        <div className="space-y-2 mb-6">
          {[
            'Prioritize the most important actions, stories, and entry points.',
            'Make next steps easier to notice across website and supporting materials.',
            'Use a more coherent structure across digital and physical information touchpoints.',
            'Extend communication through newsletters, editorial content, and outreach materials.',
          ].map((p, i) => (
            <div key={i} className="flex gap-3 items-start">
              <span className="text-[11px] text-[#0a0a0a]/30 mt-0.5 flex-shrink-0">{i + 1}</span>
              <p className="text-[13px] text-[#0a0a0a]/65 leading-relaxed">{p}</p>
            </div>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <p className="text-[11px] text-[#0a0a0a]/30 uppercase tracking-widest mb-2">Website Redesign</p>
            <ImagePlaceholder label="public/images/tnc/website.png" aspect="aspect-[4/3]" />
          </div>
          <div>
            <p className="text-[11px] text-[#0a0a0a]/30 uppercase tracking-widest mb-2">Newsletter</p>
            <ImagePlaceholder label="public/images/tnc/newsletter.png" aspect="aspect-[4/3]" />
          </div>
        </div>
        <div className="mt-4">
          <p className="text-[11px] text-[#0a0a0a]/30 uppercase tracking-widest mb-2">Brochure & Poster</p>
          <ImagePlaceholder label="public/images/tnc/print.png" aspect="aspect-video" />
        </div>
      </Section>

      <Section title="Turning Awareness Into Participation" delay={0.22}>
        <p className="mb-5">Beyond making information visible and understandable, the system was extended into more active touchpoints that invited people to join, return, and participate over time.</p>
        <div className="space-y-2 mb-6">
          {[
            'Make participation feel more accessible by reducing uncertainty around what to do, when to join, and how to begin.',
            'Use campaigns, calendars, and visible prompts to connect interest with moments when action feels relevant.',
            'Support engagement through both digital and physical touchpoints.',
            'Design touchpoints that help participation continue over time, not as a one-off moment.',
          ].map((p, i) => (
            <div key={i} className="flex gap-3 items-start">
              <span className="text-[11px] text-[#0a0a0a]/30 mt-0.5 flex-shrink-0">{i + 1}</span>
              <p className="text-[13px] text-[#0a0a0a]/65 leading-relaxed">{p}</p>
            </div>
          ))}
        </div>
        <ImagePlaceholder label="public/images/tnc/campaigns.png" aspect="aspect-video" />
      </Section>

      <Section title="Reflection" delay={0.24}>
        <blockquote className="border-l-2 border-black/10 pl-4 text-[14px] text-[#0a0a0a]/60 italic leading-relaxed">
          Clarity, hierarchy, and continuity do more than improve presentation. They shape whether people understand what matters, trust what they see, and feel ready to take action.
        </blockquote>
        <p>The redesign created a clearer path from awareness to understanding, and from understanding to participation across digital and physical touchpoints.</p>
      </Section>
    </div>
  )
}

function Section({ title, children, delay = 0 }: { title: string; children: React.ReactNode; delay?: number }) {
  return (
    <motion.section {...{ initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4, delay } }} className="mb-12">
      <p className="text-[10px] text-[#0a0a0a]/30 uppercase tracking-widest mb-4" style={{ letterSpacing: '1.5px' }}>{title}</p>
      <div className="text-[14px] text-[#0a0a0a]/65 leading-relaxed space-y-3">{children}</div>
    </motion.section>
  )
}
