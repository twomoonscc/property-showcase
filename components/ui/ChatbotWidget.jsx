'use client'

import { useRef, useEffect, useState } from 'react'
import { useChatbot } from '@/lib/hooks/useChatbot'
import { suggestions, agentName } from '@/lib/data/chatbot'

/**
 * @param {{ onClose: () => void }} props
 */
export default function ChatbotWidget({ onClose }) {
  const { messages, sendMessage, isTyping } = useChatbot()
  const [input, setInput] = useState('')
  const [shownSuggestions, setShownSuggestions] = useState(suggestions)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  function handleSend() {
    const text = input.trim()
    if (!text) return
    sendMessage(text)
    setInput('')
  }

  function handleSuggestion(text) {
    sendMessage(text)
    setShownSuggestions(prev => prev.filter(s => s !== text))
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleSend()
  }

  return (
    <div
      className="fixed bottom-[88px] right-4 sm:bottom-[100px] sm:right-8 z-[901] w-[calc(100vw-32px)] sm:w-[340px] rounded-card bg-[rgba(17,17,17,0.80)] border border-border-default backdrop-blur-[24px] saturate-[1.2] shadow-[var(--shadow-modal)] overflow-hidden flex flex-col"
      style={{ animation: 'chatSlideUp 0.25s ease' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-[16px_20px] border-b border-border-subtle">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[rgba(201,169,110,0.12)] border border-brand flex items-center justify-center text-[16px]">
            ✦
          </div>
          <div>
            <div className="text-[14px] font-semibold text-text-primary">
              {agentName}
            </div>
            <div className="text-[12px] text-status-available flex items-center gap-[5px]">
              <span className="w-1.5 h-1.5 rounded-full bg-status-available inline-block" />
              Online now
            </div>
          </div>
        </div>
        <button
          onClick={onClose}
          aria-label="Close chat"
          className="w-7 h-7 rounded-full border border-border-default flex items-center justify-center text-text-secondary text-[16px] cursor-pointer bg-transparent"
        >
          ✕
        </button>
      </div>

      {/* Messages */}
      <div className="h-[280px] overflow-y-auto p-5 flex flex-col gap-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={[
              'max-w-[80%] px-4 py-3 rounded-[8px] text-[14px] leading-[1.5]',
              msg.role === 'bot'
                ? 'bg-bg-surface text-text-primary font-normal self-start rounded-bl-[2px]'
                : 'bg-brand text-[#0A0A0A] font-medium self-end rounded-br-[2px]',
            ].join(' ')}
          >
            {msg.text}
          </div>
        ))}
        {isTyping && (
          <div className="max-w-[80%] px-4 py-3 rounded-[8px] rounded-bl-[2px] text-[14px] bg-bg-surface text-text-secondary self-start">
            …
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggestions */}
      {shownSuggestions.length > 0 && (
        <div className="p-[0_16px_12px] flex flex-wrap gap-2">
          {shownSuggestions.map((s) => (
            <button
              key={s}
              onClick={() => handleSuggestion(s)}
              className="border border-border-default rounded-pill px-[14px] py-[6px] text-[12px] text-text-secondary cursor-pointer bg-transparent whitespace-nowrap transition-[border-color,color] duration-200"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Input row */}
      <div className="flex gap-2 p-[12px_16px] border-t border-border-subtle">
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask anything about AURA…"
          className="flex-1 bg-bg-surface border border-border-default rounded-pill px-4 py-[10px] text-[14px] text-text-primary outline-none focus:border-brand"
        />
        <button
          onClick={handleSend}
          aria-label="Send"
          className="w-9 h-9 rounded-full bg-brand flex items-center justify-center text-[#0A0A0A] text-[16px] shrink-0 cursor-pointer border-none transition-colors duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </div>
    </div>
  )
}
