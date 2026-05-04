import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import Navbar       from '@/components/Navbar'
import Hero         from '@/components/Hero'
import Stats        from '@/components/Stats'
import About        from '@/components/About'
import Services     from '@/components/Services'
import Portfolio    from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'
import SocialFeed   from '@/components/SocialFeed'
import Contact      from '@/components/Contact'
import Footer       from '@/components/Footer'
import { cn }       from '@/lib/utils'

export default function App() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const handler = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <SocialFeed />
        <Contact />
      </main>
      <Footer />

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className={cn(
          'fixed bottom-6 right-6 z-40 h-11 w-11 rounded-full bg-primary text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-primary/90 hover:-translate-y-1',
          showTop ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </>
  )
}
