import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PillBadge from '../ui/PillBadge';
import engagementModelsBackground from '../../../assets/decision-intelligence/EngagementModelsBackground.svg';

const engagementCards = [
  {
    title: 'DI Readiness Assessment',
    badge: 'Free',
    badgeColor: '#15c39a',
    badgeBorder: 'border-[#15c39a]',
    badgeText: 'text-[#d8fff5]',
    description: 'Benchmark your maturity and receive a structured roadmap.',
    cta: 'Take the Assessment',
  },
  {
    title: 'ROI Calculator',
    badge: 'Interactive',
    badgeColor: '#f28a2e',
    badgeBorder: 'border-[#f28a2e]',
    badgeText: 'text-[#ffe7d2]',
    description: 'Quantify the financial impact of decision latency.',
    cta: 'Calculate Your ROI',
  },
  {
    title: 'Solution Demo',
    badge: 'On Request',
    badgeColor: '#ff6f73',
    badgeBorder: 'border-[#ff6f73]',
    badgeText: 'text-[#ffe1e3]',
    description: 'Experience decision intelligence in action.',
    cta: 'Request a Demo',
  },
  {
    title: 'Talk to a Specialist',
    badge: '30 Minutes',
    badgeColor: '#2493ef',
    badgeBorder: 'border-[#2493ef]',
    badgeText: 'text-[#d9eeff]',
    description: 'Strategic discussion tailored to your business context.',
    cta: 'Book a Conversation',
  },
];

const EngagementModelsSection = () => {
  return (
    <section id="engagement-models" className="relative overflow-hidden bg-[#232b32] py-24 lg:py-32">
      <div className="absolute inset-0">
        <img
          src={engagementModelsBackground}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_52%,rgba(53,151,218,0.18),transparent_34%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <PillBadge variant="outlined-dark" className="mb-7 border-white/35 bg-white/[0.03] px-5 py-2 text-white/90">
              Engagement Models
            </PillBadge>
            <h2 className="mb-9 max-w-[15ch] font-display text-[2.2rem] font-semibold leading-[1.06] tracking-[-0.045em] text-white sm:text-[2.6rem] lg:text-[3.2rem]">
              Move from data complexity to decision clarity.
            </h2>
            <p className="max-w-[28rem] text-[0.95rem] leading-[1.3] text-white/95 sm:text-[1.05rem] lg:text-[1.15rem]">
              Wherever you are in the decision, exploring, evaluating, or ready to build, there&apos;s a right
              starting point. Pick yours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {engagementCards.map((card, index) => {
              return (
                <motion.div
                  key={card.title}
                  className="group rounded-[10px] border border-white/5 bg-[#202a31]/92 p-5 shadow-[0_0_26px_rgba(37,144,216,0.16)] transition-all duration-300 hover:border-white/10 hover:bg-[#223038]"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -3 }}
                >
                  <div className="mb-7 flex items-start justify-between gap-4">
                    <h3 className="max-w-[12ch] font-display text-[1.9rem] font-medium leading-[1.05] tracking-[-0.04em] text-white">
                      {card.title}
                    </h3>
                    <span
                      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-1 text-[11px] leading-none ${card.badgeBorder} ${card.badgeText}`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: card.badgeColor }} />
                      {card.badge}
                    </span>
                  </div>

                  <p className="mb-6 max-w-[20rem] text-[1rem] leading-[1.35] text-white/72">
                    {card.description}
                  </p>

                  <button className="flex w-full items-center justify-between rounded-[4px] bg-[#305975] px-4 py-3 text-left font-display text-[1.15rem] font-medium tracking-[-0.02em] text-white transition-colors group-hover:bg-[#346482]">
                    <span>{card.cta}</span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementModelsSection;
