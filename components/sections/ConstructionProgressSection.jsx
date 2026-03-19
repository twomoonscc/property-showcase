import { milestones } from '@/lib/data/milestones'
import RevealWrapper from '@/components/ui/RevealWrapper'

export default function ConstructionProgressSection() {
  return (
    <section
      id="progress"
      style={{ padding: 'var(--section-pad) 0', background: 'var(--bg-base)' }}
    >
      <div className="container">
        <div style={{ marginBottom: '64px' }}>
          <RevealWrapper>
            <p className="eyebrow">Live Update</p>
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
              Construction<br />Progress
            </h2>
          </RevealWrapper>
          <RevealWrapper delay={2}>
            <p style={{ color: 'var(--text-secondary)', marginTop: '16px', fontSize: '16px' }}>
              As of March 2026 — Level 17 of 28 complete. On schedule for Q3 2027 delivery.
            </p>
          </RevealWrapper>
        </div>

        <RevealWrapper>
          <div style={{ position: 'relative', marginTop: '64px', paddingBottom: '32px' }}>
            {/* Progress track */}
            <div
              style={{
                position: 'relative',
                height: '2px',
                background: 'var(--border-default)',
              }}
            >
              <div
                style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, var(--brand), var(--brand-hover))',
                  width: '62%',
                  position: 'relative',
                  boxShadow: '0 0 12px rgba(201,169,110,0.4)',
                }}
              >
                {/* Pulsing end dot */}
                <div
                  style={{
                    position: 'absolute',
                    right: '-8px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: 'var(--brand)',
                    animation: 'progressPulse 2s ease-in-out infinite',
                  }}
                />
              </div>
            </div>

            {/* Milestones */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${milestones.length}, 1fr)`,
                gap: '0',
                marginTop: '32px',
              }}
            >
              {milestones.map((ms, i) => {
                const isDone    = ms.state === 'done'
                const isCurrent = ms.state === 'current'

                return (
                  <div
                    key={ms.date}
                    style={{ textAlign: 'center', position: 'relative' }}
                  >
                    {/* Dot */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '-40px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        border: isDone || isCurrent ? '2px solid var(--brand)' : '2px solid var(--border-strong)',
                        background: isDone || isCurrent ? 'var(--brand)' : 'var(--bg-base)',
                        zIndex: '2',
                        animation: isCurrent ? 'progressPulse 2s ease-in-out infinite' : 'none',
                        boxShadow: isCurrent ? '0 0 0 6px rgba(201,169,110,0.15)' : 'none',
                      }}
                    />
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '12px',
                        color: 'var(--text-secondary)',
                        marginBottom: '6px',
                      }}
                    >
                      {ms.date}
                    </div>
                    <div
                      style={{
                        fontSize: '13px',
                        fontWeight: '500',
                        color: isDone ? 'var(--brand)' : 'var(--text-primary)',
                        marginBottom: '4px',
                      }}
                    >
                      {ms.label}
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>
                      {ms.sublabel}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
