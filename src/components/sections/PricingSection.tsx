import { Check, Sparkles } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme.ts'
import Section from '../layout/Section.tsx'
import SectionHeading from '../ui/SectionHeading.tsx'
import Card from '../ui/Card.tsx'
import Button from '../ui/Button.tsx'

const includedFeatures = [
  '指名管理・会計管理',
  'シフト管理',
  '売上レポート',
  '顧客管理',
]

interface PricingSectionProps {
  waitlist?: boolean
}

export default function PricingSection({ waitlist }: PricingSectionProps) {
  const theme = useTheme()

  return (
    <Section id="pricing">
      <SectionHeading title="料金プラン" subtitle="PRICING" description="迷わせない、ワンプラン。全機能込みの月額制です。" />

      <div className="max-w-xl mx-auto">
        <Card hover className="text-center">
          <div className="mb-6">
            <span
              className="text-5xl font-bold"
              style={{ color: theme.accent }}
            >
              ¥30,000
            </span>
            <span className="text-[#9090bb] text-lg ml-2">/月（税込）</span>
            {waitlist && (
              <p className="text-xs text-[#9090bb] mt-2">
                ※正式リリース時に変更となる場合があります
              </p>
            )}
          </div>

          <ul className="flex flex-col gap-3 text-left mb-4">
            {includedFeatures.map((feature, i) => (
              <li key={i} className="flex items-center gap-3">
                <Check
                  size={18}
                  className="shrink-0"
                  style={{ color: theme.accent }}
                />
                <span className="text-sm text-[#9090bb]">{feature}</span>
              </li>
            ))}
          </ul>

          <div
            className="rounded-xl p-4 mb-6 text-left"
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

          <Button variant="primary" size="lg" href="#cta" className="w-full">
            {waitlist ? '公式LINEで登録する' : '無料で相談する'}
          </Button>
          {!waitlist && (
            <p className="text-xs text-[#9090bb] mt-3">
              1ヶ月の無料トライアル実施中
            </p>
          )}
        </Card>
      </div>
    </Section>
  )
}
