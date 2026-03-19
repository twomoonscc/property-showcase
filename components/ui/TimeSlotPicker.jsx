'use client'

/**
 * @param {{
 *   date: string,
 *   slots: import('@/lib/types').TimeSlot[],
 *   selectedSlot: string | null,
 *   onSelectSlot: (time: string) => void
 * }} props
 */
export default function TimeSlotPicker({ date, slots, selectedSlot, onSelectSlot }) {
  return (
    <div
      style={{
        marginTop: '16px',
        background: 'var(--bg-surface)',
        borderRadius: 'var(--radius-card)',
        border: '1px solid var(--border-subtle)',
        paddingTop: '24px',
      }}
    >
      <div
        style={{
          fontSize: '11px',
          fontWeight: '600',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--text-secondary)',
          marginBottom: '16px',
          padding: '0 24px',
        }}
      >
        Available Times — {date}
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '8px',
          padding: '0 24px 24px',
        }}
      >
        {slots.map((slot) => {
          const isSelected = selectedSlot === slot.time
          return (
            <button
              key={slot.time}
              onClick={() => !slot.unavailable && onSelectSlot(slot.time)}
              disabled={slot.unavailable}
              style={{
                padding: '10px 8px',
                borderRadius: 'var(--radius)',
                border: isSelected
                  ? '1px solid var(--brand)'
                  : slot.unavailable
                  ? '1px solid var(--border-subtle)'
                  : '1px solid var(--border-default)',
                background: isSelected ? 'var(--brand)' : 'transparent',
                fontSize: '13px',
                textAlign: 'center',
                color: isSelected
                  ? '#0A0A0A'
                  : slot.unavailable
                  ? 'var(--text-disabled)'
                  : 'var(--text-primary)',
                fontWeight: isSelected ? '600' : '400',
                cursor: slot.unavailable ? 'default' : 'pointer',
                transition: 'border-color 0.2s, background 0.2s',
                fontFamily: 'var(--font-body)',
              }}
            >
              {slot.time}
            </button>
          )
        })}
      </div>
    </div>
  )
}
