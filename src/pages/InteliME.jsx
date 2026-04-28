import SEOHead from '@/components/ui/SEOHead'
import HeroSection from '@/components/intelime/sections/HeroSection'
import PassionSection from '@/components/intelime/sections/PassionSection'
import AmbitionSection from '@/components/intelime/sections/AmbitionSection'
import WorkplaceSection from '@/components/intelime/sections/WorkplaceSection'
import ProfessionalGrowthSection from '@/components/intelime/sections/ProfessionalGrowthSection'
import PotentialSection from '@/components/intelime/sections/PotentialSection'
import { buildPageMeta } from '@/utils/seo'

export default function InteliME() {
  const meta = buildPageMeta(
    'Inteli-Me, Careers at Inteliment',
    'Join 150+ Decision Intelligence specialists at Inteliment. Work on production AI, data engineering, and ML systems for 100+ global enterprises. Open roles in Pune, Sydney, Singapore, and Europe.',
    '/inteli-me'
  )

  return (
    <>
      <SEOHead meta={meta} />

      <main className="relative">
        <HeroSection />
        <PassionSection />
        <AmbitionSection />
        <WorkplaceSection />
        <ProfessionalGrowthSection />
        <PotentialSection />
      </main>
    </>
  )
}
