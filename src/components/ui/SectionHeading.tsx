import { useTheme } from '../../hooks/useTheme.ts'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  description?: string
}

export default function SectionHeading({ title, subtitle, description }: SectionHeadingProps) {
  const theme = useTheme()

  return (
    <div className="text-center mb-12">
      {subtitle && (
        <p
          className="uppercase tracking-widest text-sm font-medium mb-3"
          style={{ color: theme.accent }}
        >
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
      <div
        className="mx-auto mt-4 h-1 w-16 rounded-full"
        style={{
          background: `linear-gradient(90deg, ${theme.accent}, ${theme.accentLight})`,
        }}
      />
      {description && (
        <p className="mt-4 text-[#9090bb] text-base">{description}</p>
      )}
    </div>
  )
}
