'use client'

import RevealWrapper from '@/components/ui/RevealWrapper'

const channels = [
  {
    key: 'whatsapp',
    icon: '💬',
    name: 'WhatsApp',
    detail: '+1 555 AURA 000',
    iconBg: 'rgba(37,211,102,0.12)',
    href: 'https://wa.me/15552872000',
  },
  {
    key: 'email',
    icon: '✉️',
    name: 'Email',
    detail: 'sales@auraresidences.com',
    iconBg: 'var(--brand-muted)',
    href: 'mailto:sales@auraresidences.com',
  },
  {
    key: 'phone',
    icon: '📞',
    name: 'Phone',
    detail: '+1 555 287 2000',
    iconBg: 'rgba(96,165,250,0.1)',
    href: 'tel:+15552872000',
  },
]

export default function ContactSection() {
  return (
    <section
      id="contact"
      style={{ padding: 'var(--section-pad) 0', background: 'var(--bg-base)' }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '96px',
            marginTop: '0',
          }}
        >
          {/* Left: info + channels */}
          <RevealWrapper>
            <p className="eyebrow">Get in Touch</p>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(28px, 3vw, 44px)',
                fontWeight: '400',
                lineHeight: '1.2',
                margin: '16px 0 24px',
              }}
            >
              We're here to answer every question
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '40px' }}>
              Our dedicated sales team is available seven days a week. Whether you have a question about a specific residence, the construction timeline, or the surrounding neighbourhood, we're ready to help.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {channels.map(ch => (
                <a
                  key={ch.key}
                  href={ch.href}
                  target={ch.key === 'whatsapp' ? '_blank' : undefined}
                  rel={ch.key === 'whatsapp' ? 'noopener noreferrer' : undefined}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '16px 20px',
                    background: 'var(--bg-elevated)',
                    borderRadius: 'var(--radius-card)',
                    border: '1px solid var(--border-subtle)',
                    transition: 'border-color 0.2s',
                    cursor: 'pointer',
                    textDecoration: 'none',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      background: ch.iconBg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '20px',
                      flexShrink: '0',
                    }}
                  >
                    {ch.icon}
                  </div>
                  <div style={{ flex: '1' }}>
                    <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '2px' }}>
                      {ch.name}
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                      {ch.detail}
                    </div>
                  </div>
                  <span style={{ color: 'var(--text-tertiary)', fontSize: '18px' }}>→</span>
                </a>
              ))}
            </div>
          </RevealWrapper>

          {/* Right: contact form */}
          <RevealWrapper delay={2}>
            <form
              onSubmit={e => e.preventDefault()}
              style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingTop: '0' }}
            >
              <p className="eyebrow" style={{ marginBottom: '16px' }}>Send a Message</p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius)', padding: '14px 16px', fontSize: '15px', color: 'var(--text-primary)', outline: 'none' }}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your surname"
                    style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius)', padding: '14px 16px', fontSize: '15px', color: 'var(--text-primary)', outline: 'none' }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius)', padding: '14px 16px', fontSize: '15px', color: 'var(--text-primary)', outline: 'none' }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us what you're looking for…"
                  style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius)', padding: '14px 16px', fontSize: '15px', color: 'var(--text-primary)', outline: 'none', resize: 'vertical' }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  background: 'var(--brand)',
                  color: '#0A0A0A',
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '16px 32px',
                  borderRadius: 'var(--radius-pill)',
                  cursor: 'pointer',
                  border: 'none',
                  transition: 'background 0.2s, transform 0.15s',
                  fontFamily: 'var(--font-body)',
                }}
              >
                Send Message
              </button>
            </form>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
