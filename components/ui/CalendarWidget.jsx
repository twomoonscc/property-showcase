'use client'

const DAY_HEADERS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

/**
 * @param {{
 *   year: number,
 *   month: number,
 *   today: Date,
 *   availableSlotDays: number[],
 *   selectedDay: number | null,
 *   onSelectDay: (day: number) => void,
 *   onPrevMonth: () => void,
 *   onNextMonth: () => void,
 * }} props
 */
export default function CalendarWidget({
  year,
  month,
  today,
  availableSlotDays,
  selectedDay,
  onSelectDay,
  onPrevMonth,
  onNextMonth,
}) {
  const todayYear = today.getFullYear()
  const todayMonth = today.getMonth()
  const todayDay = today.getDate()

  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const firstDayOffset = (new Date(year, month, 1).getDay() + 6) % 7

  const isCurrentMonth = year === todayYear && month === todayMonth
  const isPastMonth =
    year < todayYear || (year === todayYear && month < todayMonth)

  const cells = []
  for (let i = 0; i < firstDayOffset; i++) {
    cells.push({ empty: true, day: null })
  }
  for (let d = 1; d <= daysInMonth; d++) {
    const isPast = isPastMonth || (isCurrentMonth && d < todayDay)
    const isToday = isCurrentMonth && d === todayDay
    const hasSlot = availableSlotDays.includes(d)
    cells.push({ empty: false, day: d, isPast, isToday, hasSlot })
  }

  return (
    <div
      style={{
        background: 'var(--bg-surface)',
        borderRadius: 'var(--radius-card)',
        border: '1px solid var(--border-subtle)',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px 24px',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <button
          onClick={onPrevMonth}
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            border: '1px solid var(--border-default)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
            fontSize: '16px',
            background: 'none',
          }}
        >
          ‹
        </button>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '20px',
            fontWeight: '400',
            color: 'var(--text-primary)',
          }}
        >
          {MONTH_NAMES[month]} {year}
        </span>
        <button
          onClick={onNextMonth}
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            border: '1px solid var(--border-default)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
            fontSize: '16px',
            background: 'none',
          }}
        >
          ›
        </button>
      </div>

      {/* Day headers */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          padding: '12px 8px 0',
        }}
      >
        {DAY_HEADERS.map((h) => (
          <div
            key={h}
            style={{
              textAlign: 'center',
              fontSize: '11px',
              fontWeight: '600',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--text-tertiary)',
              paddingBottom: '8px',
            }}
          >
            {h}
          </div>
        ))}
      </div>

      {/* Days grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          padding: '8px',
        }}
      >
        {cells.map((cell, idx) => {
          if (cell.empty) {
            return <div key={`empty-${idx}`} style={{ aspectRatio: '1' }} />
          }

          const { day, isPast, isToday, hasSlot } = cell
          const isSelected = selectedDay === day

          let color = 'var(--text-secondary)'
          let bg = 'transparent'
          let fontWeight = '400'

          if (isPast) {
            color = 'var(--text-disabled)'
          } else if (isSelected) {
            bg = 'var(--brand)'
            color = '#0A0A0A'
            fontWeight = '600'
          } else if (isToday) {
            color = 'var(--brand)'
            fontWeight = '600'
          }

          return (
            <div
              key={day}
              onClick={() => !isPast && onSelectDay(day)}
              style={{
                aspectRatio: '1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                fontSize: '14px',
                color,
                background: bg,
                borderRadius: '50%',
                cursor: isPast ? 'default' : 'pointer',
                margin: '2px',
                fontWeight,
                transition: 'background 0.15s, color 0.15s',
                gap: '2px',
              }}
            >
              <span>{day}</span>
              {hasSlot && !isSelected && (
                <span
                  style={{
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    background: isSelected ? '#0A0A0A' : 'var(--brand)',
                    display: 'block',
                    marginTop: '-2px',
                  }}
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
