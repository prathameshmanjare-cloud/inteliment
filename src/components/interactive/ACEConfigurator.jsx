import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckSquare, Square, ChevronRight } from 'lucide-react'
import * as Icons from 'lucide-react'
import { aceTeamRoles, engagementModels } from '@/data/team'
import Button from '@/components/ui/Button'
import GlassCard from '@/components/ui/GlassCard'
import Badge from '@/components/ui/Badge'
import ScrollReveal from '@/components/ui/ScrollReveal'

const practiceAreas = [
  { id: 'dataEng', label: 'Data Engineering', icon: 'Database', roles: ['Data Engineer', 'Solution Architect'] },
  { id: 'dataSci', label: 'Data Science & ML', icon: 'Brain', roles: ['Data Scientist', 'Solution Architect'] },
  { id: 'bi', label: 'BI & Visualization', icon: 'BarChart3', roles: ['BI Developer'] },
  { id: 'aiAgents', label: 'AI Decision Agents', icon: 'Zap', roles: ['Data Scientist', 'Full Stack Developer'] },
  { id: 'fullStack', label: 'Full Stack / APIs', icon: 'Code2', roles: ['Full Stack Developer'] },
  { id: 'qa', label: 'QA & Testing', icon: 'CheckSquare', roles: ['QA / Automation Tester'] },
  { id: 'design', label: 'UI/UX Design', icon: 'Palette', roles: ['UI/UX Designer'] },
]

const alwaysIncluded = ['Delivery Manager', 'Tech Lead / Project Manager']

export default function ACEConfigurator() {
  const [selected, setSelected] = useState(new Set(['dataEng']))
  const [engagementModel, setEngagementModel] = useState('Embedded Team')

  const toggle = (id) => {
    const next = new Set(selected)
    if (next.has(id)) { next.delete(id) } else { next.add(id) }
    setSelected(next)
  }

  const activeRoles = useMemo(() => {
    const roleSet = new Set(alwaysIncluded)
    practiceAreas.forEach((area) => {
      if (selected.has(area.id)) area.roles.forEach((r) => roleSet.add(r))
    })
    // Always add architect if any practice selected
    if (selected.size > 0) roleSet.add('Solution Architect')
    return aceTeamRoles.filter((r) => roleSet.has(r.role))
  }, [selected])

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: selectors */}
        <div className="space-y-6">
          {/* Practice areas */}
          <ScrollReveal>
            <div>
              <h3 className="font-display font-bold text-white text-lg mb-4">Select Practice Areas</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {practiceAreas.map((area) => {
                  const Icon = Icons[area.icon] || Icons.Box
                  const isSelected = selected.has(area.id)
                  return (
                    <motion.button
                      key={area.id}
                      onClick={() => toggle(area.id)}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className={`flex items-center gap-3 p-3 rounded-xl border-2 transition-all text-left ${isSelected ? 'border-teal bg-teal/10 text-white' : 'border-white/10 glass text-white/70 hover:border-white/20'}`}
                      aria-pressed={isSelected}
                    >
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${isSelected ? 'bg-teal/20' : 'bg-white/5'}`}>
                        <Icon size={14} className={isSelected ? 'text-teal' : 'text-white/40'} />
                      </div>
                      <span className="text-sm font-display font-semibold">{area.label}</span>
                      <div className="ml-auto">
                        {isSelected ? <CheckSquare size={14} className="text-teal" /> : <Square size={14} className="text-white/20" />}
                      </div>
                    </motion.button>
                  )
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* Engagement model */}
          <ScrollReveal delay={0.1}>
            <div>
              <h3 className="font-display font-bold text-white text-lg mb-4">Engagement Model</h3>
              <div className="space-y-3">
                {engagementModels.map((model) => {
                  const isSelected = engagementModel === model.name
                  return (
                    <button
                      key={model.name}
                      onClick={() => setEngagementModel(model.name)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all ${isSelected ? 'border-teal bg-teal/10' : 'border-white/10 glass hover:border-white/20'}`}
                      aria-pressed={isSelected}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className={`font-display font-bold text-sm ${isSelected ? 'text-white' : 'text-white/80'}`}>{model.name}</p>
                          <p className="text-xs text-white/50 font-body mt-0.5">{model.bestFor}</p>
                        </div>
                        {isSelected && <div className="w-4 h-4 rounded-full bg-teal shrink-0 mt-0.5" />}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right: team summary */}
        <ScrollReveal direction="right">
          <GlassCard hover={false} dark className="p-6 h-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display font-bold text-white">Your ACE Team</h3>
              <Badge color="teal">{activeRoles.length} roles</Badge>
            </div>

            <div className="space-y-2 mb-6">
              <AnimatePresence>
                {aceTeamRoles.map((role) => {
                  const isActive = activeRoles.some((r) => r.role === role.role)
                  const isFixed = alwaysIncluded.includes(role.role)
                  const Icon = Icons[role.icon] || Icons.User
                  return (
                    <motion.div
                      key={role.role}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isActive ? 1 : 0.25 }}
                      transition={{ duration: 0.2 }}
                      className={`flex items-center gap-3 p-2.5 rounded-lg transition-all ${isActive ? 'bg-white/5' : ''}`}
                    >
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${isActive ? 'bg-teal/20' : 'bg-white/5'}`}>
                        <Icon size={12} className={isActive ? 'text-teal' : 'text-white/20'} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-xs font-display font-semibold truncate ${isActive ? 'text-white' : 'text-white/30'}`}>{role.role}</p>
                        <p className={`text-[10px] font-body truncate ${isActive ? 'text-white/50' : 'text-white/20'}`}>{role.experience}</p>
                      </div>
                      {isFixed && isActive && <span className="text-[9px] font-display uppercase tracking-wider text-teal/60">Always included</span>}
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>

            <div className="glass rounded-xl p-3 mb-4 border border-teal/10">
              <p className="text-xs font-display font-semibold text-teal/80 uppercase tracking-wider mb-1">Engagement Model</p>
              <p className="text-sm font-display font-bold text-white">{engagementModel}</p>
              <p className="text-xs text-white/50 font-body mt-0.5">{engagementModels.find((m) => m.name === engagementModel)?.description}</p>
            </div>

            <Button to="/contact" className="w-full justify-center" icon={ChevronRight}>
              Design Your CoE
            </Button>
          </GlassCard>
        </ScrollReveal>
      </div>
    </div>
  )
}
