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

/* ── data unchanged ── */
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
const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: (d = 0) => ({ opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: d } }),
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
      style={{ fontFamily: "'Public Sans', sans-serif", minHeight: '480px' }}
    >
      {/* BG */}
      <motion.div className="absolute inset-0 w-full h-full" style={{ y: bgY }}>
        <img
          src="/src/assets/inteliai/hero-bg.svg"
          alt=""
          aria-hidden="true"
          style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
      </motion.div>

      {/* Content — left aligned, matching design */}
      <motion.div
        className="relative z-10 w-full px-8 md:px-16 lg:px-24"
        style={{ y: contentY, opacity, paddingTop: '100px', paddingBottom: '80px' }}
      >
        <div className="max-w-2xl">
          {/* Eyebrow */}
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

          {/* Headline */}
          <motion.h1
            className="font-black text-white leading-[1]  mb-5"
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

          {/* Subtitle */}
          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={0.5}
            className="leading-relaxed mb-8"
            style={{ color: 'rgba(255,255,255,0.65)', fontSize: 'clamp(0.9rem, 1.4vw, 1rem)', maxWidth: '520px' }}
          >
            Most AI projects stall between proof-of-concept and production. Inteliment has spent 22 years learning what it takes to go the other way, building AI systems that work in the real world, at enterprise scale.
          </motion.p>

          {/* CTAs */}
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

/* ── Solution Card ── */
function SolutionCard({ solution, index }) {
  const Icon = Icons[solution.icon] || Icons.Brain
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      style={{ fontFamily: "'Public Sans', sans-serif" }}
    >
      <motion.div
        whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(42,125,181,0.12)' }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl p-6 h-full flex flex-col"
        style={{ border: '1px solid rgba(42,125,181,0.12)', boxShadow: '0 2px 12px rgba(42,125,181,0.06)' }}
      >
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
          style={{ background: 'rgba(42,125,181,0.08)' }}
        >
          <Icon size={22} style={{ color: '#2a7db5' }} />
        </div>
        <h3 className="font-bold text-lg mb-3" style={{ color: '#0f1a2e' }}>{solution.title}</h3>
        <p className="text-sm leading-relaxed mb-4" style={{ color: '#4a5e72' }}>{solution.description}</p>
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {solution.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-bold px-2.5 py-1 rounded-full"
              style={{ background: 'rgba(42,125,181,0.07)', color: '#2a7db5', border: '1px solid rgba(42,125,181,0.2)' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ── Inteli-Labs Section ── */
function InteliLabsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const labsItems = [
    '9+ proprietary AI assets',
    'Production-ready IP',
    'Available to clients & partners',
    'Constantly evolving research agenda',
  ]

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ fontFamily: "'Public Sans', sans-serif", paddingTop: '96px', paddingBottom: '96px' }}
    >
      {/* BG */}
      <div className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
        <img
          src="/src/assets/inteliai/cover.svg"
          alt=""
          aria-hidden="true"
          style={{ display: 'block', width: '100%', height: '100%', objectFit: 'fill' }}
        />
      </div>

      <Container className="relative" style={{ zIndex: 1 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-5"
              style={{ border: '1px solid rgba(126,200,227,0.35)', color: '#7ec8e3', background: 'rgba(126,200,227,0.08)' }}
            >
              Inteli-Labs
            </motion.span>

            <motion.h2
              className="font-black text-white leading-tight mb-5"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Where AI research becomes production IP.
            </motion.h2>

            <motion.p
              className="leading-relaxed mb-6"
              style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem' }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Inteli-Labs is Inteliment's dedicated AI research lab. It produces the models, toolkits, and frameworks that power our client engagements, and it's where we prototype the next wave of Decision Intelligence capabilities.
            </motion.p>

            <ul className="space-y-2.5 mb-8">
              {[
                'GenAI agent toolkits for enterprise decision workflows',
                'Pre-built ML models across 12 industry verticals',
                'Rubiscape, our proprietary no-code DI platform',
              ].map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-start gap-2.5 text-sm"
                  style={{ color: 'rgba(255,255,255,0.65)' }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                >
                  <Icons.Diamond size={12} style={{ color: '#7ec8e3', marginTop: '4px', flexShrink: 0 }} />
                  {item}
                </motion.li>
              ))}
            </ul>

            <motion.div
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <Link
                to="/inteli-labs"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                style={{ color: '#7ec8e3' }}
              >
                Explore Inteli-Labs <Icons.ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — glass card with hub diagram feel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <div
              className="rounded-2xl p-8"
              style={{
                background: 'rgba(15,22,35,0.7)',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 8px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(42,125,181,0.2)' }}
                >
                  <Icons.FlaskConical size={20} style={{ color: '#7ec8e3' }} />
                </div>
                <div>
                  <p className="font-bold text-white text-lg leading-tight">Inteli-Labs</p>
                  <p className="text-xs font-semibold" style={{ color: '#7ec8e3' }}>AI Research & Innovation</p>
                </div>
              </div>

              <div className="space-y-3">
                {labsItems.map((item, i) => (
                  <motion.div
                    key={item}
                    className="flex items-center gap-3 text-sm"
                    style={{ color: 'rgba(255,255,255,0.65)' }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                  >
                    <Icons.Check size={14} style={{ color: '#7ec8e3', flexShrink: 0 }} />
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
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
          style={{ background: 'linear-gradient(180deg, #ffffff 0%, #dce8f5 60%, #c8dff0 100%)' }}
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {aiSolutions.map((solution, i) => (
                <SolutionCard key={solution.title} solution={solution} index={i} />
              ))}
            </div>
            <ScrollReveal delay={0.3}>
              <div className="text-center mt-10">
                <motion.div whileHover={{ x: 3 }} transition={{ type: 'spring', stiffness: 400 }}>
                  <Link
                    to="/solutions"
                    className="inline-flex items-center gap-2 text-sm font-semibold"
                    style={{ color: '#2a7db5' }}
                  >
                    View all solutions <Icons.ArrowRight size={14} />
                  </Link>
                </motion.div>
              </div>
            </ScrollReveal>
          </Container>
        </section>

        {/* S3 — Platform Ecosystem */}
        <section
          className="py-20"
          style={{ background: 'linear-gradient(180deg, #0d1520 0%, #111827 100%)' }}
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
              className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-12 max-w-4xl mx-auto rounded-2xl p-6"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              {platformEcosystem.map((group, i) => (
                <ScrollReveal key={group.category} delay={i * 0.08}>
                  <div className="p-4">
                    <p
                      className="text-xs font-bold uppercase tracking-widest mb-3"
                      style={{ color: '#7ec8e3' }}
                    >
                      {group.category}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="text-xs px-2.5 py-0.5 rounded-full"
                          style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.55)' }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </section>

        {/* S4 — Why Inteliment */}
        <section
          className="py-20 overflow-hidden"
          style={{ background: 'linear-gradient(180deg, #f8fbff 0%, #dce8f5 100%)' }}
        >
          <Container>
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
                const Icon = Icons[item.icon] || Icons.CheckCircle
                return (
                  <ScrollReveal key={item.title} delay={i * 0.08} direction={i % 2 === 0 ? 'left' : 'right'}>
                    <motion.div
                      whileHover={{ y: -4, boxShadow: '0 16px 32px rgba(42,125,181,0.1)' }}
                      transition={{ duration: 0.3 }}
                      className="bg-white rounded-2xl p-7 h-full flex flex-col"
                      style={{
                        border: '1px solid rgba(42,125,181,0.12)',
                        borderLeft: '4px solid #2a7db5',
                        boxShadow: '0 2px 12px rgba(42,125,181,0.06)',
                      }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                          style={{ background: 'rgba(42,125,181,0.08)' }}
                        >
                          <Icon size={20} style={{ color: '#2a7db5' }} />
                        </div>
                        <h3 className="font-bold text-lg leading-tight" style={{ color: '#0f1a2e' }}>{item.title}</h3>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: '#4a5e72' }}>{item.description}</p>
                    </motion.div>
                  </ScrollReveal>
                )
              })}
            </div>
          </Container>
        </section>

        {/* S5 — Inteli-Labs */}
        <InteliLabsSection />

        {/* S6 — CTA 
        <CTABanner
          title="Ready to Put AI to Work in Your Enterprise?"
          subtitle="Start with our Decision Intelligence assessment, understand where AI can have the most impact."
          ctaLabel="Take the DI Assessment"
          ctaTo="/assessment"
        />*/}
      </div>
    </>
  )
}