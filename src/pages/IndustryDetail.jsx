import { Navigate, useParams } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import * as Icons from 'lucide-react'
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion'
import { useRef } from 'react'
import SEOHead from '@/components/ui/SEOHead'
import Button from '@/components/ui/Button'
import HeroSection from '@/components/sections/HeroSection'
import CTABanner from '@/components/sections/CTABanner'
import Container from '@/components/ui/Container'
import { buildPageMeta, breadcrumbJsonLd } from '@/utils/seo'
import { industries } from '@/data/industries'
import blbg from '/images/industries/blogs-bg.svg'
import podcbg from '/images/industries/podcast-bg.svg'
import webbg from '/images/industries/webinar-bg.svg'

const diLayerIcons = {
  Data: Icons.Database,
  Insights: Icons.BarChart2,
  Decisions: Icons.Sparkles,
  Actions: Icons.Zap,
}

/* ─────────────────── animation variants ─────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 },
  }),
}

const fadeDown = {
  hidden: { opacity: 0, y: -50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
}

const fadeLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
}

const fadeRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.75 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 },
  }),
}

const blurIn = {
  hidden: { opacity: 0, filter: 'blur(12px)', y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
}

const slideInLeft = {
  hidden: { opacity: 0, x: -120, skewX: 3 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    skewX: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const staggerFast = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
}

/* ─────────────────── reusable InView wrapper ─────────────────── */
function Reveal({ children, variants = fadeUp, custom, className = '', once = true }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      custom={custom}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ═══════════════════ MAIN COMPONENT ═══════════════════ */
export default function IndustryDetail() {
  const { slug } = useParams()
  const industry = industries.find((i) => i.slug === slug)
  if (!industry) return <Navigate to="/industries" replace />

  const Icon = Icons[industry.icon] || Icons.Building2
  const meta = buildPageMeta(
    `${industry.title} Decision Intelligence`,
    industry.challenge,
    `/industries/${slug}`
  )

  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])

  return (
    <>
      <SEOHead
        meta={meta}
        jsonLd={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Industries', path: '/industries' },
          { name: industry.title, path: `/industries/${slug}` },
        ])}
      />

      {/* ══════════════ HERO ══════════════ */}
      {industry.bannerImage ? (
        <section
          ref={heroRef}
          className="relative overflow-hidden mt-16 min-h-[420px] sm:min-h-[520px] lg:min-h-[calc(100vh-4rem)]"
        >
          <motion.img
            src={industry.bannerImage}
            alt={`${industry.title}, Inteliment Decision Intelligence`}
            className="absolute inset-0 w-full h-full object-cover object-right-top"
            style={{ y: heroY, scale: heroScale }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/40 lg:from-navy/80 lg:via-navy/50 lg:to-transparent"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.04) 50%, transparent 60%)',
            }}
            initial={{ x: '-100%' }}
            animate={{ x: '200%' }}
            transition={{ duration: 1.8, delay: 0.6, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute inset-0 flex items-center"
            style={{ opacity: heroOpacity }}
          >
            <div className="w-full px-4 sm:px-6 lg:pl-28 lg:pr-0">
              <div className="max-w-xl lg:max-w-2xl">
                <motion.span
                  className="inline-block px-4 py-1.5 glass rounded-full text-xs sm:text-sm font-display font-semibold text-teal border border-teal/20 mb-4 sm:mb-5"
                  initial={{ opacity: 0, y: -30, scale: 0.85 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  {industry.title}
                </motion.span>
                <motion.h1
                  className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white leading-tight mb-3 sm:mb-4"
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                >
                  {industry.headline.split(' ').map((word, i) => (
                    <motion.span
                      key={i}
                      className="inline-block mr-[0.25em]"
                      variants={{
                        hidden: { opacity: 0, y: 40, rotateX: -20 },
                        visible: {
                          opacity: 1, y: 0, rotateX: 0,
                          transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.4 + i * 0.07 },
                        },
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.h1>
                <motion.p
                  className="text-white/75 font-body text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl"
                  initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.85, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  {industry.subheadline}
                </motion.p>
                <motion.div
                  className="flex flex-row flex-wrap gap-3"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
                    <Button to="/contact" size="md" className="rounded-full !text-white flex-shrink-0">
                      See {industry.title} DI in Action
                      <img src="/assets/home/bt-icon.svg" alt="icon" className="w-4 h-4" />
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
                    <Button
                      to="/industries"
                      variant="secondary"
                      size="md"
                      className="rounded-full !text-[#5BA3D1] !bg-[#ECF4FA] flex-shrink-0"
                    >
                      All Industries
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>
      ) : (
        <HeroSection
          eyebrow={industry.title}
          title={industry.headline}
          subtitle={industry.subheadline}
          ctaPrimary={{ label: `See ${industry.title} DI in Action`, to: '/contact' }}
          ctaSecondary={{ label: 'All Industries', to: '/industries' }}
          variant="compact"
        />
      )}

      {/* ══════════════ CHALLENGE ══════════════ */}
      <section className="py-12 sm:py-16 bg-surface section-light overflow-hidden">
        <Container narrow>
          <motion.div
            className="text-center px-2 sm:px-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
          >
            <motion.div />
            <motion.h2
              className="font-display font-bold text-display-lg text-navy mb-4"
              variants={blurIn}
              custom={0}
            >
              Industry Challenges
            </motion.h2>
            <motion.p
              className="text-sm sm:text-base text-grey-700 font-body leading-relaxed"
              variants={blurIn}
              custom={1}
            >
              {industry.challenge}
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* ══════════════ DI APPROACH + USE CASES ══════════════ */}
      <section
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: '#0f1c2e' }}
      >
        <motion.img
          src="/images/industries/fs-banner.svg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
        />
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(81,142,181,0.12) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5], x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 sm:w-72 h-48 sm:h-72 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(42,125,181,0.10) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
          animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.8, 0.3], x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(126,200,227,0.08) 0%, transparent 70%)',
            filter: 'blur(30px)',
            translateX: '-50%', translateY: '-50%',
          }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-stretch lg:ml-10">
          {/* LEFT — DI Approach */}
          <motion.div
            className="w-full lg:w-[60%] py-10 sm:py-14 px-4 sm:px-8 lg:px-14 flex flex-col justify-start"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.span
              className="inline-block text-[12px] sm:text-[13px] font-semibold text-white/80 border border-white/20 rounded-full px-4 py-1.5 mb-5 sm:mb-6 w-fit"
              style={{ fontFamily: "'Public Sans', sans-serif" }}
              initial={{ opacity: 0, x: -40, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              Our DI Approach
            </motion.span>
            <motion.h2
              className="font-bold text-white text-2xl sm:text-3xl lg:text-[2.25rem] leading-tight mb-4 sm:mb-5"
              style={{ fontFamily: "'Public Sans', sans-serif" }}
              initial={{ opacity: 0, x: -50, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              How the Four Layers Apply
            </motion.h2>
            <motion.p
              className="text-white/65 text-[14px] sm:text-[15px] leading-relaxed mb-8 sm:mb-10 max-w-[560px]"
              style={{ fontFamily: "'Public Sans', sans-serif" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.45 }}
            >
              {industry.approach}
            </motion.p>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:items-stretch lg:flex-nowrap gap-3 lg:gap-0"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              {industry.diLayers.map((layer, idx) => {
                const LayerIcon = diLayerIcons[layer.layer] || Icons.Circle
                const isLast = idx === industry.diLayers.length - 1
                return (
                  <div key={layer.layer} className="flex items-center lg:flex-1 lg:min-w-0">
                    <motion.div
                      className="flex flex-col items-center text-center gap-2 sm:gap-3 rounded-xl p-4 w-full h-full cursor-default"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.10)',
                        minHeight: '160px',
                      }}
                      variants={{
                        hidden: { opacity: 0, y: 50, scale: 0.88, rotateY: 15 },
                        visible: {
                          opacity: 1, y: 0, scale: 1, rotateY: 0,
                          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: idx * 0.13 },
                        },
                      }}
                      whileHover={{
                        backgroundColor: 'rgba(81,142,181,0.15)',
                        borderColor: 'rgba(81,142,181,0.45)',
                        y: -8,
                        boxShadow: '0 20px 40px rgba(42,125,181,0.2)',
                        transition: { duration: 0.3 },
                      }}
                    >
                      <div
                        className="w-11 sm:w-12 h-11 sm:h-12 rounded-lg flex items-center justify-center mt-1 shrink-0"
                        style={{ backgroundColor: 'rgba(81,142,181,0.15)' }}
                      >
                        <LayerIcon size={24} style={{ color: '#518EB5' }} />
                      </div>
                      <p
                        className="text-[13px] sm:text-[15px] font-bold text-white"
                        style={{ fontFamily: "'Public Sans', sans-serif" }}
                      >
                        {layer.layer}
                      </p>
                      <p
                        className="text-[12px] sm:text-[14px] text-white/50 leading-snug"
                        style={{ fontFamily: "'Public Sans', sans-serif" }}
                      >
                        {layer.description}
                      </p>
                    </motion.div>
                    {!isLast && (
                      <motion.div
                        className="hidden lg:flex shrink-0 px-1 sm:px-3 items-center self-center"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.18 + 0.6, type: 'spring', stiffness: 300 }}
                      >
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.3 }}
                        >
                          <ArrowRight size={18} className="text-white/30" />
                        </motion.div>
                      </motion.div>
                    )}
                  </div>
                )
              })}
            </motion.div>
          </motion.div>

          {/* RIGHT — Use Cases */}
          <motion.div
            className="w-full lg:w-[40%] py-10 sm:py-14 px-4 sm:px-10 lg:px-20 flex flex-col justify-start"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.h3
              className="font-bold text-white text-2xl sm:text-[2rem] mb-5 sm:mb-6 leading-tight"
              style={{ fontFamily: "'Public Sans', sans-serif" }}
              initial={{ opacity: 0, x: 50, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              Use Cases
            </motion.h3>
            <motion.div
              className="space-y-2 sm:space-y-3 mb-8 sm:mb-10"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {industry.useCases.map((uc, i) => (
                <motion.div
                  key={uc}
                  className="rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-[14px] text-[#FFFFFF] leading-snug cursor-default"
                  style={{
                    fontFamily: "'Public Sans', sans-serif",
                    backgroundColor: 'rgba(255,255,255,0.12)',
                    border: '1px solid rgba(255,255,255,0.18)',
                  }}
                  variants={{
                    hidden: { opacity: 0, x: 60, scale: 0.95 },
                    visible: {
                      opacity: 1, x: 0, scale: 1,
                      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
                    },
                  }}
                  whileHover={{
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    borderColor: 'rgba(255,255,255,0.35)',
                    x: 6,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                    transition: { duration: 0.2 },
                  }}
                >
                  {uc}
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.h4
                className="font-bold text-white text-xl sm:text-[1.8rem] mb-3 sm:mb-4"
                style={{ fontFamily: "'Public Sans', sans-serif" }}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Technology Stack
              </motion.h4>
              <motion.div
                className="flex flex-wrap gap-2"
                variants={staggerFast}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {industry.platforms.map((p, i) => (
                  <motion.span
                    key={p}
                    className="text-[11px] sm:text-[12px] font-semibold text-white rounded-full px-3 py-1.5 cursor-default"
                    style={{
                      fontFamily: "'Public Sans', sans-serif",
                      border: '1px solid rgba(255,255,255,0.35)',
                      backgroundColor: 'rgba(255,255,255,0.10)',
                    }}
                    variants={{
                      hidden: { opacity: 0, scale: 0.6, y: 15 },
                      visible: {
                        opacity: 1, scale: 1, y: 0,
                        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 },
                      },
                    }}
                    whileHover={{
                      backgroundColor: 'rgba(81,142,181,0.3)',
                      borderColor: 'rgba(81,142,181,0.7)',
                      scale: 1.08,
                      y: -2,
                      boxShadow: '0 4px 14px rgba(42,125,181,0.3)',
                    }}
                  >
                    {p}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════ IMPACT METRICS ══════════════ */}
      <section className="py-12 sm:py-16 bg-[#dce8f0] overflow-hidden">
        <Container>
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 px-2 sm:px-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {industry.metrics.map((m, i) => (
              <motion.div
                key={m.label}
                className="rounded-xl px-4 sm:px-6 py-5 sm:py-6 cursor-default"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.45)',
                  borderLeft: '4px solid rgba(42,125,181,0.5)',
                  backdropFilter: 'blur(8px)',
                }}
                variants={{
                  hidden: { opacity: 0, y: 60, scale: 0.85, rotateX: 20 },
                  visible: {
                    opacity: 1, y: 0, scale: 1, rotateX: 0,
                    transition: {
                      duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: i * 0.13,
                      rotateX: { duration: 0.6 },
                    },
                  },
                }}
                whileHover={{
                  y: -10,
                  backgroundColor: 'rgba(255,255,255,0.75)',
                  borderLeftColor: 'rgba(42,125,181,1)',
                  boxShadow: '0 20px 40px rgba(42,125,181,0.22)',
                  transition: { duration: 0.28 },
                }}
              >
                <motion.div
                  className="font-bold text-3xl sm:text-4xl text-[#2a7db5] mb-1 sm:mb-2"
                  style={{ fontFamily: "'Public Sans', sans-serif" }}
                  initial={{ opacity: 0, scale: 0.4, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.75,
                    delay: i * 0.13 + 0.15,
                    type: 'spring',
                    stiffness: 150,
                    damping: 12,
                  }}
                >
                  {m.value}
                </motion.div>
                <motion.p
                  className="text-xs sm:text-sm font-semibold text-[#1a3a5c]"
                  style={{ fontFamily: "'Public Sans', sans-serif" }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.13 + 0.35 }}
                >
                  {m.label}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ══════════════ CONNECT WITH US MORE ══════════════ */}
      {/* ══════════════ CONNECT WITH US MORE ══════════════ */}
<section
  style={{
    background: "linear-gradient(to bottom, #ffffff 0%, #B0D3E9 100%)",
    fontFamily: "'Public Sans', sans-serif",
    padding: "clamp(48px, 7vw, 96px) clamp(16px, 5vw, 48px)",
  }}
>
  {/* Section Header */}
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    style={{ textAlign: "center", marginBottom: "48px" }}
  >
    <motion.span
      variants={fadeUp}
      style={{
        display: "inline-block",
        border: "1px solid rgba(91,163,209,0.45)",
        borderRadius: "999px",
        padding: "5px 18px",
        fontSize: "13px",
        fontWeight: 600,
        color: "#2a6fa8",
        background: "rgba(255,255,255,0.6)",
        marginBottom: "16px",
        letterSpacing: "0.02em",
      }}
    >
      Connect with us more
    </motion.span>

    <h2
      style={{
        fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)",
        fontWeight: 800,
        color: "#111827",
        lineHeight: 1.2,
        margin: "0 0 12px 0",
      }}
    >
      Data-Driven Excellence
    </h2>

    <p style={{ fontSize: "15px", color: "#4b5a6a", margin: 0 }}>
      Ready to Drive Your Success? Let's Talk!
    </p>
  </motion.div>

  {/* Outer Grid: Blog (left) + Podcast/Webinar (right) */}
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
      gap: "20px",
      alignItems: "stretch",
    }}
  >
    {/* ── LEFT: Blog Card ── */}
    <motion.div
      variants={fadeLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{
        y: -8,
        boxShadow: "0 20px 48px rgba(91,163,209,0.18)",
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      style={{
        background: "white",
        borderRadius: "16px",
        border: "1px solid rgba(91,163,209,0.30)",
        overflow: "hidden",
        display: "flex",
        cursor: "pointer",
        minHeight: "280px",
      }}
    >
      {/* Content — 60% */}
      <div
        style={{
          flex: "0 0 60%",
          padding: "28px 24px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <span
            style={{
              display: "inline-block",
              border: "1px solid rgba(91,163,209,0.5)",
              borderRadius: "999px",
              padding: "3px 14px",
              fontSize: "12px",
              fontWeight: 600,
              color: "#2a6fa8",
              background: "rgba(91,163,209,0.08)",
              marginBottom: "16px",
            }}
          >
            Blogs
          </span>

          <h3
            style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              fontWeight: 800,
              color: "#111827",
              lineHeight: 1.3,
              margin: "0 0 12px 0",
            }}
          >
            The Future of Data Science Trends and Predictions
          </h3>

          <p
            style={{
              fontSize: "13px",
              color: "#4b5a6a",
              lineHeight: 1.65,
              margin: "0 0 20px 0",
            }}
          >
            Today, we live in a world where digital experiences are in the driving seat for nearly every aspect of our lives.
          </p>
        </div>

        
         <a href="/insights"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "14px",
            fontWeight: 700,
            color: "#2a6fa8",
            textDecoration: "none",
          }}
        >
          View All Industries
          <span style={{ fontSize: "18px", lineHeight: 1 }}>→</span>
        </a>
      </div>

      {/* Image — 40% */}
      <div
        style={{
          flex: "0 0 40%",
          backgroundImage: `url(${blbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
    </motion.div>

    {/* ── RIGHT: Podcast + Webinar 50/50 ── */}
    <motion.div
      variants={fadeRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px",
        alignItems: "stretch",
      }}
    >
      {[
        { tag: "Podcast", bg: podcbg },
        { tag: "Webinar", bg: webbg },
      ].map(({ tag, bg }) => (
        <motion.div
          key={tag}
          whileHover={{
            y: -8,
            boxShadow: "0 20px 48px rgba(91,163,209,0.18)",
            transition: { duration: 0.25, ease: "easeOut" },
          }}
          style={{
            background: "white",
            borderRadius: "16px",
            border: "1px solid rgba(91,163,209,0.25)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            cursor: "pointer",
            minHeight: "280px",
          }}
        >
          {/* Row 1 — Image */}
          <div
            style={{
              height: "140px",
              flexShrink: 0,
              background: "linear-gradient(135deg, #deedf7 0%, #eaf4fb 100%)",
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />

          {/* Row 2 — Label */}
          <div style={{ padding: "14px 18px 0 18px" }}>
            <span
              style={{
                display: "inline-block",
                border: "1px solid rgba(91,163,209,0.45)",
                borderRadius: "999px",
                padding: "4px 14px",
                fontSize: "12px",
                fontWeight: 600,
                color: "#2a6fa8",
                background: "rgba(91,163,209,0.07)",
              }}
            >
              {tag}
            </span>
          </div>

          {/* Row 3 — Title */}
          <div style={{ padding: "8px 18px 0 18px" }}>
            <h3
              style={{
                fontSize: "15px",
                fontWeight: 800,
                color: "#0f1c2e",
                lineHeight: 1.3,
                margin: 0,
              }}
            >
              Operational Analytics Automotive
            </h3>
          </div>

          {/* Row 4 — Description */}
          <div style={{ padding: "6px 18px 0 18px", flex: 1 }}>
            <p
              style={{
                fontSize: "13px",
                color: "#4b5a6a",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Our customer, one of India's leading automotive companies, was looking at innovating for growth....
            </p>
          </div>

          {/* Row 5 — Bottom-right arrow button */}
          <div
            style={{
              padding: "12px 18px 16px 18px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                border: "1px solid rgba(91,163,209,0.35)",
                background: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(4px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(91,163,209,0.15)",
              }}
            >
              <span style={{ fontSize: "16px", color: "#2a6fa8", lineHeight: 1, marginLeft: "2px" }}>
                <ArrowRight size={18} />
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>
    </>
  )
}