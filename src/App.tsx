import { Routes, Route, Navigate } from 'react-router-dom'
import CabaretPage from './pages/CabaretPage.tsx'
import GirlsBarPage from './pages/GirlsBarPage.tsx'
import SnackPage from './pages/SnackPage.tsx'
import HostPage from './pages/HostPage.tsx'
import LoungePage from './pages/LoungePage.tsx'

export default function App() {
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
