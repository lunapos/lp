import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import CabaretPage from './pages/CabaretPage.tsx'
import GirlsBarPage from './pages/GirlsBarPage.tsx'
import SnackPage from './pages/SnackPage.tsx'
import HostPage from './pages/HostPage.tsx'
import LoungePage from './pages/LoungePage.tsx'

declare global {
  interface Window { gtag: (...args: unknown[]) => void }
}

export default function App() {
  const location = useLocation()

  useEffect(() => {
    window.gtag?.('config', 'G-59GQFP47H4', {
      page_path: location.pathname,
    })
  }, [location])

  return (
    <Routes>
      <Route path="/cabaret" element={<CabaretPage />} />
      <Route path="/girls-bar" element={<GirlsBarPage />} />
      <Route path="/snack" element={<SnackPage />} />
      <Route path="/host" element={<HostPage />} />
      <Route path="/lounge" element={<LoungePage />} />
      <Route path="/" element={<Navigate to="/cabaret" replace />} />
      <Route path="*" element={<Navigate to="/cabaret" replace />} />
    </Routes>
  )
}
