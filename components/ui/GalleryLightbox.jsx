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
      style={{
        position: 'fixed',
        inset: '0',
        zIndex: '9999',
        background: 'rgba(0, 0, 0, 0.92)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={onClose}
    >
      {/* Main image area */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          width: '90vw',
          maxWidth: '1200px',
          height: '80vh',
          borderRadius: 'var(--radius-card)',
          overflow: 'hidden',
          background: gradient,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '14px',
            letterSpacing: '0.1em',
            color: 'var(--text-tertiary)',
          }}
        >
          {item.label}
        </span>

        {/* Close */}
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'rgba(0,0,0,0.5)',
            border: '1px solid var(--border-strong)',
            color: 'var(--text-primary)',
            fontSize: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          ✕
        </button>

        {/* Prev */}
        <button
          onClick={onPrev}
          aria-label="Previous"
          style={{
            position: 'absolute',
            left: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: 'rgba(0,0,0,0.5)',
            border: '1px solid var(--border-strong)',
            color: 'var(--text-primary)',
            fontSize: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          ‹
        </button>

        {/* Next */}
        <button
          onClick={onNext}
          aria-label="Next"
          style={{
            position: 'absolute',
            right: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: 'rgba(0,0,0,0.5)',
            border: '1px solid var(--border-strong)',
            color: 'var(--text-primary)',
            fontSize: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          ›
        </button>

        {/* Counter */}
        <div
          style={{
            position: 'absolute',
            bottom: '16px',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '12px',
            color: 'var(--text-secondary)',
            fontFamily: 'var(--font-mono)',
          }}
        >
          {currentIndex + 1} / {items.length}
        </div>
      </div>
    </div>
  )
}
