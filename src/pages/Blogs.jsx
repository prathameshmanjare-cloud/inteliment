import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, FileText, ChevronLeft, ChevronRight } from 'lucide-react'
import SEOHead from '@/components/ui/SEOHead'
import Container from '@/components/ui/Container'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { buildPageMeta } from '@/utils/seo'
import { blogs } from '@/data/blogs'

function StackIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  )
}

function FirstSection() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat mt-16"
      style={{ backgroundImage: 'url(/assets/impact/hero-bg.svg)' }}
    >
      <div className="absolute inset-0 bg-[#0D1B2A]/70 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 py-20 md:py-28 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-[55%] flex flex-col items-start">
          <h1 className="font-['Public_Sans'] font-bold text-4xl md:text-5xl lg:text-[52px] leading-tight mb-5 whitespace-nowrap" style={{ color: '#DCECF7' }}>
            Insights & Intelligence
          </h1>
          <p className="font-['Public_Sans'] text-base leading-relaxed mb-9 max-w-[460px]" style={{ color: '#DCECF7CC' }}>
            Expert perspectives on data, AI, and decision intelligence. Stay ahead with our latest thoughts and analysis.
          </p>
          <Link
            to="/impact/all"
            className="inline-flex items-center gap-2.5 font-['Public_Sans'] font-semibold text-sm px-6 py-3 rounded-md transition-opacity duration-200 hover:opacity-90"
            style={{ backgroundColor: '#5BA3D1', color: '#ffffff' }}
          >
            Explore All Blogs
            <StackIcon />
          </Link>
        </div>
        <div className="hidden md:block md:w-[45%]" style={{ minHeight: '260px' }} />
      </div>
    </section>
  )
}

const CARDS_PER_PAGE = 8
const TOTAL_PAGES = Math.ceil(blogs.length / CARDS_PER_PAGE)

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  }),
  exit: { opacity: 0, y: -12, transition: { duration: 0.2 } },
}

export default function Blogs() {
  const meta = buildPageMeta(
    'Blogs',
    'Expert insights on data engineering, AI, and decision intelligence. Stay informed with our latest blogs.',
    '/blogs'
  )

  const [page, setPage] = useState(0)
  const [direction, setDirection] = useState(1)

  const visibleBlogs = blogs.slice(page * CARDS_PER_PAGE, (page + 1) * CARDS_PER_PAGE)

  const goTo = (next) => {
    setDirection(next > page ? 1 : -1)
    setPage(next)
  }

  return (
    <>
      <SEOHead meta={meta} />

      <FirstSection />

      <section
        className="py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(to right, #8DB7D2, #EAF4FA)' }}
      >
        <Container>
          {/* Section Header */}
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12">
              <div className="max-w-2xl">
                <h2 className="font-['Public_Sans'] font-bold text-4xl md:text-5xl mb-4 text-black">
                  Latest Insights
                </h2>
                <p className="font-['Public_Sans'] text-sm leading-relaxed max-w-xl text-black">
                  Explore our latest blogs and technical articles to stay updated on data engineering, AI innovations, and decision intelligence trends.
                </p>
              </div>
              <div className="shrink-0 self-start md:self-start mt-1">
                <Link
                  to="/blogs/all"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-['Public_Sans'] font-semibold text-sm text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: '#5BA3D1' }}
                >
                  View All Blogs
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Animated Cards Grid */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={page}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
              exit={{ opacity: 0, x: direction * -40, transition: { duration: 0.25 } }}
            >
              {visibleBlogs.map((blog, i) => {
                return (
                  <motion.div
                    key={blog.slug}
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <Link to={`/blogs/${blog.slug}`} className="group block h-full">
                      <motion.div
                        className="h-full rounded-2xl p-5 flex flex-col"
                        style={{
                          backgroundColor: 'rgba(236, 244, 251, 0.92)',
                          backdropFilter: 'blur(8px)',
                          border: '1px solid rgba(255,255,255,0.5)',
                        }}
                        whileHover={{
                          y: -5,
                          boxShadow: '0 12px 36px rgba(40, 61, 87, 0.3)',
                          transition: { duration: 0.22, ease: 'easeOut' },
                        }}
                      >
                        {/* Top row: badge + icon */}
                        <div className="flex items-center justify-between mb-4">
                          <span
                            className="inline-flex items-center gap-1.5 font-['Public_Sans'] text-[11px] font-medium px-3 py-1 rounded-full"
                            style={{ color: '#5BA3D1', border: '1px solid #5BA3D1', backgroundColor: 'transparent' }}
                          >
                            <FileText size={10} />
                            {blog.industry}
                          </span>
                          <svg
                            width="20" height="20" viewBox="0 0 24 24" fill="none"
                            style={{ color: '#5BA3D1', opacity: 0.6 }}
                            aria-hidden="true"
                          >
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                            <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>

                        {/* Title */}
                        <h3 className="font-['Public_Sans'] font-bold text-[15px] leading-snug mb-2" style={{ color: '#0D1B2A' }}>
                          {blog.title}
                        </h3>

                        {/* Date */}
                        <p className="font-['Public_Sans'] text-[11px] mb-2" style={{ color: '#5BA3D1' }}>
                          {blog.date}
                        </p>

                        {/* Subtitle */}
                        <p className="font-['Public_Sans'] text-xs leading-relaxed mb-5 line-clamp-4 flex-1" style={{ color: '#3D5166' }}>
                          {blog.subtitle}
                        </p>

                        {/* Explore button */}
                        <div className="mt-auto">
                          <span
                            className="inline-flex items-center gap-1.5 font-['Public_Sans'] font-semibold text-xs px-4 py-2 rounded-md text-white transition-opacity group-hover:opacity-90"
                            style={{ backgroundColor: '#5BA3D1' }}
                          >
                            Read More <ArrowRight size={12} />
                          </span>
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>

          {/* Pagination */}
          {TOTAL_PAGES > 1 && (
            <div className="flex items-center justify-end gap-3 mt-7">
              <motion.button
                className="w-9 h-9 rounded-full border border-white/70 bg-[#EAF4FA] flex items-center justify-center cursor-pointer disabled:opacity-30"
                onClick={() => goTo(Math.max(0, page - 1))}
                disabled={page === 0}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                aria-label="Previous page"
              >
                <ChevronLeft size={20} color="#5BA3D1" />
              </motion.button>

              <div className="flex items-center gap-1.5">
                {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="h-1 rounded-full cursor-pointer"
                    animate={{
                      width: i === page ? 28 : 16,
                      backgroundColor: i === page ? '#5BA3D1' : 'rgba(255,255,255,0.5)',
                    }}
                    transition={{ duration: 0.3 }}
                    onClick={() => goTo(i)}
                  />
                ))}
              </div>

              <motion.button
                className="w-9 h-9 rounded-full border border-white/70 bg-[#EAF4FA] flex items-center justify-center cursor-pointer disabled:opacity-30"
                onClick={() => goTo(Math.min(TOTAL_PAGES - 1, page + 1))}
                disabled={page === TOTAL_PAGES - 1}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                aria-label="Next page"
              >
                <ChevronRight size={20} color="#5BA3D1" />
              </motion.button>
            </div>
          )}
        </Container>
      </section>
    </>
  )
}
