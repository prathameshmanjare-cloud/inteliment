import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import * as Icons from 'lucide-react'
import SEOHead from '@/components/ui/SEOHead'
import HeroSection from '@/components/sections/HeroSection'
import CTABanner from '@/components/sections/CTABanner'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import GlassCard from '@/components/ui/GlassCard'
import Button from '@/components/ui/Button'
import { buildPageMeta, localBusinessJsonLd, breadcrumbJsonLd } from '@/utils/seo'

export default function Australia() {
  const meta = buildPageMeta(
    'Decision Intelligence for Australian Enterprises | Inteliment Australia',
    'Inteliment\'s Sydney-based Decision Intelligence practice. Cloud modernisation, AI, and data engineering for APRA-regulated enterprises across Insurance, Banking, Healthcare, and Energy.',
    '/australia'
  )

  const jsonLd = [
    localBusinessJsonLd(),
    breadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Australia', path: '/australia' },
    ]),
  ]

  const [activeSolutionTab, setActiveSolutionTab] = useState(0)



  const solutions = [
    {
      title: 'Data Engineering & Cloud Modernisation',
      description: 'Migrate from old traditional, or on-premises systems to Azure, Snowflake, or Databricks — with guaranteed Australian data residency, zero-downtime migration methodology, and full business continuity.',
      icon: 'Database',
      color: '#5BA3D1',
      techStack: 'Azure · Snowflake · Databricks · AWS',
    },
    {
      title: 'Business Intelligence & Reporting Modernisation',
      description: 'Replace outdated BI environment with Power BI, Tableau, or Rubiscape — aligned to your governance requirements, ecosystem, and regulatory reporting obligations.',
      icon: 'BarChart2',
      color: '#2DD4BF',
      techStack: 'Power BI · Tableau · Rubiscape',
    },
    {
      title: 'Data Science & Predictive Analytics',
      description: 'Actuarial modernisation, risk scoring, demand forecasting, and fraud detection — built for APRA-regulated environments with rigorous model governance, explainability, and audit trails.',
      icon: 'TrendingUp',
      color: '#A78BFA',
      techStack: 'Python · Azure ML · Databricks ML',
    },
    {
      title: 'AI, GenAI & Autonomous Decision Agents',
      description: 'Production-grade GenAI — from LLM orchestration and RAG pipelines to autonomous agents for underwriting, claims, credit, and compliance. Reduce decision cycle times from days to minutes while maintaining full audit trails.',
      icon: 'BrainCircuit',
      color: '#F59E0B',
      techStack: 'LLM · RAG · MLOps · Azure OpenAI',
    },
    {
      title: 'Data Architecture & Governance',
      description: 'End-to-end data architecture strategy — data validation, migration, consistency, security, and governance frameworks designed to APRA standards and aligned with your enterprise data policies.',
      icon: 'Shield',
      color: '#34D399',
      techStack: 'APRA CPS 234 · Data Mesh · Lakehouse',
    },
    {
      title: 'Software Engineering & Digital Platforms',
      description: 'Custom data product development, API integration, digital experience analytics, and UI/UX — delivered by our NSW Government-empanelled Digital Agency practice for enterprise and government mandates.',
      icon: 'Code2',
      color: '#F472B6',
      techStack: 'React · Node.js · Azure · APIs · NSW Govt',
    },
  ]

  const practiceHighlights = [
    { metric: '22+', label: 'Years of Data & AI Excellence' },
    { metric: 'ASX', label: 'ASX-Listed Enterprise Clients' },
    { metric: '95%', label: 'High Success Quotient' },
    { metric: '150+', label: 'Global Specialist Capacity' },
  ]

  const technicalStrengths = [
    'Multi-platform: Azure, Snowflake, Databricks, AWS',
    'Production GenAI, LLM orchestration & RAG pipelines',
    'Zero-downtime cloud migration methodology',
    'MLOps, model governance & explainability frameworks',
  ]

  const domainStrengths = [
    'Big 4 Banks & ASX-listed financial services firms',
    'Top-5 Australian insurers — actuarial & claims AI',
    '2nd largest Telecom — data platform modernisation',
    'NSW Government ICT — Advanced Registration Supplier',
  ]

  const impactStories = [
    {
      industry: 'Insurance',
      metric: '70%',
      metricLabel: 'Reduction in Pricing Cycle Time',
      headline: 'Actuarial Workflow Automation for a Top-5 Australian Insurer',
      description: 'Automated manual actuarial workflows using Azure-Python pipelines. Analyst hours reclaimed for strategic decision work. Delivered in under 6 months.',
      slug: 'insurer-pricing-cycle',
    },
    {
      industry: 'Banking',
      metric: '60%',
      metricLabel: 'Lower Infrastructure Costs',
      headline: 'Model Migration for a Big 4 Bank with Zero Sovereignty Compromise',
      description: 'Migrated 180+ models to Python/Databricks on Azure — with zero data sovereignty compromise and full APRA audit capability retained throughout.',
      slug: 'big4-bank-model-migration',
    },
    {
      industry: 'Health',
      metric: '4×',
      metricLabel: 'Faster Claims Insights',
      headline: 'Unified Data Intelligence Layer for a National Health Fund',
      description: 'Unified nine disparate data sources into a Snowflake-based intelligence layer — from nine refresh cycles to one real-time platform serving 10M+ members.',
      slug: 'health-fund-snowflake',
    },
  ]

  const clients = [
    'IAG', 'Suncorp', 'Allianz Australia', 'QBE', 'Medibank',
    'ANZ Bank', 'Macquarie Group', 'Optus', 'AGL Energy', 'NSW Government',
  ]

  const platforms = [
    { name: 'Microsoft Azure', badge: 'Cloud', color: '#0078D4', note: 'Primary cloud platform for ANZ enterprise — data residency, APRA compliance, and Azure OpenAI.' },
    { name: 'Snowflake', badge: 'Data Platform', color: '#29B5E8', note: 'Cloud data warehouse for analytics at scale — preferred by Australia\'s largest insurers and banks.' },
    { name: 'Databricks', badge: 'ML & Analytics', color: '#FF3621', note: 'Unified analytics platform for data engineering, ML, and GenAI workloads.' },
    { name: 'Power BI', badge: 'BI & Reporting', color: '#F2C811', note: 'Enterprise BI standard across ANZ — governance-ready, embedded analytics, and regulatory reporting.' },
    { name: 'AWS', badge: 'Cloud', color: '#FF9900', note: 'Multi-cloud delivery capability — S3, Redshift, SageMaker for hybrid ANZ enterprise environments.' },
    { name: 'Tableau', badge: 'Visualisation', color: '#1F77B4', note: 'Advanced data visualisation and self-service analytics for executive and operational teams.' },
    { name: 'dbt', badge: 'Data Transform', color: '#FF694B', note: 'Modern data transformation layer for reliable, tested, and documented data pipelines.' },
    { name: 'Azure OpenAI', badge: 'GenAI', color: '#10A37F', note: 'Production GenAI within Australia\'s data sovereignty boundary — LLM orchestration and RAG pipelines.' },
  ]

  const globalBacking = {
    headline: 'Sydney presence. Global capability. AEST-aligned delivery.',
    description: 'Inteliment Australia is backed by a 150+ person global specialist team — architects, engineers, and data scientists operating across Sydney, Pune, and Singapore. You get local accountability with enterprise-scale capacity.',
    trustPoints: [
      'Principal-led engagements — no account managers or handoffs',
      'Pune delivery centre running AEST business hours',
      'Singapore APAC hub for regional mandates',
      '22+ years of sustained ANZ market presence since 2004',
      'ISO-aligned delivery practices and APRA-ready governance',
    ],
    stats: [
      { metric: '150+', label: 'Global Specialists' },
      { metric: '22+', label: 'Years in ANZ Market' },
      { metric: '95%', label: 'Client Success Rate' },
      { metric: '3', label: 'APAC Delivery Offices' },
    ],
  }

  const comparisonRows = [
    { capability: '22+ years of ANZ market experience', inteliment: '✓ Since 2004', globalSI: '✓ Varies', localSME: '~ Often <10 yrs', staffing: '✗ N/A' },
    { capability: 'ANZ-local leadership & accountability', inteliment: '✓ Sydney principals', globalSI: '~ Offshore led', localSME: '✓ Local', staffing: '✗ Contractor model' },
    { capability: 'ASX-listed enterprise client track record', inteliment: '✓ Proven', globalSI: '✓ Yes', localSME: '~ Limited', staffing: '✗ N/A' },
    { capability: '150+ specialist global capacity', inteliment: '✓ ANZ-governed team', globalSI: '✓ Large teams', localSME: '~ Limited bench', staffing: '✓ Contractors' },
    { capability: 'Multi-platform (Azure+Snowflake+AWS+Databricks)', inteliment: '✓ Platform-agnostic', globalSI: '~ Preferred-vendor bias', localSME: '~ 1–2 platforms', staffing: '✗ N/A' },
    { capability: 'NSW Govt pre-qualification', inteliment: '✓ Advanced Reg.', globalSI: '~ Panel varies', localSME: '~ Rare', staffing: '✗ Typically no' },
    { capability: 'Australian data residency', inteliment: '✓ By design', globalSI: '~ Contractual add-on', localSME: '✓ Yes', staffing: '✗ Not managed' },
    { capability: 'GenAI & production AI delivery', inteliment: '✓ Production-grade', globalSI: '~ COE-only pilots', localSME: '~ Emerging', staffing: '✗ Not a service' },
  ]

  return (
    <>
      <SEOHead meta={meta} jsonLd={jsonLd[0]} />

      {/* S1, Hero */}
      <HeroSection
        eyebrow="Inteliment Australia · Sydney-Based · ANZ-Focused"
        title="Trusted by ASX Leaders. Backed by 22 Years of Data & AI Innovation."
        subtitle="Our Sydney-based team of data and AI experts has served ANZ's most demanding enterprises since 2004 — from Big 4 banks to ASX-listed insurers and federal government bodies. Principal-led. Locally accountable. Globally capable."
        ctaPrimary={{ label: 'Talk to Our Sydney Experts', to: '/contact?region=australia' }}
        ctaSecondary={{ label: 'Take the AI Readiness Assessment', to: '#maturity' }}
        variant="compact"
      />

      {/* S2, ANZ Practice */}
      <section className="py-16 bg-surface section-light">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left">
              <span className="inline-block px-4 py-1.5 bg-[#EEF6FB] border border-[#5BA3D1] text-[#5BA3D1] rounded-full text-sm font-display font-semibold mb-4">
                ANZ Practice
              </span>
              <h2 className="font-display font-bold text-display-md text-navy mb-2 leading-tight">
                A Local Team of Experts You Can Trust. Built on 22 Years of Proof.
              </h2>
              <p className="text-sm text-grey-500 font-body mb-6">🏅 Featured SME &nbsp;📍 NSW Empanelled Digital Agency</p>
              <p className="text-base text-grey-700 font-body leading-relaxed mb-6">
                Inteliment Australia is a recognised, locally registered technology company — not a branch office. Our Sydney-based team of data architects, AI engineers, and analytics specialists brings deep ANZ market knowledge, enterprise delivery experience, and a track record with Australia's most prominent organisations.
              </p>
              <p className="text-sm text-grey-600 font-body leading-relaxed mb-6">
                <strong>Locally Registered · NSW Digital Agency · Featured SME</strong> — Inteliment Australia Pty Ltd is empanelled with NSW Government ICT Services Pre-Qualification Scheme as an Advanced Registration Supplier & recognised Digital Agency, specialising in modern data platforms and advanced analytics for government and enterprise.
              </p>
              <div className="space-y-3 mb-8">
                <p className="text-xs font-display font-bold uppercase tracking-widest text-grey-500">Technical Strengths</p>
                {technicalStrengths.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-teal mt-0.5 shrink-0" />
                    <p className="text-sm text-grey-700 font-body">{item}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-3 mb-8">
                <p className="text-xs font-display font-bold uppercase tracking-widest text-grey-500">Domain Strengths</p>
                {domainStrengths.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-teal mt-0.5 shrink-0" />
                    <p className="text-sm text-grey-700 font-body">{item}</p>
                  </div>
                ))}
              </div>
              <Button to="/contact?region=australia" variant="primary" icon={ArrowRight}>
                Engage Our Team
              </Button>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                {practiceHighlights.map((h, i) => (
                  <div key={i} className="glass-light rounded-xl p-5 border border-grey-200/60 text-center">
                    <div className="font-display font-bold text-3xl text-teal mb-1">{h.metric}</div>
                    <p className="text-xs text-grey-600 font-body leading-snug">{h.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 glass-light rounded-xl p-5 border border-teal/20">
                <p className="text-xs font-display font-bold uppercase tracking-widest text-teal mb-3">Regulatory Expertise</p>
                <div className="space-y-2">
                  {['APRA CPS 234 compliance', 'Privacy Act 1988 aligned', 'Australian data residency', 'CDR & Open Banking ready'].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                      <p className="text-sm text-grey-700 font-body">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* S3, What We Deliver */}
      <section className="py-20 bg-navy mesh-bg">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="The Solutions Stack"
              title="The Full Decision Intelligence Stack, Optimised for ANZ."
              subtitle="From legacy modernisation to autonomous GenAI agents — delivered by experts who understand the ANZ enterprise, not a team learning it on your project."
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {solutions.map((sol, i) => {
              const Icon = Icons[sol.icon] || Icons.Database
              return (
                <ScrollReveal key={sol.title} delay={i * 0.07}>
                  <GlassCard className="p-6 h-full">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${sol.color}20` }}>
                        <Icon size={20} style={{ color: sol.color }} />
                      </div>
                      <h3 className="font-display font-bold text-white text-lg leading-tight">{sol.title}</h3>
                    </div>
                    <p className="text-sm text-white/60 font-body leading-relaxed mb-4">{sol.description}</p>
                    <p className="text-xs text-teal/70 font-body">{sol.techStack}</p>
                  </GlassCard>
                </ScrollReveal>
              )
            })}
          </div>
          <ScrollReveal delay={0.3}>
            <div className="text-center mt-10">
              <Button to="/contact?region=australia" variant="secondary" icon={ArrowRight} size="lg">
                Engage Our Team
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      

{/* S5.5 — Our Solutions */}
<section className="py-20 bg-surface section-light">
  <Container>
    <ScrollReveal>
      <SectionHeading
        eyebrow="Our Solutions"
        title="Solution Accelerators for ANZ Enterprises"
        subtitle={
          <>
            Our <strong>Solution Accelerators</strong> help deliver business and project outcomes, faster and effectively. Talk to us to trial these accelerators.
          </>
        }
        light
      />
    </ScrollReveal>

    {/* Tabs */}
    <ScrollReveal delay={0.05}>
      <div className="flex gap-1 bg-grey-100 rounded-full p-1 w-fit mb-10 mt-8">
        {['Experience Management', 'Data as a Service', 'GenAI'].map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActiveSolutionTab(i)}
            className={`px-5 py-2 rounded-full text-sm font-display font-semibold transition-all duration-200 ${
              activeSolutionTab === i
                ? 'bg-white text-navy shadow-sm'
                : 'text-grey-500 hover:text-grey-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </ScrollReveal>

    {/* Tab Panels */}
    {activeSolutionTab === 0 && (
      <ScrollReveal>
        <div className="glass-light rounded-2xl border border-grey-200/60 p-8">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: '#2DD4BF15', border: '1.5px solid #2DD4BF30' }}>
                  <Icons.Sparkles size={20} style={{ color: '#2DD4BF' }} />
                </div>
                <div>
                  <p className="font-display font-bold text-navy text-lg leading-none">CASS</p>
                  <p className="text-xs text-teal font-body mt-0.5">Future of Experience Management</p>
                </div>
              </div>
              <h3 className="font-display font-bold text-navy text-base mb-3">Improved Customer Experience across all touch-points</h3>
              <p className="text-sm text-grey-600 font-body leading-relaxed mb-4">
                CASS, our cutting-edge survey engine and AI/ML analytics tool is purpose-built to capture and listen to invaluable customer & employee feedback, empowering organizations to glean actionable insights and drive transformative improvement in their overall experience strategies.
              </p>
              <span className="inline-block text-[10px] font-display font-bold uppercase tracking-widest text-teal bg-teal/10 border border-teal/20 rounded-full px-3 py-1 mb-6">
                AI/ML · Survey Engine · Analytics
              </span>

              {/* Key Features */}
              <div className="border-t border-grey-200/60 pt-5 mb-5">
                <div className="grid grid-cols-5 gap-4 items-start">
                  <p className="text-xs font-display font-bold uppercase tracking-widest text-grey-500 col-span-1 pt-1">Key Features</p>
                  {[
                    { label: 'Data Collection', desc: 'Seamless collection of customer feedback' },
                    { label: 'Actionable Insights', desc: 'Turning data into actionable strategies' },
                    { label: 'Track Performance', desc: 'Monitoring & evaluating CX initiatives' },
                    { label: 'Data Analysis', desc: 'Advanced analytics for meaningful insights' },
                  ].map((f) => (
                    <div key={f.label}>
                      <p className="font-display font-semibold text-navy text-xs mb-1">{f.label}</p>
                      <p className="text-[11px] text-grey-500 font-body leading-snug">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="border-t border-grey-200/60 pt-5">
                <div className="grid grid-cols-5 gap-4 items-start">
                  <p className="text-xs font-display font-bold uppercase tracking-widest text-grey-500 col-span-1 pt-1">Benefits</p>
                  {[
                    { icon: '⭐', label: 'Improved Customer Experience' },
                    { icon: '💡', label: 'Faster & Informed Decision-Making' },
                    { icon: '🏆', label: 'Enhanced Customer Loyalty' },
                    { icon: '🔧', label: 'Proactive Issue Resolution' },
                  ].map((b) => (
                    <div key={b.label} className="text-center">
                      <p className="text-2xl mb-1">{b.icon}</p>
                      <p className="text-[11px] font-display font-semibold text-navy leading-snug">{b.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Dashboard mockup */}
            <div className="w-full lg:w-72 shrink-0">
              <div className="rounded-xl overflow-hidden border border-grey-200/60 bg-grey-50">
                <div className="bg-grey-200/60 px-3 py-2 flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <div className="p-4 grid grid-cols-2 gap-3">
                  {[
                    { label: 'Active Surveys', val: '700', pct: 70 },
                    { label: 'Total Responses', val: '3,507', pct: 85 },
                  ].map((s) => (
                    <div key={s.label} className="bg-white rounded-lg p-3 border border-grey-100">
                      <p className="text-[9px] text-grey-400 mb-1">{s.label}</p>
                      <p className="font-display font-bold text-navy text-base">{s.val}</p>
                      <div className="h-1 bg-grey-100 rounded-full mt-2">
                        <div className="h-1 rounded-full bg-gradient-to-r from-teal to-[#5BA3D1]" style={{ width: `${s.pct}%` }} />
                      </div>
                    </div>
                  ))}
                  <div className="col-span-2 bg-white rounded-lg p-3 border border-grey-100">
                    <p className="text-[9px] text-grey-400 mb-2">Customer Satisfaction Score</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full border-2 border-teal flex items-center justify-center">
                        <span className="text-[10px] font-bold text-navy">78%</span>
                      </div>
                      <div className="flex-1">
                        <div className="h-1.5 bg-grey-100 rounded-full">
                          <div className="h-1.5 rounded-full bg-gradient-to-r from-teal to-[#5BA3D1]" style={{ width: '78%' }} />
                        </div>
                        <p className="text-[9px] text-grey-400 mt-1">NPS Score</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    )}

    {activeSolutionTab === 1 && (
  <ScrollReveal>
    <div className="glass-light rounded-2xl border border-grey-200/60 p-8">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: '#F5821520', border: '1.5px solid #F5821540' }}>
              <Icons.Database size={20} style={{ color: '#F58215' }} />
            </div>
            <div>
              <p className="font-display font-bold text-navy text-lg leading-none">DaaS</p>
              <p className="text-xs text-teal font-body mt-0.5">Data as a Service</p>
            </div>
          </div>

          <h3 className="font-display font-bold text-navy text-base mb-3">Elevate your data management with DaaS</h3>
          <p className="text-sm text-grey-600 font-body leading-relaxed mb-4">
            DaaS, our Patented Data Governance Portal which allows users to request data, Data team to Triage new Data Requests, Catalogue data and using AI/ML Manage Enterprise data.
          </p>
          <span className="inline-block text-[10px] font-display font-bold uppercase tracking-widest text-teal bg-teal/10 border border-teal/20 rounded-full px-3 py-1 mb-6">
            Data Governance · AI/ML · Cataloguing
          </span>

          {/* Key Features */}
          <div className="border-t border-grey-200/60 pt-5 mb-5">
            <div className="grid grid-cols-5 gap-4 items-start">
              <p className="text-xs font-display font-bold uppercase tracking-widest text-grey-500 col-span-1 pt-1 leading-snug">Key Features</p>
              {[
                { label: 'Simple Interface', desc: 'Seamless web-interface for Data Governance.' },
                { label: 'Data Requests', desc: 'Request data & upload supporting requirements' },
                { label: 'Workflows', desc: 'Customizable workflows with reminders/alerts' },
                { label: 'AI/ML', desc: 'Powerful AI/ML Engine to Catalogue Data' },
              ].map((f) => (
                <div key={f.label}>
                  <p className="font-display font-semibold text-navy text-xs mb-1">{f.label}</p>
                  <p className="text-[11px] text-grey-500 font-body leading-snug">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="border-t border-grey-200/60 pt-5" style={{ background: 'linear-gradient(to right, #EEF6FB40, #f0f4ff40)', borderRadius: '0 0 12px 12px', margin: '0 -8px', padding: '16px 8px' }}>
            <div className="grid grid-cols-5 gap-4 items-start">
              <p className="text-xs font-display font-bold uppercase tracking-widest text-grey-500 col-span-1 pt-1 leading-snug">Benefits</p>
              {[
                { icon: <Icons.TrendingUp size={22} />, label: 'Improved Business Margins' },
                { icon: <Icons.FileCheck size={22} />, label: 'Stronger Data Policies' },
                { icon: <Icons.Users size={22} />, label: 'Democratized Data Exchange for all' },
                { icon: <Icons.GitBranch size={22} />, label: 'Visualized Data Journeys' },
              ].map((b) => (
                <div key={b.label} className="text-center">
                  <div className="flex justify-center mb-2 text-navy/70">{b.icon}</div>
                  <p className="text-[11px] font-display font-semibold text-navy leading-snug">{b.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — Dashboard mockup */}
        <div className="w-full lg:w-80 shrink-0">
          <div className="rounded-xl overflow-hidden border border-grey-200/60 bg-grey-50 shadow-sm">
            <div className="bg-grey-200/60 px-3 py-2 flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
            </div>
            <div className="p-4 space-y-3">
              {/* Top nav bar mockup */}
              <div className="bg-white rounded-lg p-3 border border-grey-100">
                <div className="flex gap-2 mb-2">
                  {['Description', 'Data Dictionary', 'Lineage'].map((t) => (
                    <span key={t} className={`text-[9px] font-semibold px-2 py-0.5 rounded ${t === 'Description' ? 'bg-teal/10 text-teal border border-teal/20' : 'text-grey-400'}`}>{t}</span>
                  ))}
                </div>
                <div className="space-y-1.5">
                  {['Data Request Type', 'Department', 'Request Priority'].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="h-1.5 w-16 bg-grey-200 rounded-full" />
                      <div className="h-1.5 flex-1 bg-grey-100 rounded-full" />
                    </div>
                  ))}
                </div>
              </div>
              {/* Quality scores */}
              <div className="bg-white rounded-lg p-3 border border-grey-100">
                <p className="text-[9px] text-grey-400 mb-2">Data Quality</p>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: 'Completeness', val: '92%', color: '#2DD4BF' },
                    { label: 'Consistency', val: '87%', color: '#5BA3D1' },
                    { label: 'Accuracy', val: '95%', color: '#A78BFA' },
                  ].map((q) => (
                    <div key={q.label} className="text-center">
                      <div className="w-10 h-10 rounded-full border-2 flex items-center justify-center mx-auto mb-1" style={{ borderColor: q.color }}>
                        <span className="text-[9px] font-bold text-navy">{q.val}</span>
                      </div>
                      <p className="text-[8px] text-grey-400">{q.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Workflow status */}
              <div className="bg-[#0f2744] rounded-lg p-3">
                <p className="text-[9px] text-white/50 mb-2">Workflow Status</p>
                <div className="flex items-center gap-1">
                  {['Request', 'Triage', 'Catalog', 'Approve', 'Deliver'].map((step, i, arr) => (
                    <div key={step} className="flex items-center gap-1 flex-1">
                      <div className={`w-2 h-2 rounded-full shrink-0 ${i <= 2 ? 'bg-teal' : 'bg-white/20'}`} />
                      {i < arr.length - 1 && <div className={`h-0.5 flex-1 ${i < 2 ? 'bg-teal' : 'bg-white/10'}`} />}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-1">
                  {['Request', 'Triage', 'Catalog', 'Approve', 'Deliver'].map((step) => (
                    <span key={step} className="text-[7px] text-white/40">{step}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ScrollReveal>
)}

{activeSolutionTab === 2 && (
  <ScrollReveal>
    <div className="glass-light rounded-2xl border border-grey-200/60 p-8">
      {/* Top — 5 capability icons */}
      <div className="grid grid-cols-5 gap-6 mb-10">
        {[
          { icon: <Icons.Image size={24} />, desc: 'Analyzes data and images, and provides deep insights from visual data.' },
          { icon: <Icons.Mic size={24} />, desc: 'Analyzes audio data, and extracts valuable information from audio inputs.' },
          { icon: <Icons.FileText size={24} />, desc: 'Processes text, and generates summaries, insights, and other relevant textual data.' },
          { icon: <Icons.FolderOpen size={24} />, desc: 'Extracts and processes data from uploaded files.' },
          { icon: <Icons.BarChart2 size={24} />, desc: 'Monitors and analyzes trade data and provides real-time insights and trends.' },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-start">
            <div className="mb-3" style={{ color: '#A78BFA' }}>
              {/* Sparkle / star icon */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#A78BFA">
                <path d="M12 2 L13.5 9.5 L21 12 L13.5 14.5 L12 22 L10.5 14.5 L3 12 L10.5 9.5 Z" />
              </svg>
            </div>
            <p className="text-xs text-grey-600 font-body leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* CAPABILITIES label */}
      <div className="text-center mb-6">
        <span className="text-xs font-display font-bold uppercase tracking-widest text-navy">Capabilities</span>
      </div>

      {/* Capability cards */}
      <div className="grid grid-cols-5 gap-3 mb-8">
        {[
          { icon: <Icons.ScanSearch size={18} />, label: 'Visual Discovery' },
          { icon: <Icons.AudioLines size={18} />, label: 'Audio Analytics' },
          { icon: <Icons.FileSearch size={18} />, label: 'Text Analyzer' },
          { icon: <Icons.Database size={18} />, label: 'Data Navigator' },
          { icon: <Icons.LineChart size={18} />, label: 'Trade Tracker' },
        ].map((cap) => (
          <div key={cap.label} className="flex items-center gap-2 border border-grey-200/80 rounded-xl px-3 py-3 bg-white/60 hover:border-teal/30 transition-colors">
            <div className="text-navy/60 shrink-0">{cap.icon}</div>
            <p className="font-display font-semibold text-navy text-xs leading-snug">{cap.label}</p>
          </div>
        ))}
      </div>

      {/* Benefits */}
      <div className="border-t border-grey-200/60 pt-5" style={{ background: 'linear-gradient(to right, #f5f0ff40, #ede9fe40)', borderRadius: '0 0 12px 12px', margin: '0 -8px', padding: '16px 8px' }}>
        <div className="grid grid-cols-5 gap-4 items-start">
          <p className="text-xs font-display font-bold uppercase tracking-widest text-grey-500 col-span-1 pt-1 leading-snug">Benefits</p>
          {[
            { icon: <Icons.Compass size={22} />, label: 'Informed Decisions' },
            { icon: <Icons.Zap size={22} />, label: 'Real-Time Insights' },
            { icon: <Icons.Settings size={22} />, label: 'Boost Efficiency' },
            { icon: <Icons.Target size={22} />, label: 'Improved Accuracy' },
          ].map((b) => (
            <div key={b.label} className="text-center">
              <div className="flex justify-center mb-2 text-navy/70">{b.icon}</div>
              <p className="text-[11px] font-display font-semibold text-navy leading-snug">{b.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </ScrollReveal>
)}
  </Container>
</section>


      {/* S6, AI Maturity */}
      <section id="maturity" className="py-20  bg-navy section-light">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left">
              <span className="inline-block px-4 py-1.5 bg-[#EEF6FB] border border-[#5BA3D1] text-[#5BA3D1] rounded-full text-sm font-display font-semibold mb-4">
                ANZ Data & AI Readiness
              </span>
              <h2 className="font-display font-bold text-display-md text-white mb-6 leading-tight">
                Where Does Your Organisation Stand on the AI Maturity Curve?
              </h2>
              <p className="text-base text-grey-700 font-body leading-relaxed mb-6">
                Most ANZ enterprises are at Levels 2–3. The jump to Levels 4–5 is where strategic advantage is built — and where Inteliment Australia specialises. Take our assessment and connect with our experts in 48 hours.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { num: '01', label: 'Data Fragmented', desc: 'Siloed spreadsheets and disconnected systems. Manual reporting. No single source of truth. High risk of regulatory non-compliance.' },
                  { num: '02', label: 'Data Centralised', desc: 'Basic data warehouse. Standard BI dashboards. Reactive reporting. Limited self-service. Data governance emerging but inconsistent.' },
                  { num: '03', label: 'Insight-Driven', desc: 'Advanced analytics and predictive models. Self-service BI. Proactive decisions. Strong governance. Most ANZ enterprises target this stage.' },
                  { num: '04', label: 'AI-Augmented', desc: 'ML models in production. AI-assisted decisions. Real-time data pipelines. GenAI pilots. Measurable ROI from data investments at scale.' },
                  { num: '05', label: 'Autonomous AI', desc: 'Fully automated decision agents. Self-optimising data systems. AI-native operations across underwriting, compliance, and customer experience.' },
                ].map((stage) => (
                  <div key={stage.num} className="flex items-start gap-4 glass-light rounded-xl p-4 border border-grey-200/60">
                    <span className="font-display font-bold text-teal text-lg shrink-0">{stage.num}</span>
                    <div>
                      <p className="font-display font-bold text-navy text-sm mb-1">{stage.label}</p>
                      <p className="text-xs text-grey-600 font-body leading-relaxed">{stage.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button to="/contact?region=australia" variant="primary" icon={ArrowRight}>
                Connect with Our Experts
              </Button>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="glass-light rounded-xl p-5 border border-teal/20 mb-6">
                <p className="text-xs font-display font-bold uppercase tracking-widest text-teal mb-2">Free Expert Assessment Available</p>
                <p className="text-sm text-grey-600 font-body leading-relaxed">Not sure where you stand? Our experts will assess your organisation's data and AI maturity — free, in 48 hours — and map a prioritised roadmap to your next level.</p>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'ANZ', heading: 'Common ANZ Barriers We Solve', desc: 'Legacy SAS/Teradata lock-in, APRA data residency uncertainty, disconnected reporting stacks, and the gap between BI pilots and production AI — these are the challenges we\'ve solved 500+ times.' },
                  { label: 'AI', heading: 'From Pilot to Production AI', desc: 'Many ANZ enterprises have GenAI pilots. Few have production AI. We specialise in the productionisation gap — building robust MLOps, governance, and audit infrastructure that makes AI real in regulated environments.' },
                  { label: 'ROI', heading: 'Measurable, Rapid Value', desc: 'Our assessment identifies the highest-ROI data and AI initiatives for your specific industry, technology stack, and regulatory context — so investment goes where it creates the fastest, most defensible impact.' },
                ].map((item) => (
                  <div key={item.label} className="glass-light rounded-xl p-5 border border-grey-200/60">
                    <span className="inline-block text-[10px] font-display font-bold uppercase tracking-widest text-teal bg-teal/10 border border-teal/20 rounded-full px-2 py-0.5 mb-2">{item.label}</span>
                    <p className="font-display font-bold text-navy text-sm mb-2">{item.heading}</p>
                    <p className="text-xs text-grey-600 font-body leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

{/* S4, Impact Stories */}
      <section id="impact" className="py-20 bg-surface section-light">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Impact Stories"
              title="Delivered in ANZ. Measured in Outcomes."
              subtitle="Real evidence from real enterprises. Our 95% success quotient is built on these kinds of results — repeatable across industries."
              light
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {impactStories.map((story, i) => (
              <ScrollReveal key={story.slug} delay={i * 0.08}>
                <Link to={`/impact/${story.slug}`} className="group block h-full">
                  <div className="h-full glass-light rounded-xl p-6 border border-grey-200/60 hover:border-teal/30 hover:-translate-y-1 transition-all duration-300">
                    <span className="inline-block text-[10px] font-display font-bold uppercase tracking-widest text-teal bg-teal/10 border border-teal/20 rounded-full px-2 py-0.5 mb-4">
                      {story.industry}
                    </span>
                    <div className="mb-4">
                      <div className="font-display font-bold text-4xl text-navy">{story.metric}</div>
                      <div className="text-sm text-grey-600 font-body">{story.metricLabel}</div>
                    </div>
                    <h3 className="font-display font-bold text-navy text-base leading-snug mb-3">{story.headline}</h3>
                    <p className="text-sm text-grey-600 font-body leading-relaxed mb-4">{story.description}</p>
                    <div className="flex items-center gap-1 text-xs font-display font-semibold text-teal group-hover:gap-2 transition-all">
                      Read Story <ArrowRight size={11} />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
      {/* S8, Local Advantage Comparison */}
      <section className="py-20 bg-surface section-light">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Local Advantage"
              title="Why Inteliment Australia — Not a Global SI, Local SME, or Staffing Company"
              subtitle="Understand the real difference between delivery models before you choose your partner."
              light
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="mt-12 overflow-x-auto">
              <table className="w-full text-sm font-body">
                <thead>
                  <tr className="border-b border-grey-200">
                    <th className="text-left text-xs font-display font-bold uppercase tracking-widest text-grey-500 pb-4 pr-4 w-1/3">Capability</th>
                    <th className="text-center text-xs font-display font-bold uppercase tracking-widest text-teal pb-4 px-3">Inteliment AU</th>
                    <th className="text-center text-xs font-display font-bold uppercase tracking-widest text-grey-400 pb-4 px-3">Global SI</th>
                    <th className="text-center text-xs font-display font-bold uppercase tracking-widest text-grey-400 pb-4 px-3">Local SME</th>
                    <th className="text-center text-xs font-display font-bold uppercase tracking-widest text-grey-400 pb-4 px-3">Staffing Co.</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className={`border-b border-grey-100 ${i % 2 === 0 ? 'bg-grey-50/50' : ''}`}>
                      <td className="text-grey-700 py-3 pr-4 pl-2 text-sm">{row.capability}</td>
                      <td className="text-center text-teal font-semibold py-3 px-3 text-sm">{row.inteliment}</td>
                      <td className="text-center text-grey-500 py-3 px-3 text-sm">{row.globalSI}</td>
                      <td className="text-center text-grey-500 py-3 px-3 text-sm">{row.localSME}</td>
                      <td className="text-center text-grey-500 py-3 px-3 text-sm">{row.staffing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </Container>
      </section>


      {/* S10, CTA */}
      <CTABanner
        title="Talk to our Sydney team. No handoffs. No offshore surprises."
        subtitle="Sydney-based commercial and technical leadership. Pune delivery running AEST-aligned. You deal with principals from day one, and throughout."
        ctaLabel="Talk to Our Sydney Experts"
        ctaTo="/contact?region=australia"
      />
    </>
  )
}