import * as Icons from 'lucide-react'
import SEOHead from '@/components/ui/SEOHead'
import HeroSection from '@/components/sections/HeroSection'
import CTABanner from '@/components/sections/CTABanner'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import GlassCard from '@/components/ui/GlassCard'
import GradientDivider from '@/components/ui/GradientDivider'
import { buildPageMeta } from '@/utils/seo'

const educationInitiatives = [
  {
    icon: 'BookOpen',
    title: 'Data Literacy Workshops',
    description: 'Free data literacy and analytics workshops for students at engineering colleges and vocational institutes in Pune. Covering data thinking, SQL fundamentals, and AI concepts.',
  },
  {
    icon: 'GraduationCap',
    title: 'Decision Intelligence Internship',
    description: 'Structured 6-month internships for final-year students, providing hands-on experience on live enterprise data projects. Mentored by senior engineers.',
  },
  {
    icon: 'Users',
    title: 'Campus Career Sessions',
    description: 'Annual career guidance sessions at partner colleges on data engineering, AI, and analytics career paths, helping students navigate their first years in the field.',
  },
]

const communityInitiatives = [
  {
    icon: 'Heart',
    title: 'Digital Inclusion',
    description: 'Supporting underrepresented communities in accessing digital skills through partnerships with local NGOs and skill development organisations in Maharashtra.',
  },
  {
    icon: 'Globe',
    title: 'Open-Source Contributions',
    description: 'Inteliment engineers contribute to open-source data and AI projects, sharing tools, frameworks, and knowledge with the global developer community.',
  },
]

const responsibleAIPrinciples = [
  {
    title: 'Fairness',
    description: 'Our AI models are tested for demographic bias before deployment. Clients receive bias audit reports as part of production delivery.',
  },
  {
    title: 'Transparency',
    description: 'We build explainable AI systems where decisions can be traced, audited, and challenged, not black-box outputs.',
  },
  {
    title: 'Accountability',
    description: 'Every AI system we build includes human-in-the-loop checkpoints for high-stakes decisions. Governance frameworks are part of every engagement.',
  },
  {
    title: 'Privacy by Design',
    description: 'Data minimisation, anonymisation, and access controls are built into our architectures from day one, not bolted on after the fact.',
  },
]

const sustainabilityActions = [
  { icon: 'Zap', label: 'Cloud-native architectures reduce on-premise hardware footprint' },
  { icon: 'BarChart2', label: 'Sustainability KPI dashboards for client ESG reporting' },
  { icon: 'Leaf', label: 'Paperless project delivery, all documentation, reporting, and collaboration is digital' },
  { icon: 'RefreshCw', label: 'Efficient code and pipeline design to minimise compute waste on cloud platforms' },
]

export default function CSR() {
  const meta = buildPageMeta(
    'CSR, Corporate Social Responsibility',
    "Inteliment's commitment to education, digital inclusion, responsible AI, and sustainability. Intelligence built with purpose.",
    '/csr'
  )

  return (
    <>
      <SEOHead meta={meta} />

      {/* S1, Hero */}
      <HeroSection
        eyebrow="Corporate Social Responsibility"
        title="Building with responsibility."
        subtitle="Data and AI shape how people live and work. We take that seriously, in how we build our systems, how we grow our team, and how we give back to the communities we operate in."
        variant="compact"
      />

      {/* S2, Education */}
      <section className="py-20 bg-surface section-light">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Education"
              title="Building the next generation of data talent."
              subtitle="Inteliment invests in education because the talent gap in data and AI is real, and we have the expertise to help close it."
              light
              align="center"
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {educationInitiatives.map((item, i) => {
              const Icon = Icons[item.icon] || Icons.BookOpen
              return (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <div className="glass-light rounded-xl p-6 h-full border border-grey-200/60 hover:border-teal/30 hover:-translate-y-1 transition-all">
                    <div className="w-11 h-11 rounded-xl bg-teal/10 flex items-center justify-center mb-5">
                      <Icon size={22} className="text-teal" />
                    </div>
                    <h3 className="font-display font-bold text-navy text-lg mb-3">{item.title}</h3>
                    <p className="text-grey-700 font-body text-sm leading-relaxed">{item.description}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </Container>
      </section>

      <GradientDivider />

      {/* S3, Community */}
      <section className="py-20 bg-navy mesh-bg">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Community"
              title="Contributing beyond the enterprise."
              subtitle="Our team gives back through digital skills programmes, open-source contributions, and community engagements."
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-3xl mx-auto">
            {communityInitiatives.map((item, i) => {
              const Icon = Icons[item.icon] || Icons.Heart
              return (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <GlassCard className="p-6 h-full flex flex-col">
                    <div className="w-11 h-11 rounded-xl bg-teal/15 flex items-center justify-center mb-5">
                      <Icon size={22} className="text-teal" />
                    </div>
                    <h3 className="font-display font-bold text-white text-lg mb-3">{item.title}</h3>
                    <p className="text-white/60 font-body text-sm leading-relaxed">{item.description}</p>
                  </GlassCard>
                </ScrollReveal>
              )
            })}
          </div>
        </Container>
      </section>

      {/* S4, Responsible AI */}
      <section className="py-20 bg-surface section-light">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Responsible AI"
              title="AI systems affect real people. We build accordingly."
              subtitle="Decision Intelligence systems affect real people. We take that seriously, and we build it into every engagement."
              light
              align="center"
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-3xl mx-auto">
            {responsibleAIPrinciples.map((principle, i) => (
              <ScrollReveal key={principle.title} delay={i * 0.08} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className="glass-light rounded-xl p-6 h-full border border-grey-200/60 border-l-4 border-l-teal hover:border-teal/30 transition-all">
                  <h3 className="font-display font-bold text-navy text-lg mb-3">{principle.title}</h3>
                  <p className="text-grey-700 font-body text-sm leading-relaxed">{principle.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <GradientDivider />

      {/* S5, Sustainability */}
      <section className="py-20 bg-navy mesh-bg">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Sustainability"
              title="Designing for efficiency, ours and yours."
              subtitle="From how we architect cloud systems to how we run our offices, sustainability is part of how we work."
            />
          </ScrollReveal>
          <div className="mt-12 max-w-2xl mx-auto space-y-4">
            {sustainabilityActions.map((action, i) => {
              const Icon = Icons[action.icon] || Icons.Leaf
              return (
                <ScrollReveal key={action.label} delay={i * 0.08}>
                  <div className="flex items-start gap-4 glass rounded-xl px-6 py-4">
                    <div className="w-9 h-9 rounded-lg bg-teal/15 flex items-center justify-center shrink-0">
                      <Icon size={17} className="text-teal" />
                    </div>
                    <p className="text-white/70 font-body text-sm leading-relaxed">{action.label}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </Container>
      </section>

      {/* S6, CTA */}
      <CTABanner
        title="If you share our commitment to responsible AI, let's talk."
        subtitle="If you share our vision for responsible, inclusive, and sustainable AI, we'd love to hear from you."
        ctaLabel="Get in Touch"
        ctaTo="/contact?subject=csr-partnership"
      />
    </>
  )
}
