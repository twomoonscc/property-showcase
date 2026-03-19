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
      className="py-24 bg-bg-base"
    >
      <div className="container" style={{ maxWidth: '900px' }}>
        <div className="mb-16">
          <RevealWrapper>
            <p className="eyebrow">The Vision</p>
          </RevealWrapper>
          <RevealWrapper delay={1}>
            <h2
              className="font-display font-normal leading-[1.1] text-text-primary mt-4"
              style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
            >
              Architecture as<br />a way of living
            </h2>
          </RevealWrapper>
        </div>

        <RevealWrapper delay={2}>
          <p className="text-[18px] leading-[1.8] text-text-secondary mb-8">
            AURA Residences is not simply a building. It is a considered response to the city around it — a vertical neighbourhood conceived to elevate daily life through proportion, materiality, and an unwavering commitment to craft. Each residence has been designed from the inside out, prioritising the lived experience above all else.
          </p>
        </RevealWrapper>

        <RevealWrapper delay={3}>
          <blockquote
            className="font-display italic font-light text-platinum leading-[1.4] border-l-2 border-brand pl-9 my-12"
            style={{ fontSize: 'clamp(22px, 3vw, 34px)' }}
          >
            "Every detail is a decision. Every material, a statement. Every view, a gift from the city to those who choose to live above it."
          </blockquote>
        </RevealWrapper>

        <RevealWrapper>
          <p className="text-[18px] leading-[1.8] text-text-secondary mb-8">
            Conceived by award-winning architectural studio Meridian, the building's façade responds to the path of the sun — angled louvres of hand-finished aluminium diffuse light through the day, creating shifting patterns across the interior floors. The lobby is a double-height atrium in honed Calacatta marble and smoked oak, attended by a dedicated concierge around the clock.
          </p>
        </RevealWrapper>

        <RevealWrapper delay={1}>
          <div className="my-14">
            <StatRow stats={stats} />
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
