import { motion } from 'framer-motion';

const variants = {
  outlined: 'border border-accent-400/40 text-accent-400 bg-accent-500/[0.08]',
  'outlined-dark': 'border border-white/20 text-white/70 bg-white/5',
  filled: 'bg-accent-500/15 text-accent-400',
  'filled-light': 'bg-accent-100 text-accent-600',
  light: 'bg-gray-100 text-gray-500 border border-gray-200',
};

const PillBadge = ({ children, variant = 'outlined', className = '', animate = true }) => {
  const Component = animate ? motion.span : 'span';
  const animationProps = animate
    ? {
        initial: { opacity: 0, y: 10 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
      }
    : {};

  return (
    <Component
      className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium tracking-wide ${variants[variant]} ${className}`}
      {...animationProps}
    >
      {children}
    </Component>
  );
};

export default PillBadge;
