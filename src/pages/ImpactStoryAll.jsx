import { useState, useMemo, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Shield, Heart, Zap, BarChart2, FileText, ArrowRight, ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react'
import SEOHead from '@/components/ui/SEOHead'
import { buildPageMeta } from '@/utils/seo'
import { impactStories } from '@/data/impactStories'
import imBg from '@/assets/impact/impall-hero.svg'

const ALL_INDUSTRIES = [...new Set(impactStories.map(s => s.industry))]
const CATEGORY_COUNTS = ALL_INDUSTRIES.reduce((acc, ind) => {
  acc[ind] = impactStories.filter(s => s.industry === ind).length
  return acc
}, {})

const CATEGORIES = [
  'Telecom', 'Blogs', 'Insurance', 'Infrastructure', 'Healthcare',
  'White Papers', 'Automation', 'Logistics & Supply Chain',
  'Technology & SaaS', 'Financial Services', 'Retail & E-Commerce',
  'Energy & Utilities', 'Media & Entertainment',
].map(label => ({ label, count: CATEGORY_COUNTS[label] ?? 0 }))

const INDUSTRY_MAP = {
  Insurance: Shield,
  Healthcare: Heart,
  Energy: Zap,
  Banking: BarChart2,
  Manufacturing: BarChart2,
}

const CARDS_PER_PAGE = 6

function TrophyIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      style={{ color: '#5BA3D1', opacity: 0.55 }} aria-hidden="true">
      <path d="M6 9H4a2 2 0 0 1-2-2V5h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 9h2a2 2 0 0 0 2-2V5h-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 17v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M8 21h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M6 3h12v8a6 6 0 0 1-12 0V3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  )
}

function getPageNums(cur, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i)
  const pages = []
  pages.push(0)
  if (cur > 2) pages.push('...')
  for (let i = Math.max(1, cur - 1); i <= Math.min(total - 2, cur + 1); i++) pages.push(i)
  if (cur < total - 3) pages.push('...')
  pages.push(total - 1)
  return pages
}


export default function ImpactStoryAll() {
  const meta = buildPageMeta(
    'Knowledge Hub',
    'Deep dives. Industry breakthroughs. Expert insights.',
    '/impact/all'
  )

  const [activeFilters, setActiveFilters] = useState([])
  const [page, setPage] = useState(0)

  const toggleFilter = (label) => {
    setActiveFilters(prev =>
      prev.includes(label) ? prev.filter(f => f !== label) : [...prev, label]
    )
    setPage(0)
  }

  const resetFilters = () => {
    setActiveFilters([])
    setPage(0)
  }

  const filteredStories = useMemo(() => {
    if (!activeFilters.length) return impactStories
    return impactStories.filter(s => activeFilters.includes(s.industry))
  }, [activeFilters])

  const cardsPerPage = CARDS_PER_PAGE
  const totalPages = Math.max(1, Math.ceil(filteredStories.length / cardsPerPage))

  // ── IndustryGrid-style goTo: clamp + set in one shot, no useEffect needed ──
  const goTo = (next) => {
    setPage(Math.max(0, Math.min(totalPages - 1, next)))
  }

  const safePage = Math.min(page, totalPages - 1)
  const visibleStories = filteredStories
  .slice(safePage * cardsPerPage, safePage * cardsPerPage + cardsPerPage)
  .slice(0, 6)
  const pageNums = getPageNums(safePage, totalPages)

  return (
    <>
      <SEOHead meta={meta} />

      {/* Hero */}
      <section
        className="relative overflow-hidden mt-16"
        style={{
          backgroundImage: `url(${imBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '220px',
          display: 'flex',
          alignItems: 'center',
          padding: 'clamp(40px, 6vw, 80px) clamp(20px, 5vw, 60px)',
        }}
      >
        <div className="absolute inset-0 bg-[#0D1B2A]/60 pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-14">
          <h1
            className="font-['Public_Sans'] font-extrabold leading-tight mb-3"
            style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: '#DCECF7' }}
          >
            Knowledge Hub
          </h1>
          <p
            className="font-['Public_Sans'] leading-relaxed"
            style={{ fontSize: 'clamp(13px, 1.5vw, 15px)', color: 'rgba(255,255,255,0.8)', maxWidth: '500px' }}
          >
            Deep dives. Industry breakthroughs. Expert insights. Explore our complete library
            of case studies and blogs to see how we solve the world's toughest data challenges.
          </p>
        </div>
      </section>

      {/* Main Layout */}
      <div
        className="w-full py-8 px-28 flex flex-col lg:flex-row gap-8 items-start"
        style={{ backgroundColor: '#ffffff' }}
      >
        {/* Sidebar */}
        <aside className="w-full lg:w-[260px] lg:flex-shrink-0 bg-white rounded-2xl border border-[#5BA3D1]/20 p-5">
          <p className="font-['Public_Sans'] font-bold text-[14px] text-[#5BA3D1] tracking-[1.2px] uppercase mb-4">
            Filter by Category
          </p>

          <div className="space-y-0.5">
            {CATEGORIES.map(({ label, count }) => {
              const checked = activeFilters.includes(label)
              return (
                <button
                  key={label}
                  onClick={() => toggleFilter(label)}
                  className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg hover:bg-[#f0f7fc] transition-colors text-left"
                >
                  <span
                    className="w-[18px] h-[18px] rounded-[5px] border-2 flex items-center justify-center flex-shrink-0 transition-all"
                    style={{
                      borderColor: checked ? '#5BA3D1' : '#c5d9e8',
                      backgroundColor: checked ? '#5BA3D1' : 'transparent',
                    }}
                  >
                    {checked && (
                      <svg width="10" height="10" viewBox="0 0 12 10" fill="none">
                        <polyline points="1,5 4,8 11,1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </span>
                  <span className="font-['Public_Sans'] text-[14px] font-medium text-[#1a2c3d] flex-1">{label}</span>
                  <span className="font-['Public_Sans'] text-[13px] text-[#8aacbe] font-medium">({count})</span>
                </button>
              )
            })}
          </div>

          <button
            onClick={resetFilters}
            className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border-[1.5px] border-[#d0e6f4] bg-[#f5f9fd] text-[#5BA3D1] font-['Public_Sans'] text-[13px] font-semibold hover:bg-[#e8f3fb] hover:border-[#5BA3D1] transition-all"
          >
            <RotateCcw size={13} />
            Reset Filters
          </button>
        </aside>

        {/* Cards Area */}
        <div className="flex-1 min-w-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-4">
            {visibleStories.map((story,index) => {
              const Icon = INDUSTRY_MAP[story.industry] || FileText
              return (
                <Link
                  key={`${safePage}-${index}`}
                  to={`/impact/${story.slug}`}
                  className="group block h-full"
                >
                  <div
                    className="h-full rounded-2xl p-[18px] flex flex-col transition-shadow duration-200"
                    style={{
                      backgroundColor: '#ffffff',
                      border: '1px solid rgba(91,163,209,0.15)',
                      boxShadow: '0 2px 8px rgba(40,61,87,0.06)',
                    }}
                    onMouseEnter={e => e.currentTarget.style.boxShadow = '0 12px 32px rgba(40,61,87,0.18)'}
                    onMouseLeave={e => e.currentTarget.style.boxShadow = '0 2px 8px rgba(40,61,87,0.06)'}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="inline-flex items-center gap-1.5 font-['Public_Sans'] text-[14px] font-semibold px-2.5 py-1 rounded-full"
                        style={{ color: '#5BA3D1', border: '1px solid #5BA3D1' }}
                      >
                        <Icon size={14} />
                        {story.industry}
                      </span>
                      <TrophyIcon />
                    </div>

                    <h3 className="font-['Public_Sans'] font-bold text-[16px] leading-snug mb-2 text-[#0D1B2A]">
                      {story.title}
                    </h3>

                    <p className="font-['Public_Sans'] text-[14px] leading-relaxed text-[#4a6478] flex-1 line-clamp-3">
                      {story.subtitle}
                    </p>

                    <div className="mt-4 ml-auto">
                      <span
                        className="inline-flex items-center gap-1.5 font-['Public_Sans'] font-semibold text-[14px] px-3.5 py-1.5 rounded-lg text-white"
                        style={{ backgroundColor: '#5BA3D1' }}
                      >
                        Explore <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Empty state */}
          {visibleStories.length === 0 && (
            <div className="text-center py-20">
              <p className="font-['Public_Sans'] text-[#8aacbe] text-[15px]">No results match the selected filters.</p>
              <button
                onClick={resetFilters}
                className="mt-4 font-['Public_Sans'] text-[13px] font-semibold text-[#5BA3D1] underline"
              >
                Reset filters
              </button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-10 flex-wrap">
              <button
                onClick={() => goTo(safePage - 1)}
                disabled={safePage === 0}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: safePage === 0 ? '#f0f4f8' : '#3D5166',
                  color: safePage === 0 ? '#8aacbe' : '#ffffff',
                  border: 'none',
                }}
                aria-label="Previous page"
              >
                <ChevronLeft size={16} />
              </button>

              {pageNums.map((p, idx) =>
                p === '...'
                  ? (
                    <span
                      key={`dots-${idx}`}
                      className="w-10 h-10 flex items-center justify-center font-['Public_Sans'] text-[13px] text-[#8aacbe]"
                    >
                      ...
                    </span>
                  )
                  : (
                    <button
                      key={p}
                      onClick={() => goTo(p)}
                      className="w-10 h-10 rounded-xl font-['Public_Sans'] text-[13px] font-semibold transition-colors"
                      style={{
                        backgroundColor: p === safePage ? '#3D5166' : '#ffffff',
                        color: p === safePage ? '#ffffff' : '#3D5166',
                        border: p === safePage ? 'none' : '1.5px solid #d0e6f4',
                      }}
                    >
                      {p + 1}
                    </button>
                  )
              )}

              <button
                onClick={() => goTo(safePage + 1)}
                disabled={safePage === totalPages - 1}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: safePage === totalPages - 1 ? '#f0f4f8' : '#3D5166',
                  color: safePage === totalPages - 1 ? '#8aacbe' : '#ffffff',
                  border: 'none',
                }}
                aria-label="Next page"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}