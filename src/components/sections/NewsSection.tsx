import { Link } from 'react-router-dom'
import { Megaphone, Wrench, ArrowRight } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme.ts'
import Section from '../layout/Section.tsx'
import SectionHeading from '../ui/SectionHeading.tsx'
import Card from '../ui/Card.tsx'
import { newsItems, updateItems } from '../../data/news.ts'
import type { NewsItem, UpdateItem } from '../../data/news.ts'

const categoryColors: Record<NewsItem['category'], string> = {
  お知らせ: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  メンテナンス: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  キャンペーン: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')}`
}

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Card hover>
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs text-[#9090bb]">{formatDate(item.date)}</span>
        <span
          className={`text-xs px-2 py-0.5 rounded-full border ${categoryColors[item.category]}`}
        >
          {item.category}
        </span>
      </div>
      <h4 className="text-white font-bold text-sm leading-relaxed mb-2">
        {item.title}
      </h4>
      <p className="text-[#9090bb] text-xs leading-relaxed line-clamp-2">
        {item.summary}
      </p>
    </Card>
  )
}

function UpdateCard({ item }: { item: UpdateItem }) {
  const theme = useTheme()

  return (
    <Card hover>
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs text-[#9090bb]">{formatDate(item.date)}</span>
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
      <h4 className="text-white font-bold text-sm leading-relaxed mb-3">
        {item.title}
      </h4>
      <ul className="flex flex-col gap-1.5">
        {item.changes.map((change, i) => (
          <li key={i} className="text-[#9090bb] text-xs leading-relaxed flex gap-2">
            <span style={{ color: theme.accent }}>•</span>
            <span>{change}</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default function NewsSection() {
  const theme = useTheme()
  const latestNews = newsItems.slice(0, 3)
  const latestUpdates = updateItems.slice(0, 3)

  return (
    <Section id="news">
      <SectionHeading title="最新情報" subtitle="NEWS & UPDATES" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* お知らせ */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Megaphone size={20} style={{ color: theme.accent }} />
            <h3 className="text-lg font-bold text-white">お知らせ</h3>
          </div>
          <div className="flex flex-col gap-4">
            {latestNews.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
          {newsItems.length > 3 && (
            <Link
              to="/news"
              className="inline-flex items-center gap-1.5 mt-6 text-sm transition-colors duration-200 hover:brightness-125"
              style={{ color: theme.accentLight }}
            >
              お知らせ一覧を見る
              <ArrowRight size={14} />
            </Link>
          )}
        </div>

        {/* 開発アップデート */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Wrench size={20} style={{ color: theme.accent }} />
            <h3 className="text-lg font-bold text-white">開発アップデート</h3>
          </div>
          <div className="flex flex-col gap-4">
            {latestUpdates.map((item) => (
              <UpdateCard key={item.id} item={item} />
            ))}
          </div>
          {updateItems.length > 3 && (
            <Link
              to="/updates"
              className="inline-flex items-center gap-1.5 mt-6 text-sm transition-colors duration-200 hover:brightness-125"
              style={{ color: theme.accentLight }}
            >
              開発アップデート一覧を見る
              <ArrowRight size={14} />
            </Link>
          )}
        </div>
      </div>
    </Section>
  )
}
