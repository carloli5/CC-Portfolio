import { useEffect, useRef, useState } from 'react'

const stats = [
  { target: 8,   unit: '+', label: 'Years Experience' },
  { target: 500, unit: '+', label: 'Clients Served' },
  { target: 120, unit: 'k', label: 'Social Followers' },
  { target: 50,  unit: '+', label: 'Brand Collaborations' },
]

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])
  return count
}

function StatItem({ target, unit, label, start }) {
  const count = useCountUp(target, 1800, start)
  return (
    <div className="text-center">
      <p className="font-display text-5xl md:text-6xl font-bold text-white leading-none">
        {count}
        <span className="text-gold-300 text-4xl font-normal">{unit}</span>
      </p>
      <p className="mt-2 text-xs font-bold uppercase tracking-widest text-white/70">{label}</p>
    </div>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      aria-label="Career highlights"
      className="bg-primary/80 py-14"
      style={{ background: 'hsl(340 38% 42%)' }}
    >
      <div className="container max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((s) => (
          <StatItem key={s.label} {...s} start={visible} />
        ))}
      </div>
    </section>
  )
}
