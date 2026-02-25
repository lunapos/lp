import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
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

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

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
    <>
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

          {/* Mobile: Theme Toggle + Hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              className="flex flex-col items-center justify-center gap-1.5 w-10 h-10"
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
        </div>
      </header>

      {/* Mobile Overlay - outside header to avoid stacking context issues */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-[60]"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Slide-in Panel - outside header */}
      <div
        className={`md:hidden fixed top-0 right-0 bottom-0 w-64 z-[70] pt-16 bg-[var(--mode-bg)]/95 backdrop-blur-md border-l border-[var(--mode-border)] transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end px-4 pt-2">
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-lg text-[var(--mode-text-secondary)] hover:text-[var(--mode-accent)] transition-colors"
            aria-label="メニューを閉じる"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="flex flex-col px-6 pb-6 gap-4">
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
        </nav>
      </div>
    </>
  )
}

export default Header
