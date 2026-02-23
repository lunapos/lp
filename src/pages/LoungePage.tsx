import { ThemeContext } from '../hooks/useTheme.ts'
import { themes } from '../config/themes.ts'
import { loungeContent } from '../data/lounge.ts'
import LandingPage from './LandingPage.tsx'

export default function LoungePage() {
  return (
    <ThemeContext.Provider value={themes.lounge}>
      <LandingPage content={loungeContent} waitlist />
    </ThemeContext.Provider>
  )
}
