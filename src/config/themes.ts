import type { BusinessType, ThemeConfig } from '../types/index.ts'

export const themes: Record<BusinessType, ThemeConfig> = {
  cabaret: {
    businessType: 'cabaret',
    businessLabel: 'キャバクラ',
    accent: '#d4b870',
    accentLight: '#e5cc8a',
    accentDark: '#8a7540',
    accentRGB: '212, 184, 112',
  },
  'girls-bar': {
    businessType: 'girls-bar',
    businessLabel: 'ガールズバー',
    accent: '#ec4899',
    accentLight: '#f472b6',
    accentDark: '#9d174d',
    accentRGB: '236, 72, 153',
  },
  snack: {
    businessType: 'snack',
    businessLabel: 'スナック',
    accent: '#a855f7',
    accentLight: '#c084fc',
    accentDark: '#6b21a8',
    accentRGB: '168, 85, 247',
  },
  host: {
    businessType: 'host',
    businessLabel: 'ホスト',
    accent: '#3b82f6',
    accentLight: '#60a5fa',
    accentDark: '#1e40af',
    accentRGB: '59, 130, 246',
  },
  lounge: {
    businessType: 'lounge',
    businessLabel: 'ラウンジ',
    accent: '#10b981',
    accentLight: '#34d399',
    accentDark: '#065f46',
    accentRGB: '16, 185, 129',
  },
}
