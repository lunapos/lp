import { Bell } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme.ts'
import { useScrollAnimation } from '../../hooks/useScrollAnimation.ts'
import Button from '../ui/Button.tsx'

interface HeroSectionProps {
  headline: string
  subheadline: string
  ctaPrimary: string
  ctaSecondary: string
  waitlist?: boolean
}

export default function HeroSection({
  headline,
  subheadline,
  ctaPrimary,
  ctaSecondary,
  waitlist,
}: HeroSectionProps) {
  const theme = useTheme()
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      style={{
        background: `radial-gradient(ellipse at center, rgba(${theme.accentRGB}, 0.12) 0%, transparent 70%), #0a0a18`,
      }}
    >
      {/* Floating moon symbol */}
      <div
        className="absolute animate-float select-none pointer-events-none"
        style={{
          top: '10%',
          right: '10%',
          fontSize: 'clamp(8rem, 20vw, 20rem)',
          color: theme.accent,
          opacity: 0.07,
          lineHeight: 1,
        }}
      >
        ☽
      </div>

      {/* Content */}
      <div
        className={`relative z-10 text-center max-w-4xl mx-auto px-4 ${
          isVisible ? 'animate-slide-up' : 'opacity-0'
        }`}
      >
        {waitlist && (
          <div className="flex justify-center mb-6">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
              style={{
                background: `rgba(${theme.accentRGB}, 0.15)`,
                color: theme.accentLight,
                border: `1px solid rgba(${theme.accentRGB}, 0.3)`,
              }}
            >
              <Bell size={16} />
              Coming Soon - 順次公開予定
            </span>
          </div>
        )}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 whitespace-pre-line leading-tight">
          {headline}
        </h1>
        <p className="text-lg md:text-xl text-[#9090bb] mb-10 whitespace-pre-line leading-relaxed">
          {subheadline}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" size="lg" href="#cta">
            {ctaPrimary}
          </Button>
          <Button variant="secondary" size="lg" href="#pricing">
            {ctaSecondary}
          </Button>
        </div>
      </div>
    </section>
  )
}
