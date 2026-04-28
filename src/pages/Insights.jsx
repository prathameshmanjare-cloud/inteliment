import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock } from 'lucide-react'
import SEOHead from '@/components/ui/SEOHead'
import HeroSection from '@/components/sections/HeroSection'
import CTABanner from '@/components/sections/CTABanner'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Badge from '@/components/ui/Badge'
import { buildPageMeta } from '@/utils/seo'
import { articles } from '@/data/articles'

const categories = ['All', ...new Set(articles.map((a) => a.category))]

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState('All')
  const filtered = activeCategory === 'All' ? articles : articles.filter((a) => a.category === activeCategory)
  const meta = buildPageMeta(
    'DI Intelligence Hub',
    'Thought leadership on Decision Intelligence, data engineering, AI agents, and enterprise analytics from the Inteliment team.',
    '/insights'
  )

  // Featured article, only shown when 'All' is active and a featured article exists
  const featuredArticle = activeCategory === 'All' ? articles.find((a) => a.featured) : null
  const gridArticles = featuredArticle ? filtered.filter((a) => a.slug !== featuredArticle.slug) : filtered

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
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-display font-semibold transition-all ${activeCategory === cat ? 'bg-teal text-white shadow-glow-teal' : 'glass-light border border-grey-200 text-grey-700 hover:border-teal/30 hover:text-teal'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Featured article hero card */}
          {featuredArticle && (
            <ScrollReveal className="mb-10">
              <Link to={`/insights/${featuredArticle.slug}`} className="group block">
                <div className="relative rounded-2xl overflow-hidden border border-grey-200/60 hover:border-teal/30 hover:shadow-glow-teal transition-all duration-300 bg-white">
                  {/* Gradient accent bar */}
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
            {gridArticles.map((article, i) => (
              <ScrollReveal key={article.slug} delay={i * 0.07}>
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
        </Container>
      </section>
      <CTABanner title="Ready to implement what you've read?" ctaLabel="Talk to Our Team" ctaTo="/contact" />
    </>
  )
}
