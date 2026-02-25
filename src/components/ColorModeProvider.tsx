import { useState, useEffect, useMemo } from 'react'
import type { ColorMode } from '../types/index.ts'
import { modeColors } from '../config/colorMode.ts'
import { ColorModeContext } from '../hooks/useColorMode.ts'

export default function ColorModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ColorMode>(() => {
    try {
      return (localStorage.getItem('luna-theme') as ColorMode) || 'dark'
    } catch {
      return 'dark'
    }
  })

  useEffect(() => {
    const root = document.documentElement
    const colors = modeColors[mode]
    root.style.setProperty('--mode-bg', colors.bg)
    root.style.setProperty('--mode-surface', colors.surface)
    root.style.setProperty('--mode-text-primary', colors.textPrimary)
    root.style.setProperty('--mode-text-secondary', colors.textSecondary)
    root.style.setProperty('--mode-text-muted', colors.textMuted)
    root.style.setProperty('--mode-border', colors.border)
    root.style.setProperty('--mode-input-bg', colors.inputBg)

    document.body.style.backgroundColor = colors.bg
    document.body.style.color = colors.textPrimary

    localStorage.setItem('luna-theme', mode)
  }, [mode])

  const value = useMemo(() => ({
    mode,
    colors: modeColors[mode],
    toggle: () => setMode(prev => prev === 'dark' ? 'light' : 'dark'),
  }), [mode])

  return (
    <ColorModeContext.Provider value={value}>
      {children}
    </ColorModeContext.Provider>
  )
}
