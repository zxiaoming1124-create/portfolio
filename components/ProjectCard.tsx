'use client'

import { motion } from 'framer-motion'

interface ProjectCardProps {
  title: string
  subtitle: string
  eyebrow: string
  period: string
  href?: string
  index?: number
  imageSrc?: string
  imageLabel?: string
}

export default function ProjectCard({
  title,
  subtitle,
  eyebrow,
  period,
  href,
  index = 0,
  imageSrc,
  imageLabel,
}: ProjectCardProps) {
  const Tag = href ? 'a' : 'div'
  const isClickable = !!href

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={!isClickable ? 'opacity-40' : ''}
    >
      <Tag
        {...(href ? { href } : {})}
        className={`group block rounded-2xl overflow-hidden ${isClickable ? 'cursor-pointer' : 'cursor-default'}`}
      >
        {/* Image */}
        <div className="w-full aspect-[4/3] bg-[#e2e0dc]">
          {imageSrc ? (
            <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-sm text-[#bbb]">{imageLabel ?? 'Image coming soon'}</p>
            </div>
          )}
        </div>

        {/* Text bar */}
        <div
          className={`px-6 py-5 bg-white transition-colors duration-300 ${isClickable ? 'group-hover:bg-[#5B8FBF]' : ''}`}
        >
          <p className={`text-[12px] mb-1.5 transition-colors duration-300 ${isClickable ? 'text-[#999] group-hover:text-white/60' : 'text-[#999]'}`}>
            {eyebrow}
          </p>
          <h3 className={`text-[20px] font-medium leading-snug mb-1.5 transition-colors duration-300 ${isClickable ? 'text-[#111] group-hover:text-white' : 'text-[#111]'}`}>
            {subtitle}
          </h3>
          <p className={`text-[12px] transition-colors duration-300 ${isClickable ? 'text-[#999] group-hover:text-white/60' : 'text-[#999]'}`}>
            {period}
          </p>
        </div>
      </Tag>
    </motion.div>
  )
}
