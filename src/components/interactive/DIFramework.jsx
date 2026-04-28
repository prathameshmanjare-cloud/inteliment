import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Database, BarChart3, Brain, Zap, ChevronDown } from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'

const layers = [
  {
    id: 'data',
    number: '01',
    title: 'DATA',
    subtitle: 'ERP · CRM · Finance · Operational Systems',
    icon: Database,
    color: '#00B4D8',
    description: 'Every intelligent decision starts with data you can trust. We engineer production-grade pipelines that unify every source, ERP, CRM, operational systems, external feeds, into a clean, governed data platform. This isn\'t plumbing. It\'s the foundation that determines whether your AI works or fails.',
  },
  {
    id: 'insights',
    number: '02',
    title: 'INSIGHTS',
    subtitle: 'Analytics & ML · Patterns & Risks',
    icon: BarChart3,
    color: '#48CAE4',
    description: 'With clean data, machine learning surfaces what humans miss. Predictive models forecast demand, score risk, segment customers, and detect anomalies at scale. Most organisations invest heavily here. Most stop here.',
  },
  {
    id: 'decisions',
    number: '03',
    title: 'DECISIONS',
    subtitle: 'AI Models · Action Recommendations',
    icon: Brain,
    color: '#00D4AA',
    description: 'Insights become decisions when AI evaluates context and returns a specific, ranked recommendation. Not \'churn is rising\', \'intervene with these 47 accounts this week.\' This is where analytics becomes action.',
  },
  {
    id: 'actions',
    number: '04',
    title: 'ACTIONS',
    subtitle: 'Workflows · Outcomes & Feedback',
    icon: Zap,
    color: '#52EFD0',
    description: 'The most powerful systems close the loop: decisions trigger workflows, outcomes are captured, models learn and improve. Each cycle compounds. This is where Decision Intelligence becomes a durable competitive advantage.',
  },
]

export default function DIFramework({ light = false }) {
  const [activeLayer, setActiveLayer] = useState(null)
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="py-20 md:py-28 relative overflow-hidden">
      {!light && <div className="absolute inset-0 bg-gradient-radial from-teal/5 to-transparent pointer-events-none" />}

      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="The Framework"
            title="How Decision Intelligence is actually built."
            subtitle="Four layers. Each one connecting data closer to action."
            light={light}
          />
        </ScrollReveal>

        {/* Desktop: horizontal flow */}
        <div className="hidden md:flex gap-3 mt-14 items-stretch relative">
          {/* Connecting SVG line */}
          <svg className="absolute top-12 left-0 w-full h-1 pointer-events-none" viewBox="0 0 100 4" preserveAspectRatio="none">
            <line x1="0" y1="2" x2="100" y2="2" stroke="rgba(0,180,216,0.15)" strokeWidth="1" />
            <line
              x1="0" y1="2" x2="100" y2="2"
              stroke="url(#pulseGrad)"
              strokeWidth="2"
              strokeDasharray="8 6"
              className={prefersReducedMotion ? '' : 'data-pulse-path'}
            />
            <defs>
              <linearGradient id="pulseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00B4D8" stopOpacity="0" />
                <stop offset="50%" stopColor="#00D4AA" stopOpacity="1" />
                <stop offset="100%" stopColor="#00B4D8" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {layers.map((layer, i) => {
            const Icon = layer.icon
            const isActive = activeLayer === layer.id
            const isLocked = layer.id === 'data' || layer.id === 'insights'

            return (
              <motion.div
                key={layer.id}
                layout
                animate={{ flexGrow: isActive ? 2 : 1 }}
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                className="relative overflow-hidden"
              >
                <button
                  className={`w-full h-full text-left rounded-2xl p-5 border transition-all duration-300 ${
                    light
                      ? `glass-light ${isActive ? 'border-teal/40 shadow-glow-teal' : 'border-grey-200/80 hover:border-teal/30'}`
                      : `glass ${isActive ? 'border-teal/50 shadow-glow-teal' : 'border-white/10 hover:border-white/20'}`
                  }`}
                  onClick={() => setActiveLayer(isActive ? null : layer.id)}
                  aria-expanded={isActive}
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${layer.color}20` }}>
                          <Icon size={16} style={{ color: layer.color }} />
                        </div>
                        <span className="text-[10px] font-display font-bold tracking-widest uppercase" style={{ color: layer.color }}>Layer {layer.number}</span>
                      </div>
                      {!isLocked && (
                        <div
                          className="w-2 h-2 rounded-full shrink-0 mt-1 shadow-glow-teal animate-pulse"
                          style={{ backgroundColor: layer.color }}
                        />
                      )}
                    </div>

                    <div>
                      <h3 className={`font-display font-bold text-lg ${light ? 'text-navy' : 'text-white'}`}>{layer.title}</h3>
                      <p className={`text-xs mt-0.5 font-body ${light ? 'text-grey-500' : 'text-white/50'}`}>{layer.subtitle}</p>
                    </div>

                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className={`text-sm font-body leading-relaxed overflow-hidden ${light ? 'text-grey-700' : 'text-white/70'}`}
                        >
                          {layer.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </button>

              </motion.div>
            )
          })}
        </div>

        {/* Mobile: vertical stack */}
        <div className="md:hidden flex flex-col gap-4 mt-10">
          {layers.map((layer) => {
            const Icon = layer.icon
            const isActive = activeLayer === layer.id
            return (
              <div key={layer.id} className={`rounded-xl border transition-all ${
                light
                  ? `glass-light ${isActive ? 'border-teal/40' : 'border-grey-200/80'}`
                  : `glass ${isActive ? 'border-teal/40' : 'border-white/10'}`
              }`}>
                <button
                  className="w-full text-left p-5 flex items-center justify-between"
                  onClick={() => setActiveLayer(isActive ? null : layer.id)}
                  aria-expanded={isActive}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${layer.color}20` }}>
                      <Icon size={16} style={{ color: layer.color }} />
                    </div>
                    <div>
                      <div className="text-[10px] font-display font-bold tracking-widest uppercase" style={{ color: layer.color }}>Layer {layer.number}</div>
                      <div className={`font-display font-bold ${light ? 'text-navy' : 'text-white'}`}>{layer.title}</div>
                    </div>
                  </div>
                  <ChevronDown size={16} className={`transition-transform ${light ? 'text-grey-400' : 'text-white/40'} ${isActive ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-sm text-white/70 font-body leading-relaxed">
                        {layer.description}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        {/* Bottom callout */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className={`mt-10 text-center rounded-xl p-5 border border-teal/20 max-w-4xl mx-auto ${light ? 'glass-light' : 'glass'}`}>
            <p className={`font-body ${light ? 'text-grey-600' : 'text-white/70'}`}>
              Most analytics investments stop at <span className={`font-semibold ${light ? 'text-navy' : 'text-white/90'}`}>Layer 2, insights.</span>
              {' '}We build to{' '}
              <span className="font-semibold text-gradient-teal">Layer 4, autonomous action.</span>
              {' '}That&apos;s the competitive gap.
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </div>
  )
}
