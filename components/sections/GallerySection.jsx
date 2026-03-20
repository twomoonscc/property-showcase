'use client'

import { useState } from 'react'
import GalleryLightbox from '@/components/ui/GalleryLightbox'
import RevealWrapper from '@/components/ui/RevealWrapper'

const galleryItems = [
  { label: 'LIVING ROOM — PENTHOUSE', gradient: 'linear-gradient(135deg, #1a2030 0%, #0d1520 100%)', col: '1/8', row: '1/2', height: '420px' },
  { label: 'PRIMARY SUITE',           gradient: 'linear-gradient(135deg, #151015 0%, #201820 100%)', col: '8/13', row: '1/2', height: '420px' },
  { label: 'KITCHEN',                 gradient: 'linear-gradient(135deg, #101520 0%, #0a1018 100%)', col: '1/5',  row: '2/3', height: '280px' },
  { label: 'ROOFTOP POOL',            gradient: 'linear-gradient(135deg, #1a1510 0%, #120f08 100%)', col: '5/9',  row: '2/3', height: '280px' },
  { label: 'LOBBY',                   gradient: 'linear-gradient(135deg, #101820 0%, #0c1218 100%)', col: '9/13', row: '2/3', height: '280px' },
]

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const isOpen = lightboxIndex !== null

  function goToPrev() {
    setLightboxIndex(i => (i - 1 + galleryItems.length) % galleryItems.length)
  }

  function goToNext() {
    setLightboxIndex(i => (i + 1) % galleryItems.length)
  }

  return (
    <section
      id="gallery"
      className="py-24 bg-bg-base"
    >
      <div className="container">
        <div className="mb-16">
          <RevealWrapper>
            <p className="eyebrow">The Residences</p>
          </RevealWrapper>
          <RevealWrapper delay={1}>
            <h2
              className="font-display font-normal leading-[1.1] text-text-primary mt-4"
              style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
            >
              Curated Spaces,<br />Singular Views
            </h2>
          </RevealWrapper>
        </div>

        <RevealWrapper>
          <div
            className="gallery-grid grid gap-2 mt-16"
            style={{ gridTemplateColumns: 'repeat(12, 1fr)' }}
          >
            {galleryItems.map((item, idx) => (
              <div
                key={item.label}
                onClick={() => setLightboxIndex(idx)}
                className="gallery-item overflow-hidden rounded-[4px] relative cursor-pointer bg-bg-elevated"
                style={{
                  gridColumn: item.col,
                  gridRow: item.row,
                  height: item.height,
                }}
              >
                <div
                  className="w-full h-full flex items-center justify-center relative"
                  style={{ background: item.gradient }}
                >
                  <span className="text-[13px] tracking-[0.1em] text-text-tertiary">
                    {item.label}
                  </span>

                  {/* Hover overlay */}
                  <div
                    className="gallery-hover-overlay absolute inset-0 bg-[rgba(0,0,0,0.60)] opacity-0 transition-opacity duration-300 flex items-center justify-center"
                    onMouseEnter={e => { e.currentTarget.style.opacity = '1' }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = '0' }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>

      {isOpen && (
        <GalleryLightbox
          items={galleryItems}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={goToPrev}
          onNext={goToNext}
        />
      )}
    </section>
  )
}
