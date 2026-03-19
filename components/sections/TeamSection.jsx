import { agents } from '@/lib/data/agents'
import RevealWrapper from '@/components/ui/RevealWrapper'

export default function TeamSection() {
  return (
    <section
      id="team"
      className="py-24 bg-bg-elevated"
    >
      <div className="container">
        <div className="mb-16">
          <RevealWrapper>
            <p className="eyebrow">Our Team</p>
          </RevealWrapper>
          <RevealWrapper delay={1}>
            <h2
              className="font-display font-normal leading-[1.1] text-text-primary mt-4"
              style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
            >
              Your Dedicated<br />Sales Team
            </h2>
          </RevealWrapper>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-16">
          {agents.map((agent, idx) => (
            <RevealWrapper key={agent.name} delay={idx}>
              <div className="bg-bg-surface rounded-card border border-border-subtle p-8 text-center transition-[border-color,transform] duration-200">
                {/* Avatar */}
                <div className="w-20 h-20 rounded-full mx-auto mb-5 border-2 border-border-default flex items-center justify-center font-display text-[28px] font-light text-text-secondary bg-bg-elevated">
                  {agent.initials}
                </div>

                <div className="font-display text-[22px] font-normal text-text-primary mb-1">
                  {agent.name}
                </div>

                <div className="text-[12px] font-semibold tracking-[0.08em] uppercase text-brand mb-4">
                  {agent.role}
                </div>

                <p className="text-[14px] text-text-secondary leading-[1.6] mb-6">
                  {agent.bio}
                </p>

                <div className="flex gap-2 justify-center">
                  {[
                    { href: agent.email,    title: 'Email',     icon: '✉' },
                    { href: agent.phone,    title: 'Phone',     icon: '☏' },
                    { href: agent.whatsapp, title: 'WhatsApp',  icon: '💬' },
                  ].map(btn => (
                    <a
                      key={btn.title}
                      href={btn.href}
                      title={btn.title}
                      className="w-9 h-9 rounded-full border border-border-default flex items-center justify-center text-text-secondary text-[16px] transition-[border-color,color] duration-200"
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
