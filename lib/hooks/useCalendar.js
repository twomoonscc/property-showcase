'use client'

import { useState } from 'react'

/**
 * @param {number} initialYear
 * @param {number} initialMonth - 0-indexed (0=Jan)
 */
export function useCalendar(initialYear, initialMonth) {
  const [year, setYear] = useState(initialYear)
  const [month, setMonth] = useState(initialMonth)

  function goToPrev() {
    if (month === 0) {
      setMonth(11)
      setYear(y => y - 1)
    } else {
      setMonth(m => m - 1)
    }
  }

  function goToNext() {
    if (month === 11) {
      setMonth(0)
      setYear(y => y + 1)
    } else {
      setMonth(m => m + 1)
    }
  }

  const daysInMonth = new Date(year, month + 1, 0).getDate()
  // Monday = 0, so shift from Sunday-based getDay()
  const firstDayOffset = (new Date(year, month, 1).getDay() + 6) % 7

  return { year, month, goToPrev, goToNext, daysInMonth, firstDayOffset }
}
