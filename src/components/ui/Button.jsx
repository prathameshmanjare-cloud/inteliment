import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const variantStyles = {
  primary: 'text-navy font-semibold hover:opacity-90 hover:shadow-glow-teal',
  secondary: 'glass border border-white/20 text-white hover:border-teal hover:shadow-glow-teal',
  ghost: 'text-teal hover:text-mint hover:bg-white/5',
  outline: 'border border-teal text-teal hover:bg-teal hover:text-navy',
  'outline-dark': 'border border-navy-300 text-navy hover:bg-navy hover:text-white',
}

const sizeStyles = {
  sm: 'px-4 py-2 text-sm rounded-md gap-1.5',
  md: 'px-6 py-3 text-base rounded-lg gap-2',
  lg: 'px-8 py-4 text-lg rounded-lg gap-2',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  disabled,
  className = '',
  icon: Icon,
  iconPosition = 'right',
  type = 'button',
  ...props
}) {
  const baseStyles = `inline-flex items-center justify-center font-display transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-navy disabled:opacity-50 disabled:cursor-not-allowed ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  const gradientStyle =
    variant === 'primary'
      ? {
          background: '#5BA3D1',
        }
      : {}

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />}
    </>
  )

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.02 },
    whileTap: disabled ? {} : { scale: 0.98 },
    transition: { duration: 0.15 },
  }

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-flex">
        <Link to={to} className={baseStyles} style={gradientStyle} {...props}>
          {content}
        </Link>
      </motion.div>
    )
  }

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-flex">
        <a href={href} className={baseStyles} style={gradientStyle} {...props}>
          {content}
        </a>
      </motion.div>
    )
  }

  return (
    <motion.button
      {...motionProps}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseStyles}
      style={gradientStyle}
      {...props}
    >
      {content}
    </motion.button>
  )
}
