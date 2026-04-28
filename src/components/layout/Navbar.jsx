import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import Button from '@/components/ui/Button'
import { mainNav, navCTA } from '@/data/navigation'

const f = 'DM Sans, sans-serif'

const navLinkClass = 'transition-colors'
const navLinkActive = 'bg-white/10 text-[#F8F9FA]'
const navLinkInactive = 'text-[#F8F9FA]/50 hover:bg-white/5 hover:text-[#F8F9FA]'

const badgeClass = 'text-[10px] bg-teal/20 text-teal px-1.5 py-0.5 rounded-full font-bold leading-none'

const regionStyles = {
  global: { bg: '#1F2D37', color: '#70B2DB' },
  au: { bg: '#1F2D37', color: '#70B2DB' },
  inactive: { bg: 'transparent', color: '#F8F9FA' },
}

function DropdownMenuItem({ link }) {
  return (
    <NavLink
      to={link.to}
      className={({ isActive }) => `flex flex-col px-4 py-3 rounded-lg ${navLinkClass} ${isActive ? navLinkActive : navLinkInactive}`}
    >
      <span className="flex items-center text-base font-semibold" style={{ fontFamily: f }}>
        {link.label}
        {link.badge && <span className={`${badgeClass} ml-1.5`}>{link.badge}</span>}
      </span>
      {link.desc && <span className="text-sm text-[#F8F9FA] mt-0.5" style={{ fontFamily: f }}>{link.desc}</span>}
    </NavLink>
  )
}

function DropdownMenu({ links, wide }) {
  const cols = links.length > 6
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.15 }}
      className={`absolute top-full left-0 mt-2 bg-[#1F1F1F] rounded-xl shadow-lg border border-white/10 overflow-hidden z-50 ${cols ? 'w-80' : wide ? 'w-72' : 'w-52'}`}
    >
      <div className={`p-2 ${cols ? 'grid grid-cols-2 gap-0.5' : ''}`}>
        {links.map((link) => <DropdownMenuItem key={link.to} link={link} />)}
      </div>
    </motion.div>
  )
}

function NavDropdown({ label, badge, links, wide }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        className="flex items-center gap-1 text-base font-semibold text-[#F8F9FA] hover:text-[#fbfcfd] transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded"
        style={{ fontFamily: f }}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="flex items-center gap-1.5">
          {label}
          {badge && <span className={badgeClass}>{badge}</span>}
        </span>
        <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>{open && <DropdownMenu links={links} wide={wide} />}</AnimatePresence>
    </div>
  )
}

function DesktopNavItem({ item }) {
  if (item.to && !item.dropdown) {
    return (
      <NavLink
        to={item.to}
        style={{ fontFamily: f }}
        className={({ isActive }) => `text-base font-semibold ${navLinkClass} ${isActive ? 'text-[#F8F9FA]' : 'text-[#F8F9FA] hover:text-[#F8F9FA]'}`}
      >
        {item.label}
      </NavLink>
    )
  }
  return <NavDropdown key={item.label} label={item.label} badge={item.badge} links={item.dropdown} wide={item.dropdown?.some((l) => l.desc)} />
}

function MobileNavItem({ item, expanded, onToggle }) {
  if (item.to && !item.dropdown) {
    return (
      <NavLink
        to={item.to}
        style={{ fontFamily: f }}
        className="py-3 px-4 text-base font-medium text-[#F8F9FA]/70 hover:text-[#F8F9FA] rounded-lg hover:bg-white/5 transition-colors flex items-center gap-1.5"
      >
        {item.label}
        {item.badge && <span className={badgeClass}>{item.badge}</span>}
      </NavLink>
    )
  }
  const key = item.label
  return (
    <div key={key}>
      <button
        style={{ fontFamily: f }}
        className="w-full flex items-center justify-between py-3 px-4 text-base font-medium text-[#F8F9FA]/70 hover:text-[#F8F9FA] rounded-lg hover:bg-white/5 transition-colors"
        onClick={() => onToggle(key)}
      >
        <span className="flex items-center gap-1.5">
          {item.label}
          {item.badge && <span className={badgeClass}>{item.badge}</span>}
        </span>
        <ChevronDown size={16} className={`transition-transform ${expanded[key] ? 'rotate-180' : ''}`} />
      </button>
      {expanded[key] && (
        <div className="pl-4 flex flex-col gap-1 mb-1">
          {item.dropdown.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              style={{ fontFamily: f }}
              className="py-2 px-4 text-base font-medium text-[#F8F9FA]/50 hover:text-[#F8F9FA] rounded-lg hover:bg-white/5 transition-colors flex items-center gap-1.5"
            >
              {link.label}
              {link.badge && <span className={badgeClass}>{link.badge}</span>}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  )
}

function RegionSwitcher({ isGlobal, isAustralia, mobile }) {
  const style = mobile ? 'rgba(255,255,255,0.05)' : '#101010'
  return (
    <div
      className={`flex items-center gap-0.5 rounded-full px-1 py-1 border border-white/10 ${mobile ? 'self-start' : ''}`}
      style={{ backgroundColor: style }}
    >
      <Link
        to="/"
        style={{
          fontFamily: f,
          backgroundColor: isGlobal ? regionStyles.global.bg : regionStyles.inactive.bg,
          color: isGlobal ? regionStyles.global.color : regionStyles.inactive.color,
        }}
        className="text-xs font-semibold px-3 py-1 rounded-full transition-colors"
      >
        Global
      </Link>
      <Link
        to="/australia"
        style={{
          fontFamily: f,
          backgroundColor: isAustralia ? regionStyles.global.bg : regionStyles.inactive.bg,
          color: isAustralia ? regionStyles.global.color : regionStyles.inactive.color,
        }}
        className="text-xs font-semibold px-3 py-1 rounded-full transition-colors"
      >
        Australia
      </Link>
    </div>
  )
}

export default function Navbar() {
  useScrollPosition()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState({})
  const location = useLocation()

  useEffect(() => { setMobileOpen(false); setMobileExpanded({}) }, [location.pathname])
  const toggleMobile = (key) => setMobileExpanded((prev) => ({ ...prev, [key]: !prev[key] }))

  const isGlobal = !location.pathname.startsWith('/australia')
  const isAustralia = location.pathname.startsWith('/australia')

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40"
        style={{ backgroundColor: '#1F1F1F', fontFamily: f }}
      >
        {/* 
          Padding scale:
          mobile  (default) : px-4  (16px) — logo gets comfortable left breathing room
          tablet  (sm)      : px-6  (24px)
          desktop (lg)      : px-8  (32px) — matches original design intent
        */}
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo — explicit left margin on mobile/tablet for extra breathing room */}
             <Link
               to="/"
               className="flex items-center flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded"
             >
              <img
                src="/nav-logo.svg"
                alt="Inteliment"
                className="h-8 sm:h-9 lg:h-10 w-auto"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
              {mainNav.map((item) => <DesktopNavItem key={item.label || item.to} item={item} />)}
            </nav>

            {/* Right side: region switcher + CTA + hamburger */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Hide region switcher on very small screens to avoid overflow */}
              <div className="hidden sm:block">
                <RegionSwitcher isGlobal={isGlobal} isAustralia={isAustralia} />
              </div>
              <Button
                to={navCTA.to}
                size="sm"
                className="hidden lg:inline-flex"
                icon={ArrowRight}
              >
                {navCTA.label}
              </Button>
              <button
                className="lg:hidden p-2 text-[#F8F9FA]/70 hover:text-[#F8F9FA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.25 }}
            className="fixed inset-0 z-30 pt-16 overflow-y-auto"
            style={{ backgroundColor: '#1F1F1F', fontFamily: f }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <nav className="px-8 sm:px-14 py-6 flex flex-col gap-1">
              <NavLink
                to="/"
                style={{ fontFamily: f }}
                className="py-3 px-4 text-base font-medium text-[#F8F9FA]/70 hover:text-[#F8F9FA] rounded-lg hover:bg-white/5 transition-colors"
              >
                Home
              </NavLink>
              {mainNav.map((item) => (
                <MobileNavItem
                  key={item.label || item.to}
                  item={item}
                  expanded={mobileExpanded}
                  onToggle={toggleMobile}
                />
              ))}
              <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
                {/* Show region switcher inside drawer on xs screens */}
                <RegionSwitcher isGlobal={isGlobal} isAustralia={isAustralia} mobile />
                <Button to={navCTA.to} className="w-full justify-center" icon={ArrowRight}>
                  {navCTA.label}
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}