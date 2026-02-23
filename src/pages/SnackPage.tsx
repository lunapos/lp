import { ThemeContext } from '../hooks/useTheme.ts'
import { themes } from '../config/themes.ts'
import { snackContent } from '../data/snack.ts'
import LandingPage from './LandingPage.tsx'

export default function SnackPage() {
  return (
    <ThemeContext.Provider value={themes.snack}>
      <LandingPage content={snackContent} waitlist />
    </ThemeContext.Provider>
  )
}
