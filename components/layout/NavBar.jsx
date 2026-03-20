'use client'

import { useState } from 'react'
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
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <>
      <nav
        className={[
          'fixed top-[3px] left-0 right-0 h-[72px] z-[1000]',
          'flex items-center justify-between px-6 md:px-16',
          'transition-[background,backdrop-filter,border-color] duration-300',
          scrolled || menuOpen
            ? 'border-b border-border-subtle bg-[rgba(17,17,17,0.80)] backdrop-blur-[24px] saturate-[1.2]'
            : 'border-b border-transparent bg-transparent',
        ].join(' ')}
      >
        <div className="font-display text-[22px] font-medium tracking-[0.15em] text-text-primary">
          AURA
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-9 items-center">
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

        {/* Desktop CTA */}
        <a
          href="#calendar-section"
          className="hidden md:inline-block bg-brand text-bg-base text-[12px] font-semibold tracking-[0.08em] uppercase px-7 py-3 rounded-pill transition-[background,transform] duration-200"
        >
          Book a Viewing
        </a>

        {/* Mobile hamburger */}
        <button
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(prev => !prev)}
          className="md:hidden flex flex-col gap-[5px] justify-center items-center w-10 h-10"
        >
          <span
            className="block w-6 h-px bg-text-primary transition-[transform,opacity] duration-200"
            style={menuOpen ? { transform: 'translateY(6px) rotate(45deg)' } : {}}
          />
          <span
            className="block w-6 h-px bg-text-primary transition-[transform,opacity] duration-200"
            style={menuOpen ? { opacity: 0 } : {}}
          />
          <span
            className="block w-6 h-px bg-text-primary transition-[transform,opacity] duration-200"
            style={menuOpen ? { transform: 'translateY(-6px) rotate(-45deg)' } : {}}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-[999] bg-[rgba(10,10,10,0.97)] backdrop-blur-[24px] flex flex-col pt-[88px] px-6 pb-12">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-[16px] font-semibold tracking-[0.08em] uppercase text-text-secondary py-4 border-b border-border-subtle transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#calendar-section"
            onClick={closeMenu}
            className="mt-8 bg-brand text-bg-base text-[13px] font-semibold tracking-[0.08em] uppercase px-7 py-4 rounded-pill transition-[background,transform] duration-200 text-center"
          >
            Book a Viewing
          </a>
        </div>
      )}
    </>
  )
}
