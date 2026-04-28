import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import CookieConsent from './CookieConsent'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export default function PageLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-navy">
      <Navbar />
      <ScrollToTop />
      <main className="flex-1">{children}</main>
      <Footer />
      <CookieConsent />
    </div>
  )
}
