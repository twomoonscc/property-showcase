export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background */}
      <div
        style={{
          position: 'absolute',
          inset: '0',
          background: `
            linear-gradient(to top, #0A0A0A 0%, rgba(10,10,10,0.65) 35%, rgba(10,10,10,0.2) 65%, rgba(10,10,10,0.45) 100%),
            linear-gradient(135deg, #1a1610 0%, #0d1015 40%, #0a0d12 100%)
          `,
        }}
      >
        {/* Radial glow overlays */}
        <div
          style={{
            position: 'absolute',
            inset: '0',
            background: `
              radial-gradient(ellipse 60% 80% at 65% 40%, rgba(201,169,110,0.04) 0%, transparent 70%),
              radial-gradient(ellipse 30% 60% at 70% 60%, rgba(232,228,223,0.02) 0%, transparent 60%)
            `,
          }}
        />
      </div>

      {/* Grid overlay */}
      <div
        style={{
          position: 'absolute',
          inset: '0',
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.3) 70%, transparent)',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: '2',
          textAlign: 'center',
          padding: '0 24px',
          maxWidth: '960px',
          marginTop: '40px',
        }}
      >
        <p
          style={{
            fontSize: '12px',
            fontWeight: '600',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--brand)',
            marginBottom: '28px',
            animation: 'fadeUp 1s ease 0.2s both',
          }}
        >
          A New Standard in Luxury Living
        </p>

        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(48px, 8vw, 96px)',
            fontWeight: '300',
            lineHeight: '1.0',
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)',
            marginBottom: '28px',
            animation: 'fadeUp 1s ease 0.4s both',
          }}
        >
          AURA<br />
          <em style={{ fontStyle: 'italic', color: 'var(--platinum)' }}>Residences</em>
        </h1>

        <p
          style={{
            fontSize: '18px',
            fontWeight: '400',
            lineHeight: '1.7',
            color: 'var(--text-secondary)',
            maxWidth: '560px',
            margin: '0 auto 48px',
            animation: 'fadeUp 1s ease 0.6s both',
          }}
        >
          Forty-two singular residences poised above the city. Where architectural precision meets the art of living extraordinarily well.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            alignItems: 'center',
            animation: 'fadeUp 1s ease 0.8s both',
          }}
        >
          <a
            href="#calendar-section"
            style={{
              background: 'var(--brand)',
              color: '#0A0A0A',
              fontSize: '13px',
              fontWeight: '600',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '16px 36px',
              borderRadius: 'var(--radius-pill)',
              transition: 'background 0.2s, transform 0.15s, box-shadow 0.2s',
              textDecoration: 'none',
            }}
          >
            Book a Viewing
          </a>
          <a
            href="#render-section"
            style={{
              border: '1px solid var(--brand)',
              color: 'var(--brand)',
              fontSize: '13px',
              fontWeight: '600',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '15px 36px',
              borderRadius: 'var(--radius-pill)',
              transition: 'background 0.2s, color 0.2s, transform 0.15s',
              textDecoration: 'none',
            }}
          >
            Explore Residences
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '48px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          animation: 'fadeUp 1s ease 1.2s both',
        }}
      >
        <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--text-tertiary)',
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: '1px',
            height: '48px',
            background: 'var(--text-tertiary)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <span
            style={{
              position: 'absolute',
              top: '-100%',
              left: '0',
              width: '100%',
              height: '100%',
              background: 'var(--brand)',
              animation: 'scrollDrop 1.8s ease-in-out infinite',
              display: 'block',
            }}
          />
        </div>
      </div>
    </section>
  )
}
