'use client'

import { useState, useCallback } from 'react'
import { getBotReply, welcomeMessage } from '@/lib/data/chatbot'

let idCounter = 0
function nextId() {
  idCounter += 1
  return String(idCounter)
}

export function useChatbot() {
  const [messages, setMessages] = useState([
    { id: nextId(), text: welcomeMessage, role: 'bot' },
  ])
  const [isTyping, setIsTyping] = useState(false)

  const sendMessage = useCallback((text) => {
    if (!text.trim()) return

    const userMsg = { id: nextId(), text, role: 'user' }
    setMessages(prev => [...prev, userMsg])
    setIsTyping(true)

    setTimeout(() => {
      const reply = getBotReply(text)
      const botMsg = { id: nextId(), text: reply, role: 'bot' }
      setMessages(prev => [...prev, botMsg])
      setIsTyping(false)
    }, 700)
  }, [])

  return { messages, sendMessage, isTyping }
}
