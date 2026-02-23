import type { ReactNode } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation.ts'

interface SectionProps {
  id: string
  children: ReactNode
  className?: string
}

function Section({ id, children, className = '' }: SectionProps) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id={id} ref={ref}>
      <div
        className={`max-w-6xl mx-auto px-4 py-20 transition-all duration-700 ease-out ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        } ${className}`}
      >
        {children}
      </div>
    </section>
  )
}

export default Section
