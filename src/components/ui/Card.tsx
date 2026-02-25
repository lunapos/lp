import { useTheme } from '../../hooks/useTheme.ts'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  const theme = useTheme()

  const hoverStyle: React.CSSProperties = hover
    ? { ['--hover-border' as string]: theme.accent }
    : {}

  return (
    <div
      className={`bg-[var(--mode-surface)] border border-[var(--mode-border)] rounded-xl p-6 transition-all duration-300 ${
        hover
          ? 'hover:border-[var(--hover-border)] hover:shadow-lg hover:-translate-y-1'
          : ''
      } ${className}`}
      style={{
        ...hoverStyle,
        ...(hover ? { boxShadow: undefined } : {}),
      }}
      onMouseEnter={(e) => {
        if (hover) {
          e.currentTarget.style.boxShadow = `0 0 30px rgba(${theme.accentRGB}, 0.15)`
          e.currentTarget.style.borderColor = theme.accent
        }
      }}
      onMouseLeave={(e) => {
        if (hover) {
          e.currentTarget.style.boxShadow = ''
          e.currentTarget.style.borderColor = 'var(--mode-border)'
        }
      }}
    >
      {children}
    </div>
  )
}
