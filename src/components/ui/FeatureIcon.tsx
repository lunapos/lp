import { useTheme } from '../../hooks/useTheme.ts'
import type { LucideIcon } from 'lucide-react'

interface FeatureIconProps {
  icon: LucideIcon
  size?: number
}

export default function FeatureIcon({ icon: Icon, size = 24 }: FeatureIconProps) {
  const theme = useTheme()

  return (
    <div
      className="inline-flex items-center justify-center rounded-full"
      style={{
        width: size * 2.5,
        height: size * 2.5,
        backgroundColor: `rgba(${theme.accentRGB}, 0.1)`,
        boxShadow: `0 0 24px rgba(${theme.accentRGB}, 0.2), inset 0 0 12px rgba(${theme.accentRGB}, 0.05)`,
      }}
    >
      <Icon size={size} style={{ color: theme.accent }} />
    </div>
  )
}
