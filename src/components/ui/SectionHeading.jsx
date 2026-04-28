import { motion } from 'framer-motion'

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}) {
  const alignClass = align === 'center' ? 'text-center items-center' : align === 'right' ? 'text-right items-end' : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-3 ${alignClass} ${className}`}>
      {eyebrow && (
        <span className={`inline-block px-4 py-1.5 my-1.5 rounded-full text-sm font-display font-semibold  border ${
          light
            ? 'bg-[#EEF6FB] border-[#5BA3D1] text-[#5BA3D1]'
            : 'glass border-teal/20 text-teal'
        }`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`font-display font-bold text-display-md md:text-display-lg leading-tight ${light ? 'text-navy' : 'text-white'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl max-w-3xl leading-relaxed ${light ? 'text-grey-700' : 'text-white/70'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
