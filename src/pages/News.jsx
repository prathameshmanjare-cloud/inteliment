import { useState } from 'react'
import { Calendar, ArrowRight, ExternalLink, ExternalLink as LinkedinIcon } from 'lucide-react'
import SEOHead from '@/components/ui/SEOHead'
import HeroSection from '@/components/sections/HeroSection'
import CTABanner from '@/components/sections/CTABanner'
import Container from '@/components/ui/Container'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { buildPageMeta } from '@/utils/seo'
import { newsItems, newsCategories } from '@/data/news'

function formatDate(dateStr) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

const categoryColorMap = {
  Company: 'bg-teal/15 text-teal border-teal/20',
  Partnership: 'bg-blue-400/15 text-blue-300 border-blue-400/20',
  Event: 'bg-purple-400/15 text-purple-300 border-purple-400/20',
  Innovation: 'bg-mint/15 text-mint border-mint/20',
  Milestone: 'bg-orange-400/15 text-orange-300 border-orange-400/20',
}

export default function News() {
  const [activeCategory, setActiveCategory] = useState('All')

  const meta = buildPageMeta(
    'News, Inteliment',
    'Latest news, press releases, and announcements from Inteliment, the Decision Intelligence company.',
    '/news'
  )

  const filtered =
    activeCategory === 'All'
      ? newsItems
      : newsItems.filter((item) => item.category === activeCategory)

  return (
    <>
      <SEOHead meta={meta} />

      {/* Hero */}
      <HeroSection
        eyebrow="Newsroom"
        title="News &amp; Announcements"
        subtitle="Partnerships, milestones, events, and company announcements from across Inteliment's global practice."
        variant="compact"
      />

      {/* News feed */}
      <section className="py-20 bg-surface section-light">
        <Container>
          {/* Category filter pills */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {newsCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-display font-semibold transition-all border ${
                    activeCategory === cat
                      ? 'bg-teal text-navy border-teal'
                      : 'bg-white text-grey-600 border-grey-200 hover:border-teal/40 hover:text-teal'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* News list */}
          <div className="max-w-3xl mx-auto space-y-6">
            {filtered.map((item, i) => {
              const catColor = categoryColorMap[item.category] || categoryColorMap.Company
              return (
                <ScrollReveal key={item.title} delay={i * 0.07}>
                  <div className="glass-light rounded-xl p-7 border border-grey-200/60 hover:border-teal/30 hover:-translate-y-0.5 transition-all">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className={`text-[10px] font-display font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${catColor}`}>
                        {item.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-grey-500 font-body">
                        <Calendar size={11} />
                        {formatDate(item.date)}
                      </span>
                    </div>
                    <h2 className="font-display font-bold text-navy text-xl mb-3 leading-tight">{item.title}</h2>
                    <p className="text-grey-700 font-body text-sm leading-relaxed mb-4">{item.summary}</p>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-display font-semibold text-teal hover:text-teal-light transition-colors"
                      >
                        Read more <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                </ScrollReveal>
              )
            })}

            {filtered.length === 0 && (
              <ScrollReveal>
                <div className="text-center py-16 text-grey-500 font-body">
                  No news items in this category yet.
                </div>
              </ScrollReveal>
            )}
          </div>

          {/* LinkedIn follow */}
          <ScrollReveal delay={0.3}>
            <div className="max-w-xl mx-auto mt-16 glass-light rounded-2xl p-8 border border-grey-200/60 text-center">
              <p className="text-xs font-display font-bold uppercase tracking-widest text-teal mb-3">Stay Updated</p>
              <h3 className="font-display font-bold text-navy text-xl mb-3">Follow us on LinkedIn</h3>
              <p className="text-grey-700 font-body text-sm mb-6">
                Get real-time updates, thought leadership, and event announcements from the Inteliment team.
              </p>
              <a
                href="https://www.linkedin.com/company/inteliment"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-teal text-navy font-display font-bold text-sm hover:bg-teal-light transition-colors"
              >
                <LinkedinIcon size={16} />
                Inteliment on LinkedIn
              </a>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <CTABanner
        title="Media & Press Enquiries"
        subtitle="For press interviews, announcements, and media partnerships, reach out to our communications team."
        ctaLabel="Contact Us"
        ctaTo="/contact?subject=media-enquiry"
      />
    </>
  )
}
