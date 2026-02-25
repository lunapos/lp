import type { ModeColors, ColorMode } from '../types/index.ts'

export const modeColors: Record<ColorMode, ModeColors> = {
  dark: {
    bg: '#0a0a18',
    surface: '#141430',
    textPrimary: '#ffffff',
    textSecondary: '#9090bb',
    textMuted: '#6b6b8a',
    border: '#2e2e50',
    inputBg: '#0a0a18',
  },
  light: {
    bg: '#f8f8fc',
    surface: '#ffffff',
    textPrimary: '#1a1a2e',
    textSecondary: '#6b6b8a',
    textMuted: '#9090aa',
    border: '#e0e0ee',
    inputBg: '#f0f0f8',
  },
}
