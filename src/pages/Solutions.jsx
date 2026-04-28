import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'
import * as Icons from 'lucide-react'
import SEOHead from '@/components/ui/SEOHead'
import HeroSection from '@/components/sections/HeroSection'
import CTABanner from '@/components/sections/CTABanner'
import CapabilityMatrix from '@/components/interactive/CapabilityMatrix'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { buildPageMeta } from '@/utils/seo'
import { practiceAreas, maturityTiers } from '@/data/solutions'

const tierBorderColors = ['#10B981', '#00B4D8', '#F59E0B', '#F97316', '#E63946']

// Layer → practice area mapping for the bridge visual
const layers = [
  { label: 'Data', practices: ['Data Engineering'] },
  { label: 'Insights', practices: ['Data Science & ML', 'BI & Visualization'] },
  { label: 'Decisions', practices: ['AI Decision Agents'] },
  { label: 'Actions', practices: ['Enterprise DI System', '(All layers)'] },
]

export default function Solutions() {
  const meta = buildPageMeta('Solutions', 'Inteliment\'s Decision Intelligence solutions, from data engineering to AI decision agents. Five practice areas built on 22 years of expertise.', '/solutions')
  return (
    <>
      <SEOHead meta={meta} />
      <HeroSection
        eyebrow="Solutions"
        title="Five Practice Areas. One Outcome: Decisions That Drive Results."
        subtitle="From the data layer to autonomous AI agents, every capability you need to build a decision-intelligent enterprise, delivered by a team that has done it 500 times."
        ctaPrimary={{ label: 'Find Your Starting Point', to: '/assessment' }}
        variant="compact"
      />

      {/* Platform-agnostic statement */}
      <section className="py-10 bg-navy">
        <Container>
          <ScrollReveal>
            <div className="glass rounded-2xl px-8 py-6 border border-teal/20 max-w-4xl mx-auto text-center">
              <p className="font-body text-white/80 text-base leading-relaxed">
                We build on the stack you already have. Snowflake, Azure, Databricks, AWS, Power BI, Tableau, open source, we engineer Decision Intelligence to fit your architecture, not the other way around.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Bridge framing */}
      <section className="py-16 bg-surface section-light">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="From Strategy to Execution"
              title="Each Practice Area Maps to a Layer of the DI Stack, and 22 Years of Production Delivery Behind It."
              light
            />
          </ScrollReveal>

          {/* Layer → practice visual */}
          <ScrollReveal delay={0.15}>
            <div className="mt-10 max-w-4xl mx-auto overflow-x-auto">
              <div className="min-w-[560px]">
                {/* Row 1: layer boxes with horizontal arrows */}
                <div className="flex items-center justify-between gap-0">
                  {layers.map((layer, i) => (
                    <div key={layer.label} className="flex items-center flex-1">
                      <div className="flex-1 px-3 py-3 rounded-lg border border-teal/40 bg-teal/5 text-center">
                        <span className="font-display font-bold text-teal text-sm tracking-wide">{layer.label}</span>
                      </div>
                      {i < layers.length - 1 && (
                        <div className="px-2 text-teal/40 font-body text-lg shrink-0">→</div>
                      )}
                    </div>
                  ))}
                </div>
                {/* Row 2: downward arrows */}
                <div className="flex items-start justify-between mt-1">
                  {layers.map((layer) => (
                    <div key={layer.label} className="flex-1 flex justify-center px-3">
                      <ChevronDown size={16} className="text-teal/30" />
                    </div>
                  ))}
                </div>
                {/* Row 3: practice labels */}
                <div className="flex items-start justify-between gap-0">
                  {layers.map((layer) => (
                    <div key={layer.label} className="flex-1 px-2 text-center">
                      {layer.practices.map((p, pi) => (
                        <p
                          key={p}
                          className={`font-body text-center leading-snug ${pi === 0 ? 'text-sm text-grey-700 font-medium' : 'text-xs text-grey-500 mt-0.5'}`}
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Practice areas */}
      <section className="py-20 bg-navy mesh-bg">
        <Container>
          <ScrollReveal>
            <SectionHeading eyebrow="Practice Areas" title="Every Layer. Every Capability." />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {practiceAreas.map((area, i) => {
              const Icon = Icons[area.icon] || Icons.Database
              return (
                <ScrollReveal key={area.slug} delay={i * 0.07}>
                  <Link to={`/solutions/${area.slug}`} className="group block h-full">
                    <div className="h-full glass rounded-xl p-6 border border-white/10 hover:border-teal/30 hover:shadow-glow-teal hover:-translate-y-1 transition-all duration-300">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${area.color}20` }}>
                          <Icon size={20} style={{ color: area.color }} />
                        </div>
                        <div>
                          <Badge color="teal" className="mb-1">{area.layer}</Badge>
                          <h3 className="font-display font-bold text-white text-lg leading-tight">{area.title}</h3>
                        </div>
                      </div>
                      <p className="text-sm text-white/60 font-body leading-relaxed mb-4">{area.description}</p>
                      <div className="text-xs text-white/40 font-body mb-4">Timeline: {area.timeline}</div>
                      <div className="flex items-center gap-1 text-xs font-display font-semibold text-teal group-hover:gap-2 transition-all">
                        Explore <ArrowRight size={11} />
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Capability Matrix */}
      <section className="py-20 bg-surface section-light">
        <Container>
          <ScrollReveal>
            <SectionHeading eyebrow="Technology Ecosystem" title="Built on Platforms You Trust." light />
          </ScrollReveal>
          <div className="mt-10">
            <CapabilityMatrix />
          </div>
        </Container>
      </section>

      {/* Maturity tiers */}
      <section className="py-20 bg-navy mesh-bg">
        <Container>
          <ScrollReveal>
            <SectionHeading eyebrow="Where to Start" title="Meet You Where You Are." />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {maturityTiers.map((tier, i) => (
              <ScrollReveal key={tier.tier} delay={i * 0.07} direction="up">
                <div className="h-full glass rounded-xl p-5 border border-white/10 hover:border-teal/30 hover:shadow-glow-teal transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl" style={{ backgroundColor: tierBorderColors[i] }} />
                  <div className="pl-3">
                    <div className="mb-2">
                      <span className="text-[10px] font-display font-bold uppercase tracking-widest" style={{ color: tierBorderColors[i] }}>
                        Tier {tier.tier}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-white text-base mb-2">{tier.title}</h3>
                    <p className="text-sm text-white/60 font-body leading-relaxed mb-4">{tier.description}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {tier.deliverables.slice(0, 2).map((d) => (
                        <span key={d} className="text-[10px] px-2 py-0.5 rounded-full bg-teal/10 text-teal font-body border border-teal/20">{d}</span>
                      ))}
                    </div>
                    <p className="text-xs text-teal font-display font-semibold">{tier.outcome}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.3}>
            <div className="text-center mt-10">
              <Button to="/assessment" icon={ArrowRight} size="lg">
                Find Your Starting Point
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <CTABanner ctaLabel="Discuss Your Needs" />
    </>
  )
}
