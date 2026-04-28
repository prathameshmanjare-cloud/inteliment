import { Image } from 'lucide-react'
import Container from '@/components/ui/Container'
import GradientDivider from '@/components/ui/GradientDivider'
import ScrollReveal from '@/components/ui/ScrollReveal'
import workplaceBackground from '@/assets/intelime/workplaceBackground.svg'

const workplaceMoments = [
  'Delivery Centre, Pune',
  'Team Offsite 2024',
  'Inteli-Labs Research Session',
  'Sydney Office',
  'Hackathon Winners',
  'All Hands 2025',
]

function WorkplaceCard({ label }) {
  return (
    <article className="relative min-h-[8.75rem] overflow-hidden rounded-[10px] border border-[#D8E4EF]/85 bg-[#C3CFDD]/90 shadow-[0_1px_0_rgba(255,255,255,0.2)] sm:min-h-[9.75rem] lg:min-h-[10.6rem]">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image size={22} className="text-[#9AA8B8]" strokeWidth={1.8} />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[rgba(157,176,198,0.2)] to-transparent" />
      <div className="absolute bottom-3 left-3">
        <span className="inline-flex items-center rounded-md bg-white/76 px-3 py-1 text-[0.62rem] font-display font-medium text-[#DDE5ED] shadow-[0_1px_2px_rgba(95,121,149,0.12)] sm:text-[0.68rem]">
          {label}
        </span>
      </div>
    </article>
  )
}

export default function WorkplaceSection() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#EEF6FB] py-20 lg:py-24">
        <div className="absolute inset-0">
          <img
            src={workplaceBackground}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center"
          />
        </div>

        <Container className="relative z-10">
          <ScrollReveal>
            <div className="mx-auto max-w-5xl text-center">
              <span className="inline-flex items-center rounded-full border border-[#3A7394] bg-[#DDF0FF]/85 px-4 py-1.5 text-sm font-display font-medium text-[#3A7394]">
                Life at Inteliment
              </span>
              <h2 className="mx-auto mt-8 max-w-5xl font-display text-[2.1rem] font-bold leading-[1.1] tracking-[-0.03em] text-[#303030] sm:text-[2.6rem] lg:whitespace-nowrap">
                A workplace that blends energy, learning, and collaboration.
              </h2>
              <p className="mx-auto mt-5 max-w-4xl font-body text-[1rem] leading-relaxed text-[#444444]">
                Hybrid-first environment with flexibility and trust. A culture that encourages curiosity,
                experimentation, and continuous improvement. Teams that celebrate wins, support each other, and
                grow together.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
            {workplaceMoments.map((label, index) => (
              <ScrollReveal key={label} delay={index * 0.05} direction={index % 3 === 1 ? 'up' : 'left'}>
                <WorkplaceCard label={label} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.28}>
            <p className="mx-auto mt-10 max-w-3xl text-center font-body text-[1.05rem] font-medium leading-relaxed text-[#3D97D4] sm:text-[1.12rem]">
              You'll work alongside people who are passionate about solving problems,
              <br className="hidden sm:block" />
              building solutions, and pushing boundaries.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <GradientDivider />
    </>
  )
}
