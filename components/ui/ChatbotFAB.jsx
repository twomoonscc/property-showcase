'use client'

import { useState } from 'react'
import ChatbotWidget from '@/components/ui/ChatbotWidget'

export default function ChatbotFAB() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {isOpen && <ChatbotWidget onClose={() => setIsOpen(false)} />}
      <button
        onClick={() => setIsOpen(o => !o)}
        aria-label="Open AI Assistant"
        style={{
          position: 'fixed',
          bottom: '32px',
          right: '32px',
          zIndex: '900',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'var(--brand)',
          color: '#0A0A0A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'var(--shadow-float)',
          cursor: 'pointer',
          border: 'none',
          transition: 'transform 0.2s, box-shadow 0.2s',
          fontSize: '22px',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.1)'
          e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.6)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'none'
          e.currentTarget.style.boxShadow = 'var(--shadow-float)'
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <circle cx="9" cy="10" r="1" fill="currentColor" />
          <circle cx="12" cy="10" r="1" fill="currentColor" />
          <circle cx="15" cy="10" r="1" fill="currentColor" />
        </svg>
      </button>
    </>
  )
}
