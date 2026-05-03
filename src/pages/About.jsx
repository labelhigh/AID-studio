import { motion } from 'framer-motion'
import ScrollReveal from '../components/shared/ScrollReveal'
import PageTransition from '../components/layout/PageTransition'
import { Link } from 'react-router-dom'

const skills = [
  { category: 'UX 設計', items: ['使用者研究', '資訊架構', '原型設計', '可用性測試', '服務設計', '對話設計'] },
  { category: 'AI 設計', items: ['可解釋 AI 設計', '信任設計', 'Human-in-the-Loop', 'AI 倫理設計', '對話 AI UX', 'AI 設計系統'] },
  { category: 'UI 設計', items: ['設計系統', 'Design.md', '視覺設計', '動效設計', '數據視覺化', '無障礙設計'] },
  { category: '工具', items: ['Figma', 'FigJam', 'Framer', 'Spline', 'Blender', 'Runway ML', 'After Effects', 'Miro'] },
]

const experience = [
  { year: '2024 — 目前', role: 'Lead UX Designer', company: '自由接案 / 設計顧問', desc: '專注於 AI 時代的使用者體驗設計，服務台灣各大企業和新創的 AI 產品導入計畫' },
  { year: '2022 — 2024', role: 'Senior UX Designer', company: 'ASUS AI 產品部門', desc: '主導多個 AI 輔助產品的 UX 設計，建立 AI UX 設計規範和設計系統' },
  { year: '2020 — 2022', role: 'UX/UI Designer', company: '創業公司 × 2', desc: '在早期新創環境中建立完整的設計流程，從研究到上線的全鏈路設計' },
  { year: '2018 — 2020', role: 'UI Designer', company: '數位媒體公司', desc: '視覺設計、動效設計、品牌識別設計' },
]

export default function About() {
  return (
    <PageTransition>
      <section className="pt-28 pb-20">
        <div className="container-content">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 border-b border-border pb-12"
          >
            <p className="section-label mb-4">關於</p>
            <h1 className="font-display font-700 text-[clamp(40px,6vw,80px)] text-text-primary leading-none tracking-tight mb-8">
              Lin Yu
            </h1>
            <p className="text-text-secondary text-xl md:text-2xl max-w-2xl leading-relaxed">
              UX/AI 設計師。在人與人工智能之間的空間工作，
              設計信任、透明度和人類主導權。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
            {/* Photo */}
            <ScrollReveal className="md:col-span-4">
              <div className="aspect-[4/5] rounded-sm overflow-hidden">
                <img
                  src="https://picsum.photos/seed/designer-portrait/600/750"
                  alt="Lin Yu"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>

            {/* Bio */}
            <ScrollReveal delay={0.15} className="md:col-span-8 flex flex-col justify-center">
              <div className="space-y-5 text-text-secondary leading-relaxed text-base md:text-lg">
                <p>
                  我在 AI 快速改變各產業的浪潮中成長為設計師。
                  我的核心問題始終是：<span className="text-text-primary">人們如何與他們無法完全理解的系統建立信任？</span>
                </p>
                <p>
                  過去六年，我為台灣的醫療、金融、法律、教育、農業等不同產業設計 AI 系統的使用者體驗。
                  每一個案例都讓我更深刻地理解：AI 的能力只是可能性，
                  而 UX 設計決定了這個可能性是否真正落地。
                </p>
                <p>
                  我相信 AI 時代最重要的設計挑戰不是「AI 能做什麼」，
                  而是「AI 應該如何與人協作」。
                  這需要設計師同時理解技術、心理學、倫理學，
                  以及最重要的——真實的人類需求。
                </p>
                <p>
                  當我不在設計時，我在讀認知科學的書、煮咖啡、
                  或者試圖向我媽媽解釋為什麼她應該信任 AI 推薦的食譜。
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="mailto:linyu@design.studio" className="btn-primary">
                  寄信聯絡
                  <span>→</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn-outline">
                  LinkedIn
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Skills */}
          <ScrollReveal>
            <div className="mb-20">
              <p className="section-label mb-8">專業技能</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.map((group) => (
                  <div key={group.category}>
                    <p className="font-display font-600 text-text-primary text-sm mb-4">{group.category}</p>
                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li key={item} className="text-text-secondary text-sm flex gap-2">
                          <span className="text-text-muted">—</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <div className="divider mb-16" />

          {/* Experience */}
          <ScrollReveal>
            <p className="section-label mb-8">工作經歷</p>
            <div className="space-y-0">
              {experience.map((exp, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-b border-border last:border-0">
                  <div className="md:col-span-3">
                    <p className="font-mono text-xs text-text-muted">{exp.year}</p>
                  </div>
                  <div className="md:col-span-9">
                    <p className="font-display font-600 text-text-primary mb-1">{exp.role}</p>
                    <p className="font-display font-500 text-accent text-sm mb-2">{exp.company}</p>
                    <p className="text-text-secondary text-sm leading-relaxed">{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <div className="divider my-16" />

          {/* Design Philosophy */}
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="section-label mb-6">設計哲學</p>
              <h2 className="font-display font-700 text-3xl md:text-4xl text-text-primary leading-tight mb-8">
                好的 UX 設計是讓<br />
                <span className="gradient-text">技術消失在體驗中</span>
              </h2>
              <div className="space-y-5 text-text-secondary leading-relaxed">
                <p>
                  當一個用戶在使用 AI 工具時，感受到的不是「我在使用 AI」，
                  而是「我達到了我的目標」——那才是好的 AI UX 設計。
                </p>
                <p>
                  在 AI 時代，設計師最重要的工作不是讓用戶「對 AI 留下深刻印象」，
                  而是讓用戶「因為 AI 而對自己留下深刻印象」。
                  當 AI 讓人更聰明、更有能力、更有信心時，
                  它才真正達到了它的設計目的。
                </p>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>
    </PageTransition>
  )
}
