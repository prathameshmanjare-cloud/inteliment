import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import * as Icons from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { decisionLevels } from '@/data/decisionLevels'

export default function DecisionLevels({ mode = 'interactive' }) {
  const [activeLevel, setActiveLevel] = useState(null)
  const isAllExpanded = mode === 'all-expanded'

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
      {decisionLevels.map((level, i) => {
        const Icon = Icons[level.icon] || Icons.Zap
        const isExpanded = isAllExpanded || activeLevel === level.level

        return (
          <ScrollReveal key={level.level} delay={i * 0.08} direction="up">
            <div
              className={`glass rounded-xl p-5 border transition-all duration-300 h-full ${
                !isAllExpanded ? 'cursor-pointer hover:-translate-y-0.5' : ''
              }`}
              style={{ borderColor: isExpanded ? `${level.color}50` : 'rgba(255,255,255,0.1)' }}
              onClick={() => !isAllExpanded && setActiveLevel(activeLevel === level.level ? null : level.level)}
            >
              {/* Card header row */}
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: '#00B4D820' }}>
                  <Icon size={16} style={{ color: '#00B4D8' }} />
                </div>
                {!isAllExpanded && (
                  <ChevronDown
                    size={14}
                    className="text-white/40 shrink-0 mt-1 transition-transform duration-200"
                    style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                )}
              </div>

              <h3 className="font-display font-bold text-white text-base mb-1">{level.title}</h3>
              <p className="text-white/55 font-body text-sm leading-snug">{level.subtitle}</p>

              {/* Expanded details */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 pt-4 border-t border-white/10 space-y-3">
                      <div>
                        <p
                          className="text-[10px] font-display font-bold uppercase tracking-widest mb-1.5"
                          style={{ color: level.color + 'BB' }}
                        >
                          What it controls
                        </p>
                        <p className="text-sm text-white/65 font-body leading-relaxed">{level.controls}</p>
                      </div>
                      <div>
                        <p
                          className="text-[10px] font-display font-bold uppercase tracking-widest mb-1.5"
                          style={{ color: level.color + 'BB' }}
                        >
                          Business impact
                        </p>
                        <p className="text-sm text-white/65 font-body leading-relaxed">{level.impact}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        )
      })}
    </div>
  )
}
