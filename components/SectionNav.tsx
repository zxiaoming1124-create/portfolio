'use client'

import { useState, useEffect } from 'react'

interface NavSection {
  id: string
  title: string
}

export default function SectionNav({ sections }: { sections: NavSection[] }) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? '')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id)
        },
        { rootMargin: '-10% 0% -65% 0%', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [sections])

  return (
    <nav
      className="hidden xl:flex fixed right-10 top-1/2 -translate-y-1/2 flex-col z-40 w-[140px]"
      style={{ fontFamily: 'var(--font-geist-mono), Courier New, monospace' }}
    >
      {sections.map(({ id, title }) => {
        const isActive = id === activeId
        return (
          <button
            key={id}
            onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className={`text-left text-[11px] leading-snug py-2 pl-3 border-l-2 transition-all duration-200 ${
              isActive
                ? 'border-[#111] text-[#111] font-semibold'
                : 'border-[#e8e8e8] text-[#bbb] hover:text-[#777] hover:border-[#bbb]'
            }`}
          >
            {title}
          </button>
        )
      })}
    </nav>
  )
}
