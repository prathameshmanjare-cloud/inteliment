import { motion, useReducedMotion } from 'framer-motion'
import Container from '@/components/ui/Container'
import intelimeBackground from '@/assets/intelime/intelimeBackground.svg'
import explorePlatformIco from '@/assets/decision-intelligence/ExplorethePlatformIco.svg'

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative min-h-[650px] overflow-hidden bg-[#1F1F1F] flex items-center">
      <div className="absolute inset-0">
        <img
          src={intelimeBackground}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-right"
        />
      </div>

      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(90deg, rgba(31,31,31,0.95) 0%, rgba(31,31,31,0.88) 34%, rgba(31,31,31,0.55) 58%, rgba(31,31,31,0.18) 76%, rgba(31,31,31,0.08) 100%)
          `,
        }}
      />

      {!prefersReducedMotion && (
        <div className="absolute inset-y-0 right-[14%] w-[24rem] bg-[#1C3E8B]/18 blur-3xl pointer-events-none" />
      )}

      <Container className="relative z-10 w-full pt-18 pb-4 md:pt-24 md:pb-8">
        <div className="max-w-4xl">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-flex items-center rounded-full border border-[#4A8FB8] px-4 py-1.5 text-sm font-display font-medium text-[#4A8FB8] bg-[#10202C]/30 backdrop-blur-sm">
              Inteli-Me
            </span>
          </motion.div>

          <motion.h1
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="font-display text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-[#EAF5FF] sm:text-[2.5rem] lg:text-[3rem] max"
          >
            Build the future of Decision Intelligence.
            <br />
            With Passion. With Purpose.
          </motion.h1>

          <motion.p
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-9 max-w-4xl font-body text-lg leading-relaxed text-white/92 sm:text-[1.5rem]"
          >
            This isn't just another analytics role. This is where data meets business impact.
          </motion.p>

          <motion.p
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-8 max-w-[50rem] font-body text-lg leading-relaxed text-white/82"
          >
            Join a community of 150+ data thinkers, engineers, and innovators working with 100+ global
            enterprises. From Data Engineering to AI, ML, BI, and Decision Intelligence we turn data into
            decisions that move businesses forward.
          </motion.p>

          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="mt-12 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="https://inteliment.zohorecruit.in/jobs/Careers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-lg border border-[#5BA3D1] bg-[#5BA3D1] px-6 py-3.5 font-display text-lg font-semibold text-white shadow-[0_0_20px_rgba(74,163,223,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#63B0E5]"
            >
              View Open Roles
              <img src={explorePlatformIco} alt="" aria-hidden="true" className="h-7 w-7" />
            </a>

            <a
              href="#culture"
              className="inline-flex items-center justify-center rounded-lg border border-[#5BA3D1] bg-white px-6 py-3.5 font-display text-lg font-semibold text-[#5BA3D1] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#F3FAFF]"
            >
              Explore Our Culture
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
