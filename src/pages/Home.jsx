import Hero from '../components/home/Hero'
import WorkIndex from '../components/home/WorkIndex'
import ScrollReveal from '../components/shared/ScrollReveal'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <Hero />
      <WorkIndex showAll={false} />

      {/* AI & UX Philosophy teaser */}
      <section className="py-20 border-b border-border">
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <ScrollReveal className="md:col-span-5">
              <p className="section-label mb-4">設計理念</p>
              <h2 className="font-display font-700 text-3xl md:text-4xl text-text-primary leading-tight mb-6">
                AI 不是取代設計師，<br />
                而是讓設計師<br />
                <span className="gradient-text">放大人性</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15} className="md:col-span-7">
              <div className="space-y-5 text-text-secondary leading-relaxed mt-8 md:mt-12">
                <p>
                  在 AI 急速滲透各產業的當下，真正的挑戰不是「AI 能做什麼」，
                  而是「人們如何與 AI 建立信任、協作、並共同做出更好的決策」。
                </p>
                <p>
                  我的工作站在人與 AI 之間的橋樑上。從醫療診斷到法律分析，
                  從製造業品控到農業管理——每一個案例的核心都是相同的問題：
                  如何讓 AI 的能力真正落地？
                </p>
                <p>
                  答案在 UX 設計裡：信任的建立、透明度的呈現、
                  控制感的設計、以及人類判斷的保護。
                </p>
              </div>
              <div className="mt-8">
                <Link to="/about" className="btn-outline">
                  了解我的設計方法 →
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24">
        <div className="container-content text-center">
          <ScrollReveal>
            <p className="section-label mb-4">開始對話</p>
            <h2 className="font-display font-700 text-3xl md:text-5xl text-text-primary mb-6">
              有一個 AI 設計挑戰？
            </h2>
            <p className="text-text-secondary text-lg mb-10 max-w-lg mx-auto">
              我很樂意探討如何透過 UX 設計讓你的 AI 產品真正被人們接受和使用。
            </p>
            <a href="mailto:linyu@design.studio" className="btn-primary text-base">
              寄信給我
              <span>→</span>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
