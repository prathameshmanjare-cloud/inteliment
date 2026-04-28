import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Minus, ChevronDown } from 'lucide-react'
import { platforms, platformColumns } from '@/data/platforms'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Badge from '@/components/ui/Badge'

export default function CapabilityMatrix() {
  const [activeRow, setActiveRow] = useState(null)

  const toggleRow = (id) => setActiveRow(activeRow === id ? null : id)

  return (
    <section className="py-20 md:py-28 bg-surface section-light">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Platform Ecosystem"
            title="Built on Platforms You Trust"
            subtitle="7 certified partnerships. Deep implementation expertise across the full data platform landscape."
            light
          />
        </ScrollReveal>

        <div className="mt-12 overflow-x-auto scrollbar-hide">
          <div className="min-w-[640px]">
            {/* Header row */}
            <div className="grid grid-cols-[200px_1fr_1fr_1fr_1fr] gap-2 mb-2">
              <div />
              {platformColumns.map((col) => (
                <div key={col.id} className="text-center">
                  <span className="text-xs font-display font-bold uppercase tracking-widest text-grey-600">{col.label}</span>
                </div>
              ))}
            </div>

            {/* Platform rows */}
            <div className="flex flex-col gap-2">
              {platforms.map((platform) => (
                <div key={platform.id}>
                  {/* Row button */}
                  <button
                    className={`w-full text-left rounded-xl transition-all duration-200 ${
                      activeRow === platform.id
                        ? 'glass-dark border border-teal/30 shadow-glow-teal'
                        : 'glass-light border border-grey-200/60 hover:border-teal/20'
                    }`}
                    onClick={() => toggleRow(platform.id)}
                    aria-expanded={activeRow === platform.id}
                  >
                    <div className="grid grid-cols-[200px_1fr_1fr_1fr_1fr] gap-2 items-center p-3 md:p-4">
                      {/* Platform name */}
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{platform.logo}</span>
                        <div>
                          <div className={`text-sm font-display font-bold ${activeRow === platform.id ? 'text-white' : 'text-navy'}`}>{platform.name}</div>
                          <div className={`text-[10px] font-body ${activeRow === platform.id ? 'text-teal' : 'text-grey-500'}`}>{platform.badge}</div>
                        </div>
                      </div>

                      {/* Capability cells */}
                      {platformColumns.map((col) => {
                        const cap = platform[col.id]
                        return (
                          <div key={col.id} className="flex flex-col items-center gap-1">
                            {cap?.available ? (
                              <CheckCircle2 size={16} className="text-teal shrink-0" />
                            ) : (
                              <Minus size={14} className="text-slate-300 shrink-0" />
                            )}
                            <span className={`text-[10px] font-body text-center leading-tight hidden md:block ${activeRow === platform.id ? 'text-white/60' : 'text-grey-500'}`}>
                              {cap?.available && cap.tools !== '—' ? cap.tools.split(',')[0].trim() : ''}
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </button>

                  {/* Detail panel */}
                  <AnimatePresence>
                    {activeRow === platform.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="glass-dark rounded-b-xl border border-t-0 border-teal/20 p-4 md:p-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <div className="flex items-center gap-2 mb-3">
                                <span className="text-2xl">{platform.logo}</span>
                                <div>
                                  <h4 className="font-display font-bold text-white">{platform.name}</h4>
                                  <Badge color="teal">{platform.badge}</Badge>
                                </div>
                              </div>
                              <p className="text-sm text-white/70 font-body leading-relaxed">{platform.description}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                              {platformColumns.map((col) => {
                                const cap = platform[col.id]
                                if (!cap?.available) return null
                                return (
                                  <div key={col.id} className="glass rounded-lg p-3">
                                    <div className="text-xs font-display font-semibold text-teal mb-1">{col.label}</div>
                                    <div className="text-xs font-body text-white/60 leading-relaxed">{cap.tools}</div>
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
