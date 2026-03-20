'use client'

import { useState } from 'react'
import { allUnits } from '@/lib/data/units'
import RevealWrapper from '@/components/ui/RevealWrapper'

const displayUnits = allUnits.slice(0, 32)

const defaultUnit = allUnits.find(u => u.id === '14A') || allUnits[0]

function statusColor(status) {
  if (status === 'available') return 'var(--status-available)'
  if (status === 'reserved')  return 'var(--status-reserved)'
  return 'var(--status-sold)'
}

export default function FloorplanSection() {
  const [selectedUnit, setSelectedUnit] = useState(defaultUnit)

  return (
    <section
      id="floorplan"
      className="py-24 bg-bg-elevated"
    >
      <div className="container">
        <div className="mb-16">
          <RevealWrapper>
            <p className="eyebrow">Availability</p>
          </RevealWrapper>
          <RevealWrapper delay={1}>
            <h2
              className="font-display font-normal leading-[1.1] text-text-primary mt-4"
              style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
            >
              Select Your<br />Residence
            </h2>
          </RevealWrapper>
        </div>

        {/* Legend */}
        <RevealWrapper delay={2}>
          <div className="flex gap-6 mb-6 flex-wrap">
            {[
              { status: 'available', label: 'Available' },
              { status: 'reserved',  label: 'Reserved'  },
              { status: 'sold',      label: 'Sold'      },
            ].map(item => (
              <div
                key={item.status}
                className="flex items-center gap-2 text-[12px] font-semibold tracking-[0.06em] uppercase text-text-secondary"
              >
                <div
                  className="w-3 h-3 rounded-[2px] shrink-0"
                  style={{ background: statusColor(item.status) }}
                />
                {item.label}
              </div>
            ))}
          </div>
        </RevealWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start mt-16">
          {/* Grid canvas */}
          <RevealWrapper>
            <div className="bg-bg-surface rounded-card border border-border-subtle p-8 min-h-[500px] relative">
              <div className="relative w-full max-w-[480px] mx-auto grid gap-1" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
                {displayUnits.map(unit => (
                  <button
                    key={unit.id}
                    onClick={() => setSelectedUnit(unit)}
                    title={`Unit ${unit.id}`}
                    className="aspect-square rounded-[4px] cursor-pointer flex items-center justify-center font-mono text-[11px] font-normal transition-[transform,box-shadow] duration-150 outline-none"
                    style={{
                      border: selectedUnit?.id === unit.id ? '2px solid var(--brand)' : '1px solid transparent',
                      background: unit.status === 'available'
                        ? 'rgba(74,222,128,0.12)'
                        : unit.status === 'reserved'
                        ? 'rgba(251,191,36,0.1)'
                        : 'rgba(239,68,68,0.12)',
                      color: statusColor(unit.status),
                    }}
                  >
                    {unit.id}
                  </button>
                ))}
              </div>
            </div>
          </RevealWrapper>

          {/* Detail panel */}
          <RevealWrapper delay={2}>
            <div className="bg-bg-surface rounded-card border border-border-subtle p-8">
              <p className="eyebrow mb-2">Selected Unit</p>
              <h3 className="font-display text-[24px] font-normal mb-1">
                Unit {selectedUnit?.id}
              </h3>
              <div
                className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.08em] uppercase mb-6"
                style={{ color: statusColor(selectedUnit?.status) }}
              >
                <span
                  className="w-2 h-2 rounded-full inline-block"
                  style={{ background: statusColor(selectedUnit?.status) }}
                />
                {selectedUnit?.status?.charAt(0).toUpperCase()}{selectedUnit?.status?.slice(1)}
              </div>

              {[
                { label: 'Type',       value: selectedUnit?.type   },
                { label: 'Floor Area', value: selectedUnit?.area   },
                { label: 'Level',      value: String(selectedUnit?.level) },
                { label: 'Aspect',     value: selectedUnit?.aspect },
                { label: 'Price',      value: selectedUnit?.price  },
              ].map(row => (
                <div
                  key={row.label}
                  className="flex justify-between py-3 border-b border-border-subtle"
                >
                  <span className="text-[12px] text-text-secondary">{row.label}</span>
                  <span className="font-mono text-[14px] text-text-primary">{row.value}</span>
                </div>
              ))}

              <a
                href="#calendar-section"
                className="block w-full text-center bg-brand text-bg-base text-[12px] font-semibold tracking-[0.08em] uppercase py-[14px] rounded-pill mt-7 transition-colors duration-200"
              >
                Enquire About This Unit
              </a>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
