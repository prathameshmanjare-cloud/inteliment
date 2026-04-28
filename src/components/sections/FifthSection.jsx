// Drop this component into your HomePage.jsx or as a separate SectionFive.jsx

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import ClientLogoWall from '@/components/sections/ClientLogoWall'

const techPartners = [
  { name: 'Rubiscape',   blue: true  },
  { name: 'Snowflake',   blue: false },
  { name: 'Microsoft',   blue: true  },
  { name: 'Databricks',  blue: false },
  { name: 'AWS',         blue: true  },
  { name: 'Google',      blue: false },
  { name: 'Informatica', blue: true  },
  { name: 'SAP',         blue: false },
]

const stats = [
  { value: '22+',  label: 'Years of Data Mastery'          },
  { value: '500+', label: 'Projects Delivered'              },
  { value: '100+', label: 'Enterprise Clients'              },
  { value: '150+', label: 'Decision Intelligence Experts'   },
  { value: '96%',  label: 'Client Satisfaction'             },
]

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function SectionFive() {
  const cardRef  = useRef(null)
  const cardInView = useInView(cardRef, { once: true, margin: '-60px' })

  return (
    <section className="w-full bg-white py-20 overflow-hidden">

      {/* ── Badge ── */}
      <motion.div
        className="flex justify-center mb-5"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span
          className="text-gray-600 font-medium px-6 py-2.5 rounded-full"
          style={{ border: '1px solid #d1d5db', fontSize: '15px' }}
        >
          Trust &amp; Scale
        </span>
      </motion.div>

      {/* ── Heading ── */}
      <h2
          className="text-center font-extrabold text-gray-900 px-4 mb-10"
          style={{
            fontSize: '42px',
            fontFamily: "'Public Sans', sans-serif",
            letterSpacing: '-0.01em',
            whiteSpace: 'nowrap',
          }}
        >
          Trusted by 100+ Enterprises Globally
        </h2>

      {/* ── Logo wall ── */}
      <div className="mb-14">
        <ClientLogoWall />
      </div>

      {/* ── Blue card ── */}
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={cardRef}
          className="relative rounded-3xl overflow-hidden px-8 py-12"
          style={{
            background: 'linear-gradient(135deg, #eaf5fc 0%, #f0f7fd 50%, #ddeef8 100%)',
            border: '1px solid rgba(91,163,209,0.18)',
            boxShadow: '0 8px 40px rgba(91,163,209,0.10)',
          }}
          initial={{ opacity: 0, y: 48, scale: 0.97 }}
          animate={cardInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Decorative blobs */}
          <div
            className="pointer-events-none absolute -left-20 -bottom-20 rounded-full"
            style={{ width: 280, height: 280, background: 'rgba(194,223,240,0.45)', filter: 'blur(48px)' }}
          />
          <div
            className="pointer-events-none absolute right-0 top-0 rounded-full"
            style={{ width: 200, height: 200, background: 'rgba(184,217,239,0.32)', filter: 'blur(36px)' }}
          />

          {/* ── Tech partnerships label ── */}
          <motion.p
            className="text-center font-semibold text-gray-700 mb-7 tracking-wide relative z-10"
            style={{ fontSize: 15, fontFamily: "'Public Sans', sans-serif" }}
            initial={{ opacity: 0 }}
            animate={cardInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.25 }}
          >
            Technology Partnerships and Capability
          </motion.p>

          {/* ── Partner names ── */}
          <div className="relative z-10 flex flex-wrap justify-center gap-x-9 gap-y-3 mb-12">
            {techPartners.map((p, i) => (
              <motion.span
                key={p.name}
                className="text-base md:text-lg font-semibold"
                style={{
                  color: p.blue ? '#3b9fd4' : '#111827',
                  fontFamily: "'Public Sans', sans-serif",
                }}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={cardInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.07, ease: 'easeOut' }}
              >
                {p.name}
              </motion.span>
            ))}
          </div>

          {/* ── Divider wipe ── */}
          <motion.div
            className="relative z-10 w-full mb-10"
            style={{ height: 1, background: 'rgba(91,163,209,0.25)', transformOrigin: 'left' }}
            initial={{ scaleX: 0 }}
            animate={cardInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.5, ease: 'easeOut' }}
          />

          {/* ── Stats ── */}
          <motion.div
            className="relative z-10 grid grid-cols-2 md:grid-cols-5 gap-8 place-items-center"
            initial="hidden"
            animate={cardInView ? 'visible' : 'hidden'}
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="flex flex-col items-center gap-1"
                variants={fadeUp}
                custom={i}
              >
                <span
                  className="font-bold"
                  style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#3b9fd4', fontFamily: "'Public Sans', sans-serif" }}
                >
                  {s.value}
                </span>
                <span
                  className="text-sm text-gray-500 font-medium text-center"
                  style={{ fontFamily: "'Public Sans', sans-serif" }}
                >
                  {s.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}