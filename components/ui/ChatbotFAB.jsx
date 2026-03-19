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
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-[900] w-14 h-14 rounded-full bg-brand text-bg-base flex items-center justify-center shadow-[var(--shadow-float)] cursor-pointer border-none transition-[transform,box-shadow] duration-200 text-[22px]"
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
