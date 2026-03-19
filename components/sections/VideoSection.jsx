'use client'

import { useState } from 'react'

export default function VideoSection() {
  const [playing, setPlaying] = useState(false)

  return (
    <section
      id="video-section"
      style={{
        position: 'relative',
        height: '100vh',
        background: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background */}
      <div
        style={{
          position: 'absolute',
          inset: '0',
          background: 'linear-gradient(135deg, #0d1520 0%, #0a0f1a 50%, #050a10 100%)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: '0',
            background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(30,50,80,0.3) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: '0',
            background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.005) 3px, rgba(255,255,255,0.005) 4px)',
          }}
        />
      </div>

      {/* Bottom gradient */}
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          right: '0',
          height: '40%',
          background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
          zIndex: '2',
          pointerEvents: 'none',
        }}
      />

      {/* Play button */}
      {!playing && (
        <button
          onClick={() => setPlaying(true)}
          aria-label="Play video"
          style={{
            position: 'relative',
            zIndex: '3',
            width: '88px',
            height: '88px',
            borderRadius: '50%',
            background: 'var(--bg-glass)',
            border: '1px solid var(--border-strong)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            transition: 'transform 0.2s, border-color 0.2s, box-shadow 0.2s',
            cursor: 'pointer',
          }}
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
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" style={{ marginLeft: '6px' }}>
            <polygon points="6,3 20,12 6,21" />
          </svg>
        </button>
      )}

      {playing && (
        <button
          onClick={() => setPlaying(false)}
          aria-label="Pause video"
          style={{
            position: 'relative',
            zIndex: '3',
            width: '88px',
            height: '88px',
            borderRadius: '50%',
            background: 'var(--bg-glass)',
            border: '1px solid var(--brand)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(12px)',
            cursor: 'pointer',
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        </button>
      )}

      {/* Bottom meta */}
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '0',
          right: '0',
          zIndex: '4',
          padding: '0 var(--page-pad)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        <div>
          <span
            style={{
              fontSize: '12px',
              fontWeight: '600',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--brand)',
            }}
          >
            Official Film
          </span>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '28px',
              fontWeight: '400',
              color: 'var(--text-primary)',
              marginTop: '6px',
            }}
          >
            A Life Above the City
          </h3>
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <button
            aria-label="Mute"
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid var(--border-strong)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-primary)',
              cursor: 'pointer',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="11,5 6,9 2,9 2,15 6,15 11,19" />
              <path d="M15.54,8.46a5,5,0,0,1,0,7.07" />
              <path d="M19.07,4.93a10,10,0,0,1,0,14.14" />
            </svg>
          </button>
          <button
            aria-label="Fullscreen"
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid var(--border-strong)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-primary)',
              cursor: 'pointer',
            }}
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
