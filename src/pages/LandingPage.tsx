import { useEffect, useState } from 'react'
import { useTheme } from '../hooks/useTheme.ts'
import Header from '../components/layout/Header.tsx'
import Footer from '../components/layout/Footer.tsx'
import HeroSection from '../components/sections/HeroSection.tsx'
import ProblemsSection from '../components/sections/ProblemsSection.tsx'
import FeaturesSection from '../components/sections/FeaturesSection.tsx'
import ScreenshotsSection from '../components/sections/ScreenshotsSection.tsx'
import PricingSection from '../components/sections/PricingSection.tsx'
import CaseStudySection from '../components/sections/CaseStudySection.tsx'
import FAQSection from '../components/sections/FAQSection.tsx'
import CTASection from '../components/sections/CTASection.tsx'
import type { LPContent } from '../types/index.ts'

interface LandingPageProps {
  content: LPContent
  waitlist?: boolean
}

export default function LandingPage({ content, waitlist }: LandingPageProps) {
  const theme = useTheme()
  const [showFloatingCTA, setShowFloatingCTA] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingCTA(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0)

    // Set document title
    document.title = content.meta.title

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', content.meta.description)
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = content.meta.description
      document.head.appendChild(meta)
    }

    // Set CSS custom properties on document root
    const root = document.documentElement
    root.style.setProperty('--accent', theme.accent)
    root.style.setProperty('--accent-light', theme.accentLight)
    root.style.setProperty('--accent-dark', theme.accentDark)
    root.style.setProperty('--accent-rgb', theme.accentRGB)
  }, [content, theme])

  return (
    <div className="min-h-screen bg-[#0e0e1a] text-white">
      <Header />
      <main>
        <HeroSection
          headline={content.hero.headline}
          subheadline={content.hero.subheadline}
          ctaPrimary={waitlist ? '公式LINEで登録する' : content.hero.ctaPrimary}
          ctaSecondary={content.hero.ctaSecondary}
          waitlist={waitlist}
        />
        <ProblemsSection painPoints={content.painPoints} />
        <FeaturesSection features={content.features} />
        <ScreenshotsSection />
        <PricingSection waitlist={waitlist} />
        <CaseStudySection testimonials={content.testimonials} waitlist={waitlist} />
        <FAQSection faqs={content.faqs} />
        <CTASection
          headline={content.cta.headline}
          subheadline={content.cta.subheadline}
          waitlist={waitlist}
        />
      </main>
      <Footer />

      {/* Floating CTA */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 transition-all duration-300 ${
          showFloatingCTA
            ? 'translate-y-0 opacity-100'
            : 'translate-y-full opacity-0'
        }`}
        style={{
          background: 'rgba(10, 10, 24, 0.95)',
          backdropFilter: 'blur(12px)',
          borderTop: `1px solid rgba(${theme.accentRGB}, 0.2)`,
        }}
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <p className="hidden sm:block text-sm text-[#9090bb]">
            {waitlist ? '順次公開予定 - 公式LINEで受付中' : '1ヶ月の無料トライアル実施中'}
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={waitlist ? '#cta' : '#cta'}
              className="flex-1 sm:flex-none inline-flex items-center justify-center font-medium rounded-xl px-6 py-2.5 text-sm transition-all duration-300 hover:brightness-110 hover:scale-105 active:scale-95"
              style={{
                backgroundColor: theme.accent,
                color: '#ffffff',
                boxShadow: `0 0 20px rgba(${theme.accentRGB}, 0.3)`,
              }}
            >
              {waitlist ? '公式LINEで登録' : '無料で試してみる'}
            </a>
            {!waitlist && (
              <a
                href="#pricing"
                className="hidden sm:inline-flex items-center justify-center font-medium rounded-xl px-6 py-2.5 text-sm transition-all duration-300 hover:bg-white/5 active:scale-95"
                style={{
                  color: theme.accentLight,
                  border: `1px solid ${theme.accent}`,
                }}
              >
                料金を見る
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
