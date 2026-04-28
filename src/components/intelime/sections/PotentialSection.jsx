import { Mail } from 'lucide-react'
import Container from '@/components/ui/Container'
import ScrollReveal from '@/components/ui/ScrollReveal'
import potentialBackground from '@/assets/intelime/PotentialBackground.svg'
import explorePlatformIco from '@/assets/decision-intelligence/ExplorethePlatformIco.svg'

function ActionButton({ href, children, icon: Icon, iconImage, external = false }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="inline-flex items-center justify-center gap-3 rounded-md bg-[#3FA1DD] px-5 py-2.5 font-display text-[0.98rem] font-semibold text-white shadow-[0_8px_18px_rgba(63,161,221,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#57AFE3]"
    >
      {children}
      {iconImage ? (
        <img src={iconImage} alt="" aria-hidden="true" className="h-6 w-6" />
      ) : (
        Icon && <Icon size={19} strokeWidth={2.05} />
      )}
    </a>
  )
}

export default function PotentialSection() {
  return (
    <section id="open-roles" className="relative overflow-hidden bg-[#EEF6FB] py-20 lg:py-24">
      <div className="absolute inset-0">
        <img
          src={potentialBackground}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <Container className="relative z-10">
        <ScrollReveal>
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="font-display text-[2.2rem] font-bold leading-[1.1] tracking-[-0.03em] text-[#2F2F2F] sm:text-[3rem]">
              Turn your potential into impact.
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-4 xl:grid-cols-2">
          <ScrollReveal direction="left">
            <article className="h-full min-h-[19rem] rounded-2xl border border-[#7CC3EF] bg-[#5BA3D1]/10 p-7 shadow-[0_12px_28px_rgba(83,168,223,0.2)] backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_18px_36px_rgba(83,168,223,0.28)] sm:p-8">
              <div className="flex h-full flex-col">
                <div>
                  <h3 className="max-w-[30rem] font-display text-[2.2rem] font-bold leading-tight text-[#2E2E2E] sm:text-[2.35rem]">
                    22+ years of Data Mastery.
                  </h3>
                  <p className="mt-4 max-w-[24rem] font-body text-[1rem] leading-relaxed text-[#2F2F2F] sm:text-[1.04rem]">
                    Now building the next generation of Decision Intelligence leaders.
                  </p>
                </div>

                <div className="mt-auto pt-12">
                  <p className="mb-3.5 font-body text-[1.02rem] leading-relaxed text-[#2F2F2F]">Your journey starts here.</p>
                  <ActionButton
                    href="https://inteliment.zohorecruit.in/jobs/Careers"
                    iconImage={explorePlatformIco}
                    external
                  >
                    Explore Open Positions
                  </ActionButton>
                </div>
              </div>
            </article>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.08}>
            <article className="h-full min-h-[19rem] rounded-2xl border border-[#7CC3EF] bg-white/97 p-7 shadow-[0_10px_24px_rgba(83,168,223,0.14)] backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_16px_32px_rgba(83,168,223,0.24)] sm:p-8">
              <div className="flex h-full flex-col">
                <div>
                  <span className="inline-flex items-center rounded-full border border-[#5BA3D1] bg-[#EFF8FF] px-3.5 py-1 text-[0.9rem] font-display font-medium text-[#5BA3D1]">
                    Don't see a role that fits?
                  </span>
                  <h3 className="mt-4 max-w-[33rem] font-display text-[2.1rem] font-bold leading-[1.08] tracking-[-0.03em] text-[#2E2E2E] sm:text-[2.3rem]">
                    We're always looking for curious minds and passionate builders
                  </h3>
                  <p className="mt-4 max-w-[24rem] font-body text-[1rem] leading-relaxed text-[#2F2F2F] sm:text-[1.04rem]">
                    If you're driven by data and excited to create impact we would love to hear from you
                  </p>
                </div>

                <div className="mt-auto pt-9">
                  <ActionButton href="mailto:careers@inteliment.com" icon={Mail}>
                    careers@inteliment.com
                  </ActionButton>
                </div>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  )
}
