import { useState } from 'react'
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogClose,
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'

const filters = ['All', 'Bridal', 'Editorial', 'Glam', 'SFX']

const items = [
  {
    category: 'Bridal',
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80&auto=format',
    alt: 'Classic bridal makeup look',
  },
  {
    category: 'Editorial',
    src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80&auto=format',
    alt: 'High-fashion editorial makeup',
  },
  {
    category: 'Glam',
    src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80&auto=format',
    alt: 'Full glam evening makeup',
  },
  {
    category: 'Bridal',
    src: 'https://images.unsplash.com/photo-1537832816519-689ad163238b?w=600&q=80&auto=format',
    alt: 'Romantic bridal makeup',
  },
  {
    category: 'SFX',
    src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=80&auto=format',
    alt: 'Creative special-effects makeup',
  },
  {
    category: 'Editorial',
    src: 'https://images.unsplash.com/photo-1512360698983-8b5fcbad0a8b?w=600&q=80&auto=format',
    alt: 'Bold editorial eye makeup',
  },
  {
    category: 'Glam',
    src: 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=600&q=80&auto=format',
    alt: 'Sultry smokey-eye glam',
  },
  {
    category: 'SFX',
    src: 'https://images.unsplash.com/photo-1620654154548-4e2d739e2b14?w=600&q=80&auto=format',
    alt: 'Avant-garde theatrical makeup',
  },
  {
    category: 'Bridal',
    src: 'https://images.unsplash.com/photo-1525268771113-32d9e9021a97?w=600&q=80&auto=format',
    alt: 'Soft natural bridal makeup',
  },
]

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filtered =
    active === 'All' ? items : items.filter((i) => i.category === active)

  const openLightbox = (idx) => setLightboxIndex(idx)
  const closeLightbox = () => setLightboxIndex(null)
  const prev = () => setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length)
  const next = () => setLightboxIndex((i) => (i + 1) % filtered.length)

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <Badge variant="outline" className="text-primary border-primary mb-4 uppercase tracking-widest text-xs">
            My Work
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Portfolio</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A curated selection of looks across all genres — filter by category below.
          </p>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10" role="group" aria-label="Portfolio filter">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={cn(
                'px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide border-2 transition-all duration-200',
                active === f
                  ? 'bg-primary border-primary text-white'
                  : 'bg-transparent border-border text-muted-foreground hover:border-primary hover:text-primary'
              )}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filtered.map((item, idx) => (
            <figure
              key={item.src}
              className="relative rounded-xl overflow-hidden aspect-[3/4] cursor-pointer group"
              onClick={() => openLightbox(idx)}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(idx)}
              tabIndex={0}
              role="button"
              aria-label={`${item.alt} — open full size`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-5">
                <span className="text-gold-300 text-xs font-bold uppercase tracking-widest">
                  {item.category}
                </span>
                <ZoomIn className="text-white h-6 w-6" />
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={lightboxIndex !== null} onOpenChange={(open) => !open && closeLightbox()}>
        <DialogContent className="max-w-4xl w-full bg-black/95 border-none p-4 flex flex-col items-center">
          <DialogClose className="absolute right-4 top-4 text-white/70 hover:text-white">
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </DialogClose>

          {lightboxIndex !== null && (
            <>
              <img
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                className="max-h-[80vh] max-w-full rounded-xl object-contain shadow-2xl"
              />
              <p className="text-white/60 text-sm mt-3">{filtered[lightboxIndex].alt}</p>

              {/* Prev / Next */}
              <Button
                variant="ghost"
                size="icon"
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white border-white/30 hover:bg-white/20"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white border-white/30 hover:bg-white/20"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
