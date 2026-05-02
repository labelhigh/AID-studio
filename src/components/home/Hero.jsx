import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const stats = [
  { value: '16', label: 'UX 案例' },
  { value: '3', label: 'UI 作品' },
  { value: '2', label: '3D 設計' },
  { value: '2', label: 'AI 影片' },
]

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-between pt-32 pb-16 border-b border-border">
      <div className="container-content flex-1 flex flex-col justify-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10"
        >
          <span className="section-label">UX / AI 設計師 — 台北</span>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="font-display font-700 leading-none tracking-tight">
            <span className="block text-[clamp(48px,8vw,96px)] text-text-primary">
              體驗設計
            </span>
            <span className="block text-[clamp(48px,8vw,96px)]">
              <span className="text-text-muted">×</span>
              <span className="gradient-text ml-4">人工智能</span>
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-text-secondary text-lg md:text-xl max-w-xl leading-relaxed mb-12 text-balance"
        >
          將 AI 的複雜性轉化為人類可以信任、理解、並真正使用的體驗。
          專注於 AI 時代的 UX 研究、設計系統與人機協作設計。
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-4"
        >
          <Link to="/ux" className="btn-primary">
            探索 UX 作品
            <span>↓</span>
          </Link>
          <Link to="/about" className="btn-outline">
            關於我
          </Link>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="container-content mt-16"
      >
        <div className="divider mb-8" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.08 }}
            >
              <p className="font-display font-700 text-4xl text-text-primary mb-1">{s.value}</p>
              <p className="font-mono text-xs text-text-muted uppercase tracking-widest">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="container-content mt-8 flex justify-end"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1"
        >
          <span className="font-mono text-xs text-text-muted">scroll</span>
          <span className="text-text-muted text-lg">↓</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
