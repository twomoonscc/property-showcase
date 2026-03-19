import { agents } from '@/lib/data/agents'
import RevealWrapper from '@/components/ui/RevealWrapper'

export default function TeamSection() {
  return (
    <section
      id="team"
      style={{ padding: 'var(--section-pad) 0', background: 'var(--bg-elevated)' }}
    >
      <div className="container">
        <div style={{ marginBottom: '64px' }}>
          <RevealWrapper>
            <p className="eyebrow">Our Team</p>
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
              Your Dedicated<br />Sales Team
            </h2>
          </RevealWrapper>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}
        >
          {agents.map((agent, idx) => (
            <RevealWrapper key={agent.name} delay={idx}>
              <div
                style={{
                  background: 'var(--bg-surface)',
                  borderRadius: 'var(--radius-card)',
                  border: '1px solid var(--border-subtle)',
                  padding: '32px',
                  textAlign: 'center',
                  transition: 'border-color 0.2s, transform 0.2s',
                }}
              >
                {/* Avatar */}
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    margin: '0 auto 20px',
                    border: '2px solid var(--border-default)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-display)',
                    fontSize: '28px',
                    fontWeight: '300',
                    color: 'var(--text-secondary)',
                    background: 'var(--bg-elevated)',
                  }}
                >
                  {agent.initials}
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '22px',
                    fontWeight: '400',
                    color: 'var(--text-primary)',
                    marginBottom: '4px',
                  }}
                >
                  {agent.name}
                </div>

                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--brand)',
                    marginBottom: '16px',
                  }}
                >
                  {agent.role}
                </div>

                <p
                  style={{
                    fontSize: '14px',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    marginBottom: '24px',
                  }}
                >
                  {agent.bio}
                </p>

                <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                  {[
                    { href: agent.email,    title: 'Email',     icon: '✉' },
                    { href: agent.phone,    title: 'Phone',     icon: '☏' },
                    { href: agent.whatsapp, title: 'WhatsApp',  icon: '💬' },
                  ].map(btn => (
                    <a
                      key={btn.title}
                      href={btn.href}
                      title={btn.title}
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        border: '1px solid var(--border-default)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text-secondary)',
                        fontSize: '16px',
                        transition: 'border-color 0.2s, color 0.2s',
                        textDecoration: 'none',
                      }}
                    >
                      {btn.icon}
                    </a>
                  ))}
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
