import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, ChevronLeft, ChevronRight } from 'lucide-react'
import SEOHead from '@/components/ui/SEOHead'
import HeroSection from '@/components/sections/HeroSection'
import CTABanner from '@/components/sections/CTABanner'
import Container from '@/components/ui/Container'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Badge from '@/components/ui/Badge'
import { buildPageMeta } from '@/utils/seo'
import { articles } from '@/data/articles'

const categories = ['All', ...new Set(articles.map((a) => a.category))]

const CARDS_PER_PAGE = 6

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

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [page, setPage] = useState(0)

  const meta = buildPageMeta(
    'DI Intelligence Hub',
    'Thought leadership on Decision Intelligence, data engineering, AI agents, and enterprise analytics from the Inteliment team.',
    '/insights'
  )

  const filtered = useMemo(() => {
    return activeCategory === 'All' ? articles : articles.filter((a) => a.category === activeCategory)
  }, [activeCategory])

  const featuredArticle = activeCategory === 'All' ? articles.find((a) => a.featured) : null
  const gridArticles = featuredArticle ? filtered.filter((a) => a.slug !== featuredArticle.slug) : filtered

  const totalPages = Math.max(1, Math.ceil(gridArticles.length / CARDS_PER_PAGE))
  const safePage = Math.min(page, totalPages - 1)
  const visibleArticles = gridArticles.slice(safePage * CARDS_PER_PAGE, safePage * CARDS_PER_PAGE + CARDS_PER_PAGE)
  const pageNums = getPageNums(safePage, totalPages)

  const goTo = (next) => {
    setPage(Math.max(0, Math.min(totalPages - 1, next)))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat)
    setPage(0)
  }

  return (
    <>
      <SEOHead meta={meta} />
      <HeroSection
        eyebrow="Intelligence Hub"
        title="Decision Intelligence Insights"
        subtitle="Frameworks, technical roadmaps, and CXO briefings from our 22-year data intelligence practice."
        variant="compact"
      />
      <section className="py-20 bg-surface section-light">
        <Container>
          {/* Category filters */}
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-display font-semibold transition-all ${activeCategory === cat ? 'bg-teal text-white shadow-glow-teal' : 'glass-light border border-grey-200 text-grey-700 hover:border-teal/30 hover:text-teal'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Featured article hero card — only on page 0 */}
          {featuredArticle && safePage === 0 && (
            <ScrollReveal className="mb-10">
              <Link to={`/insights/${featuredArticle.slug}`} className="group block">
                <div className="relative rounded-2xl overflow-hidden border border-grey-200/60 hover:border-teal/30 hover:shadow-glow-teal transition-all duration-300 bg-white">
                  <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #00B4D8, #00D4AA)' }} />
                  <div className="p-8 md:p-10">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <Badge color="teal">{featuredArticle.category}</Badge>
                      <span className="text-[10px] font-display font-bold uppercase tracking-widest text-teal bg-teal/10 border border-teal/20 px-2 py-0.5 rounded-full">
                        Featured
                      </span>
                      <div className="flex items-center gap-1 text-xs text-grey-500 font-body ml-auto">
                        <Clock size={11} />{featuredArticle.readTime}
                      </div>
                    </div>
                    <h2 className="font-display font-bold text-navy text-2xl md:text-3xl leading-tight mb-3 group-hover:text-teal transition-colors">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-grey-600 font-body text-base leading-relaxed mb-5 max-w-3xl line-clamp-2">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-grey-500 font-body">{featuredArticle.author} · {featuredArticle.date}</span>
                      <div className="flex items-center gap-1.5 text-sm font-display font-semibold text-teal group-hover:gap-2.5 transition-all">
                        Read Article <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          )}

          {/* Article grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleArticles.map((article, i) => (
              <ScrollReveal key={`${safePage}-${article.slug}`} delay={i * 0.07}>
                <Link to={`/insights/${article.slug}`} className="group block h-full">
                  <div className="h-full glass-light rounded-xl p-6 border border-grey-200/60 hover:border-teal/30 hover:shadow-glow-teal hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <Badge color="teal">{article.category}</Badge>
                      <div className="flex items-center gap-1 text-xs text-grey-500 font-body">
                        <Clock size={11} />{article.readTime}
                      </div>
                    </div>
                    <h3 className="font-display font-bold text-navy text-lg leading-tight mb-3">{article.title}</h3>
                    <p className="text-sm text-grey-600 font-body leading-relaxed mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-grey-500 font-body">{article.author}</span>
                      <div className="flex items-center gap-1 text-xs font-display font-semibold text-teal group-hover:gap-2 transition-all">
                        Read <ArrowRight size={11} />
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* Empty state */}
          {visibleArticles.length === 0 && (
            <div className="text-center py-20">
              <p className="font-body text-grey-500 text-[15px]">No articles match the selected category.</p>
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
                      className="w-10 h-10 flex items-center justify-center text-[13px] text-grey-400"
                    >
                      ...
                    </span>
                  )
                  : (
                    <button
                      key={p}
                      onClick={() => goTo(p)}
                      className="w-10 h-10 rounded-xl font-display text-[13px] font-semibold transition-colors"
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
        </Container>
      </section>
      <CTABanner title="Ready to implement what you've read?" ctaLabel="Talk to Our Team" ctaTo="/contact" />
    </>
  )
}