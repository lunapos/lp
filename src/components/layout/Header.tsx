import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme.ts'
import ThemeToggle from '../ui/ThemeToggle.tsx'

const navItems = [
  { label: '特徴', href: '#features' },
  { label: '機能', href: '#screenshots' },
  { label: '料金', href: '#pricing' },
  { label: '導入事例', href: '#case-studies' },
  { label: 'FAQ', href: '#faq' },
  { label: 'お問い合わせ', href: '#cta' },
] as const

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const theme = useTheme()

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--mode-bg)]/90 backdrop-blur-md border-b border-[var(--mode-border)]">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <img src="/icon.png" alt="LunaPos" width={24} height={24} />
          <span style={{ color: theme.accent }}>LunaPos</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className="text-sm text-[var(--mode-text-secondary)] hover:text-[var(--mode-text-primary)] transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="md:hidden flex flex-col items-center justify-center gap-1.5 w-10 h-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={isMenuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-[var(--mode-text-secondary)] transition-transform duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[var(--mode-text-secondary)] transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[var(--mode-text-secondary)] transition-transform duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Slide-in Panel */}
      <div
        className={`md:hidden fixed top-16 right-0 h-[calc(100vh-4rem)] w-64 z-50 bg-[var(--mode-bg)]/95 backdrop-blur-md border-l border-[var(--mode-border)] transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col p-6 gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className="text-[var(--mode-text-secondary)] hover:text-[var(--mode-text-primary)] transition-colors duration-200 py-2 border-b border-[var(--mode-border)]"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <ThemeToggle />
          </div>
        </nav>
      </div>

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 top-16 bg-black/50 z-40"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  )
}

export default Header
