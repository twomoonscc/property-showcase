'use client'

import { useState } from 'react'

export default function VideoSection() {
  const [playing, setPlaying] = useState(false)

  return (
    <section
      id="video-section"
      className="relative h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, #0d1520 0%, #0a0f1a 50%, #050a10 100%)' }}
      >
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(30,50,80,0.3) 0%, transparent 70%)' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.005) 3px, rgba(255,255,255,0.005) 4px)' }}
        />
      </div>

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[40%] z-[2] pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}
      />

      {/* Play button */}
      {!playing && (
        <button
          onClick={() => setPlaying(true)}
          aria-label="Play video"
          className="relative z-[3] w-[88px] h-[88px] rounded-full bg-[rgba(17,17,17,0.80)] border border-border-strong flex items-center justify-center backdrop-blur-[12px] transition-[transform,border-color,box-shadow] duration-200 cursor-pointer"
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'scale(1.08)'
            e.currentTarget.style.borderColor = 'var(--brand)'
            e.currentTarget.style.boxShadow = '0 0 40px rgba(201,169,110,0.25)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'none'
            e.currentTarget.style.borderColor = 'var(--border-strong)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="ml-[6px]">
            <polygon points="6,3 20,12 6,21" />
          </svg>
        </button>
      )}

      {playing && (
        <button
          onClick={() => setPlaying(false)}
          aria-label="Pause video"
          className="relative z-[3] w-[88px] h-[88px] rounded-full bg-[rgba(17,17,17,0.80)] border border-brand flex items-center justify-center backdrop-blur-[12px] cursor-pointer"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        </button>
      )}

      {/* Bottom meta */}
      <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 z-[4] px-4 sm:px-16 flex justify-between items-end gap-4">
        <div>
          <span className="text-[12px] font-semibold tracking-[0.1em] uppercase text-brand">
            Official Film
          </span>
          <h3 className="font-display text-[20px] sm:text-[28px] font-normal text-text-primary mt-[6px]">
            A Life Above the City
          </h3>
        </div>
        <div className="flex gap-2 sm:gap-3 items-center shrink-0">
          <button
            aria-label="Mute"
            className="w-11 h-11 rounded-full bg-[rgba(255,255,255,0.08)] border border-border-strong flex items-center justify-center text-text-primary cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="11,5 6,9 2,9 2,15 6,15 11,19" />
              <path d="M15.54,8.46a5,5,0,0,1,0,7.07" />
              <path d="M19.07,4.93a10,10,0,0,1,0,14.14" />
            </svg>
          </button>
          <button
            aria-label="Fullscreen"
            className="w-11 h-11 rounded-full bg-[rgba(255,255,255,0.08)] border border-border-strong flex items-center justify-center text-text-primary cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15,3 21,3 21,9" />
              <polyline points="9,21 3,21 3,15" />
              <line x1="21" y1="3" x2="14" y2="10" />
              <line x1="3" y1="21" x2="10" y2="14" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
