'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function BackButtonInner() {
  const searchParams = useSearchParams()
  const from = searchParams.get('from')

  const href = from === 'home' ? '/' : '/project'
  const label = from === 'home' ? 'Home' : 'All Work'

  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 text-[13px] text-[#0a0a0a]/40 hover:text-[#0a0a0a] transition-colors"
    >
      <ArrowLeft size={13} />
      {label}
    </Link>
  )
}

export default function BackButton() {
  return (
    <Suspense
      fallback={
        <Link
          href="/project"
          className="inline-flex items-center gap-1.5 text-[13px] text-[#0a0a0a]/40"
        >
          <ArrowLeft size={13} /> All Work
        </Link>
      }
    >
      <BackButtonInner />
    </Suspense>
  )
}
