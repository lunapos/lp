import { Check, Sparkles, ArrowRight } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme.ts'
import Section from '../layout/Section.tsx'
import SectionHeading from '../ui/SectionHeading.tsx'

const FREE_FEATURES = [
  '指名管理・会計管理',
  'シフト管理',
  '売上レポート',
  '顧客管理',
  'キャストアプリ',
  '管理画面',
]

const PRO_FEATURES = [
  'Freeの全機能',
  '会計数無制限',
]

interface PricingSectionProps {
  waitlist?: boolean
}

export default function PricingSection({ waitlist: _waitlist }: PricingSectionProps) {
  const theme = useTheme()

  return (
    <Section id="pricing">
      <SectionHeading
        title="料金プラン"
        subtitle="PRICING"
        description="最初の500会計は無料。そのあと月額¥30,000。"
      />

      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
        {/* Free Plan */}
        <div className="bg-[#141430] border border-[#2e2e50] rounded-xl p-8">
          <div className="text-center mb-6">
            <p className="text-[#9090bb] text-sm font-medium mb-2">Free</p>
            <div className="flex items-baseline justify-center gap-1 mb-2">
              <span className="text-5xl font-bold text-white">¥0</span>
            </div>
            <p className="text-[#9090bb] text-sm">
              累計500会計まで無料。全機能をお使いいただけます。
            </p>
          </div>

          <ul className="flex flex-col gap-3 mb-6">
            {FREE_FEATURES.map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-white">
                <Check
                  size={18}
                  className="shrink-0"
                  style={{ color: theme.accent }}
                />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pro Plan */}
        <div
          className="bg-[#141430] border-2 rounded-xl p-8 relative"
          style={{
            borderColor: theme.accent,
            boxShadow: `0 0 30px rgba(${theme.accentRGB}, 0.15)`,
          }}
        >
          <div className="text-center mb-6">
            <p className="text-sm font-medium mb-2" style={{ color: theme.accent }}>
              Pro
            </p>
            <div className="flex items-baseline justify-center gap-1 mb-2">
              <span className="text-5xl font-bold text-white">¥30,000</span>
              <span className="text-[#9090bb] text-lg">/月（税込）</span>
            </div>
            <p className="text-[#9090bb] text-sm">
              累計500会計を超えたら月額制に移行。機能はFreeと同じです。
            </p>
          </div>

          <ul className="flex flex-col gap-3 mb-6">
            {PRO_FEATURES.map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-white">
                <Check
                  size={18}
                  className="shrink-0"
                  style={{ color: theme.accent }}
                />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          {/* AI Note */}
          <div
            className="rounded-xl p-4 text-left"
            style={{
              background: `rgba(${theme.accentRGB}, 0.06)`,
              border: `1px solid rgba(${theme.accentRGB}, 0.15)`,
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={16} style={{ color: theme.accent }} />
              <span className="text-sm font-bold text-white">AI機能を順次追加予定</span>
            </div>
            <p className="text-xs text-[#9090bb] leading-relaxed">
              売上予測・シフト最適化・顧客分析など、AIを活用した機能を順次リリース予定です。AI機能のご利用には追加料金が発生する場合があります。
            </p>
          </div>
        </div>
      </div>

      {/* Flow description */}
      <div className="max-w-2xl mx-auto mt-8 text-center">
        <div className="inline-flex items-center gap-3 text-[#9090bb] text-sm">
          <span className="bg-[#141430] border border-[#2e2e50] rounded-lg px-3 py-1.5">導入（¥0）</span>
          <ArrowRight size={16} />
          <span className="bg-[#141430] border border-[#2e2e50] rounded-lg px-3 py-1.5">500会計まで無料で利用</span>
          <ArrowRight size={16} />
          <span
            className="bg-[#141430] rounded-lg px-3 py-1.5"
            style={{
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: `rgba(${theme.accentRGB}, 0.5)`,
              color: theme.accent,
            }}
          >
            501会計目からPro（月額¥30,000）
          </span>
        </div>
      </div>
    </Section>
  )
}
