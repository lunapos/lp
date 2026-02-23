import { useState } from 'react'
import { Quote, MessageSquarePlus } from 'lucide-react'
import type { Testimonial } from '../../types/index.ts'
import { useTheme } from '../../hooks/useTheme.ts'
import Section from '../layout/Section.tsx'
import SectionHeading from '../ui/SectionHeading.tsx'
import Card from '../ui/Card.tsx'
import Button from '../ui/Button.tsx'

interface CaseStudySectionProps {
  testimonials: Testimonial[]
  waitlist?: boolean
}

export default function CaseStudySection({ testimonials, waitlist }: CaseStudySectionProps) {
  const theme = useTheme()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', venue: '', message: '' })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClasses =
    'w-full bg-[#0a0a18] border border-[#2e2e50] rounded-xl px-4 py-3 text-white placeholder-[#9090bb]/50 transition-colors duration-300 outline-none'

  return (
    <Section id="case-studies">
      <SectionHeading title="導入事例" subtitle="CASE STUDY" />

      {testimonials.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} hover className="flex flex-col h-full">
              <Quote
                size={32}
                className="mb-4 opacity-60"
                style={{ color: theme.accent }}
              />
              <p className="text-white italic leading-relaxed mb-6 flex-1">
                {testimonial.quote}
              </p>
              <div
                className="h-px w-full mb-4"
                style={{
                  background: `linear-gradient(90deg, transparent, ${theme.accent}40, transparent)`,
                }}
              />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-[#9090bb]">
                    {testimonial.role} / {testimonial.venue}
                  </p>
                </div>
                <span
                  className="text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap"
                  style={{
                    background: `rgba(${theme.accentRGB}, 0.15)`,
                    color: theme.accentLight,
                    border: `1px solid rgba(${theme.accentRGB}, 0.3)`,
                  }}
                >
                  {testimonial.metric}
                </span>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Voice request */}
      <div
        className="max-w-2xl mx-auto rounded-2xl p-8 text-center"
        style={{
          background: `linear-gradient(135deg, rgba(${theme.accentRGB}, 0.06) 0%, rgba(${theme.accentRGB}, 0.02) 100%)`,
          border: `1px solid rgba(${theme.accentRGB}, 0.15)`,
        }}
      >
        <MessageSquarePlus
          size={40}
          className="mx-auto mb-4 opacity-70"
          style={{ color: theme.accent }}
        />
        <h3 className="text-xl font-bold text-white mb-2">
          ご利用中のお客様の声を募集しています
        </h3>
        <p className="text-[#9090bb] text-sm mb-6">
          LunaPosをお使いの感想をお聞かせください。
        </p>

        {waitlist ? (
          <p className="text-[#9090bb] text-sm">
            サービス開始後に募集を開始いたします。
          </p>
        ) : submitted ? (
          <div className="py-4">
            <p className="text-white font-bold">ありがとうございます！</p>
            <p className="text-[#9090bb] text-sm mt-1">
              担当者より折り返しご連絡いたします。
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-[#9090bb] mb-1.5">お名前</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="例: 田中 太郎"
                  className={inputClasses}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = theme.accent
                    e.currentTarget.style.boxShadow = `0 0 0 3px rgba(${theme.accentRGB}, 0.15)`
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#2e2e50'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-[#9090bb] mb-1.5">店舗名</label>
                <input
                  type="text"
                  name="venue"
                  value={form.venue}
                  onChange={handleChange}
                  placeholder="例: Club Luna"
                  className={inputClasses}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = theme.accent
                    e.currentTarget.style.boxShadow = `0 0 0 3px rgba(${theme.accentRGB}, 0.15)`
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#2e2e50'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-[#9090bb] mb-1.5">ご感想・エピソード</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="LunaPosを使って変わったこと、便利だと感じた点など"
                rows={3}
                className={`${inputClasses} resize-none`}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = theme.accent
                  e.currentTarget.style.boxShadow = `0 0 0 3px rgba(${theme.accentRGB}, 0.15)`
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#2e2e50'
                  e.currentTarget.style.boxShadow = 'none'
                }}
                required
              />
            </div>
            <Button variant="primary" className="w-full">
              声を届ける
            </Button>
          </form>
        )}
      </div>
    </Section>
  )
}
