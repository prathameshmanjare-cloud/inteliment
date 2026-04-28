import SEOHead from '@/components/ui/SEOHead'
import HeroSection from '@/components/sections/HeroSection'
import CTABanner from '@/components/sections/CTABanner'
import ACEConfigurator from '@/components/interactive/ACEConfigurator'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import GlassCard from '@/components/ui/GlassCard'
import * as Icons from 'lucide-react'
import { buildPageMeta } from '@/utils/seo'
import { aceTeamRoles, engagementModels } from '@/data/team'

export default function ACE() {
  const meta = buildPageMeta('ACE Model, Analytics Centre of Excellence', 'Build your Analytics Centre of Excellence with Inteliment\'s embedded DI team model. Flexible engagement, senior-led delivery, and IP-led accelerators.', '/ace')
  return (
    <>
      <SEOHead meta={meta} />
      <HeroSection
        eyebrow="ACE Model"
        title="Build Your Analytics Centre of Excellence"
        subtitle="Inteliment ACE embeds a senior-led, full-stack Decision Intelligence team directly into your organisation, delivering at enterprise pace without the cost and delay of internal hiring."
        ctaPrimary={{ label: 'Design Your CoE', to: '/contact' }}
        ctaSecondary={{ label: 'See How It Works', to: '#model' }}
        variant="compact"
      />

      {/* What is ACE */}
      <section id="model" className="py-20 bg-surface section-light">
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

      {/* Engagement Models */}
      <section className="py-20 bg-navy mesh-bg">
        <Container>
          <ScrollReveal>
            <SectionHeading eyebrow="Engagement Models" title="How We Work With You" />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {engagementModels.map((model, i) => {
              const Icon = Icons[model.icon] || Icons.Box
              return (
                <ScrollReveal key={model.name} delay={i * 0.1}>
                  <GlassCard hover className="p-6 h-full">
                    <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center mb-4">
                      <Icon size={20} className="text-teal" />
                    </div>
                    <h3 className="font-display font-bold text-white text-xl mb-2">{model.name}</h3>
                    <p className="text-white/60 font-body text-sm mb-4 leading-relaxed">{model.description}</p>
                    <p className="text-xs font-display font-semibold text-teal/80 mb-3">Best For</p>
                    <p className="text-xs text-white/50 font-body">{model.bestFor}</p>
                    <div className="mt-5 space-y-2">
                      {model.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-xs text-white/60 font-body">
                          <div className="w-1 h-1 rounded-full bg-teal shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </ScrollReveal>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Configurator */}
      <section className="py-20 bg-navy mesh-bg">
        <Container>
          <ScrollReveal>
            <SectionHeading eyebrow="Team Configurator" title="Design Your ACE Team" subtitle="Select the practice areas you need and see a recommended team structure." />
          </ScrollReveal>
          <div className="mt-12">
            <ACEConfigurator />
          </div>
        </Container>
      </section>

      <CTABanner title="Ready to build your Analytics Centre of Excellence?" subtitle="Let's design a team structure tailored to your data maturity and delivery goals." ctaLabel="Design Your CoE" ctaTo="/contact" />
    </>
  )
}
