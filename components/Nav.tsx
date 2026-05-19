'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()

  return (
    <header className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-[15px] font-medium text-[#111] hover:opacity-50 transition-opacity">
          Xiaoming Zhang
        </Link>
        <nav className="flex items-center gap-7">
          <Link href="/project" className={`text-[14px] transition-opacity ${pathname.startsWith('/project') ? 'text-[#111] opacity-100' : 'text-[#111] opacity-40 hover:opacity-100'}`}>
            Work
          </Link>
          <Link href="/about" className={`text-[14px] transition-opacity ${pathname === '/about' ? 'text-[#111] opacity-100' : 'text-[#111] opacity-40 hover:opacity-100'}`}>
            About
          </Link>
          <a href="#" className="text-[14px] text-[#111] opacity-40 hover:opacity-100 transition-opacity">
            Resume
          </a>
          <a
            href="mailto:zxiaoming1124@gmail.com"
            className="text-[13px] font-medium text-white bg-[#111] rounded-full px-4 py-1.5 hover:opacity-75 transition-opacity"
          >
            Let's talk
          </a>
        </nav>
      </div>
    </header>
  )
}
