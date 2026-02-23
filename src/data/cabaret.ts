import {
  FileWarning,
  Users,
  Clock,
  BarChart3,
  Database,
  Crown,
  Calculator,
  UserCheck,
  Zap,
  Trophy,
  CalendarDays,
} from 'lucide-react'
import type { LPContent } from '../types/index.ts'

export const cabaretContent: LPContent = {
  businessType: 'cabaret',
  businessLabel: 'キャバクラ',
  meta: {
    title: 'LunaPos | キャバクラ向けPOSシステム',
    description:
      'キャバクラ経営に特化したPOSシステム。指名管理・会計・シフトをワンストップで実現し、手書き伝票のミスや煩雑な指名管理から解放します。',
  },
  hero: {
    headline: 'キャバクラ経営を、\nもっとスマートに',
    subheadline:
      '指名管理・会計・シフトをワンストップで。\n手書き伝票のミスや煩雑な指名管理から解放されます。',
    ctaPrimary: '無料で試してみる',
    ctaSecondary: '料金プランを見る',
  },
  painPoints: [
    {
      icon: FileWarning,
      text: '手書き伝票のミスが多く、会計トラブルが絶えない',
    },
    {
      icon: Users,
      text: '本指名・場内指名・同伴の管理が煩雑でミスが起きやすい',
    },
    {
      icon: Clock,
      text: 'シフト調整に毎週何時間もかかっている',
    },
    {
      icon: BarChart3,
      text: '売上レポートの作成に時間がかかりすぎる',
    },
    {
      icon: Database,
      text: '顧客情報がバラバラで、接客に活かせていない',
    },
  ],
  features: [
    {
      icon: Crown,
      title: '指名管理システム',
      description:
        '本指名・場内指名・同伴をワンタップで記録。キャストごとの指名状況をリアルタイムに把握でき、複雑な指名ルールにも柔軟に対応します。',
    },
    {
      icon: Calculator,
      title: 'セット料金管理',
      description:
        '時間制セット・延長・指名料・ドリンクを自動計算。複雑な料金体系もシステムが正確に処理し、会計ミスをゼロにします。',
    },
    {
      icon: UserCheck,
      title: '顧客管理・VIPランク',
      description:
        '来店履歴・好み・担当キャストを一元管理。VIPランク設定で常連のお客様に最高のおもてなしを提供できます。',
    },
    {
      icon: Zap,
      title: 'リアルタイム会計',
      description:
        'テーブルごとの利用状況と金額をリアルタイム表示。延長のタイミングも自動通知され、スムーズな会計を実現します。',
    },
    {
      icon: Trophy,
      title: 'キャスト売上ランキング',
      description:
        '指名数・売上・同伴数をキャストごとに自動集計。日次・週次・月次のランキングでキャストのモチベーション向上を支援します。',
    },
    {
      icon: CalendarDays,
      title: 'シフト管理',
      description:
        'キャストのシフト希望をアプリで収集し、自動調整。出勤状況をリアルタイムに把握でき、急な欠勤にも素早く対応できます。',
    },
  ],
  testimonials: [],
  faqs: [
    {
      question: '導入までどのくらいの期間がかかりますか？',
      answer:
        'お申し込みから最短3営業日でご利用いただけます。初期設定はサポートチームが丁寧にサポートいたしますので、ITに詳しくない方でも安心して導入できます。',
    },
    {
      question: 'データのエクスポートはできますか？',
      answer:
        'はい、売上データや顧客情報などをCSV形式でエクスポートできます。確定申告や税理士への共有、独自の分析にご活用いただけます。',
    },
    {
      question: 'どの端末で使えますか？',
      answer:
        '現在はiPadに対応しています。店舗での利用に最適化された操作画面をご提供しています。',
    },
    {
      question: '解約はいつでもできますか？',
      answer:
        'はい、解約はいつでも可能です。最低利用期間の縛りはございません。公式LINEからご連絡いただければ、すぐにお手続きいたします。',
    },
{
      question: '無料トライアルはありますか？',
      answer:
        'はい、1ヶ月間の無料トライアルをご利用いただけます。クレジットカードの登録不要で、全機能をお試しいただけます。',
    },
    {
      question: '店舗独自の給与体系に対応できますか？',
      answer:
        'はい、バック率や時給設定など、店舗ごとの給与ルールに合わせた柔軟な設定が可能です。ただし、すべての給与体系に対応できるとは限りませんので、詳しくはお問い合わせください。',
    },
  ],
  cta: {
    headline: 'キャバクラに最適化されたPOS、\n今すぐお試しください',
    subheadline:
      '1ヶ月の無料トライアルで、LunaPosの便利さを体感してください。導入サポートも万全です。',
  },
}
