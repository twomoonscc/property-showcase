'use client'

import { useRef } from 'react'
import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver'

/**
 * @param {{ children: React.ReactNode, delay?: 0|1|2|3|4, className?: string, as?: string }} props
 */
export default function RevealWrapper({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const ref = useRef(null)
  const isVisible = useIntersectionObserver(ref, { threshold: 0.12 })

  const delayClass = delay > 0 ? ` reveal-delay-${delay}` : ''
  const visibleClass = isVisible ? ' visible' : ''

  return (
    <Tag ref={ref} className={`reveal${delayClass}${visibleClass} ${className}`}>
      {children}
    </Tag>
  )
}
