export interface NewsItem {
  id: string
  date: string
  title: string
  summary: string
  category: 'お知らせ' | 'メンテナンス' | 'キャンペーン'
}

export interface UpdateItem {
  id: string
  date: string
  version: string
  title: string
  changes: string[]
}

export const newsItems: NewsItem[] = [
  {
    id: 'news-5',
    date: '2026-02-20',
    title: '【ダミー】春の新規導入キャンペーン開始のお知らせ',
    summary:
      'これはダミーデータです。3月末までに新規ご契約いただいたお客様に、初月無料＋導入サポート無料の特典をご用意しております。',
    category: 'キャンペーン',
  },
  {
    id: 'news-4',
    date: '2026-02-15',
    title: '【ダミー】サーバーメンテナンスのお知らせ（2/28）',
    summary:
      'これはダミーデータです。2月28日(土) 4:00〜6:00にサーバーメンテナンスを実施いたします。メンテナンス中はサービスをご利用いただけません。',
    category: 'メンテナンス',
  },
  {
    id: 'news-3',
    date: '2026-02-01',
    title: '【ダミー】公式LINEアカウント開設のお知らせ',
    summary:
      'これはダミーデータです。お問い合わせやサポートをLINEでも受け付けられるようになりました。お気軽にご連絡ください。',
    category: 'お知らせ',
  },
  {
    id: 'news-2',
    date: '2026-01-15',
    title: '【ダミー】年末年始の営業時間変更について',
    summary:
      'これはダミーデータです。年末年始期間中のサポート対応時間が変更となります。詳しくはこちらをご確認ください。',
    category: 'お知らせ',
  },
  {
    id: 'news-1',
    date: '2026-01-05',
    title: '【ダミー】LunaPos正式リリースのお知らせ',
    summary:
      'これはダミーデータです。本日、LunaPosを正式にリリースいたしました。ナイト業界に特化したPOSシステムをぜひお試しください。',
    category: 'お知らせ',
  },
]

export const updateItems: UpdateItem[] = [
  {
    id: 'update-5',
    date: '2026-02-18',
    version: 'v1.4.0',
    title: '【ダミー】キャスト向けアプリのリニューアル',
    changes: [
      'キャストアプリのUIを全面刷新しました',
      'シフト提出がカレンダーから直接操作できるようになりました',
      '個人売上の日次グラフ表示を追加しました',
    ],
  },
  {
    id: 'update-4',
    date: '2026-02-05',
    version: 'v1.3.2',
    title: '【ダミー】レポート機能の強化',
    changes: [
      '月次レポートにキャスト別の指名推移グラフを追加',
      'CSV出力に顧客来店頻度データを追加',
      '一部環境でレポートが表示されない不具合を修正',
    ],
  },
  {
    id: 'update-3',
    date: '2026-01-20',
    version: 'v1.3.0',
    title: '【ダミー】テーブル管理機能の追加',
    changes: [
      'フロアマップからテーブル状況をリアルタイムに確認可能に',
      'テーブルごとの利用時間と金額を一覧表示',
      '空席状況をスタッフ間で共有する機能を追加',
    ],
  },
  {
    id: 'update-2',
    date: '2026-01-10',
    version: 'v1.2.0',
    title: '【ダミー】決済連携の強化',
    changes: [
      'クレジットカード決済端末との連携に対応',
      'QRコード決済（PayPay・LINE Pay）に対応',
      '会計画面のUI改善',
    ],
  },
  {
    id: 'update-1',
    date: '2026-01-05',
    version: 'v1.0.0',
    title: '【ダミー】LunaPos 正式リリース',
    changes: [
      '指名管理・会計・シフト管理の基本機能を搭載',
      'iPad対応のタッチ操作に最適化',
      '売上レポート・キャストランキング機能を搭載',
    ],
  },
]
