import { Navigate, useParams, Link } from 'react-router-dom'
import { Clock, ArrowLeft, ArrowRight } from 'lucide-react'
import SEOHead from '@/components/ui/SEOHead'
import CTABanner from '@/components/sections/CTABanner'
import Container from '@/components/ui/Container'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { buildPageMeta, articleJsonLd, breadcrumbJsonLd } from '@/utils/seo'
import { articles } from '@/data/articles'

// ── Markdown body renderer ────────────────────────────────────────
// Handles: ## headings, **bold** (inline), - bullet lists, --- dividers,
// [text](url) links (internal links use <a> which React Router intercepts),
// empty lines as spacers.

function parseInline(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-navy">$1</strong>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-teal hover:underline font-semibold">$1</a>')
}

function renderBody(body) {
  const lines = body.split('\n')
  const elements = []
  let listBuffer = []
  let key = 0

  const flushList = () => {
    if (listBuffer.length === 0) return
    elements.push(
      <ul key={key++} className="list-disc list-outside pl-5 space-y-1.5 mb-4 text-grey-700 font-body">
        {listBuffer.map((item, j) => (
          <li key={j} dangerouslySetInnerHTML={{ __html: parseInline(item) }} className="text-sm leading-relaxed" />
        ))}
      </ul>
    )
    listBuffer = []
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    if (line.startsWith('## ')) {
      flushList()
      elements.push(
        <h2 key={key++} className="font-display font-bold text-display-sm text-navy mt-10 mb-4 leading-tight">
          {line.slice(3)}
        </h2>
      )
    } else if (line.startsWith('- ')) {
      listBuffer.push(line.slice(2))
    } else if (line === '---') {
      flushList()
      elements.push(<hr key={key++} className="border-grey-200 my-8" />)
    } else if (line.trim() === '') {
      flushList()
      // Only add spacer if not at start/end
      if (elements.length > 0) {
        elements.push(<div key={key++} className="mb-2" />)
      }
    } else {
      flushList()
      elements.push(
        <p
          key={key++}
          className="text-grey-700 font-body leading-relaxed mb-4 text-sm md:text-base"
          dangerouslySetInnerHTML={{ __html: parseInline(line) }}
        />
      )
    }
  }
  flushList()
  return elements
}

export default function InsightArticle() {
  const { slug } = useParams()
  const article = articles.find((a) => a.slug === slug)
  if (!article) return <Navigate to="/insights" replace />

  const meta = buildPageMeta(article.title, article.excerpt, `/insights/${slug}`)

  // Use relatedSlugs if defined, otherwise fall back to first 2 other articles
  const related = article.relatedSlugs
    ? article.relatedSlugs.map((s) => articles.find((a) => a.slug === s)).filter(Boolean)
    : articles.filter((a) => a.slug !== slug).slice(0, 2)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      articleJsonLd(article),
      breadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Insights', path: '/insights' },
        { name: article.title, path: `/insights/${slug}` },
      ]),
    ],
  }

  return (
    <>
      <SEOHead meta={meta} jsonLd={jsonLd} />

      {/* Article header */}
      <section className="pt-28 pb-10 mesh-bg">
        <Container narrow>
          <ScrollReveal>
            <Link to="/insights" className="inline-flex items-center gap-2 text-white/50 hover:text-teal text-sm font-body mb-8 transition-colors">
              <ArrowLeft size={14} /> Back to Insights
            </Link>
            <Badge color="teal" className="mb-3">{article.category}</Badge>
            <h1 className="font-display font-bold text-display-lg text-white mb-4 leading-tight">{article.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/40 font-body">
              <span>{article.author}</span>
              <span>·</span>
              <span>{article.date}</span>
              <span>·</span>
              <span className="flex items-center gap-1"><Clock size={13} />{article.readTime}</span>
            </div>
            {article.tags && (
              <div className="flex flex-wrap gap-2 mt-4">
                {article.tags.map((tag) => (
                  <span key={tag} className="text-[11px] bg-white/10 text-white/60 px-2.5 py-1 rounded-full font-body">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </ScrollReveal>
        </Container>
      </section>

      {/* Article body */}
      <section className="py-10 bg-surface section-light">
        <Container narrow>
          <ScrollReveal>
            <div className="max-w-none">
              {renderBody(article.body)}
            </div>
          </ScrollReveal>

          {/* Copyright disclaimer */}
          <ScrollReveal delay={0.1}>
            <div className="mt-10 pt-6 border-t border-grey-200">
              <p className="text-xs text-grey-500 font-body leading-relaxed">
                © {new Date().getFullYear()} Inteliment Technologies India Pvt. Ltd. All rights reserved. This article is the intellectual property of Inteliment and may not be reproduced, distributed, or transmitted in any form without prior written permission. Brief excerpts may be quoted with appropriate attribution to Inteliment and a link to the original source. The views expressed are those of the author and reflect Inteliment's position at the time of publication.
              </p>
            </div>
          </ScrollReveal>

          {/* Related articles */}
          {related.length > 0 && (
            <ScrollReveal delay={0.2} className="mt-16 pt-10 border-t border-grey-200">
              <h3 className="font-display font-bold text-navy text-xl mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {related.map((a) => (
                  <Link key={a.slug} to={`/insights/${a.slug}`} className="group glass-light rounded-xl p-5 border border-grey-200/60 hover:border-teal/30 transition-all block">
                    <Badge color="teal" className="mb-3">{a.category}</Badge>
                    <h4 className="font-display font-bold text-navy text-sm leading-tight group-hover:text-teal transition-colors mb-2">{a.title}</h4>
                    <p className="text-xs text-grey-600 font-body line-clamp-2 mb-3">{a.excerpt}</p>
                    <div className="flex items-center gap-1 text-xs text-teal">Read <ArrowRight size={10} /></div>
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          )}
        </Container>
      </section>

      <CTABanner title="Ready to implement these ideas?" ctaLabel="Talk to Our Team" ctaTo="/contact" />
    </>
  )
}
