import { Navigate, useParams } from 'react-router-dom'
import { CheckCircle2, Clock, ArrowRight } from 'lucide-react'
import * as Icons from 'lucide-react'
import SEOHead from '@/components/ui/SEOHead'
import Button from '@/components/ui/Button'
import HeroSection from '@/components/sections/HeroSection'
import CTABanner from '@/components/sections/CTABanner'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import GlassCard from '@/components/ui/GlassCard'
import Badge from '@/components/ui/Badge'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { buildPageMeta, serviceJsonLd, breadcrumbJsonLd } from '@/utils/seo'
import { practiceAreas } from '@/data/solutions'

function parseCounterValue(val) {
  // e.g. '10K+' → { end: 10, suffix: 'K+' }, '96%+' → { end: 96, suffix: '%+' }, 'TB/day' → null
  const match = String(val).match(/^(\d+)(.*)$/)
  if (!match) return null
  return { end: parseInt(match[1], 10), suffix: match[2] || '' }
}

export default function SolutionDetail() {
  const { slug } = useParams()
  const solution = practiceAreas.find((s) => s.slug === slug)
  if (!solution) return <Navigate to="/solutions" replace />

  const Icon = Icons[solution.icon] || Icons.Database
  const meta = buildPageMeta(solution.title, solution.description, `/solutions/${slug}`)

  return (
    <>
      <SEOHead
        meta={meta}
        jsonLd={serviceJsonLd(solution)}
      />
      {solution.bannerImage ? (
        /* Banner-image hero, same pattern as industry pages */
        <section className="relative overflow-hidden mt-16 min-h-[420px] sm:min-h-[500px] lg:min-h-[calc(100vh-4rem)]">
          <img
            src={solution.bannerImage}
            alt={`${solution.title}, Inteliment Decision Intelligence`}
            className="absolute inset-0 w-full h-full object-cover object-right-top"
          />
          {/* Dark gradient, stronger on mobile for legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/40 lg:from-navy/80 lg:via-navy/50 lg:to-transparent" />

          <div className="absolute inset-0 flex items-center">
            <div className="w-full pl-5 pr-5 sm:pl-10 sm:pr-10 lg:pl-16 lg:pr-0">
              <div className="max-w-xl lg:max-w-2xl">
                {/* Eyebrow badge */}
                <span className="inline-block px-4 py-1.5 glass rounded-full text-sm font-display font-semibold text-teal border border-teal/20 mb-5">
                  {solution.layer}
                </span>
                {/* Headline */}
                <h1 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white leading-tight mb-4">
                  {solution.title}
                </h1>
                {/* Tagline + Description */}
                <p className="text-white/90 font-display font-semibold text-base lg:text-lg leading-snug mb-2 max-w-xl">
                  {solution.tagline}.
                </p>
                <p className="text-white/70 font-body text-sm lg:text-base leading-relaxed mb-8 max-w-xl">
                  {solution.description}
                </p>
                {/* CTAs */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                  <Button to="/contact" size="md" icon={ArrowRight} className="rounded-full">
                    Discuss Your {solution.title} Needs
                  </Button>
                  <Button to="/solutions" variant="secondary" size="md" className="rounded-full">
                    See All Solutions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <HeroSection
          eyebrow={solution.layer}
          title={solution.title}
          subtitle={`${solution.tagline}, ${solution.description}`}
          ctaPrimary={{ label: `Discuss Your ${solution.title} Needs`, to: '/contact' }}
          ctaSecondary={{ label: 'See All Solutions', to: '/solutions' }}
          variant="compact"
        />
      )}

      {/* Challenge */}
      <section className="py-16 bg-surface section-light">
        <Container narrow>
          <ScrollReveal>
            <div className="text-center mb-8">
              <span className="text-xs font-display font-bold uppercase tracking-widest text-teal">The Challenge</span>
              <h2 className="font-display font-bold text-display-md text-navy mt-2">{solution.challenge}</h2>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Deliverables + Platforms */}
      <section className="py-20 bg-navy mesh-bg">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <ScrollReveal direction="left">
              <GlassCard hover={false} className="p-6 h-full">
                <h3 className="font-display font-bold text-white text-xl mb-5">What We Build</h3>
                <div className="space-y-3">
                  {solution.deliverables.map((d) => (
                    <div key={d} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-teal mt-0.5 shrink-0" />
                      <span className="text-sm text-white/80 font-body">{d}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 mt-6 p-3 glass rounded-lg border border-teal/20">
                  <Clock size={14} className="text-teal" />
                  <span className="text-xs font-display font-semibold text-white/80">Typical Timeline: </span>
                  <span className="text-xs text-teal font-body">{solution.timeline}</span>
                </div>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <GlassCard hover={false} className="p-6 h-full">
                <h3 className="font-display font-bold text-white text-xl mb-5">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {solution.platforms.map((p) => (
                    <Badge key={p} color="teal" className="text-xs py-1 px-3">{p}</Badge>
                  ))}
                </div>
              </GlassCard>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* DI Connection */}
      <section className="py-16 bg-surface section-light">
        <Container narrow>
          <ScrollReveal>
            <div className="glass-light rounded-2xl p-8 border border-teal/20 text-center">
              <span className="text-xs font-display font-bold uppercase tracking-widest text-teal mb-3 block">How This Feeds Decision Intelligence</span>
              <p className="text-lg text-grey-700 font-body leading-relaxed">{solution.diConnection}</p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Track Record, only for solutions that have it */}
      {solution.trackRecord && (
        <section className="py-16 bg-navy mesh-bg">
          <Container>
            <ScrollReveal>
              <p className="text-center text-xs font-display font-bold uppercase tracking-widest text-teal mb-8">
                {solution.title} Track Record
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
              {Object.entries(solution.trackRecord).map(([key, val], i) => {
                const parsed = parseCounterValue(val)
                const label = {
                  transformations: 'Transformations', customers: 'Customers Served',
                  dataVolume: 'Data Volume', csat: 'CSAT Score', industries: 'Industries',
                  projects: 'Projects Delivered', dataLakes: 'Data Lakes Built',
                }[key] || key
                return (
                  <ScrollReveal key={key} delay={i * 0.08}>
                    <div className="glass rounded-xl p-5 text-center border border-white/10">
                      {parsed ? (
                        <AnimatedCounter
                          end={parsed.end}
                          suffix={parsed.suffix}
                          className="text-2xl font-display font-bold text-gradient-teal"
                        />
                      ) : (
                        <p className="text-2xl font-display font-bold text-gradient-teal">{val}</p>
                      )}
                      <p className="text-xs text-white/50 font-body mt-1">{label}</p>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </Container>
        </section>
      )}

      <CTABanner
        title={`Ready to build your ${solution.title} capability?`}
        subtitle="Let's discuss your specific data landscape and design the right approach."
        ctaLabel={`Discuss Your ${solution.title} Needs`}
        ctaTo="/contact"
      />
    </>
  )
}
