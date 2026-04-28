import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import * as Icons from 'lucide-react'
import SEOHead from '@/components/ui/SEOHead'
import HeroSection from '@/components/sections/HeroSection'
import CTABanner from '@/components/sections/CTABanner'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { buildPageMeta } from '@/utils/seo'
import { industries } from '@/data/industries'

export default function Industries() {
  const meta = buildPageMeta('Industries', 'Decision Intelligence solutions for Insurance, Banking, Healthcare, Manufacturing, Energy, and Telecom.', '/industries')
  return (
    <>
      <SEOHead meta={meta} />
      <HeroSection
        eyebrow="Industries"
        title="Decision Intelligence for Your Industry"
        subtitle="Domain expertise built over 22 years. DI implementations that understand your specific data, decisions, and outcomes."
        ctaPrimary={{ label: 'Find Your Industry', to: '#industries' }}
        variant="compact"
      />
      <section id="industries" className="py-20 bg-surface section-light">
        <Container>
          <ScrollReveal>
            <SectionHeading eyebrow="All Industries" title="Where We Deliver Decision Intelligence" light />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {industries.map((ind, i) => {
              const Icon = Icons[ind.icon] || Icons.Building2
              return (
                <ScrollReveal key={ind.slug} delay={i * 0.07}>
                  <Link to={`/industries/${ind.slug}`} className="group block h-full">
                    <div className="h-full glass-light rounded-xl p-6 border border-grey-200/60 hover:border-teal/30 hover:shadow-glow-teal hover:-translate-y-1 transition-all duration-300">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-teal/10">
                          <Icon size={20} className="text-teal" />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-navy text-lg">{ind.title}</h3>
                          <p className="text-sm text-grey-600 font-body mt-0.5 leading-snug">{ind.diUseCase}</p>
                        </div>
                      </div>
                      <div className="space-y-1.5 mb-4">
                        {ind.useCases.slice(0, 2).map((uc) => (
                          <div key={uc} className="flex items-center gap-2 text-xs text-grey-600 font-body">
                            <div className="w-1 h-1 rounded-full bg-teal shrink-0" />
                            {uc}
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center gap-1 text-xs font-display font-semibold text-teal group-hover:gap-2 transition-all">
                        Explore DI for {ind.title} <ArrowRight size={11} />
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              )
            })}
          </div>
        </Container>
      </section>
      <CTABanner />
    </>
  )
}
