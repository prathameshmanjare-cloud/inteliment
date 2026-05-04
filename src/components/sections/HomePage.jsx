import { useState } from "react";
import TrustBar from "@/components/sections/TrustBar";

const rowA = [
  "HSB", "Volkswagen", "Siemens", "Nvidia", "Deloitte", "KPMG", "Singtel",
  "Maruti Suzuki", "Deutsche Bank", "DBS Singapore", "Westpac", "L&T",
  "Reliance", "TATA AIA", "HSBC"
];

const rowB = [
  "J&J", "Alfa Laval", "Seagate", "Hitachi", "UBS", "ADP", "Bajaj",
  "NSE India", "EY", "Tata Communications", "AMP", "Optus", "BMC",
  "Holcim", "J&J", "NSE India"
];

function MarqueeRow({ items, reverse = false }) {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden w-full">
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />

      <div
        className="flex w-max"
        style={{
          gap: "8px",
          animation: `${reverse ? "scrollRight" : "scrollLeft"} 35s linear infinite`,
        }}
      >
        {doubled.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="shrink-0 inline-flex items-center whitespace-nowrap cursor-default transition-all duration-200"
            style={{
              padding: "clamp(4px, 1vw, 6px) clamp(10px, 2vw, 16px)",
              borderRadius: "999px",
              fontSize: "clamp(11px, 2vw, 14px)",
              fontWeight: 500,
              background: "#EFF6FA",
              border: "1.5px solid #94C6E4",
              color: "#374151",
              fontFamily: "'Public Sans', sans-serif",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "#5aafd4";
              e.currentTarget.style.color = "#1a6a96";
              e.currentTarget.style.background = "#daeef8";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "#94C6E4";
              e.currentTarget.style.color = "#374151";
              e.currentTarget.style.background = "#EFF6FA";
            }}
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ClientLogoWall() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700;800&display=swap');

        @keyframes scrollLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-rows:hover > * > div {
          animation-play-state: paused !important;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-rows > * > div {
            animation: none !important;
          }
        }

        /* Responsive border-radius for top corners */
        .client-section {
          border-radius: 32px 32px 0 0;
        }
        @media (min-width: 640px) {
          .client-section {
            border-radius: 48px 48px 0 0;
          }
        }
        @media (min-width: 1024px) {
          .client-section {
            border-radius: 60px 60px 0 0;
          }
        }

        /* TrustBar wrapper responsive margin */
        .trustbar-wrapper {
          margin-top: 32px;
          margin-left: clamp(12px, 4vw, 80px);
          margin-right: clamp(12px, 4vw, 80px);
        }
        @media (min-width: 640px) {
          .trustbar-wrapper {
            margin-top: 40px;
          }
        }
        @media (min-width: 1024px) {
          .trustbar-wrapper {
            margin-top: 48px;
          }
        }
      `}</style>

      <section
        className="client-section bg-white overflow-hidden w-full"
        style={{
          fontFamily: "'Public Sans', sans-serif",
          paddingTop: "clamp(32px, 6vw, 56px)",
          paddingBottom: "clamp(32px, 6vw, 56px)",
        }}
      >
        {/* Header */}
        <div
          style={{
            maxWidth: "672px",
            margin: "0 auto",
            padding: "0 clamp(16px, 4vw, 24px)",
            textAlign: "center",
            marginBottom: "clamp(24px, 4vw, 40px)",
          }}
        >
          <span
            style={{
              display: "inline-block",
              fontSize: "clamp(11px, 1.5vw, 14px)",
              fontWeight: 500,
              borderRadius: "999px",
              padding: "6px clamp(12px, 2vw, 16px)",
              marginBottom: "clamp(12px, 2vw, 20px)",
              background: "#E5E5E5",
              border: "1.5px solid #d1d5db",
              color: "#4b5563",
              fontFamily: "'Public Sans', sans-serif",
              letterSpacing: "0.01em",
            }}
          >
            Trust &amp; Scale
          </span>

          <h2
            style={{
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              fontSize: "clamp(22px, 4vw, 42px)",
              color: "#495057",
              fontFamily: "'Public Sans', sans-serif",
              margin: 0,
              whiteSpace:"nowrap",
            }}
          >
            Trusted by 100+ Enterprises Globally
          </h2>
        </div>

        {/* Marquee rows */}
        <div
          className="marquee-rows"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(6px, 1vw, 10px)",
          }}
        >
          <MarqueeRow items={rowA} />
          <MarqueeRow items={rowB} reverse />
        </div>

        {/* Technology Partners */}
        <div className="trustbar-wrapper">
          <TrustBar />
        </div>
      </section>
    </>
  );
}

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

