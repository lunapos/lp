import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#0e0e1a] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-[#d4b870] text-lg font-medium mb-2">404</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          ページが見つかりません
        </h1>
        <p className="text-[#9090bb] mb-8">
          お探しのページは存在しないか、移動した可能性があります。
        </p>
        <Link
          to="/cabaret"
          className="inline-flex items-center justify-center font-medium rounded-xl px-8 py-3 text-sm transition-all duration-300 hover:brightness-110 hover:scale-105 active:scale-95"
          style={{
            backgroundColor: '#d4b870',
            color: '#ffffff',
            boxShadow: '0 0 20px rgba(212, 184, 112, 0.3)',
          }}
        >
          トップページへ戻る
        </Link>
      </div>
    </div>
  )
}
