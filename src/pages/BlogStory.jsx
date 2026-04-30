import { useState, useEffect, useRef } from 'react'
import { Navigate, useParams, useNavigate } from 'react-router-dom'
import { blogs } from '@/data/blogs'
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

function Hero({ blog }) {
  return (
    <section
      className="relative min-h-[50vh] flex items-center pt-16 pb-12 sm:pt-36 sm:pb-16 overflow-hidden"
      style={{
        backgroundImage: `url(${blog.heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
    

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <Reveal delay={0.1}>
          <div className="mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full !text-[14px] sm:text-[12px] font-semibold tracking-widest border border-[#ffffff] bg-[#353535]/50 text-[#ffffff]">
              {blog.industry}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <h1
            className="font-black leading-[1.15] text-white max-w-[700px] mb-6 sm:mb-8 text-[1.6rem] sm:text-[2.2rem] lg:text-[3rem]"
            style={{ fontFamily: "'Public Sans', sans-serif" }}
          >
            {blog.title}
          </h1>
        </Reveal>

        <Reveal delay={0.26}>
          <p
            className="text-[15px] sm:text-[17px] lg:text-[18px] text-white max-w-[600px] leading-relaxed mb-2"
            style={{ fontFamily: "'Public Sans', sans-serif" }}
          >
            {blog.subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.34}>
          <p
            className="text-[14px] sm:text-[16px] lg:text-[18px] text-white/55 max-w-[600px] leading-relaxed"
            style={{ fontFamily: "'Public Sans', sans-serif" }}
          >
            {blog.date} • {blog.author}
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function ContentSection({ blog }) {
  const renderContent = (content) => {
    const lines = content.split('\n')
    const elements = []
    let listItems = []

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc ml-6 mb-4">
            {listItems.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        )
        listItems = []
      }
    }

    lines.forEach((line, idx) => {
      const trimmed = line.trim()
      if (!trimmed) {
        flushList()
        return
      }
      if (trimmed.startsWith('## ')) {
        flushList()
        elements.push(<h3 key={idx} className="text-[16px] sm:text-[18px] font-bold text-[#1a5276] mt-6 mb-3">{trimmed.slice(3)}</h3>)
      } else if (trimmed.startsWith('### ')) {
        flushList()
        elements.push(<h4 key={idx} className="text-[14px] sm:text-[16px] font-semibold text-[#1a5276] mt-4 mb-2">{trimmed.slice(4)}</h4>)
      } else if (trimmed.startsWith('- ')) {
        listItems.push(trimmed.slice(2))
      } else {
        flushList()
        elements.push(<p key={idx} className="mb-4">{trimmed.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</p>)
      }
    })
    flushList()
    return elements
  }

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
        <Reveal>
          <div className="bg-white/70 rounded-2xl border border-[#94C6E4] p-5 sm:p-6 lg:p-8 relative overflow-hidden">
            <img
              src={rightTop}
              alt=""
              className="absolute -top-4 -right-10 sm:-right-14 w-32 sm:w-44 lg:w-64 opacity-60 pointer-events-none"
            />
            <div
              className="text-[13px] sm:text-[14px] text-black leading-relaxed"
              style={{ fontFamily: "'Public Sans', sans-serif" }}
            >
              {renderContent(blog.content)}
            </div>
          </div>
        </Reveal>

        {/* Tags */}
        {blog.tags && (
          <Reveal delay={0.1}>
            <div className="mt-6 flex flex-wrap gap-2">
              {blog.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-full text-[12px] sm:text-[13px] font-semibold bg-[#DCECF7] border border-[#b8d4e8] text-[#1a5276]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}

export default function BlogStory() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const blog = blogs.find(b => b.slug === slug)
  if (!blog) return <Navigate to="/blogs" replace />

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
      <Hero blog={blog} />
      <ContentSection blog={blog} />
    </>
  )
}
