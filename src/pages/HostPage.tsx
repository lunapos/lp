import { ThemeContext } from '../hooks/useTheme.ts'
import { themes } from '../config/themes.ts'
import { hostContent } from '../data/host.ts'
import LandingPage from './LandingPage.tsx'

export default function HostPage() {
  return (
    <ThemeContext.Provider value={themes.host}>
      <LandingPage content={hostContent} waitlist />
    </ThemeContext.Provider>
  )
}
