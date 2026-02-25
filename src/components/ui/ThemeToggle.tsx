import { Sun, Moon } from 'lucide-react'
import { useColorMode } from '../../hooks/useColorMode.ts'

export default function ThemeToggle() {
  const { mode, toggle } = useColorMode()
  const isLight = mode === 'light'

  return (
    <button
      type="button"
      onClick={toggle}
      className="relative inline-flex items-center w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none"
      style={{
        backgroundColor: isLight
          ? 'rgba(var(--mode-accent-rgb, 184,152,46), 0.2)'
          : 'var(--mode-border)',
      }}
      aria-label={isLight ? 'ダークモードに切り替え' : 'ライトモードに切り替え'}
    >
      <span
        className="absolute left-1 flex items-center justify-center w-5 h-5 rounded-full shadow-sm transition-transform duration-300"
        style={{
          transform: isLight ? 'translateX(28px)' : 'translateX(0)',
          backgroundColor: isLight
            ? 'var(--mode-accent)'
            : 'var(--mode-text-secondary)',
        }}
      >
        {isLight ? (
          <Sun className="w-3 h-3 text-white" />
        ) : (
          <Moon className="w-3 h-3" style={{ color: 'var(--mode-bg)' }} />
        )}
      </span>
    </button>
  )
}
