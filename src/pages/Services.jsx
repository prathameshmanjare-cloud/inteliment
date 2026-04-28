import SEOHead from '@/components/ui/SEOHead'
import HeroSection from '@/components/sections/HeroSection'
import CTABanner from '@/components/sections/CTABanner'
import ACEConfigurator from '@/components/interactive/ACEConfigurator'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import GlassCard from '@/components/ui/GlassCard'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import GradientDivider from '@/components/ui/GradientDivider'
import * as Icons from 'lucide-react'
import { buildPageMeta, breadcrumbJsonLd } from '@/utils/seo'
import { aceTeamRoles, engagementModels } from '@/data/team'
import { gccData } from '@/data/gcc'

function parseSpotlightMetric(val) {
  const m = String(val).match(/^([<>]?\d+)(.*)$/)
  if (!m) return null
  return { end: parseInt(m[1].replace(/[^0-9]/g, ''), 10), suffix: m[1].replace(/[0-9]/g, '') + m[2] }
}

export default function Services() {
  const meta = buildPageMeta(
    'Services, AI Centre for Excellence (ACE) & Global Delivery',
    "Inteliment's AI Centre for Excellence and Global Delivery Centre in Pune. Scalable, ISO-certified analytics and Decision Intelligence delivery for enterprises worldwide.",
    '/services'
  )
  const jsonLd = breadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
  ])

  return (
    <>
      <SEOHead meta={meta} jsonLd={jsonLd} />

      {/* 1. Hero */}
      <HeroSection
        eyebrow="AI Centre for Excellence"
        title="Your Extended Analytics Team, Without the Overhead of Building One."
        subtitle="A 250-seat, ISO 27001-certified Global Delivery Centre in Pune. Purpose-built for analytics. Operating as an embedded extension of your team, not an offshore vendor."
        ctaPrimary={{ label: 'Design Your Delivery Model', to: '/contact' }}
        ctaSecondary={{ label: 'See Team Structures', to: '#configurator' }}
        variant="compact"
      />

      {/* 1b. Services Overview 3×3 */}
      <section className="py-20 bg-surface section-light">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="What We Deliver"
              title="Every Capability. One Delivery Model."
              subtitle="Raw data to autonomous AI agents, every layer of the DI stack delivered by one team, one governance model, and one commercial relationship."
              light
              align="center"
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: 'Database',
                title: 'Data Engineering',
                desc: 'Cloud-native pipelines, data vaults, and lakehouse architectures on Snowflake, Databricks, and Azure, built for production scale, not PoC performance.',
              },
              {
                icon: 'Brain',
                title: 'Data Science & ML',
                desc: 'Predictive models that go into production. MLOps pipelines, feature stores, and model governance that keep them accurate and auditable over time.',
              },
              {
                icon: 'BarChart2',
                title: 'BI & Visualization',
                desc: 'Power BI, Tableau, and Looker deployments with semantic layer governance, embedded analytics, and self-service that executives and analysts actually use.',
              },
              {
                icon: 'Bot',
                title: 'AI Decision Agents',
                desc: 'LLM-powered agents that monitor, recommend, and act, across underwriting, claims, procurement, risk, and operations, without manual intervention.',
              },
              {
                icon: 'Layers',
                title: 'Enterprise DI Systems',
                desc: 'End-to-end Decision Intelligence platforms. Data, models, workflows, and governance, unified into a system that gets smarter with every decision.',
              },
              {
                icon: 'Settings',
                title: 'Platform Engineering',
                desc: 'Infrastructure-as-code, DevSecOps, and platform management that keeps your analytics stack secure, scalable, and running without drama.',
              },
              {
                icon: 'FileSearch',
                title: 'Data Governance',
                desc: 'DAMA-aligned catalogues, lineage tracking, quality frameworks, and GDPR/APRA compliance architectures, so your data is trusted, not just available.',
              },
              {
                icon: 'Zap',
                title: 'Real-Time Analytics',
                desc: "Kafka, Spark Streaming, and event-driven architectures that deliver sub-second intelligence for the decisions that can't wait for tomorrow's report.",
              },
              {
                icon: 'GraduationCap',
                title: 'Advisory & Enablement',
                desc: 'DI strategy, maturity assessments, roadmapping, and team uplift, from C-suite alignment to analyst capability. We help you build the internal muscle.',
              },
            ].map((service, i) => {
              const Icon = Icons[service.icon] || Icons.Star
              return (
                <ScrollReveal key={service.title} delay={i * 0.06}>
                  <div className="glass-light rounded-xl p-6 h-full border border-grey-200/60 hover:border-teal/30 hover:-translate-y-1 transition-all">
                    <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center mb-4">
                      <Icon size={20} className="text-teal" />
                    </div>
                    <h3 className="font-display font-bold text-navy text-base mb-2">{service.title}</h3>
                    <p className="text-grey-700 font-body text-sm leading-relaxed">{service.desc}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </Container>
      </section>

      {/* 2. Why Our GCC */}
      <section className="py-20 bg-navy mesh-bg">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Why Our GCC"
              title="What Makes Our Global Delivery Centre Different."
              subtitle="250 seats. 100% analytics. Every team member hired for data and AI, not general IT capacity."
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {gccData.valueLevers.map((lever, i) => {
              const Icon = Icons[lever.icon] || Icons.Star
              return (
                <ScrollReveal key={lever.lever} delay={i * 0.08} direction="up">
                  <GlassCard hover className="p-6 h-full">
                    <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center mb-4">
                      <Icon size={20} className="text-teal" />
                    </div>
                    <h3 className="font-display font-bold text-white text-lg mb-2">{lever.lever}</h3>
                    <p className="text-white/60 font-body text-sm leading-relaxed">{lever.outcome}</p>
                  </GlassCard>
                </ScrollReveal>
              )
            })}
          </div>
        </Container>
      </section>

      <GradientDivider />

      {/* 3. The ACE Model */}
      <section id="ace-model" className="py-20 bg-surface section-light">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block px-4 py-1.5 bg-[#EEF6FB] border border-[#5BA3D1] text-[#5BA3D1] rounded-full text-sm font-display font-semibold mb-3">The ACE Model</span>
                <h2 className="font-display font-bold text-display-md text-navy mb-4 leading-tight">
                  Not outsourcing. An extension.
                </h2>
                <p className="text-grey-700 font-body leading-relaxed mb-6">
                  Traditional outsourcing creates distance and handoff risk. The ACE model is different: our teams run in your tools, attend your standups, and own your outcomes. The work looks internal. The cost doesn't.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: 'Shield', title: 'IP-Led Accelerators', desc: 'Reusable frameworks, pre-built connectors, and validated data models, built in Inteli-Labs, deployed in your engagement. Delivery timelines compress by 30–50%.' },
                    { icon: 'GitBranch', title: 'Centralised Governance, Decentralised Delivery', desc: 'Architecture standards set at the engagement level. Execution at the team level. Quality without bureaucratic overhead.' },
                    { icon: 'Layers', title: 'Full Spectrum Capability', desc: 'One team. Data engineering through AI agents. No gaps, no handoffs to third parties, no capability ceilings.' },
                  ].map((item) => {
                    const Icon = Icons[item.icon] || Icons.Star
                    return (
                      <div key={item.title} className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-lg bg-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Icon size={16} className="text-teal" />
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-navy text-sm">{item.title}</h4>
                          <p className="text-sm text-grey-600 font-body mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="glass-dark rounded-2xl p-6">
                <h3 className="font-display font-bold text-white mb-4">ACE Team Composition</h3>
                <div className="space-y-2">
                  {aceTeamRoles.map((role) => {
                    const Icon = Icons[role.icon] || Icons.User
                    const categoryColor = role.category === 'leadership' ? '#00B4D8' : role.category === 'engineering' ? '#00D4AA' : '#48CAE4'
                    return (
                      <div key={role.role} className="flex items-center gap-3 p-2.5 rounded-lg glass">
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${categoryColor}20` }}>
                          <Icon size={12} style={{ color: categoryColor }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-display font-semibold text-white truncate">{role.role}</p>
                          <p className="text-[10px] text-white/40 font-body">{role.experience} · {role.focus}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* 4. ACE Configurator */}
      <section id="configurator" className="py-20 bg-navy mesh-bg">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Team Configurator"
              title="Design Your ACE Team"
              subtitle="Select the practice areas you need and see a recommended team structure."
            />
          </ScrollReveal>
          <div className="mt-12">
            <ACEConfigurator />
          </div>
        </Container>
      </section>

      {/* 5. Engagement Models */}
      <section className="py-20 bg-surface section-light">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Engagement Models"
              title="How We Work With You"
              subtitle="Seven flexible engagement structures, from embedded pods to subscription-based services."
              light
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {engagementModels.map((model, i) => {
              const Icon = Icons[model.icon] || Icons.Box
              return (
                <ScrollReveal key={model.name} delay={i * 0.07} direction="up">
                  <div className="glass-light rounded-xl p-6 h-full border border-grey-200/60 hover:border-teal/30 hover:shadow-glow-teal transition-all duration-300 hover:-translate-y-1">
                    <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center mb-4">
                      <Icon size={20} className="text-teal" />
                    </div>
                    <h3 className="font-display font-bold text-navy text-lg mb-2">{model.name}</h3>
                    <p className="text-grey-700 font-body text-sm mb-4 leading-relaxed">{model.description}</p>
                    <p className="text-xs font-display font-semibold text-teal mb-2">Best For</p>
                    <p className="text-xs text-grey-600 font-body mb-4">{model.bestFor}</p>
                    <div className="space-y-1.5">
                      {model.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-xs text-grey-700 font-body">
                          <div className="w-1 h-1 rounded-full bg-teal shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </Container>
      </section>

      {/* 6. Ramp Timeline */}
      <section className="py-20 bg-navy mesh-bg">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Onboarding Journey"
              title="Full Delivery Capability in 12 Weeks. Here's How."
              subtitle="A structured ramp designed for speed without compromising governance."
            />
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gccData.milestones.map((m, i) => (
              <ScrollReveal key={m.phase} delay={i * 0.1} direction="up">
                <div className="glass rounded-xl p-6 h-full border border-white/10 relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-teal/20 border border-teal/40 flex items-center justify-center shrink-0">
                      <span className="text-teal font-display font-bold text-sm">{i + 1}</span>
                    </div>
                    <span className="text-teal text-xs font-display font-bold">{m.timeline}</span>
                  </div>
                  <h3 className="font-display font-bold text-white text-base mb-2">{m.phase}</h3>
                  <p className="text-white/60 font-body text-sm leading-relaxed">{m.outcome}</p>
                  {i < gccData.milestones.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <Icons.ChevronRight size={16} className="text-teal/40" />
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. Governance */}
      <section className="py-16 bg-surface section-light">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Governance"
              title="Governance at Every Level, Daily to Quarterly."
              subtitle="Aligned at every level, from daily standups to quarterly strategic reviews."
              light
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {gccData.governance.map((g, i) => {
              const cadenceColors = ['#F59E0B', '#00B4D8', '#00D4AA']
              return (
                <ScrollReveal key={g.tier} delay={i * 0.1}>
                  <div className="glass-light rounded-xl p-6 h-full border border-grey-200/60 text-center">
                    <div
                      className="inline-block px-4 py-1.5 rounded-full text-xs font-display font-bold mb-4 border"
                      style={{ color: cadenceColors[i], borderColor: cadenceColors[i] + '40', backgroundColor: cadenceColors[i] + '10' }}
                    >
                      {g.cadence}
                    </div>
                    <h3 className="font-display font-bold text-navy text-lg mb-2">{g.tier}</h3>
                    <p className="text-xs text-grey-500 font-body mb-3">{g.participants}</p>
                    <p className="text-sm text-grey-700 font-body leading-relaxed">{g.focus}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </Container>
      </section>

      {/* 8. Security & Compliance */}
      <section className="py-16 bg-navy mesh-bg">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Security & Compliance"
              title="Certified. Audited. Ready on Day One."
              subtitle="Every engagement runs inside a security perimeter that meets enterprise audit requirements, before the first line of code."
            />
          </ScrollReveal>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {gccData.certifications.map((cert, i) => (
              <ScrollReveal key={cert} delay={i * 0.08}>
                <div className="glass rounded-xl px-6 py-4 border border-teal/20 flex items-center gap-3">
                  <Icons.ShieldCheck size={16} className="text-teal shrink-0" />
                  <span className="text-sm font-display font-semibold text-white">{cert}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 9. Spotlight Metrics */}
      <section className="py-20 bg-navy-800">
        <Container>
          <ScrollReveal>
            <p className="text-center text-xs font-display font-bold uppercase tracking-widest text-teal mb-10">
              GCC Delivery Track Record
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {gccData.spotlight.map((item, i) => {
              const parsed = parseSpotlightMetric(item.metric)
              return (
                <ScrollReveal key={item.label} delay={i * 0.1} direction="up">
                  <div className="text-center">
                    <div className="font-display font-bold text-4xl md:text-5xl text-white mb-2 text-gradient-teal">
                      {parsed && !isNaN(parsed.end) ? (
                        <AnimatedCounter end={parsed.end} suffix={parsed.suffix} />
                      ) : (
                        item.metric
                      )}
                    </div>
                    <p className="text-sm text-white/50 font-body">{item.label}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </Container>
      </section>

      <CTABanner
        title="Build the Analytics Capability Your Business Needs, Without Building It From Scratch."
        subtitle="250 seats available. ISO-certified. Sprint-ready. Let's design the right model for your programme."
        ctaLabel="Design Your Delivery Model"
        ctaTo="/contact"
      />
    </>
  )
}
