import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import * as Icons from 'lucide-react'
import SEOHead from '@/components/ui/SEOHead'
import HeroSection from '@/components/sections/HeroSection'
import CTABanner from '@/components/sections/CTABanner'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import GlassCard from '@/components/ui/GlassCard'
import Button from '@/components/ui/Button'
import { buildPageMeta, localBusinessJsonLd, breadcrumbJsonLd } from '@/utils/seo'
import { australiaData } from '@/data/regions/australia'

export default function Australia() {
  const meta = buildPageMeta(
    'Decision Intelligence for Australian Enterprises | Inteliment Australia',
    'Inteliment\'s Sydney-based Decision Intelligence practice. Cloud modernisation, AI, and data engineering for APRA-regulated enterprises across Insurance, Banking, Healthcare, and Energy.',
    '/australia'
  )

  const jsonLd = [
    localBusinessJsonLd(),
    breadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Australia', path: '/australia' },
    ]),
  ]

  const { hero, practice, solutions, impactStories, clients, platforms, globalBacking } = australiaData

  return (
    <>
      <SEOHead meta={meta} jsonLd={jsonLd[0]} />

      {/* S1, Hero */}
      <HeroSection
        eyebrow={hero.eyebrow}
        title={hero.title}
        subtitle={hero.subtitle}
        ctaPrimary={{ label: 'Talk to Our Sydney Team', to: '/contact?region=australia' }}
        ctaSecondary={{ label: 'See Our Work', to: '#impact' }}
        variant="compact"
      />

      {/* S2, Sydney Practice */}
      <section className="py-16 bg-surface section-light">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left">
              <span className="inline-block px-4 py-1.5 bg-[#EEF6FB] border border-[#5BA3D1] text-[#5BA3D1] rounded-full text-sm font-display font-semibold mb-4">
                Our Australian Practice
              </span>
              <h2 className="font-display font-bold text-display-md text-navy mb-6 leading-tight">
                Sydney-based. Built for ANZ enterprises.
              </h2>
              <p className="text-base text-grey-700 font-body leading-relaxed mb-6">
                {practice.description}
              </p>
              <div className="space-y-3 mb-8">
                <p className="text-xs font-display font-bold uppercase tracking-widest text-grey-500">Technical Strengths</p>
                {practice.technicalStrengths.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-teal mt-0.5 shrink-0" />
                    <p className="text-sm text-grey-700 font-body">{item}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                <p className="text-xs font-display font-bold uppercase tracking-widest text-grey-500">Domain Strengths</p>
                {practice.domainStrengths.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-teal mt-0.5 shrink-0" />
                    <p className="text-sm text-grey-700 font-body">{item}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                {practice.highlights.map((h, i) => (
                  <div key={i} className="glass-light rounded-xl p-5 border border-grey-200/60 text-center">
                    <div className="font-display font-bold text-3xl text-teal mb-1">{h.metric}</div>
                    <p className="text-xs text-grey-600 font-body leading-snug">{h.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 glass-light rounded-xl p-5 border border-teal/20">
                <p className="text-xs font-display font-bold uppercase tracking-widest text-teal mb-3">Regulatory Expertise</p>
                <div className="space-y-2">
                  {['APRA CPS 234 compliance', 'Privacy Act 1988 aligned', 'Australian data residency', 'CDR & Open Banking ready'].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                      <p className="text-sm text-grey-700 font-body">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* S3, What We Deliver */}
      <section className="py-20 bg-navy mesh-bg">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="What We Deliver"
              title="The Full Decision Intelligence Stack, For ANZ."
              subtitle="From legacy modernisation to autonomous AI. All four layers, delivered by a team that understands the ANZ enterprise environment."
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {solutions.map((sol, i) => {
              const Icon = Icons[sol.icon] || Icons.Database
              return (
                <ScrollReveal key={sol.title} delay={i * 0.07}>
                  <GlassCard className="p-6 h-full">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${sol.color}20` }}>
                        <Icon size={20} style={{ color: sol.color }} />
                      </div>
                      <h3 className="font-display font-bold text-white text-lg leading-tight">{sol.title}</h3>
                    </div>
                    <p className="text-sm text-white/60 font-body leading-relaxed mb-4">{sol.description}</p>
                    <p className="text-xs text-teal/70 font-body">{sol.techStack}</p>
                  </GlassCard>
                </ScrollReveal>
              )
            })}
          </div>
          <ScrollReveal delay={0.3}>
            <div className="text-center mt-10">
              <Button to="/solutions" variant="secondary" icon={ArrowRight} size="lg">
                Explore All Solutions
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* S4, Impact Stories */}
      <section id="impact" className="py-20 bg-surface section-light">
        <Container>
          <ScrollReveal>
            <SectionHeading eyebrow="Impact Stories" title="Delivered in ANZ." light />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {impactStories.map((story, i) => (
              <ScrollReveal key={story.slug} delay={i * 0.08}>
                <Link to={`/impact/${story.slug}`} className="group block h-full">
                  <div className="h-full glass-light rounded-xl p-6 border border-grey-200/60 hover:border-teal/30 hover:-translate-y-1 transition-all duration-300">
                    <span className="inline-block text-[10px] font-display font-bold uppercase tracking-widest text-teal bg-teal/10 border border-teal/20 rounded-full px-2 py-0.5 mb-4">
                      {story.industry}
                    </span>
                    <div className="mb-4">
                      <div className="font-display font-bold text-4xl text-navy">{story.metric}</div>
                      <div className="text-sm text-grey-600 font-body">{story.metricLabel}</div>
                    </div>
                    <h3 className="font-display font-bold text-navy text-base leading-snug mb-3">{story.headline}</h3>
                    <p className="text-sm text-grey-600 font-body leading-relaxed mb-4">{story.description}</p>
                    <div className="flex items-center gap-1 text-xs font-display font-semibold text-teal group-hover:gap-2 transition-all">
                      Read Story <ArrowRight size={11} />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* S5, Australian Clients */}
      <section className="py-16 bg-navy">
        <Container>
          <ScrollReveal>
            <p className="text-center text-xs font-display font-bold uppercase tracking-widest text-white/30 mb-8">
              Trusted by Australian Enterprises
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3">
              {clients.map((name) => (
                <span key={name} className="px-4 py-2 glass rounded-full text-sm font-display font-semibold text-white/60 border border-white/10">
                  {name}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* S6, Platform Expertise */}
      <section className="py-20 bg-surface section-light">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Platform Expertise"
              title="The platforms ANZ enterprises trust."
              light
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {platforms.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 0.07}>
                <div className="glass-light rounded-xl p-5 border border-grey-200/60 h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs px-2 py-0.5 rounded-full font-display font-bold border" style={{ color: p.color, backgroundColor: `${p.color}15`, borderColor: `${p.color}30` }}>
                      {p.badge}
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-navy mb-2">{p.name}</h4>
                  <p className="text-xs text-grey-600 font-body leading-relaxed">{p.note}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* S7, Global Backing */}
      <section className="py-20 bg-navy mesh-bg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <span className="inline-block px-4 py-1.5 glass border border-teal/20 text-teal rounded-full text-sm font-display font-semibold mb-4">
                Global Backing
              </span>
              <h2 className="font-display font-bold text-display-md text-white mb-6 leading-tight">
                {globalBacking.headline}
              </h2>
              <p className="text-base text-white/60 font-body leading-relaxed mb-8">
                {globalBacking.description}
              </p>
              <div className="space-y-3">
                {globalBacking.trustPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 size={15} className="text-teal mt-0.5 shrink-0" />
                    <p className="text-sm text-white/70 font-body">{point}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                {globalBacking.stats.map((stat, i) => (
                  <div key={i} className="glass rounded-xl p-6 border border-white/10 text-center">
                    <div className="font-display font-bold text-3xl text-teal mb-1">{stat.metric}</div>
                    <p className="text-sm text-white/50 font-body">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 glass rounded-xl p-5 border border-teal/20">
                <div className="flex flex-col gap-3">
                  {[
                    { flag: '🇦🇺', city: 'Sydney, Australia', role: 'Commercial & Architecture Lead' },
                    { flag: '🇮🇳', city: 'Pune, India', role: 'Delivery Centre (AEST-aligned)' },
                    { flag: '🇸🇬', city: 'Singapore', role: 'APAC Regional Office' },
                  ].map((o) => (
                    <div key={o.city} className="flex items-start gap-3">
                      <span className="text-lg shrink-0">{o.flag}</span>
                      <div>
                        <p className="text-sm font-display font-semibold text-white">{o.city}</p>
                        <p className="text-xs text-white/40 font-body">{o.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* S8, CTA */}
      <CTABanner
        title="Talk to our Sydney team. No handoffs. No offshore surprises."
        subtitle="Sydney-based commercial and technical leadership. Pune delivery running AEST-aligned. You deal with principals from day one, and throughout."
        ctaLabel="Talk to Our Sydney Team"
        ctaTo="/contact?region=australia"
      />
    </>
  )
}
