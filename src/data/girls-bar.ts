import {
  MonitorOff,
  Wine,
  FileText,
  ClipboardList,
  EyeOff,
  Pointer,
  Calculator,
  LayoutGrid,
  FileBarChart,
  CalendarDays,
  TrendingUp,
} from 'lucide-react'
import type { LPContent } from '../types/index.ts'

export const girlsBarContent: LPContent = {
  businessType: 'girls-bar',
  businessLabel: 'ガールズバー',
  meta: {
    title: 'LunaPos | ガールズバー向けPOSシステム',
    description:
      'ガールズバー経営に特化したPOSシステム。シンプル操作で売上管理もドリンクバック計算もワンストップ。カウンター接客に集中できる環境を実現します。',
  },
  hero: {
    headline: 'ガールズバーの運営を、\nシンプルに',
    subheadline:
      'カウンター接客に集中できるPOS。\nかんたん操作で、売上管理もドリンクバックもこれひとつ。',
    ctaPrimary: '無料で試してみる',
    ctaSecondary: '料金プランを見る',
  },
  painPoints: [
    {
      icon: MonitorOff,
      text: 'レジ操作が複雑で、接客に集中できない',
    },
    {
      icon: Wine,
      text: 'ドリンクバックの計算に手間がかかりすぎる',
    },
    {
      icon: FileText,
      text: '日報・月報の作成に毎日時間を取られている',
    },
    {
      icon: ClipboardList,
      text: 'シフトを紙やLINEで管理していてミスが多い',
    },
    {
      icon: EyeOff,
      text: '売上の見える化ができず、経営判断が感覚頼み',
    },
  ],
  features: [
    {
      icon: Pointer,
      title: 'シンプルPOS',
      description:
        'ワンタップで注文登録が完了。直感的なインターフェースで、初めてのスタッフでもすぐに使いこなせます。接客を止めることなく、スムーズにオーダーを記録できます。',
    },
    {
      icon: Calculator,
      title: 'ドリンクバック自動計算',
      description:
        'ドリンクの注文と同時にバック金額を自動計算。スタッフごとの獲得ドリンク数・バック金額をリアルタイムで確認でき、給与計算の手間を大幅に削減します。',
    },
    {
      icon: LayoutGrid,
      title: 'カウンター・テーブル管理',
      description:
        'カウンター席とテーブル席を画面上でかんたんに管理。各席の利用状況・注文内容を一目で把握でき、効率的なオペレーションを実現します。',
    },
    {
      icon: FileBarChart,
      title: '日報・月報自動生成',
      description:
        '営業終了後、日報がワンクリックで自動生成されます。月次レポートも自動集計されるため、面倒な数字の取りまとめ作業から解放されます。',
    },
    {
      icon: CalendarDays,
      title: 'スタッフシフト管理',
      description:
        'スタッフのシフト希望をアプリで収集し、かんたんにシフト表を作成。急な変更にも柔軟に対応でき、紙やLINEでの煩雑なやり取りが不要になります。',
    },
    {
      icon: TrendingUp,
      title: '売上分析',
      description:
        '時間帯別・曜日別・スタッフ別の売上を自動分析。どの時間帯が稼げるか、どのスタッフが貢献しているかをデータで可視化し、経営判断をサポートします。',
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
    headline: 'ガールズバー向けLunaPos、\nまもなく公開です',
    subheadline:
      'ウェイティングリストにご登録いただくと、サービス開始時に優先的にご案内いたします。',
  },
}
