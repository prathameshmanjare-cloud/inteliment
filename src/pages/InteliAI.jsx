import { useState } from 'react'
import { Link } from 'react-router-dom'
import * as Icons from 'lucide-react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef } from 'react'
import SEOHead from '@/components/ui/SEOHead'
import CTABanner from '@/components/sections/CTABanner'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import GlassCard from '@/components/ui/GlassCard'
import { buildPageMeta, breadcrumbJsonLd } from '@/utils/seo'
import s4Bg from '@/assets/inteliai/s4-bg.svg'
import hBg from '@/assets/inteliai/hero-bg.svg'
import s5Bg from '@/assets/inteliai/cover.svg'
import { no } from 'zod/locales'

/* ── data ── */
const aiSolutions = [
  {
    icon: 'Brain',
    title: 'Predictive Decision Systems',
    description: "ML models that predict, and then recommend the next best action. Not just 'churn is likely', 'contact these accounts, in this order, with this message.'",
    tags: ['Forecasting', 'Risk Scoring', 'Churn Prevention', 'Rubiscape'],
  },
  {
    icon: 'Bot',
    title: 'AI Decision Agents',
    description: 'Autonomous agents that monitor conditions, make decisions, and execute across operational workflows, from fraud detection to pricing to supply chain routing. No queue. No delay.',
    tags: ['LLM Orchestration', 'LangChain', 'Azure OpenAI', 'Rubiscape'],
  },
  {
    icon: 'Cpu',
    title: 'GenAI Applications',
    description: 'Enterprise-grade generative AI built on your data. Internal knowledge assistants, document intelligence, contract analysis, and reporting automation, governed, auditable, and production-ready.',
    tags: ['RAG', 'Embeddings', 'Document AI', 'Rubiscape'],
  },
  {
    icon: 'BarChart2',
    title: 'AI-Augmented Analytics',
    description: 'Natural language queries, AI-generated summaries, and automated insight narratives layered on your existing BI stack. Your analysts ask questions. The system answers them.',
    tags: ['NL2SQL', 'AutoInsight', 'Power BI Copilot', 'Rubiscape'],
  },
  {
    icon: 'Shield',
    title: 'AI Risk & Compliance',
    description: "Explainable AI for regulated environments. APRA, GDPR, Basel IV. Full audit trails, bias testing, and model governance, because compliance isn't optional.",
    tags: ['XAI', 'Model Governance', 'Regulatory', 'Rubiscape'],
  },
  {
    icon: 'Network',
    title: 'AI Data Infrastructure',
    description: 'Feature stores, ML pipelines, vector databases, and model serving infrastructure that supports AI at production scale, the platform layer most vendors skip.',
    tags: ['MLflow', 'Feature Store', 'Vector DB', 'Rubiscape'],
  },
]

const platformEcosystem = [
  { category: 'Cloud', items: ['Azure', 'AWS', 'GCP'] },
  { category: 'Data Platforms', items: ['Rubiscape', 'Snowflake', 'Databricks', 'dbt'] },
  { category: 'AI / ML', items: ['Rubiscape', 'Azure OpenAI', 'LangChain', 'Hugging Face', 'PyTorch', 'MLflow'] },
  { category: 'Orchestration', items: ['Rubiscape', 'Airflow', 'Kafka', 'Spark'] },
  { category: 'Visualization', items: ['Rubiscape', 'Power BI', 'Tableau', 'Looker'] },
  { category: 'Proprietary IP', items: ['Rubiscape', 'Inteli-Labs Toolkit'] },
]

const differentiators = [
  {
    icon: 'PackageCheck',
    title: 'Production-First Engineering',
    description: "We deliver governed, monitored, SLA-backed systems, not Jupyter notebooks. Your team inherits something they can run, not something they have to rebuild.",
  },
  {
    icon: 'Layers',
    title: 'Domain-Trained Models',
    description: "Pre-built model templates across 12 industry verticals. You're not starting from scratch, you're starting from something that already works in your sector.",
  },
  {
    icon: 'Scale',
    title: 'Regulated Industry Experience',
    description: 'APRA, GDPR, Basel IV, HIPAA. Compliance architecture is part of the delivery, not a retrofit after the fact.',
  },
  {
    icon: 'UserCheck',
    title: 'Human-in-the-Loop by Design',
    description: "Every high-stakes AI system we build includes escalation paths, exception routing, and audit trails. AI your governance team can trust, not just tolerate.",
  },
]

/* ── animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: d } }),
}
const fadeIn = {
  hidden: { opacity: 0 },
  visible: (d = 0) => ({ opacity: 1, transition: { duration: 0.6, ease: 'easeOut', delay: d } }),
}
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

/* ── Solution Card ── */
function SolutionCard({ solution, index }) {
  const Icon = Icons[solution.icon] || Icons.Brain

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      className="relative rounded-2xl overflow-hidden flex flex-col h-full"
      style={{
        background: 'linear-gradient(145deg, #dbeeff 0%, #eaf4ff 60%, #f0f8ff 100%)',
        border: '1px solid rgba(42,125,181,0.15)',
        minHeight: '380px',
        padding: '32px 28px 28px',
      }}
    >
      {/* Watermark icon */}
      <div
        className="absolute right-4 top-4 opacity-[0.12] pointer-events-none"
        aria-hidden="true"
      >
        <Icon size={120} style={{ color: '#2a7db5' }} />
      </div>

      {/* Title */}
      <h3
        className="font-black leading-tight mb-auto relative z-10"
        style={{ fontSize: 'clamp(1.4rem, 2.2vw, 1.9rem)', color: '#2a7db5', maxWidth: '70%' }}
      >
        {solution.title}
      </h3>

      {/* Description */}
      <p
        className="text-sm leading-relaxed mt-6 mb-5 relative z-10"
        style={{ color: '#3a5068' }}
      >
        {solution.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 relative z-10">
        {solution.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 rounded-full"
            style={{
              background: 'rgba(255,255,255,0.6)',
              color: '#2a7db5',
              border: '1px solid rgba(42,125,181,0.2)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

/* ── Mobile Carousel ── */
function MobileSolutionCarousel() {
  const [current, setCurrent] = useState(0)
  const total = aiSolutions.length

  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const next = () => setCurrent((c) => (c + 1) % total)

  return (
    <div className="md:hidden mt-10">
      <div className="overflow-hidden rounded-2xl">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <SolutionCard solution={aiSolutions[current]} index={0} />
        </motion.div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{ background: '#2a7db5', color: '#fff' }}
        >
          <Icons.ChevronLeft size={18} />
        </button>

        <div className="flex gap-2 items-center">
          {aiSolutions.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="rounded-full transition-all"
              style={{
                width: i === current ? '28px' : '8px',
                height: '8px',
                background: i === current ? '#2a7db5' : '#b8d4ea',
              }}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{ background: '#2a7db5', color: '#fff' }}
        >
          <Icons.ChevronRight size={18} />
        </button>
      </div>
    </div>
  )
}

/* ── Hero ── */
function HeroSectionInteliAI() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={ref}
      className="relative flex items-center overflow-hidden"
      style={{ fontFamily: "'Public Sans', sans-serif", minHeight: '500px' }}
    >
      <motion.div className="absolute inset-0 w-full h-full" style={{ y: bgY }}>
        <img
          src={hBg}
          alt=""
          aria-hidden="true"
          style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
      </motion.div>

      <motion.div
        className="relative z-10 w-full px-8 md:px-16 lg:px-24"
        style={{ y: contentY, opacity, paddingTop: '160px', paddingBottom: '80px' }}
      >
        <div className="max-w-2xl">
          <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0} className="mb-5">
            <span
              className="inline-flex items-center px-3 py-1 rounded-full text-[14px] font-bold"
              style={{
                border: '1px solid rgba(255,255,255,0.25)',
                background: 'rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.75)',
              }}
            >
              Inteli-AI
            </span>
          </motion.div>

          <motion.h1
            className="font-black text-white leading-[1] mb-5"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {['AI That Goes Into Production.', 'Not Just Into Slides.'].map((line, i) => (
              <motion.span
                key={i}
                className="block"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1, y: 0,
                    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.12 },
                  },
                }}
              >
                {line}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={0.5}
            className="leading-relaxed mb-8"
            style={{ color: 'rgba(255,255,255,0.65)', fontSize: 'clamp(0.9rem, 1.4vw, 1rem)', maxWidth: '520px' }}
          >
            Most AI projects stall between proof-of-concept and production. Inteliment has spent 22 years learning what it takes to go the other way, building AI systems that work in the real world, at enterprise scale.
          </motion.p>

          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={0.7}
            className="flex flex-wrap gap-3"
          >
            <motion.a
              href="https://inteliment.ai"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm text-white"
              style={{ background: 'linear-gradient(135deg, #3b9fd4, #2a7db5)' }}
              whileHover={{ scale: 1.04, boxShadow: '0 0 24px rgba(42,125,181,0.5)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <Icons.Layers size={15} />
              Explore Inteli-AI
            </motion.a>
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-white transition-colors"
                style={{ border: '1px solid rgba(255,255,255,0.25)', background: 'rgba(255,255,255,0.06)' }}
              >
                Talk to a Specialist
                <Icons.ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

/* ── Inteli-Labs Section ── */
function InteliLabsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700;800;900&display=swap');`}</style>

      <section
        ref={ref}
        className="relative overflow-hidden"
        style={{
          fontFamily: "'Public Sans', sans-serif",
          paddingTop: '96px',
          paddingBottom: '96px',
          background: 'linear-gradient(160deg, #e8f4fb 0%, #c8dff0 50%, #b8d4e8 100%)',
        }}
      >
        {/* Background SVG overlay */}
        <div className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
          <img
            src={s5Bg}
            alt=""
            aria-hidden="true"
            style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        <Container className="relative" style={{ zIndex: 1 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

            {/* ── LEFT: Text content ── */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{ zIndex: 2 }}
            >
              {/* Pill badge */}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
                style={{
                  border: '1px solid rgba(105,165,203,0.5)',
                  color: '#3a85b5',
                  background: 'rgba(255,255,255,0.6)',
                  backdropFilter: 'blur(8px)',
                  letterSpacing: '0.01em',
                }}
              >
                Inteli-Labs
              </motion.span>

              {/* Heading */}
              <motion.h2
                className="font-black leading-tight mb-5"
                style={{
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  color: '#495057',
                  letterSpacing: '-0.02em',
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                Where AI research becomes production IP.
              </motion.h2>

              {/* Paragraph */}
              <motion.p
                className="leading-relaxed mb-7"
                style={{ color: '#495057', fontSize: '0.95rem', maxWidth: '480px' }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Inteli-Labs is Inteliment's dedicated AI research lab. It produces the models, toolkits, and frameworks that power our client engagements, and it's where we prototype the next wave of Decision Intelligence capabilities.
              </motion.p>

              {/* Bullet list */}
              <ul className="space-y-3 mb-8">
                {[
                  'GenAI agent toolkits for enterprise decision workflows',
                  'Pre-built ML models across 12 industry verticals',
                  'Rubiscape, our proprietary no-code DI platform',
                ].map((item, i) => (
                  <motion.li
                    key={item}
                    className="flex items-start gap-2.5 text-sm"
                    style={{ color: '#495057' }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  >
                    <Icons.SparkleIcon size={15} style={{ color: '#69a5cb', marginTop: '3px', flexShrink: 0 }} />
                    {item}
                  </motion.li>
                ))}
              </ul>

              {/* CTA */}
              <motion.div whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 400 }}>
                <Link
                  to="/inteli-labs"
                  className="inline-flex items-center gap-2 text-sm font-semibold"
                  style={{ color: '#3a85b5' }}
                >
                  Explore Inteli-Labs <Icons.ArrowRight size={14} />
                </Link>
              </motion.div>
            </motion.div>
            {/* ── END LEFT ── */}

            {/* ── RIGHT: Floating cards diagram ── */}
            <motion.div
              className="relative w-full"
              style={{ height: '400px', zIndex: 2 }}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            >
              {/* Radial glow */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: 260,
                  height: 260,
                  background: 'radial-gradient(circle, rgba(105,165,203,0.22) 0%, transparent 70%)',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />

              {/* SVG connector lines */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ zIndex: 1 }}
                overflow="visible"
              >
                <line x1="50%" y1="50%" x2="50%" y2="13%" stroke="rgba(105,165,203,0.4)" strokeWidth="1" strokeDasharray="5 5" />
                <line x1="50%" y1="50%" x2="50%" y2="87%" stroke="rgba(105,165,203,0.4)" strokeWidth="1" strokeDasharray="5 5" />
                <line x1="50%" y1="50%" x2="10%" y2="50%" stroke="rgba(105,165,203,0.4)" strokeWidth="1" strokeDasharray="5 5" />
                <line x1="50%" y1="50%" x2="90%" y2="50%" stroke="rgba(105,165,203,0.4)" strokeWidth="1" strokeDasharray="5 5" />
              </svg>

              {/* Center pill */}
              <motion.div
                className="absolute flex items-center gap-2 px-4 py-2.5 rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  background: 'rgba(28, 46, 68, 0.90)',
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                  border: '1px solid rgba(105,165,203,0.4)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
                  whiteSpace: 'nowrap',
                  zIndex: 10,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.35 }}
              >
                <div
                  className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(105,165,203,0.25)' }}
                >
                  <Icons.FlaskConical size={13} style={{ color: '#7ec8e3' }} />
                </div>
                <span className="font-bold text-white text-xs">Inteli-Labs</span>
              </motion.div>

              {/* Card — TOP */}
              <motion.div
                className="absolute rounded-2xl text-xs font-semibold text-center"
                style={{
                  top: '6%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  padding: '10px 18px',
                  background: 'rgba(255,255,255,0.85)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(105,165,203,0.2)',
                  boxShadow: '0 4px 20px rgba(42,125,181,0.08)',
                  color: '#4a90b8',
                  whiteSpace: 'nowrap',
                  zIndex: 5,
                }}
                initial={{ opacity: 0, y: -16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.45 }}
              >
                9+ proprietary AI assets
              </motion.div>

              {/* Card — LEFT */}
              <motion.div
                className="absolute rounded-2xl text-xs font-semibold text-center"
                style={{
                  top: '50%',
                  left: '1%',
                  transform: 'translateY(-50%)',
                  padding: '10px 14px',
                  maxWidth: '130px',
                  background: 'rgba(255,255,255,0.85)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(105,165,203,0.2)',
                  boxShadow: '0 4px 20px rgba(42,125,181,0.08)',
                  color: '#4a90b8',
                  lineHeight: '1.4',
                  zIndex: 5,
                }}
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Production-ready IP
              </motion.div>

              {/* Card — RIGHT */}
              <motion.div
                className="absolute rounded-2xl text-xs font-semibold text-center"
                style={{
                  top: '50%',
                  right: '1%',
                  transform: 'translateY(-50%)',
                  padding: '10px 14px',
                  maxWidth: '140px',
                  background: 'rgba(255,255,255,0.85)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(105,165,203,0.2)',
                  boxShadow: '0 4px 20px rgba(42,125,181,0.08)',
                  color: '#4a90b8',
                  lineHeight: '1.4',
                  zIndex: 5,
                }}
                initial={{ opacity: 0, x: 16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.55 }}
              >
                Available to clients & partners
              </motion.div>

              {/* Card — BOTTOM */}
              <motion.div
                className="absolute rounded-2xl text-xs font-semibold text-center"
                style={{
                  bottom: '6%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  padding: '10px 18px',
                  background: 'rgba(255,255,255,0.85)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(105,165,203,0.2)',
                  boxShadow: '0 4px 20px rgba(42,125,181,0.08)',
                  color: '#4a90b8',
                  whiteSpace: 'nowrap',
                  zIndex: 5,
                }}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Constantly evolving research agenda
              </motion.div>

            </motion.div>
            {/* ── END RIGHT ── */}

          </div>
        </Container>
      </section>
    </>
  )
}



/* ── Paginated Solution Grid (3 per page) ── */
function PaginatedSolutionGrid() {
  const [page, setPage] = useState(0)
  const perPage = 3
  const totalPages = Math.ceil(aiSolutions.length / perPage)
  const visible = aiSolutions.slice(page * perPage, page * perPage + perPage)

  return (
    <div className="mt-12">
      {/* Cards */}
      <motion.div
        key={page}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {visible.map((solution, i) => (
          <SolutionCard key={solution.title} solution={solution} index={i} />
        ))}
      </motion.div>

      {/* Pagination controls */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={() => setPage((p) => Math.max(0, p - 1))}
          disabled={page === 0}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
          style={{
            background: page === 0 ? 'rgba(42,125,181,0.15)' : '#2a7db5',
            color: page === 0 ? '#2a7db5' : '#fff',
            cursor: page === 0 ? 'not-allowed' : 'pointer',
          }}
        >
          <Icons.ChevronLeft size={18} />
        </button>

        <div className="flex gap-2 items-center">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className="rounded-full transition-all"
              style={{
                width: i === page ? '28px' : '8px',
                height: '8px',
                background: i === page ? '#2a7db5' : '#b8d4ea',
              }}
            />
          ))}
        </div>

        <button
          onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
          disabled={page === totalPages - 1}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
          style={{
            background: page === totalPages - 1 ? 'rgba(42,125,181,0.15)' : '#2a7db5',
            color: page === totalPages - 1 ? '#2a7db5' : '#fff',
            cursor: page === totalPages - 1 ? 'not-allowed' : 'pointer',
          }}
        >
          <Icons.ChevronRight size={18} />
        </button>
      </div>
    </div>
  )
}

/* ── Page ── */
export default function InteliAI() {
  const meta = buildPageMeta(
    'Inteli-AI, Decision Intelligence & AI Solutions',
    'Inteliment Inteli-AI: production-grade AI solutions for enterprise decision intelligence, predictive systems, AI agents, GenAI applications, and autonomous decision workflows.',
    '/inteli-ai'
  )
  const jsonLd = breadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Inteli-AI', path: '/inteli-ai' },
  ])

  return (
    <>
      <SEOHead meta={meta} jsonLd={jsonLd} />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;500;600;700;800;900&display=swap');
        .inteliai-page * { font-family: 'Public Sans', sans-serif; }
      `}</style>

      <div className="inteliai-page">

        {/* S1 — Hero */}
        <HeroSectionInteliAI />

        {/* S2 — AI Solutions Grid */}
        <section
          className="py-20 overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #ffffff 0%, #f0f7ff 60%, #e8f2fb 100%)',
            borderRadius: '60px 60px 0 0',
            marginTop: '0px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Container>
            <ScrollReveal>
              <SectionHeading
                eyebrow="AI Solutions"
                title="Six AI Capabilities. All in Production for Enterprise Clients."
                subtitle="We don't build prototypes for internal demos. Every solution listed here has been delivered, monitored, and scaled for enterprise clients."
                light
                align="center"
              />
            </ScrollReveal>

            {/* Paginated Grid — shows 3 cards at a time */}
            <PaginatedSolutionGrid />

          </Container>
        </section>

         {/* S3 — Platform Ecosystem */}
          <section
            className="py-28"
            style={{ background: 'linear-gradient(180deg, #0E1115 41%, #1F272E 85%, #23303A 100%)' }}
          >
            <Container>
              <ScrollReveal>
                <SectionHeading
                  eyebrow="Technology Stack"
                  title="Built on the Platforms Your Enterprise Already Uses."
                  subtitle="Inteliment works with your existing investments, extending them with AI rather than replacing them."
                />
              </ScrollReveal>

              <div
                className="grid grid-cols-1 md:grid-cols-3 mt-12 max-w-5xl mx-auto rounded-2xl overflow-hidden"
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.10)',
                  boxShadow: '0 0 0 1px rgba(255,255,255,0.03) inset, 0 0 80px rgba(56,189,248,0.04), 0 32px 64px rgba(0,0,0,0.5)',
                }}
              >
                {platformEcosystem.map((group, i) => {
                  const isBottomRow = i >= 3;
                  const isLastInRow = (i + 1) % 3 === 0;

                  const iconMap = {
                    Cloud: (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                      </svg>
                    ),
                    'Data Platforms': (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5" />
                        <path d="M2 12l10 5 10-5" />
                      </svg>
                    ),
                    'AI / ML': (
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        {/* Brain left lobe */}
                        <path d="M9.5 2A2.5 2.5 0 0 0 7 4.5c0 .33.07.64.18.93A3 3 0 0 0 5 8a3 3 0 0 0 .5 1.68A2.5 2.5 0 0 0 4 12a2.5 2.5 0 0 0 1.5 2.28A3 3 0 0 0 7 18a2.5 2.5 0 0 0 2.5 2.5V2z" />
                        {/* Brain right lobe */}
                        <path d="M14.5 2A2.5 2.5 0 0 1 17 4.5c0 .33-.07.64-.18.93A3 3 0 0 1 19 8a3 3 0 0 1-.5 1.68A2.5 2.5 0 0 1 20 12a2.5 2.5 0 0 1-1.5 2.28A3 3 0 0 1 17 18a2.5 2.5 0 0 1-2.5 2.5V2z" />
                        {/* Circuit nodes */}
                        <line x1="12" y1="6" x2="14" y2="6" />
                        <circle cx="15" cy="6" r="1" fill="#38bdf8" stroke="none" />
                        <line x1="12" y1="10" x2="15" y2="10" />
                        <circle cx="16" cy="10" r="1" fill="#38bdf8" stroke="none" />
                        <line x1="12" y1="14" x2="14" y2="14" />
                        <circle cx="15" cy="14" r="1" fill="#38bdf8" stroke="none" />
                      </svg>
                    ),
                    Orchestration: (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </svg>
                    ),
                    Visualization: (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                        <polyline points="16 7 22 7 22 13" />
                      </svg>
                    ),
                    'Proprietary IP': (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                        <circle cx="12" cy="20" r="1" fill="#38bdf8" stroke="none" />
                      </svg>
                    ),
                  };

                  return (
                    <ScrollReveal key={group.category} delay={i * 0.08}>
                      <div
                        className="relative p-8 h-full"
                      >
                        {/* RIGHT DIVIDER */}
                        {!isLastInRow && (
                          <div className="pointer-events-none absolute top-0 right-0 h-full w-[1px]">
                            <div
                              className="h-full w-full"
                              style={{
                                background: 'linear-gradient(to bottom, transparent, #69A5CB, transparent)',
                                opacity: 0.8,
                              }}
                            />
                          </div>
                        )}

                        {/* BOTTOM DIVIDER */}
                        {!isBottomRow && (
                          <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[1px]">
                            <div
                              className="h-full w-full"
                              style={{
                                background: 'linear-gradient(to right, transparent, #69A5CB, transparent)',
                                opacity: 0.8,
                              }}
                            />
                          </div>
                        )}
                        
                        

                        {/* Category header — icon + label */}
                        <div className="flex items-center gap-3 mb-6">
                          <div
                            style={{
                              width: 36,
                              height: 36,
                              borderRadius: 10,
                              background: 'rgba(56,189,248,0.10)',
                              border: '1px solid rgba(56,189,248,0.25)',
                              boxShadow: '0 0 14px rgba(56,189,248,0.12) inset, 0 0 8px rgba(56,189,248,0.08)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                            }}
                          >
                            {iconMap[group.category] ?? (
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.6">
                                <circle cx="12" cy="12" r="9" />
                              </svg>
                            )}
                          </div>
                          <p
                            style={{
                              margin: 0,
                              fontSize: 18,
                              fontWeight: 700,
                              color: '#f0f6ff',
                              letterSpacing: '0.01em',
                            }}
                          >
                            {group.category}
                          </p>
                        </div>

                        {/* Pills — center aligned */}
                        <div className="flex flex-wrap gap-2 justify-center">
                          {group.items.map((item) => (
                            <span
                              key={item}
                              style={{
                                fontSize: 13,
                                padding: '6px 16px',
                                borderRadius: 9999,
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.12)',
                                color: 'rgba(255,255,255,0.65)',
                                letterSpacing: '0.01em',
                                backdropFilter: 'blur(4px)',
                                WebkitBackdropFilter: 'blur(4px)',
                                transition: 'all 0.2s ease',
                                cursor: 'default',
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(56,189,248,0.09)';
                                e.currentTarget.style.border = '1px solid rgba(56,189,248,0.32)';
                                e.currentTarget.style.color = '#7dd3fc';
                                e.currentTarget.style.boxShadow = '0 0 12px rgba(56,189,248,0.18)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                e.currentTarget.style.border = '1px solid rgba(255,255,255,0.12)';
                                e.currentTarget.style.color = 'rgba(255,255,255,0.65)';
                                e.currentTarget.style.boxShadow = 'none';
                              }}
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </Container>
          </section>
        {/* S4 — Why Inteliment */}
                <section
          className="py-20 overflow-hidden relative"
          style={{ background: 'linear-gradient(180deg, #f8fbff 0%, #dce8f5 100%)',borderRadius: '60px 60px 0 0', marginTop: '-50px' }}
        >
          <img
            src={s4Bg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          />

          <Container className="relative z-10">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Why Inteliment"
                title="We Don't Hand Over Notebooks. We Hand Over Systems."
                subtitle="The gap between a working AI demo and a governed, production-grade system is where most projects fail. We close that gap, by design."
                light
                align="center"
              />
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
              {differentiators.map((item, i) => {

                const decorativeIcon = {
                  'Production-First Engineering': (
                    <svg width="88" height="88" viewBox="0 0 24 24" fill="none" stroke="#7ec8e3" strokeWidth="0.85" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                      <line x1="12" y1="22.08" x2="12" y2="12" />
                      <polyline points="7.5 15 10.5 16.8" />
                      <polyline points="9.5 19.2 9.5 16.8 7.5 15" />
                    </svg>
                  ),
                  'Domain-Trained Models': (
                    <svg width="88" height="88" viewBox="0 0 24 24" fill="none" stroke="#7ec8e3" strokeWidth="0.85" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  ),
                  'Regulated Industry Experience': (
                    <svg width="88" height="88" viewBox="0 0 24 24" fill="none" stroke="#7ec8e3" strokeWidth="0.85" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="3" x2="12" y2="21" />
                      <path d="M9 3h6" />
                      <line x1="4" y1="7" x2="20" y2="7" />
                      <line x1="4" y1="7" x2="2" y2="13" />
                      <line x1="4" y1="7" x2="6" y2="13" />
                      <path d="M2 13h4" />
                      <line x1="20" y1="7" x2="18" y2="13" />
                      <line x1="20" y1="7" x2="22" y2="13" />
                      <path d="M18 13h4" />
                      <path d="M10 21h4" />
                    </svg>
                  ),
                  'Human-in-the-Loop by Design': (
                    <svg width="88" height="88" viewBox="0 0 24 24" fill="none" stroke="#7ec8e3" strokeWidth="0.85" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="9" cy="7" r="4" />
                      <path d="M2 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2" />
                      <polyline points="16 11 18 13 22 9" />
                    </svg>
                  ),
                }[item.title] ?? null;

                return (
                  <ScrollReveal key={item.title} delay={i * 0.08} direction={i % 2 === 0 ? 'left' : 'right'}>
                    <motion.div
                      whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(42,125,181,0.13)' }}
                      transition={{ duration: 0.3 }}
                      className="rounded-2xl p-7 h-full relative overflow-hidden flex items-center justify-between gap-4"
                      style={{
                        background: 'rgba(255,255,255,0.72)',
                        backdropFilter: 'blur(14px)',
                        WebkitBackdropFilter: 'blur(14px)',
                        border: '1px solid rgba(42,125,181,0.14)',
                        borderLeft: '4px solid #5aa8d8',
                        boxShadow: '0 2px 16px rgba(42,125,181,0.07)',
                        fontFamily: "'Public Sans', sans-serif",
                      }}
                    >
                      {/* Text — left side, takes remaining space */}
                      <div className="flex-1 min-w-0">
                        <h3
                          className="font-bold leading-snug mb-3"
                          style={{
                            fontFamily: "'Public Sans', sans-serif",
                            color: '#1f1f1f',
                            fontSize: 16,
                            fontWeight: 700,
                          }}
                        >
                          {item.title}
                        </h3>
                        <p
                          className="text-sm leading-relaxed"
                          style={{
                            fontFamily: "'Public Sans', sans-serif",
                            color: '#4a5e72',
                            fontSize: 14,
                            lineHeight: 1.75,
                            margin: 0,
                          }}
                        >
                          {item.description}
                        </p>
                      </div>

                      {/* Icon — right side, fixed width, shrink-proof */}
                      <div className="shrink-0 opacity-90 pointer-events-none">
                        {decorativeIcon}
                      </div>
                    </motion.div>
                  </ScrollReveal>
                );
              })}
            </div>
          </Container>
        </section>

        {/* S5 — Inteli-Labs */}
        <InteliLabsSection />

      </div>
    </>
  )
}