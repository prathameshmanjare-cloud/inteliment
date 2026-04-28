import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import * as Icons from 'lucide-react'
import SEOHead from '@/components/ui/SEOHead'
import HeroSection from '@/components/sections/HeroSection'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import GlassCard from '@/components/ui/GlassCard'
import Button from '@/components/ui/Button'
import { buildPageMeta, breadcrumbJsonLd } from '@/utils/seo'
import { inteliLabsData } from '@/data/inteliLabs'

const LAB_HERO_BG = {
  background: `
    radial-gradient(ellipse at 30% 40%, rgba(124, 58, 250, 0.12) 0%, transparent 50%),
    radial-gradient(ellipse at 70% 60%, rgba(0, 180, 216, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 80%, rgba(0, 212, 170, 0.08) 0%, transparent 50%),
    #0A2540
  `,
}

const LAB_CTA_BG = {
  background: `
    radial-gradient(ellipse at 20% 50%, rgba(124, 58, 250, 0.10) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 40%, rgba(0, 180, 216, 0.12) 0%, transparent 50%),
    #0A2540
  `,
}

function Icon({ name, size = 20, className = '' }) {
  const LucideIcon = Icons[name] || Icons.Cpu
  return <LucideIcon size={size} className={className} />
}

export default function InteliLabs() {
  const meta = buildPageMeta(
    'Inteli-Labs, AI Research Lab & Innovation Center',
    "Inteliment's dedicated AI and Decision Intelligence research lab. Production-grade IP, accelerators, and frameworks in AI, advanced analytics, and decision orchestration.",
    '/inteli-labs'
  )

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Inteli-Labs', path: '/inteli-labs' },
      ]),
      {
        '@type': 'ResearchOrganization',
        name: 'Inteli-Labs',
        description: "Inteliment's dedicated AI and Decision Intelligence research and innovation lab",
        parentOrganization: {
          '@type': 'Organization',
          name: 'Inteliment Technologies',
          url: 'https://inteliment.com',
        },
        knowsAbout: ['Artificial Intelligence', 'Decision Intelligence', 'Machine Learning', 'Data Engineering', 'GenAI'],
      },
    ],
  }

  const { hero, identity, portfolio, rubiscape, techFoundation, rdExtension, labToProduction, cta } = inteliLabsData

  return (
    <>
      <SEOHead meta={meta} jsonLd={jsonLd} />

      {/* S1, Hero */}
      <HeroSection
        eyebrow={hero.eyebrow}
        title={hero.headline}
        subtitle={hero.subtitle}
        ctaPrimary={hero.ctaPrimary}
        ctaSecondary={hero.ctaSecondary}
        variant="compact"
        bgStyle={LAB_HERO_BG}
      />

      {/* S2, What Inteli-Labs Is */}
      <section className="py-20 bg-surface section-light">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="What We Are"
              title={identity.heading}
              subtitle={identity.description}
              light
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {identity.pillars.map((pillar, i) => (
              <ScrollReveal key={pillar.title} delay={i * 0.08}>
                <div className="glass-light rounded-xl p-6 border border-grey-200/60 hover:border-teal/30 hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-teal/10 text-teal rounded-full flex items-center justify-center mb-4">
                    <Icon name={pillar.icon} size={22} />
                  </div>
                  <h3 className="font-display font-bold text-navy text-lg mb-2">{pillar.title}</h3>
                  <p className="text-sm text-grey-700 font-body leading-relaxed">{pillar.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* S3, Research & IP Portfolio */}
      <section id="research-portfolio" className="py-20 bg-navy">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Research & IP Portfolio"
              title={portfolio.heading}
              subtitle={portfolio.subtitle}
            />
          </ScrollReveal>

          <div className="mt-14 space-y-14">
            {portfolio.categories.map((category) => (
              <div key={category.name}>
                <ScrollReveal>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-9 h-9 bg-teal/20 text-teal rounded-full flex items-center justify-center shrink-0">
                      <Icon name={category.icon} size={18} />
                    </div>
                    <h3 className="font-display font-bold text-white text-xl">{category.name}</h3>
                  </div>
                </ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {category.assets.map((asset, i) => (
                    <ScrollReveal key={asset.name} delay={i * 0.07}>
                      <div className="glass rounded-xl p-5 border border-white/10 hover:border-teal/30 transition-colors flex flex-col h-full">
                        <h4 className="font-mono font-bold text-white text-base mb-2">{asset.name}</h4>
                        <p className="text-sm text-white/70 font-body leading-relaxed flex-1 mb-4">{asset.description}</p>
                        <div className="flex flex-wrap gap-1.5 mt-auto">
                          {asset.tags.map((tag) => (
                            <span key={tag} className="bg-white/10 text-teal text-xs px-2 py-0.5 rounded-full font-body">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* S4, Rubiscape Platform */}
      <section className="py-20 bg-surface section-light">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <ScrollReveal direction="left" className="lg:col-span-3">
              <span className="inline-block px-4 py-1.5 bg-[#EEF6FB] border border-[#5BA3D1] text-[#5BA3D1] rounded-full text-sm font-display font-semibold mb-4">
                Platform Backbone
              </span>
              <h2 className="font-display font-bold text-display-md text-navy leading-tight mb-4">
                {rubiscape.heading}
              </h2>
              <p className="text-base text-grey-600 font-body mb-4 leading-relaxed">{rubiscape.subtitle}</p>
              <p className="text-sm text-grey-700 font-body leading-relaxed mb-6">{rubiscape.description}</p>
              <div className="flex flex-wrap gap-3">
                <Button to={rubiscape.ctaDemo.to} size="md" icon={ArrowRight}>
                  {rubiscape.ctaDemo.label}
                </Button>
                <Button to={rubiscape.ctaSales.to} variant="secondary" size="md">
                  {rubiscape.ctaSales.label}
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" className="lg:col-span-2">
              <div className="grid grid-cols-2 gap-4">
                {rubiscape.capabilities.map((cap, i) => (
                  <div key={cap.title} className="glass-light rounded-xl p-4 border border-grey-200/60">
                    <Icon name={cap.icon} size={20} className="text-teal mb-2" />
                    <h4 className="font-display font-bold text-navy text-sm mb-1">{cap.title}</h4>
                    <p className="text-xs text-grey-600 font-body leading-relaxed">{cap.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-navy/5 text-navy/50 text-xs font-mono tracking-wide py-3 px-4 rounded-lg text-center">
                {rubiscape.operationsBar}
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* S5, Technology Foundation */}
      <section className="py-20 bg-navy">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Technology Foundation"
              title={techFoundation.heading}
              subtitle={techFoundation.subtitle}
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {techFoundation.columns.map((col, i) => (
              <ScrollReveal key={col.title} delay={i * 0.08}>
                <GlassCard hover={false} className="p-6 h-full">
                  <div className="w-10 h-10 bg-teal/20 text-teal rounded-full flex items-center justify-center mb-4">
                    <Icon name={col.icon} size={18} />
                  </div>
                  <h3 className="font-display font-bold text-white text-lg mb-4">{col.title}</h3>
                  <ul className="space-y-2">
                    {col.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal mt-2 shrink-0" />
                        <span className="text-sm text-white/70 font-body">{item}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* S6, Enterprise R&D Extension */}
      <section className="py-20 bg-surface section-light">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Enterprise Engagement"
              title={rdExtension.heading}
              subtitle={rdExtension.description}
              light
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {rdExtension.engagementModes.map((mode, i) => (
              <ScrollReveal key={mode.title} delay={i * 0.08}>
                <div className="glass-light rounded-xl p-6 border border-grey-200/60 border-l-4 border-l-teal h-full flex flex-col">
                  <Icon name={mode.icon} size={22} className="text-teal mb-3" />
                  <h3 className="font-display font-bold text-navy text-lg mb-1">{mode.title}</h3>
                  <span className="inline-block text-xs bg-teal/10 text-teal px-2 py-0.5 rounded-full mb-3 font-body w-fit">
                    {mode.duration}
                  </span>
                  <p className="text-sm text-grey-700 font-body leading-relaxed flex-1 mb-4">{mode.description}</p>
                  <p className="text-xs text-navy/50 font-body italic">Best for: {mode.bestFor}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* S7, Lab to Production */}
      <section className="py-20 bg-navy">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="How It Works"
              title={labToProduction.heading}
              subtitle={labToProduction.description}
            />
          </ScrollReveal>

          {/* Desktop flow */}
          <div className="mt-12 hidden md:flex items-center justify-center gap-4 flex-wrap">
            {labToProduction.flow.map((node, i) => (
              <>
                <ScrollReveal key={node.label} delay={i * 0.12}>
                  <GlassCard hover={false} className="p-6 text-center w-44">
                    <div className="flex items-center justify-center mb-3">
                      <Icon name={node.icon} size={32} className="text-teal" />
                    </div>
                    <p className="font-display font-bold text-white leading-tight">{node.label}</p>
                    <p className="text-xs text-white/50 font-body mt-1">{node.sublabel}</p>
                  </GlassCard>
                </ScrollReveal>
                {i < labToProduction.flow.length - 1 && (
                  <motion.span
                    key={`arrow-${i}`}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="text-teal text-2xl select-none"
                  >
                    →
                  </motion.span>
                )}
              </>
            ))}
          </div>

          {/* Mobile flow */}
          <div className="mt-10 flex flex-col items-center gap-3 md:hidden">
            {labToProduction.flow.map((node, i) => (
              <>
                <ScrollReveal key={node.label} delay={i * 0.1} className="w-full max-w-xs">
                  <GlassCard hover={false} className="p-5 text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Icon name={node.icon} size={28} className="text-teal" />
                    </div>
                    <p className="font-display font-bold text-white">{node.label}</p>
                    <p className="text-xs text-white/50 font-body mt-1">{node.sublabel}</p>
                  </GlassCard>
                </ScrollReveal>
                {i < labToProduction.flow.length - 1 && (
                  <motion.span
                    key={`arrow-mob-${i}`}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="text-teal text-2xl select-none"
                  >
                    ↓
                  </motion.span>
                )}
              </>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="text-center mt-10">
              <Button to={labToProduction.cta.to} variant="ghost" icon={ArrowRight}>
                {labToProduction.cta.label}
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* S8, CTA */}
      <section className="py-20" style={LAB_CTA_BG}>
        <Container>
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-display font-bold text-display-md text-white mb-4">{cta.heading}</h2>
              <p className="text-lg text-white/70 font-body leading-relaxed">{cta.subtitle}</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cta.paths.map((path, i) => (
              <ScrollReveal key={path.label} delay={i * 0.08}>
                <Link to={path.to} className="block group">
                  <GlassCard hover className="p-8 text-center">
                    <div className="flex items-center justify-center mb-4">
                      <Icon name={path.icon} size={28} className="text-white group-hover:text-teal transition-colors" />
                    </div>
                    <p className="font-display font-bold text-white text-base group-hover:text-teal transition-colors">
                      {path.label}
                    </p>
                    <ArrowRight size={16} className="text-teal mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </GlassCard>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
