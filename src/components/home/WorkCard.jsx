import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function WorkCard({ item, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
    >
      <Link
        to={`/cases/${item.id}`}
        className="group block bg-bg-surface border border-border rounded-sm overflow-hidden hover:border-border-light transition-all duration-300 hover:-translate-y-1"
      >
        {/* Image */}
        <div className="relative overflow-hidden aspect-[16/10]">
          <img
            src={item.thumb}
            alt={item.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-surface/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {/* Hover arrow */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <span className="w-8 h-8 bg-accent text-bg-primary flex items-center justify-center text-sm font-bold rounded-sm">
              →
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="case-number">{item.number}</span>
            <span className="font-mono text-xs text-text-muted">{item.year}</span>
          </div>
          <h3 className="font-display font-600 text-base text-text-primary leading-snug mb-2 group-hover:text-accent transition-colors">
            {item.title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed line-clamp-2 mb-4">
            {item.subtitle}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {item.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="tag text-[10px]">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
