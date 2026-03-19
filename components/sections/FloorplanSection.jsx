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
      style={{ padding: 'var(--section-pad) 0', background: 'var(--bg-elevated)' }}
    >
      <div className="container">
        <div style={{ marginBottom: '64px' }}>
          <RevealWrapper>
            <p className="eyebrow">Availability</p>
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
              Select Your<br />Residence
            </h2>
          </RevealWrapper>
        </div>

        {/* Legend */}
        <RevealWrapper delay={2}>
          <div style={{ display: 'flex', gap: '24px', marginBottom: '32px', flexWrap: 'wrap' }}>
            {[
              { status: 'available', label: 'Available' },
              { status: 'reserved',  label: 'Reserved'  },
              { status: 'sold',      label: 'Sold'      },
            ].map(item => (
              <div key={item.status} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '2px', background: statusColor(item.status), flexShrink: '0' }} />
                {item.label}
              </div>
            ))}
          </div>
        </RevealWrapper>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '32px', alignItems: 'start' }}>
          {/* Grid canvas */}
          <RevealWrapper>
            <div
              style={{
                background: 'var(--bg-surface)',
                borderRadius: 'var(--radius-card)',
                border: '1px solid var(--border-subtle)',
                padding: '32px',
                minHeight: '500px',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '480px',
                  margin: '0 auto',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '4px',
                }}
              >
                {displayUnits.map(unit => (
                  <button
                    key={unit.id}
                    onClick={() => setSelectedUnit(unit)}
                    title={`Unit ${unit.id}`}
                    style={{
                      aspectRatio: '1',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      fontWeight: '400',
                      transition: 'transform 0.15s, box-shadow 0.15s',
                      border: selectedUnit?.id === unit.id ? '2px solid var(--brand)' : '1px solid transparent',
                      background: unit.status === 'available'
                        ? 'rgba(74,222,128,0.12)'
                        : unit.status === 'reserved'
                        ? 'rgba(251,191,36,0.1)'
                        : 'rgba(239,68,68,0.12)',
                      color: statusColor(unit.status),
                      outline: 'none',
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
            <div
              style={{
                background: 'var(--bg-surface)',
                borderRadius: 'var(--radius-card)',
                border: '1px solid var(--border-subtle)',
                padding: '32px',
              }}
            >
              <p className="eyebrow" style={{ marginBottom: '8px' }}>Selected Unit</p>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '24px',
                  fontWeight: '400',
                  marginBottom: '4px',
                }}
              >
                Unit {selectedUnit?.id}
              </h3>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '11px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: statusColor(selectedUnit?.status),
                  marginBottom: '24px',
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: statusColor(selectedUnit?.status),
                    display: 'inline-block',
                  }}
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
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '12px 0',
                    borderBottom: '1px solid var(--border-subtle)',
                  }}
                >
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{row.label}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--text-primary)' }}>{row.value}</span>
                </div>
              ))}

              <a
                href="#calendar-section"
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'center',
                  background: 'var(--brand)',
                  color: '#0A0A0A',
                  fontSize: '12px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '14px',
                  borderRadius: 'var(--radius-pill)',
                  marginTop: '28px',
                  transition: 'background 0.2s',
                  textDecoration: 'none',
                }}
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
