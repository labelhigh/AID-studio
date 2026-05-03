import { useMemo } from 'react'
import WorkCard from '../components/home/WorkCard'
import ScrollReveal from '../components/shared/ScrollReveal'
import PageTransition from '../components/layout/PageTransition'

const categoryMeta = {
  ux: {
    number: '80%',
    label: 'UX 設計',
    description: '16 個聚焦 AI 時代的使用者體驗設計案例，涵蓋醫療、金融、教育、工業等產業，每個案例都在解決一個核心問題：如何讓人類信任並有效使用 AI。',
  },
  ui: {
    number: 'UI',
    label: 'UI 設計',
    description: '從 AI 設計系統、智能儀表板到對話界面，探索 AI 時代的視覺語言與設計規範。',
  },
  '3d': {
    number: '3D',
    label: '3D 設計',
    description: '用 Spline、Blender 打造的 AI 品牌三維視覺與元宇宙空間體驗設計。',
  },
  aivideo: {
    number: 'AV',
    label: 'AI 影片',
    description: '運用 Runway ML、Sora 等 AI 工具，重新定義品牌影片與動態視覺設計的製作流程。',
  },
}

export default function WorkList({ items, category }) {
  const meta = categoryMeta[category] || {}

  return (
    <PageTransition>
      <section className="pt-28 pb-20">
        <div className="container-content">
          {/* Header */}
          <ScrollReveal>
            <div className="mb-14 border-b border-border pb-10">
              <p className="section-label mb-4">{meta.number}</p>
              <h1 className="font-display font-700 text-[clamp(40px,6vw,80px)] text-text-primary leading-none tracking-tight mb-6">
                {meta.label}
              </h1>
              <p className="text-text-secondary text-lg max-w-2xl leading-relaxed">
                {meta.description}
              </p>
            </div>
          </ScrollReveal>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, i) => (
              <WorkCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
