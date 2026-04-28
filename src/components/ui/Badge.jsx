const colorMap = {
  teal: 'bg-teal/10 text-teal border-teal/20',
  mint: 'bg-mint/10 text-mint border-mint/20',
  navy: 'bg-navy/10 text-navy border-navy/20',
  white: 'bg-white/10 text-white border-white/20',
  success: 'bg-green-500/10 text-green-400 border-green-500/20',
  warning: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  error: 'bg-red-500/10 text-red-400 border-red-500/20',
}

export default function Badge({ children, color = 'teal', className = '' }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-display font-semibold border ${colorMap[color]} ${className}`}>
      {children}
    </span>
  )
}
