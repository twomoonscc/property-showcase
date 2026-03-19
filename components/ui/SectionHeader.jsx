/**
 * @param {{ eyebrow: string, title: React.ReactNode, subtitle?: string, className?: string }} props
 */
export default function SectionHeader({ eyebrow, title, subtitle, className = '' }) {
  return (
    <div style={{ marginBottom: '64px' }} className={className}>
      <p
        className="reveal eyebrow"
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '12px',
          fontWeight: '600',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--brand)',
        }}
      >
        {eyebrow}
      </p>
      <h2
        className="reveal reveal-delay-1"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(32px, 4vw, 56px)',
          fontWeight: '400',
          lineHeight: '1.1',
          color: 'var(--text-primary)',
          marginTop: '16px',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="reveal reveal-delay-2"
          style={{
            color: 'var(--text-secondary)',
            marginTop: '16px',
            fontSize: '16px',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
