import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Lightbulb, Search, TrendingUp, Zap } from 'lucide-react';
import PillBadge from '../ui/PillBadge';
import SparkleIcon from '../ui/SparkleIcon';

const stages = [
  {
    id: 'descriptive',
    label: 'Descriptive Intelligence',
    question: 'What is happening?',
    icon: Search,
    description:
      "The foundation. Dashboards, reports, and pipelines that surface what's happening right now. Without this working reliably, nothing else does. Sales performance, dashboards, Operational KPI, reporting, Financial consolidation, Data quality monitoring",
    desktopCard: 'left-[0%] bottom-[11.9rem] w-[19rem]',
    activeDesktopCardShift: '',
    desktopNode: 'left-[1.5rem] top-[23.7rem]',
    nodeSize: 'h-[3.9rem] w-[3.9rem]',
  },
  {
    id: 'diagnostic',
    label: 'Diagnostic Intelligence',
    question: 'Why is it happening?',
    icon: TrendingUp,
    description:
      'Root-cause analysis, drill-downs, and segmentation that explain performance shifts and make the numbers intelligible.',
    desktopCard: 'left-[20.7rem] bottom-[13.1rem] w-[15rem]',
    activeDesktopCardShift: '',
    desktopNode: 'left-[25.7rem] top-[20.25rem]',
    nodeSize: 'h-[3.9rem] w-[3.9rem]',
  },
  {
    id: 'predictive',
    label: 'Predictive Intelligence',
    question: 'What is likely to happen?',
    icon: Lightbulb,
    description:
      'Forecasts and models that anticipate what comes next. Useful for planning, but still one step short of action.',
    desktopCard: 'left-[39.8rem] top-[11rem] w-[15rem]',
    activeDesktopCardShift: 'translate-y-3',
    desktopNode: 'left-[44.15rem] top-[6.15rem]',
    nodeSize: 'h-[3.9rem] w-[3.9rem]',
  },
  {
    id: 'prescriptive',
    label: 'Prescriptive Intelligence',
    question: 'What should we do about it?',
    icon: Zap,
    description:
      'Recommendations that turn insight into the next best action. This is where analytics becomes operational.',
    desktopCard: 'right-[0.8rem] top-[6.3rem] w-[15rem]',
    activeDesktopCardShift: 'translate-y-3',
    desktopNode: 'right-[3.55rem] top-[0.7rem]',
    nodeSize: 'h-[3.9rem] w-[3.9rem]',
  },
];

const stageContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const stageItemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const cardBaseClasses =
  'rounded-[12px] border border-[#96d5ff] bg-[#eaf6ff]/95 shadow-[0_10px_24px_rgba(72,167,232,0.24)] backdrop-blur-[2px]';

const DEFAULT_ACTIVE_STAGE = 0;

const AnalyticsEvolutionSection = () => {
  const [activeStage, setActiveStage] = useState(DEFAULT_ACTIVE_STAGE);
  const toggleStage = (index) => {
    setActiveStage((current) => (current === index ? DEFAULT_ACTIVE_STAGE : index));
  };

  return (
    <section
      id="analytics-evolution"
      className="relative overflow-hidden pt-14 pb-24 lg:pt-16 lg:pb-32"
      style={{
        background:
          'linear-gradient(180deg, #ffffff 0%, #f7fbff 18%, #d9efff 54%, #bee3fb 100%)',
      }}
    >
      <div className="absolute inset-0">
        <div className="absolute left-[-12rem] bottom-[-10rem] h-[22rem] w-[34rem] rounded-full bg-white/75 blur-3xl" />
        <div className="absolute right-[-8rem] top-[4rem] h-[18rem] w-[26rem] rounded-full bg-[#c9ebff] blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-[62%] bg-[linear-gradient(180deg,rgba(132,194,236,0)_0%,rgba(148,205,241,0.4)_42%,rgba(130,191,229,0.72)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-8xl px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-[70rem]">
            <PillBadge variant="outlined" className="mb-6 border-accent-300/80 bg-accent-50/70 text-accent-600">
              The Analytics Evolution
            </PillBadge>

            <motion.h2
              className="font-display text-[2.4rem] font-semibold leading-[1.08] tracking-[-0.045em] text-[#262b31] sm:text-[3rem] lg:text-[3.55rem]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="lg:block">Four questions define analytics maturity.</span>
              <span className="lg:block lg:whitespace-nowrap">Only one drives action.</span>
            </motion.h2>
          </div>
        </div>

        <div className="relative mt-12 hidden h-[30rem] lg:block">
          <svg
            className="absolute inset-y-0 left-1/2 h-full w-screen -translate-x-1/2"
            viewBox="0 0 1440 480"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <filter id="analyticsGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="analyticsTrail" x1="0" y1="390" x2="1440" y2="40">
                <stop offset="0%" stopColor="#7bcfff" />
                <stop offset="22%" stopColor="#57c0ff" />
                <stop offset="54%" stopColor="#2fa8ff" />
                <stop offset="100%" stopColor="#0f8eff" />
              </linearGradient>
            </defs>

            <motion.path
              d="M0 415 C180 415, 390 425, 490 382 C625 324, 695 235, 845 142 C1005 43, 1130 45, 1440 45"
              stroke="rgba(255,255,255,0.65)"
              strokeWidth="22"
              fill="none"
              strokeLinecap="round"
              filter="url(#analyticsGlow)"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.3, ease: 'easeOut' }}
            />
            <motion.path
              d="M0 415 C180 415, 390 425, 490 382 C625 324, 695 235, 845 142 C1005 43, 1130 45, 1440 45"
              stroke="url(#analyticsTrail)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.45, ease: 'easeOut', delay: 0.12 }}
            />
          </svg>

          <div className="relative mx-auto h-full max-w-[1200px]">
            <div className="absolute inset-0">
              <motion.div
                className="absolute right-[10.25rem] top-[1.25rem]"
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <SparkleIcon size={44} color="#2da4f5" delay={0.2} />
              </motion.div>
              <motion.div
                className="absolute right-[8rem] top-[0.45rem]"
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <SparkleIcon size={18} color="#2da4f5" delay={1} />
              </motion.div>
              <motion.div
                className="absolute right-[1.55rem] top-[4.3rem]"
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.05 }}
              >
                <SparkleIcon size={22} color="#2da4f5" delay={1.2} />
              </motion.div>
              <motion.div
                className="absolute right-[15.2rem] top-[7rem]"
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.85 }}
              >
                <SparkleIcon size={22} color="#2da4f5" delay={0.7} />
              </motion.div>
            </div>

            <motion.div
              className="absolute inset-0"
              variants={stageContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {stages.map((stage, index) => {
                const isActive = activeStage === index;

                return (
                  <motion.div
                    key={stage.id}
                    className={`absolute z-20 text-left transition-transform duration-300 ${stage.desktopCard} ${
                      isActive ? stage.activeDesktopCardShift : ''
                    } ${isActive ? '' : 'cursor-pointer'}`}
                    variants={stageItemVariants}
                    onMouseEnter={() => setActiveStage(index)}
                    onFocusCapture={() => setActiveStage(index)}
                    onClick={() => {
                      if (!isActive) {
                        setActiveStage(index);
                      }
                    }}
                  >
                    <div
                      className={`${cardBaseClasses} ${
                        isActive ? 'p-4' : 'px-4 py-3.5'
                      } transition-all duration-300`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className="mb-2 text-[11px] font-medium leading-none text-[#48a7e8]">
                            {stage.label}
                          </div>
                          <h3 className="font-display text-[1.06rem] font-medium leading-tight text-[#37414b]">
                            {stage.question}
                          </h3>
                        </div>
                        <button
                          type="button"
                          aria-label={isActive ? `Collapse ${stage.label}` : `Expand ${stage.label}`}
                          onClick={(event) => {
                            event.stopPropagation();
                            toggleStage(index);
                          }}
                          className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center text-[#6f7f90]"
                        >
                          {isActive ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </button>
                      </div>

                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28, ease: 'easeOut' }}
                            className="overflow-hidden"
                          >
                            <p className="mt-3 max-w-[24ch] text-[0.93rem] leading-[1.45] text-[#58626e]">
                              {stage.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}

              {stages.map((stage, index) => {
                const Icon = stage.icon;
                const isActive = activeStage === index;

                return (
                  <motion.div
                    key={`${stage.id}-node`}
                    className={`absolute z-30 ${stage.desktopNode}`}
                    variants={stageItemVariants}
                    onMouseEnter={() => setActiveStage(index)}
                    onFocusCapture={() => setActiveStage(index)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        setActiveStage(index);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={`Open ${stage.label}`}
                  >
                    <div
                      className={`flex items-center justify-center rounded-full border border-white/70 bg-white shadow-[0_10px_25px_rgba(94,164,216,0.22)] transition-all duration-300 ${stage.nodeSize} ${
                        isActive ? 'scale-105 shadow-[0_14px_30px_rgba(70,161,222,0.3)]' : 'hover:scale-105'
                      }`}
                    >
                      <Icon
                        className={`h-7 w-7 ${isActive ? 'text-[#2f9fe9]' : 'text-[#3aa7ef]'}`}
                        strokeWidth={2}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.p
              className="absolute bottom-[2.2rem] right-[4.3rem] max-w-[34rem] font-display text-[1.05rem] leading-[1.23] text-[#303841]"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.45 }}
            >
              Every analytics investment answers one of four questions. The first three
              describe your business. The fourth changes it.
            </motion.p>
          </div>
        </div>

        <motion.div
          className="mt-12 grid gap-4 lg:hidden"
          variants={stageContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stages.map((stage, index) => {
            const isActive = activeStage === index;

            return (
              <motion.div
                key={`${stage.id}-mobile`}
                variants={stageItemVariants}
                className={`${cardBaseClasses} text-left ${isActive ? 'p-4' : 'cursor-pointer px-4 py-3.5'}`}
                onClick={() => {
                  if (!isActive) {
                    setActiveStage(index);
                  }
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="mb-2 text-[11px] font-medium leading-none text-[#48a7e8]">
                      {stage.label}
                    </div>
                    <h3 className="font-display text-[1.05rem] font-medium leading-tight text-[#37414b]">
                      {stage.question}
                    </h3>
                  </div>
                  <button
                    type="button"
                    aria-label={isActive ? `Collapse ${stage.label}` : `Expand ${stage.label}`}
                    onClick={(event) => {
                      event.stopPropagation();
                      toggleStage(index);
                    }}
                    className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center text-[#6f7f90]"
                  >
                    {isActive ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                </div>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="mt-3 overflow-hidden text-[0.94rem] leading-[1.45] text-[#58626e]"
                    >
                      {stage.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}

          <motion.p
            variants={stageItemVariants}
            className="mt-3 max-w-[30rem] font-display text-[1.05rem] leading-[1.28] text-[#303841]"
          >
            Every analytics investment answers one of four questions. 
            The first three describe your business. The fourth changes it.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AnalyticsEvolutionSection;
