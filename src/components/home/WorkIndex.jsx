import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import CategoryFilter from './CategoryFilter'
import WorkCard from './WorkCard'
import ScrollReveal from '../shared/ScrollReveal'
import { uxCases } from '../../data/uxCasesData'
import { uiCases } from '../../data/uiCasesData'
import { threeDCases } from '../../data/threeDCasesData'
import { aiVideoCases } from '../../data/aiVideoCasesData'

const allItems = [
  ...uxCases.map((c) => ({ ...c, category: 'ux' })),
  ...uiCases.map((c) => ({ ...c, category: 'ui' })),
  ...threeDCases.map((c) => ({ ...c, category: '3d' })),
  ...aiVideoCases.map((c) => ({ ...c, category: 'aivideo' })),
]

export default function WorkIndex({ showAll = false }) {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = useMemo(() => {
    const base = activeCategory === 'all' ? allItems : allItems.filter((i) => i.category === activeCategory)
    return showAll ? base : base.slice(0, 6)
  }, [activeCategory, showAll])

  return (
    <section className="py-20">
      <div className="container-content">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="section-label mb-3">作品集</p>
              <h2 className="font-display font-700 text-3xl md:text-4xl text-text-primary">
                精選作品
              </h2>
            </div>
            <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
          </div>
        </ScrollReveal>

        <div className="divider mb-10" />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((item, i) => (
              <WorkCard key={item.id} item={item} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {!showAll && (
          <ScrollReveal delay={0.2}>
            <div className="mt-14 text-center">
              <Link to="/ux" className="btn-outline">
                查看全部 23 件作品
                <span>→</span>
              </Link>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  )
}
