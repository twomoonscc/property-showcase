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
    <div className="grid grid-cols-4 gap-2">
      {swatches.map((swatch) => {
        const isActive = selected === swatch.id
        return (
          <div key={swatch.id} className="relative pb-6">
            <button
              onClick={() => onSelect(swatch.id)}
              title={swatch.title}
              className="aspect-square rounded-[6px] cursor-pointer w-full transition-[border-color,transform] duration-200"
              style={{
                border: isActive ? '2px solid var(--brand)' : '2px solid transparent',
                background: swatch.gradient || gradientMap[swatch.name] || 'var(--bg-surface)',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none' }}
            />
            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[10px] text-text-secondary whitespace-nowrap">
              {swatch.name}
            </span>
          </div>
        )
      })}
    </div>
  )
}
