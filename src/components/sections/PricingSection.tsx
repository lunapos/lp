import { Check, Sparkles, Gift } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme.ts'
import Section from '../layout/Section.tsx'
import SectionHeading from '../ui/SectionHeading.tsx'

const FEATURES = [
  '指名管理・会計管理',
  'シフト管理',
  '売上レポート',
  '顧客管理',
  'キャストアプリ',
  '管理画面',
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
        description="迷わせない、ワンプラン。最初の500会計は無料です。"
      />

      <div className="max-w-lg mx-auto">
        <div
          className="bg-[#141430] border-2 rounded-xl p-8"
          style={{
            borderColor: theme.accent,
            boxShadow: `0 0 30px rgba(${theme.accentRGB}, 0.15)`,
          }}
        >
          <div className="text-center mb-6">
            <div className="flex items-baseline justify-center gap-1 mb-2">
              <span className="text-5xl font-bold text-white">¥30,000</span>
              <span className="text-[#9090bb] text-lg">/月（税込）</span>
            </div>
          </div>

          <ul className="flex flex-col gap-3 mb-6">
            {FEATURES.map((feature, i) => (
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

          {/* Free Note */}
          <div
            className="rounded-xl p-4 text-left mb-4"
            style={{
              background: `rgba(${theme.accentRGB}, 0.06)`,
              border: `1px solid rgba(${theme.accentRGB}, 0.15)`,
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Gift size={16} style={{ color: theme.accent }} />
              <span className="text-sm font-bold text-white">まずは無料で始められます</span>
            </div>
            <p className="text-xs text-[#9090bb] leading-relaxed">
              最初の500会計（累計）は無料。全機能がそのまま使えます。
            </p>
          </div>

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
    </Section>
  )
}
