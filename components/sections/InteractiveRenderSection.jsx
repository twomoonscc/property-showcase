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
      className="h-screen bg-bg-base relative overflow-hidden flex items-stretch"
    >
      {/* Render canvas */}
      <div
        className="flex-1 relative flex items-center justify-center"
        style={{ background: 'radial-gradient(ellipse 70% 80% at 50% 60%, rgba(20,30,50,0.8) 0%, #050810 100%)' }}
      >
        {/* Wireframe building */}
        <div className="relative w-[320px] h-[480px]">
          {/* Faces */}
          <div className="absolute w-[200px] h-[400px] bottom-0 left-[60px] border border-[rgba(201,169,110,0.3)]" />
          <div className="absolute w-[80px] h-[360px] bottom-0 left-[240px] border-t border-r border-b border-[rgba(201,169,110,0.3)] -skew-y-[5deg] origin-bottom-left" />
          <div className="absolute w-[200px] h-[60px] bottom-[400px] left-[60px] border-t border-l border-r border-[rgba(201,169,110,0.3)] -skew-x-[20deg] origin-bottom-left" />
          {/* Lines */}
          <div className="absolute w-[200px] h-px left-[60px] bottom-[200px] bg-[rgba(201,169,110,0.15)]" />
          <div className="absolute w-[200px] h-px left-[60px] bottom-[300px] bg-[rgba(201,169,110,0.15)]" />
          <div className="absolute w-px h-[400px] left-[127px] bottom-0 bg-[rgba(201,169,110,0.15)]" />
          <div className="absolute w-px h-[400px] left-[194px] bottom-0 bg-[rgba(201,169,110,0.15)]" />

          {/* Hotspots */}
          {hotspots.map(hs => (
            <div
              key={hs.id}
              onMouseEnter={() => setHoveredHotspot(hs.id)}
              onMouseLeave={() => setHoveredHotspot(null)}
              className="absolute w-7 h-7 rounded-full border-2 border-brand bg-[rgba(201,169,110,0.12)] cursor-pointer flex items-center justify-center -translate-x-1/2 -translate-y-1/2 transition-[transform,box-shadow] duration-200"
              style={{
                top: hs.top,
                left: hs.left,
                boxShadow: hoveredHotspot === hs.id ? '0 0 16px rgba(201,169,110,0.4)' : 'none',
                scale: hoveredHotspot === hs.id ? '1.2' : '1',
              }}
            >
              {/* Pulse ring */}
              <span
                className="absolute w-full h-full rounded-full border-2 border-brand opacity-50 block"
                style={{ animation: 'pulse-ring 2s ease-out infinite' }}
              />

              {/* Tooltip */}
              {hoveredHotspot === hs.id && (
                <div
                  className="absolute bg-[rgba(17,17,17,0.80)] border border-border-default rounded-[8px] p-[12px_16px] w-[180px] backdrop-blur-[12px] text-[13px] text-text-primary top-[-60px] left-1/2 -ml-[90px] whitespace-nowrap pointer-events-none z-10"
                >
                  <span className="font-semibold block mb-[2px]">{hs.label}</span>
                  <span className="text-[12px] text-text-secondary">{hs.sub}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Instruction hint */}
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-[12px] text-text-tertiary tracking-[0.06em]">
            Click &amp; drag to orbit · Scroll to zoom · Hover pins for details
          </p>
        </div>
      </div>

      {/* Controls panel */}
      <div className="w-[280px] bg-bg-elevated border-l border-border-subtle p-[40px_32px] flex flex-col gap-9 overflow-y-auto">
        <div>
          <p className="eyebrow mb-3">Interactive Model</p>
          <h3 className="font-display text-[22px] font-normal text-text-primary">
            Explore Every<br />Detail
          </h3>
        </div>

        {/* Toggles */}
        <div>
          <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-text-secondary mb-[14px]">
            Virtual Staging
          </div>
          {toggles.map(t => (
            <ToggleSwitch key={t.label} label={t.label} defaultActive={t.defaultActive} />
          ))}
        </div>

        {/* Material swatches */}
        <div>
          <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-text-secondary mb-[14px]">
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
          <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-text-secondary mb-[14px]">
            View Level
          </div>
          <input
            type="range"
            min={1}
            max={28}
            value={viewLevel}
            onChange={e => setViewLevel(Number(e.target.value))}
            className="w-full accent-brand"
          />
          <div className="flex justify-between mt-[6px]">
            <span className="text-[11px] text-text-tertiary">Level 1</span>
            <span className="font-mono text-[13px] text-brand">
              Level {viewLevel}
            </span>
            <span className="text-[11px] text-text-tertiary">Level 28</span>
          </div>
        </div>
      </div>
    </section>
  )
}
