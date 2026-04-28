import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'

const testimonials = [
  {
    quote: "Inteliment's data engineering team transformed our fragmented actuarial data into a fully automated, audit-ready pipeline. What used to take weeks now takes hours.",
    name: 'Head of Actuarial Analytics',
    company: 'Leading Australian Insurer',
    industry: 'Insurance',
  },
  {
    quote: "The SAS migration project was delivered on time with zero post-migration issues. A technically complex engagement handled with remarkable precision.",
    name: 'Chief Data Officer',
    company: 'Global Insurance Group',
    industry: 'Insurance',
  },
  {
    quote: "Their ACE model gave us a senior architecture team and delivery capacity we could not build internally in that timeframe. Genuinely embedded, not just outsourced.",
    name: 'VP of Technology',
    company: 'Enterprise Financial Services Client',
    industry: 'Banking',
  },
]

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setIndex((i) => (i + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const go = (newIndex) => {
    setDirection(newIndex > index ? 1 : -1)
    setIndex(newIndex)
  }

  const variants = {
    enter: (d) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d) => ({ x: d < 0 ? 60 : -60, opacity: 0 }),
  }

  return (
    <section className="py-20 md:py-28 bg-navy mesh-bg">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Social Proof"
            title="Trusted by Enterprises Across Industries"
          />
        </ScrollReveal>

        <div className="mt-12 max-w-3xl mx-auto relative">
          <div className="overflow-hidden min-h-[200px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="w-full glass rounded-2xl p-8 md:p-10"
              >
                <Quote size={32} className="text-teal/40 mb-4" />
                <p className="text-lg md:text-xl text-white/90 font-body leading-relaxed mb-6 italic">
                  "{testimonials[index].quote}"
                </p>
                <div>
                  <p className="font-display font-semibold text-white">{testimonials[index].name}</p>
                  <p className="text-sm text-white/50 font-body">{testimonials[index].company}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={() => go((index - 1 + testimonials.length) % testimonials.length)} className="w-8 h-8 rounded-full glass flex items-center justify-center text-white/60 hover:text-teal transition-colors" aria-label="Previous">
              <ChevronLeft size={16} />
            </button>
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => go(i)} className={`w-2 h-2 rounded-full transition-all ${i === index ? 'bg-teal w-6' : 'bg-white/20'}`} aria-label={`Testimonial ${i + 1}`} />
            ))}
            <button onClick={() => go((index + 1) % testimonials.length)} className="w-8 h-8 rounded-full glass flex items-center justify-center text-white/60 hover:text-teal transition-colors" aria-label="Next">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}
