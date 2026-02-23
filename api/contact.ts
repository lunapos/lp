import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { storeName, name, email, phone, message } = await request.json()

  if (!storeName || !name || !email) {
    return Response.json(
      { error: '店舗名・お名前・メールアドレスは必須です' },
      { status: 400 }
    )
  }

  try {
    await resend.emails.send({
      from: 'LunaPos お問い合わせ <noreply@lunapos.jp>',
      to: 'contact@lunapos.jp',
      replyTo: email,
      subject: `【LP問い合わせ】${storeName} - ${name}`,
      html: `
        <h2>LunaPos LPからのお問い合わせ</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">店舗名</td><td style="padding:8px;border:1px solid #ddd;">${storeName}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">お名前</td><td style="padding:8px;border:1px solid #ddd;">${name}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">メール</td><td style="padding:8px;border:1px solid #ddd;">${email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">電話番号</td><td style="padding:8px;border:1px solid #ddd;">${phone || '未入力'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">メッセージ</td><td style="padding:8px;border:1px solid #ddd;">${message || '未入力'}</td></tr>
        </table>
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error('Resend error:', error)
    return Response.json(
      { error: 'メール送信に失敗しました' },
      { status: 500 }
    )
  }
}
