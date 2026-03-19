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
      style={{ padding: 'var(--section-pad) 0', background: 'var(--bg-elevated)' }}
    >
      <div className="container">
        <div style={{ marginBottom: '64px' }}>
          <RevealWrapper>
            <p className="eyebrow">Experience AURA</p>
          </RevealWrapper>
          <RevealWrapper delay={1}>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(32px, 4vw, 56px)',
                fontWeight: '400',
                lineHeight: '1.1',
                color: 'var(--text-primary)',
                marginTop: '16px',
              }}
            >
              Book a Private<br />Viewing
            </h2>
          </RevealWrapper>
          <RevealWrapper delay={2}>
            <p style={{ color: 'var(--text-secondary)', marginTop: '16px', fontSize: '16px' }}>
              Our sales team will personally guide you through the residences and answer every question.
            </p>
          </RevealWrapper>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'start',
          }}
        >
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
              style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingTop: '8px' }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="James"
                    style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius)', padding: '14px 16px', fontSize: '15px', color: 'var(--text-primary)', outline: 'none' }}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Cruickshank"
                    style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius)', padding: '14px 16px', fontSize: '15px', color: 'var(--text-primary)', outline: 'none' }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="james@example.com"
                  style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius)', padding: '14px 16px', fontSize: '15px', color: 'var(--text-primary)', outline: 'none' }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+1 555 000 0000"
                  style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius)', padding: '14px 16px', fontSize: '15px', color: 'var(--text-primary)', outline: 'none' }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                  Message (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="I'm interested in a 3-bedroom residence on a high floor…"
                  style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius)', padding: '14px 16px', fontSize: '15px', color: 'var(--text-primary)', outline: 'none', resize: 'vertical' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button
                  type="submit"
                  style={{
                    background: 'var(--brand)',
                    color: '#0A0A0A',
                    fontSize: '13px',
                    fontWeight: '600',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    padding: '16px 32px',
                    borderRadius: 'var(--radius-pill)',
                    cursor: 'pointer',
                    border: 'none',
                    transition: 'background 0.2s, transform 0.15s',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  Confirm Viewing — {selectedSlot || '10:30 AM'}
                </button>
                <button
                  type="button"
                  style={{
                    border: '1px solid var(--border-default)',
                    color: 'var(--text-secondary)',
                    fontSize: '13px',
                    fontWeight: '600',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    padding: '15px 32px',
                    borderRadius: 'var(--radius-pill)',
                    cursor: 'pointer',
                    background: 'none',
                    fontFamily: 'var(--font-body)',
                    transition: 'border-color 0.2s, color 0.2s',
                  }}
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
