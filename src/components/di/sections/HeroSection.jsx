import { motion } from 'framer-motion';
import { Layers, ArrowRight } from 'lucide-react';
import PillBadge from '../ui/PillBadge';
import homeBanner from '../../../assets/decision-intelligence/HomeBanner.svg';
import explorePlatformIco from '../../../assets/decision-intelligence/ExplorethePlatformIco.svg';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: '#1F1F1F' }}>
      {/* HomeBanner SVG as full-bleed background */}
      <div className="absolute inset-0">
        <img
          src={homeBanner}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
          style={{ minHeight: '100%', minWidth: '100%' }}
        />
      </div>
      {/* Overlay to ensure text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, rgba(15,18,35,0.85) 45%, rgba(15,18,35,0.35) 100%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 w-full">

        {/* Badge */}
        <PillBadge variant="outlined" className="mb-8 text-blue-500 border-blue-500 ">
          
          Decision Intelligence
        </PillBadge>

        {/* Headline */}
        <motion.h1
          className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-10 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Your dashboards tell you what happened.
          Decision Intelligence
          tells you what to do next.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-base sm:text-lg text-white/50 leading-relaxed max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          Business Intelligence reports on the past. Decision Intelligence acts on the future.
        </motion.p>
        <motion.p
          className="text-base sm:text-lg text-white/50 leading-relaxed mb-12 max-w-10xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          It is the strategic layer that connects data, AI, and business context to measurable outcomes closing the gap between insight and action.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <motion.button
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl text-[1.04rem] transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Find Out Where You Stand
            <img src={explorePlatformIco} alt="" aria-hidden="true" className="w-9 h-9" />

          </motion.button>

          <motion.button
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white hover:bg-gray-50 text-blue-500 font-semibold rounded-xl text-[1.04rem] transition-all duration-300 shadow-lg shadow-black/5 border border-blue-500"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore the Stack

          </motion.button>
        </motion.div>
      </div>

    </section>
  );
};

export default HeroSection;
