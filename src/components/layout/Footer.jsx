import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'


// ─── SVG Icons ───────────────────────────────────────────────────────────────

function LinkedInIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function TwitterIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function YouTubeIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
    </svg>
  )
}

function InstagramIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  )
}

function FacebookIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function WhatsAppIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  )
}

// ─── Data ────────────────────────────────────────────────────────────────────

const footerColumns = [
  {
    heading: 'Solutions & Platforms',
    links: [
      { label: 'Data Engineering', to: '/solutions/data-engineering' },
      { label: 'Data Science & ML', to: '/solutions/data-science' },
      { label: 'BI & Visualization', to: '/solutions/visualization' },
      { label: 'AI Decision Agents', to: '/solutions/ai-agents' },
      { label: 'Enterprise DI System', to: '/solutions/enterprise-di' },
      { label: 'ROI Calculator', to: '/roi-calculator' },
    ],
  },
  {
    heading: 'Industries',
    links: [
      { label: 'Insurance', to: '/industries/insurance' },
      { label: 'Banking & FS', to: '/industries/banking' },
      { label: 'Healthcare', to: '/industries/healthcare' },
      { label: 'Manufacturing', to: '/industries/manufacturing' },
      { label: 'Energy & Utilities', to: '/industries/energy' },
      { label: 'Telecom', to: '/industries/telecom' },
      { label: 'Automotive', to: '/industries/automotive' },
      { label: 'Retail & E-Commerce', to: '/industries/retail-ecommerce' },
    ],
    showAll: true,
  },
  {
    heading: 'Services & Resources',
    links: [
      { label: 'Services', to: '/services' },
      { label: 'Decision Intelligence', to: '/decision-intelligence' },
      { label: 'DI Assessment', to: '/assessment' },
      { label: 'DI Insights Hub', to: '/insights' },
      { label: 'Impact Stories', to: '/impact' },
      { label: 'Inteli-Labs', to: '/inteli-labs' },
      { label: 'InteliHub', to: '/hub' },
      { label: 'Australia Practice', to: '/australia' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Inteliment', to: '/about' },
      { label: 'Leadership', to: '/about/leadership' },
      { label: 'Inteli-Me (Careers)', to: '/inteli-me' },
      { label: 'News', to: '/news' },
      { label: 'CSR', to: '/csr' },
      { label: 'Contact Us', to: '/contact' },
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Cookie Policy', to: '/cookies' },
    ],
  },
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/inteliment', Icon: LinkedInIcon },
  { label: 'Twitter / X', href: 'https://twitter.com/inteliment', Icon: TwitterIcon },
  { label: 'YouTube', href: 'https://www.youtube.com/@inteliment', Icon: YouTubeIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/inteliment', Icon: InstagramIcon },
  { label: 'Facebook', href: 'https://www.facebook.com/inteliment', Icon: FacebookIcon },
]

const offices = [
  { city: 'Pune, India', note: 'HQ, 106 Baner', href: null },
  { city: 'Sydney, Australia', note: 'APAC Practice', href: '/australia' },
  { city: 'Singapore', note: 'SEA Office', href: null },
  { city: 'Europe', note: 'EU Office', href: null },
]

const countryFlags = [
  { flag: '🇦🇺', city: 'Australia' },
  { flag: '🇪🇺', city: 'Europe' },
  { flag: '🇮🇳', city: 'India' },
  { flag: '🇸🇬', city: 'Singapore' },
  { flag: '🇺🇸', city: 'USA' },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function SocialIcon({ label, href, Icon }) {
  return (
    
      <a href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-white/70 text-sm hover:text-white hover:border-white/40 hover:bg-white/10 transition-all duration-200"
    >
      <Icon size={14} />
    </a>
  )
}

function FooterColumn({ heading, links, showAll }) {
  return (
    <div className="flex flex-col">
      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#5BA3D1] mb-4">
        {heading}
      </h4>
      <ul className="flex flex-col gap-[9px]">
        {links.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className="text-sm text-white/80 hover:text-white transition-colors duration-200 font-body"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      {showAll && (
        <Link
          to="/industries"
          className="mt-3 self-start text-[11px] px-3.5 py-1.5 rounded-full border border-white/20 text-white/50 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-200 font-body"
        >
          All Industries →
        </Link>
      )}
    </div>
  )
}

// ─── Main Footer ──────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <>
      {/* CHANGED: removed gradient background entirely — now uses SVG image bg + navy overlay like original */}
      <footer
        className="relative overflow-hidden font-['DM_Sans']"
      >
          {/* Background layer */}
       <div className="absolute inset-0 bg-[url('/images/footer/footer-bg.svg')] bg-cover bg-center bg-no-repeat opacity-90"></div>

        {/* Dark overlay so text stays readable over the image */}
        <div className="absolute inset-0" />

        <div className="relative z-10">
          {/* ── CTA Hero Section ── */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center text-center gap-6">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white leading-tight">
              Turn Your Data into Your Decision Advantage.
            </h2>
            <p className="text-lg text-white/70 font-body max-w-2xl">
              Drive growth, efficiency, and competitive advantage with Decision Intelligence.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-teal text-white font-display font-semibold text-base hover:bg-teal/90 transition-colors"
            >
              Schedule a Conversation
              <img src="/assets/home/bt-icon.svg" alt="" className="w-5 h-5" />
            </Link>
          </div>

          {/* ── Footer Links Area ── */}
          <div
            className="max-w-7xl mx-4 sm:mx-6 lg:mx-auto rounded-2xl px-6 sm:px-10 lg:px-16 pt-14 pb-5"
            style={{
              background:"transparent",
              border: "1px solid rgba(0, 0, 0, 0.1)",
              borderRadius: "20px",
              boxShadow: `
                0 8px 32px rgba(0, 0, 0, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.15),
                0 0 0 1px rgba(255, 255, 255, 0.05)
              `,
            }}
          >
            {/* Inner content constrained to max-w-7xl */}
            <div className="max-w-7xl mx-auto">

              {/* Top: Brand + columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-10 gap-x-10 xl:gap-x-16 mb-12 items-start">

                {/* Brand column */}
                <div className="lg:col-span-1 flex flex-col gap-5">
                  <div className="flex items-center gap-2 mb-2">
                    <img
                      src="/logo-white.svg"
                      alt="Inteliment"
                      className="h-10 w-auto object-contain"
                    />
                  </div>

                  <p className="text-sm text-white/60 font-body leading-relaxed text-nowrap">
                    Decision Intelligence Company. <br/>22 years of data mastery.<br/>
                    <span className='text-nowrap'>
                      One mission: better decisions.
                      </span>
                  </p>

                  {/* Social icons */}
                  <div className="flex flex-nowrap gap-3 overflow-x-auto">
                    {socialLinks.map(({ label, href, Icon }) => (
                      <SocialIcon key={label} label={label} href={href} Icon={Icon} />
                    ))}
                  </div>

                  {/* Contact */}
                  <div className="flex flex-col gap-3">
                    <a
                      href="mailto:insights@inteliment.com"
                      className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors duration-200 font-body"
                    >
                      <Mail size={14} className="shrink-0" />
                      insights@inteliment.com
                    </a>
                    
                     <a href="tel:+912069115600"
                      className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors duration-200 font-body"
                    >
                      <Phone size={14} className="shrink-0" />
                      (020) 6911-5600
                    </a>
                    
                      <a href="https://wa.me/917058142400"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors duration-200 font-body"
                    >
                      <WhatsAppIcon size={14} />
                      WhatsApp
                    </a>
                  </div>

{/* Country flags */}
                <div className="flex items-center gap-2 mt-1">
                  {countryFlags.map(({ flag, city }) => (
                    <button
                      key={city}
                      title={city}
                      className="
                        w-8 h-8
                        flex-shrink-0
                        rounded-full
                        border border-white/20
                        flex items-center justify-center
                        text-sm
                        hover:scale-110 hover:border-white/40
                        transition-all duration-20 ">
                      {flag}
                    </button>
                  ))}
                </div>
                </div>

                {/* Link columns */}
                {footerColumns.map((col) => (
                  <FooterColumn key={col.heading} {...col} />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
              <div className="mt-8 flex flex-col items-center gap-3 text-center">

              {/* Row 1: Links */}
              <div className="flex items-center gap-4 flex-wrap justify-center">
                <Link
                  to="/privacy"
                  className="text-xs text-white/30 hover:text-white transition-colors duration-200 font-body"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="text-xs text-white/30 hover:text-white transition-colors duration-200 font-body"
                >
                  Terms of Service
                </Link>
                <Link
                  to="/cookies"
                  className="text-xs text-white/30 hover:text-white transition-colors duration-200 font-body"
                >
                  Cookie Policy
                </Link>
              </div>

              {/* Row 2: Copyright */}
              <p className="text-xs text-white/30 font-body">
                © {new Date().getFullYear()} Inteliment Technologies India Pvt. Ltd. All rights reserved.
              </p>

            </div>
          {/* Bottom padding below the bordered box */}
          <div className="pb-6" />

        </div>
      </footer>
    </>
  )
}
