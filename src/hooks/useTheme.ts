import { createContext, useContext } from 'react'
import type { ThemeConfig } from '../types/index.ts'
import { themes } from '../config/themes.ts'

export const ThemeContext = createContext<ThemeConfig>(themes.cabaret)

export function useTheme() {
  return useContext(ThemeContext)
}
