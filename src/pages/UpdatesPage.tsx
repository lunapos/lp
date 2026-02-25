import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { ThemeContext, useTheme } from '../hooks/useTheme.ts'
import { themes } from '../config/themes.ts'
import Header from '../components/layout/Header.tsx'
import Footer from '../components/layout/Footer.tsx'
import Card from '../components/ui/Card.tsx'
import { updateItems } from '../data/news.ts'

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')}`
}

function UpdatesPageContent() {
  const theme = useTheme()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = '開発アップデート | LunaPos'
  }, [])

  return (
    <div className="min-h-screen bg-[var(--mode-bg)] text-[var(--mode-text-primary)]">
      <Header />
      <main className="max-w-4xl mx-auto px-4 pt-28 pb-20">
        <Link
          to="/cabaret"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--mode-text-secondary)] hover:text-[var(--mode-text-primary)] transition-colors duration-200 mb-8"
        >
          <ArrowLeft size={14} />
          トップに戻る
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-[var(--mode-text-primary)] mb-2">開発アップデート</h1>
        <p className="text-[var(--mode-text-secondary)] mb-12">LunaPosの機能追加・改善履歴です。</p>

        <div className="flex flex-col gap-4">
          {updateItems.map((item) => (
            <Card key={item.id} hover>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm text-[var(--mode-text-secondary)]">{formatDate(item.date)}</span>
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-mono"
                  style={{
                    background: `rgba(${theme.accentRGB}, 0.15)`,
                    color: theme.accentLight,
                    border: `1px solid rgba(${theme.accentRGB}, 0.3)`,
                  }}
                >
                  {item.version}
                </span>
              </div>
              <h3 className="text-[var(--mode-text-primary)] font-bold leading-relaxed mb-3">
                {item.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {item.changes.map((change, i) => (
                  <li key={i} className="text-[var(--mode-text-secondary)] text-sm leading-relaxed flex gap-2">
                    <span style={{ color: theme.accent }}>•</span>
                    <span>{change}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function UpdatesPage() {
  return (
    <ThemeContext.Provider value={themes.cabaret}>
      <UpdatesPageContent />
    </ThemeContext.Provider>
  )
}
