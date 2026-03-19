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
      className={[
        'fixed top-[3px] left-0 right-0 h-[72px] z-[1000]',
        'flex items-center justify-between px-16',
        'transition-[background,backdrop-filter,border-color] duration-300',
        scrolled
          ? 'border-b border-border-subtle bg-[rgba(17,17,17,0.80)] backdrop-blur-[24px] saturate-[1.2]'
          : 'border-b border-transparent bg-transparent',
      ].join(' ')}
    >
      <div className="font-display text-[22px] font-medium tracking-[0.15em] text-text-primary">
        AURA
      </div>

      <div className="flex gap-9 items-center nav-links-container">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-[12px] font-semibold tracking-[0.08em] uppercase text-text-secondary relative pb-1 transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
      </div>

      <a
        href="#calendar-section"
        className="bg-brand text-bg-base text-[12px] font-semibold tracking-[0.08em] uppercase px-7 py-3 rounded-pill transition-[background,transform] duration-200 inline-block"
      >
        Book a Viewing
      </a>
    </nav>
  )
}
