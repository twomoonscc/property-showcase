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
      style={{
        position: 'fixed',
        bottom: '100px',
        right: '32px',
        zIndex: '901',
        width: '340px',
        borderRadius: 'var(--radius-card)',
        background: 'var(--bg-glass)',
        border: '1px solid var(--border-default)',
        backdropFilter: 'blur(24px) saturate(1.2)',
        WebkitBackdropFilter: 'blur(24px) saturate(1.2)',
        boxShadow: 'var(--shadow-modal)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        animation: 'chatSlideUp 0.25s ease',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 20px',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'var(--brand-muted)',
              border: '1px solid var(--brand)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
            }}
          >
            ✦
          </div>
          <div>
            <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)' }}>
              {agentName}
            </div>
            <div
              style={{
                fontSize: '12px',
                color: 'var(--status-available)',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'var(--status-available)',
                  display: 'inline-block',
                }}
              />
              Online now
            </div>
          </div>
        </div>
        <button
          onClick={onClose}
          aria-label="Close chat"
          style={{
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            border: '1px solid var(--border-default)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-secondary)',
            fontSize: '16px',
            cursor: 'pointer',
            background: 'none',
          }}
        >
          ✕
        </button>
      </div>

      {/* Messages */}
      <div
        style={{
          height: '280px',
          overflowY: 'auto',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              maxWidth: '80%',
              padding: '12px 16px',
              borderRadius: 'var(--radius)',
              fontSize: '14px',
              lineHeight: '1.5',
              background: msg.role === 'bot' ? 'var(--bg-surface)' : 'var(--brand)',
              color: msg.role === 'bot' ? 'var(--text-primary)' : '#0A0A0A',
              fontWeight: msg.role === 'user' ? '500' : '400',
              alignSelf: msg.role === 'bot' ? 'flex-start' : 'flex-end',
              borderBottomLeftRadius: msg.role === 'bot' ? '2px' : 'var(--radius)',
              borderBottomRightRadius: msg.role === 'user' ? '2px' : 'var(--radius)',
            }}
          >
            {msg.text}
          </div>
        ))}
        {isTyping && (
          <div
            style={{
              maxWidth: '80%',
              padding: '12px 16px',
              borderRadius: 'var(--radius)',
              fontSize: '14px',
              background: 'var(--bg-surface)',
              color: 'var(--text-secondary)',
              alignSelf: 'flex-start',
              borderBottomLeftRadius: '2px',
            }}
          >
            …
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggestions */}
      {shownSuggestions.length > 0 && (
        <div style={{ padding: '0 16px 12px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {shownSuggestions.map((s) => (
            <button
              key={s}
              onClick={() => handleSuggestion(s)}
              style={{
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-pill)',
                padding: '6px 14px',
                fontSize: '12px',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                background: 'none',
                whiteSpace: 'nowrap',
                transition: 'border-color 0.2s, color 0.2s',
              }}
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Input row */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          padding: '12px 16px',
          borderTop: '1px solid var(--border-subtle)',
        }}
      >
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask anything about AURA…"
          style={{
            flex: '1',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-default)',
            borderRadius: 'var(--radius-pill)',
            padding: '10px 16px',
            fontSize: '14px',
            color: 'var(--text-primary)',
            outline: 'none',
          }}
        />
        <button
          onClick={handleSend}
          aria-label="Send"
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'var(--brand)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0A0A0A',
            fontSize: '16px',
            flexShrink: '0',
            cursor: 'pointer',
            border: 'none',
            transition: 'background 0.2s',
          }}
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
