import { useState, useEffect, useRef } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { impactStories } from '@/data/impactStories'
import heroBg from '@/assets/impact/impact-hero.svg'
import chBg from '@/assets/impact/challenges-bg.svg'
import rightTop from '@/assets/impact/right-top.svg'
import resultsBg from '@/assets/impact/result-bg.svg'

function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

function Reveal({ children, direction = 'up', delay = 0, className = '' }) {
  const [ref, inView] = useInView()
  const animMap = {
    up: 'animate-fade-up',
    left: 'animate-slide-left',
    right: 'animate-slide-right',
    fade: 'animate-fade-in',
  }
  return (
    <div ref={ref} className={className} style={{ opacity: inView ? 1 : 0 }}>
      <div
        className={inView ? animMap[direction] : ''}
        style={{ animationDelay: `${delay}s`, animationFillMode: 'both' }}
      >
        {children}
      </div>
    </div>
  )
}

function Hero({ story }) {
  return (
    <section
      className="relative min-h-[50vh] flex items-center pt-16 pb-12 sm:pt-36 sm:pb-16 overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-[#1F1F1F]/60 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1F1F1F]/30 via-transparent to-[#1F1F1F]/70" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <Reveal delay={0.1}>
          <div className="mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full !text-[14px] sm:text-[12px] font-semibold tracking-widest border border-[#ffffff] bg-[#353535]/50 text-[#ffffff]">
              {story.industry}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <h1
            className="font-black leading-[1.15] text-white max-w-[700px] mb-6 sm:mb-8 text-[1.6rem] sm:text-[2.2rem] lg:text-[3rem]"
            style={{ fontFamily: "'Public Sans', sans-serif" }}
          >
            {story.title}
          </h1>
        </Reveal>

        <Reveal delay={0.26}>
          <p
            className="text-[15px] sm:text-[17px] lg:text-[18px] text-white max-w-[600px] leading-relaxed mb-2"
            style={{ fontFamily: "'Public Sans', sans-serif" }}
          >
            {story.subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.34}>
          <p
            className="text-[14px] sm:text-[16px] lg:text-[18px] text-white/55 max-w-[600px] leading-relaxed"
            style={{ fontFamily: "'Public Sans', sans-serif" }}
          >
            {story.outcome}
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function ResultsBar({ results }) {
  const [ref, inView] = useInView(0.2)
  return (
    <section
      ref={ref}
      className="relative py-10 sm:py-14 lg:py-16 overflow-hidden"
      style={{ backgroundColor: '#1F1F1F' }}
    >
      <img
        src={resultsBg}
        alt=""
        className="absolute top-0 right-0 h-full w-auto object-cover opacity-40 pointer-events-none"
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 my-4 sm:my-8 lg:my-10 grid grid-cols-2 md:grid-cols-4 gap-y-6">
        {results.map((r, i) => (
          <div
            key={`${r.label}-${i}`}
            className={`pl-4 sm:pl-6 border-l border-white/20 py-3 sm:py-4 ${inView ? 'animate-fade-up' : ''}`}
            style={{
              animationDelay: `${i * 0.12}s`,
              animationFillMode: 'both',
              opacity: inView ? 1 : 0,
            }}
          >
            <div
              className="font-black text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem] leading-none mb-2 sm:mb-3"
              style={{
                fontFamily: "'Public Sans', sans-serif",
                color: '#60b8e0',
              }}
            >
              {r.value}
            </div>
            <p
              className="text-[11px] sm:text-[13px] text-white/60 font-medium tracking-wide"
              style={{ fontFamily: "'Public Sans', sans-serif" }}
            >
              {r.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

function ChallengeApproach({ story }) {
  return (
    <section
      className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${chBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-4 sm:gap-6 mb-4 sm:mb-6 lg:items-stretch">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-4 sm:gap-6 h-full justify-between">

            {/* Challenge */}
            <Reveal direction="left">
              <div className="bg-white/70 rounded-2xl border border-[#94C6E4] p-5 sm:p-6 lg:p-8 relative overflow-hidden">
                <img
                  src={rightTop}
                  alt=""
                  className="absolute -top-4 -right-10 sm:-right-14 w-32 sm:w-44 lg:w-64 opacity-60 pointer-events-none"
                />
                <span className="inline-flex items-center px-3 py-1 rounded-full text[14px] font-semibold border border-[#b8d4e8] text-[#4a7a9b] bg-white mb-3 w-fit">
                  The Challenge
                </span>
                <h2 className="font-bold text-[18px] sm:text-[22px] lg:text-[26px] text-[#1a5276] mb-4">
                  The Problem We Solved
                </h2>
                <p className="text-[13px] sm:text-[14px] text-black leading-relaxed">
                  {story.challenge}
                </p>
              </div>
            </Reveal>

            {/* Tech Stack */}
            <Reveal direction="left" delay={0.1}>
              <div className="bg-[#EEF6FB] rounded-2xl border border-[#b8d4e8]/60 p-4 sm:p-5 lg:p-6">
                <h3 className="font-bold text-[18px] sm:text-[20px] lg:text-[24px] text-[#1a5276] mb-3 sm:mb-4">
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {story.techStack.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-full text-[12px] sm:text-[13px] lg:text-[13px] font-semibold bg-[#DCECF7] border border-[#b8d4e8] text-[#1a5276]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

          </div>

          {/* RIGHT COLUMN */}
          <Reveal direction="right">
            <div className="bg-[#dbeaf5]/60 rounded-2xl border border-[#b8d4e8]/60 p-5 sm:p-6 lg:p-10 h-full flex flex-col">
              <span className="inline-flex items-center px-3 py-1 rounded-full text[14px] font-semibold border border-[#b8d4e8] text-[#4a7a9b] bg-white mb-3 w-fit">
                Our Approach
              </span>
              <h2 className="font-bold text-[20px] sm:text-[24px] lg:text-[28px] text-[#1a5276] mb-3 sm:mb-4">
                How We Delivered
              </h2>
              <p className="text-[13px] sm:text-[14px] text-black leading-relaxed mb-5 sm:mb-6">
                {story.approach}
              </p>
              <div className="flex flex-col gap-3 mt-auto">
                {story.details.map((d, i) => (
                  <Reveal key={i} delay={i * 0.07}>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full border border-[#b8d4e8] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                          <path
                            d="M2 6l3 3 5-5"
                            stroke="#9FC9E4"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-[13px] sm:text-[14px] text-black leading-snug">
                        {d}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

        </div>

        {/* DI IMPACT */}
        {story.diImpact && (
          <Reveal delay={0.2}>
            <div className="relative bg-white/70 rounded-2xl border border-[#b8d4e8]/60 p-5 sm:p-6 lg:p-8 text-center">
              <span className="absolute -top-4 left-[78%] -translate-x-1/2">
                <img
                  src="/assets/impact/star.svg"
                  alt="star"
                  className="w-7 sm:w-8 lg:w-9 opacity-80"
                />
              </span>
              <span className="absolute -bottom-3.5 left-4 sm:left-20">
                <img
                  src="/assets/impact/star.svg"
                  alt="star"
                  className="w-5 sm:w-7 opacity-60"
                />
              </span>
              <p className="font-bold text-[17px] sm:text-[19px] lg:text-[20px] text-[#1a5276] mb-2 sm:mb-3">
                Decision Intelligence Impact
              </p>
              <p className="text-[13px] sm:text-[14px] lg:text-[14.5px] text-[#4a6580] leading-relaxed max-w-[900px] mx-auto">
                {story.diImpact}
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}

export default function ImpactStory() {
  const { slug } = useParams()
  const story = impactStories.find(s => s.slug === slug)
  if (!story) return <Navigate to="/impact" replace />

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700;800;900&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(-32px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(32px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-up { animation: fadeUp 0.7s ease both; }
        .animate-slide-left { animation: slideLeft 0.7s ease both; }
        .animate-slide-right { animation: slideRight 0.7s ease both; }
        .animate-fade-in { animation: fadeIn 0.6s ease both; }
      `}</style>
      <Hero story={story} />
      <ChallengeApproach story={story} />
      <ResultsBar results={story.results} />
    </>
  )
}