import { useState } from 'react'
import { Mail } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme.ts'
import Section from '../layout/Section.tsx'
import Button from '../ui/Button.tsx'

interface CTASectionProps {
  headline: string
  subheadline: string
  waitlist?: boolean
}

export default function CTASection({ headline, subheadline }: CTASectionProps) {
  const theme = useTheme()
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [form, setForm] = useState({
    storeName: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://lunapos.jp/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          companyName: form.storeName,
          name: form.name,
          email: form.email,
          phone: form.phone,
          inquiryType: '導入相談',
          message: form.message,
        }),
      })

      if (!res.ok) throw new Error()
      setStatus('sent')
      window.gtag?.('event', 'generate_lead', {
        event_category: 'contact',
        event_label: '導入相談',
        source: 'lp',
      })
    } catch {
      setStatus('error')
    }
  }

  const inputClasses =
    'w-full bg-[#0a0a18] border border-[#2e2e50] rounded-xl px-4 py-3 text-white placeholder-[#9090bb]/50 transition-colors duration-300 outline-none'

  const focusStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = theme.accent
    e.currentTarget.style.boxShadow = `0 0 0 3px rgba(${theme.accentRGB}, 0.15)`
  }

  const blurStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = '#2e2e50'
    e.currentTarget.style.boxShadow = 'none'
  }

  return (
    <Section id="cta">
      <div
        className="rounded-2xl p-8 md:p-12"
        style={{
          background: `linear-gradient(135deg, rgba(${theme.accentRGB}, 0.08) 0%, rgba(${theme.accentRGB}, 0.03) 100%)`,
          border: `1px solid rgba(${theme.accentRGB}, 0.2)`,
        }}
      >
        {/* Headline */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 whitespace-pre-line">
            {headline}
          </h2>
          <p className="text-[#9090bb] text-lg">{subheadline}</p>
        </div>

        {status === 'sent' ? (
          <div className="text-center py-12">
            <div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
              style={{ background: `rgba(${theme.accentRGB}, 0.15)` }}
            >
              <span className="text-3xl">✓</span>
            </div>
            <p className="text-2xl font-bold text-white mb-2">
              お問い合わせありがとうございます
            </p>
            <p className="text-[#9090bb]">
              担当者より折り返しご連絡いたします。
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-[#9090bb] mb-2">
                  店舗名
                </label>
                <input
                  type="text"
                  name="storeName"
                  value={form.storeName}
                  onChange={handleChange}
                  placeholder="例: Club Luna"
                  className={inputClasses}
                  onFocus={focusStyle}
                  onBlur={blurStyle}
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-[#9090bb] mb-2">
                  お名前
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="例: 田中 太郎"
                  className={inputClasses}
                  onFocus={focusStyle}
                  onBlur={blurStyle}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-[#9090bb] mb-2">
                  メールアドレス
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="例: info@example.com"
                  className={inputClasses}
                  onFocus={focusStyle}
                  onBlur={blurStyle}
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-[#9090bb] mb-2">
                  電話番号
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="例: 090-1234-5678"
                  className={inputClasses}
                  onFocus={focusStyle}
                  onBlur={blurStyle}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-[#9090bb] mb-2">
                メッセージ
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="ご質問やご要望をお聞かせください"
                rows={4}
                className={`${inputClasses} resize-none`}
                onFocus={focusStyle}
                onBlur={blurStyle}
              />
            </div>

            {status === 'error' && (
              <p className="text-red-400 text-sm text-center">
                送信に失敗しました。時間をおいて再度お試しください。
              </p>
            )}

            <Button variant="primary" size="lg" className="w-full mt-2">
              {status === 'sending' ? '送信中...' : '無料で相談する'}
            </Button>
          </form>
        )}

        {/* Alternative contact */}
        {status !== 'sent' && (
          <div className="flex items-center justify-center mt-8 pt-8 border-t border-[#2e2e50]">
            <a
              href="mailto:contact@lunapos.jp"
              className="inline-flex items-center gap-2 text-sm text-[#9090bb] hover:text-white transition-colors duration-200"
            >
              <Mail size={16} />
              メールでのお問い合わせ: contact@lunapos.jp
            </a>
          </div>
        )}
      </div>
    </Section>
  )
}
