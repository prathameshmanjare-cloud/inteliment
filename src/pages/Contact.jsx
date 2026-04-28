import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle2, Mail, MapPin, Phone } from 'lucide-react'
import SEOHead from '@/components/ui/SEOHead'
import HeroSection from '@/components/sections/HeroSection'
import Container from '@/components/ui/Container'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'
import GlassCard from '@/components/ui/GlassCard'
import { buildPageMeta } from '@/utils/seo'
import { useUTMParams } from '@/hooks/useUTMParams'
import { sendFormEmail } from '@/utils/sendEmail'

function WhatsAppIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  )
}

const inquiryOptions = [
  'Decision Intelligence Consulting',
  'Data Engineering Services',
  'AI/ML Solutions',
  'BI & Dashboard Development',
  'GCC / Dedicated Team Setup',
  'Rubiscape Platform Demo',
  'Innovation Sprint / PoC',
  'Partnership Inquiry',
  'General Inquiry',
]

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  company: z.string().min(1, 'Company is required'),
  role: z.string().min(1, 'Role is required'),
  industry: z.string().min(1, 'Select an industry'),
  inquiryType: z.string().min(1, 'Please select what you are looking for'),
  timeline: z.string().optional(),
  message: z.string().min(10, 'Please provide more detail (10+ characters)'),
  consent: z.literal(true, { errorMap: () => ({ message: 'You must agree to continue' }) }),
})

const partnerSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  company: z.string().min(1, 'Company is required'),
  message: z.string().min(10, 'Please provide more detail'),
  consent: z.literal(true, { errorMap: () => ({ message: 'You must agree to continue' }) }),
})

function FormField({ label, error, children }) {
  return (
    <div>
      <label className="block text-sm font-display font-semibold text-white/80 mb-1.5">{label}</label>
      {children}
      {error && <p className="text-red-400 text-xs mt-1 font-body">{error.message}</p>}
    </div>
  )
}

function inputClass(hasError) {
  return `w-full px-4 py-3 rounded-lg bg-white/5 border font-body text-sm text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-teal transition-colors ${hasError ? 'border-red-400' : 'border-white/10 focus:border-teal'}`
}

function selectClass(hasError) {
  return `w-full px-4 py-3 rounded-lg bg-white/5 border font-body text-sm text-white focus:outline-none focus:ring-1 focus:ring-teal transition-colors [&>option]:bg-white [&>option]:text-gray-900 ${hasError ? 'border-red-400' : 'border-white/10 focus:border-teal'}`
}

function ConsentField({ register, error }) {
  return (
    <div>
      <label className="flex items-start gap-3 cursor-pointer group">
        <input
          type="checkbox"
          {...register('consent')}
          className="mt-0.5 w-4 h-4 rounded border-white/20 bg-white/5 text-teal focus:ring-teal focus:ring-offset-0 shrink-0"
        />
        <span className="text-xs text-white/60 font-body leading-relaxed">
          I agree to Inteliment's{' '}
          <Link to="/privacy" className="text-teal hover:underline" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </Link>{' '}
          and consent to being contacted about my enquiry.
        </span>
      </label>
      {error && <p className="text-red-400 text-xs mt-1 font-body">{error.message}</p>}
    </div>
  )
}

function SuccessState({ onReset }) {
  return (
    <div className="text-center py-10 space-y-4">
      <div className="w-14 h-14 rounded-full bg-teal/20 flex items-center justify-center mx-auto">
        <CheckCircle2 size={28} className="text-teal" />
      </div>
      <h3 className="font-display font-bold text-white text-xl">Message Sent!</h3>
      <p className="text-white/60 font-body">Our team will be in touch within 1 business day.</p>
      <Button variant="ghost" onClick={onReset}>Send Another Message</Button>
    </div>
  )
}

function ProjectForm({ region, subject }) {
  const utmParams = useUTMParams()
  const [success, setSuccess] = useState(false)
  const { register, handleSubmit, reset, watch, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: { inquiryType: subject || '' },
  })
  const consentChecked = watch('consent')

  const onSubmit = async (data) => {
    const payload = {
      ...data,
      utm: utmParams,
      formType: 'Project Inquiry',
      ...(region ? { region } : {}),
    }

    // TODO: Zoho CRM API Integration
    // await fetch('https://www.zohoapis.com/crm/v2/Leads', {
    //   method: 'POST',
    //   headers: { 'Authorization': 'Zoho-oauthtoken YOUR_ACCESS_TOKEN', 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     data: [{
    //       Last_Name: data.name, Email: data.email, Company: data.company,
    //       Designation: data.role, Industry: data.industry, Description: data.message,
    //       Lead_Source: 'Website Contact Form', Inquiry_Type: data.inquiryType,
    //       Timeline: data.timeline,
    //       ...Object.fromEntries(Object.entries(payload.utm).map(([k, v]) => [k.toUpperCase(), v])),
    //     }]
    //   })
    // })

    // TODO: reCAPTCHA, verify token before submitting
    // const recaptchaToken = await grecaptcha.execute('YOUR_SITE_KEY', { action: 'contact' })
    // Verify token server-side before processing

    console.log('Contact form payload:', payload)
    await sendFormEmail(payload)
    setSuccess(true)
  }

  if (success) return <SuccessState onReset={() => { reset(); setSuccess(false) }} />

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField label="Full Name" error={errors.name}>
          <input {...register('name')} placeholder="Jane Smith" className={inputClass(errors.name)} />
        </FormField>
        <FormField label="Work Email" error={errors.email}>
          <input {...register('email')} type="email" placeholder="jane@company.com" className={inputClass(errors.email)} />
        </FormField>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField label="Company" error={errors.company}>
          <input {...register('company')} placeholder="Company Name" className={inputClass(errors.company)} />
        </FormField>
        <FormField label="Your Role" error={errors.role}>
          <input {...register('role')} placeholder="e.g. Chief Data Officer" className={inputClass(errors.role)} />
        </FormField>
      </div>
      <FormField label="Industry" error={errors.industry}>
        <select {...register('industry')} className={selectClass(errors.industry)}>
          <option value="">Select your industry</option>
          {['Insurance', 'Banking & Financial Services', 'Healthcare', 'Manufacturing', 'Energy & Utilities', 'Telecom', 'Automotive', 'Retail & E-Commerce', 'Financial Services', 'Technology & SaaS', 'Logistics & Supply Chain', 'Media & Entertainment', 'Other'].map((i) => (
            <option key={i} value={i}>{i}</option>
          ))}
        </select>
      </FormField>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField label="What Are You Looking For?" error={errors.inquiryType}>
          <select {...register('inquiryType')} className={selectClass(errors.inquiryType)}>
            <option value="">Select inquiry type</option>
            {inquiryOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </FormField>
        <FormField label="Timeline" error={errors.timeline}>
          <select {...register('timeline')} className={selectClass(errors.timeline)}>
            <option value="">Select timeline</option>
            {['ASAP (< 3 months)', '3–6 months', '6–12 months', 'Exploring'].map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </FormField>
      </div>
      <FormField label="Tell Us About Your Project" error={errors.message}>
        <textarea {...register('message')} rows={4} placeholder="Describe your data challenge, goals, or questions..." className={inputClass(errors.message)} />
      </FormField>
      <ConsentField register={register} error={errors.consent} />
      <Button type="submit" disabled={isSubmitting || !consentChecked} className="w-full justify-center">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}

function PartnerForm() {
  const utmParams = useUTMParams()
  const [success, setSuccess] = useState(false)
  const { register, handleSubmit, reset, watch, formState: { errors, isSubmitting } } = useForm({ resolver: zodResolver(partnerSchema) })
  const consentChecked = watch('consent')

  const onSubmit = async (data) => {
    const payload = { ...data, utm: utmParams, formType: 'Partnership Inquiry' }
    // TODO: Zoho CRM API Integration, same pattern as ProjectForm
    console.log('Partner form payload:', payload)
    await sendFormEmail(payload)
    setSuccess(true)
  }

  if (success) return <SuccessState onReset={() => { reset(); setSuccess(false) }} />

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <FormField label="Full Name" error={errors.name}>
        <input {...register('name')} placeholder="Jane Smith" className={inputClass(errors.name)} />
      </FormField>
      <FormField label="Work Email" error={errors.email}>
        <input {...register('email')} type="email" placeholder="jane@company.com" className={inputClass(errors.email)} />
      </FormField>
      <FormField label="Company" error={errors.company}>
        <input {...register('company')} placeholder="Company Name" className={inputClass(errors.company)} />
      </FormField>
      <FormField label="Partnership Details" error={errors.message}>
        <textarea {...register('message')} rows={3} placeholder="Tell us about the partnership opportunity..." className={inputClass(errors.message)} />
      </FormField>
      <ConsentField register={register} error={errors.consent} />
      <Button type="submit" disabled={isSubmitting || !consentChecked} className="w-full justify-center">
        {isSubmitting ? 'Sending...' : 'Send Inquiry'}
      </Button>
    </form>
  )
}

const intakePaths = [
  { id: 'assessment', title: 'Book a DI Assessment', desc: '45 minutes with a senior DI architect. We review your data landscape, identify your highest-impact DI opportunities, and leave you with a clear starting point.' },
  { id: 'project', title: 'Discuss a Project', desc: "Bring your challenge. We'll return a structured approach, with technology recommendation, delivery model, and indicative timeline." },
  { id: 'partnership', title: 'Partnership Inquiry', desc: "Technology, referral, or channel partnerships. Let's explore whether there's a fit worth pursuing." },
]

export default function Contact() {
  const [activePath, setActivePath] = useState('project')
  const [searchParams] = useSearchParams()
  const region = searchParams.get('region') || null
  const subject = searchParams.get('subject') || null
  const meta = buildPageMeta('Contact Us', 'Book a Decision Intelligence Assessment, discuss a project, or explore a partnership with Inteliment.', '/contact')

  return (
    <>
      <SEOHead meta={meta} />
      <HeroSection
        eyebrow="Get In Touch"
        title="Tell Us About Your Data Challenge."
        subtitle="Whether you're early in the exploration or ready to scope a project, we'll give you an honest conversation, not a standard pitch."
        variant="compact"
      />

      <section className="py-20 bg-surface section-light">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-12">
            {intakePaths.map((path) => (
              <ScrollReveal key={path.id} delay={0.05}>
                <button
                  onClick={() => setActivePath(path.id)}
                  className={`w-full text-left p-5 rounded-xl border-2 transition-all ${activePath === path.id ? 'border-teal bg-teal/5 shadow-glow-teal' : 'border-grey-200/60 glass-light hover:border-teal/30'}`}
                >
                  <h3 className={`font-display font-bold text-base mb-1 ${activePath === path.id ? 'text-teal' : 'text-navy'}`}>{path.title}</h3>
                  <p className="text-sm text-grey-600 font-body">{path.desc}</p>
                </button>
              </ScrollReveal>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              <ScrollReveal>
                <GlassCard hover={false} dark className="p-6 md:p-8">
                  <h2 className="font-display font-bold text-white text-xl mb-6">
                    {intakePaths.find((p) => p.id === activePath)?.title}
                  </h2>
                  {activePath === 'assessment' && (
                    <div className="space-y-4">
                      <p className="text-white/60 font-body text-sm">
                        Book a free 45-minute Decision Intelligence Assessment session with one of our senior architects. We'll review your current data landscape and identify your biggest DI opportunities.
                      </p>
                      <div className="glass rounded-xl p-4 border border-teal/20">
                        <p className="text-sm font-display font-semibold text-white mb-1">What to expect:</p>
                        {['Review of your current data infrastructure', 'Identification of key decision latency points', 'Recommended DI maturity path', 'Technology fit assessment'].map((item) => (
                          <div key={item} className="flex items-center gap-2 text-sm text-white/60 font-body mt-2">
                            <CheckCircle2 size={13} className="text-teal" />{item}
                          </div>
                        ))}
                      </div>
                      <Button to="/assessment" className="w-full justify-center">Take the Online Assessment First</Button>
                      <p className="text-center text-white/40 text-xs font-body">
                        Or email us directly at{' '}
                        <a href="mailto:insights@inteliment.com" className="text-teal hover:underline">
                          insights@inteliment.com
                        </a>{' '}
                        to schedule a call.
                      </p>
                    </div>
                  )}
                  {activePath === 'project' && <ProjectForm region={region} subject={subject} />}
                  {activePath === 'partnership' && <PartnerForm />}
                </GlassCard>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-2 space-y-4">
              <ScrollReveal direction="right">
                <GlassCard hover={false} dark className="p-6">
                  <h3 className="font-display font-bold text-white mb-4">Contact Details</h3>
                  <div className="space-y-3">
                    <a href="mailto:insights@inteliment.com" className="flex items-center gap-3 text-sm text-white/60 hover:text-teal transition-colors font-body">
                      <Mail size={16} className="text-teal shrink-0" />
                      insights@inteliment.com
                    </a>
                    <a href="tel:+912069115600" className="flex items-center gap-3 text-sm text-white/60 hover:text-teal transition-colors font-body">
                      <Phone size={16} className="text-teal shrink-0" />
                      (020) 6911-5600
                    </a>
                    <a
                      href="https://wa.me/917058142400"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-white/60 hover:text-teal transition-colors font-body"
                    >
                      <WhatsAppIcon size={16} />
                      WhatsApp: +91 70581 42400
                    </a>
                    {[
                      { city: 'Pune, India', role: 'HQ & Delivery Centre, Baner', flag: '🇮🇳' },
                      { city: 'Sydney, Australia', role: 'APAC Practice', flag: '🇦🇺' },
                      { city: 'Singapore', role: 'SEA Office', flag: '🇸🇬' },
                    ].map((o) => (
                      <div key={o.city} className="flex items-start gap-3">
                        <MapPin size={16} className="text-teal mt-0.5 shrink-0" />
                        <div>
                          <p className="text-sm font-display font-semibold text-white">{o.flag} {o.city}</p>
                          <p className="text-xs text-white/40 font-body">{o.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.1}>
                <GlassCard hover={false} dark className="p-6">
                  <h3 className="font-display font-bold text-white mb-3 text-base">Response Commitment</h3>
                  <div className="space-y-2">
                    {[
                      { label: 'Initial response', value: 'You\'ll hear from us within 4 business hours' },
                      { label: 'Assessment scheduling', value: 'Assessment booked within 24 hours' },
                      { label: 'Proposal turnaround', value: 'Full proposal in 3–5 business days' },
                    ].map((item) => (
                      <div key={item.label} className="flex justify-between items-center text-sm font-body">
                        <span className="text-white/50">{item.label}</span>
                        <span className="text-teal font-display font-semibold text-xs">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
