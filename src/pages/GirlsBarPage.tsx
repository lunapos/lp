import { ThemeContext } from '../hooks/useTheme.ts'
import { themes } from '../config/themes.ts'
import { girlsBarContent } from '../data/girls-bar.ts'
import LandingPage from './LandingPage.tsx'

export default function GirlsBarPage() {
  return (
    <ThemeContext.Provider value={themes['girls-bar']}>
      <LandingPage content={girlsBarContent} waitlist />
    </ThemeContext.Provider>
  )
}
