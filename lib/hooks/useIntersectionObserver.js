'use client'

import { useState, useEffect } from 'react'

/**
 * @param {React.RefObject<Element>} ref
 * @param {IntersectionObserverInit} [options]
 * @returns {boolean}
 */
export function useIntersectionObserver(ref, options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true)
      }
    }, options)

    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, options])

  return isIntersecting
}
