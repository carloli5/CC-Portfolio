import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

// Instagram SVG — brand icons removed from lucide-react v1
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

const socials = [
  { label: 'Instagram', href: 'https://instagram.com', icon: InstagramIcon },
  { label: 'YouTube',   href: 'https://youtube.com',   icon: YoutubeIcon },
]

// Simple Pinterest / TikTok SVGs since lucide doesn't include them
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.35 6.35 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.05a8.16 8.16 0 004.78 1.53V7.14a4.85 4.85 0 01-1.01-.45z" />
  </svg>
)

const PinterestIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
  </svg>
)

export default function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', service: '', eventDate: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.firstName.trim()) e.firstName = 'First name is required'
    if (!form.lastName.trim())  e.lastName  = 'Last name is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email is required'
    if (!form.message.trim())   e.message   = 'Message is required'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length > 0) { setErrors(e2); return }
    setErrors({})
    setSubmitted(true)
  }

  const handleChange = (field) => (ev) => {
    setForm((f) => ({ ...f, [field]: ev.target.value }))
    if (errors[field]) setErrors((err) => { const n = { ...err }; delete n[field]; return n })
  }

  return (
    <section id="contact" className="py-24 bg-muted/40">
      <div className="container max-w-7xl px-6 grid md:grid-cols-[1fr_1.4fr] gap-16 items-start">

        {/* Info */}
        <div>
          <Badge variant="outline" className="text-primary border-primary mb-4 uppercase tracking-widest text-xs">
            Get In Touch
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
            Let's create something&nbsp;beautiful
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Whether you're planning a wedding, a shoot, or just want to say hello —
            I'd love to hear from you. Fill in the form or reach me directly below.
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-4">
              <Mail className="h-5 w-5 text-primary flex-shrink-0" />
              <a href="mailto:hello@carabeauty.com" className="hover:text-primary transition-colors">
                hello@carabeauty.com
              </a>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="h-5 w-5 text-primary flex-shrink-0" />
              <a href="tel:+13105550199" className="hover:text-primary transition-colors">
                +1 (310) 555-0199
              </a>
            </li>
            <li className="flex items-center gap-4">
              <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
              <span>Los Angeles, CA — Available worldwide</span>
            </li>
          </ul>

          <div className="flex gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-muted-foreground hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-200"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-muted-foreground hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-200"
            >
              <TikTokIcon />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-muted-foreground hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-200"
            >
              <PinterestIcon />
            </a>
          </div>
        </div>

        {/* Form */}
        <Card className="shadow-xl">
          <CardContent className="pt-8 px-8 pb-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <CheckCircle className="h-14 w-14 text-green-500" />
                <h3 className="font-display text-2xl font-bold">Message sent!</h3>
                <p className="text-muted-foreground">
                  Thank you — I'll be in touch within 24 hours.
                </p>
                <Button variant="outline" onClick={() => { setSubmitted(false); setForm({ firstName: '', lastName: '', email: '', service: '', eventDate: '', message: '' }) }}>
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  {[['firstName', 'First Name', 'Jane'], ['lastName', 'Last Name', 'Smith']].map(([field, label, ph]) => (
                    <div key={field} className="space-y-1.5">
                      <Label htmlFor={field}>{label} <span className="text-primary">*</span></Label>
                      <Input
                        id={field}
                        value={form[field]}
                        onChange={handleChange(field)}
                        placeholder={ph}
                        autoComplete={field === 'firstName' ? 'given-name' : 'family-name'}
                        className={cn(errors[field] && 'border-destructive focus-visible:ring-destructive')}
                      />
                      {errors[field] && <p className="text-xs text-destructive">{errors[field]}</p>}
                    </div>
                  ))}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="email">Email Address <span className="text-primary">*</span></Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange('email')}
                    placeholder="jane@example.com"
                    autoComplete="email"
                    className={cn(errors.email && 'border-destructive focus-visible:ring-destructive')}
                  />
                  {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="service">Service of Interest</Label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={handleChange('service')}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Select a service…</option>
                    <option value="bridal">Bridal Makeup</option>
                    <option value="editorial">Editorial / Photoshoot</option>
                    <option value="occasion">Special Occasion</option>
                    <option value="masterclass">Masterclass / Tutorial</option>
                    <option value="brand">Brand Collaboration</option>
                    <option value="sfx">SFX / Creative</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="eventDate">Event Date (if applicable)</Label>
                  <Input
                    id="eventDate"
                    type="date"
                    value={form.eventDate}
                    onChange={handleChange('eventDate')}
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message">Message <span className="text-primary">*</span></Label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange('message')}
                    placeholder="Tell me about your vision…"
                    className={cn(errors.message && 'border-destructive focus-visible:ring-destructive')}
                  />
                  {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message <Send className="h-4 w-4" />
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
