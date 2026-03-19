'use client'

import { useState } from 'react'

/**
 * @param {{ label: string, defaultActive?: boolean, onChange?: (active: boolean) => void }} props
 */
export default function ToggleSwitch({ label, defaultActive = false, onChange }) {
  const [active, setActive] = useState(defaultActive)

  function handleToggle() {
    const next = !active
    setActive(next)
    onChange?.(next)
  }

  return (
    <div className="flex items-center justify-between py-3 border-b border-border-subtle">
      <span className="text-[14px] text-text-primary">{label}</span>
      <button
        role="switch"
        aria-checked={active}
        onClick={handleToggle}
        className={`w-11 h-6 rounded-[12px] relative cursor-pointer transition-colors duration-200 shrink-0 border-none outline-none ${active ? 'bg-brand' : 'bg-border-strong'}`}
      >
        <span
          className="absolute top-[3px] left-[3px] w-[18px] h-[18px] rounded-full bg-white transition-transform duration-200 block"
          style={{ transform: active ? 'translateX(20px)' : 'none' }}
        />
      </button>
    </div>
  )
}
