import SEOHead from '@/components/ui/SEOHead'
import ROICalculator from '@/components/interactive/ROICalculator'
import Container from '@/components/ui/Container'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { buildPageMeta } from '@/utils/seo'

export default function ROICalculatorPage() {
  const meta = buildPageMeta('Decision Latency ROI Calculator', 'Calculate the annual cost of decision latency in your organization and see the ROI of Decision Intelligence investment.', '/roi-calculator')
  return (
    <>
      <SEOHead meta={meta} />
      <section className="min-h-screen pt-24 pb-20 mesh-bg">
        <Container>
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-4 py-1.5 glass rounded-full text-sm font-display font-semibold text-gradient-teal border border-teal/20 mb-4">
                ROI Calculator
              </span>
              <h1 className="font-display font-bold text-display-lg text-white mb-3">Put a number on the cost of slow decisions.</h1>
              <p className="text-white/60 font-body text-lg">Set your revenue, decision cycle time, and automation potential. Get an estimated annual cost of decision latency, and the projected ROI of closing the gap.</p>
            </div>
          </ScrollReveal>
          <ROICalculator />
          <ScrollReveal delay={0.3}>
            <p className="text-center text-xs text-white/30 font-body mt-8 max-w-2xl mx-auto">
              Disclaimer: The figures produced by this calculator are illustrative estimates based on industry benchmarks and the inputs you provide. They are intended for indicative purposes only and do not represent a guarantee of financial outcomes. Actual results will vary based on your specific context, implementation approach, and organisational factors. Inteliment accepts no liability for decisions made on the basis of these estimates.
            </p>
          </ScrollReveal>
        </Container>
      </section>
    </>
  )
}
