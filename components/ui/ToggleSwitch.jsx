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
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 0',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <span style={{ fontSize: '14px', color: 'var(--text-primary)' }}>{label}</span>
      <button
        role="switch"
        aria-checked={active}
        onClick={handleToggle}
        style={{
          width: '44px',
          height: '24px',
          borderRadius: '12px',
          background: active ? 'var(--brand)' : 'var(--border-strong)',
          position: 'relative',
          cursor: 'pointer',
          transition: 'background 0.2s',
          flexShrink: '0',
          border: 'none',
          outline: 'none',
        }}
      >
        <span
          style={{
            position: 'absolute',
            top: '3px',
            left: '3px',
            width: '18px',
            height: '18px',
            borderRadius: '50%',
            background: '#fff',
            transition: 'transform 0.2s',
            transform: active ? 'translateX(20px)' : 'none',
            display: 'block',
          }}
        />
      </button>
    </div>
  )
}
