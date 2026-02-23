import { Link } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme.ts'

const businessLinks = [
  { label: 'キャバクラ向け', to: '/cabaret', comingSoon: false },
  { label: 'ガールズバー向け', to: '/girls-bar', comingSoon: true },
  { label: 'ラウンジ向け', to: '/lounge', comingSoon: true },
  { label: 'スナック向け', to: '/snack', comingSoon: true },
  { label: 'ホスト向け', to: '/host', comingSoon: true },
] as const

function Footer() {
  const theme = useTheme()

  return (
    <footer className="bg-[#0a0a18] border-t border-[#2e2e50]">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding */}
          <div>
            <div className="flex items-center gap-2 text-xl font-bold mb-4">
              <span style={{ color: theme.accent }} className="text-2xl">
                ☽
              </span>
              <span style={{ color: theme.accent }}>LunaPos</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              ナイト業界に特化したPOSシステム。
              <br />
              売上管理・顧客管理をスマートに。
            </p>
          </div>

          {/* Business Type Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">業種別ページ</h3>
            <ul className="flex flex-col gap-2">
              {businessLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 text-sm hover:text-white transition-colors duration-200 inline-flex items-center gap-2"
                  >
                    {link.label}
                    {link.comingSoon && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-[#2e2e50] text-[#9090bb]">
                        準備中
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Page Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">サイトマップ</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="#features"
                  className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                >
                  特徴
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                >
                  料金
                </a>
              </li>
              <li>
                <a
                  href="#case-studies"
                  className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                >
                  導入事例
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">お問い合わせ</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="mailto:contact@lunapos.jp"
                  className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                >
                  contact@lunapos.jp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[#2e2e50] text-center pb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <a
              href="mailto:privacy@lunapos.jp"
              className="text-gray-500 text-xs hover:text-gray-300 transition-colors duration-200"
            >
              プライバシーに関するお問い合わせ
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            &copy; 2026 LunaPos. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
