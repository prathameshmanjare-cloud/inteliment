import { motion } from 'framer-motion';
import PillBadge from '../ui/PillBadge';
import SparkleIcon from '../ui/SparkleIcon';
import differenceBg from '../../../assets/decision-intelligence/DifferenceBackground.svg';
import rightLines from '../../../assets/decision-intelligence/RightSvgLines.svg';
import leftLines from '../../../assets/decision-intelligence/LeftSvgLines.svg';
import midIco from '../../../assets/decision-intelligence/MidIco.svg';

const biItems = [
  'What happened',
  'Reports and dashboards',
  'Periodic',
  'Siloed',
  'AI optional',
  'Informs',
];

const diItems = [
  'What to do next',
  'Recommendations and actions',
  'Real-time and predictive',
  'Cross-functional',
  'AI as core engine',
  'Augments and executes decisions',
];

const cardBaseClassName =
  'w-[17.5rem] sm:w-[19rem] lg:w-[21rem] rounded-[14px] px-6 py-7 text-center shadow-[0_16px_40px_rgba(76,124,168,0.18)]';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const itemVariantsRight = {
  hidden: { opacity: 0, x: 15 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const renderComparisonCard = (title, items, tone = 'left') => {
  const isRight = tone === 'right';

  return (
    <div
      className={`${cardBaseClassName} ${
        isRight
          ? 'border border-[#72c5f8] bg-[#e0f2ff] text-[#237fb4]'
          : 'border border-[#d9dee4] bg-[#E9ECEF] text-[#57616d]'
      }`}
    >
      {isRight ? (
        <div className="-mx-6 mb-3 px-6 pt-1">
          <div className="relative overflow-hidden border-y border-white/35 bg-[linear-gradient(90deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.5)_14%,rgba(255,255,255,0.78)_50%,rgba(255,255,255,0.5)_86%,rgba(255,255,255,0.18)_100%)] py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.72),inset_0_-1px_0_rgba(120,187,232,0.2)]">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/80" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-10 w-3/4 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,_rgba(255,255,255,0.22)_0%,rgba(255,255,255,0)_72%)]" />
            <div className="relative flex items-center justify-center">
              <h3 className="font-display text-[1.08rem] font-semibold leading-tight tracking-[-0.02em] text-[#49535d] drop-shadow-[0_1px_0_rgba(255,255,255,0.6)] sm:text-[1.12rem]">
                {title}
              </h3>
            </div>
          </div>
        </div>
      ) : (
        <div className="-mx-6 mb-3 px-6 pt-1">
          <div className="relative overflow-hidden border-y border-white/30 bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.32)_14%,rgba(255,255,255,0.58)_50%,rgba(255,255,255,0.32)_86%,rgba(255,255,255,0.1)_100%)] py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.65),inset_0_-1px_0_rgba(180,188,196,0.18)]">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/70" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-10 w-3/4 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,_rgba(255,255,255,0.18)_0%,rgba(255,255,255,0)_72%)]" />
            <div className="relative flex items-center justify-center">
              <h3 className="font-display text-[1.08rem] font-semibold leading-tight tracking-[-0.02em] text-[#4f5861] drop-shadow-[0_1px_0_rgba(255,255,255,0.55)] sm:text-[1.12rem]">
                {title}
              </h3>
            </div>
          </div>
        </div>
      )}

      <motion.ul
        className={`space-y-5 ${isRight ? 'mt-6' : 'mt-8'}`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
      >
        {items.map((item) => (
          <motion.li
            key={item}
            className={`font-display text-[1.02rem] leading-snug ${
              isRight ? 'font-semibold text-[#3a7394]' : 'font-medium text-[#5d6670]'
            }`}
            variants={isRight ? itemVariantsRight : itemVariants}
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

const DifferenceSection = () => {
  return (
    <section id="difference" className="relative py-24 lg:py-32 bg-[#1A1A1A] overflow-hidden">
      {/* Background SVG */}
      <div className="absolute inset-0">
        <img
          src={differenceBg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <PillBadge variant="filled-light" className="mb-6 text-blue-700 border border-blue-700">
            The Distinction
          </PillBadge>

          <motion.h2
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            The difference between knowing and acting.
          </motion.h2>

          <motion.p
            className="text-lg text-black max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Business Intelligence focuses on visibility. Decision Intelligence focuses on velocity.
          </motion.p>
        </div>

        {/* Comparison Diagram */}
        <motion.div
          className="relative mx-auto mt-12 flex max-w-[1180px] flex-col items-center gap-10 lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-center lg:gap-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* BI Card (Left) */}
          <motion.div
            className="relative z-30 flex w-full justify-center lg:-mr-4 lg:justify-self-end xl:-mr-5"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <motion.div
              className="group relative"
              whileHover={{
                y: -5,
                scale: 1.01,
                filter: 'drop-shadow(0 0 18px rgba(165, 180, 196, 0.26))',
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            >
              <div className="pointer-events-none absolute inset-[-8px] rounded-[20px] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.3),_rgba(255,255,255,0)_72%)] opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative transition-[box-shadow,transform] duration-300 group-hover:[&>div]:shadow-[0_22px_46px_rgba(148,163,184,0.24)]">
                {renderComparisonCard('Business Intelligence', biItems)}
              </div>
            </motion.div>
          </motion.div>

          {/* Center Hub & Lines */}
          <motion.div
            className="hidden lg:flex items-center justify-center px-2 xl:px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img
              src={leftLines}
              alt=""
              className="h-auto w-[13rem] object-contain lg:-mr-5 xl:w-[15rem] xl:-mr-7"
            />
            <img
              src={midIco}
              alt=""
              className="relative z-20 h-auto w-[5.5rem] object-contain xl:w-[6.25rem]"
            />
            <img
              src={rightLines}
              alt=""
              className="h-auto w-[13rem] object-contain lg:-ml-5 xl:w-[15rem] xl:-ml-7"
            />
          </motion.div>

          {/* DI Card (Right) */}
          <motion.div
            className="relative z-30 flex w-full justify-center lg:-ml-6 lg:justify-self-start xl:-ml-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <motion.div
              className="group relative"
              whileHover={{
                y: -6,
                scale: 1.015,
                filter: 'drop-shadow(0 0 24px rgba(76, 187, 255, 0.35))',
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              <div className="pointer-events-none absolute inset-[-10px] rounded-[20px] bg-[radial-gradient(circle_at_center,_rgba(102,196,255,0.34),_rgba(102,196,255,0)_72%)] opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative transition-[box-shadow,transform] duration-300 group-hover:[&>div]:shadow-[0_22px_54px_rgba(66,173,236,0.34)]">
                {renderComparisonCard('Decision Intelligence', diItems, 'right')}
              </div>
              <SparkleIcon
                className="pointer-events-none absolute -right-10 -top-10 z-40 hidden lg:block"
                size={84}
                color="#8ed6ff"
                delay={0.2}
                orbitRadius={9}
                orbitDuration={5}
              />
              <SparkleIcon
                className="pointer-events-none absolute -bottom-8 -left-10 z-40 hidden lg:block"
                size={76}
                color="#8ed6ff"
                delay={1.1}
                orbitRadius={11}
                orbitDuration={5.6}
              />
              <SparkleIcon
                className="pointer-events-none absolute -right-2 top-10 z-40 hidden lg:block"
                size={22}
                color="#b8e7ff"
                delay={0.7}
                orbitRadius={5}
                orbitDuration={4.2}
              />
              <SparkleIcon
                className="pointer-events-none absolute -right-16 top-12 z-40 hidden lg:block"
                size={16}
                color="#8ed6ff"
                delay={1.4}
                orbitRadius={4}
                orbitDuration={3.8}
              />
              <SparkleIcon
                className="pointer-events-none absolute -bottom-1 left-8 z-40 hidden lg:block"
                size={24}
                color="#b8e7ff"
                delay={0.4}
                orbitRadius={6}
                orbitDuration={4.6}
              />
              <SparkleIcon
                className="pointer-events-none absolute -bottom-14 -left-2 z-40 hidden lg:block"
                size={18}
                color="#8ed6ff"
                delay={1.8}
                orbitRadius={5}
                orbitDuration={4}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-700 text-lg max-w-1xl mx-auto">
            In a real-time economy, the gap between Knowing and acting is your greatest liability.
          </p>
          <p className="text-blue-500 text-lg max-w-xl mx-auto">
            Decision Intelligence makes it your greatest asset.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DifferenceSection;
