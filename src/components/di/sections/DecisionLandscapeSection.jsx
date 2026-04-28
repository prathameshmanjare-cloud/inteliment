import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Settings, Target, Telescope, ChevronUp, ChevronDown } from 'lucide-react';
import PillBadge from '../ui/PillBadge';
import decisionBg from '../../../assets/decision-intelligence/Decisionsection.svg';

const cards = [
  {
    id: 'transactional',
    title: 'Transactional',
    icon: Zap,
    subtitle: 'Real-time decisions that impact customer experience and revenue',
    controls: 'Lead response, pricing, service resolution, customer experience',
    impact: 'Higher conversions, improved retention, faster value delivery',
  },
  {
    id: 'operational',
    title: 'Operational',
    icon: Settings,
    subtitle: 'Efficiency-driven decisions that control cost and productivity',
    controls: 'Scheduling, resource allocation, quality control, process flow',
    impact: 'Lower operating costs, smoother delivery, stronger team output',
  },
  {
    id: 'tactical',
    title: 'Tactical',
    icon: Target,
    subtitle: 'Cross-functional decisions that shape growth and execution',
    controls: 'Launch planning, channel mix, prioritization, partner strategy',
    impact: 'Faster go-to-market, sharper focus, stronger competitive moves',
  },
  {
    id: 'strategic',
    title: 'Strategic',
    icon: Telescope,
    subtitle: 'Long-horizon decisions that define direction and market position',
    controls: 'M&A strategy, platform choices, investment bets, market position',
    impact: 'Clearer vision, better capital allocation, durable advantage',
  },
];

const DecisionLandscapeSection = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section id="decision-landscape" className="relative py-24 lg:py-32 bg-navy-900 overflow-hidden">
      {/* Background SVG */}
      <div className="absolute inset-0">
        <img
          src={decisionBg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <PillBadge variant="outlined-dark" className="mb-6">The Decision Landscape</PillBadge>
          <motion.h2
            className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Every decision your business makes operates at four levels
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-16">
          {cards.map((card, index) => {
            const isActive = activeCard === index;
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                className={`relative min-h-[320px] overflow-hidden rounded-2xl bg-[#2d393f] transition-colors duration-300 ${
                  isActive
                    ? 'border border-[#6cb7ed] shadow-[0_0_28px_rgba(72,166,226,0.24)]'
                    : 'border border-[#345063] hover:border-[#3f6178]'
                  }`}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard((current) => (current === index ? null : current))}
                onFocusCapture={() => setActiveCard(index)}
                onBlurCapture={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    setActiveCard((current) => (current === index ? null : current));
                  }
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`relative z-10 flex min-h-[320px] flex-col p-6 lg:p-7 transition-opacity duration-200 ${isActive ? 'opacity-0 pointer-events-none absolute inset-0' : 'opacity-100'}`}>
                  <div className="flex items-start justify-between">
                    <Icon
                      className={`${isActive ? 'text-accent-400/25' : 'text-[#3a4b58]'} h-24 w-24 sm:h-28 sm:w-28`}
                      strokeWidth={1.5}
                    />
                    <button
                      type="button"
                      aria-label={isActive ? `Hide details for ${card.title}` : `Show details for ${card.title}`}
                      aria-expanded={isActive}
                      onClick={() => setActiveCard(isActive ? null : index)}
                      className="mt-1 rounded-full p-1 text-white/80 transition-colors hover:text-accent-400"
                    >
                      {isActive ? <ChevronUp className="h-6 w-6 text-accent-400" /> : <ChevronDown className="h-6 w-6" />}
                    </button>
                  </div>
                  <div className="mt-auto">
                    <h3 className={`font-display text-2xl font-semibold leading-tight mb-4 ${isActive ? 'text-white' : 'text-[#2fa8ff]'}`}>
                      {index + 1}. {card.title}
                    </h3>
                    <p className={`max-w-[16rem] text-base leading-snug ${isActive ? 'text-white/75' : 'text-white/90'}`}>
                      {card.subtitle}
                    </p>
                  </div>
                </div>
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 16 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="absolute inset-0 z-20 flex flex-col bg-[#263137]/95 p-5 lg:p-6"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0 flex items-start gap-3">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#315f7d]">
                            <Icon className="h-6 w-6 text-white" strokeWidth={2} />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-display text-base font-semibold leading-tight text-[#6fb5e9]">
                              {index + 1}. {card.title}
                            </h3>
                            <p className="mt-1 text-[13px] leading-snug text-white/95">
                              {card.subtitle}
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          aria-label={`Hide details for ${card.title}`}
                          onClick={() => setActiveCard(null)}
                          className="rounded-full p-1 text-white/90 transition-colors hover:text-accent-300"
                        >
                          <ChevronUp className="h-5 w-5" />
                        </button>
                      </div>
                      <div className="my-5 h-px w-full shrink-0 bg-[#6fb5e9]" />
                      <div className="space-y-5">
                        <div>
                          <h4 className="mb-2 font-display text-base font-semibold leading-tight text-[#6fb5e9]">
                            What it controls
                          </h4>
                          <p className="text-[13px] leading-snug text-white/95">
                            {card.controls}
                          </p>
                        </div>
                        <div>
                          <h4 className="mb-2 font-display text-base font-semibold leading-tight text-[#6fb5e9]">
                            Business impact
                          </h4>
                          <p className="text-[13px] leading-snug text-white/95">
                            {card.impact}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-white-400 text-lg max-w-2xl mx-auto mb-3">
            Leaders don&apos;t optimize one layer.
          </p>
          <p className="text-accent-300 text-lg max-w-2xl mx-auto">
            They align all four into a unified decision system.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DecisionLandscapeSection;
// #2d393f
