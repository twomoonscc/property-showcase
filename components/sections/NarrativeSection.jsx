import RevealWrapper from '@/components/ui/RevealWrapper'
import StatRow from '@/components/ui/StatRow'

const stats = [
  { number: '42',  label: 'Residences'    },
  { number: '28',  label: 'Floors'        },
  { number: '97%', label: 'Sold in Stage 1' },
]

export default function NarrativeSection() {
  return (
    <section
      id="narrative"
      style={{
        padding: 'var(--section-pad) 0',
        background: 'var(--bg-base)',
      }}
    >
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ marginBottom: '64px' }}>
          <RevealWrapper>
            <p className="eyebrow">The Vision</p>
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
              Architecture as<br />a way of living
            </h2>
          </RevealWrapper>
        </div>

        <RevealWrapper delay={2}>
          <p
            style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: 'var(--text-secondary)',
              marginBottom: '32px',
            }}
          >
            AURA Residences is not simply a building. It is a considered response to the city around it — a vertical neighbourhood conceived to elevate daily life through proportion, materiality, and an unwavering commitment to craft. Each residence has been designed from the inside out, prioritising the lived experience above all else.
          </p>
        </RevealWrapper>

        <RevealWrapper delay={3}>
          <blockquote
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(22px, 3vw, 34px)',
              fontStyle: 'italic',
              fontWeight: '300',
              color: 'var(--platinum)',
              lineHeight: '1.4',
              borderLeft: '2px solid var(--brand)',
              paddingLeft: '36px',
              margin: '48px 0',
            }}
          >
            "Every detail is a decision. Every material, a statement. Every view, a gift from the city to those who choose to live above it."
          </blockquote>
        </RevealWrapper>

        <RevealWrapper>
          <p
            style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: 'var(--text-secondary)',
              marginBottom: '32px',
            }}
          >
            Conceived by award-winning architectural studio Meridian, the building's façade responds to the path of the sun — angled louvres of hand-finished aluminium diffuse light through the day, creating shifting patterns across the interior floors. The lobby is a double-height atrium in honed Calacatta marble and smoked oak, attended by a dedicated concierge around the clock.
          </p>
        </RevealWrapper>

        <RevealWrapper delay={1}>
          <div style={{ margin: '56px 0' }}>
            <StatRow stats={stats} />
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
