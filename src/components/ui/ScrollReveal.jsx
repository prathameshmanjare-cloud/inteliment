import { motion, useReducedMotion } from 'framer-motion'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const directionVariants = {
  up: { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -30 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } },
  fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
  threshold = 0.15,
}) {
  const prefersReducedMotion = useReducedMotion()
  const [ref, isVisible] = useScrollReveal({ threshold })
  const variants = directionVariants[direction]

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={prefersReducedMotion ? { hidden: { opacity: 0 }, visible: { opacity: 1 } } : variants}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      transition={{ duration: prefersReducedMotion ? 0.1 : duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
