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
import btIcon from '@/assets/home/bt-icon.svg'
import { motion, useInView } from 'framer-motion'
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
              className="font-bold leading-[1.2] text-navy"
              style={{ fontSize: 'clamp(18px, 3.5vw, 28px)' }}
            >
              Make Data Work. At Speed. At Scale.
              <br />
              <span style={{ fontSize: 'clamp(22px, 4.5vw, 36px)', color: '#0f172a', whiteSpace: 'nowrap' }}>
                With Measurable Business Impact.
              </span>
            </h3>

            <motion.p
              className="text-gray-600 mt-4 max-w-lg"
              style={{ fontSize: 'clamp(13px, 1.8vw, 17px)', lineHeight: 1.65 }}
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
      }}
    >
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: "rgba(45,65,95,0.75)", border: "1px solid rgba(100,160,220,0.22)" }}
      >
        <Icon size={16} color="#7bbee8" strokeWidth={1.8} />
      </div>
      <p className="text-white font-semibold text-sm mt-1">{title}</p>
      <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
    </motion.div>
  )
}

function S2Section() {
  const s2Ref = useRef(null)
  const inView = useInView(s2Ref, { once: true, margin: "-50px" })
  const CURVE_H = 308;

  const centerContent = (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center"
      style={{ padding: "0 16px", position: "relative", zIndex: 10 }}
    >
      <motion.span
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="font-medium tracking-[0.14em] text-gray-300 px-5 py-1.5 rounded-full"
        style={{
          fontSize:"14px",
          border: "1px solid rgba(255,255,255,0.14)",
          background: "rgba(255,255,255,0.04)",
          marginBottom: 12,
          display: "inline-block",
        }}
      >
        The Challenge
      </motion.span>
      <h2
        className="text-white font-extrabold leading-tight mb-5"
        style={{
          fontSize: "clamp(1.4rem, 4vw, 2.6rem)",
          fontFamily: "'Public Sans', sans-serif",
          letterSpacing: "-0.01em",
        }}
      >
        Your Business Doesn't Have a Data Problem. It Has a Decision Problem.
      </h2>
      <p className="text-gray-400 text-sm leading-relaxed mb-3" style={{ maxWidth: 360 }}>
        Every enterprise has data, but few have Decision Velocity. Growth stalls when
      </p>
      <p className="text-gray-300 text-sm leading-relaxed" style={{ maxWidth: 360 }}>
        We bridge the gap between{" "}<br />
        <span style={{ color: "#60a5fa" }}>
          "What Happened" and "What to Do Next."
        </span>
      </p>
    </motion.div>
  );

  const mobileCardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1, x: 0,
      transition: { delay: 0.1 + i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  const mobileCardVariantsNew = {
    hidden: { opacity: 0, x: 20 },
    visible: (i) => ({
      opacity: 1, x: 0,
      transition: { delay: 0.1 + i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <div ref={s2Ref} className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-10 md:py-16" style={{ background: "#EAF4FA" }}>
      <div
        className="relative w-full overflow-hidden rounded-2xl"
        style={{
          background: "#1F1F1F",
          border: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <DashedRings />

        <div className="relative z-10 flex flex-col items-center gap-6 p-6 md:hidden">
          {centerContent}
          <div className="grid grid-cols-2 gap-3 w-full">
            <motion.div custom={0} variants={mobileCardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card icon={Clock}        title="Delayed Action"         desc="Competitors move while insights are still being processed." index={0} />
            </motion.div>
            <motion.div custom={1} variants={mobileCardVariantsNew} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card icon={GitBranch}    title="Strategic Drift"        desc="Goals fail to translate into execution."                    index={1} />
            </motion.div>
            <motion.div custom={2} variants={mobileCardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card icon={TrendingDown} title="Scattered Intelligence" desc="Siloed dashboards built on historical data."                index={2} />
            </motion.div>
            <motion.div custom={3} variants={mobileCardVariantsNew} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card icon={Sparkles}     title="AI Inertia"             desc="Models exist but are disconnected from outcomes."           index={3} />
            </motion.div>
          </div>
        </div>

        <div className="relative z-10 hidden md:flex lg:hidden flex-col items-center gap-8 p-8">
          {centerContent}
          <div className="grid grid-cols-2 gap-4 w-full max-w-xl">
            <motion.div custom={0} variants={mobileCardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card icon={Clock}        title="Delayed Action"         desc="Competitors move while insights are still being processed." index={0} />
            </motion.div>
            <motion.div custom={1} variants={mobileCardVariantsNew} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card icon={GitBranch}    title="Strategic Drift"        desc="Goals fail to translate into execution."                    index={1} />
            </motion.div>
            <motion.div custom={2} variants={mobileCardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card icon={TrendingDown} title="Scattered Intelligence" desc="Siloed dashboards built on historical data."                index={2} />
            </motion.div>
            <motion.div custom={3} variants={mobileCardVariantsNew} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card icon={Sparkles}     title="AI Inertia"             desc="Models exist but are disconnected from outcomes."           index={3} />
            </motion.div>
          </div>
        </div>

        <div
          className="relative z-10 hidden lg:flex items-center justify-center w-full"
          style={{ flex: 1, padding: "60px 40px 60px" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "210px 110px 1fr 110px 210px",
              alignItems: "center",
              width: "100%",
              gap: 0,
            }}
          >
            <div className="flex flex-col" style={{ gap: 28 }}>
              <Card icon={Clock}     title="Delayed Action"  desc="Competitors move while insights are still being processed." index={0} />
              <Card icon={GitBranch} title="Strategic Drift" desc="Goals fail to translate into execution."                    index={1} />
            </div>

            <div style={{ height: CURVE_H, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src={leftCurve} alt="" aria-hidden="true" style={{ width: "100%", height: CURVE_H, objectFit: "fill", display: "block" }} />
            </div>

            {centerContent}

            <div style={{ height: CURVE_H, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src={rightCurve} alt="" aria-hidden="true" style={{ width: "100%", height: CURVE_H, objectFit: "fill", display: "block" }} />
            </div>

            <div className="flex flex-col" style={{ gap: 28 }}>
              <Card icon={TrendingDown} title="Scattered Intelligence" desc="Siloed dashboards built on historical data."      index={2} />
              <Card icon={Sparkles}     title="AI Inertia"             desc="Models exist but are disconnected from outcomes." index={3} />
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 w-full h-20 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(9,15,26,0.5))", zIndex: 2 }}
        />
      </div>
    </div>
  )
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
    fontSize: 11,
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
    { icon: BookOpen,   label: "Recommend ations" },
    { icon: Cpu,        label: "Automated Action" },
    { icon: TrendingUp, label: "Measurable Outcomes", highlight: true },
  ];

  // Mobile/tablet flat card
  function FlatStepCard({ icon: Icon, label, faded, highlight, isNew }) {
    return (
      <motion.div
        whileTap={{ scale: 0.97 }}
        whileHover={{ scale: 1.02 }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "10px 14px",
          borderRadius: 12,
          background: highlight
            ? "linear-gradient(145deg,#c6e5f7,#a8d5ef)"
            : isNew
              ? "linear-gradient(145deg,#e8f6fd,#d4ecf7)"
              : faded
                ? "rgba(255,255,255,0.45)"
                : "rgba(255,255,255,0.82)",
          border: highlight
            ? "1.5px solid #3a8fc4"
            : isNew
              ? "1.5px solid #5BA3D1"
              : faded
                ? "1px solid #dde8ef"
                : "1px solid #cddcea",
          boxShadow: highlight
            ? "0 4px 16px rgba(58,143,196,0.22)"
            : isNew
              ? "0 2px 10px rgba(91,163,209,0.14)"
              : "none",
          cursor: "pointer",
        }}
      >
        <Icon size={16} color={highlight ? "#1a6a9a" : isNew ? "#5BA3D1" : faded ? "#a0b8cc" : "#495057"} strokeWidth={1.6} />
        <span style={{
          fontSize: 13, fontWeight: 600,
          color: highlight ? "#0d3a5c" : isNew ? "#1a3a54" : faded ? "#9bb0c0" : "#2d5a7a",
          fontFamily: "'Public Sans', sans-serif",
        }}>{label}</span>
      </motion.div>
    );
  }

  const bottomCards = [
    { title: "Reduced TCO",              sub: "Simplified Stack, Fewer Tools, Lower Costs.",         delay: 9  },
    { title: "Better Financial Outcomes", sub: "Faster decisions, higher conversion, reduced waste.", delay: 10 },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700;800&display=swap');
      `}</style>

      <section
        ref={ref}
        style={{
          width: "100%",
          background: "linear-gradient(180deg, #EAF4FA 0%, #C8DFF0 50%, #A8CAE3 100%)",
          fontFamily: "'Public Sans', sans-serif",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px 16px",
        }}
      >
        {/* Badge */}
        <motion.div initial="hidden" animate={anim} variants={fadeUp} custom={0}>
          <div style={{
            display: "inline-block",
            border: "1.5px solid #5BA3D1",
            borderRadius: 999,
            padding: "5px 20px",
            marginBottom: 24,
            background: "rgba(255,255,255,0.35)",
          }}>
            <span style={{ fontSize: '14px', fontWeight: 600, letterSpacing: "0.15em", color: "#3a7fa8" }}>
              The Shift
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial="hidden" animate={anim} variants={fadeUp} custom={1}
          style={{
            fontSize: "clamp(1.4rem, 4vw, 2.6rem)",
            fontWeight: 800,
            textAlign: "center",
            color: "#0d2d45",
            lineHeight: 1.2,
            marginBottom: 32,
            padding: "0 8px",
          }}
        >
          Don't Go Slow. Move Fast with Clarity and Confidence.
        </motion.h2>

        {/* ── Panel container (reduced size) ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{
            width: "100%",
            maxWidth: 1000,          // reduced from 1060
            borderRadius: 20,
            overflow: "hidden",
            border: "1px solid rgba(91,163,209,0.25)",
            boxShadow: "0 8px 40px rgba(91,163,209,0.12)",
          }}
        >
          {/* ── MOBILE (< sm) ── */}
          <div className="block sm:hidden">
            <div style={{
              background: "#B2C6D2",
              padding: "24px 16px",
              borderBottom: "1px solid rgba(91,163,209,0.20)",
            }}>
              <p style={{ fontSize: 18, fontWeight: 600, color: "#1F1F1F", marginBottom: 14, textAlign: "right", letterSpacing: "0.03em" }}>Old Model</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {oldSteps.map((step, i) => (
                  <motion.div key={step.label} custom={i} variants={{ hidden: { opacity: 0, x: -20 }, visible: (i) => ({ opacity: 1, x: 0, transition: { delay: 0.1 + i * 0.1 } }) }} initial="hidden" animate={anim}>
                    <FlatStepCard icon={step.icon} label={step.label} faded={step.faded} isNew={false} />
                  </motion.div>
                ))}
              </div>
            </div>
            <div style={{
              background: "linear-gradient(135deg, rgba(195,228,248,0.70) 0%, rgba(220,240,252,0.55) 100%)",
              padding: "24px 16px",
            }}>
              <p style={{ fontSize: 18, fontWeight: 600, color: "#1F1F1F", marginBottom: 14, textAlign: "left", letterSpacing: "0.03em" }}>New Model</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {newSteps.map((step, i) => (
                  <motion.div key={step.label} custom={i} variants={{ hidden: { opacity: 0, x: 20 }, visible: (i) => ({ opacity: 1, x: 0, transition: { delay: 0.1 + i * 0.1 } }) }} initial="hidden" animate={anim}>
                    <FlatStepCard icon={step.icon} label={step.label} highlight={step.highlight} isNew={true} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* ── TABLET (sm → lg) ── */}
          <div className="hidden sm:grid lg:hidden" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <div style={{
              background: "rgba(234,244,250,0.80)",
              padding: "28px 20px",
              borderRight: "1px solid rgba(91,163,209,0.20)",
            }}>
              <p style={{ fontSize: 20, fontWeight: 700, color: "#1F1F1F", marginBottom: 18, textAlign: "center", letterSpacing: "0.03em" }}>Old Model</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {oldSteps.map((step, i) => (
                  <motion.div key={step.label} custom={i} variants={{ hidden: { opacity: 0, x: -20 }, visible: (i) => ({ opacity: 1, x: 0, transition: { delay: 0.1 + i * 0.1 } }) }} initial="hidden" animate={anim}>
                    <FlatStepCard icon={step.icon} label={step.label} faded={step.faded} isNew={false} />
                  </motion.div>
                ))}
              </div>
            </div>
            <div style={{
              background: "linear-gradient(135deg, rgba(195,228,248,0.70) 0%, rgba(220,240,252,0.55) 100%)",
              padding: "28px 20px",
            }}>
              <p style={{ fontSize: 20, fontWeight: 700, color: "#1F1F1F", marginBottom: 18, textAlign: "center", letterSpacing: "0.03em" }}>New Model</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {newSteps.map((step, i) => (
                  <motion.div key={step.label} custom={i} variants={{ hidden: { opacity: 0, x: 20 }, visible: (i) => ({ opacity: 1, x: 0, transition: { delay: 0.1 + i * 0.1 } }) }} initial="hidden" animate={anim}>
                    <FlatStepCard icon={step.icon} label={step.label} highlight={step.highlight} isNew={true} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* ── DESKTOP (≥ lg) : snake flow layout ── */}
          <div className="hidden lg:grid" style={{ gridTemplateColumns: "1fr 1fr" }}>

            {/* OLD MODEL PANEL */}
            <div style={{
              background: "rgba(234,244,250,0.60)",
              backdropFilter: "blur(12px)",
              padding: "28px 32px 36px",
              borderRight: "1px solid rgba(91,163,209,0.20)",
              backgroundImage: `
                linear-gradient(rgba(91,163,209,0.06) 1px, transparent 1px),
                linear-gradient(90deg, rgba(91,163,209,0.06) 1px, transparent 1px),
                linear-gradient(180deg, #EAF4FA 0%, #C8DFF0 100%)
              `,
              backgroundSize: "32px 32px, 32px 32px, 100% 100%",
            }}>
              <motion.p
                initial="hidden" animate={anim} variants={fadeUp} custom={2}
                style={{ fontSize: 20, fontWeight: 700, color: "#1F1F1F", marginBottom: 24, letterSpacing: "0.04em" }}
              >
                Old Model
              </motion.p>
              <SnakeFlow steps={oldSteps} isNew={false} anim={anim} />
            </div>

            {/* NEW MODEL PANEL */}
            <div style={{
              background: "linear-gradient(135deg, rgba(195,228,248,0.55) 0%, rgba(220,240,252,0.40) 100%)",
              backdropFilter: "blur(12px)",
              padding: "28px 32px 36px",
              position: "relative",
              overflow: "hidden",
              backgroundImage: `
                linear-gradient(rgba(91,163,209,0.07) 1px, transparent 1px),
                linear-gradient(90deg, rgba(91,163,209,0.07) 1px, transparent 1px),
                linear-gradient(135deg, rgba(195,228,248,0.55) 0%, rgba(220,240,252,0.40) 100%)
              `,
              backgroundSize: "32px 32px, 32px 32px, 100% 100%",
            }}>
              {/* Decorative sparkles */}
              {[
                { top: "8%",  left: "72%", size: 20 },
                { top: "18%", left: "55%", size: 13 },
                { top: "5%",  left: "40%", size: 9  },
              ].map(({ top, left, size }, i) => (
                <motion.svg
                  key={i} width={size} height={size} viewBox="0 0 24 24" fill="none"
                  style={{ position: "absolute", top, left, opacity: 0.35, pointerEvents: "none" }}
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "linear" }}
                >
                  <path d="M12 2L13.8 10.2L22 12L13.8 13.8L12 22L10.2 13.8L2 12L10.2 10.2Z" fill="#5BA3D1" />
                </motion.svg>
              ))}

              <motion.p
                initial="hidden" animate={anim} variants={fadeUp} custom={2}
                style={{ fontSize: 20, fontWeight: 700, color: "#1F1F1F", marginBottom: 24, letterSpacing: "0.04em" }}
              >
                New Model
              </motion.p>
              <SnakeFlow steps={newSteps} isNew={true} anim={anim} />
            </div>
          </div>
        </motion.div>

        {/* Bottom stat cards */}
        <div style={{
          width: "100%", maxWidth: 1000,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 16, marginTop: 16,
        }}>
          {bottomCards.map(({ title, sub, delay }) => (
            <motion.div
              key={title}
              initial="hidden" animate={anim} variants={fadeUp} custom={delay}
              whileHover={{ y: -3, boxShadow: "0 10px 28px rgba(91,163,209,0.18)" }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: "flex", alignItems: "center", gap: 16,
                padding: "20px 24px", borderRadius: 16,
                background: "rgba(255,255,255,0.52)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(91,163,209,0.20)",
                boxShadow: "0 2px 12px rgba(91,163,209,0.08)",
                cursor: "pointer",
              }}
            >
              <div style={{
                width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                background: "#ffffff", border: "1px solid #ffffff",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Zap size={18} color="#5BA3D1" strokeWidth={2} />
              </div>
              <div>
                <p style={{ fontSize: 14, fontWeight: 700, color: "#0d2d45" }}>{title}</p>
                <p style={{ fontSize: 12, color: "#4a6f8a", marginTop: 2 }}>{sub}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial="hidden" animate={anim} variants={fadeUp} custom={11}
          style={{ marginTop: 28, fontSize: 13, fontWeight: 600, color: "#1a4a6a", textAlign: "center", padding: "0 16px" }}
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