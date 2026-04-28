export default function Container({ children, narrow = false, className = '' }) {
  return (
    <div className={`mx-auto px-6 sm:px-6 lg:px-8 ${narrow ? 'max-w-3xl' : 'max-w-7xl'} ${className}`}>
      {children}
    </div>
  )
}
