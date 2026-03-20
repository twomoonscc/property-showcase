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

const inputClass = 'bg-bg-surface border border-border-default rounded-[8px] px-4 py-[14px] text-[15px] text-text-primary outline-none focus:border-brand focus:shadow-[0_0_0_3px_rgba(201,169,110,0.12)]'
const labelClass = 'text-[12px] font-semibold tracking-[0.06em] uppercase text-text-secondary'

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 bg-bg-base"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mt-16">
          {/* Left: info + channels */}
          <RevealWrapper>
            <p className="eyebrow">Get in Touch</p>
            <h2
              className="font-display font-normal leading-[1.2] my-4 mb-6"
              style={{ fontSize: 'clamp(28px, 3vw, 44px)' }}
            >
              We're here to answer every question
            </h2>
            <p className="text-[16px] text-text-secondary leading-[1.7] mb-10">
              Our dedicated sales team is available seven days a week. Whether you have a question about a specific residence, the construction timeline, or the surrounding neighbourhood, we're ready to help.
            </p>

            <div className="flex flex-col gap-4">
              {channels.map(ch => (
                <a
                  key={ch.key}
                  href={ch.href}
                  target={ch.key === 'whatsapp' ? '_blank' : undefined}
                  rel={ch.key === 'whatsapp' ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-[16px_20px] bg-bg-elevated rounded-card border border-border-subtle transition-[border-color] duration-200 cursor-pointer"
                >
                  <div
                    className="w-11 h-11 rounded-[10px] flex items-center justify-center text-[20px] shrink-0"
                    style={{ background: ch.iconBg }}
                  >
                    {ch.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-[14px] font-semibold text-text-primary mb-[2px]">
                      {ch.name}
                    </div>
                    <div className="text-[13px] text-text-secondary">
                      {ch.detail}
                    </div>
                  </div>
                  <span className="text-text-tertiary text-[18px]">→</span>
                </a>
              ))}
            </div>
          </RevealWrapper>

          {/* Right: contact form */}
          <RevealWrapper delay={2}>
            <form
              onSubmit={e => e.preventDefault()}
              className="flex flex-col gap-5"
            >
              <p className="eyebrow mb-4">Send a Message</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>First Name</label>
                  <input type="text" placeholder="Your name" className={inputClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>Last Name</label>
                  <input type="text" placeholder="Your surname" className={inputClass} />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className={labelClass}>Email</label>
                <input type="email" placeholder="your@email.com" className={inputClass} />
              </div>

              <div className="flex flex-col gap-2">
                <label className={labelClass}>Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us what you're looking for…"
                  className={`${inputClass} resize-y`}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand text-bg-base text-[13px] font-semibold tracking-[0.08em] uppercase px-8 py-4 rounded-pill cursor-pointer border-none transition-[background,transform] duration-200 font-body"
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
