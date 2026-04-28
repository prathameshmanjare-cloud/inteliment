import { motion } from 'framer-motion'

export default function GlassCard({
  children,
  className = '',
  hover = true,
  glow = false,
  dark = false,
  onClick,
  as: Tag = 'div',
  ...props
}) {
  const baseClass = `rounded-xl ${dark ? 'glass-dark' : 'glass'} ${glow ? 'shadow-glow-teal' : ''} ${className}`

  if (hover) {
    return (
      <motion.div
        whileHover={{ y: -4, boxShadow: '0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(0,180,216,0.15)' }}
        transition={{ duration: 0.25 }}
        className={baseClass}
        onClick={onClick}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
        onKeyDown={onClick ? (e) => (e.key === 'Enter' || e.key === ' ') && onClick(e) : undefined}
        {...props}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div className={baseClass} onClick={onClick} {...props}>
      {children}
    </div>
  )
}
