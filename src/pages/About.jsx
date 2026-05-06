import { useState, useEffect, useRef } from 'react'
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
import { buildPageMeta, organizationJsonLd } from '@/utils/seo'
import { companyMilestones } from '@/data/team'
import {
  founders,
  leadershipTeam,
  visionMissionValues,
  aboutAwards,
} from '@/data/leadership'
import { color } from 'framer-motion'


function CountUp({ end, suffix = '', duration = 1500 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      const steps = 40
      const increment = end / steps
      const interval = duration / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= end) { setCount(end); clearInterval(timer) }
        else setCount(Math.floor(current))
      }, interval)
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

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

export default function About() {

  const leadershipImages = {
    'Trupti Pansare':   'tp.svg',
    'Niranjan Dikshit': 'nd.svg',
    'Gauri Bapat':      'gb.svg',
    'Nimesh Shah':      'ns.svg',
    'Ashil Shah':       'as.svg',
    'Swanand Kulkarni': 'sk.svg',
  }

  const meta = buildPageMeta(
    'About Inteliment',
    '22 years of data engineering excellence. Inteliment is a Decision Intelligence company headquartered in Pune with offices in Sydney, Singapore, and Europe.',
    '/about'
  )

  return (
    <>
      <SEOHead meta={meta} jsonLd={organizationJsonLd()} />

      {/* ── S1 Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden mt-16 min-h-[420px] sm:min-h-[500px] lg:min-h-[calc(100vh-4rem)]">
        <img
          src="/images/about/about-banner.svg"
          alt="About Inteliment, Decision Intelligence"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 flex items-center">
          <div className="w-full px-6 sm:px-9 lg:px-28">
            <div className="max-w-xl lg:max-w-[520px]">
              {/* Hero eyebrow intentionally uses brand palette — lives on the banner image */}
              <span className="inline-block px-5 py-2 rounded-full text-sm font-display font-semibold text-[#3A7394] border border-[#5BA3D1] mb-5 bg-[#DFEFF8]">
                About Inteliment
              </span>
              <h1 className="font-display font-bold text-2xl sm:text-4xl lg:text-4xl xl:text-5xl text-navy leading-tight mb-5 text-nowrap">
                22 Years of Building Systems <br/>That Make Enterprises Smarter.
              </h1>
              <p className="text-navy/60 font-body text-base lg:text-lg leading-relaxed mb-8 max-w-lg">
                Most AI projects stall between proof-of-concept and production. Inteliment has spent 22 years learning what it takes to go the other way, building AI systems that work in the real world, at enterprise scale.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <Button to="/inteli-ai" size="md" icon={ArrowRight} className="rounded-lg bg-[#3a8bbf] hover:bg-[#2e75a3] border-0">
                  Explore Inteli-AI
                </Button>
                <Button to="/contact" size="md" variant="outline" className="rounded-lg border-navy/30 text-navy hover:bg-navy/5">
                  Talk to a Specialist
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── S2 Vision, Mission, Values ──────────────────────────────── */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0f1923 0%, #1a2530 50%, #0d1820 100%)' }}>
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Purpose"
              title="What Drives Us. What Defines Us."
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-12 rounded-2xl border border-white/10 overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.04)' }}>
              <div className="grid grid-cols-1 md:grid-cols-3">

                {/* Row 1 */}
                <div className="flex flex-col items-center justify-center gap-3 p-10 border-b border-r border-white/10 text-center">
                  <img src="/images/about/vision.svg" alt="Vision" className="w-10 h-10" />
                  <h3 className="font-display font-bold text-teal text-2xl">Vision</h3>
                </div>

                <div className="flex items-center justify-center p-10 border-b border-r border-white/10 text-center">
                  <p className="text-white/70 font-body text-base leading-relaxed">
                    {visionMissionValues.mission.description}
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center gap-3 p-10 border-b border-white/10 text-center">
                  <img src="/images/about/values.svg" alt="Values" className="w-10 h-10" />
                  <h3 className="font-display font-bold text-teal text-2xl">Values</h3>
                </div>

                {/* Row 2 */}
                <div className="flex items-center justify-center p-10 border-r border-white/10 text-center">
                  <p className="text-white/70 font-body text-base leading-relaxed">
                    {visionMissionValues.vision.description}
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center gap-3 p-10 border-r border-white/10 text-center">
                  <img src="/images/about/mission.svg" alt="Mission" className="w-10 h-10" />
                  <h3 className="font-display font-bold text-teal text-2xl">Mission</h3>
                </div>

                <div className="flex items-center justify-center p-10 text-center">
                  <p className="text-white/70 font-body text-base leading-relaxed">
                    {visionMissionValues.values.description}
                  </p>
                </div>

              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ── S4 Meet the Founders & Leadership ───────────────────────── */}
      <section className="py-20 relative overflow-hidden" style={{ background: '#f0f6fb' }}>

        <img
          src="/images/about/people-banner.svg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        />

        <Container className="relative z-10">

          <ScrollReveal>
            <SectionHeading eyebrow="The People" title="Meet the Founders" light />
          </ScrollReveal>

          {/* Founders Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-6xl mx-auto items-stretch">
  {founders.map((founder, i) => (
    <ScrollReveal key={founder.name} delay={i * 0.1}>
      <div
        className="flex rounded-2xl overflow-hidden border border-[#C7E0F0] shadow-lg h-full"
        style={{
          background: 'linear-gradient(135deg, #C7E0F0 0%, #ffffff 60%)',
        }}
      >
        {/* Left: Founder Image */}
        <div className="w-[200px] flex-shrink-0 self-stretch">
          <img
            src={`/images/about/${i === 0 ? 'pp.svg' : 'ap.svg'}`}
            alt={founder.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block',
            }}
          />
        </div>

        {/* Right: Text Content */}
        <div className="p-5 flex flex-col justify-center">
          <h3 className="font-display font-bold text-navy text-lg mb-0.5">
            {founder.name}
          </h3>
          <p className="text-xs font-body text-grey-500 mb-3">{founder.title}</p>
          <p className="text-xs text-grey-700 font-body leading-relaxed mb-4">
            {founder.bio}
          </p>

          {/* Social Icons */}
          <div className="flex gap-2">
            {founder.twitter && (
              
               <a href={founder.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[#C7E0F0] flex items-center justify-center text-grey-500 hover:text-navy hover:border-navy transition-colors bg-white/70"
              >
                <TwitterIcon size={13} />
              </a>
            )}
            {founder.linkedIn && (
              
                <a href={founder.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[#C7E0F0] flex items-center justify-center text-grey-500 hover:text-navy hover:border-navy transition-colors bg-white/70"
              >
                <LinkedInIcon size={13} />
              </a>
            )}
            {founder.facebook && (
              
               <a href={founder.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[#C7E0F0] flex items-center justify-center text-grey-500 hover:text-navy hover:border-navy transition-colors bg-white/70"
              >
                <FacebookIcon size={13} />
              </a>
            )}
          </div>
        </div>
      </div>
    </ScrollReveal>
  ))}
</div>

          {/* Leadership Team */}
          <ScrollReveal delay={0.2}>
            <div className="mt-16 mb-10 flex justify-center">
              <SectionHeading eyebrow="Leadership Team" light />
            </div>
          </ScrollReveal>
<div className="space-y-8">
  {/* Row 1 — 4 columns */}
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
    {leadershipTeam
      .filter(person => leadershipImages[person.name])
      .slice(0, 4)
      .map((person, i) => (
        <ScrollReveal key={person.name} delay={i * 0.07}>
          <div className="flex flex-col items-center text-center">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 shadow-md"
                style={{ background: '#eaf4fb' }}>
              <img
                src={`/images/about/${leadershipImages[person.name]}`}
                alt={person.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <h4 className="font-display font-bold text-navy text-base leading-tight mb-1">{person.name}</h4>
            <p className="text-sm text-grey-500 font-body leading-snug">{person.title}</p>
          </div>
        </ScrollReveal>
      ))}
  </div>

  {/* Row 2 — centered, same card width as row 1 */}
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
    <div className="hidden sm:block" /> {/* spacer left */}
    {leadershipTeam
      .filter(person => leadershipImages[person.name])
      .slice(4)
      .map((person, i) => (
        <ScrollReveal key={person.name} delay={i * 0.07}>
          <div className="flex flex-col items-center text-center">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 shadow-md"
                style={{ background: '#eaf4fb' }}>
              <img
                src={`/images/about/${leadershipImages[person.name]}`}
                alt={person.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <h4 className="font-display font-bold text-navy text-base leading-tight mb-1">{person.name}</h4>
            <p className="text-sm text-grey-500 font-body leading-snug">{person.title}</p>
          </div>
        </ScrollReveal>
      ))}
    <div className="hidden sm:block" /> {/* spacer right */}
  </div>
</div>

        </Container>
      </section>

      {/* ── S5 Our Journey GIF ──────────────────────────────────────── */}
      <section className="bg-white">
        <img
          src="/images/about/journey.gif"
          alt="Inteliment, 20 Years of Decision Intelligence"
          className="w-full h-auto block"
        />
      </section>

      {/* ── S6 + S7 By the Numbers & Where We Work ──────────────────── */}
<section className="relative overflow-hidden" style={{ minHeight: '800px' }}>

  <img
    src="/images/about/banner.svg"
    alt=""
    aria-hidden="true"
    className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
  />

  <div className="relative z-10 px-6 lg:px-16">

    {/* By the Numbers — heading left, grid right */}
    <div className="flex items-start justify-between gap-8 pt-16">

      {/* Left: Heading */}
      <div className="flex-shrink-0 w-[220px] pt-2">
        <ScrollReveal>
          <SectionHeading style={{ 'white-space': 'nowrap' }}
            eyebrow="At a Glance"
            titleClassName="whitespace-nowrap"
            title="By the Numbers"
            align="left"
            light
          />
        </ScrollReveal>
      </div>

      {/* Right: 3x2 Stats Grid */}
      <div className="flex-1 max-w-2xl">
        <div className="grid grid-cols-3 gap-3 mt-1">
          {impactNumbers.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.07}>
              <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
                <div className="font-display font-bold text-3xl text-navy mb-1">
                  <CountUp end={stat.end} suffix={stat.suffix} />
                </div>
                <p className="text-xs text-grey-500 font-body leading-snug">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

    </div>

    {/* Where We Work — heading left, map right */}
    {/* Where We Work — heading top-right, map below */}
<div className="flex justify-end mt-16 px-6 lg:px-16 pb-24">
  <div className="w-full max-w-2xl">

    <ScrollReveal>
      <SectionHeading
        eyebrow="Global Delivery"
        title="Where We Work"
        align="left"
        light
      />
    </ScrollReveal>

    {/* Map pins container */}
    <div className="relative mt-6" style={{ height: '340px' }}>
      {[
        { city: 'Pune, India',       role: 'Headquarters & Global Delivery Centre', flag: '🇮🇳', top: '60%', left: '65%' },
        { city: 'Sydney, Australia', role: 'Client Services & AU Delivery',         flag: '🇦🇺', top: '99%', left: '85%' },
        { city: 'Singapore',         role: 'Asia-Pacific Office',                   flag: '🇸🇬', top: '73%', left: '95%' },
        { city: 'Europe',            role: 'European Office',                       flag: '🇪🇺', top: '30%', left: '40%' },
      ].map((pin, i) => (
        <ScrollReveal key={pin.city} delay={i * 0.1}>
          <div
            className="absolute group cursor-pointer"
            style={{ top: pin.top, left: pin.left, transform: 'translate(-50%, -50%)' }}
          >
            {/* Hover tooltip pill */}
            <div
              className="absolute bottom-full left-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-30"
              style={{ transform: 'translateX(-50%)' }}
            >
              <div
                className="rounded-[2rem] px-8 py-4 text-center"
                style={{
                  background: 'rgba(255,255,255,0.25)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1.5px solid rgba(255,255,255,0.7)',
                  boxShadow: '0 8px 32px rgba(100,160,210,0.18)',
                  minWidth: '300px',
                }}
              >
                <p className="font-display font-bold text-[#5a9fc4] text-xl mb-1">
                  {pin.city} {pin.flag}
                </p>
                <p className="text-grey-600 font-body text-base leading-snug">{pin.role}</p>
              </div>
            </div>

            {/* Flag circle */}
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-md border-2 border-white/60 transition-transform duration-200 group-hover:scale-110"
              style={{
                background: 'rgba(255,255,255,0.55)',
                backdropFilter: 'blur(6px)',
                boxShadow: '0 2px 12px rgba(58,138,181,0.2)',
              }}
            >
              {pin.flag}
            </div>

            {/* Glow under circle */}
            <div
              className="w-8 h-2 rounded-full mx-auto mt-1 opacity-25"
              style={{ background: 'radial-gradient(ellipse, #3a8ab5, transparent)' }}
            />
          </div>
        </ScrollReveal>
      ))}
    </div>

  </div>
</div>

  </div>
</section>

      {/* ── S8 Awards & Recognition ─────────────────────────────────── */}
      <section className="py-20 bg-white relative overflow-hidden">

        <div className="absolute inset-0 opacity-30 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 80% 50%, #daeaf6 0%, transparent 60%)' }} />

        <Container className="relative z-10">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Awards"
              title="Recognised for what we build"
              light
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-2xl p-8 relative overflow-hidden mt-10">
              <img
                src="/images/about/award-banner.svg"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
              />
              <div className="relative z-10 flex flex-wrap justify-center gap-3">
                {aboutAwards.map((award, i) => {
                  const isBlue = i % 3 === 0
                  return (
                    <ScrollReveal key={award.name} delay={i * 0.04}>
                      <div
                        className={`rounded-full px-5 py-2.5 border font-display font-semibold text-sm cursor-default
                          hover:-translate-y-0.5 hover:shadow-md transition-all duration-200
                          ${isBlue
                            ? 'border-blue-300 text-blue-500 bg-white/80'
                            : 'border-navy/20 text-navy bg-white/80'
                          }`}
                      >
                        {award.name}
                      </div>
                    </ScrollReveal>
                  )
                })}
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ── S9 Certifications ───────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Credentials"
              title="Certified. Accredited. Trusted."
              light
            />
          </ScrollReveal>

          {/* Badges row with dividers */}
          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap justify-center items-stretch mt-6">
              {trustBadges.map((badge, i) => (
                <div key={badge.label} className="flex items-center">
                  {i !== 0 && (
                    <div className="mx-2 flex-shrink-0" style={{ width: '1px', height: '48px', background: 'linear-gradient(to bottom, transparent 0%, #5BA3D1 30%, #5BA3D1 70%, transparent 100%)' }} />
                  )}
                  <div className="px-6 py-2 text-center">
                    <p className="font-display font-bold text-navy text-base leading-tight">{badge.label}</p>
                    <p className="text-grey-400 font-body text-sm mt-0.5">{badge.sublabel}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </section>

    </>
  )
}
