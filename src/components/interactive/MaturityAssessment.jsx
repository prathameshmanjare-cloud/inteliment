import { useReducer } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight, CheckCircle2, X } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts'
import { assessmentQuestions } from '@/data/assessmentQuestions'
import { maturityTiers } from '@/data/solutions'
import { calculateMaturityScore } from '@/utils/scoring'
import { useUTMParams } from '@/hooks/useUTMParams'
import { sendFormEmail } from '@/utils/sendEmail'
import Button from '@/components/ui/Button'
import ProgressBar from '@/components/ui/ProgressBar'
import GlassCard from '@/components/ui/GlassCard'

// Lead capture form schema
const leadSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(1, 'Company name is required'),
  role: z.string().min(1, 'Your role is required'),
  consent: z.literal(true, { errorMap: () => ({ message: 'You must agree to continue' }) }),
})

// State machine
const initialState = { step: 0, answers: {}, direction: 1, submitted: false, result: null, showLeadForm: false, leadCaptured: false }

function reducer(state, action) {
  switch (action.type) {
    case 'SET_ANSWER':
      return { ...state, answers: { ...state.answers, [action.question]: action.value } }
    case 'NEXT':
      if (state.step < assessmentQuestions.length - 1) {
        return { ...state, step: state.step + 1, direction: 1 }
      }
      return { ...state, submitted: true, direction: 1, result: calculateMaturityScore(state.answers) }
    case 'PREV':
      return { ...state, step: Math.max(0, state.step - 1), direction: -1 }
    case 'SHOW_LEAD_FORM':
      return { ...state, showLeadForm: true }
    case 'HIDE_LEAD_FORM':
      return { ...state, showLeadForm: false }
    case 'LEAD_CAPTURED':
      return { ...state, leadCaptured: true, showLeadForm: false }
    case 'RESET':
      return initialState
    default:
      return state
  }
}

function QuestionStep({ question, answer, onAnswer }) {
  const isMulti = question.type === 'multiselect'
  const selected = isMulti ? (answer || []) : answer

  const toggle = (optionId) => {
    if (!isMulti) {
      onAnswer(optionId)
      return
    }
    const current = selected || []
    if (current.includes(optionId)) {
      onAnswer(current.filter((id) => id !== optionId))
    } else {
      onAnswer([...current, optionId])
    }
  }

  const isSelected = (optionId) => isMulti ? (selected || []).includes(optionId) : selected === optionId

  return (
    <div>
      <h2 className="font-display font-bold text-xl md:text-2xl text-white mb-2">{question.question}</h2>
      {question.subtitle && <p className="text-white/50 text-sm mb-6 font-body">{question.subtitle}</p>}
      {!question.subtitle && <div className="mb-6" />}
      <div className="grid grid-cols-1 gap-3">
        {question.options.map((option) => {
          const sel = isSelected(option.id)
          return (
            <button
              key={option.id}
              onClick={() => toggle(option.id)}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 font-body flex items-center gap-3 ${
                sel
                  ? 'border-teal bg-teal/10 text-white shadow-glow-teal'
                  : 'border-white/10 glass text-white/80 hover:border-white/30 hover:text-white'
              }`}
              aria-pressed={sel}
            >
              <div className={`w-5 h-5 rounded-full border-2 shrink-0 flex items-center justify-center transition-all ${sel ? 'border-teal bg-teal' : 'border-white/30'}`}>
                {sel && <CheckCircle2 size={12} className="text-navy" />}
              </div>
              <span className="text-sm md:text-base">{option.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function ResultsView({ result, onShowLeadForm, onReset }) {
  const tier = maturityTiers[result.tier - 1]
  const chartData = [{ name: 'Score', value: result.totalScore, fill: result.tierColor }]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <span className="inline-block px-4 py-1.5 glass rounded-full text-sm font-display font-semibold mb-4" style={{ color: result.tierColor, border: `1px solid ${result.tierColor}40` }}>
          Maturity Level: {result.tierName}
        </span>
        <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-2">{tier.title}</h2>
        <p className="text-white/70 font-body max-w-lg mx-auto">{result.tierDescription}</p>
      </div>

      {/* Score gauge */}
      <div className="flex justify-center">
        <div className="w-48 h-48">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart cx="50%" cy="50%" innerRadius="70%" outerRadius="100%" data={chartData} startAngle={90} endAngle={90 - (result.totalScore / 20) * 360}>
              <PolarAngleAxis type="number" domain={[0, 20]} angleAxisId={0} tick={false} />
              <RadialBar background dataKey="value" cornerRadius={8} fill={result.tierColor} />
              <text x="50%" y="45%" textAnchor="middle" dominantBaseline="middle" className="text-3xl font-bold" fill="white" style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '2rem', fontWeight: 700 }}>
                {result.totalScore}
              </text>
              <text x="50%" y="62%" textAnchor="middle" dominantBaseline="middle" fill="rgba(255,255,255,0.5)" style={{ fontFamily: 'DM Sans', fontSize: '0.7rem' }}>
                / 20
              </text>
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Tier details */}
      <GlassCard hover={false} className="p-6">
        <h3 className="font-display font-bold text-white mb-3">Your Recommended Starting Point</h3>
        <p className="text-white/70 font-body text-sm mb-4">{tier.description}</p>
        <div className="space-y-2">
          {tier.deliverables.map((d) => (
            <div key={d} className="flex items-center gap-2 text-sm text-white/80 font-body">
              <CheckCircle2 size={14} className="text-teal shrink-0" />
              {d}
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-white/10">
          <p className="text-xs text-teal font-display font-semibold">EXPECTED OUTCOME</p>
          <p className="text-sm text-white/70 font-body mt-1">{tier.outcome}</p>
        </div>
      </GlassCard>

      {/* Platform recommendations */}
      {result.platforms.length > 0 && result.platforms[0] !== 'other' && (
        <div className="glass rounded-xl p-4">
          <p className="text-xs font-display font-semibold text-teal/80 uppercase tracking-wider mb-2">Your Platforms Detected</p>
          <div className="flex flex-wrap gap-2">
            {result.platforms.filter((p) => p !== 'other').map((p) => (
              <span key={p} className="px-3 py-1 bg-teal/10 border border-teal/20 rounded-full text-xs font-display font-semibold text-teal capitalize">{p}</span>
            ))}
          </div>
        </div>
      )}

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button onClick={onShowLeadForm} className="flex-1 justify-center">
          Get My Full DI Roadmap
        </Button>
        <Button variant="ghost" onClick={onReset} className="flex-1 justify-center">
          Retake Assessment
        </Button>
      </div>
    </div>
  )
}

function LeadCaptureForm({ result, onClose, onSuccess }) {
  const utmParams = useUTMParams()
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm({ resolver: zodResolver(leadSchema) })
  const consentChecked = watch('consent')

  const onSubmit = async (data) => {
    const payload = {
      ...data,
      assessmentResult: {
        tier: result.tier,
        tierName: result.tierName,
        totalScore: result.totalScore,
        platforms: result.platforms,
      },
      utm: utmParams,
      source: 'DI Assessment',
    }

    // TODO: Zoho CRM API Integration
    // await fetch('https://www.zohoapis.com/crm/v2/Leads', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': 'Zoho-oauthtoken YOUR_ACCESS_TOKEN',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     data: [{
    //       Last_Name: data.name,
    //       Email: data.email,
    //       Company: data.company,
    //       Designation: data.role,
    //       Lead_Source: 'DI Assessment',
    //       Description: JSON.stringify(payload.assessmentResult),
    //       ...Object.fromEntries(Object.entries(payload.utm).map(([k, v]) => [k.toUpperCase(), v])),
    //     }]
    //   })
    // })

    console.log('Assessment lead payload:', payload)
    await sendFormEmail(payload)
    onSuccess()
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="glass-dark rounded-2xl p-6 md:p-8 w-full max-w-md border border-teal/20"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-display font-bold text-white text-xl">Get Your Full DI Roadmap</h3>
          <button onClick={onClose} className="text-white/50 hover:text-white transition-colors" aria-label="Close">
            <X size={20} />
          </button>
        </div>
        <p className="text-white/60 text-sm font-body mb-6">Our team will prepare a personalized Decision Intelligence roadmap based on your assessment results.</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {[
            { name: 'name', label: 'Full Name', placeholder: 'Jane Smith', type: 'text' },
            { name: 'email', label: 'Work Email', placeholder: 'jane@company.com', type: 'email' },
            { name: 'company', label: 'Company', placeholder: 'Company Name', type: 'text' },
            { name: 'role', label: 'Your Role', placeholder: 'e.g. Chief Data Officer', type: 'text' },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-display font-semibold text-white/80 mb-1">{field.label}</label>
              <input
                {...register(field.name)}
                type={field.type}
                placeholder={field.placeholder}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 font-body text-sm focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors"
              />
              {errors[field.name] && <p className="text-red-400 text-xs mt-1 font-body">{errors[field.name].message}</p>}
            </div>
          ))}
          {/* Consent */}
          <div>
            <label className="flex items-start gap-3 cursor-pointer">
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
            {errors.consent && <p className="text-red-400 text-xs mt-1 font-body">{errors.consent.message}</p>}
          </div>
          <Button type="submit" className="w-full justify-center mt-2" disabled={isSubmitting || !consentChecked}>
            {isSubmitting ? 'Sending...' : 'Send My Roadmap'}
          </Button>
        </form>
      </motion.div>
    </motion.div>
  )
}

export default function MaturityAssessment() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const prefersReducedMotion = useReducedMotion()

  const currentQ = assessmentQuestions[state.step]
  const currentAnswer = state.answers[currentQ?.id]
  const canProceed = currentQ?.type === 'multiselect' ? true : !!currentAnswer

  const stepVariants = {
    enter: (d) => ({ x: d > 0 ? (prefersReducedMotion ? 0 : 60) : (prefersReducedMotion ? 0 : -60), opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d) => ({ x: d < 0 ? (prefersReducedMotion ? 0 : 60) : (prefersReducedMotion ? 0 : -60), opacity: 0 }),
  }

  if (state.leadCaptured) {
    return (
      <div className="text-center py-12 space-y-4">
        <div className="w-16 h-16 rounded-full bg-teal/20 flex items-center justify-center mx-auto">
          <CheckCircle2 size={32} className="text-teal" />
        </div>
        <h3 className="font-display font-bold text-2xl text-white">Roadmap Request Received!</h3>
        <p className="text-white/60 font-body max-w-md mx-auto">Our team will prepare your personalized DI roadmap and reach out within 1 business day.</p>
        <Button variant="ghost" onClick={() => dispatch({ type: 'RESET' })}>Take Assessment Again</Button>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      {!state.submitted ? (
        <>
          <ProgressBar current={state.step + 1} total={assessmentQuestions.length} className="mb-8" />

          <AnimatePresence mode="wait" custom={state.direction}>
            <motion.div
              key={state.step}
              custom={state.direction}
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <QuestionStep
                question={currentQ}
                answer={currentAnswer}
                onAnswer={(value) => dispatch({ type: 'SET_ANSWER', question: currentQ.id, value })}
              />
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-8">
            <Button
              variant="ghost"
              onClick={() => dispatch({ type: 'PREV' })}
              disabled={state.step === 0}
              icon={ChevronLeft}
              iconPosition="left"
            >
              Back
            </Button>
            <Button
              onClick={() => dispatch({ type: 'NEXT' })}
              disabled={!canProceed}
              icon={ChevronRight}
            >
              {state.step === assessmentQuestions.length - 1 ? 'See My Results' : 'Continue'}
            </Button>
          </div>
        </>
      ) : (
        <AnimatePresence>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <ResultsView
              result={state.result}
              onShowLeadForm={() => dispatch({ type: 'SHOW_LEAD_FORM' })}
              onReset={() => dispatch({ type: 'RESET' })}
            />
          </motion.div>
        </AnimatePresence>
      )}

      <AnimatePresence>
        {state.showLeadForm && (
          <LeadCaptureForm
            result={state.result}
            onClose={() => dispatch({ type: 'HIDE_LEAD_FORM' })}
            onSuccess={() => dispatch({ type: 'LEAD_CAPTURED' })}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
