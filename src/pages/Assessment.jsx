import SEOHead from '@/components/ui/SEOHead'
import MaturityAssessment from '@/components/interactive/MaturityAssessment'
import Container from '@/components/ui/Container'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { buildPageMeta } from '@/utils/seo'

export default function Assessment() {
  const meta = buildPageMeta('Data Maturity Assessment', 'Free 5-question Decision Intelligence maturity assessment. Discover your data maturity tier and get a personalized DI roadmap.', '/assessment')
  return (
    <>
      <SEOHead meta={meta} />
      <section className="min-h-screen pt-24 pb-20 mesh-bg">
        <Container>
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-block px-4 py-1.5 glass rounded-full text-sm font-display font-semibold text-gradient-teal border border-teal/20 mb-4">
                Free · 2 Minutes · Personalised Results
              </span>
              <h1 className="font-display font-bold text-display-lg text-white mb-3">How Mature Is Your Decision Intelligence? Find Out in 2 Minutes.</h1>
              <p className="text-white/60 font-body text-lg">5 questions. A benchmarked maturity tier. A personalised roadmap that shows you exactly where to focus next.</p>
            </div>
          </ScrollReveal>
          <MaturityAssessment />
          <ScrollReveal delay={0.3}>
            <p className="text-center text-xs text-white/30 font-body mt-8 max-w-2xl mx-auto">
              Disclaimer: This assessment is a self-reported diagnostic tool designed to provide a general indication of your organisation's Decision Intelligence maturity. Results are based on your responses and reflect indicative positioning only. They should not be treated as a formal audit or definitive evaluation. For a detailed assessment, contact Inteliment to arrange a structured DI Readiness Workshop.
            </p>
          </ScrollReveal>
        </Container>
      </section>
    </>
  )
}
