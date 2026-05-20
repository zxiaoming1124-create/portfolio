'use client'

import { motion } from 'framer-motion'

const MONO = { fontFamily: 'var(--font-geist-mono), Courier New, monospace' }

function Mark({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-[#FFE0DA] px-1.5 py-0.5 rounded-[3px]">{children}</span>
  )
}

function Placeholder({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div className={`bg-[#f5f3f0] rounded-[24px] flex items-center justify-center ${className}`}>
      <span className="text-[11px] text-[#ccc] text-center px-4" style={MONO}>{label}</span>
    </div>
  )
}

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay },
  }
}

const experience = [
  { period: 'Sep 2023 – Present', role: 'UX Design (MFA)', org: 'Savannah College of Art and Design' },
  { period: 'Jan – Mar 2025',     role: 'Service Design Lead', org: 'Deloitte × SCAD' },
  { period: 'Sep 2022 – Jun 2023', role: 'Marketing Design Intern', org: 'Hubei Yidufa Wood Industry' },
  { period: '2018 – 2022',         role: 'Product Design (B.A.)', org: 'Hubei University of Technology' },
]

export default function AboutPage() {
  return (
    <div className="w-full">

      {/* ── Hero + Philosophy (one balanced block) ── */}
      <section className="px-6 lg:px-14 pt-20 pb-24 max-w-[1080px] mx-auto">
        <motion.div {...fadeUp(0)} className="lg:flex lg:gap-16 lg:items-start">

          {/* Left: all intro content */}
          <div className="flex-1 min-w-0">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#bbb] mb-10" style={MONO}>
              About
            </p>
            <h1
              className="text-[52px] lg:text-[64px] font-semibold text-[#111] leading-[1.05] mb-10"
              style={MONO}
            >
              Hi, I'm<br />Xiaoming.
            </h1>
            <p className="text-[19px] lg:text-[21px] text-[#555] leading-[1.78] mb-10" style={MONO}>
              I'm a <Mark>UX designer</Mark>, <Mark>researcher</Mark>, runner, and curious observer
              of everyday life.
            </p>
            <p className="text-[16px] text-[#666] leading-[1.92] mb-8" style={MONO}>
              I'm drawn to the small moments that shape how people think, move, decide,
              and connect. A confusing button, a quiet habit, a repeated hesitation,
              or a tiny moment of delight can all become the starting point of design for me.
            </p>
            <p className="text-[22px] font-semibold text-[#111] leading-snug" style={MONO}>
              Design is how I understand people.
            </p>
          </div>

          {/* Right: adaptive image — no fixed aspect ratio, grows with real image */}
          <div className="hidden lg:block flex-shrink-0 w-[320px]">
            {/*
              Replace the inner div with <Image> when ready.
              The container will auto-size to the image's natural height.
              Example: <Image src="..." alt="..." width={320} height={0} className="w-full h-auto rounded-[24px]" />
            */}
            <div className="rounded-[24px] bg-[#f5f3f0] min-h-[440px] flex items-center justify-center">
              <span className="text-[11px] text-[#ccc] text-center px-4 leading-relaxed" style={MONO}>
                Add image:<br />public/images/about/<br />illustration-1.png
              </span>
            </div>
          </div>

        </motion.div>
      </section>

      {/* ── Design Practice ──────────────────────── */}
      <section className="px-6 lg:px-14 pb-24 max-w-[1080px] mx-auto">
        <motion.div {...fadeUp(0.15)} className="lg:flex lg:gap-20 lg:items-start">
          <div className="hidden lg:block flex-shrink-0 w-[200px] mt-1">
            <div className="rounded-[24px] bg-[#f5f3f0] min-h-[280px] flex items-center justify-center">
              <span className="text-[11px] text-[#ccc] text-center px-3" style={MONO}>Add image</span>
            </div>
          </div>
          <div className="flex-1 max-w-[540px]">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#bbb] mb-6" style={MONO}>
              Design Practice
            </p>
            <p className="text-[16px] text-[#666] leading-[1.92] mb-5" style={MONO}>
              My work sits between UX <Mark>research</Mark>, interaction design, and service thinking.
              I enjoy turning messy user behaviors into clear structures, thoughtful interfaces,
              and design decisions that help people feel more informed, confident, and in control.
            </p>
            <p className="text-[16px] text-[#666] leading-[1.92]" style={MONO}>
              At SCAD, I've explored projects across e-commerce, sustainability, conservation,
              mobility, and digital decision-making. I'm especially interested in how design
              can support <Mark>reflection</Mark>, <Mark>clarity</Mark>, and self-directed choice.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── Running ──────────────────────────────── */}
      <section className="px-6 lg:px-14 pb-24 max-w-[1080px] mx-auto">
        <motion.div {...fadeUp(0.2)} className="lg:flex lg:gap-20 lg:items-center">
          <div className="flex-1 max-w-[520px]">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#bbb] mb-6" style={MONO}>
              Out of the gym
            </p>
            <p className="text-[28px] lg:text-[32px] font-semibold text-[#111] mb-6 leading-[1.15]" style={MONO}>
              I keep moving.
            </p>
            <p className="text-[16px] text-[#666] leading-[1.92]" style={MONO}>
              <Mark>Running</Mark> is one of the ways I reset my mind. It gives me space to slow
              down, notice my surroundings, and return to my work with a clearer perspective.
            </p>
          </div>
          <div className="hidden lg:flex flex-shrink-0 w-[220px] aspect-square rounded-full bg-[#f5f3f0] items-center justify-center">
            <span className="text-[11px] text-[#ccc]" style={MONO}>Add photo</span>
          </div>
        </motion.div>
      </section>

      {/* ── Life outside ─────────────────────────── */}
      <section className="px-6 lg:px-14 pb-24 max-w-[1080px] mx-auto">
        <motion.div {...fadeUp(0.25)}>
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#bbb] mb-4" style={MONO}>
            Outside the screen
          </p>
          <p className="text-[28px] lg:text-[32px] font-semibold text-[#111] mb-12 leading-[1.15]" style={MONO}>
            I collect experiences.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
            <div className="space-y-4">
              <p className="text-[11px] text-[#ccc]" style={MONO}>01</p>
              <p className="text-[17px] font-medium text-[#111]" style={MONO}>
                <Mark>Volunteering</Mark>
              </p>
              <p className="text-[15px] text-[#777] leading-[1.88]" style={MONO}>
                Through AWE Conference and SCAD Serve, I've supported communities, met people
                from different backgrounds, and seen how small actions can create meaningful impact.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-[11px] text-[#ccc]" style={MONO}>02</p>
              <p className="text-[17px] font-medium text-[#111]" style={MONO}>
                <Mark>Traveling</Mark>
              </p>
              <p className="text-[15px] text-[#777] leading-[1.88]" style={MONO}>
                Traveling helps me notice how people live, move, communicate, and make decisions
                in different environments — and brings those observations back into my design work.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-[11px] text-[#ccc]" style={MONO}>03</p>
              <p className="text-[17px] font-medium text-[#111]" style={MONO}>
                <Mark>Cooking</Mark>
              </p>
              <p className="text-[15px] text-[#777] leading-[1.88]" style={MONO}>
                Cooking is another way of learning. It is slow, practical, sensory, and often
                connected to memory, culture, and care.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Experience ───────────────────────────── */}
      <section className="px-6 lg:px-14 pb-24 max-w-[1080px] mx-auto">
        <motion.div {...fadeUp(0.3)}>
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#bbb] mb-10" style={MONO}>
            Experience & Education
          </p>
          <div className="space-y-8 max-w-[640px]">
            {experience.map((item) => (
              <div key={item.period} className="flex gap-10">
                <p className="text-[13px] text-[#bbb] w-44 flex-shrink-0 pt-0.5" style={MONO}>
                  {item.period}
                </p>
                <div>
                  <p className="text-[16px] font-medium text-[#111]" style={MONO}>{item.role}</p>
                  <p className="text-[14px] text-[#999] mt-0.5" style={MONO}>{item.org}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Closing ──────────────────────────────── */}
      <section className="px-6 lg:px-14 pb-32 max-w-[1080px] mx-auto">
        <motion.div {...fadeUp(0.35)} className="border-t border-[#f0f0f0] pt-16">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#bbb] mb-8" style={MONO}>
            What I bring
          </p>
          <p className="text-[18px] lg:text-[20px] text-[#555] leading-[1.85] max-w-[620px]" style={MONO}>
            I bring <Mark>curiosity</Mark>, <Mark>structure</Mark>, and <Mark>care</Mark> into
            my design process. I like asking why people behave in certain ways, organizing complex
            information into something easier to understand, and creating experiences that feel
            useful, human, and quietly supportive.
          </p>
        </motion.div>
      </section>

      {/* ── Contact ──────────────────────────────── */}
      <section className="px-6 lg:px-14 pb-32 max-w-[1080px] mx-auto">
        <motion.div {...fadeUp(0.4)}>
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#bbb] mb-6" style={MONO}>
            Get in touch
          </p>
          <div className="flex flex-col gap-3">
            <a
              href="mailto:zxiaoming1124@gmail.com"
              className="text-[17px] text-[#111] underline underline-offset-4 decoration-[#ddd] hover:decoration-[#111] transition-colors w-fit"
              style={MONO}
            >
              zxiaoming1124@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/xiaoming-zhang-7b3583301"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[17px] text-[#111] underline underline-offset-4 decoration-[#ddd] hover:decoration-[#111] transition-colors w-fit"
              style={MONO}
            >
              LinkedIn ↗
            </a>
          </div>
        </motion.div>
      </section>

    </div>
  )
}
