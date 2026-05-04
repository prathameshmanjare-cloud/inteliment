import { Navigate, useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ThumbsUp, Share2, Star } from 'lucide-react'
import SEOHead from '@/components/ui/SEOHead'
import CTABanner from '@/components/sections/CTABanner'
import Container from '@/components/ui/Container'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { buildPageMeta, articleJsonLd, breadcrumbJsonLd } from '@/utils/seo'
import { articles } from '@/data/articles'
import { useEffect, useState, useRef } from 'react'

// ── Markdown body renderer ────────────────────────────────────────
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
      if (elements.length > 0) elements.push(<div key={key++} className="mb-2" />)
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

// ── Pick the best available female voice ─────────────────────────
function getBestFemaleVoice(voices) {
  return (
    voices.find(v => v.name === 'Google UK English Female') ||
    voices.find(v => v.name === 'Google US English') ||
    voices.find(v => v.name === 'Microsoft Zira Online (Natural) - English (United States)') ||
    voices.find(v => v.name === 'Microsoft Jenny Online (Natural) - English (United States)') ||
    voices.find(v => v.name === 'Microsoft Aria Online (Natural) - English (United States)') ||
    voices.find(v => v.name.includes('Online (Natural)') && v.lang.startsWith('en')) ||
    voices.find(v => v.name === 'Samantha') ||
    voices.find(v => v.name === 'Karen') ||
    voices.find(v => v.name === 'Victoria') ||
    voices.find(v => v.name === 'Moira') ||
    voices.find(v => v.name.includes('Zira')) ||
    voices.find(v => v.name.toLowerCase().includes('female') && v.lang.startsWith('en')) ||
    voices.find(v => v.lang === 'en-US') ||
    voices.find(v => v.lang.startsWith('en')) ||
    voices[0]
  )
}

// ── Star Rating Component ─────────────────────────────────────────
function StarRating({ slug }) {
  const storageKey = `article-rating-${slug}`
  const countKey = `article-rating-count-${slug}`
  const sumKey = `article-rating-sum-${slug}`

  const [userRating, setUserRating] = useState(() => {
    try { return parseInt(localStorage.getItem(storageKey)) || 0 } catch { return 0 }
  })
  const [hovered, setHovered] = useState(0)
  const [ratingCount, setRatingCount] = useState(() => {
    try { return parseInt(localStorage.getItem(countKey)) || 0 } catch { return 0 }
  })
  const [ratingSum, setRatingSum] = useState(() => {
    try { return parseInt(localStorage.getItem(sumKey)) || 0 } catch { return 0 }
  })

  const avgRating = ratingCount > 0 ? (ratingSum / ratingCount).toFixed(1) : null

  const handleRate = (star) => {
    if (userRating !== 0) return // already rated
    try {
      localStorage.setItem(storageKey, star)
      const newCount = ratingCount + 1
      const newSum = ratingSum + star
      localStorage.setItem(countKey, newCount)
      localStorage.setItem(sumKey, newSum)
      setUserRating(star)
      setRatingCount(newCount)
      setRatingSum(newSum)
    } catch {}
  }

  const displayStars = hovered || userRating

  return (
    <div className="flex flex-col items-start gap-1.5">
      <span className="text-xs text-white/50 font-body">Rate this article</span>
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => handleRate(star)}
            onMouseEnter={() => userRating === 0 && setHovered(star)}
            onMouseLeave={() => setHovered(0)}
            disabled={userRating !== 0}
            className={`transition-transform ${userRating === 0 ? 'hover:scale-110 cursor-pointer' : 'cursor-default'}`}
            aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
          >
            <Star
              size={18}
              className={`transition-colors ${
                star <= displayStars
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'fill-transparent text-white/30'
              }`}
            />
          </button>
        ))}
        {avgRating && (
          <span className="ml-2 text-xs text-white/50 font-body">
            {avgRating} / 5 ({ratingCount} {ratingCount === 1 ? 'rating' : 'ratings'})
          </span>
        )}
      </div>
      {userRating !== 0 && (
        <span className="text-xs text-teal font-body">Thanks for your rating!</span>
      )}
    </div>
  )
}

// ── Like Button ───────────────────────────────────────────────────
function LikeButton({ slug }) {
  const likedKey = `article-liked-${slug}`
  const countKey = `article-likes-${slug}`

  const [liked, setLiked] = useState(() => {
    try { return localStorage.getItem(likedKey) === 'true' } catch { return false }
  })
  const [count, setCount] = useState(() => {
    try { return parseInt(localStorage.getItem(countKey)) || 0 } catch { return 0 }
  })

  const toggle = () => {
    try {
      const next = !liked
      const nextCount = next ? count + 1 : Math.max(0, count - 1)
      localStorage.setItem(likedKey, next)
      localStorage.setItem(countKey, nextCount)
      setLiked(next)
      setCount(nextCount)
    } catch {}
  }

  return (
    <button
      onClick={toggle}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-body border transition-all
        ${liked
          ? 'bg-teal/20 border-teal text-teal'
          : 'bg-white/5 border-white/20 text-white/60 hover:border-teal/50 hover:text-teal'
        }`}
    >
      <ThumbsUp size={15} className={liked ? 'fill-teal text-teal' : ''} />
      {liked ? 'Liked' : 'Like'}
      {count > 0 && <span className="text-xs opacity-70">{count}</span>}
    </button>
  )
}

// ── Share Button ──────────────────────────────────────────────────
function ShareButton({ title, slug }) {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const dropdownRef = useRef(null)

  const url = typeof window !== 'undefined'
    ? `${window.location.origin}/insights/${slug}`
    : `/insights/${slug}`

  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  const platforms = [
    {
      name: 'LinkedIn',
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      name: 'X (Twitter)',
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.731-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      name: 'Instagram',
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
        </svg>
      ),
      // Instagram has no direct web share URL — copy link is the best fallback
      href: null,
      action: 'copy',
    },
    {
      name: 'Copy link',
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
        </svg>
      ),
      href: null,
      action: 'copy',
    },
  ]

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handlePlatform = async (platform) => {
    if (platform.action === 'copy' || !platform.href) {
      try {
        await navigator.clipboard.writeText(url)
        setCopied(true)
        setTimeout(() => { setCopied(false); setOpen(false) }, 1800)
      } catch {}
    } else {
      window.open(platform.href, '_blank', 'noopener,noreferrer,width=600,height=500')
      setOpen(false)
    }
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-body border border-white/20 bg-white/5 text-white/60 hover:border-teal/50 hover:text-teal transition-all"
      >
        <Share2 size={15} />
        Share
      </button>

      {open && (
        <div className="absolute left-0 mt-2 w-48 rounded-xl border border-grey-200/20 bg-navy/95 backdrop-blur-sm shadow-xl z-50 overflow-hidden">
          {platforms.map((platform) => (
            <button
              key={platform.name}
              onClick={() => handlePlatform(platform)}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-body text-white/70 hover:bg-white/10 hover:text-teal transition-colors text-left"
            >
              <span className="text-white/50">{platform.icon}</span>
              {platform.name === 'Copy link' && copied ? 'Copied!' : platform.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// ── Main Component ────────────────────────────────────────────────
export default function InsightArticle() {
  const { slug } = useParams()
  const article = articles.find((a) => a.slug === slug)
  if (!article) return <Navigate to="/insights" replace />

  // ── Build clean text WITH the title prepended ──────────────────
  const cleanText = `${article.title}. ${article.body
    .replace(/[#*-]/g, '')
    .replace(/\[(.*?)\]\((.*?)\)/g, '$1')
    .replace(/\n+/g, ' ')
    .trim()}`

  const [speechStatus, setSpeechStatus] = useState('stopped')
  const [voice, setVoice] = useState(null)
  const utteranceRef = useRef(null)

  useEffect(() => {
    const load = () => {
      const voices = speechSynthesis.getVoices()
      if (voices.length > 0) setVoice(getBestFemaleVoice(voices))
    }
    load()
    window.speechSynthesis.onvoiceschanged = load
    return () => { window.speechSynthesis.onvoiceschanged = null }
  }, [])

  useEffect(() => {
    return () => { window.speechSynthesis.cancel() }
  }, [])

  const start = () => {
    if (speechStatus === 'paused') {
      window.speechSynthesis.resume()
      setSpeechStatus('playing')
      return
    }
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(cleanText)
    if (voice) utterance.voice = voice
    utterance.rate = 0.9
    utterance.pitch = 1.05
    utterance.volume = 1
    utterance.onstart = () => setSpeechStatus('playing')
    utterance.onend = () => setSpeechStatus('stopped')
    utterance.onerror = () => setSpeechStatus('stopped')
    utteranceRef.current = utterance
    window.speechSynthesis.speak(utterance)
    setSpeechStatus('playing')
  }

  const pause = () => {
    if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
      window.speechSynthesis.pause()
      setSpeechStatus('paused')
    }
  }

  const stop = () => {
    window.speechSynthesis.cancel()
    setSpeechStatus('stopped')
  }

  const meta = buildPageMeta(article.title, article.excerpt, `/insights/${slug}`)

  const related = article.relatedSlugs
    ? article.relatedSlugs.map((s) => articles.find((a) => a.slug === s)).filter(Boolean)
    : articles.filter((a) => a.slug !== slug).slice(0, 3)

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
            <Link to="/insights" className="inline-flex items-center gap-2 text-white/50 hover:text-teal text-sm font-body mb-8 transition-colors mx-3.5">
              <ArrowLeft size={14} /> Back to Insights
            </Link>
            <Badge color="teal" className="mb-3">{article.category}</Badge>
            <h1 className="font-display font-bold text-display-lg text-white mb-4 leading-tight">{article.title}</h1>

            {/* Audio controls */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <Button onClick={start} size="sm" disabled={speechStatus === 'playing'}>
                ▶ {speechStatus === 'paused' ? 'Resume' : 'Listen'}
              </Button>
              <Button onClick={pause} size="sm" variant="secondary" disabled={speechStatus !== 'playing'}>
                ⏸ Pause
              </Button>
              <Button onClick={stop} size="sm" variant="ghost" disabled={speechStatus === 'stopped'}>
                ⏹ Stop
              </Button>
            </div>

            {/* Like, Share & Star Rating row */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <LikeButton slug={slug} />
              <ShareButton title={article.title} slug={slug} />
            </div>

            {/* Star rating */}
            <div className="mb-4">
              <StarRating slug={slug} />
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

          {/* Like / Share / Rating — repeated at bottom for convenience */}
          <ScrollReveal delay={0.05}>
            <div className="mt-10 pt-6 border-t border-grey-200 flex flex-wrap items-center gap-4 mesh-bg rounded-xl p-5">
              <LikeButton slug={slug} />
              <ShareButton title={article.title} slug={slug} />
              <div className="ml-auto">
                <StarRating slug={slug} />
              </div>
            </div>
          </ScrollReveal>

          {/* Copyright disclaimer */}
          <ScrollReveal delay={0.1}>
            <div className="mt-6 pt-4 border-t border-grey-200 ">
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