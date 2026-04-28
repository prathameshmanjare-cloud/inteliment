import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import s5bg from '@/assets/home/s5-bg.png'

const partners = [
  { name: 'Rubiscape', blue: true },
  { name: 'Snowflake', blue: false },
  { name: 'Microsoft', blue: true },
  { name: 'Databricks', blue: false },
  { name: 'AWS', blue: true },
  { name: 'Google', blue: false },
  { name: 'Informatica', blue: true },
  { name: 'SAP', blue: false },
]

const stats = [
  { value: 22, suffix: '+', label: 'Years of Data Mastery' },
  { value: 500, suffix: '+', label: 'Projects Delivered' },
  { value: 100, suffix: '+', label: 'Enterprise Clients' },
  { value: 150, suffix: '+', label: 'Decision Intelligence Experts' },
  { value: 96, suffix: '%', label: 'Client Satisfaction' },
]

function CountUp({ target, suffix, duration = 1800, delay = 0 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true
    const timeout = setTimeout(() => {
      const startTime = performance.now()
      const step = (now) => {
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.floor(eased * target))
        if (progress < 1) requestAnimationFrame(step)
        else setCount(target)
      }
      requestAnimationFrame(step)
    }, delay)
    return () => clearTimeout(timeout)
  }, [inView, target, duration, delay])

  return (
    <span ref={ref} style={{ display: 'inline-block', fontVariantNumeric: 'tabular-nums' }}>
      {count}{suffix}
    </span>
  )
}

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 1024)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const handler = (e) => setIsDesktop(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return isDesktop
}

export default function TrustBar() {
  const isDesktop = useIsDesktop()

  const desktopBg = {
    backgroundImage: `url(${s5bg})`,
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'transparent',
  }

  const mobileBg = {
    backgroundColor: '#EEF6FB',
  }

  return (
    <div style={{ padding: '0 35px' }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;600;700;800&display=swap');`}</style>

      <div
        style={{
          fontFamily: "'Public Sans', sans-serif",
          padding: isDesktop ? '56px 60px 64px' : '36px 20px 44px',
          position: 'relative',
          overflow: 'hidden',
          ...(isDesktop ? desktopBg : mobileBg),
          borderRadius: '20px',
          maxWidth: '100%',
          margin: '0 auto',
        }}
      >
        <p style={{
          textAlign: 'center',
          fontFamily: "'Public Sans', sans-serif",
          fontWeight: 700,
          fontSize: isDesktop ? '26px' : 'clamp(18px, 4vw, 22px)',
          color: '#495057',
          marginBottom: '28px',
          letterSpacing: '0.01em',
        }}>
          Technology Partnerships and Capability
        </p>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: isDesktop ? '10px 40px' : '8px 24px',
          marginBottom: isDesktop ? '56px' : '36px',
        }}>
          {partners.map((p, i) => (
            <motion.span
              key={p.name}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.35 }}
              style={{
                fontFamily: "'Public Sans', sans-serif",
                fontWeight: p.blue ? 600 : 800,
                fontSize: isDesktop ? '20px' : 'clamp(14px, 3.5vw, 17px)',
                color: p.blue ? '#5BA3D1' : '#1F1F1F',
                letterSpacing: '0.01em',
              }}
            >
              {p.name}
            </motion.span>
          ))}
        </div>

          <div style={{
            display: isDesktop ? 'flex' : 'grid',
            gridTemplateColumns: isDesktop ? undefined : '1fr',
            flexWrap: isDesktop ? 'wrap' : undefined,
            justifyContent: 'center',
            gap: isDesktop ? '28px 56px' : '16px',
            width: isDesktop ? undefined : '100%',
            maxWidth: isDesktop ? undefined : '260px',
            margin: isDesktop ? undefined : '0 auto',
          }}>
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '6px',
                minWidth: isDesktop ? '140px' : '120px',
              }}
            >
              <span style={{
                fontFamily: "'Public Sans', sans-serif",
                fontWeight: 800,
                fontSize: isDesktop ? '48px' : 'clamp(32px, 8vw, 40px)',
                color: '#5BA3D1',
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
              }}>
                <CountUp target={s.value} suffix={s.suffix} duration={1800} delay={400 + i * 120} />
              </span>
              <span style={{
                fontFamily: "'Public Sans', sans-serif",
                fontWeight: 400,
                fontSize: isDesktop ? '16px' : 'clamp(11px, 2.5vw, 13px)',
                color: '#495057',
                textAlign: 'center',
                letterSpacing: '0.01em',
              }}>
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}