import { Award, BookOpen, TrendingUp } from 'lucide-react'
import Container from '@/components/ui/Container'
import ScrollReveal from '@/components/ui/ScrollReveal'
import professionalGrowthBackground from '@/assets/intelime/ProfessionalGrowthBackground.svg'

const growthPillars = [
  {
    icon: Award,
    title: 'Continuous Upskilling',
    description: 'Access to certifications across Azure, AWS, Snowflake, Databricks, and emerging AI ecosystems.',
  },
  {
    icon: TrendingUp,
    title: 'Defined Career Pathways',
    description: 'Transparent progression frameworks with clear milestones and meaningful feedback.',
  },
  {
    icon: BookOpen,
    title: 'Knowledge-Driven Culture',
    description: 'Internal research sessions, tech talks, hackathons, and collaborative learning forums.',
  },
]

function GrowthCard({ icon: Icon, title, description }) {
  return (
    <article className="group relative transform-gpu overflow-hidden rounded-2xl border border-[#4D6472] bg-[linear-gradient(165deg,rgba(63,63,63,0.82)_0%,rgba(37,37,37,0.84)_100%)] p-6 shadow-[0_10px_22px_rgba(0,0,0,0.32),0_0_22px_rgba(66,130,176,0.16)] backdrop-blur-[1.5px] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_18px_34px_rgba(0,0,0,0.42),0_0_30px_rgba(66,130,176,0.28)] sm:p-7">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(115,186,238,0.14),transparent_42%)] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#9BD6FF]/55 to-transparent" />
      <div className="flex items-start justify-between gap-4">
        <div className="max-w-2xl">
          <h3 className="font-display text-[1.32rem] font-bold leading-tight text-white sm:text-[1.45rem]">
            {title}
          </h3>
          <p className="mt-4 max-w-xl font-body text-[0.93rem] leading-relaxed text-white/48 sm:text-[0.97rem]">
            {description}
          </p>
        </div>
        <div className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#274E68] text-[#3FA1E0] transition-transform duration-300 group-hover:scale-105">
          <Icon size={18} strokeWidth={2.15} />
        </div>
      </div>
    </article>
  )
}

export default function ProfessionalGrowthSection() {
  return (
    <section className="relative overflow-hidden bg-[#252525] py-20 lg:py-24">
      <div className="absolute inset-0">
        <img
          src={professionalGrowthBackground}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.98fr)_minmax(0,0.9fr)] lg:items-start lg:gap-12">
          <ScrollReveal direction="left">
            <div className="max-w-2xl pt-1 lg:pt-10">
              <span className="inline-flex items-center rounded-full border border-[#3A7394] bg-[rgba(17,40,53,0.4)] px-4 py-1.5 text-sm font-display font-medium text-[#3A7394]">
                Growth and Learning
              </span>
              <h2 className="mt-8 max-w-[40rem] font-display text-[1.95rem] font-bold leading-[1.12] tracking-[-0.03em] text-white sm:text-[2.4rem]">
                Your professional growth is our
                <br />
                competitive edge, not just a perk.
              </h2>
              <p className="mt-8 max-w-lg font-body text-[1.05rem] leading-relaxed text-white/82">
                At Inteliment, learning is not an event. It's a way of working.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {growthPillars.map((pillar, index) => (
              <ScrollReveal key={pillar.title} delay={index * 0.08} direction="left">
                <GrowthCard {...pillar} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
