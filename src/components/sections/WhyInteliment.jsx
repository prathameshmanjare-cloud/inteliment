import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'

const dimensions = [
  {
    label: 'Core Focus',
    si: 'General IT with analytics bolted on',
    staffing: 'Placements, not outcomes',
    inteliment: '100% data and AI, nothing else',
  },
  {
    label: 'Speed to Value',
    si: 'Long ramp cycles, heavy process',
    staffing: 'Fast to start, hard to steer',
    inteliment: 'Sprint delivery, PoC in weeks, production in months',
  },
  {
    label: 'Innovation',
    si: 'R&D labs disconnected from delivery',
    staffing: 'No innovation capability',
    inteliment: 'Inteli-Labs IP built into every engagement',
  },
  {
    label: 'Cost Model',
    si: 'Premium billing rates',
    staffing: 'Low cost, high attrition risk',
    inteliment: '30–40% cost efficiency with stable, senior teams',
  },
  {
    label: 'Governance',
    si: 'Multi-layer PMO',
    staffing: 'Client-managed',
    inteliment: 'Agile delivery with CXO-aligned dashboards and SLA audits',
  },
]

const columns = [
  { key: 'si', label: 'Global SIs', highlight: false },
  { key: 'staffing', label: 'Staffing Firms', highlight: false },
  { key: 'inteliment', label: 'Inteliment', highlight: true },
]

export default function WhyInteliment({ light = false }) {
  return (
    <section className={`py-20 ${light ? 'bg-surface section-light' : 'bg-navy mesh-bg'}`}>
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Why Inteliment"
            title="Why Enterprises Choose Inteliment Over the Alternatives."
            subtitle="Not a generalist. Not a body shop. A focused Decision Intelligence partner with 22 years of production delivery."
            light={light}
          />
        </ScrollReveal>

        {/* Desktop table */}
        <div className="mt-12 hidden md:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="w-36 pb-4 text-left" />
                {columns.map((col) => (
                  <th key={col.key} className="pb-4 px-4 text-center">
                    <span
                      className={`inline-block px-5 py-2 rounded-full text-sm font-display font-bold
                        ${col.highlight
                          ? 'bg-teal/20 text-teal border border-teal/30'
                          : light ? 'bg-slate-100 text-grey-600' : 'bg-white/5 text-white/50'
                        }`}
                    >
                      {col.label}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dimensions.map((row, i) => (
                <motion.tr
                  key={row.label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                >
                  <td className={`py-4 pr-4 text-xs font-display font-bold uppercase tracking-wider ${light ? 'text-grey-500' : 'text-white/40'}`}>
                    {row.label}
                  </td>
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      className={`py-4 px-4 text-sm text-center rounded-lg
                        ${col.highlight
                          ? 'font-display font-semibold text-white bg-teal/5 border-x border-teal/10'
                          : light ? 'text-grey-600 font-body' : 'text-white/50 font-body'
                        }`}
                    >
                      {row[col.key]}
                    </td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile: stacked cards per dimension */}
        <div className="md:hidden mt-10 space-y-4">
          {dimensions.map((row, i) => (
            <ScrollReveal key={row.label} delay={i * 0.06}>
              <div className={`rounded-xl p-5 border ${light ? 'bg-white border-grey-200/60' : 'glass border-white/10'}`}>
                <p className="text-xs font-display font-bold uppercase tracking-wider text-teal mb-3">{row.label}</p>
                <div className="space-y-2">
                  {columns.map((col) => (
                    <div key={col.key} className="flex items-start gap-3">
                      <span className={`text-xs font-display font-semibold shrink-0 w-24 ${col.highlight ? 'text-teal' : light ? 'text-grey-500' : 'text-white/40'}`}>
                        {col.label}
                      </span>
                      <span className={`text-xs font-body ${col.highlight ? 'text-white font-semibold' : light ? 'text-grey-600' : 'text-white/60'}`}>
                        {row[col.key]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
