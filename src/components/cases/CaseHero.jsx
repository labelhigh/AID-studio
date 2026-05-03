import { motion } from 'framer-motion'
import TagBadge from '../shared/TagBadge'

export default function CaseHero({ caseData }) {
  const { number, title, subtitle, client, year, duration, role, industry, tags, cover, metrics } = caseData

  return (
    <section className="pt-28 pb-16 border-b border-border">
      <div className="container-content">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 mb-10"
        >
          <span className="case-number">{number}</span>
          <span className="text-text-muted text-xs">—</span>
          <span className="font-mono text-xs text-text-muted">{industry}</span>
        </motion.div>

        {/* Title block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10"
        >
          <h1 className="font-display font-700 text-[clamp(32px,5vw,64px)] leading-tight tracking-tight text-text-primary mb-4">
            {title}
          </h1>
          <p className="text-text-secondary text-xl md:text-2xl max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* Meta grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 py-6 border-y border-border"
        >
          {[
            { label: '客戶', value: client },
            { label: '年份', value: year },
            { label: '時長', value: duration },
            { label: '職位', value: role },
          ].map((meta) => (
            <div key={meta.label}>
              <p className="section-label mb-1">{meta.label}</p>
              <p className="text-text-primary text-sm font-display font-500">{meta.value}</p>
            </div>
          ))}
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {tags.map((tag) => (
            <TagBadge key={tag} label={tag} />
          ))}
        </motion.div>

        {/* Cover image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-sm overflow-hidden aspect-[16/8] md:aspect-[16/7]"
        >
          <img
            src={cover}
            alt={title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}
