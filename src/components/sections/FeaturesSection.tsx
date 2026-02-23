import type { Feature } from '../../types/index.ts'
import Section from '../layout/Section.tsx'
import SectionHeading from '../ui/SectionHeading.tsx'
import Card from '../ui/Card.tsx'
import FeatureIcon from '../ui/FeatureIcon.tsx'

interface FeaturesSectionProps {
  features: Feature[]
}

export default function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <Section id="features">
      <SectionHeading title="LunaPosの主な機能" subtitle="FEATURES" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="animate-slide-up"
            style={{
              animationDelay: `${index * 80}ms`,
              animationFillMode: 'backwards',
            }}
          >
            <Card hover className="flex flex-col gap-4 h-full">
              <FeatureIcon icon={feature.icon} />
              <h3 className="text-lg font-bold text-white">{feature.title}</h3>
              <p className="text-[#9090bb] leading-relaxed">{feature.description}</p>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  )
}
