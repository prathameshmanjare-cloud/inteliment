import { Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import PageLayout from '@/components/layout/PageLayout'
import {
  HomePage, DecisionIntelligence, Solutions, SolutionDetail,
  Industries, IndustryDetail, Services, ACE, GlobalDelivery,
  Impact, ImpactStory, Insights, InsightArticle, Assessment, ROICalculatorPage,
  About, Careers, InteliME, InteliHub, News, CSR,
  Contact, Privacy, Terms, CookiePolicy,
  Australia, InteliLabs, Leadership, InteliAI, NotFound, ImpactStoryAll
} from '@/routes'
import Blogs from '@/pages/Blogs'
import BlogStory from '@/pages/BlogStory'

function PageSkeleton() {
  return (
    <div className="min-h-screen bg-navy flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-teal border-t-transparent rounded-full animate-spin" />
        <span className="text-white/50 text-sm font-body">Loading...</span>
      </div>
    </div>
  )
}

const pageVariants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.25, ease: 'easeInOut' }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/decision-intelligence" element={<DecisionIntelligence />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/:slug" element={<SolutionDetail />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:slug" element={<IndustryDetail />} />

          {/* Services, replaces /ace, /global-delivery redirects here */}
          <Route path="/services" element={<Services />} />
          <Route path="/ace" element={<Navigate to="/services" replace />} />
          <Route path="/global-delivery" element={<Navigate to="/services" replace />} />

          <Route path="/impact" element={<Impact />} />
          <Route path="/impact/:slug" element={<ImpactStory />} />
          <Route path="/impact/all" element={<ImpactStoryAll />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogStory />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<InsightArticle />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/roi-calculator" element={<ROICalculatorPage />} />

          <Route path="/about" element={<About />} />
          <Route path="/about/leadership" element={<Leadership />} />

          {/* Careers → Inteli-Me redirect */}
          <Route path="/careers" element={<Navigate to="/inteli-me" replace />} />
          <Route path="/inteli-me" element={<InteliME />} />

          <Route path="/hub" element={<InteliHub />} />
          <Route path="/news" element={<News />} />
          <Route path="/csr" element={<CSR />} />

          <Route path="/australia" element={<Australia />} />
          <Route path="/regions/australia" element={<Navigate to="/australia" replace />} />
          <Route path="/inteli-labs" element={<InteliLabs />} />
          <Route path="/inteli-ai" element={<InteliAI />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<CookiePolicy />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  // TODO: Replace with actual Zoho SalesIQ widget code
  // useEffect(() => {
  //   var $zoho = $zoho || {}
  //   $zoho.salesiq = $zoho.salesiq || { widgetcode: 'YOUR_WIDGET_CODE', values: {}, ready: function() {} }
  //   var d = document; var s = d.createElement('script')
  //   s.type = 'text/javascript'; s.id = 'zsiqscript'; s.defer = true
  //   s.src = 'https://salesiq.zoho.com/widget'
  //   var t = d.getElementsByTagName('script')[0]
  //   t.parentNode.insertBefore(s, t)
  // }, [])

  return (
    <BrowserRouter>
      <PageLayout>
        <Suspense fallback={<PageSkeleton />}>
          <AnimatedRoutes />
        </Suspense>
      </PageLayout>
    </BrowserRouter>
  )
}
