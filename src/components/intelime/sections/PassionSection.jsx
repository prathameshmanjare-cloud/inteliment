import { ArrowUpRight, Globe, Users } from 'lucide-react'
import Container from '@/components/ui/Container'
import GradientDivider from '@/components/ui/GradientDivider'
import ScrollReveal from '@/components/ui/ScrollReveal'
import passionBackground from '@/assets/intelime/passionBackground.svg'

function PassionCard({ icon: Icon, title, children, className = '' }) {
  return (
    <article
      className={`flex h-full flex-col rounded-2xl border-[0.5px] border-blue-300 bg-white p-5 shadow-[0_0_0_0.5px_rgba(147,197,253,0.85),0_0_16px_rgba(147,197,253,0.35),0_0_30px_rgba(147,197,253,0.2)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_0_0_0.5px_rgba(147,197,253,0.9),0_14px_26px_rgba(147,197,253,0.34),0_0_36px_rgba(147,197,253,0.24)] ${className}`}
    >
      {Icon && (
        <div className="mb-4 inline-flex h-7 w-7 items-center justify-center text-[#4AA3DF]">
          <Icon size={20} strokeWidth={2.2} />
        </div>
      )}
      <h3 className="font-display text-[1.05rem] font-bold leading-tight text-[#353535] sm:text-[1.1rem]">
        {title}
      </h3>
      <div className="mt-3 flex flex-1 flex-col gap-3 font-body text-[0.96rem] leading-relaxed text-[#5C5C5C]">
        {children}
      </div>
    </article>
  )
}

export default function PassionSection() {
  return (
    <>
      <section id="culture" className="relative overflow-hidden bg-white pt-16 pb-8 lg:pt-22 lg:pb-12">
        <div className="absolute inset-0">
          <img
            src={passionBackground}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center"
          />
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.28fr)] lg:gap-8 lg:items-start">
            <ScrollReveal direction="left">
              <div className="max-w-xl pb-1 lg:pt-80 lg:pb-2">
                <span className="inline-flex items-center rounded-full border border-[#63B0E5] bg-white/75 px-4 py-1.5 text-sm font-display font-medium text-[#3692CF] backdrop-blur-sm">
                  Why Inteliment
                </span>
                <h2 className="mt-4 max-w-[38rem] font-display text-[1.95rem] font-bold leading-[1.08] tracking-[-0.03em] text-[#2C2C2C] sm:text-[2.45rem]">
                  Where passion for data
                  <br />
                  meets real-world impact
                </h2>
                <p className="mt-3 max-w-md font-body text-[1.02rem] leading-relaxed text-[#474747]">
                  We believe great careers are built at the intersection of learning, ownership, and purpose.
                </p>
              </div>
            </ScrollReveal>

            <div className="rounded-[2rem] border border-transparent bg-transparent p-3 shadow-none">
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[minmax(8.75rem,auto)]">
                <ScrollReveal delay={0.04} direction="up" className="lg:col-span-7 lg:row-span-1">
                  <PassionCard title="Niche Focus. Real Depth." className="min-h-[11.5rem]">
                    <p>Work on cutting edge technologies</p>
                    <p className="font-semibold text-[#3D97D4]">
                      Snowflake, Azure, Databricks, Kafka, Airflow, PyTorch, and modern AI frameworks
                    </p>
                    <p>applied to real enterprise challenges.</p>
                  </PassionCard>
                </ScrollReveal>

                <ScrollReveal delay={0.1} direction="left" className="lg:col-span-5 lg:row-span-1">
                  <PassionCard
                    icon={Users}
                    title="A Culture of Ownership."
                    className="min-h-[11.5rem]"
                  >
                    <p>Ideas are valued. Initiative is encouraged. Impact is recognized.</p>
                  </PassionCard>
                </ScrollReveal>

                <ScrollReveal delay={0.16} direction="up" className="md:row-span-2 lg:col-span-5 lg:row-span-2">
                  <PassionCard
                    icon={Globe}
                    title="Impact that Matters."
                    className="min-h-[15rem] md:min-h-[20rem] lg:min-h-[23.5rem]"
                  >
                    <p>
                      Your work directly influences decisions across global enterprises in banking, insurance,
                      manufacturing, and telecom.
                    </p>
                    <p className="mt-auto font-medium text-[#3D97D4]">
                      Every model, pipeline, and dashboard contributes to measurable business outcomes.
                    </p>
                  </PassionCard>
                </ScrollReveal>

                <ScrollReveal delay={0.22} direction="left" className="lg:col-span-7 lg:row-span-1">
                  <PassionCard
                    icon={ArrowUpRight}
                    title="Growth that is Structured."
                    className="min-h-[13rem]"
                  >
                    <p>Clear career pathways from</p>
                    <p className="font-semibold text-[#3D97D4]">
                      Engineer → Architect → Practice Leader
                    </p>
                    <p>
                      Mentorship, certifications, and continuous feedback designed to accelerate your journey.
                    </p>
                  </PassionCard>
                </ScrollReveal>

                <ScrollReveal delay={0.28} direction="left" className="lg:col-span-7 lg:row-span-1">
                  <PassionCard title="Global Exposure." className="min-h-[8.75rem]">
                    <p>
                      Collaborate across India, Australia, Singapore, and Europe. Solve diverse, complex problems
                      across industries and geographies.
                    </p>
                  </PassionCard>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <GradientDivider />
    </>
  )
}
