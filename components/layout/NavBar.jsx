'use client'

import { useNavScrolled } from '@/lib/hooks/useNavScrolled'

const navLinks = [
  { href: '#narrative',        label: 'Overview'   },
  { href: '#gallery',          label: 'Gallery'    },
  { href: '#render-section',   label: 'Explore'    },
  { href: '#floorplan',        label: 'Floorplan'  },
  { href: '#map-section',      label: 'Location'   },
  { href: '#contact',          label: 'Contact'    },
]

export default function NavBar() {
  const scrolled = useNavScrolled(60)

  return (
    <nav
      style={{
        position: 'fixed',
        top: '3px',
        left: '0',
        right: '0',
        height: '72px',
        zIndex: '1000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 var(--page-pad)',
        transition: 'background 0.3s, backdrop-filter 0.3s, border-color 0.3s',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        background: scrolled ? 'var(--bg-glass)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px) saturate(1.2)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(1.2)' : 'none',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '22px',
          fontWeight: '500',
          letterSpacing: '0.15em',
          color: 'var(--text-primary)',
        }}
      >
        AURA
      </div>

      <div
        style={{
          display: 'flex',
          gap: '36px',
          alignItems: 'center',
        }}
        className="nav-links-container"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              fontSize: '12px',
              fontWeight: '600',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--text-secondary)',
              position: 'relative',
              paddingBottom: '4px',
              transition: 'color 0.2s',
              textDecoration: 'none',
            }}
          >
            {link.label}
          </a>
        ))}
      </div>

      <a
        href="#calendar-section"
        style={{
          background: 'var(--brand)',
          color: '#0A0A0A',
          fontSize: '12px',
          fontWeight: '600',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          padding: '12px 28px',
          borderRadius: 'var(--radius-pill)',
          transition: 'background 0.2s, transform 0.15s',
          textDecoration: 'none',
          display: 'inline-block',
        }}
      >
        Book a Viewing
      </a>
    </nav>
  )
}
