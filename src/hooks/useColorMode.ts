import { createContext, useContext } from 'react'
import type { ModeColors, ColorMode } from '../types/index.ts'
import { modeColors } from '../config/colorMode.ts'

interface ColorModeContextValue {
  mode: ColorMode
  colors: ModeColors
  toggle: () => void
}

export const ColorModeContext = createContext<ColorModeContextValue>({
  mode: 'dark',
  colors: modeColors.dark,
  toggle: () => {},
})

export function useColorMode() {
  return useContext(ColorModeContext)
}
