import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Services',   href: '#services' },
  { label: 'Portfolio',  href: '#portfolio' },
  { label: 'Reviews',    href: '#testimonials' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNavClick = () => setOpen(false)

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 h-[72px] transition-all duration-300',
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container flex h-full max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a
          href="#hero"
          className={cn(
            'font-display text-xl italic font-semibold transition-colors duration-300',
            scrolled ? 'text-foreground' : 'text-white'
          )}
        >
          Cara Collins
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-bold uppercase tracking-wide transition-colors duration-200',
                scrolled
                  ? 'text-muted-foreground hover:text-primary'
                  : 'text-white/85 hover:text-white'
              )}
            >
              {link.label}
            </a>
          ))}
          <Button asChild size="sm">
            <a href="#contact">Book Now</a>
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open
            ? <X className={cn('h-6 w-6', scrolled ? 'text-foreground' : 'text-white')} />
            : <Menu className={cn('h-6 w-6', scrolled ? 'text-foreground' : 'text-white')} />
          }
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-border shadow-lg">
          <nav className="flex flex-col px-6 py-4 gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="py-3 text-sm font-bold uppercase tracking-wide text-muted-foreground hover:text-primary border-b border-border last:border-0 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button asChild size="sm" className="mt-3 w-full">
              <a href="#contact" onClick={handleNavClick}>Book Now</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
