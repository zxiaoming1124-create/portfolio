'use client'

import { motion } from 'framer-motion'

const experience = [
  { period: 'Sep 2023 – Present', role: 'UX Design (MFA)', org: 'Savannah College of Art and Design' },
  { period: 'Jan – Mar 2025', role: 'Service Design Lead', org: 'Deloitte × SCAD' },
  { period: 'Sep 2022 – Jun 2023', role: 'Marketing Design Intern', org: 'Hubei Yidufa Wood Industry' },
  { period: '2018 – 2022', role: 'Product Design (B.A.)', org: 'Hubei University of Technology' },
]

export default function AboutPage() {
  return (
    <div className="max-w-[680px] mx-auto px-6 pt-16 pb-32">

      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-[40px] font-semibold tracking-tight mb-12"
      >
        About
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="space-y-5 text-[18px] text-[#555] leading-[1.75] mb-20"
      >
        <p>I'm a designer from China, currently studying at SCAD. I care about making things that feel right — not just look good.</p>
        <p>My work sits at the intersection of UX and service design. I start from research, follow the people, and work toward solutions that are clear, usable, and honest.</p>
        <p>When I'm not designing, I run. Long runs help me step back from a problem and come back with a clearer head.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-20"
      >
        <p className="text-[13px] text-[#bbb] uppercase tracking-widest mb-8">Experience & Education</p>
        <div className="space-y-8">
          {experience.map((item) => (
            <div key={item.period} className="flex gap-10">
              <p className="text-[14px] text-[#bbb] w-40 flex-shrink-0 pt-0.5">{item.period}</p>
              <div>
                <p className="text-[17px] font-medium text-[#111]">{item.role}</p>
                <p className="text-[15px] text-[#999] mt-0.5">{item.org}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <p className="text-[13px] text-[#bbb] uppercase tracking-widest mb-6">Get in touch</p>
        <div className="flex flex-col gap-3">
          <a href="mailto:zxiaoming1124@gmail.com" className="text-[18px] text-[#111] underline underline-offset-4 decoration-[#ddd] hover:decoration-[#111] transition-colors w-fit">
            zxiaoming1124@gmail.com
          </a>
          <a href="https://linkedin.com/in/xiaoming-zhang-7b3583301" target="_blank" rel="noopener noreferrer" className="text-[18px] text-[#111] underline underline-offset-4 decoration-[#ddd] hover:decoration-[#111] transition-colors w-fit">
            LinkedIn ↗
          </a>
        </div>
      </motion.div>

    </div>
  )
}
