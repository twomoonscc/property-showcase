'use client'

import { useEffect, useRef, useCallback } from 'react'

const gradients = [
  'linear-gradient(135deg, #1a2030 0%, #0d1520 100%)',
  'linear-gradient(135deg, #151015 0%, #201820 100%)',
  'linear-gradient(135deg, #101520 0%, #0a1018 100%)',
  'linear-gradient(135deg, #1a1510 0%, #120f08 100%)',
  'linear-gradient(135deg, #101820 0%, #0c1218 100%)',
]

/**
 * @param {{
 *   items: Array<{ label: string }>,
 *   currentIndex: number,
 *   onClose: () => void,
 *   onPrev: () => void,
 *   onNext: () => void,
 * }} props
 */
export default function GalleryLightbox({ items, currentIndex, onClose, onPrev, onNext }) {
  const closeRef = useRef(null)

  const handleKey = useCallback((e) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft') onPrev()
    if (e.key === 'ArrowRight') onNext()
  }, [onClose, onPrev, onNext])

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    closeRef.current?.focus()
    return () => document.removeEventListener('keydown', handleKey)
  }, [handleKey])

  const item = items[currentIndex]
  const gradient = gradients[currentIndex % gradients.length]

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      className="fixed inset-0 z-[9999] bg-[rgba(0,0,0,0.92)] flex items-center justify-center"
      onClick={onClose}
    >
      {/* Main image area */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-[90vw] max-w-[1200px] h-[80vh] rounded-card overflow-hidden flex items-center justify-center"
        style={{ background: gradient }}
      >
        <span className="font-display text-[14px] tracking-[0.1em] text-text-tertiary">
          {item.label}
        </span>

        {/* Close */}
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[rgba(0,0,0,0.5)] border border-border-strong text-text-primary text-[18px] flex items-center justify-center cursor-pointer"
        >
          ✕
        </button>

        {/* Prev */}
        <button
          onClick={onPrev}
          aria-label="Previous"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[rgba(0,0,0,0.5)] border border-border-strong text-text-primary text-[20px] flex items-center justify-center cursor-pointer"
        >
          ‹
        </button>

        {/* Next */}
        <button
          onClick={onNext}
          aria-label="Next"
          className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[rgba(0,0,0,0.5)] border border-border-strong text-text-primary text-[20px] flex items-center justify-center cursor-pointer"
        >
          ›
        </button>

        {/* Counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[12px] text-text-secondary font-mono">
          {currentIndex + 1} / {items.length}
        </div>
      </div>
    </div>
  )
}
