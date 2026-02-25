import type { LucideIcon } from 'lucide-react'

export type BusinessType = 'cabaret' | 'girls-bar' | 'snack' | 'host' | 'lounge'

export interface ThemeConfig {
  businessType: BusinessType
  businessLabel: string
  accent: string
  accentLight: string
  accentDark: string
  accentRGB: string
}

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

export interface PainPoint {
  icon: LucideIcon
  text: string
}


export interface Testimonial {
  quote: string
  name: string
  role: string
  venue: string
  metric: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface LPContent {
  businessType: BusinessType
  businessLabel: string
  meta: {
    title: string
    description: string
  }
  hero: {
    headline: string
    subheadline: string
    ctaPrimary: string
    ctaSecondary: string
  }
  painPoints: PainPoint[]
  features: Feature[]
  testimonials: Testimonial[]
  faqs: FAQ[]
  cta: {
    headline: string
    subheadline: string
  }
}

export type ColorMode = 'dark' | 'light'

export interface ModeColors {
  bg: string
  surface: string
  textPrimary: string
  textSecondary: string
  textMuted: string
  border: string
  inputBg: string
}
