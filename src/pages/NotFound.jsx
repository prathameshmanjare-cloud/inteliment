import { Link } from 'react-router-dom'
import { Home, ArrowRight } from 'lucide-react'
import SEOHead from '@/components/ui/SEOHead'
import Button from '@/components/ui/Button'
import { buildPageMeta } from '@/utils/seo'

export default function NotFound() {
  const meta = buildPageMeta('Page Not Found', 'The page you are looking for does not exist.', '/404')
  return (
    <>
      <SEOHead meta={meta} />
      <section className="min-h-screen flex items-center justify-center mesh-bg px-4">
        <div className="text-center max-w-lg">
          <div className="font-display font-bold text-[8rem] leading-none text-gradient-teal opacity-30 mb-4">404</div>
          <h1 className="font-display font-bold text-display-lg text-white mb-4">Page Not Found</h1>
          <p className="text-white/60 font-body mb-8 text-lg">The page you're looking for doesn't exist or has been moved.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/" icon={Home} iconPosition="left">Go Home</Button>
            <Button to="/assessment" variant="secondary" icon={ArrowRight}>Take the DI Assessment</Button>
          </div>
        </div>
      </section>
    </>
  )
}
