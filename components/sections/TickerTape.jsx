import { tickerItems } from '@/lib/data/ticker'

export default function TickerTape() {
  // Duplicate for seamless loop
  const doubled = [...tickerItems, ...tickerItems]

  return (
    <div
      id="ticker"
      aria-hidden="true"
      style={{
        height: '56px',
        background: 'var(--bg-elevated)',
        overflow: 'hidden',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          whiteSpace: 'nowrap',
          animation: 'tickerScroll 35s linear infinite',
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '20px',
              padding: '0 24px',
              fontSize: '12px',
              fontWeight: '600',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--text-secondary)',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                background: 'var(--brand)',
                transform: 'rotate(45deg)',
                flexShrink: '0',
                display: 'inline-block',
              }}
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
