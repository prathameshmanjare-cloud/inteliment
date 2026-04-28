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
import { buildPageMeta } from '@/utils/seo'
import { aceTeamRoles, engagementModels } from '@/data/team'
import { gccData } from '@/data/gcc'

function parseSpotlightMetric(val) {
  const m = String(val).match(/^([<>]?\d+)(.*)$/)
  if (!m) return null
  return { end: parseInt(m[1].replace(/[^0-9]/g, ''), 10), suffix: m[1].replace(/[0-9]/g, '') + m[2] }
}

export default function GlobalDelivery() {
  const meta = buildPageMeta(
    'Global Delivery & Analytics Centre of Excellence',
    'Inteliment\'s Global Delivery Centre in Pune powers 250+ enterprise projects worldwide. Scalable, secure, and ISO-certified Analytics Centre of Excellence for Decision Intelligence delivery.',
    '/global-delivery'
  )

  return (
    <>
      <SEOHead meta={meta} />

      {/* 1. Hero */}
      <HeroSection
        eyebrow="Global Delivery & Analytics Centre of Excellence"
        title="Your Extended Analytics Arm, Scalable. Secure. Strategic."
        subtitle={`250-seat Global Delivery Centre in Baner, Pune. ${gccData.rampCapability}. ISO 27001 & ISO 9001 certified. Fully committed to your Decision Intelligence transformation.`}
        ctaPrimary={{ label: 'Explore GCC Partnership', to: '/contact' }}
        ctaSecondary={{ label: 'Design Your ACE Team', to: '#configurator' }}
        variant="compact"
      />

      {/* 2. Why Our GCC, value levers */}
      <section className="py-20 bg-navy mesh-bg">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Why Our GCC"
              title="Six Reasons Enterprises Choose Inteliment GCC"
              subtitle="Purpose-built for analytics. Not a generic offshore centre."
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

      {/* 3. The ACE Model, 2-col text + team composition */}
      <section id="ace-model" className="py-20 bg-surface section-light">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block px-4 py-1.5 bg-[#EEF6FB] border border-[#5BA3D1] text-[#5BA3D1] rounded-full text-sm font-display font-semibold mb-3">The ACE Model</span>
                <h2 className="font-display font-bold text-display-md text-navy mb-4 leading-tight">
                  A Centre of Excellence That Works Like Your Team
                </h2>
                <p className="text-grey-700 font-body leading-relaxed mb-6">
                  Traditional outsourcing creates distance. The ACE model creates alignment. Our teams operate as embedded extensions of your organisation, attending your standups, working in your tools, owning your outcomes.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: 'Shield', title: 'IP-Led Accelerators', desc: 'Reusable frameworks, pre-built connectors, and data models that compress delivery timelines by 30–50%.' },
                    { icon: 'GitBranch', title: 'Centralized Governance, Decentralized Delivery', desc: 'Architecture standards set at the top; execution at the team level. Quality without bureaucracy.' },
                    { icon: 'Layers', title: 'Full Spectrum Capability', desc: 'From data engineering to AI agents, one team covers the complete Decision Intelligence stack.' },
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

            {/* Team roles visual */}
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

      {/* 5. Delivery & Engagement Models, all 7 */}
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
              title="From Zero to Full Delivery in 12 Weeks"
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
              title="Three-Tier Delivery Governance"
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
              title="Enterprise-Grade. Audit-Ready."
              subtitle="Your data is protected by industry-leading certifications and security practices."
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
          <ScrollReveal delay={0.3}>
            <p className="text-center text-white/40 font-body text-sm mt-8 max-w-2xl mx-auto">
              Inteliment's delivery centre operates with enterprise-grade security controls, regular third-party audits, VPN-secured environments, virtual desktop infrastructure, and 24×7 power backup with disaster recovery.
            </p>
          </ScrollReveal>
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

      {/* 10. CTA */}
      <CTABanner
        title="Explore GCC Partnership"
        subtitle="Ready to build a scalable, secure analytics delivery capability? Let's design it together."
        ctaLabel="Start the Conversation"
        ctaTo="/contact"
      />
    </>
  )
}
