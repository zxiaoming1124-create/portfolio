'use client'

import { motion } from 'framer-motion'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import BackButton from '@/components/BackButton'
import SectionNav from '@/components/SectionNav'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay },
})

const sections = [
  { id: 'context', title: 'Context' },
  { id: 'my-role', title: 'My Role' },
  { id: 'problem-statement', title: 'Problem' },
  { id: 'key-insights', title: 'Key Insights' },
  { id: 'strategy', title: 'Strategy' },
  { id: 'prototype-iterations', title: 'Iterations' },
  { id: 'before-vs-after', title: 'Before vs After' },
  { id: 'core-features', title: 'Core Features' },
  { id: 'reflection', title: 'Reflection' },
]

export default function NestThermostatPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <SectionNav sections={sections} />

      <motion.div {...fade(0)} className="mb-10">
        <div className="mb-8">
          <BackButton />
        </div>
        <p className="text-[11px] text-[#0a0a0a]/30 uppercase tracking-widest mb-3">Winter 2025 · 10 Weeks</p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight mb-4">
          Google Nest Thermostat Redesign
        </h1>
        <p className="text-[15px] text-[#0a0a0a]/55 leading-relaxed">
          Reframing energy consumption into transparent cost feedback — shifting users from passive monitoring to active, cost-aware climate control.
        </p>
        <div className="flex flex-wrap gap-2 mt-5">
          {['UI Design', 'UX Research', 'Prototyping'].map(tag => (
            <span key={tag} className="text-[11px] text-[#0a0a0a]/50 border border-black/[0.08] rounded-full px-2.5 py-0.5">{tag}</span>
          ))}
        </div>
      </motion.div>

      <motion.div {...fade(0.08)} className="mb-12">
        <ImagePlaceholder label="public/images/nest/hero.png" aspect="aspect-video" />
      </motion.div>

      <motion.div {...fade(0.1)} className="grid grid-cols-3 gap-4 mb-14 p-6 rounded-2xl border border-black/[0.06] bg-white">
        {[['Role', 'Lead Prototyper / UX + UI'], ['Year', '2025'], ['Duration', '10 Weeks']].map(([k, v]) => (
          <div key={k}>
            <p className="text-[10px] text-[#0a0a0a]/30 uppercase tracking-widest mb-1">{k}</p>
            <p className="text-[13px] font-medium">{v}</p>
          </div>
        ))}
      </motion.div>

      <Section id="context" title="Context" delay={0.12}>
        <p>While Nest presents detailed energy metrics, it lacks a clear financial narrative that supports real-time decision-making. This redesign reframes energy consumption into transparent cost feedback — shifting users from passive monitoring to active, cost-aware climate control.</p>
      </Section>

      <Section id="my-role" title="My Role" delay={0.14}>
        <p>I led the end-to-end redesign of the Nest Thermostat mobile experience, defining a "Green &amp; Affordable" product strategy that translates energy data into clear financial impact and behavioral feedback. I developed the interaction framework, visual system, and sustainability feedback model — aligning user research, system constraints, and business considerations into a cohesive product direction.</p>
      </Section>

      <Section id="problem-statement" title="Problem Statement" delay={0.16}>
        <p className="mb-5">Users seeking an eco-friendly and affordable smart thermostat often feel overwhelmed by complex interfaces and unclear energy feedback. Current products fail to balance cost-efficiency, environmental awareness, and usability for everyday households.</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: 'Unclear System Logic', desc: 'Users are unsure how the system decides when to adjust, causing confusion and distrust.' },
            { title: 'Invisible Energy Impact', desc: "Users can't see how their actions save energy, reducing motivation to stay eco-friendly." },
          ].map(item => (
            <div key={item.title} className="rounded-xl border border-black/[0.06] bg-white p-5">
              <p className="text-[13px] font-medium mb-1.5">{item.title}</p>
              <p className="text-[13px] text-[#0a0a0a]/55 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <blockquote className="mt-5 border-l-2 border-black/10 pl-4 text-[14px] text-[#0a0a0a]/60 italic leading-relaxed">
          How might we visualize energy usage and savings in a way that feels concrete and motivating?
        </blockquote>
      </Section>

      <Section id="key-insights" title="Key Insights" delay={0.18}>
        <blockquote className="border-l-2 border-black/10 pl-4 text-[15px] text-[#0a0a0a]/70 italic leading-relaxed">
          Users are not motivated by "saving energy" itself, but by seeing how their daily actions translate into real money and comfort.
        </blockquote>
      </Section>

      <Section id="strategy" title="Strategy" delay={0.2}>
        <p className="mb-5">Convert Sustainability Into Economic Visibility — instead of presenting abstract energy metrics, I chose to visualize savings in monetary terms.</p>
        <div className="grid sm:grid-cols-3 gap-3">
          {['Make energy impact visible', 'Increase User Trust', 'Reduce Cognitive Load'].map(s => (
            <div key={s} className="rounded-xl bg-[#f5f5f5] px-4 py-3.5 text-[13px] font-medium text-[#0a0a0a]/70">{s}</div>
          ))}
        </div>
      </Section>

      <Section id="prototype-iterations" title="Prototype Iterations" delay={0.22}>
        <div className="space-y-8">
          {[
            { n: '01', title: 'Interaction Logic Exploration', body: 'This first prototype exposed a structural issue: users needed to move across multiple layers to access scheduling, energy feedback, and confirmation states. I chose to flatten the navigation hierarchy, prioritizing immediacy over structural purity.' },
            { n: '02', title: 'Balancing Insight and Interaction Speed', body: 'I expanded the interface to include richer energy analytics. However, testing revealed hesitation during quick daily interactions. Reduced cognitive load enables habitual interaction.' },
            { n: '03', title: 'Designing for Sustained Behavior', body: 'I strengthened the financial feedback loop, making savings more immediate and personally relevant. Behavioral reinforcement replaced passive visibility — amplifying financial cues to make consequences tangible.' },
          ].map(iter => (
            <div key={iter.n}>
              <p className="text-[10px] text-[#0a0a0a]/30 uppercase tracking-widest mb-2">Iteration {iter.n}</p>
              <p className="text-[14px] font-medium mb-2">{iter.title}</p>
              <p className="text-[14px] text-[#0a0a0a]/55 leading-relaxed mb-4">{iter.body}</p>
              <ImagePlaceholder label={`public/images/nest/iteration-${iter.n}.png`} />
            </div>
          ))}
        </div>
      </Section>

      <Section id="before-vs-after" title="Before vs After" delay={0.24}>
        <p className="text-[14px] text-[#0a0a0a]/55 leading-relaxed mb-6">The redesigned home screen surfaces savings directly — making energy impact concrete and personally meaningful.</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <p className="text-[11px] text-[#0a0a0a]/30 uppercase tracking-widest mb-2">Before</p>
            <ImagePlaceholder label="public/images/nest/before.png" aspect="aspect-[9/16]" />
          </div>
          <div>
            <p className="text-[11px] text-[#0a0a0a]/30 uppercase tracking-widest mb-2">After</p>
            <ImagePlaceholder label="public/images/nest/after.png" aspect="aspect-[9/16]" />
          </div>
        </div>
      </Section>

      <Section id="core-features" title="Core Features" delay={0.26}>
        <div className="grid sm:grid-cols-2 gap-3">
          {['Make Saving Personal.', 'Eco. Simple.', 'Learn by Doing.', 'Set it once. Save every day.', 'Your energy. Under control.', 'Clear and Honest.', 'See Where Your Money Goes.'].map(f => (
            <div key={f} className="rounded-xl border border-black/[0.06] bg-white px-4 py-3 text-[13px] font-medium">{f}</div>
          ))}
        </div>
        <div className="mt-6">
          <ImagePlaceholder label="public/images/nest/final.png" aspect="aspect-video" />
        </div>
      </Section>

      <Section id="reflection" title="Reflection" delay={0.28}>
        <p>In future iterations, I would validate these assumptions through usability testing and behavioral metrics. The core theme throughout: turning abstract sustainability into concrete daily behavior.</p>
      </Section>
    </div>
  )
}

function Section({ id, title, children, delay = 0 }: { id: string; title: string; children: React.ReactNode; delay?: number }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="border-t border-black/[0.08] pt-10 mb-12"
    >
      <p className="text-[10px] font-medium uppercase mb-5 text-[#5B8FBF]" style={{ letterSpacing: '2px' }}>{title}</p>
      <div className="text-[14px] text-[#0a0a0a]/65 leading-relaxed space-y-3">{children}</div>
    </motion.section>
  )
}
