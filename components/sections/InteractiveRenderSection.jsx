'use client'

import { useState } from 'react'
import ToggleSwitch from '@/components/ui/ToggleSwitch'
import MaterialSwatchPicker from '@/components/ui/MaterialSwatchPicker'

const hotspots = [
  { id: 'hs1', label: 'Rooftop Terrace', sub: 'Level 28 · 420m²',          top: '30%', left: '38%' },
  { id: 'hs2', label: 'Sky Lounge',      sub: 'Level 20 · Residents only',  top: '55%', left: '58%' },
  { id: 'hs3', label: 'Grand Lobby',     sub: 'Ground · 24/7 Concierge',    top: '45%', left: '28%' },
]

const swatches = [
  { id: 'marble',   name: 'Marble',   title: 'Calacatta Marble', gradient: 'linear-gradient(135deg, #e8e4df, #c8c4bf)' },
  { id: 'oak',      name: 'Oak',      title: 'Smoked Oak',       gradient: 'linear-gradient(135deg, #8b6914, #6b4f0f)' },
  { id: 'concrete', name: 'Concrete', title: 'Honed Concrete',   gradient: 'linear-gradient(135deg, #8a8a8a, #6a6a6a)' },
  { id: 'terrazzo', name: 'Terrazzo', title: 'Terrazzo',         gradient: 'linear-gradient(135deg, #c4b8a0, #a09080)' },
]

const toggles = [
  { label: 'Show Furniture',  defaultActive: true  },
  { label: 'Natural Light',   defaultActive: true  },
  { label: 'Night Mode',      defaultActive: false },
]

export default function InteractiveRenderSection() {
  const [selectedSwatch, setSelectedSwatch] = useState('marble')
  const [viewLevel, setViewLevel] = useState(14)
  const [hoveredHotspot, setHoveredHotspot] = useState(null)

  return (
    <section
      id="render-section"
      style={{
        height: '100vh',
        background: 'var(--bg-base)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'stretch',
      }}
    >
      {/* Render canvas */}
      <div
        style={{
          flex: '1',
          position: 'relative',
          background: 'radial-gradient(ellipse 70% 80% at 50% 60%, rgba(20,30,50,0.8) 0%, #050810 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Wireframe building */}
        <div style={{ position: 'relative', width: '320px', height: '480px' }}>
          {/* Faces */}
          <div style={{ position: 'absolute', width: '200px', height: '400px', bottom: '0', left: '60px', border: '1px solid rgba(201,169,110,0.3)' }} />
          <div style={{ position: 'absolute', width: '80px', height: '360px', bottom: '0', left: '240px', borderTop: '1px solid rgba(201,169,110,0.3)', borderRight: '1px solid rgba(201,169,110,0.3)', borderBottom: '1px solid rgba(201,169,110,0.3)', transform: 'skewY(-5deg)', transformOrigin: 'bottom left' }} />
          <div style={{ position: 'absolute', width: '200px', height: '60px', bottom: '400px', left: '60px', borderTop: '1px solid rgba(201,169,110,0.3)', borderLeft: '1px solid rgba(201,169,110,0.3)', borderRight: '1px solid rgba(201,169,110,0.3)', transform: 'skewX(-20deg)', transformOrigin: 'bottom left' }} />
          {/* Lines */}
          <div style={{ position: 'absolute', width: '200px', height: '1px', left: '60px', bottom: '200px', background: 'rgba(201,169,110,0.15)' }} />
          <div style={{ position: 'absolute', width: '200px', height: '1px', left: '60px', bottom: '300px', background: 'rgba(201,169,110,0.15)' }} />
          <div style={{ position: 'absolute', width: '1px', height: '400px', left: '127px', bottom: '0', background: 'rgba(201,169,110,0.15)' }} />
          <div style={{ position: 'absolute', width: '1px', height: '400px', left: '194px', bottom: '0', background: 'rgba(201,169,110,0.15)' }} />

          {/* Hotspots */}
          {hotspots.map(hs => (
            <div
              key={hs.id}
              onMouseEnter={() => setHoveredHotspot(hs.id)}
              onMouseLeave={() => setHoveredHotspot(null)}
              style={{
                position: 'absolute',
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                border: '2px solid var(--brand)',
                background: 'var(--brand-muted)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                top: hs.top,
                left: hs.left,
                transform: 'translate(-50%, -50%)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                boxShadow: hoveredHotspot === hs.id ? '0 0 16px rgba(201,169,110,0.4)' : 'none',
                scale: hoveredHotspot === hs.id ? '1.2' : '1',
              }}
            >
              {/* Pulse ring */}
              <span
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  border: '2px solid var(--brand)',
                  animation: 'pulse-ring 2s ease-out infinite',
                  opacity: '0.5',
                  display: 'block',
                }}
              />

              {/* Tooltip */}
              {hoveredHotspot === hs.id && (
                <div
                  style={{
                    position: 'absolute',
                    background: 'var(--bg-glass)',
                    border: '1px solid var(--border-default)',
                    borderRadius: 'var(--radius)',
                    padding: '12px 16px',
                    width: '180px',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    fontSize: '13px',
                    color: 'var(--text-primary)',
                    top: '-60px',
                    left: '50%',
                    marginLeft: '-90px',
                    whiteSpace: 'nowrap',
                    pointerEvents: 'none',
                    zIndex: '10',
                  }}
                >
                  <span style={{ fontWeight: '600', display: 'block', marginBottom: '2px' }}>{hs.label}</span>
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{hs.sub}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Instruction hint */}
        <div style={{ position: 'absolute', bottom: '32px', left: '0', right: '0', textAlign: 'center' }}>
          <p style={{ fontSize: '12px', color: 'var(--text-tertiary)', letterSpacing: '0.06em' }}>
            Click &amp; drag to orbit · Scroll to zoom · Hover pins for details
          </p>
        </div>
      </div>

      {/* Controls panel */}
      <div
        style={{
          width: '280px',
          background: 'var(--bg-elevated)',
          borderLeft: '1px solid var(--border-subtle)',
          padding: '40px 32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '36px',
          overflowY: 'auto',
        }}
      >
        <div>
          <p className="eyebrow" style={{ marginBottom: '12px' }}>Interactive Model</p>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '22px',
              fontWeight: '400',
              color: 'var(--text-primary)',
            }}
          >
            Explore Every<br />Detail
          </h3>
        </div>

        {/* Toggles */}
        <div>
          <div
            style={{
              fontSize: '11px',
              fontWeight: '600',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--text-secondary)',
              marginBottom: '14px',
            }}
          >
            Virtual Staging
          </div>
          {toggles.map(t => (
            <ToggleSwitch key={t.label} label={t.label} defaultActive={t.defaultActive} />
          ))}
        </div>

        {/* Material swatches */}
        <div>
          <div
            style={{
              fontSize: '11px',
              fontWeight: '600',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--text-secondary)',
              marginBottom: '14px',
            }}
          >
            Floor Finish
          </div>
          <MaterialSwatchPicker
            swatches={swatches}
            selected={selectedSwatch}
            onSelect={setSelectedSwatch}
          />
        </div>

        {/* View Level slider */}
        <div>
          <div
            style={{
              fontSize: '11px',
              fontWeight: '600',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--text-secondary)',
              marginBottom: '14px',
            }}
          >
            View Level
          </div>
          <input
            type="range"
            min={1}
            max={28}
            value={viewLevel}
            onChange={e => setViewLevel(Number(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--brand)' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px' }}>
            <span style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>Level 1</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--brand)' }}>
              Level {viewLevel}
            </span>
            <span style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>Level 28</span>
          </div>
        </div>
      </div>
    </section>
  )
}
