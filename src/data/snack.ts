import {
  Wine,
  Heart,
  UserRound,
  FileSpreadsheet,
  CreditCard,
  GlassWater,
  BookOpen,
  Receipt,
  HandCoins,
  BarChart3,
  CalendarCheck,
} from 'lucide-react'
import type { LPContent } from '../types/index.ts'

export const snackContent: LPContent = {
  businessType: 'snack',
  businessLabel: 'スナック',
  meta: {
    title: 'LunaPos | スナック向けPOSシステム',
    description:
      'スナック経営に特化したPOSシステム。ボトルキープ・常連管理・ツケ管理をかんたん操作で実現。機械が苦手なママさんでも安心して使えます。',
  },
  hero: {
    headline: 'スナック経営を、\n次のステージへ',
    subheadline:
      '常連管理もボトルキープも、これひとつ。\n機械が苦手でも安心のかんたん操作。',
    ctaPrimary: '無料で試してみる',
    ctaSecondary: '料金プランを見る',
  },
  painPoints: [
    {
      icon: Wine,
      text: 'ボトルキープの管理があいまいで、お客様に迷惑をかけてしまう',
    },
    {
      icon: Heart,
      text: '常連さんの好みや前回の話題を覚えきれない',
    },
    {
      icon: UserRound,
      text: 'ワンオペ経営で、接客と管理の両立が大変',
    },
    {
      icon: FileSpreadsheet,
      text: '月末の売上集計や税務処理が手作業で時間がかかる',
    },
    {
      icon: CreditCard,
      text: 'ツケの管理が不安で、回収漏れが心配',
    },
  ],
  features: [
    {
      icon: GlassWater,
      title: 'ボトルキープ管理',
      description:
        'お客様のボトルキープを写真付きで管理。残量・保管期限を一目で確認でき、来店時にスムーズにご提供できます。期限切れ前の自動通知機能も搭載しています。',
    },
    {
      icon: BookOpen,
      title: '常連管理・メモ機能',
      description:
        'お客様の好きなお酒・話題・記念日などをメモで記録。来店時にさっと確認するだけで、「覚えていてくれた」と喜ばれるおもてなしが実現できます。',
    },
    {
      icon: HandCoins,
      title: 'ツケ管理',
      description:
        'ツケ（未払い）の残高を顧客ごとに記録・管理。回収状況を一覧で把握でき、回収漏れを防止します。一定期間経過時のリマインド機能もご利用いただけます。',
    },
    {
      icon: Receipt,
      title: 'かんたん会計',
      description:
        '大きなボタンとシンプルな画面設計で、機械が苦手な方でも迷わず操作可能。ドリンク・フード・チャージをタップするだけで、正確な会計が完了します。',
    },
    {
      icon: BarChart3,
      title: '売上レポート',
      description:
        '日次・月次の売上を自動集計。曜日別・時間帯別の傾向も見える化され、仕入れ計画や営業戦略に役立ちます。確定申告に必要な帳票出力にも対応しています。',
    },
    {
      icon: CalendarCheck,
      title: '予約管理',
      description:
        '常連さんからの予約をカレンダー形式で管理。席の空き状況を把握でき、ダブルブッキングを防止します。お客様への確認連絡のリマインドも自動で行います。',
    },
  ],
  testimonials: [],
  faqs: [
    {
      question: '導入までどのくらいの期間がかかりますか？',
      answer:
        'お申し込みから最短3営業日でご利用いただけます。直感的な操作画面で、ITに詳しくない方でもすぐにお使いいただけます。',
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
      question: '無料で使えますか？',
      answer:
        'はい、累計500会計まで完全無料でご利用いただけます。クレジットカードの登録も不要で、全機能をお使いいただけます。501会計目からは月額¥30,000（税込）のProプランに移行となります。',
    },
    {
      question: 'ボトルキープの期限管理はできますか？',
      answer:
        'はい、ボトルごとに保管期限を設定でき、期限が近づくと自動で通知されます。期限切れのボトルを一覧表示する機能もあるため、お客様への連絡や在庫整理がスムーズに行えます。',
    },
  ],
  cta: {
    headline: 'スナック向けLunaPos、\nまもなく公開です',
    subheadline:
      'ウェイティングリストにご登録いただくと、サービス開始時に優先的にご案内いたします。',
  },
}
