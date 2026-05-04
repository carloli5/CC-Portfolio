import { CheckCircle, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const highlights = [
  'Licensed Cosmetologist & Certified MUA',
  'Featured in Vogue, Allure & Cosmopolitan',
  'Brand ambassador for leading beauty labels',
  'Available for on-location & studio bookings',
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&q=80&auto=format"
              alt="Cara Collins, professional makeup artist"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 md:-right-6 bg-gold-500 text-white px-4 py-3 rounded-2xl shadow-lg flex items-center gap-2 text-sm font-bold">
            <Award className="h-5 w-5 flex-shrink-0" />
            Award-Winning Artist
          </div>
        </div>

        {/* Content */}
        <div>
          <Badge variant="outline" className="text-primary border-primary mb-4 uppercase tracking-widest text-xs">
            About Me
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
            Passion, precision &amp; a brush in hand
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Hi, I'm Cara! I'm a Los Angeles-based makeup artist and beauty content creator
            with over eight years of experience transforming faces and building confidence
            one look at a time. From dreamy bridal mornings to high-fashion editorial sets,
            I pour creativity and care into every application.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Beyond the makeup chair, I share tutorials, honest product reviews, and
            behind-the-scenes content across my social channels — helping my community
            feel empowered and beautiful in their own skin.
          </p>

          <ul className="space-y-3 mb-8">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-3 text-base">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                {h}
              </li>
            ))}
          </ul>

          <Button asChild size="lg">
            <a href="#contact">Work With Me</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
