import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'

export default function HeroSection({
  eyebrow,
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  variant = 'full',
  titleClassName,
  bgStyle,
  children,
}) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      className={`relative overflow-hidden mesh-bg ${variant === 'full' ? 'pt-32 pb-24 md:pt-40 md:pb-32' : 'pt-28 pb-16 md:pt-36 md:pb-20'}`}
      style={bgStyle}
    >
      {/* Decorative glow orbs */}
      {!prefersReducedMotion && (
        <>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-mint/8 rounded-full blur-3xl pointer-events-none" />
        </>
      )}

      <Container>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {eyebrow && (
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <span className="inline-block px-4 py-1.5 glass rounded-full text-sm font-display font-semibold text-gradient-teal border border-teal/20">
                {eyebrow}
              </span>
            </motion.div>
          )}

          <motion.h1
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={titleClassName || 'font-display font-bold text-display-lg md:text-display-xl lg:text-display-2xl text-white mb-6 leading-tight'}
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed font-body"
            >
              {subtitle}
            </motion.p>
          )}

          {(ctaPrimary || ctaSecondary) && (
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              {ctaPrimary && (
                ctaPrimary.to?.startsWith('http')
                  ? <Button href={ctaPrimary.to} size="lg" icon={ArrowRight} target="_blank" rel="noopener noreferrer">
                      {ctaPrimary.label}
                    </Button>
                  : <Button to={ctaPrimary.to} size="lg" icon={ArrowRight}>
                      {ctaPrimary.label}
                    </Button>
              )}
              {ctaSecondary && (
                ctaSecondary.to?.startsWith('http')
                  ? <Button href={ctaSecondary.to} variant="secondary" size="lg" target="_blank" rel="noopener noreferrer">
                      {ctaSecondary.label}
                    </Button>
                  : <Button to={ctaSecondary.to} variant="secondary" size="lg">
                      {ctaSecondary.label}
                    </Button>
              )}
            </motion.div>
          )}

          {children && (
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  )
}
