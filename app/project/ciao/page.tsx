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

export default function CiaoPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <motion.div {...fade(0)} className="mb-10">
        <Link href="/project" className="inline-flex items-center gap-1.5 text-sm text-[#0a0a0a]/40 hover:text-[#0a0a0a] transition-colors mb-8">
          <ArrowLeft size={14} /> All Projects
        </Link>
        <p className="text-[11px] text-[#0a0a0a]/30 uppercase tracking-widest mb-3">Spring 2025 · 10 Weeks</p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight mb-4">
          Ciao — A Social Experience Platform for International Students
        </h1>
        <p className="text-[15px] text-[#0a0a0a]/55 leading-relaxed">
          Helping international students take the first step into campus life by simplifying event discovery and lowering social risk.
        </p>
        <div className="flex flex-wrap gap-2 mt-5">
          {['UI Design', 'Interaction Design', 'UX Research'].map(tag => (
            <span key={tag} className="text-[11px] text-[#0a0a0a]/50 border border-black/[0.08] rounded-full px-2.5 py-0.5">{tag}</span>
          ))}
        </div>
      </motion.div>

      <motion.div {...fade(0.08)} className="mb-12">
        <ImagePlaceholder label="public/images/ciao/hero.png" aspect="aspect-video" />
      </motion.div>

      <motion.div {...fade(0.1)} className="grid grid-cols-3 gap-4 mb-14 p-6 rounded-2xl border border-black/[0.06] bg-white">
        {[['Role', 'UX Researcher / UX + UI'], ['Year', '2025'], ['Duration', '10 Weeks']].map(([k, v]) => (
          <div key={k}>
            <p className="text-[10px] text-[#0a0a0a]/30 uppercase tracking-widest mb-1">{k}</p>
            <p className="text-[13px] font-medium">{v}</p>
          </div>
        ))}
      </motion.div>

      <Section title="Project Overview" delay={0.12}>
        <p>International students often arrive on campus with the intention to socialize, yet struggle to take the first step due to uncertainty, social pressure, and lack of structured support. Through 48+ surveys, 10+ interviews, and cultural probes, we identified that the problem is not a lack of events, but a lack of confidence and clarity in navigating them.</p>
      </Section>

      <Section title="My Role" delay={0.14}>
        <p>As UX Lead, I structured Ciao's core experience, defining the end-to-end journey from onboarding to event participation. I led wireframing, prototyping, and usability validation, balancing trust, clarity, and emotional engagement for international students.</p>
      </Section>

      <Section title="Research" delay={0.16}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          {[['53%', 'Feel socially isolated'], ['86%', 'Struggle with time management'], ['48+', 'Surveys conducted'], ['10+', 'Interviews conducted']].map(([n, l]) => (
            <div key={l} className="rounded-xl border border-black/[0.06] bg-white p-4 text-center">
              <p className="text-2xl font-semibold mb-1">{n}</p>
              <p className="text-[11px] text-[#0a0a0a]/40 leading-snug">{l}</p>
            </div>
          ))}
        </div>
        <ImagePlaceholder label="public/images/ciao/research.png" aspect="aspect-video" />
      </Section>

      <Section title="Key Findings" delay={0.18}>
        <p>Students reported feeling overwhelmed by too many unfiltered options, unsure which events were suitable for them, and anxious about attending alone. As a result, many default to passive behaviors — staying in their rooms, waiting for invitations, or missing opportunities altogether.</p>
        <blockquote className="border-l-2 border-black/10 pl-4 text-[14px] text-[#0a0a0a]/60 italic leading-relaxed">
          The core design challenge is not just improving event discovery, but reducing social friction and enabling confident first participation.
        </blockquote>
      </Section>

      <Section title="Key Insights" delay={0.2}>
        <blockquote className="border-l-2 border-black/10 pl-4 text-[15px] text-[#0a0a0a]/70 italic leading-relaxed">
          Users are not motivated by "going out" itself, but by feeling safe, supported, and invited.
        </blockquote>
      </Section>

      <Section title="Persona" delay={0.22}>
        <div className="rounded-2xl border border-black/[0.06] bg-white p-6 space-y-3">
          {[
            ['Context', 'International graduate student new to campus. Wants to build real social connections, but feels unsafe joining activities alone.'],
            ['Core Need', 'A safe, low-pressure way to explore campus life.'],
            ['Pain', 'Feels anxious about being awkward, not understanding English well, and wasting limited free time.'],
            ['Current Behavior', 'Mostly stays home, waits for friends to invite her, and misses opportunities.'],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="text-[11px] text-[#0a0a0a]/30 uppercase tracking-widest mb-0.5">{k}</p>
              <p className="text-[13px] text-[#0a0a0a]/65 leading-relaxed">{v}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="How Might We?" delay={0.24}>
        <div className="space-y-2">
          {[
            'How might we help international students discover events without feeling overwhelmed?',
            'How might we make joining activities feel safe and low-pressure?',
            'How might we encourage students to take the first step socially?',
          ].map((q, i) => (
            <div key={i} className="rounded-xl bg-[#f5f5f5] px-4 py-3.5 text-[13px] text-[#0a0a0a]/65 leading-relaxed">{q}</div>
          ))}
        </div>
      </Section>

      <Section title="Solution Strategy" delay={0.26}>
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          {[
            { title: 'Reduce Overwhelm', desc: 'Make event discovery simple and curated.' },
            { title: 'Lower Social Risk', desc: 'Design low-pressure, friendly entry points.' },
            { title: 'Trigger Action', desc: 'Use small prompts to encourage first steps.' },
          ].map(s => (
            <div key={s.title} className="rounded-xl border border-black/[0.06] bg-white p-4">
              <p className="text-[13px] font-medium mb-1.5">{s.title}</p>
              <p className="text-[12px] text-[#0a0a0a]/50 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <ImagePlaceholder label="public/images/ciao/sitemap.png" aspect="aspect-video" />
      </Section>

      <Section title="Core User Flow" delay={0.28}>
        <div className="flex flex-wrap gap-2 mb-6">
          {['Home', 'Event Detail', 'Calendar', 'Confirmation', 'Chat'].map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <span className="rounded-full bg-[#0a0a0a] text-white text-[11px] w-5 h-5 flex items-center justify-center font-medium">{i + 1}</span>
              <span className="text-[13px] font-medium">{step}</span>
              {i < 4 && <span className="text-[#0a0a0a]/20">→</span>}
            </div>
          ))}
        </div>
        <ImagePlaceholder label="public/images/ciao/user-flow.png" aspect="aspect-video" />
      </Section>

      <Section title="Iterations After User Testing" delay={0.3}>
        <p className="mb-6">14 participants, 4 key user flows tested.</p>
        <div className="space-y-8">
          {[
            {
              title: 'Navigation Clarity & Accessibility',
              before: 'Event locations were not immediately noticeable on the map.',
              after: 'Key events are now visually emphasized and easier to discover.',
              stats: ['84% found nearby events more quickly', '73% felt the map more intuitive'],
              img: 'navigation',
            },
            {
              title: 'Visual Hierarchy & Time Grouping',
              before: 'Events were listed in a single stream, making it hard to distinguish today\'s from upcoming.',
              after: 'Events are now grouped by time, clearly separating today\'s from upcoming.',
              stats: ['79% found new structure easier to understand', '71% felt more confident planning'],
              img: 'hierarchy',
            },
            {
              title: 'Simplified Creation Menu',
              before: 'Multiple creation options displayed at once, hard to decide.',
              after: 'Focused on most common actions, reducing unnecessary choices.',
              stats: ['82% preferred the simplified version', '76% completed action faster'],
              img: 'menu',
            },
          ].map(iter => (
            <div key={iter.title}>
              <p className="text-[14px] font-medium mb-3">{iter.title}</p>
              <div className="grid sm:grid-cols-2 gap-3 mb-3">
                <div className="rounded-xl bg-[#f5f5f5] p-4">
                  <p className="text-[10px] text-[#0a0a0a]/30 uppercase tracking-widest mb-1.5">Before</p>
                  <p className="text-[13px] text-[#0a0a0a]/60 leading-relaxed">{iter.before}</p>
                </div>
                <div className="rounded-xl bg-[#0a0a0a]/[0.04] p-4">
                  <p className="text-[10px] text-[#0a0a0a]/30 uppercase tracking-widest mb-1.5">After</p>
                  <p className="text-[13px] text-[#0a0a0a]/60 leading-relaxed">{iter.after}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {iter.stats.map(s => <span key={s} className="text-[12px] text-[#0a0a0a]/50 border border-black/[0.08] rounded-full px-2.5 py-0.5">{s}</span>)}
              </div>
              <ImagePlaceholder label={`public/images/ciao/${iter.img}.png`} />
            </div>
          ))}
        </div>
      </Section>

      <Section title="Final Product" delay={0.32}>
        <ImagePlaceholder label="public/images/ciao/final.png" aspect="aspect-video" />
      </Section>

      <Section title="Reflection & Takeaways" delay={0.34}>
        <p>Users initially hesitated at the "Create" menu due to clutter and uncertainty. By splitting event and post creation into clearer categories, I helped users take action faster with more confidence.</p>
        <p>This project reminded me how small interface changes — like reordering actions or simplifying copy — can significantly reduce user hesitation. I learned the value of designing with clarity and testing early.</p>
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
