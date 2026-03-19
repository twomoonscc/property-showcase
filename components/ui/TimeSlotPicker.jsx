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
    <div className="mt-4 bg-bg-surface rounded-card border border-border-subtle pt-6">
      <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-text-secondary mb-4 px-6">
        Available Times — {date}
      </div>
      <div className="grid grid-cols-3 gap-2 p-[0_24px_24px]">
        {slots.map((slot) => {
          const isSelected = selectedSlot === slot.time
          return (
            <button
              key={slot.time}
              onClick={() => !slot.unavailable && onSelectSlot(slot.time)}
              disabled={slot.unavailable}
              className={[
                'py-[10px] px-2 rounded-[8px] text-[13px] text-center transition-[border-color,background] duration-200 font-body',
                isSelected
                  ? 'border border-brand bg-brand text-[#0A0A0A] font-semibold'
                  : slot.unavailable
                  ? 'border border-border-subtle bg-transparent text-text-disabled cursor-default'
                  : 'border border-border-default bg-transparent text-text-primary font-normal cursor-pointer',
              ].join(' ')}
            >
              {slot.time}
            </button>
          )
        })}
      </div>
    </div>
  )
}
