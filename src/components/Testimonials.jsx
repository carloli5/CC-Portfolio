import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    quote:
      '"Cara made me feel like the most beautiful version of myself on my wedding day. The makeup lasted 14 hours through tears, dancing, and humidity — absolutely flawless."',
    name: 'Sophie R.',
    role: 'Bride, June 2024',
    avatar: 'https://i.pravatar.cc/80?img=47',
  },
  {
    quote:
      '"Working with Cara on our spring campaign was incredible. She understood the creative brief instantly and delivered beyond expectations. We\'ve already booked her for the next shoot."',
    name: 'Marcus T.',
    role: 'Creative Director, Lumière Agency',
    avatar: 'https://i.pravatar.cc/80?img=32',
  },
  {
    quote:
      '"I\'ve attended Cara\'s masterclass twice and each time I learn something new. Her teaching style is warm, patient, and genuinely inspiring. Highly recommend!"',
    name: 'Priya K.',
    role: 'Masterclass Attendee',
    avatar: 'https://i.pravatar.cc/80?img=5',
  },
  {
    quote:
      '"Cara did my makeup for my 30th birthday gala and I was absolutely stunned. She listened to every detail of what I wanted and elevated it tenfold."',
    name: 'Jasmine L.',
    role: 'Special Occasion Client',
    avatar: 'https://i.pravatar.cc/80?img=23',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const total = testimonials.length
  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const next = () => setCurrent((c) => (c + 1) % total)

  // Show 3 cards on large screens, 1 on mobile
  const visible = [
    testimonials[current % total],
    testimonials[(current + 1) % total],
    testimonials[(current + 2) % total],
  ]

  return (
    <section id="testimonials" className="py-24 bg-muted/40">
      <div className="container max-w-7xl px-6">
        <div className="text-center mb-14">
          <Badge variant="outline" className="text-primary border-primary mb-4 uppercase tracking-widest text-xs">
            Client Love
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold">What They Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {visible.map((t, i) => (
            <Card
              key={t.name + i}
              className={cn(
                'transition-all duration-300',
                i === 1 ? 'md:scale-105 shadow-xl border-primary/30' : 'shadow-sm'
              )}
            >
              <CardContent className="pt-6">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <blockquote className="font-display italic text-lg leading-relaxed text-foreground mb-6">
                  {t.quote}
                </blockquote>
                <footer className="flex items-center gap-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-12 w-12 rounded-full object-cover border-2 border-primary/30"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-bold text-sm">{t.name}</p>
                    <p className="text-muted-foreground text-xs">{t.role}</p>
                  </div>
                </footer>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dots + arrows */}
        <div className="flex items-center justify-center gap-4">
          <Button variant="outline" size="icon" onClick={prev} aria-label="Previous testimonial">
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === current}
                aria-label={`Testimonial ${i + 1}`}
                onClick={() => setCurrent(i)}
                className={cn(
                  'h-2.5 w-2.5 rounded-full transition-all duration-200',
                  i === current ? 'bg-primary scale-125' : 'bg-border hover:bg-primary/50'
                )}
              />
            ))}
          </div>

          <Button variant="outline" size="icon" onClick={next} aria-label="Next testimonial">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
