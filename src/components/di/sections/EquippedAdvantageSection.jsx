import { motion } from 'framer-motion';
import {
  ArrowLeftRight,
  BarChart3,
  FileText,
  Gauge,
  GitBranch,
  Lightbulb,
  RefreshCw,
  TrendingUp,
} from 'lucide-react';
import PillBadge from '../ui/PillBadge';
import SparkleIcon from '../ui/SparkleIcon';

const existsItems = [
  { icon: FileText, text: 'Historical Reporting' },
  { icon: TrendingUp, text: 'Trend Analysis' },
  { icon: BarChart3, text: 'Static Dashboards' },
  { icon: GitBranch, text: 'Fixed Logic Systems' },
];

const diItems = [
  { icon: Lightbulb, text: 'Proactive Recommendations' },
  { icon: ArrowLeftRight, text: 'Cross-functional Alignment' },
  { icon: Gauge, text: 'Real-time Decision Velocity' },
  { icon: RefreshCw, text: 'Closed-Loop Learning System' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const EquippedAdvantageSection = () => {
  return (
    <section id="equipped-advantage" className="relative overflow-hidden bg-white pt-20 pb-10 lg:pt-24 lg:pb-14">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.82fr)] gap-14 lg:gap-20 xl:grid-cols-[636px_minmax(0,1fr)] items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative grid gap-6 md:grid-cols-[272px_340px] items-stretch max-w-[636px]">
              <motion.div
                className="h-full rounded-[12px] border border-[#dfe7ef] bg-[#edf2f7] px-7 py-8 shadow-[0_12px_32px_rgba(148,163,184,0.18)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="font-display text-[1.08rem] font-medium tracking-[-0.02em] text-[#202428] mb-7">
                  What exists today
                </h4>
                <div className="mb-7 h-px w-full bg-[#7e8a97]" />
                <motion.ul
                  className="space-y-7"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {existsItems.map((item, i) => (
                    <motion.li key={i} variants={itemVariants} className="flex items-center gap-4">
                      <item.icon className="h-[18px] w-[18px] flex-shrink-0 text-[#15181c]" strokeWidth={1.7} />
                      <span className="font-display text-[1.02rem] leading-none tracking-[-0.02em] text-[#505a66]">
                        {item.text}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.div
                className="relative h-full rounded-[12px] border border-[#5cb2ff] bg-[#edf6fd] px-7 py-8 shadow-[0_10px_28px_rgba(96,165,250,0.12)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <SparkleIcon className="absolute -top-9 left-7" size={40} color="#62b6ff" delay={0.3} />
                <SparkleIcon className="absolute -top-3 left-[4.9rem]" size={14} color="#62b6ff" delay={1} />

                <h4 className="font-display text-[1.08rem] font-medium tracking-[-0.02em] text-[#202428] mb-7">
                  What Decision Intelligence delivers
                </h4>
                <div className="mb-7 h-px w-full bg-[#5cb2ff]" />
                <motion.ul
                  className="space-y-7"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {diItems.map((item, i) => (
                    <motion.li key={i} variants={itemVariants} className="flex items-center gap-4">
                      <item.icon className="h-[18px] w-[18px] flex-shrink-0 text-[#60b5ff]" strokeWidth={1.7} />
                      <span className="font-display text-[1.02rem] font-medium leading-none tracking-[-0.02em] text-[#22262b]">
                        {item.text}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col items-start lg:w-full lg:pl-1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <PillBadge
              variant="light"
              className="mb-7 border-[#8e949b] bg-[#ececec] px-5 py-2 text-sm font-medium text-[#2f3135] shadow-none"
            >
              What BI doesn&apos;t do
            </PillBadge>

            <h2 className="font-display text-[2rem] font-semibold leading-[1.04] tracking-[-0.05em] text-[#292b30] sm:text-[2.45rem] lg:text-[2.35rem] xl:text-[2.9rem]">
              <span className="block whitespace-nowrap">Being informed is a</span>
              <span className="block whitespace-nowrap">milestone. Being equipped</span>
              <span className="block whitespace-nowrap">is the advantage.</span>
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EquippedAdvantageSection;
