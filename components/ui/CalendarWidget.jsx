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
    <div className="bg-bg-surface rounded-card border border-border-subtle overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-[20px_24px] border-b border-border-subtle">
        <button
          onClick={onPrevMonth}
          className="w-8 h-8 rounded-full border border-border-default flex items-center justify-center text-text-secondary cursor-pointer text-[16px] bg-transparent"
        >
          ‹
        </button>
        <span className="font-display text-[20px] font-normal text-text-primary">
          {MONTH_NAMES[month]} {year}
        </span>
        <button
          onClick={onNextMonth}
          className="w-8 h-8 rounded-full border border-border-default flex items-center justify-center text-text-secondary cursor-pointer text-[16px] bg-transparent"
        >
          ›
        </button>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 p-[12px_8px_0]">
        {DAY_HEADERS.map((h) => (
          <div
            key={h}
            className="text-center text-[11px] font-semibold tracking-[0.08em] uppercase text-text-tertiary pb-2"
          >
            {h}
          </div>
        ))}
      </div>

      {/* Days grid */}
      <div className="grid grid-cols-7 p-2">
        {cells.map((cell, idx) => {
          if (cell.empty) {
            return <div key={`empty-${idx}`} className="aspect-square" />
          }

          const { day, isPast, isToday, hasSlot } = cell
          const isSelected = selectedDay === day

          let colorClass = 'text-text-secondary'
          let bgClass = 'bg-transparent'
          let fontClass = 'font-normal'

          if (isPast) {
            colorClass = 'text-text-disabled'
          } else if (isSelected) {
            bgClass = 'bg-brand'
            colorClass = 'text-[#0A0A0A]'
            fontClass = 'font-semibold'
          } else if (isToday) {
            colorClass = 'text-brand'
            fontClass = 'font-semibold'
          }

          return (
            <div
              key={day}
              onClick={() => !isPast && onSelectDay(day)}
              className={`aspect-square flex items-center justify-center flex-col text-[14px] rounded-full m-[2px] transition-[background,color] duration-150 gap-[2px] ${colorClass} ${bgClass} ${fontClass} ${isPast ? 'cursor-default' : 'cursor-pointer'}`}
            >
              <span>{day}</span>
              {hasSlot && !isSelected && (
                <span
                  className="w-1 h-1 rounded-full bg-brand block -mt-[2px]"
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
