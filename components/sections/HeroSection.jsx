export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to top, #0A0A0A 0%, rgba(10,10,10,0.65) 35%, rgba(10,10,10,0.2) 65%, rgba(10,10,10,0.45) 100%),
            linear-gradient(135deg, #1a1610 0%, #0d1015 40%, #0a0d12 100%)
          `,
        }}
      >
        {/* Radial glow overlays */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 60% 80% at 65% 40%, rgba(201,169,110,0.04) 0%, transparent 70%),
              radial-gradient(ellipse 30% 60% at 70% 60%, rgba(232,228,223,0.02) 0%, transparent 60%)
            `,
          }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.3) 70%, transparent)',
        }}
      />

      {/* Content */}
      <div className="relative z-[2] text-center px-6 max-w-[960px] mt-10">
        <p
          className="text-[12px] font-semibold tracking-[0.18em] uppercase text-brand mb-7"
          style={{ animation: 'fadeUp 1s ease 0.2s both' }}
        >
          A New Standard in Luxury Living
        </p>

        <h1
          className="font-display font-light leading-none tracking-[-0.02em] text-text-primary mb-7"
          style={{
            fontSize: 'clamp(48px, 8vw, 96px)',
            animation: 'fadeUp 1s ease 0.4s both',
          }}
        >
          AURA<br />
          <em className="italic text-platinum">Residences</em>
        </h1>

        <p
          className="text-[16px] sm:text-[18px] font-normal leading-[1.7] text-text-secondary max-w-[560px] mx-auto mb-12"
          style={{ animation: 'fadeUp 1s ease 0.6s both' }}
        >
          Forty-two singular residences poised above the city. Where architectural precision meets the art of living extraordinarily well.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          style={{ animation: 'fadeUp 1s ease 0.8s both' }}
        >
          <a
            href="#calendar-section"
            className="bg-brand text-bg-base text-[13px] font-semibold tracking-[0.08em] uppercase px-9 py-4 rounded-pill transition-[background,transform,box-shadow] duration-200"
          >
            Book a Viewing
          </a>
          <a
            href="#render-section"
            className="border border-brand text-brand text-[13px] font-semibold tracking-[0.08em] uppercase px-9 py-[15px] rounded-pill transition-[background,color,transform] duration-200"
          >
            Explore Residences
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ animation: 'fadeUp 1s ease 1.2s both' }}
      >
        <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-text-tertiary">
          Scroll
        </span>
        <div className="w-px h-12 bg-text-tertiary relative overflow-hidden">
          <span
            className="absolute top-[-100%] left-0 w-full h-full bg-brand block"
            style={{ animation: 'scrollDrop 1.8s ease-in-out infinite' }}
          />
        </div>
      </div>
    </section>
  )
}
