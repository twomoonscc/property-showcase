'use client'

import { useScrollProgress } from '@/lib/hooks/useScrollProgress'

export default function ScrollProgressBar() {
  const progress = useScrollProgress()

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        height: '3px',
        width: `${progress}%`,
        zIndex: '9999',
        background: 'linear-gradient(90deg, var(--brand), var(--brand-hover))',
        boxShadow: '0 0 8px rgba(201,169,110,0.5)',
        transition: 'width 0.05s linear',
        pointerEvents: 'none',
      }}
    />
  )
}
