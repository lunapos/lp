import type { FAQ } from '../../types/index.ts'
import Section from '../layout/Section.tsx'
import SectionHeading from '../ui/SectionHeading.tsx'
import Accordion from '../ui/Accordion.tsx'

interface FAQSectionProps {
  faqs: FAQ[]
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <Section id="faq">
      <SectionHeading title="よくあるご質問" subtitle="FAQ" />
      <div className="max-w-3xl mx-auto flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <Accordion key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </Section>
  )
}
