import { Gem, Camera, Star, GraduationCap, Share2, Wand2, ArrowRight } from 'lucide-react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const services = [
  {
    icon: Gem,
    title: 'Bridal Makeup',
    description:
      'Your wedding day look should be timeless. I offer full trials, day-of application, and bridal party packages tailored to your vision and venue.',
    items: ['Bridal trial included', 'Bridal party packages', 'Long-wear, photo-ready finish'],
    featured: false,
  },
  {
    icon: Camera,
    title: 'Editorial & Photoshoots',
    description:
      'From commercial campaigns to high-fashion editorial spreads, I collaborate closely with photographers and creative directors to deliver striking visuals.',
    items: ['Print & digital campaigns', 'Look-book & e-commerce', 'Film & TV ready'],
    featured: true,
    badge: 'Most Popular',
  },
  {
    icon: Star,
    title: 'Special Occasions',
    description:
      "Prom, galas, birthday celebrations, red-carpet events — whatever the occasion, I'll create a look that turns heads and lasts all night.",
    items: ['Prom & formal events', 'Milestone birthdays', 'Corporate headshots'],
    featured: false,
  },
  {
    icon: GraduationCap,
    title: 'Masterclasses & Tutorials',
    description:
      'Learn professional techniques in an intimate group setting or one-on-one. Perfect for aspiring artists or anyone wanting to level up their routine.',
    items: ['Private 1-on-1 lessons', 'Group workshops', 'Online virtual sessions'],
    featured: false,
  },
  {
    icon: Share2,
    title: 'Brand Collaborations',
    description:
      'Partner with me for sponsored content, product launches, unboxing reviews, and ambassador programmes across Instagram, TikTok, and YouTube.',
    items: ['Sponsored posts & reels', 'Product seeding', 'Long-term partnerships'],
    featured: false,
  },
  {
    icon: Wand2,
    title: 'SFX & Creative Looks',
    description:
      'Pushing boundaries with avant-garde, Halloween, theatrical, and special-effects makeup that makes a statement and photographs beautifully.',
    items: ['Halloween & cosplay', 'Theatrical productions', 'Avant-garde editorial'],
    featured: false,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-muted/40">
      <div className="container max-w-7xl px-6">
        <div className="text-center mb-14">
          <Badge variant="outline" className="text-primary border-primary mb-4 uppercase tracking-widest text-xs">
            What I Offer
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Services</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Every service is personalised to make you feel like the best version of yourself.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => {
            const Icon = svc.icon
            return (
              <Card
                key={svc.title}
                className={
                  svc.featured
                    ? 'relative bg-primary text-primary-foreground border-transparent shadow-xl overflow-hidden'
                    : 'relative hover:shadow-lg hover:-translate-y-1 transition-all duration-200 overflow-hidden group'
                }
              >
                {/* Top gradient bar for non-featured on hover */}
                {!svc.featured && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                )}

                {svc.badge && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="gold" className="text-xs font-bold">{svc.badge}</Badge>
                  </div>
                )}

                <CardHeader>
                  <Icon
                    className={`h-8 w-8 mb-3 ${svc.featured ? 'text-gold-300' : 'text-primary'}`}
                  />
                  <CardTitle className={svc.featured ? 'text-white' : ''}>{svc.title}</CardTitle>
                  <CardDescription className={svc.featured ? 'text-white/80' : ''}>
                    {svc.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-1.5">
                    {svc.items.map((item) => (
                      <li
                        key={item}
                        className={`text-sm flex items-center gap-2 before:content-['✦'] before:text-gold-500 before:text-[0.55em] ${
                          svc.featured ? 'text-white/80' : 'text-muted-foreground'
                        }`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <a
                    href="#contact"
                    className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide transition-all hover:gap-3 ${
                      svc.featured ? 'text-gold-300' : 'text-primary'
                    }`}
                  >
                    Enquire <ArrowRight className="h-4 w-4" />
                  </a>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
