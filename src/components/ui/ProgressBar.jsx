import { motion } from 'framer-motion'

export default function ProgressBar({ current, total, className = '' }) {
  const percentage = Math.round((current / total) * 100)

  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-white/60 font-body">Step {current} of {total}</span>
        <span className="text-sm text-teal font-display font-semibold">{percentage}%</span>
      </div>
      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, #00B4D8, #00D4AA)' }}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}
