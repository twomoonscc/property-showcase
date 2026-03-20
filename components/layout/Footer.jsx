const footerLinks = [
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Terms' },
  { href: '#', label: 'Cookie Settings' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-bg-base border-t border-border-subtle py-12">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6">
          <div className="font-display text-[20px] font-medium tracking-[0.15em] text-text-primary">
            AURA
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[12px] font-medium tracking-[0.06em] text-text-secondary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="text-[12px] text-text-tertiary">
            © 2026 AURA Residences. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
