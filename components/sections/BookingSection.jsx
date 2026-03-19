'use client'

import { useState } from 'react'
import { useCalendar } from '@/lib/hooks/useCalendar'
import CalendarWidget from '@/components/ui/CalendarWidget'
import TimeSlotPicker from '@/components/ui/TimeSlotPicker'
import RevealWrapper from '@/components/ui/RevealWrapper'

const AVAILABLE_SLOT_DAYS = [19, 20, 23, 24, 25, 26, 27, 30, 31]

const TIME_SLOTS = [
  { time: '9:00 AM',   unavailable: false },
  { time: '10:30 AM',  unavailable: false },
  { time: '12:00 PM',  unavailable: false },
  { time: '1:30 PM',   unavailable: true  },
  { time: '3:00 PM',   unavailable: false },
  { time: '4:30 PM',   unavailable: false },
]

const TODAY = new Date(2026, 2, 19) // 19 March 2026

const inputClass = 'bg-bg-surface border border-border-default rounded-[8px] px-4 py-[14px] text-[15px] text-text-primary outline-none focus:border-brand focus:shadow-[0_0_0_3px_rgba(201,169,110,0.12)]'
const labelClass = 'text-[12px] font-semibold tracking-[0.06em] uppercase text-text-secondary'

export default function BookingSection() {
  const { year, month, goToPrev, goToNext } = useCalendar(2026, 2)
  const [selectedDay, setSelectedDay]   = useState(19)
  const [selectedSlot, setSelectedSlot] = useState('10:30 AM')

  const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  const dateLabel = selectedDay
    ? `${selectedDay} ${MONTH_NAMES[month]}`
    : 'Select a date'

  return (
    <section
      id="calendar-section"
      className="py-24 bg-bg-elevated"
    >
      <div className="container">
        <div className="mb-16">
          <RevealWrapper>
            <p className="eyebrow">Experience AURA</p>
          </RevealWrapper>
          <RevealWrapper delay={1}>
            <h2
              className="font-display font-normal leading-[1.1] text-text-primary mt-4"
              style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
            >
              Book a Private<br />Viewing
            </h2>
          </RevealWrapper>
          <RevealWrapper delay={2}>
            <p className="text-text-secondary mt-4 text-[16px]">
              Our sales team will personally guide you through the residences and answer every question.
            </p>
          </RevealWrapper>
        </div>

        <div className="grid gap-16 items-start mt-16" style={{ gridTemplateColumns: '1fr 1fr' }}>
          {/* Left: calendar + time slots */}
          <RevealWrapper>
            <CalendarWidget
              year={year}
              month={month}
              today={TODAY}
              availableSlotDays={AVAILABLE_SLOT_DAYS}
              selectedDay={selectedDay}
              onSelectDay={setSelectedDay}
              onPrevMonth={goToPrev}
              onNextMonth={goToNext}
            />
            <TimeSlotPicker
              date={`Thu ${dateLabel}`}
              slots={TIME_SLOTS}
              selectedSlot={selectedSlot}
              onSelectSlot={setSelectedSlot}
            />
          </RevealWrapper>

          {/* Right: booking form */}
          <RevealWrapper delay={2}>
            <form
              onSubmit={e => e.preventDefault()}
              className="flex flex-col gap-5 pt-2"
            >
              <div className="grid gap-4" style={{ gridTemplateColumns: '1fr 1fr' }}>
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>First Name</label>
                  <input type="text" placeholder="James" className={inputClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>Last Name</label>
                  <input type="text" placeholder="Cruickshank" className={inputClass} />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className={labelClass}>Email Address</label>
                <input type="email" placeholder="james@example.com" className={inputClass} />
              </div>

              <div className="flex flex-col gap-2">
                <label className={labelClass}>Phone Number</label>
                <input type="tel" placeholder="+1 555 000 0000" className={inputClass} />
              </div>

              <div className="flex flex-col gap-2">
                <label className={labelClass}>Message (Optional)</label>
                <textarea
                  rows={3}
                  placeholder="I'm interested in a 3-bedroom residence on a high floor…"
                  className={`${inputClass} resize-y`}
                />
              </div>

              <div className="flex gap-3 flex-wrap">
                <button
                  type="submit"
                  className="bg-brand text-bg-base text-[13px] font-semibold tracking-[0.08em] uppercase px-8 py-4 rounded-pill cursor-pointer border-none transition-[background,transform] duration-200 font-body"
                >
                  Confirm Viewing — {selectedSlot || '10:30 AM'}
                </button>
                <button
                  type="button"
                  className="border border-border-default text-text-secondary text-[13px] font-semibold tracking-[0.08em] uppercase px-8 py-[15px] rounded-pill cursor-pointer bg-transparent font-body transition-[border-color,color] duration-200"
                >
                  Set Reminder
                </button>
              </div>
            </form>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
