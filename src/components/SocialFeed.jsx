import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const posts = [
  { src: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=70&auto=format', alt: 'Makeup tutorial still' },
  { src: 'https://images.unsplash.com/photo-1583241800698-e8ab01830a22?w=400&q=70&auto=format', alt: 'Beauty product flat lay' },
  { src: 'https://images.unsplash.com/photo-1617897903246-719242758050?w=400&q=70&auto=format', alt: 'Eye makeup close up' },
  { src: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&q=70&auto=format', alt: 'Lipstick application' },
  { src: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&q=70&auto=format', alt: 'Skincare routine' },
  { src: 'https://images.unsplash.com/photo-1567721913486-6585f069b332?w=400&q=70&auto=format', alt: 'Foundation shades' },
]

export default function SocialFeed() {
  return (
    <section id="social" className="py-24 bg-background">
      <div className="container max-w-7xl px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="text-primary border-primary mb-4 uppercase tracking-widest text-xs">
            Follow Along
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">@caracollinsbeauty</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Tutorials, tips, and behind-the-scenes — join 120k beauty lovers on Instagram.
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-10">
          {posts.map((post) => (
            <a
              key={post.src}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={post.alt}
              className="relative aspect-square rounded-xl overflow-hidden group"
            >
              <img
                src={post.src}
                alt={post.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <InstagramIcon />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <InstagramIcon /> Follow on Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
