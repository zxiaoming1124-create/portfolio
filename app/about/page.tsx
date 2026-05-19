'use client'

import { motion } from 'framer-motion'

const experience = [
  { period: 'SEP 2023 – Present', role: 'UX Design (MFA)', org: 'Savannah College of Art and Design' },
  { period: 'JAN – MAR 2025', role: 'Service Design Lead', org: 'Deloitte × SCAD' },
  { period: 'SEP 2022 – JUN 2023', role: 'Marketing Design Intern', org: 'Hubei Yidufa Wood Industry' },
  { period: '2018 – 2022', role: 'Product Design (B.A.)', org: 'Hubei University of Technology' },
]

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-8 pt-16 pb-32">
      <div className="max-w-2xl">

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h1 className="text-[32px] font-semibold tracking-tight mb-8">About</h1>
          <div className="space-y-5 text-[16px] text-[#555] leading-[1.8]">
            <p>
              I'm a designer from China, currently studying at SCAD. I care about making things that feel right — not just look good.
            </p>
            <p>
              My work sits at the intersection of UX and service design. I start from research, follow the people, and work toward solutions that are clear, usable, and honest.
            </p>
            <p>
              When I'm not designing, I run. Long runs help me step back from a problem and come back with a clearer head — it's become part of how I think.
            </p>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-20"
        >
          <p className="text-[12px] text-[#bbb] uppercase tracking-widest mb-8">Experience & Education</p>
          <div className="space-y-7">
            {experience.map((item) => (
              <div key={item.period} className="flex gap-8 sm:gap-16">
                <p className="text-[13px] text-[#bbb] leading-relaxed w-36 flex-shrink-0 pt-0.5">{item.period}</p>
                <div>
                  <p className="text-[15px] font-medium text-[#111]">{item.role}</p>
                  <p className="text-[14px] text-[#999] mt-0.5">{item.org}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <p className="text-[12px] text-[#bbb] uppercase tracking-widest mb-6">Get in touch</p>
          <div className="flex gap-5">
            <a
              href="mailto:zxiaoming1124@gmail.com"
              className="text-[15px] font-medium text-[#111] underline underline-offset-4 decoration-[#ddd] hover:decoration-[#111] transition-colors"
            >
              zxiaoming1124@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/xiaoming-zhang-7b3583301"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-medium text-[#111] underline underline-offset-4 decoration-[#ddd] hover:decoration-[#111] transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
