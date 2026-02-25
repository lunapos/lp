import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { ThemeContext } from '../hooks/useTheme.ts'
import { themes } from '../config/themes.ts'
import Header from '../components/layout/Header.tsx'
import Footer from '../components/layout/Footer.tsx'
import Card from '../components/ui/Card.tsx'
import { newsItems } from '../data/news.ts'
import type { NewsItem } from '../data/news.ts'

const categoryColors: Record<NewsItem['category'], string> = {
  お知らせ: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  メンテナンス: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  キャンペーン: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')}`
}

function NewsPageContent() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'お知らせ | LunaPos'
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

        <h1 className="text-3xl md:text-4xl font-bold text-[var(--mode-text-primary)] mb-2">お知らせ</h1>
        <p className="text-[var(--mode-text-secondary)] mb-12">LunaPosに関するお知らせ一覧です。</p>

        <div className="flex flex-col gap-4">
          {newsItems.map((item) => (
            <Card key={item.id} hover>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm text-[var(--mode-text-secondary)]">{formatDate(item.date)}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full border ${categoryColors[item.category]}`}
                >
                  {item.category}
                </span>
              </div>
              <h3 className="text-[var(--mode-text-primary)] font-bold leading-relaxed mb-2">
                {item.title}
              </h3>
              <p className="text-[var(--mode-text-secondary)] text-sm leading-relaxed">
                {item.summary}
              </p>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function NewsPage() {
  return (
    <ThemeContext.Provider value={themes.cabaret}>
      <NewsPageContent />
    </ThemeContext.Provider>
  )
}
