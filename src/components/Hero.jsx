import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-svh items-center justify-center bg-cover bg-[center_top] text-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503756234508-e32369269dcd?w=1600&q=85&auto=format')",
      }}
      aria-label="Introduction"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/65" />

      {/* Content */}
      <div className="relative z-10 container max-w-4xl px-6 py-24">
        <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-gold-300 mb-5">
          Makeup Artist &amp; Content Creator
        </span>

        <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.1] text-white mb-6 drop-shadow-lg">
          Beauty is an&nbsp;art.<br />
          Let&nbsp;me create&nbsp;yours.
        </h1>

        <p className="text-lg text-white/80 max-w-md mx-auto mb-10">
          Based in Los Angeles &middot; Available worldwide for bridal,
          editorial &amp; special occasions
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg">
            <a href="#portfolio">View My Work</a>
          </Button>
          <Button asChild size="lg" variant="ghost">
            <a href="#contact">Book a Consultation</a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors animate-bounce-slow"
      >
        <ChevronDown className="h-7 w-7" />
      </a>
    </section>
  )
}
