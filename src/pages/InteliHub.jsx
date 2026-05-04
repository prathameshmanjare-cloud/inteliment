import * as Icons from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import SEOHead from '@/components/ui/SEOHead'
import HeroSection from '@/components/sections/HeroSection'
import CTABanner from '@/components/sections/CTABanner'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import GlassCard from '@/components/ui/GlassCard'
import GradientDivider from '@/components/ui/GradientDivider'
import { buildPageMeta, breadcrumbJsonLd } from '@/utils/seo'
import { s, tr } from 'framer-motion/client'

/* ─── Data ─────────────────────────────────────────────────────────────── */

const aiProducts = [
  {
    icon: 'Brain',
    badge: 'AI',
    title: 'Inteli-AI',
    subtitle: 'Intelligence. Engineered.',
    description:
      'Production-grade AI systems for enterprise decision intelligence, predictive models, AI agents, GenAI applications, and autonomous decision workflows. Built to run in the real world.',
    features: ['Predictive Decision Systems', 'AI Decision Agents', 'GenAI Applications', 'AI-Augmented Analytics'],
    cta: 'Explore Inteli-AI',
    to: '/inteli-ai',
    highlight: true,
  },
  {
    icon: 'FlaskConical',
    badge: 'LAB',
    title: 'Inteli-Labs',
    subtitle: 'AI Research & Innovation',
    description:
      "Inteliment's engineering research lab. Every reusable framework, AI accelerator, and pre-trained model that compresses our delivery timelines originates here, conceived, tested, and hardened before it reaches any client engagement.",
    features: ['9+ proprietary AI assets', 'GenAI agent toolkits', 'Pre-built ML model templates','Enterprise R&D partnership'],
    cta: 'Explore Inteli-Labs',
    to: '/inteli-labs',
    highlight: false,
  },
  {
    icon: 'Layers',
    badge: 'PLATFORM',
    title: 'Rubiscape',
    subtitle: 'No-Code Decision Intelligence Platform',
    description:
      "Inteliment's proprietary no-code DI platform. Build ML pipelines, automate decision flows, and deploy live dashboards, without writing a single line of model code. Governed, auditable, and production-ready.",
    features: ['No-code ML pipeline builder', 'Automated decision flows', 'Live dashboard studio', 'Enterprise governance built-in'],
    cta: 'Request a Demo',
    to: '/contact?subject=rubiscape-demo',
    highlight: false,
  },
]

const decisionLayers = [
  {
    icon: 'Target',
    label: 'Tactical',
    sublabel: 'Weekly, campaign-level',
    description: 'Optimise campaigns, resource allocation, and demand forecasting.',
  },
  {
    icon: 'Zap',
    label: 'Operational',
    sublabel: 'Real-time, high-volume',
    description: 'Automate repetitive decisions at scale, fraud flags, pricing updates, routing logic.',
  },
  {
    icon: 'TrendingUp',
    label: 'Strategic',
    sublabel: 'Quarterly planning',
    description: 'Scenario modelling, portfolio decisions, and market entry analysis.',
  },
  {
    icon: 'Cpu',
    label: 'Autonomous',
    sublabel: 'AI-driven, self-executing',
    description: 'AI agents that monitor, decide, and act without manual intervention.',
  },
]

const proofStrip = [
  { metric: '22+', label: 'Years of Data Expertise' },
  { metric: '500+', label: 'Projects Delivered' },
  { metric: '100+', label: 'Enterprise Clients' },
  { metric: '50%', label: 'Faster Time to Insight' },
]

const badgeColorMap = {
  AI: 'bg-teal/20 text-teal',
  LAB: 'bg-purple-400/20 text-purple-300',
  PLATFORM: 'bg-blue-400/20 text-blue-300',
}

/* ─── Animation Variants ────────────────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut', delay },
  }),
}

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

const cardHover = {
  rest: { y: 0, boxShadow: '0 0 0 rgba(0,0,0,0)' },
  hover: { y: -6, boxShadow: '0 24px 48px rgba(0,0,0,0.12)', transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const counterVariant = {
  hidden: { opacity: 0, scale: 0.5, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

/* ─── Animated Counter ──────────────────────────────────────────────────── */

function AnimatedCounter({ value }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!isInView) return
    // Extract numeric portion
    const raw = value.replace(/[^0-9]/g, '')
    const target = parseInt(raw, 10)
    if (isNaN(target)) { setDisplay(value); return }
    const prefix = value.match(/^[^0-9]*/)?.[0] || ''
    const suffix = value.match(/[^0-9]*$/)?.[0] || ''
    let start = 0
    const duration = 1600
    const startTime = performance.now()
    const tick = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      const current = Math.round(eased * target)
      setDisplay(`${prefix}${current}${suffix}`)
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [isInView, value])

  return <span ref={ref}>{display}</span>
}

/* ─── Reusable InView Wrapper ───────────────────────────────────────────── */

function InView({ children, variants, custom, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      custom={custom}
    >
      {children}
    </motion.div>
  )
}

/* ─── Hero Section ──────────────────────────────────────────────────────── */

function HeroSectionCustom() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={ref}
      className="relative flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        fontFamily: "'Public Sans', sans-serif",
        minHeight: '520px',
      }}
    >
      {/* BG — cover, not stretched */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y: bgY }}
      >
        <img
          src="/assets/intelhub/hero-bg.svg"
          alt=""
          aria-hidden="true"
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </motion.div>

      {/* Outer wrapper with vertical padding = space above/below card */}
      <motion.div
        className="relative z-10 w-full flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16"
        style={{ y: contentY, opacity, paddingTop: '120px', paddingBottom: '56px' }}
      >
        {/* Glass Card */}
        <div
            className="w-full max-w-5xl mx-auto rounded-2xl border border-white/10 px-8 sm:px-12 md:px-16 py-12 md:py-16 text-center backdrop-blur-xl"
            style={{
              background: 'transparent',
              boxShadow: '0 8px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(255,255,255,0.04)',
              borderTop: '1px solid rgba(255,255,255,0.2)',
              borderLeft: '1px solid rgba(255,255,255,0.12)',
              borderRight: '1px solid rgba(255,255,255,0.06)',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}
          >
          {/* Badge */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={0}
            className="flex justify-center mb-7"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-400/40 text-blue-300 text-[14px] font-semibold">
              AI Solutions Hub
            </span>
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden mb-5">
            <motion.h1
              className="font-semibold text-white leading-[1.08] tracking-tight text-4xl md:text-5xl"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {["Inteliment's", "AI,", "In", "One", "Place."].map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-[0.22em]"
                  variants={{
                    hidden: { opacity: 0, y: 50, rotateX: -20 },
                    visible: {
                      opacity: 1, y: 0, rotateX: 0,
                      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.1 },
                    },
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.65}
            className="text-gray-300 font-normal leading-relaxed mx-auto mb-10 max-w-2xl text-base md:text-lg"
          >
            Production AI systems, research IP, and the platform that powers it all. <br/>
            Every Inteliment AI capability, accessible from here.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.85}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6"
          >
            {/* Primary */}
            <motion.a
              href="https://hub-dev.inteliment.ai"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg font-semibold text-sm text-white bg-gradient-to-r from-blue-400 to-blue-600"
              whileHover={{ scale: 1.04, boxShadow: '0 0 28px rgba(56,140,220,0.5)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
             
              See What We Have Build
               <Icons.Layers size={15} />
            </motion.a>

            {/* Secondary */}
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg font-semibold text-sm text-blue-400 border border-blue-400 bg-[#e5f5ff]  transition-colors"
              >
                Talk to a Specialist
                <Icons.ArrowRight size={15} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
/* ─── Product Card ──────────────────────────────────────────────────────── */
function ProductCard({ product, index }) {
  const Icon = Icons[product.icon] || Icons.Brain
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.97 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: index * 0.13 }}
      style={{ fontFamily: "'Public Sans', sans-serif" }}
    >
      <motion.div
        whileHover={{ y: -6, boxShadow: '0 24px 48px rgba(42,125,181,0.13)' }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="bg-white rounded-2xl p-7 h-full flex flex-col"
        style={{
          border: '1px solid rgba(42,125,181,0.15)',
          boxShadow: '0 2px 16px rgba(42,125,181,0.07)',
        }}
      >
        {/* Top row: icon + badge */}
        <div className="flex items-center justify-between mb-6">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: 'rgba(42,125,181,0.08)' }}
          >
            <Icon size={20} style={{ color: '#2a7db5' }} />
          </div>
          <span
            className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full"
            style={{
              border: '1px solid rgba(42,125,181,0.3)',
              color: '#2a7db5',
              background: 'rgba(42,125,181,0.06)',
            }}
          >
            {product.badge}
          </span>
        </div>
        {/* Title + subtitle */}
        <h3
          className="font-bold text-xl mb-1"
          style={{ color: '#0f1a2e' }}
        >
          {product.title}
        </h3>
        <p
          className="text-sm font-semibold mb-4"
          style={{ color: '#2a7db5' }}
        >
          {product.subtitle}
        </p>

        {/* Description */}
        <p
          className="text-sm leading-relaxed  mb-6"
          style={{ color: '#4a5e72' }}
        >
          {product.description}
        </p>

        {/* Feature chips */}
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {product.features.map((f, fi) => (
            <motion.span
              key={f}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.35, delay: index * 0.13 + 0.3 + fi * 0.07 }}
              className="text-xs px-3 py-1.5 rounded-full"
              style={{
                border: '1px solid rgba(42,125,181,0.35)',
                color: '#2a7db5',
                background: 'rgba(42,125,181,0.04)',
                fontWeight: 500,
              }}
            >
              {f}
            </motion.span>
          ))}
        </div>

        {/* Footer: CTA text + arrow button */}
        <div className="flex items-center justify-between mt-auto pt-4"
          style={{ borderTop: '1px solid rgba(42,125,181,0.1)' }}
        >
          <motion.div whileHover={{ x: 3 }} transition={{ type: 'spring', stiffness: 400 }}>
            <Link
              to={product.to}
              className="text-sm font-semibold"
              style={{ color: '#2a7db5' }}
            >
              {product.cta}
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1, boxShadow: '0 0 18px rgba(42,125,181,0.35)' }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            <Link
              to={product.to}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
              style={{ background: '#2a7db5' }}
            >
              <Icons.ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ─── Decision Layer Card ───────────────────────────────────────────────── */

function DecisionCard({ layer, index }) {
  const Icon = Icons[layer.icon] || Icons.Zap
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.92 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 + index * 0.12 }}
    >
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
        className="rounded-2xl p-6 text-center h-full flex flex-col items-center"
        style={{
          background: 'rgba(22, 30, 42, 0.75)',
          border: '1px solid rgba(255,255,255,0.09)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          fontFamily: "'Public Sans', sans-serif",
        }}
      >
        {/* Icon circle */}
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
          style={{ background: 'rgba(42,125,181,0.25)' }}
        >
          <Icon size={22} style={{ color: '#7ec8e3' }} />
        </div>

        {/* Label */}
        <h3
          className="font-bold text-lg mb-1"
          style={{ color: '#ffffff' }}
        >
          {layer.label}
        </h3>

        {/* Sublabel */}
        <p
          className="text-sm font-semibold mb-3"
          style={{ color: '#4a9fd4' }}
        >
          {layer.sublabel}
        </p>

        {/* Description */}
        <p
          className="text-sm leading-relaxed text-center"
          style={{ color: 'rgba(255,255,255,0.55)' }}
        >
          {layer.description}
        </p>
      </motion.div>
    </motion.div>
  )
}

/* ─── Main Page ─────────────────────────────────────────────────────────── */

export default function InteliHub() {
  const meta = buildPageMeta(
    'AI Solutions Hub, Inteliment',
    "Explore Inteliment's full AI capability in one place: Inteli-AI production systems, Inteli-Labs research IP, and Rubiscape, the no-code Decision Intelligence platform.",
    '/hub'
  )
  const jsonLd = breadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'AI Solutions Hub', path: '/hub' },
  ])

  // S2 heading refs
  const s2Ref = useRef(null)
  const s2InView = useInView(s2Ref, { once: true, margin: '-80px' })

  // S3 heading refs
  const s3Ref = useRef(null)
  const s3InView = useInView(s3Ref, { once: true, margin: '-80px' })

  // S4 proof strip
  const s4Ref = useRef(null)
  const s4InView = useInView(s4Ref, { once: true, margin: '-80px' })

  return (
    <>
      <SEOHead meta={meta} jsonLd={jsonLd} />

      {/* Public Sans font import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;500;600;700;800;900&display=swap');
        .inteli-hub * { font-family: 'Public Sans', sans-serif; }
      `}</style>

      <div className="inteli-hub">
        {/* S1 — Custom Hero */}
        <HeroSectionCustom />

        {/* S2 — AI Products */}
          <section
            className="py-24 overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, #ffffff 0%, #dce8f5 60%, #c8dff0 100%)',
              fontFamily: "'Public Sans', sans-serif",
            }}
          >
            <Container>
              <div ref={s2Ref}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={s2InView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <SectionHeading
                    eyebrow="Our AI Capabilities"
                    title="Three Platforms. One Decision Intelligence System."
                    subtitle="Inteli-AI delivers the solutions. Inteli-Labs builds the IP that powers them. Rubiscape is the platform they run on."
                    light
                    align="center"
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
                {aiProducts.map((product, i) => (
                  <ProductCard key={product.title} product={product} index={i} />
                ))}
              </div>
            </Container>
          </section>

      {/* S3 — What AI Solves / Our DI Approach */}
      <section
            className="relative overflow-hidden"
            style={{
              fontFamily: "'Public Sans', sans-serif",
              paddingTop: '100px',
              paddingBottom: '120px',
              minHeight: '700px',
              marginBottom: '-6px',
            }}
          >
            {/* BG Image — absolutely fills entire section */}
            <div className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
              <img
                src="/assets/intelhub/ourdi-bg.svg"
                alt=""
                aria-hidden="true"
                style={{
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                }}
              />
            </div>

            <Container className="relative" style={{ zIndex: 1 }}>
              <div ref={s3Ref}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={s3InView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <SectionHeading
                    eyebrow="Our DI Approach"
                    title="AI That Operates at Every Level of Your Business."
                    subtitle="Decision Intelligence isn't one thing. It spans four interconnected layers, operational speed, tactical efficiency, strategic foresight, and autonomous action."
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-12">
                {decisionLayers.map((layer, i) => (
                  <DecisionCard key={layer.label} layer={layer} index={i} />
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={s3InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-center mt-10"
              >
                <motion.div whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 400 }}>
                  <Link
                    to="/decision-intelligence"
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-colors px-6 py-3 rounded-full"
                    style={{
                      color: '#7ec8e3',
                      border: '1px solid rgba(126,200,227,0.35)',
                      background: 'rgba(126,200,227,0.05)',
                    }}
                  >
                    Learn about Decision Intelligence <Icons.ArrowRight size={14} />
                  </Link>
                </motion.div>
              </motion.div>
            </Container>
        </section>

        {/* S4 — Proof Strip */}
        <section className="py-12 sm:py-16 bg-[#dce8f0] overflow-hidden border-y border-grey-200/60" ref={s4Ref}>
          <Container>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 px-2 sm:px-4"
              variants={staggerContainer}
              initial="hidden"
              animate={s4InView ? "visible" : "hidden"}
            >
              {proofStrip.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="rounded-xl px-4 sm:px-6 py-5 sm:py-6 cursor-default"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.45)',
                    borderLeft: '4px solid rgba(42,125,181,0.5)',
                    backdropFilter: 'blur(8px)',
                  }}
                  variants={scaleIn}
                  custom={i}
                  whileHover={{
                    y: -6,
                    backgroundColor: 'rgba(255,255,255,0.70)',
                    borderLeftColor: 'rgba(42,125,181,0.9)',
                    boxShadow: '0 12px 32px rgba(42,125,181,0.18)',
                    transition: { duration: 0.25 },
                  }}
                >
                  <motion.div
                    className="font-bold text-3xl sm:text-4xl text-[#2a7db5] mb-1 sm:mb-2"
                    style={{ fontFamily: "'Public Sans', sans-serif" }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={s4InView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.12,
                      type: 'spring',
                      stiffness: 120,
                    }}
                  >
                    
                  <AnimatedCounter value={item.metric} />
              
                  </motion.div>

                  <motion.p
                    className="text-xs sm:text-sm font-semibold text-[#1a3a5c]"
                    style={{ fontFamily: "'Public Sans', sans-serif" }}
                    initial={{ opacity: 0 }}
                    animate={s4InView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.12 + 0.2 }}
                  >
                    {item.label}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* S5 — CTA 
        <CTABanner
          title="Ready to Put AI to Work?"
          subtitle="Start with a conversation, or go straight to the assessment. Either way, we'll give you a clear picture of where to start."
          ctaLabel="Talk to a Specialist"
          ctaTo="/contact"
        />*/}
      </div>
    </>
  )
}