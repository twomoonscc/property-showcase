'use client'

const gradientMap = {
  Marble:   'linear-gradient(135deg, #e8e4df, #c8c4bf)',
  Oak:      'linear-gradient(135deg, #8b6914, #6b4f0f)',
  Concrete: 'linear-gradient(135deg, #8a8a8a, #6a6a6a)',
  Terrazzo: 'linear-gradient(135deg, #c4b8a0, #a09080)',
}

/**
 * @param {{ swatches: import('@/lib/types').MaterialSwatch[], selected: string, onSelect: (id: string) => void }} props
 */
export default function MaterialSwatchPicker({ swatches, selected, onSelect }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '8px',
      }}
    >
      {swatches.map((swatch) => {
        const isActive = selected === swatch.id
        return (
          <div key={swatch.id} style={{ position: 'relative', paddingBottom: '24px' }}>
            <button
              onClick={() => onSelect(swatch.id)}
              title={swatch.title}
              style={{
                aspectRatio: '1',
                borderRadius: '6px',
                cursor: 'pointer',
                width: '100%',
                border: isActive ? '2px solid var(--brand)' : '2px solid transparent',
                background: swatch.gradient || gradientMap[swatch.name] || 'var(--bg-surface)',
                transition: 'border-color 0.2s, transform 0.15s',
                transform: 'none',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none' }}
            />
            <span
              style={{
                position: 'absolute',
                bottom: '4px',
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: '10px',
                color: 'var(--text-secondary)',
                whiteSpace: 'nowrap',
              }}
            >
              {swatch.name}
            </span>
          </div>
        )
      })}
    </div>
  )
}
