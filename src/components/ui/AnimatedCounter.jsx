import { useEffect } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter'

export default function AnimatedCounter({ end, prefix = '', suffix = '', duration = 2000, className = '' }) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.5 })
  const [count, start] = useAnimatedCounter(end, duration)

  useEffect(() => {
    if (isVisible) start()
  }, [isVisible]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  )
}
