import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function CTABanner({
  title = 'Ready to turn your data into decisions?',
  subtitle = 'Book a free DI Assessment and discover your path to Decision Intelligence.',
  ctaLabel = 'Book a DI Assessment',
  ctaTo = '/contact',
  ctaSecondaryLabel,
  ctaSecondaryTo,
}) {
  return (
    <section className="py-20 relative overflow-hidden bg-navy-900">
      {/* Subtle dual-glow, brand-blue left, brand-green right */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at 20% 50%, rgba(91,163,209,0.12) 0%, transparent 55%), radial-gradient(ellipse at 80% 50%, rgba(81,177,152,0.10) 0%, transparent 55%)'
      }} />
      <Container>
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-display-md md:text-display-lg text-white mb-4 leading-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-white/70 mb-8 font-body">{subtitle}</p>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to={ctaTo} size="lg" icon={ArrowRight}>
                {ctaLabel}
              </Button>
              {ctaSecondaryLabel && (
                <Button to={ctaSecondaryTo} variant="secondary" size="lg">
                  {ctaSecondaryLabel}
                </Button>
              )}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}
