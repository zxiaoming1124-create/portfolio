'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()

  const navLink = (href: string, label: string) => {
    const isActive = href === '/project'
      ? pathname.startsWith('/project')
      : pathname === href
    return (
      <Link
        href={href}
        className={`relative text-[18px] tracking-wide transition-colors ${
          isActive ? 'text-[#111]' : 'text-[#aaa] hover:text-[#111]'
        }`}
        style={{ fontFamily: 'var(--font-geist-mono), Courier New, monospace' }}
      >
        {isActive && (
          <span className="absolute -top-[20px] left-0 right-0 h-[3px] bg-[#111] rounded-sm" />
        )}
        {label}
      </Link>
    )
  }

  return (
    <header className="w-full sticky top-0 z-50 bg-[#f5f3f0]/95 backdrop-blur-sm">
      <div className="w-full px-14 h-[72px] flex items-center justify-between">
        <Link
          href="/"
          className="text-[13px] uppercase tracking-[0.2em] font-medium text-[#111] hover:opacity-50 transition-opacity"
          style={{ fontFamily: 'var(--font-geist-mono), Courier New, monospace' }}
        >
          Xiaoming Zhang
        </Link>

        <nav className="flex items-center gap-12">
          {navLink('/project', 'Work')}
          {navLink('/about', 'About')}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[18px] text-[#aaa] hover:text-[#111] tracking-wide transition-colors"
            style={{ fontFamily: 'var(--font-geist-mono), Courier New, monospace' }}
          >
            Resume
          </a>
          <a
            href="mailto:zxiaoming1124@gmail.com"
            className="text-[14px] font-medium text-white bg-[#111] rounded-full px-5 py-2 hover:opacity-70 transition-opacity"
          >
            Let's talk
          </a>
        </nav>
      </div>
    </header>
  )
}
