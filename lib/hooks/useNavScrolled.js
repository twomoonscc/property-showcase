'use client'

import { useState, useEffect } from 'react'

/**
 * @param {number} [threshold=60]
 * @returns {boolean}
 */
export function useNavScrolled(threshold = 60) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function update() {
      setScrolled(window.scrollY > threshold)
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [threshold])

  return scrolled
}
