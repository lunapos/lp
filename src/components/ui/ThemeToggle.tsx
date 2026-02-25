import { Sun, Moon } from 'lucide-react'
import { useColorMode } from '../../hooks/useColorMode.ts'

export default function ThemeToggle() {
  const { mode, toggle } = useColorMode()

  return (
    <button
      type="button"
      onClick={toggle}
      className="p-2 rounded-lg transition-colors duration-200 text-[var(--mode-text-secondary)]"
      aria-label={mode === 'dark' ? 'ライトモードに切り替え' : 'ダークモードに切り替え'}
    >
      {mode === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}
