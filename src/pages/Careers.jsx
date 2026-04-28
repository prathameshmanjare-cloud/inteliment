import { useEffect, useRef } from 'react'
import { Mail } from 'lucide-react'
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
import { cultureValues, openRolesPlaceholder } from '@/data/careers'

export default function Careers() {
  const embedRef = useRef(null)

  useEffect(() => {
    // TODO: Zoho Recruit Integration, Option A (Embed)
    // Replace YOUR_EMBED_ID with the actual embed token from:
    // Zoho Recruit → Setup → Career Site → Embed Code
    //
    // const script = document.createElement('script')
    // script.src = 'https://recruit.zoho.com/recruit/WebFormServeServlet?rid=YOUR_EMBED_ID&type=js'
    // script.async = true
    // if (embedRef.current) embedRef.current.appendChild(script)
    //
    // Option B (API), fetch live jobs for full UI control:
    // GET https://recruit.zoho.com/recruit/v2/Job_Openings
    // Headers: { Authorization: 'Zoho-oauthtoken YOUR_TOKEN' }
    // Response fields: Job_Opening_Name, City, State, Experience_Range,
    //   Job_Description, Job_Type, Industry, Date_Opened, Number_of_Positions
  }, [])

  const meta = buildPageMeta(
    'Careers at Inteliment',
    'Join 150+ Decision Intelligence specialists at Inteliment. Work on production AI, data engineering, and ML systems for 100+ global enterprises. Open roles in Pune, Sydney, Singapore, and Europe.',
    '/careers'
  )

  return (
    <>
      <SEOHead meta={meta} />

      {/* Hero */}
      <HeroSection
        eyebrow="Careers at Inteliment"
        title="Build the Future of Decision Intelligence"
        subtitle="Join a team of 150+ specialists who've spent 22 years solving the world's hardest data problems, and are now defining how enterprises make decisions with AI."
        ctaPrimary={{ label: 'View Open Roles', to: '#open-roles' }}
        ctaSecondary={{ label: 'Our Culture', to: '#culture' }}
        variant="compact"
      />

      {/* Why Inteliment, culture cards */}
      <section id="culture" className="py-20 bg-surface section-light">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Why Join Us"
              title="Deep Work. Real Impact."
              subtitle="We don't hire for headcount. We hire for craft."
              light
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {cultureValues.map((value, i) => {
              const Icon = Icons[value.icon] || Icons.Star
              return (
                <ScrollReveal key={value.title} delay={i * 0.08} direction={i % 2 === 0 ? 'left' : 'right'}>
                  <div className="glass-light rounded-xl p-7 h-full border border-grey-200/60 hover:border-teal/30 hover:shadow-glow-teal transition-all duration-300">
                    <div className="w-11 h-11 rounded-xl bg-teal/10 flex items-center justify-center mb-5">
                      <Icon size={22} className="text-teal" />
                    </div>
                    <h3 className="font-display font-bold text-navy text-xl mb-3">{value.title}</h3>
                    <p className="text-grey-700 font-body text-sm leading-relaxed">{value.description}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </Container>
      </section>

      <GradientDivider />

      {/* Open Positions */}
      <section id="open-roles" className="py-20 bg-navy mesh-bg">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Open Positions"
              title="Current Openings"
              subtitle="Roles across data engineering, ML, AI, BI, and delivery, from junior to architect."
            />
          </ScrollReveal>

          {/* Zoho Recruit embed container */}
          {/* TODO: When Zoho Recruit embed token is available, uncomment the useEffect above
              and this div will render the live jobs widget automatically. */}
          <div ref={embedRef} className="mt-12 min-h-[200px]">
            {/* Placeholder: replace with Zoho Recruit embed once configured */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {openRolesPlaceholder.map((role, i) => (
                <ScrollReveal key={role.title} delay={i * 0.06}>
                  <GlassCard hover className="p-5">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="font-display font-bold text-white text-base leading-tight">{role.title}</h3>
                      <span className="text-[10px] font-display font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-teal/15 text-teal border border-teal/20 shrink-0">
                        {role.type}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-4">
                      <div className="flex items-center gap-1.5 text-xs text-white/50 font-body">
                        <Icons.Briefcase size={11} className="text-teal/60" />
                        {role.department}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-white/50 font-body">
                        <Icons.MapPin size={11} className="text-teal/60" />
                        {role.location}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-white/50 font-body">
                        <Icons.Clock size={11} className="text-teal/60" />
                        {role.experience}
                      </div>
                    </div>
                    <a
                      href={`mailto:careers@inteliment.com?subject=Application: ${role.title}`}
                      className="inline-flex items-center gap-1.5 text-xs font-display font-semibold text-teal hover:text-teal-light transition-colors"
                    >
                      Apply Now <Icons.ArrowRight size={11} />
                    </a>
                  </GlassCard>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal delay={0.4}>
              <p className="text-center text-white/30 font-body text-xs mt-6">
                Live job listings via Zoho Recruit, integration pending setup.
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* General Application CTA */}
      <section className="py-16 bg-surface section-light">
        <Container>
          <ScrollReveal>
            <div className="glass-light rounded-2xl p-10 border border-teal/20 text-center max-w-2xl mx-auto">
              <span className="text-xs font-display font-bold uppercase tracking-widest text-teal mb-3 block">Don't See Your Role?</span>
              <h2 className="font-display font-bold text-display-sm text-navy mb-4 leading-tight">
                We're Always Looking for Exceptional Talent
              </h2>
              <p className="text-grey-700 font-body text-sm leading-relaxed mb-8">
                If you're an outstanding data engineer, ML specialist, BI developer, or AI architect, we want to hear from you even if there's no matching open role.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:careers@inteliment.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-teal text-navy font-display font-bold text-sm hover:bg-teal-light transition-colors"
                >
                  <Mail size={16} />
                  careers@inteliment.com
                </a>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <CTABanner
        title="Shape the Future of Enterprise AI"
        subtitle="22 years of data mastery. Now building the next chapter of Decision Intelligence."
        ctaLabel="Explore Open Roles"
        ctaTo="#open-roles"
      />
    </>
  )
}
