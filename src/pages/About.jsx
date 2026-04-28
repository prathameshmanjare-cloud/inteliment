import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import * as Icons from 'lucide-react'
import SEOHead from '@/components/ui/SEOHead'
import Button from '@/components/ui/Button'
import CTABanner from '@/components/sections/CTABanner'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import GlassCard from '@/components/ui/GlassCard'
import GradientDivider from '@/components/ui/GradientDivider'
import { buildPageMeta, organizationJsonLd } from '@/utils/seo'
import { companyMilestones } from '@/data/team'
import {
  founders,
  leadershipTeam,
  visionMissionValues,
  aboutAwards,
} from '@/data/leadership'

// ── Inline social icon SVGs ─────────────────────────────────────────
function LinkedInIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
function FacebookIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.885v2.269h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
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

function FounderSocialLinks({ founder, align = 'left' }) {
  return (
    <div className={`flex gap-3 mt-3 ${align === 'right' ? 'justify-end' : ''}`}>
      {founder.linkedIn && (
        <a href={founder.linkedIn} target="_blank" rel="noopener noreferrer"
          className="text-white/50 hover:text-teal transition-colors" aria-label="LinkedIn">
          <LinkedInIcon size={22} />
        </a>
      )}
      {founder.facebook && (
        <a href={founder.facebook} target="_blank" rel="noopener noreferrer"
          className="text-white/50 hover:text-teal transition-colors" aria-label="Facebook">
          <FacebookIcon size={22} />
        </a>
      )}
      {founder.twitter && (
        <a href={founder.twitter} target="_blank" rel="noopener noreferrer"
          className="text-white/50 hover:text-teal transition-colors" aria-label="X / Twitter">
          <TwitterIcon size={22} />
        </a>
      )}
    </div>
  )
}

// ── Static data ────────────────────────────────────────────────────
const trustBadges = [
  { label: 'ISO 9001:2015', sublabel: 'Certified' },
  { label: 'ISMS', sublabel: 'Certified' },
  { label: 'Rubiscape', sublabel: 'Strategic Partner' },
  { label: 'Snowflake', sublabel: 'Silver Partner' },
  { label: 'Microsoft', sublabel: 'Gold Certified' },
  { label: 'Databricks', sublabel: 'ISV Partner' },
  { label: 'AWS', sublabel: 'ISV Partner' },
  { label: 'Informatica', sublabel: 'Silver Partner' },
]

const impactNumbers = [
  { end: 22, suffix: '+', label: 'Years of Data Mastery' },
  { end: 500, suffix: '+', label: 'Projects Delivered' },
  { end: 100, suffix: '+', label: 'Enterprise Clients' },
  { end: 150, suffix: '+', label: 'Global Team' },
  { end: 96, suffix: '%', label: 'Client Satisfaction' },
  { end: 12, suffix: '+', label: 'Industries Served' },
]

const offices = [
  { city: 'Pune, India', role: 'Headquarters & Global Delivery Centre', flag: '🇮🇳', to: null },
  { city: 'Sydney, Australia', role: 'Client Services & AU Delivery', flag: '🇦🇺', to: '/australia' },
  { city: 'Singapore', role: 'Asia-Pacific Office', flag: '🇸🇬', to: null },
  { city: 'Europe', role: 'European Office', flag: '🇪🇺', to: null },
]

const ringColors = ['border-teal', 'border-mint/60', 'border-orange-400', 'border-blue-400', 'border-violet-400']

// ── VMV card data built from data file ─────────────────────────────
const vmvCards = (vmv) => [vmv.vision, vmv.mission, vmv.values]

export default function About() {
  const meta = buildPageMeta(
    'About Inteliment',
    '22 years of data engineering excellence. Inteliment is a Decision Intelligence company headquartered in Pune with offices in Sydney, Singapore, and Europe.',
    '/about'
  )
  return (
    <>
      <SEOHead meta={meta} jsonLd={organizationJsonLd()} />

      {/* S1, Hero */}
      <section className="relative overflow-hidden mt-16 min-h-[420px] sm:min-h-[500px] lg:min-h-[calc(100vh-4rem)]">
        <img
          src="/images/about/about-banner.png"
          alt="About Inteliment, Decision Intelligence"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark gradient, stronger on mobile for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/40 lg:from-navy/80 lg:via-navy/50 lg:to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="w-full pl-5 pr-5 sm:pl-10 sm:pr-10 lg:pl-16 lg:pr-0">
            <div className="max-w-xl lg:max-w-2xl">
              <span className="inline-block px-4 py-1.5 glass rounded-full text-sm font-display font-semibold text-teal border border-teal/20 mb-5">
                About Inteliment
              </span>
              <h1 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white leading-tight mb-4">
                22 Years of Building Systems That Make Enterprises Smarter.
              </h1>
              <p className="text-white/75 font-body text-base lg:text-lg leading-relaxed mb-8 max-w-xl">
                We started as a business intelligence consultancy in Pune. We grew through every wave of the data industry, BI, cloud, big data, machine learning, AI. What stayed constant was the mission: help enterprises make better decisions, faster.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <Button to="/contact" size="md" icon={ArrowRight} className="rounded-full">
                  Partner With Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S2, Vision, Mission, Values */}
      <section className="py-20 bg-surface section-light">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Purpose"
              title={visionMissionValues.sectionHeading}
              light
            />
          </ScrollReveal>

          {/* 3 VMV cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {vmvCards(visionMissionValues).map((card, i) => {
              const CardIcon = Icons[card.icon] || Icons.Star
              return (
                <ScrollReveal key={card.title} delay={i * 0.08}>
                  <div
                    className="rounded-2xl p-7 h-full border border-grey-200/80 hover:-translate-y-1 transition-all duration-300"
                    style={{ backgroundColor: card.bg }}
                  >
                    <div className="w-11 h-11 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${card.accent}20` }}>
                      <CardIcon size={22} style={{ color: card.accent }} />
                    </div>
                    <h3 className="font-display font-bold text-navy text-xl mb-3">{card.title}</h3>
                    <p className="text-sm text-grey-700 font-body leading-relaxed">{card.description}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>

        </Container>
      </section>

      <GradientDivider />

      {/* S4, Meet the Founders & Leadership */}
      <section className="py-20" style={{ background: '#1E252A' }}>

        {/* Section heading, constrained to page content width */}
        <Container>
          <ScrollReveal>
            <SectionHeading eyebrow="The People" title="Meet the Founders" />
          </ScrollReveal>
        </Container>

        {/* Founders image, full section width, matching section borders */}
        <div className="relative mt-10">
          <img
            src="/images/about/founders.png"
            alt="Dr. Prashant Pansare and Anand Pansare, Inteliment Founders"
            className="w-full h-auto block"
          />

          {/* Left, Dr. Prashant Pansare */}
          {/* Increased left to 12% and added max-w-xs to stop it from growing too wide */}
          <div className="hidden lg:block absolute left-[12%] top-1/2 -translate-y-1/2 w-[22%] max-w-[320px]">
            <h3 className="font-display font-bold text-white text-xl mb-1">
              Dr. Prashant Pansare
            </h3>
            <p className="text-teal text-sm font-body font-semibold mb-3">
              Founder &amp; Group CEO
            </p>
            <p className="text-white/70 font-body text-sm xl:text-base leading-relaxed">
              {founders[0].bio}
            </p>
            <FounderSocialLinks founder={founders[0]} align="left" />
          </div>

          {/* Right, Anand Pansare */}
          {/* Increased right to 12% and matched the max-width constraint */}
          <div className="hidden lg:block absolute right-[12%] top-1/2 -translate-y-1/2 w-[22%] max-w-[320px] text-right">
            <h3 className="font-display font-bold text-white text-xl mb-1">
              Anand Pansare
            </h3>
            <p className="text-teal text-sm font-body font-semibold mb-3">
              Co-Founder &amp; CEO Australia
            </p>
            <p className="text-white/70 font-body text-sm xl:text-base leading-relaxed">
              {founders[1].bio}
            </p>
            <div className="flex justify-end">
              <FounderSocialLinks founder={founders[1]} align="right" />
            </div>
          </div>
        </div>

        {/* Mobile text, bios below image on small screens */}
        <Container>
          <div className="lg:hidden mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {founders.map((founder) => (
              <div key={founder.name} className="glass rounded-xl p-6">
                <h3 className="font-display font-bold text-white text-lg mb-1">
                  {founder.name}
                </h3>
                <p className="text-teal text-sm font-body font-semibold mb-3">
                  {founder.title}
                </p>
                <p className="text-white/70 font-body text-sm leading-relaxed">
                  {founder.bio}
                </p>
                <FounderSocialLinks founder={founder} align="left" />
              </div>
            ))}
          </div>

          {/* Leadership Team */}
          <ScrollReveal delay={0.2}>
            <h3 className="font-display font-bold text-white text-lg text-center mt-16 mb-8">Leadership Team</h3>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {leadershipTeam.map((person, i) => (
              <ScrollReveal key={person.name} delay={i * 0.07}>
                <div className="glass rounded-xl p-5 text-center border border-white/10 hover:-translate-y-1 transition-all duration-300">
                  <div
                    className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-display font-bold text-sm"
                    style={{ background: 'linear-gradient(135deg, #1E252A 0%, #5BA3D1 100%)' }}
                  >
                    {person.initials}
                  </div>
                  <h4 className="font-display font-bold text-white text-sm leading-tight mb-1">{person.name}</h4>
                  <p className="text-xs text-teal font-body leading-snug">{person.title}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* S5, Our Journey GIF */}
      <section className="bg-white">
        <img
          src="/images/about/journey.gif"
          alt="Inteliment, 20 Years of Decision Intelligence"
          className="w-full h-auto block"
        />
      </section>

      {/* S6, By the Numbers */}
      <section className="py-16 bg-navy-800 mesh-bg">
        <Container>
          <ScrollReveal>
            <SectionHeading eyebrow="At a Glance" title="By the Numbers" />
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-10">
            {impactNumbers.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.07}>
                <div className="glass rounded-xl p-5 text-center border border-white/10">
                  <div className="font-display font-bold text-3xl text-teal mb-1">
                    <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                  </div>
                  <p className="text-xs text-white/50 font-body leading-snug">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* S7, Global Presence */}
      <section className="py-16 bg-navy">
        <Container>
          <ScrollReveal>
            <SectionHeading eyebrow="Global Delivery" title="Where We Work" />
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {offices.map((office, i) => (
              <ScrollReveal key={office.city} delay={i * 0.08}>
                {office.to ? (
                  <Link to={office.to} className="block group">
                    <GlassCard hover className="p-6 text-center">
                      <div className="text-3xl mb-3">{office.flag}</div>
                      <h3 className="font-display font-bold text-white text-base group-hover:text-teal transition-colors">{office.city}</h3>
                      <p className="text-white/50 font-body text-xs mt-1">{office.role}</p>
                    </GlassCard>
                  </Link>
                ) : (
                  <GlassCard hover={false} className="p-6 text-center">
                    <div className="text-3xl mb-3">{office.flag}</div>
                    <h3 className="font-display font-bold text-white text-base">{office.city}</h3>
                    <p className="text-white/50 font-body text-xs mt-1">{office.role}</p>
                  </GlassCard>
                )}
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* S8, Awards & Recognition */}
      <section className="py-20 bg-surface section-light">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Recognised for what we build."
              title="Awards"
              light
            />
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-10">
            {aboutAwards.map((award, i) => (
              <ScrollReveal key={award.name} delay={i * 0.05}>
                {/* TODO: Replace text with <img src={award.logo} alt={award.name} className="h-10 object-contain mx-auto" /> when logos uploaded */}
                <div className="border border-gray-200 rounded-xl p-4 flex items-center justify-center h-24 text-center bg-white hover:border-teal/30 hover:-translate-y-0.5 transition-all duration-200">
                  <p className="text-xs font-display font-semibold text-grey-700 leading-snug">{award.name}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* S9, Certifications */}
      <section className="py-16 bg-navy mesh-bg">
        <Container>
          <ScrollReveal>
            <SectionHeading eyebrow="Credentials" title="Certified. Accredited. Trusted." />
          </ScrollReveal>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {trustBadges.map((badge, i) => (
              <ScrollReveal key={badge.label} delay={i * 0.06}>
                <div className="glass rounded-xl px-6 py-4 border border-teal/20 text-center min-w-[120px]">
                  <p className="font-display font-bold text-teal text-base">{badge.label}</p>
                  <p className="text-xs text-white/40 font-body">{badge.sublabel}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* S10, CTA */}
      <CTABanner
        title="22 Years of Expertise. Ready to Put It to Work for You."
        subtitle="We've delivered 500+ projects across 12 industries. Let's talk about yours."
        ctaLabel="Start the Conversation"
        ctaTo="/contact"
      />
    </>
  )
}
