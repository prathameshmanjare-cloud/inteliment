export default function GradientDivider({ className = '' }) {
  return (
    <div
      className={`h-px w-full ${className}`}
      style={{ background: 'linear-gradient(90deg, transparent, #00B4D8, #00D4AA, transparent)' }}
    />
  )
}
