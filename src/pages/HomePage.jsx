import React, { useState, useEffect } from 'react'
import { Sparkles, Clock, TrendingDown, GitBranch, TrendingUp} from 'lucide-react'
import { Database, LayoutList, Lightbulb, Timer, XCircle, Layers, BookOpen, Cpu, Zap, ArrowRight, ArrowDown, ArrowLeft} from 'lucide-react'
import blueIcon from '@/assets/home/blue-icon.svg'
import iconOrch from '@/assets/home/icon-orch.svg'
import iconInt from '@/assets/home/icon-int.svg'
import iconAuto from '@/assets/home/icon-auto.svg'
import iconOpt from '@/assets/home/icon-opt.svg'
import iconDeploy from '@/assets/home/icon-deploy.svg'
import iconTrack from '@/assets/home/icon-track.svg'
import oldArrow from '@/assets/home/old-arrow.svg'
import newArrow from '@/assets/home/new-arrow.svg'
import btIcon from '@/assets/home/bt-icon.svg'
import { motion, NativeAnimationWrapper, useInView } from 'framer-motion'
import { useRef } from 'react'
import SEOHead from '@/components/ui/SEOHead'
import Button from '@/components/ui/Button'
import TrustBar from '@/components/sections/TrustBar'
import DIFramework from '@/components/interactive/DIFramework'
import IndustryGrid from '@/components/sections/IndustryGrid'
import CTABanner from '@/components/sections/CTABanner'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import ScrollReveal from '@/components/ui/ScrollReveal'
import ClientLogoWall from '@/components/sections/ClientLogoWall'
import SectionFour from '@/components/sections/SectionFour'
import { buildPageMeta, organizationJsonLd } from '@/utils/seo'
import leftCurve from "../assets/home/left-curve.svg";
import rightCurve from "../assets/home/right-curve.svg"

// ─── Constants ───────────────────────────────────────────────────────────────
const orbitNodes = [
  { label: 'Orchestrate', icon: iconOrch,   position: 0   },
  { label: 'Integrate',   icon: iconInt,    position: 60  },
  { label: 'Automate',    icon: iconAuto,   position: 120 },
  { label: 'Optimize',    icon: iconOpt,    position: 180 },
  { label: 'Deploy',      icon: iconDeploy, position: 240 },
  { label: 'Track',       icon: iconTrack,  position: 300 },
]

// ─── Particle Ring ────────────────────────────────────────────────────────────
function ParticleRing({ size, duration, direction, particleCount = 6 }) {
  const particles = Array.from({ length: particleCount })
  return (
    <motion.div
      className="absolute rounded-full"
      style={{ width: size, height: size, left: '50%', top: '50%', x: '-50%', y: '-50%' }}
      animate={{ rotate: direction === 'clockwise' ? 360 : -360 }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
    >
      {particles.map((_, i) => {
        const angle = (i * 360) / particleCount
        const radius = size / 2
        return (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-80"
            style={{
              width: Math.max(4, size * 0.012),
              height: Math.max(4, size * 0.012),
              left: '50%', top: 0,
              filter: 'blur(1px)',
              transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius - 4}px)`,
            }}
          />
        )
      })}
    </motion.div>
  )
}

// ─── Circular System ──────────────────────────────────────────────────────────
function CircularSystem() {
  const containerRef = useRef(null)
  const [containerSize, setContainerSize] = useState(500)

  useEffect(() => {
    if (!containerRef.current) return
    const ro = new ResizeObserver(entries => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect
        setContainerSize(Math.min(width, height))
      }
    })
    ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [])

  const S = containerSize
  const centerSize   = S * 0.152
  const midRingSize  = S * 0.44
  const nodeRadius   = S * 0.31
  const nodeBoxSize  = S * 0.112
  const nodeIconSize = S * 0.065
  const centerBtnSz  = S * 0.152
  const centerIconSz = S * 0.08
  const labelFontSz  = Math.max(9, S * 0.026)
  const labelGap     = S * 0.07

  const dashedRings = [
    { ratio: 0.62,  duration: 50,  direction: 'clockwise',        opacity: 0.50, particles: 0 },
    { ratio: 0.79,  duration: 62,  direction: 'counterclockwise', opacity: 0.38, particles: 0 },
    { ratio: 0.96,  duration: 74,  direction: 'clockwise',        opacity: 0.26, particles: 3 },
    { ratio: 1.13,  duration: 86,  direction: 'counterclockwise', opacity: 0.17, particles: 3 },
    { ratio: 1.30,  duration: 98,  direction: 'clockwise',        opacity: 0.10, particles: 3 },
    { ratio: 1.47,  duration: 110, direction: 'counterclockwise', opacity: 0.06, particles: 3 },
  ]

  const renderNode = (node, index) => {
    const angle  = (node.position - 90) * (Math.PI / 180)
    const x      = Math.cos(angle) * nodeRadius
    const y      = Math.sin(angle) * nodeRadius
    const isUpper = y < -nodeRadius * 0.13
    const halfBox = nodeBoxSize / 2

    return (
      <motion.div
        key={node.label}
        style={{ position: 'absolute', left: '50%', top: '50%' }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        {isUpper && (
          <div style={{
            position: 'absolute',
            whiteSpace: 'nowrap',
            left: '50%',
            transform: 'translateX(-50%)',
            marginLeft: x,
            top: y - halfBox - labelGap,
          }}>
            <span style={{
              fontSize: labelFontSz,
              color: '#6b7280',
              fontWeight: 500,
              fontFamily: 'monospace',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              {node.label}
            </span>
          </div>
        )}

        <motion.div
          style={{
            position: 'absolute',
            width: nodeBoxSize,
            height: nodeBoxSize,
            marginLeft: x - halfBox,
            marginTop: y - halfBox,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: `${Math.max(1.5, S * 0.003)}px solid #97C7E5`,
            backgroundColor: '#B8D9EE',
            boxShadow: '0 2px 8px rgba(91,163,209,0.2)',
            zIndex: 5,
            cursor: 'pointer',
          }}
          whileHover={{ boxShadow: '0 6px 20px rgba(91,163,209,0.35)' }}
        >
          <img src={node.icon} alt={node.label} style={{ width: nodeIconSize, height: nodeIconSize }} />
        </motion.div>

        {!isUpper && (
          <div style={{
            position: 'absolute',
            whiteSpace: 'nowrap',
            left: '50%',
            transform: 'translateX(-50%)',
            marginLeft: x,
            top: y + halfBox + labelGap * 0.4,
          }}>
            <span style={{
              fontSize: labelFontSz,
              color: '#6b7280',
              fontWeight: 500,
              fontFamily: 'monospace',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              {node.label}
            </span>
          </div>
        )}
      </motion.div>
    )
  }

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%', height: '100%' }}>
      {[{ sz: centerSize, op: 0.55 }, { sz: midRingSize, op: 0.38 }].map(({ sz, op }, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: sz, height: sz,
          left: '50%', top: '50%',
          marginLeft: -sz / 2, marginTop: -sz / 2,
          borderRadius: '50%',
          border: `1.5px solid rgba(151,199,229,${op})`,
          background: `radial-gradient(circle, rgba(151,199,229,${i === 0 ? 0.12 : 0.07}) 0%, transparent 70%)`,
          boxShadow: `0 0 ${i === 0 ? 22 : 18}px ${i === 0 ? 4 : 2}px rgba(91,163,209,${i === 0 ? 0.18 : 0.12})`,
          pointerEvents: 'none',
        }} />
      ))}

      {dashedRings.map((ring, i) => {
        const sz = S * ring.ratio
        return (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: sz, height: sz,
              left: '50%', top: '50%',
              marginLeft: -sz / 2, marginTop: -sz / 2,
              borderRadius: '50%',
              border: `1.5px dashed rgba(91,163,209,${ring.opacity})`,
              zIndex: 1,
            }}
            animate={{ rotate: ring.direction === 'clockwise' ? 360 : -360 }}
            transition={{ duration: ring.duration, repeat: Infinity, ease: 'linear' }}
          >
            {ring.particles > 0 && Array.from({ length: ring.particles }).map((_, pIdx) => {
              const angle  = (pIdx * 360) / ring.particles
              const rad    = (angle * Math.PI) / 180
              const r      = sz / 2
              const offsetX = Math.cos(rad) * r
              const offsetY = Math.sin(rad) * r
              const dotSz   = Math.max(3, S * 0.008)
              return (
                <div key={pIdx} style={{
                  position: 'absolute',
                  width: dotSz, height: dotSz,
                  borderRadius: '50%',
                  background: '#fff',
                  boxShadow: '0 0 6px rgba(255,255,255,0.8)',
                  left: '50%', top: '50%',
                  marginLeft: offsetX - dotSz / 2,
                  marginTop: offsetY - dotSz / 2,
                  zIndex: 10,
                }} />
              )
            })}
          </motion.div>
        )
      })}

      <motion.div
        style={{
          position: 'absolute',
          left: '50%', top: '50%',
          marginLeft: -centerBtnSz / 2,
          marginTop: -centerBtnSz / 2,
          width: centerBtnSz, height: centerBtnSz,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #5BA3D1 0%, #3a82b5 100%)',
          boxShadow: '0 0 40px rgba(91,163,209,0.65), 0 0 80px rgba(91,163,209,0.25)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 10,
        }}
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <img src={blueIcon} alt="DI" style={{ width: centerIconSz, height: centerIconSz }} />
      </motion.div>

      {orbitNodes.map((node, index) => renderNode(node, index))}
    </div>
  )
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
function HeroSection() {
  const heroRef = useRef(null)
  const inView = useInView(heroRef, { once: true, margin: "-50px" })

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#97C7E5] to-[#EAF4FA] pt-9">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-[#97C7E5]/30 blur-3xl rounded-full" />
      </div>

      <div ref={heroRef} className="relative h-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 pt-12 sm:pt-14 md:pt-16 lg:pt-20">
        <div className="w-full flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-10">
          <motion.div
            className="w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left pt-2 sm:pt-3 lg:pt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3
              className="font-bold leading-[1.2] text-navy pb-2"
              style={{ fontSize: 'clamp(18px, 3.5vw, 28px)' }}
            >
              Make Data Work. At Speed. At Scale.
              <br />
              <span style={{ fontSize: 'clamp(22px, 4.5vw, 36px)', color: '#0f172a', whiteSpace: 'nowrap',paddingBottom:"5px"}}>
                With Measurable Business Impact.
              </span>
            </h3>

            <motion.p
              className="text-gray-600 mt-4 max-w-lg pb-2"
              style={{ fontSize: 'clamp(14px, 1.8vw, 17px)', lineHeight: 1.65 }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Most enterprises invest heavily in data. Few operationalize it.
              Inteliment transforms fragmented analytics into Decision Intelligence
              that drives efficiency, agility, and growth.
            </motion.p>

            <motion.a
              href="/assessment"
              className="mt-6 inline-flex items-center gap-2 bg-[#5BA3D1] hover:bg-[#4a92bf] text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer relative z-10"
              style={{
                padding: 'clamp(10px, 1.5vw, 14px) clamp(16px, 2.5vw, 22px)',
                fontSize: 'clamp(12px, 1.5vw, 15px)',
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Assess Your Decision Maturity
              <img
                src={btIcon}
                alt=""
                style={{ width: 'clamp(14px, 1.5vw, 18px)', height: 'clamp(14px, 1.5vw, 18px)' }}
              />
            </motion.a>
          </motion.div>

          <motion.div
            className="w-full lg:w-[55%] flex items-center justify-center pt-2 sm:pt-3 lg:pt-4"
            style={{ height: 'clamp(260px, 80vw, 460px)' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div style={{ width: '100%', height: '100%', maxWidth: '780px', maxHeight: '780px' }}>
              <CircularSystem />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const impactNumbers = [
  { end: 22, suffix: '+', label: 'Years of Data Mastery' },
  { end: 500, suffix: '+', label: 'Projects Delivered' },
  { end: 100, suffix: '+', label: 'Enterprise Clients' },
  { end: 150, suffix: '+', label: 'Strong Team' },
  { end: 96, suffix: '%', label: 'Client Satisfaction' },
]

function DashedRings() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      <div
        className="absolute rounded-full"
        style={{
          width: 380,
          height: 380,
          background: "radial-gradient(circle, rgba(56,139,195,0.15) 0%, rgba(56,139,195,0.05) 50%, transparent 75%)",
        }}
      />
      <svg
        style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0 }}
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
      >
        <circle cx="600" cy="350" r="130" stroke="rgba(91,163,209,0.60)" strokeWidth="1" strokeDasharray="6 16" fill="none" />
        <circle cx="600" cy="350" r="195" stroke="rgba(91,163,209,0.50)" strokeWidth="1" strokeDasharray="6 16" fill="none" />
        <circle cx="600" cy="350" r="260" stroke="rgba(91,163,209,0.40)" strokeWidth="1" strokeDasharray="6 16" fill="none" />
        <circle cx="600" cy="350" r="325" stroke="rgba(91,163,209,0.30)" strokeWidth="1" strokeDasharray="6 16" fill="none" />
        <circle cx="600" cy="350" r="390" stroke="rgba(91,163,209,0.22)" strokeWidth="1" strokeDasharray="6 16" fill="none" />
        <circle cx="600" cy="350" r="455" stroke="rgba(91,163,209,0.14)" strokeWidth="1" strokeDasharray="6 16" fill="none" />
        <circle cx="600" cy="350" r="520" stroke="rgba(91,163,209,0.08)" strokeWidth="1" strokeDasharray="6 16" fill="none" />
        {[
          [120, 140], [980, 120], [80, 420], [1100, 500],
          [300, 620], [860, 600], [560, 60], [640, 660],
          [200, 300], [950, 280],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 2 : 1.5} fill="rgba(100,180,230,0.45)" />
        ))}
      </svg>
    </div>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: 0.1 + i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

function Card({ icon: Icon, title, desc, index }) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      className="flex flex-col gap-2 rounded-xl p-4 w-full"
      style={{
        background: "rgba(35,42,54,0.92)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 4px 28px rgba(0,0,0,0.45)",
        height: '100%',

      }}
    >
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: "rgba(45,65,95,0.75)", border: "1px solid rgba(100,160,220,0.22)" }}
      >
        <Icon size={16} color="#7bbee8" strokeWidth={1.8} />
      </div>
      <p className="text-white font-semibold text-sm mt-1" style={{ fontSize: '14px' }}>{title}</p>
      <p className="text-gray-400 leading-relaxed" style={{ fontSize: '13px' }}>{desc}</p>
    </motion.div>
  )
}

function S2Section() {
  const s2Ref = useRef(null)

  const centerContent = (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center"
      style={{ padding: "0px", position: "relative", zIndex: 10 }}
    >
      <motion.span
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        style={{
          fontSize: "14px",
          fontWeight: 700,
          color: "rgba(255,255,255,0.55)",
          border: "1px solid rgba(255,255,255,0.18)",
          background: "rgba(255,255,255,0.06)",
          marginBottom: 24,
          display: "inline-block",
          padding: "6px 20px",
          borderRadius: 999,
          fontFamily: "'Public Sans', sans-serif",
        }}
      >
        The Challenge
      </motion.span>

      <h2
        style={{
          fontSize: "clamp(1.8rem, 4.5vw, 3rem)",
          fontFamily: "'Public Sans', sans-serif",
          fontWeight: 800,
          lineHeight: 1.15,
          marginBottom: 24,
          color: "#ffffff",
          textWrap:'nowrap',
        }}
      >
        Your Business Doesn't Have a Data Problem.{" "} <br/>It Has a Decision Problem.
      </h2>

      <p style={{
        maxWidth: 560,
        fontSize: "15px",
        lineHeight: 1.7,
        color: "rgba(255,255,255,0.9)",
        fontFamily: "'Public Sans', sans-serif",
      }}>
        Every enterprise has data, but few have Decision Velocity. Growth stalls when
      </p>
    </motion.div>
  );

  const cards = [
    { icon: Clock,        num: "1", title: "Delayed Action",         desc: "Competitors move while insights are still being processed." },
    { icon: GitBranch,    num: "2", title: "Strategic Drift",        desc: "Goals fail to translate into execution." },
    { icon: TrendingDown, num: "3", title: "Scattered Intelligence", desc: "Siloed dashboards built on historical data." },
    { icon: Sparkles,     num: "4", title: "AI Inertia",             desc: "Models exist but are disconnected from outcomes." },
  ];

  const bridgeText = (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
      style={{
        textAlign: "center",
        fontFamily: "'Public Sans', sans-serif",
        marginTop: 48,
      }}
    >
      <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.9)", marginBottom: 4 }}>
        We bridge the gap between
      </p>
      <p style={{ fontSize: "16px", color: "#60a5fa", fontWeight: 600 }}>
        "What Happened" and "What to Do Next."
      </p>
    </motion.div>
  );

  const CardItem = ({ icon: Icon, num, title, desc, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 + index * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      style={{
        padding: "28px 24px 28px 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        height: "100%",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius:'15px',
        backgroundColor:"transparent",
      }}
    >
      {/* Large icon top-left, no box, no border */}
      <Icon
        size={72}
        strokeWidth={1.8}
        style={{
          color: "rgba(255,255,255,0.15)",
          marginBottom: 28,
        }}
      />

      <div style={{
        fontWeight: 700,
        color: "#60a5fa",
        fontFamily: "'Public Sans', sans-serif",
        marginBottom: 10,
        fontSize:'18px',
      }}>
        {num}.{"  "}{title}
      </div>

      <p style={{
        fontSize: "15px",
        lineHeight: 1.65,
        color: "rgba(255,255,255,0.50)",
        fontFamily: "'Public Sans', sans-serif",
        margin: 0,
      }}>
        {desc}
      </p>
    </motion.div>
  );

  return (
    <div
      ref={s2Ref}
      className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-10 md:py-16"
      style={{
        background: `
          radial-gradient(circle at 20% 20%, rgba(96,165,250,0.15), transparent 40%),
          radial-gradient(circle at 80% 80%, rgba(56,189,248,0.10), transparent 40%),
          linear-gradient(135deg, #0B0F14 0%, #1F1F1F 100%)
        `,
      }}
    >
      <div
        className="relative w-full overflow-hidden rounded-2xl"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* ── MOBILE (< md) ── */}
        <div className="relative z-10 flex flex-col items-center gap-6 p-6 md:hidden">
          {centerContent}
          <div className="grid grid-cols-2 gap-2 w-full">
            {cards.map((c, i) => (
              <CardItem key={c.title} {...c} index={i} />
            ))}
          </div>
          {bridgeText}
        </div>

        {/* ── TABLET (md → lg) ── */}
        <div className="relative z-10 hidden md:flex lg:hidden flex-col items-center gap-8 p-8">
          {centerContent}
          <div className="grid grid-cols-2 gap-4 w-full max-w-xl">
            {cards.map((c, i) => (
              <CardItem key={c.title} {...c} index={i} />
            ))}
          </div>
          {bridgeText}
        </div>

        {/* ── DESKTOP (≥ lg) ── */}
        <div
          className="relative z-10 hidden lg:flex flex-col items-center w-full"
          style={{ padding: "64px 48px" }}
        >
          <div style={{ maxWidth: 640, marginBottom: 56 }}>
            {centerContent}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 8,
              width: "100%",
            }}
          >
            {cards.map((c, i) => (
              <CardItem key={c.title} {...c} index={i} />
            ))}
          </div>

          {bridgeText}
        </div>
      </div>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ─── Snake Flow Component ─────────────────────────────────────────────────────
// Layout:
// Row 1: step[0] → step[1] → step[2]  ↓
//                                      
// (empty row for spacing)
//                                      
// Row 3:          step[4] ← step[3]  (step[3] aligned under step[2])

function SnakeFlow({ steps, isNew, anim }) {
  const CARD_W = 100;
  const CARD_H = 84;
  const ARROW_SIZE = 25;
  const ARROW_STROKE = 2.2;
  const arrowColor = isNew ? "#5BA3D1" : "#94a3b8";

  const cardStyle = (step) => ({
    width: CARD_W,
    height: CARD_H,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    borderRadius: 14,
    background: step.highlight
      ? "linear-gradient(145deg,#c6e5f7,#a8d5ef)"
      : isNew
        ? "linear-gradient(145deg,#e8f6fd,#d4ecf7)"
        : step.faded
          ? "rgba(255,255,255,0.45)"
          : "rgba(255,255,255,0.88)",
    border: step.highlight
      ? "2px solid #3a8fc4"
      : isNew
        ? "2px solid #5BA3D1"
        : step.faded
          ? "1px solid #dde8ef"
          : "1px solid #c0d5e8",
    boxShadow: step.highlight
      ? "0 4px 18px rgba(58,143,196,0.28)"
      : isNew
        ? "0 2px 10px rgba(91,163,209,0.18)"
        : step.faded
          ? "none"
          : "0 2px 8px rgba(91,163,209,0.10)",
    flexShrink: 0,
  });

  const labelStyle = (step) => ({
    fontSize: 12,
    fontWeight: 600,
    textAlign: "center",
    lineHeight: 1.25,
    padding: "0 4px",
    fontFamily: "'Public Sans', sans-serif",
    color: step.highlight
      ? "#0d3a5c"
      : isNew
        ? "#1a3a54"
        : step.faded
          ? "#9bb0c0"
          : "#2d5a7a",
  });

  const iconColor = (step) =>
    step.highlight ? "#1a6a9a" : isNew ? "#5BA3D1" : step.faded ? "#a0b8cc" : "#495057";

  const cardAnim = {
    hidden: { opacity: 0, y: 16, scale: 0.92 },
    visible: (i) => ({
      opacity: 1, y: 0, scale: 1,
      transition: { duration: 0.45, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] },
    }),
  };
  const arrowAnim = {
    hidden: { opacity: 0 },
    visible: (d) => ({ opacity: 1, transition: { delay: 0.25 + d * 0.1 } }),
  };

  const ARROW_CELL = ARROW_SIZE + 16; // ~38px

  // Grid columns:
  // col1: step[0] (Data)
  // col2: →
  // col3: step[1] (Reports/Context)
  // col4: →
  // col5: step[2] (Insights/Recommendations) ← pivot
  // col6: (empty spacer, same width as arrow cell)
  //
  // Grid rows:
  // row1: CARD_H  — top cards
  // row2: 32px    — down arrow sits here (col5)
  // row3: CARD_H  — bottom cards (col3=step[4], col4=←, col5=step[3])

  const gridCols = `${CARD_W}px ${ARROW_CELL}px ${CARD_W}px ${ARROW_CELL}px ${CARD_W}px`;

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: gridCols,
      gridTemplateRows: `${CARD_H}px 32px ${CARD_H}px`,
      alignItems: "center",
      justifyItems: "center",
    }}>

      {/* ── ROW 1 ── */}

      {/* col1, row1: step[0] — Data */}
      <motion.div
        custom={0} variants={cardAnim} initial="hidden" animate={anim}
        whileHover={{ scale: 1.07, transition: { duration: 0.18 } }}
        style={{ ...cardStyle(steps[0]), gridColumn: 1, gridRow: 1 }}
      >
        {React.createElement(steps[0].icon, { size: 18, color: iconColor(steps[0]), strokeWidth: 1.6 })}
        <span style={labelStyle(steps[0])}>{steps[0].label}</span>
      </motion.div>

      {/* col2, row1: → */}
      <motion.div custom={0.5} variants={arrowAnim} initial="hidden" animate={anim}
        style={{ gridColumn: 2, gridRow: 1, display: "flex", alignItems: "center" }}>
        <ArrowRight size={ARROW_SIZE} color={arrowColor} strokeWidth={ARROW_STROKE} />
      </motion.div>

      {/* col3, row1: step[1] — Reports/Context */}
      <motion.div
        custom={1} variants={cardAnim} initial="hidden" animate={anim}
        whileHover={{ scale: 1.07, transition: { duration: 0.18 } }}
        style={{ ...cardStyle(steps[1]), gridColumn: 3, gridRow: 1 }}
      >
        {React.createElement(steps[1].icon, { size: 18, color: iconColor(steps[1]), strokeWidth: 1.6 })}
        <span style={labelStyle(steps[1])}>{steps[1].label}</span>
      </motion.div>

      {/* col4, row1: → */}
      <motion.div custom={1.5} variants={arrowAnim} initial="hidden" animate={anim}
        style={{ gridColumn: 4, gridRow: 1, display: "flex", alignItems: "center" }}>
        <ArrowRight size={ARROW_SIZE} color={arrowColor} strokeWidth={ARROW_STROKE} />
      </motion.div>

      {/* col5, row1: step[2] — Insights/Recommendations (PIVOT) */}
      <motion.div
        custom={2} variants={cardAnim} initial="hidden" animate={anim}
        whileHover={{ scale: 1.07, transition: { duration: 0.18 } }}
        style={{ ...cardStyle(steps[2]), gridColumn: 5, gridRow: 1 }}
      >
        {React.createElement(steps[2].icon, { size: 18, color: iconColor(steps[2]), strokeWidth: 1.6 })}
        <span style={labelStyle(steps[2])}>{steps[2].label}</span>
      </motion.div>

      {/* ── ROW 2: ↓ arrow in col5, centered between pivot and card below ── */}
      <motion.div custom={2.5} variants={arrowAnim} initial="hidden" animate={anim}
        style={{
          gridColumn: 5,
          gridRow: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <ArrowDown size={ARROW_SIZE} color={arrowColor} strokeWidth={ARROW_STROKE} />
      </motion.div>

      {/* ── ROW 3 ── */}

      {/* col5, row3: step[3] — Slow Decisions / Automated Action (directly under pivot) */}
      <motion.div
        custom={3} variants={cardAnim} initial="hidden" animate={anim}
        whileHover={{ scale: 1.07, transition: { duration: 0.18 } }}
        style={{ ...cardStyle(steps[3]), gridColumn: 5, gridRow: 3 }}
      >
        {React.createElement(steps[3].icon, { size: 18, color: iconColor(steps[3]), strokeWidth: 1.6 })}
        <span style={labelStyle(steps[3])}>{steps[3].label}</span>
      </motion.div>

      {/* col4, row3: ← */}
      <motion.div custom={3.5} variants={arrowAnim} initial="hidden" animate={anim}
        style={{ gridColumn: 4, gridRow: 3, display: "flex", alignItems: "center" }}>
        <ArrowLeft size={ARROW_SIZE} color={arrowColor} strokeWidth={ARROW_STROKE} />
      </motion.div>

      {/* col3, row3: step[4] — Missed Opportunities / Measurable Outcomes */}
      <motion.div
        custom={4} variants={cardAnim} initial="hidden" animate={anim}
        whileHover={{ scale: 1.07, transition: { duration: 0.18 } }}
        style={{ ...cardStyle(steps[4]), gridColumn: 3, gridRow: 3 }}
      >
        {React.createElement(steps[4].icon, { size: 18, color: iconColor(steps[4]), strokeWidth: 1.6 })}
        <span style={labelStyle(steps[4])}>{steps[4].label}</span>
      </motion.div>

      {/* col1, col2 in row2 & row3 — intentionally empty (Data column has nothing below) */}

    </div>
  );
}

function ThirdSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const anim = inView ? "visible" : "hidden";

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  const oldSteps = [
    { icon: Database,   label: "Data" },
    { icon: LayoutList, label: "Reports" },
    { icon: Lightbulb,  label: "Insights" },
    { icon: Timer,      label: "Slow Decisions",       faded: true },
    { icon: XCircle,    label: "Missed Opportunities", faded: true },
  ];

  const newSteps = [
    { icon: Database,   label: "Data" },
    { icon: Layers,     label: "Context" },
    { icon: BookOpen,   label: "Recommendations" },
    { icon: Cpu,        label: "Automated Action" },
    { icon: TrendingUp, label: "Measurable Outcomes", highlight: true },
  ];

  const bottomCards = [
    { title: "Reduced TCO",               sub: "Simplified Stack, Fewer Tools, Lower Costs.",         delay: 8 },
    { title: "Better Financial Outcomes", sub: "Faster decisions, higher conversion, reduced waste.", delay: 9 },
  ];

  function StepCard({ icon: Icon, label, faded, highlight, isNew }) {
    return (
      <motion.div
        whileHover={{ y: -2, scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          width: 110,
          minWidth: 90,
          padding: "16px 10px",
          borderRadius: 12,
          background: highlight
            ? "linear-gradient(145deg, #d4edf9, #bfe0f5)"
            : isNew
              ? "rgba(255,255,255,0.92)"
              : faded
                ? "rgba(255,255,255,0.5)"
                : "rgba(255,255,255,0.85)",
          border: highlight
            ? "1.5px solid #3a8fc4"
            : isNew
              ? "1px solid #c0d8ea"
              : faded
                ? "1px solid #dde8ef"
                : "1px solid #dbe7f0",
          boxShadow: highlight
            ? "0 0 0 3px rgba(58,143,196,0.15), 0 4px 14px rgba(58,143,196,0.18)"
            : isNew
              ? "0 2px 8px rgba(91,163,209,0.10)"
              : "none",
          cursor: "default",
          flexShrink: 0,
        }}
      >
        <Icon
          size={20}
          color={
            highlight ? "#1a6a9a"
            : isNew ? "#5BA3D1"
            : faded ? "#b0c4d4"
            : "#6b8fa8"
          }
          strokeWidth={1.6}
        />
        <span style={{
          fontSize: 12,
          fontWeight: 600,
          color: highlight ? "#0d3a5c" : isNew ? "#1a3a54" : faded ? "#a0b8c8" : "#3a5f7a",
          textAlign: "center",
          lineHeight: 1.3,
          fontFamily: "'Public Sans', sans-serif",
        }}>
          {label}
        </span>
      </motion.div>
    );
  }

  function FlowRow({ steps, isNew, animDelay = 0 }) {
    return (
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 4,
      }}>
        {steps.map((step, i) => (
          <React.Fragment key={step.label}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: animDelay + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <StepCard
                icon={step.icon}
                label={step.label}
                faded={step.faded}
                highlight={step.highlight}
                isNew={isNew}
              />
            </motion.div>
            {i < steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: animDelay + i * 0.1 + 0.15 }}
                style={{ display: "flex", alignItems: "center", flexShrink: 0 }}
              >
                {i < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.3, delay: animDelay + i * 0.1 + 0.15 }}
                    style={{ display: "flex", alignItems: "center", flexShrink: 0 }}
                  >
                    <img
                      src={isNew ? newArrow : oldArrow}
                      alt=""
                      style={{ width: 60, height: 60, display: "block" }}
                    />
                  </motion.div>
                )}
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>
    );
  }

  function ModelBox({ title, steps, isNew, delay }) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: "100%",
          borderRadius: 16,
          border: isNew ? "1.5px solid rgba(91,163,209,0.35)" : "1px solid rgba(91,163,209,0.18)",
          background: isNew
            ? "linear-gradient(135deg, rgba(210,234,248,0.65) 0%, rgba(230,244,252,0.50) 100%)"
            : "linear-gradient(135deg, #C0CDD6 10%, #C4D3DC 100%)",
          padding: "24px 20px 28px",
          backgroundImage: isNew
            ? `linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px),
               linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px),
               linear-gradient(135deg, rgba(210,234,248,0.65) 0%, rgba(230,244,252,0.50) 100%)`
            : `linear-gradient(rgba(255,255,255,1) 1.5px, transparent 1.5px),
               linear-gradient(90deg, rgba(255,255,255,1) 1.5px, transparent 1.5px),
               rgba(234,244,250,0.75)`,
          backgroundSize: "120px 120px, 120px 120px, 100% 100%",
          boxShadow: isNew
            ? "0 4px 24px rgba(91,163,209,0.14)"
            : "0 2px 12px rgba(91,163,209,0.06)",
        }}
      >
        <p style={{
          fontSize: 16,
          fontWeight: 700,
          letterSpacing: "0.08em",
          color: isNew ? "#1a5a84" : "#4a6f8a",
          textAlign: "center",
          marginBottom: 20,
          fontFamily: "'Public Sans', sans-serif",
        }}>
          {title}
        </p>
        <div style={{ overflowX: "auto", paddingBottom: 4 }}>
          <div style={{ minWidth: "fit-content", margin: "0 auto" }}>
            <FlowRow steps={steps} isNew={isNew} animDelay={delay + 0.1} />
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700;800&display=swap');
      `}</style>

      <section
        ref={ref}
        style={{
          width: "100%",
          background: "linear-gradient(180deg, #EAF4FA 0%, #CFE3F1 50%, #B8D4EA 100%)",
          fontFamily: "'Public Sans', sans-serif",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "56px 20px 48px",
        }}
      >
        {/* Badge */}
        <motion.div initial="hidden" animate={anim} variants={fadeUp} custom={0} style={{ marginBottom: 20 }}>
          <div style={{
            display: "inline-block",
            border: "1px solid #5BA3D1",
            borderRadius: 999,
            padding: "5px 22px",
            background: "rgba(255,255,255,0.40)",
          }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: "#3A7394", }}>
              The Shift
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial="hidden" animate={anim} variants={fadeUp} custom={1}
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2.6rem)",
            fontWeight: 800,
            color: "#0d2d45",
            lineHeight: 1.15,
            marginBottom: 40,
            padding: "0 8px",
            fontFamily: "'Public Sans', sans-serif",
            textWrap: "nowrap",
          }}
        >
          Don't Go Slow. Move Fast with Clarity and Confidence.
        </motion.h2>

        {/* Two model boxes stacked */}
        <div style={{
          width: "100%",
          maxWidth: 980,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}>
          <ModelBox title="Old Model" steps={oldSteps} isNew={false} delay={0.15} />
          <ModelBox title="New Model" steps={newSteps} isNew={true}  delay={0.30} />
        </div>

        {/* Bottom stat cards */}
        <div style={{
          width: "100%",
          maxWidth: 980,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 16,
          marginTop: 20,
        }}>
          {bottomCards.map(({ title, sub, delay }) => (
            <motion.div
              key={title}
              initial="hidden" animate={anim} variants={fadeUp} custom={delay}
              whileHover={{ y: -3, boxShadow: "0 10px 28px rgba(91,163,209,0.18)" }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                padding: "22px 26px",
                borderRadius: 16,
                background: "rgba(255,255,255,0.60)",
                border: "1px solid rgba(91,163,209,0.20)",
                boxShadow: "0 2px 12px rgba(91,163,209,0.08)",
                cursor: "pointer",
              }}
            >
              <div style={{
                width: 42, height: 42, borderRadius: 10, flexShrink: 0,
                background: "rgba(91,163,209,0.12)",
                border: "1px solid rgba(91,163,209,0.20)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Zap size={18} color="#5BA3D1" strokeWidth={2} />
              </div>
              <div>
                <p style={{ fontSize: 16, fontWeight: 700, color: "#0d2d45", fontFamily: "'Public Sans', sans-serif" }}>
                  {title}
                </p>
                <p style={{ fontSize: 13, color: "#4a6f8a", marginTop: 3, fontFamily: "'Public Sans', sans-serif" }}>
                  {sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer line */}
        <motion.p
          initial="hidden" animate={anim} variants={fadeUp} custom={10}
          style={{
            marginTop: 32,
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            fontWeight: 800,
            color: "#1a4a6a",
            textAlign: "center",
            padding: "0 16px",
            fontFamily: "'Public Sans', sans-serif",
          }}
        >
          One Decision Engine. Every outcome measured, improved, compounding!
        </motion.p>
      </section>
    </>
  );
}

export default function HomePage() {
  const meta = buildPageMeta(
    'Inteliment, Decision Intelligence Company',
    'Inteliment builds Decision Intelligence systems that transform enterprise data into faster, better, and aligned decisions. From data engineering to autonomous AI.',
    '/'
  )

  return (
    <>
      <SEOHead meta={meta} jsonLd={organizationJsonLd()} />
      {/*S1 Herro section*/}
      <HeroSection/>
      <S2Section />
      <ThirdSection />
      <SectionFour />
      <section className="pt-4 bg-[#0d1117]">
      <ClientLogoWall />
      </section>
      <IndustryGrid />
    </>
  )
}