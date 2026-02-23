import { useTheme } from '../../hooks/useTheme.ts'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  onClick?: () => void
  href?: string
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
} as const

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  onClick,
  href,
}: ButtonProps) {
  const theme = useTheme()

  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 cursor-pointer'

  const variantStyles: React.CSSProperties = (() => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: theme.accent,
          color: '#ffffff',
          boxShadow: `0 0 20px rgba(${theme.accentRGB}, 0.3)`,
        }
      case 'secondary':
        return {
          backgroundColor: 'transparent',
          color: theme.accentLight,
          border: `1px solid ${theme.accent}`,
        }
      case 'ghost':
        return {
          backgroundColor: 'transparent',
          color: theme.accentLight,
        }
    }
  })()

  const variantClasses = (() => {
    switch (variant) {
      case 'primary':
        return 'hover:brightness-110 hover:scale-105 active:scale-95'
      case 'secondary':
        return 'hover:bg-white/5 active:scale-95'
      case 'ghost':
        return 'hover:bg-white/5 active:scale-95'
    }
  })()

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} style={variantStyles} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} style={variantStyles} onClick={onClick}>
      {children}
    </button>
  )
}
