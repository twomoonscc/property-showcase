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
      style={{ height: '80vh', position: 'relative', overflow: 'hidden', background: '#050810' }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          background: 'radial-gradient(ellipse 120% 120% at 50% 50%, #0a1020 0%, #050810 100%)',
        }}
      >
        {/* Map grid */}
        <div
          style={{
            position: 'absolute',
            inset: '0',
            backgroundImage: `
              linear-gradient(rgba(201,169,110,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(201,169,110,0.04) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: '0',
              backgroundImage: `
                linear-gradient(rgba(201,169,110,0.02) 1px, transparent 1px),
                linear-gradient(90deg, rgba(201,169,110,0.02) 1px, transparent 1px)
              `,
              backgroundSize: '12px 12px',
            }}
          />
        </div>

        {/* Roads */}
        <div style={{ position: 'absolute', top: '35%', left: '0', right: '0', height: '2px', background: 'rgba(255,255,255,0.05)' }} />
        <div style={{ position: 'absolute', top: '60%', left: '0', right: '0', height: '1px', background: 'rgba(255,255,255,0.05)' }} />
        <div style={{ position: 'absolute', left: '30%', top: '0', bottom: '0', width: '2px', background: 'rgba(255,255,255,0.05)' }} />
        <div style={{ position: 'absolute', left: '65%', top: '0', bottom: '0', width: '1px', background: 'rgba(255,255,255,0.05)' }} />
        <div style={{ position: 'absolute', top: '20%', left: '0', right: '0', height: '2px', transform: 'rotate(-8deg)', background: 'rgba(255,255,255,0.04)' }} />

        {/* Main pin */}
        <div
          style={{
            position: 'absolute',
            top: mainPin.top,
            left: mainPin.left,
            transform: 'translate(-50%, -50%)',
            cursor: 'pointer',
          }}
        >
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'var(--brand)',
              border: '2px solid var(--brand)',
              color: '#0A0A0A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              boxShadow: '0 0 24px rgba(201,169,110,0.4)',
              position: 'relative',
            }}
          >
            <span
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                border: '2px solid var(--brand)',
                animation: 'pulse-ring 2.5s ease-out infinite',
                display: 'block',
              }}
            />
            ⌂
          </div>
          <div
            style={{
              position: 'absolute',
              top: '110%',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'var(--bg-glass)',
              border: '1px solid var(--border-default)',
              backdropFilter: 'blur(8px)',
              borderRadius: '6px',
              padding: '6px 10px',
              whiteSpace: 'nowrap',
              fontSize: '11px',
              fontWeight: '600',
              letterSpacing: '0.05em',
              color: 'var(--text-primary)',
              marginTop: '4px',
            }}
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
              style={{
                position: 'absolute',
                top: pin.top,
                left: pin.left,
                transform: 'translate(-50%, -50%)',
                cursor: 'pointer',
              }}
            >
              <div
                style={{
                  width: style.size,
                  height: style.size,
                  borderRadius: '50%',
                  background: style.bg,
                  border: `2px solid ${style.border}`,
                  color: style.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  transition: 'transform 0.2s',
                }}
              >
                {pin.icon}
              </div>
            </div>
          )
        })}

        {/* Overlay panel */}
        <div
          style={{
            position: 'absolute',
            top: '40px',
            left: '40px',
            zIndex: '5',
            background: 'var(--bg-glass)',
            border: '1px solid var(--border-default)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderRadius: 'var(--radius-card)',
            padding: '24px 28px',
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '22px',
              fontWeight: '400',
              color: 'var(--text-primary)',
              marginBottom: '16px',
            }}
          >
            Prime Location
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {overlayItems.map(item => (
              <div
                key={item.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontSize: '13px',
                  color: 'var(--text-secondary)',
                }}
              >
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '6px',
                    background: item.bgColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    flexShrink: '0',
                  }}
                >
                  {item.icon}
                </div>
                <span>{item.label}</span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    color: 'var(--brand)',
                    marginLeft: 'auto',
                  }}
                >
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
