import { useState, useMemo } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { DollarSign, Clock, Users, Zap } from 'lucide-react'
import Button from '@/components/ui/Button'
import GlassCard from '@/components/ui/GlassCard'
import ScrollReveal from '@/components/ui/ScrollReveal'

const AVG_IMPLEMENTATION_COST = 500_000

function formatCurrency(value) {
  if (value >= 1_000_000_000) return `$${(value / 1_000_000_000).toFixed(1)}B`
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`
  if (value >= 1_000) return `$${(value / 1_000).toFixed(0)}K`
  return `$${value.toFixed(0)}`
}

function Slider({ label, icon: Icon, value, min, max, step, onChange, format }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon size={16} className="text-teal" />
          <span className="text-sm font-display font-semibold text-white/80">{label}</span>
        </div>
        <span className="text-base font-display font-bold text-teal">{format(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, #00B4D8 0%, #00D4AA ${((value - min) / (max - min)) * 100}%, rgba(255,255,255,0.1) ${((value - min) / (max - min)) * 100}%)`,
        }}
        aria-label={label}
        aria-valuenow={value}
        aria-valuemin={min}
        aria-valuemax={max}
      />
      <div className="flex justify-between text-[10px] text-white/30 font-body">
        <span>{format(min)}</span>
        <span>{format(max)}</span>
      </div>
    </div>
  )
}

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-dark rounded-lg px-3 py-2 border border-white/10">
        <p className="text-xs font-display font-semibold text-white">{payload[0].payload.name}</p>
        <p className="text-sm font-bold" style={{ color: payload[0].fill }}>{formatCurrency(payload[0].value)}</p>
      </div>
    )
  }
  return null
}

export default function ROICalculator() {
  const [revenue, setRevenue] = useState(100_000_000)
  const [decisionMakers, setDecisionMakers] = useState(50)
  const [decisionCycleTime, setDecisionCycleTime] = useState(14)
  const [automationPercent, setAutomationPercent] = useState(40)

  const { latencyCost, savings, roi, chartData } = useMemo(() => {
    const latencyCost = revenue * 0.03 * (decisionCycleTime / 7) * (decisionMakers / 10)
    const savings = latencyCost * (automationPercent / 100)
    const roi = (savings / AVG_IMPLEMENTATION_COST) * 100
    const chartData = [
      { name: 'Current Annual Cost', value: Math.round(latencyCost), color: '#E63946' },
      { name: 'With Inteliment DI', value: Math.round(latencyCost - savings), color: '#00D4AA' },
      { name: 'Annual Savings', value: Math.round(savings), color: '#00B4D8' },
    ]
    return { latencyCost, savings, roi, chartData }
  }, [revenue, decisionMakers, decisionCycleTime, automationPercent])

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Inputs */}
        <ScrollReveal direction="left">
          <GlassCard hover={false} className="p-6 md:p-8 space-y-8">
            <div>
              <h3 className="font-display font-bold text-white text-lg mb-1">Your Organization</h3>
              <p className="text-white/50 text-sm font-body">Adjust the sliders to match your situation.</p>
            </div>

            <Slider
              label="Annual Revenue"
              icon={DollarSign}
              value={revenue}
              min={1_000_000}
              max={10_000_000_000}
              step={1_000_000}
              onChange={setRevenue}
              format={formatCurrency}
            />
            <Slider
              label="Key Decision-Makers"
              icon={Users}
              value={decisionMakers}
              min={5}
              max={500}
              step={5}
              onChange={setDecisionMakers}
              format={(v) => `${v} people`}
            />
            <Slider
              label="Average Decision Cycle"
              icon={Clock}
              value={decisionCycleTime}
              min={1}
              max={90}
              step={1}
              onChange={setDecisionCycleTime}
              format={(v) => `${v} days`}
            />
            <Slider
              label="Decisions That Could Be Automated"
              icon={Zap}
              value={automationPercent}
              min={10}
              max={90}
              step={5}
              onChange={setAutomationPercent}
              format={(v) => `${v}%`}
            />
          </GlassCard>
        </ScrollReveal>

        {/* Results */}
        <ScrollReveal direction="right">
          <div className="space-y-4">
            {/* KPI cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <GlassCard hover={false} className="p-4 text-center">
                <p className="text-[10px] font-display font-semibold uppercase tracking-wider text-red-400 mb-1">Annual Latency Cost</p>
                <p className="text-2xl font-display font-bold text-white">{formatCurrency(latencyCost)}</p>
              </GlassCard>
              <GlassCard hover={false} className="p-4 text-center">
                <p className="text-[10px] font-display font-semibold uppercase tracking-wider text-teal mb-1">Potential Savings</p>
                <p className="text-2xl font-display font-bold text-teal">{formatCurrency(savings)}</p>
              </GlassCard>
              <GlassCard hover={false} className="p-4 text-center">
                <p className="text-[10px] font-display font-semibold uppercase tracking-wider text-mint mb-1">Year 1 ROI</p>
                <p className="text-2xl font-display font-bold text-mint">{roi > 9999 ? '>9,999' : Math.round(roi).toLocaleString()}%</p>
              </GlassCard>
            </div>

            {/* Chart */}
            <GlassCard hover={false} className="p-4">
              <p className="text-xs font-display font-semibold text-white/60 uppercase tracking-wider mb-3">Annual Decision Latency Cost vs. Savings</p>
              <div className="h-52">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                    <XAxis dataKey="name" tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 9, fontFamily: 'DM Sans' }} axisLine={false} tickLine={false} interval={0} />
                    <YAxis tickFormatter={(v) => formatCurrency(v)} tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 9, fontFamily: 'DM Sans' }} axisLine={false} tickLine={false} width={60} />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
                    <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                      {chartData.map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </GlassCard>

            <div className="glass rounded-xl p-4 border border-teal/20">
              <p className="text-xs text-white/50 font-body">
                <span className="text-teal font-semibold">Formula: </span>
                Latency Cost = Revenue &times; 3% &times; (Cycle Days &divide; 7) &times; (Decision-Makers &divide; 10). Savings = Latency Cost &times; Automation %. ROI based on {formatCurrency(AVG_IMPLEMENTATION_COST)} average implementation.
              </p>
            </div>

            <Button to="/contact" className="w-full justify-center">
              See How We Can Achieve This &mdash; Book a Consultation
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
