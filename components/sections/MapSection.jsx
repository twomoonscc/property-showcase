import { mainPin, poiPins, overlayItems } from '@/lib/data/mapPins'

const categoryStyles = {
  main:       { bg: 'var(--brand)',                       border: 'var(--brand)',                     color: '#0A0A0A', size: '44px' },
  restaurant: { bg: 'rgba(239,100,50,0.15)',               border: 'rgba(239,100,50,0.5)',             color: '#ef6432', size: '32px' },
  school:     { bg: 'rgba(74,222,128,0.1)',                border: 'rgba(74,222,128,0.4)',             color: '#4ade80', size: '32px' },
  transport:  { bg: 'rgba(96,165,250,0.1)',                border: 'rgba(96,165,250,0.4)',             color: '#60a5fa', size: '32px' },
  park:       { bg: 'rgba(74,222,128,0.08)',               border: 'rgba(74,222,128,0.3)',             color: '#4ade80', size: '32px' },
}

export default function MapSection() {
  return (
    <section
      id="map-section"
      className="h-[80vh] relative overflow-hidden bg-[#050810]"
    >
      <div
        className="w-full h-full relative"
        style={{ background: 'radial-gradient(ellipse 120% 120% at 50% 50%, #0a1020 0%, #050810 100%)' }}
      >
        {/* Map grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(201,169,110,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(201,169,110,0.04) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(201,169,110,0.02) 1px, transparent 1px),
                linear-gradient(90deg, rgba(201,169,110,0.02) 1px, transparent 1px)
              `,
              backgroundSize: '12px 12px',
            }}
          />
        </div>

        {/* Roads */}
        <div className="absolute top-[35%] left-0 right-0 h-[2px] bg-[rgba(255,255,255,0.05)]" />
        <div className="absolute top-[60%] left-0 right-0 h-px bg-[rgba(255,255,255,0.05)]" />
        <div className="absolute left-[30%] top-0 bottom-0 w-[2px] bg-[rgba(255,255,255,0.05)]" />
        <div className="absolute left-[65%] top-0 bottom-0 w-px bg-[rgba(255,255,255,0.05)]" />
        <div className="absolute top-[20%] left-0 right-0 h-[2px] rotate-[-8deg] bg-[rgba(255,255,255,0.04)]" />

        {/* Main pin */}
        <div
          className="absolute cursor-pointer -translate-x-1/2 -translate-y-1/2"
          style={{ top: mainPin.top, left: mainPin.left }}
        >
          <div
            className="w-11 h-11 rounded-full bg-brand border-2 border-brand flex items-center justify-center text-[18px] relative"
            style={{
              color: '#0A0A0A',
              boxShadow: '0 0 24px rgba(201,169,110,0.4)',
            }}
          >
            <span
              className="absolute w-full h-full rounded-full border-2 border-brand block"
              style={{ animation: 'pulse-ring 2.5s ease-out infinite' }}
            />
            ⌂
          </div>
          <div
            className="absolute top-[110%] left-1/2 -translate-x-1/2 bg-[rgba(17,17,17,0.80)] border border-border-default backdrop-blur-[8px] rounded-[6px] px-[10px] py-[6px] whitespace-nowrap text-[11px] font-semibold tracking-[0.05em] text-text-primary mt-1"
          >
            AURA Residences
          </div>
        </div>

        {/* POI pins */}
        {poiPins.map(pin => {
          const style = categoryStyles[pin.category] || categoryStyles.restaurant
          return (
            <div
              key={pin.label}
              className="absolute cursor-pointer -translate-x-1/2 -translate-y-1/2"
              style={{ top: pin.top, left: pin.left }}
            >
              <div
                className="rounded-full flex items-center justify-center text-[14px] transition-transform duration-200"
                style={{
                  width: style.size,
                  height: style.size,
                  background: style.bg,
                  border: `2px solid ${style.border}`,
                  color: style.color,
                }}
              >
                {pin.icon}
              </div>
            </div>
          )
        })}

        {/* Overlay panel */}
        <div
          className="absolute top-4 left-4 right-4 sm:top-10 sm:left-10 sm:right-auto z-[5] bg-[rgba(17,17,17,0.80)] border border-border-default backdrop-blur-[16px] rounded-card p-4 sm:p-[24px_28px]"
        >
          <h3 className="font-display text-[22px] font-normal text-text-primary mb-4">
            Prime Location
          </h3>
          <div className="flex flex-col gap-[10px]">
            {overlayItems.map(item => (
              <div
                key={item.label}
                className="flex items-center gap-3 text-[13px] text-text-secondary"
              >
                <div
                  className="w-7 h-7 rounded-[6px] flex items-center justify-center text-[14px] shrink-0"
                  style={{ background: item.bgColor }}
                >
                  {item.icon}
                </div>
                <span>{item.label}</span>
                <span className="font-mono text-[12px] text-brand ml-auto">
                  {item.distance}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
