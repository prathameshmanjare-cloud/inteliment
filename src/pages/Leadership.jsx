import SEOHead from '@/components/ui/SEOHead'
import HeroSection from '@/components/sections/HeroSection'
import CTABanner from '@/components/sections/CTABanner'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import GlassCard from '@/components/ui/GlassCard'
import { buildPageMeta, breadcrumbJsonLd } from '@/utils/seo'
import { founders, leadershipTeam } from '@/data/leadership'

function LinkedInIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
function TwitterIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const ringColors = ['border-teal', 'border-mint/60', 'border-orange-400', 'border-blue-400', 'border-violet-400']

export default function Leadership() {
  const meta = buildPageMeta(
    'Leadership Team',
    'Meet the founders and leadership team behind Inteliment, the Decision Intelligence company with 22 years of data mastery.',
    '/about/leadership'
  )
  const jsonLd = breadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Leadership', path: '/about/leadership' },
  ])

  return (
    <>
      <SEOHead meta={meta} jsonLd={jsonLd} />

      <HeroSection
        eyebrow="Our People"
        title="The Team Behind the Intelligence"
        subtitle="Two decades of building, led by the same vision since 2004."
        variant="compact"
      />

      {/* Founders */}
      <section className="py-20 bg-navy mesh-bg">
        <Container>
          <ScrollReveal>
            <SectionHeading eyebrow="Founding Leadership" title="The people who built Inteliment, and who still lead it." />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 max-w-4xl mx-auto">
            {founders.map((founder, i) => (
              <ScrollReveal key={founder.name} delay={i * 0.1}>
                <GlassCard hover={false} className="p-10">
                  {/* TODO: Replace circle with <img src={founder.photoSrc} className="w-36 h-36 rounded-full mx-auto object-cover mb-6" alt={founder.name} /> when photo uploaded */}
                  <div
                    className="w-36 h-36 rounded-full mx-auto mb-6 flex items-center justify-center text-white font-display font-bold text-3xl"
                    style={{ background: 'linear-gradient(135deg, #0A2540 0%, #00B4D8 100%)' }}
                  >
                    {founder.initials}
                  </div>
                  <h3 className="font-display font-bold text-white text-2xl text-center mb-1">{founder.name}</h3>
                  <p className="text-teal text-sm font-body text-center mb-5">{founder.title}</p>
                  <p className="text-white/60 font-body text-sm leading-relaxed mb-6">{founder.bio}</p>
                  <div className="flex items-center justify-center gap-3">
                    <a
                      href={founder.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 glass rounded-full flex items-center justify-center text-white/60 hover:text-teal transition-colors"
                    >
                      <LinkedInIcon size={15} />
                    </a>
                    <a
                      href={founder.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 glass rounded-full flex items-center justify-center text-white/60 hover:text-teal transition-colors"
                    >
                      <TwitterIcon size={15} />
                    </a>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-surface section-light">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Senior Leadership"
              title="The leaders behind every engagement."
              subtitle="Senior practitioners, not managers. Every leader at Inteliment has delivered, not just overseen."
              light
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {leadershipTeam.map((person, i) => (
              <ScrollReveal key={person.name} delay={i * 0.08}>
                <div className="glass-light rounded-2xl p-7 border border-grey-200/60 hover:-translate-y-1 transition-all duration-300">
                  {/* TODO: Replace circle with <img src={person.photoSrc} className="w-20 h-20 rounded-full object-cover mb-4" alt={person.name} /> when photo uploaded */}
                  <div
                    className={`w-20 h-20 rounded-full mb-4 flex items-center justify-center text-white font-display font-bold text-lg border-4 ${ringColors[i % ringColors.length]}`}
                    style={{ background: 'linear-gradient(135deg, #0D3460 0%, #0A4D60 100%)' }}
                  >
                    {person.initials}
                  </div>
                  <h4 className="font-display font-bold text-navy text-lg mb-1">{person.name}</h4>
                  <p className="text-sm text-grey-600 font-body">{person.title}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner
        title="Join Our Team"
        subtitle="We're always looking for exceptional people who want to build the future of Decision Intelligence."
        ctaLabel="View Open Roles"
        ctaTo="/careers"
      />
    </>
  )
}
