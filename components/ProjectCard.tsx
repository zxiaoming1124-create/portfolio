'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

interface ProjectCardProps {
  title: string
  tags: string[]
  period: string
  description?: string
  href?: string
  index?: number
  imageSrc?: string
  imageLabel?: string
}

export default function ProjectCard({ title, tags, period, description, href, index = 0, imageSrc, imageLabel }: ProjectCardProps) {
  const Tag = href ? 'a' : 'div'

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Tag
        {...(href ? { href } : {})}
        className={`group block ${href ? 'cursor-pointer' : 'cursor-default opacity-50'}`}
      >
        {/* Image area */}
        <div className="w-full aspect-video rounded-2xl overflow-hidden bg-[#f3f3f3] mb-5 transition-all duration-300 group-hover:opacity-90">
          {imageSrc
            ? <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
            : <div className="w-full h-full flex items-center justify-center">
                <p className="text-xs text-[#bbb]">{imageLabel ?? 'Image coming soon'}</p>
              </div>
          }
        </div>

        {/* Text */}
        <div className="flex items-start justify-between gap-4 px-1">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-[12px] text-[#999]">{period}</span>
              {tags.map(tag => (
                <span key={tag} className="text-[12px] text-[#999]">· {tag}</span>
              ))}
            </div>
            <h3 className="text-[18px] font-medium text-[#111] leading-snug">{title}</h3>
            {description && <p className="text-[14px] text-[#999] mt-1.5 leading-relaxed">{description}</p>}
          </div>
          {href && (
            <ArrowUpRight size={18} className="text-[#ccc] group-hover:text-[#111] transition-colors flex-shrink-0 mt-1" />
          )}
        </div>
      </Tag>
    </motion.div>
  )
}
