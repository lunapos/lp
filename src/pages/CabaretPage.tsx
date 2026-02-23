import { ThemeContext } from '../hooks/useTheme.ts'
import { themes } from '../config/themes.ts'
import { cabaretContent } from '../data/cabaret.ts'
import LandingPage from './LandingPage.tsx'

export default function CabaretPage() {
  return (
    <ThemeContext.Provider value={themes.cabaret}>
      <LandingPage content={cabaretContent} waitlist />
    </ThemeContext.Provider>
  )
}
