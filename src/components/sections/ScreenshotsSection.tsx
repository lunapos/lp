import { useTheme } from '../../hooks/useTheme.ts'
import Section from '../layout/Section.tsx'
import SectionHeading from '../ui/SectionHeading.tsx'
import { useColorMode } from '../../hooks/useColorMode.ts'

export default function ScreenshotsSection() {
  const theme = useTheme()
  const { colors } = useColorMode()

  return (
    <Section id="screenshots">
      <SectionHeading title="直感的な操作画面" subtitle="SCREENSHOTS" />
      <div className="flex flex-col items-center gap-10">
        {/* iPad frame */}
        <div className="relative mx-auto w-full" style={{ maxWidth: 560 }}>
          <div
            className="relative mx-auto"
            style={{
              aspectRatio: '4 / 3',
              borderRadius: 24,
              border: `2px solid ${theme.accent}`,
              background: colors.bg,
              boxShadow: `0 0 60px rgba(${theme.accentRGB}, 0.2), 0 0 120px rgba(${theme.accentRGB}, 0.08)`,
              padding: 12,
            }}
          >
            {/* Camera dot */}
            <div
              className="absolute top-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
              style={{ background: colors.border }}
            />

            {/* Screen */}
            <div
              className="w-full h-full rounded-2xl overflow-hidden flex flex-col"
              style={{ background: colors.surface }}
            >
              {/* Top bar */}
              <div className="flex items-center justify-between px-5 pt-4 pb-2">
                <span className="text-xs text-[var(--mode-text-secondary)]">21:30</span>
                <span
                  className="text-sm font-bold tracking-wider inline-flex items-center gap-1"
                  style={{ color: theme.accent }}
                >
                  <img src="/icon.png" alt="" width={14} height={14} />
                  LunaPos
                </span>
                <div className="flex gap-1.5 items-center">
                  <div className="w-4 h-2 rounded-sm" style={{ background: theme.accent }} />
                  <div className="w-2 h-2 rounded-full bg-[var(--mode-text-secondary)]" />
                </div>
              </div>

              {/* Dashboard */}
              <div className="flex-1 px-5 py-3 flex flex-col gap-3">
                {/* Sales header */}
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[11px] text-[var(--mode-text-secondary)]">本日の売上</p>
                    <p
                      className="text-3xl font-bold"
                      style={{ color: theme.accent }}
                    >
                      ¥385,000
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[11px] text-[var(--mode-text-secondary)]">前日比</p>
                    <p className="text-sm font-bold text-emerald-400">+12.5%</p>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { label: '来客数', value: '24組' },
                    { label: '客単価', value: '¥16,042' },
                    { label: '稼働率', value: '87%' },
                    { label: '指名数', value: '18' },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="rounded-lg p-2 text-center"
                      style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${colors.border}` }}
                    >
                      <p className="text-[9px] text-[var(--mode-text-secondary)]">{stat.label}</p>
                      <p className="text-sm font-bold text-[var(--mode-text-primary)]">{stat.value}</p>
                    </div>
                  ))}
                </div>

                {/* Table list */}
                <div className="flex-1">
                  <p className="text-[11px] text-[var(--mode-text-secondary)] mb-2">テーブル状況</p>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { table: 'VIP 1', status: '利用中', time: '20:15〜', amount: '¥48,000' },
                      { table: 'VIP 2', status: '利用中', time: '21:00〜', amount: '¥32,000' },
                      { table: 'A席', status: '利用中', time: '20:45〜', amount: '¥18,500' },
                      { table: 'B席', status: '空席', time: '', amount: '' },
                      { table: 'C席', status: '利用中', time: '21:10〜', amount: '¥12,000' },
                      { table: 'D席', status: '空席', time: '', amount: '' },
                    ].map((row, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between rounded-lg px-3 py-2"
                        style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${colors.border}` }}
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{
                              background: row.status === '利用中' ? theme.accent : colors.border,
                            }}
                          />
                          <span className="text-xs text-[var(--mode-text-primary)]">{row.table}</span>
                        </div>
                        <span
                          className="text-[11px] font-medium"
                          style={{ color: row.amount ? theme.accentLight : colors.border }}
                        >
                          {row.amount || '---'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom nav */}
              <div className="flex items-center justify-around py-3 border-t border-[var(--mode-border)]">
                {['ホーム', '伝票', 'テーブル', 'キャスト', '分析'].map((label, i) => (
                  <div key={i} className="flex flex-col items-center gap-0.5">
                    <div
                      className="w-5 h-5 rounded"
                      style={{
                        background: i === 0 ? theme.accent : colors.border,
                      }}
                    />
                    <span
                      className="text-[9px]"
                      style={{ color: i === 0 ? theme.accent : colors.textSecondary }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sample watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span
                className="text-4xl font-bold tracking-[0.3em] uppercase opacity-10 -rotate-12 select-none"
                style={{ color: theme.accent }}
              >
                Sample
              </span>
            </div>
          </div>
        </div>

        {/* Caption text */}
        <div className="text-center">
          <p className="text-lg font-bold text-[var(--mode-text-primary)] mb-2">
            iPad・タブレット対応
          </p>
          <p className="text-[var(--mode-text-secondary)]">
            いつでもどこでも、お店の状況を確認
          </p>
          <p className="text-[var(--mode-text-muted)]/50 text-xs mt-2">
            ※ 画面はイメージです。実際の画面とは異なる場合があります。
          </p>
        </div>
      </div>
    </Section>
  )
}
