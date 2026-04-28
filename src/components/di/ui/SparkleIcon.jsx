/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

const SparkleIcon = ({
  className = '',
  size = 16,
  color = '#3b82f6',
  delay = 0,
  orbitRadius = 0,
  orbitDuration = 4,
}) => {
  const orbitAnimation = orbitRadius
    ? {
        x: [0, orbitRadius, 0, -orbitRadius, 0],
        y: [-orbitRadius, 0, orbitRadius, 0, -orbitRadius],
      }
    : {};

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      initial={{ opacity: 0, scale: 0, rotate: 0 }}
      animate={{ 
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        rotate: [0, 180, 360],
        ...orbitAnimation,
      }}
      transition={{
        opacity: {
          duration: 2.5,
          repeat: Infinity,
          delay,
          ease: 'easeInOut',
        },
        scale: {
          duration: 2.5,
          repeat: Infinity,
          delay,
          ease: 'easeInOut',
        },
        rotate: {
          duration: 2.5,
          repeat: Infinity,
          delay,
          ease: 'easeInOut',
        },
        x: {
          duration: orbitDuration,
          repeat: Infinity,
          delay,
          ease: 'linear',
        },
        y: {
          duration: orbitDuration,
          repeat: Infinity,
          delay,
          ease: 'linear',
        },
      }}
    >
      <path
        d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
        fill={color}
      />
      <path
        d="M19 15L19.75 17.25L22 18L19.75 18.75L19 21L18.25 18.75L16 18L18.25 17.25L19 15Z"
        fill={color}
        opacity="0.7"
      />
    </motion.svg>
  );
};

export default SparkleIcon;
