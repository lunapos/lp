import type { PainPoint } from '../../types/index.ts'
import Section from '../layout/Section.tsx'
import SectionHeading from '../ui/SectionHeading.tsx'
import Card from '../ui/Card.tsx'
import FeatureIcon from '../ui/FeatureIcon.tsx'

interface ProblemsSectionProps {
  painPoints: PainPoint[]
}

export default function ProblemsSection({ painPoints }: ProblemsSectionProps) {
  const remainder = painPoints.length % 3

  return (
    <Section id="problems">
      <SectionHeading title="こんなお悩みありませんか？" />

      {/* Main grid for full rows */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {painPoints.slice(0, painPoints.length - remainder).map((point, index) => (
          <div
            key={index}
            className="animate-slide-up"
            style={{
              animationDelay: `${index * 100}ms`,
              animationFillMode: 'backwards',
            }}
          >
            <Card hover className="h-full flex flex-col items-center text-center gap-4">
              <FeatureIcon icon={point.icon} size={28} />
              <p className="text-[var(--mode-text-primary)] font-medium leading-relaxed">{point.text}</p>
            </Card>
          </div>
        ))}
      </div>

      {/* Last row centered if it doesn't fill the grid */}
      {remainder > 0 && (
        <div className="flex justify-center gap-6 mt-6">
          {painPoints.slice(painPoints.length - remainder).map((point, index) => {
            const actualIndex = painPoints.length - remainder + index
            return (
              <div
                key={actualIndex}
                className="animate-slide-up w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                style={{
                  animationDelay: `${actualIndex * 100}ms`,
                  animationFillMode: 'backwards',
                }}
              >
                <Card hover className="h-full flex flex-col items-center text-center gap-4">
                  <FeatureIcon icon={point.icon} size={28} />
                  <p className="text-[var(--mode-text-primary)] font-medium leading-relaxed">{point.text}</p>
                </Card>
              </div>
            )
          })}
        </div>
      )}
    </Section>
  )
}
