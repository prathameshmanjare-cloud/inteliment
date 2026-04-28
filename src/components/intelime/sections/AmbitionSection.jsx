import Container from '@/components/ui/Container'
import ScrollReveal from '@/components/ui/ScrollReveal'
import internshipImage from '@/assets/intelime/img-DiInternshipProgram.png'
import graduateImage from '@/assets/intelime/img-GraduateAceleratorProgram.png'
import universityImage from '@/assets/intelime/img-universityCollaboration.png'

const ambitionPrograms = [
  {
    title: 'DI Internship Program',
    description: 'A 6-month immersive experience working on real-world datasets, guided by experienced mentors.',
    image: internshipImage,
    alt: 'Internship program at Inteliment office',
  },
  {
    title: 'Graduate Accelerator Program',
    description: 'A structured onboarding journey to build strong foundations in data engineering, analytics, and AI.',
    image: graduateImage,
    alt: 'Graduates celebrating at a ceremony',
  },
  {
    title: 'University Collaborations',
    description: 'Workshops, hackathons, guest lectures, and industry exposure designed to bridge the gap between academia and enterprise.',
    image: universityImage,
    alt: 'University speaker presenting to an audience',
  },
]

function AmbitionCard({ title, description, image, alt }) {
  return (
    <article className="group relative min-h-[21.5rem] overflow-hidden rounded-xl border border-[#74BEEB] bg-[#262626] shadow-[0_0_18px_rgba(96,176,230,0.15)]">
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(19,19,19,0.55)] via-[rgba(19,19,19,0.14)] to-[rgba(19,19,19,0.02)]" />
      <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-5 sm:px-6 sm:pb-6">
        <h3 className="max-w-[18rem] font-display text-[1.15rem] font-medium leading-tight text-white sm:text-[1.25rem]">
          {title}
        </h3>
        <p className="mt-3 max-w-[21rem] font-body text-[0.98rem] leading-relaxed text-white/85">
          {description}
        </p>
      </div>
    </article>
  )
}

export default function AmbitionSection() {
  return (
    <section id="campus" className="bg-[#252525] py-20 lg:py-24">
      <Container>
        <ScrollReveal>
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/5 px-4 py-1.5 text-sm font-display font-medium text-white/90 backdrop-blur-sm">
              Campus to Corporate
            </span>
            <h2 className="mt-8 font-display text-[2.4rem] font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-[3rem]">
              Where Ambition meets Opportunity !
            </h2>
            <p className="mx-auto mt-5 max-w-4xl font-body text-[1.02rem] leading-relaxed text-white/78">
              Inteliment partner with students and universities to shape the next generation of Decision Intelligence professionals.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {ambitionPrograms.map((program, index) => (
            <ScrollReveal key={program.title} delay={index * 0.08} direction={index === 1 ? 'up' : 'left'}>
              <AmbitionCard {...program} />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
