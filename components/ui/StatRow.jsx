/**
 * @param {{ stats: Array<{ number: string, label: string }> }} props
 */
export default function StatRow({ stats }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${stats.length}, 1fr)`,
        gap: '2px',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-card)',
        overflow: 'hidden',
      }}
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          style={{
            background: 'var(--bg-elevated)',
            padding: '36px 32px',
            textAlign: 'center',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '40px',
              fontWeight: '400',
              color: 'var(--brand)',
              display: 'block',
              marginBottom: '8px',
            }}
          >
            {stat.number}
          </span>
          <span
            style={{
              fontSize: '12px',
              fontWeight: '600',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--text-secondary)',
            }}
          >
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  )
}
