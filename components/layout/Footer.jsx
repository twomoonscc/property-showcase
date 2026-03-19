const footerLinks = [
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Terms' },
  { href: '#', label: 'Cookie Settings' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--bg-base)',
        borderTop: '1px solid var(--border-subtle)',
        padding: '48px 0',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '20px',
              fontWeight: '500',
              letterSpacing: '0.15em',
              color: 'var(--text-primary)',
            }}
          >
            AURA
          </div>
          <div style={{ display: 'flex', gap: '32px' }}>
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontSize: '12px',
                  fontWeight: '500',
                  letterSpacing: '0.06em',
                  color: 'var(--text-secondary)',
                  transition: 'color 0.2s',
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>
            © 2026 AURA Residences. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
