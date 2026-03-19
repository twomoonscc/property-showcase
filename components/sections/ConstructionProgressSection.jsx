import { milestones } from '@/lib/data/milestones'
import RevealWrapper from '@/components/ui/RevealWrapper'

export default function ConstructionProgressSection() {
  return (
    <section
      id="progress"
      className="py-24 bg-bg-base"
    >
      <div className="container">
        <div className="mb-16">
          <RevealWrapper>
            <p className="eyebrow">Live Update</p>
          </RevealWrapper>
          <RevealWrapper delay={1}>
            <h2
              className="font-display font-normal leading-[1.1] text-text-primary mt-4"
              style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
            >
              Construction<br />Progress
            </h2>
          </RevealWrapper>
          <RevealWrapper delay={2}>
            <p className="text-text-secondary mt-4 text-[16px]">
              As of March 2026 — Level 17 of 28 complete. On schedule for Q3 2027 delivery.
            </p>
          </RevealWrapper>
        </div>

        <RevealWrapper>
          <div className="relative mt-16 pb-8">
            {/* Progress track */}
            <div className="relative h-0.5 bg-border-default">
              <div
                className="h-full relative w-[62%]"
                style={{
                  background: 'linear-gradient(90deg, var(--brand), var(--brand-hover))',
                  boxShadow: '0 0 12px rgba(201,169,110,0.4)',
                }}
              >
                {/* Pulsing end dot */}
                <div
                  className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-brand"
                  style={{ animation: 'progressPulse 2s ease-in-out infinite' }}
                />
              </div>
            </div>

            {/* Milestones */}
            <div
              className="grid gap-0 mt-8"
              style={{ gridTemplateColumns: `repeat(${milestones.length}, 1fr)` }}
            >
              {milestones.map((ms) => {
                const isDone    = ms.state === 'done'
                const isCurrent = ms.state === 'current'

                return (
                  <div
                    key={ms.date}
                    className="text-center relative"
                  >
                    {/* Dot */}
                    <div
                      className="absolute top-[-40px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 z-[2]"
                      style={{
                        borderColor: isDone || isCurrent ? 'var(--brand)' : 'var(--border-strong)',
                        background: isDone || isCurrent ? 'var(--brand)' : 'var(--bg-base)',
                        animation: isCurrent ? 'progressPulse 2s ease-in-out infinite' : 'none',
                        boxShadow: isCurrent ? '0 0 0 6px rgba(201,169,110,0.15)' : 'none',
                      }}
                    />
                    <div className="font-mono text-[12px] text-text-secondary mb-[6px]">
                      {ms.date}
                    </div>
                    <div
                      className="text-[13px] font-medium mb-1"
                      style={{ color: isDone ? 'var(--brand)' : 'var(--text-primary)' }}
                    >
                      {ms.label}
                    </div>
                    <div className="text-[11px] text-text-tertiary">
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
