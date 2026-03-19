'use client'

import { useScrollProgress } from '@/lib/hooks/useScrollProgress'

export default function ScrollProgressBar() {
  const progress = useScrollProgress()

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 h-[3px] z-[9999] bg-[linear-gradient(90deg,var(--brand),var(--brand-hover))] shadow-[0_0_8px_rgba(201,169,110,0.5)] transition-[width] duration-[50ms] ease-linear pointer-events-none"
      style={{ width: `${progress}%` }}
    />
  )
}
