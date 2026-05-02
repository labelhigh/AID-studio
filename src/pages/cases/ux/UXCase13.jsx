import CaseLayout from '../CaseLayout'
import CaseSection from '../../../components/cases/CaseSection'
import CaseGallery from '../../../components/cases/CaseGallery'
import { uxCases } from '../../../data/uxCasesData'

const data = uxCases[12]
const prev = uxCases[11]
const next = uxCases[13]

export default function UXCase13() {
  return (
    <CaseLayout caseData={data} prev={prev} next={next}>

      <CaseSection label="背景" title="城市脈動的指揮中心：操作員如何與 AI 共同掌控台北的交通">
        <p>
          台北市交通管理中心是一個 24 小時運作的高壓環境。
          全市 2,800 個路口、1,200 個監控攝影機、即時公車和計程車數據——
          這些信息流入中心的速度遠超人腦的處理能力。
        </p>
        <p>
          2023 年導入的 AI 交通管理系統能夠自動優化信號燈時序、
          預測壅塞發生點、建議應急疏散路線。
          但系統上線後，操作員的反應出乎意料：
          他們感到「被架空了」——AI 在做決策，他們只是在「監視 AI」，
          而不是「管理城市」。
        </p>
      </CaseSection>

      <CaseGallery
        images={[
          { src: 'https://picsum.photos/seed/city-research/1200/700', alt: '交通管理中心現場研究' },
          { src: 'https://picsum.photos/seed/city-situation/600/400', alt: '情境感知研究' },
          { src: 'https://picsum.photos/seed/city-multi/600/400', alt: '多螢幕環境分析' },
        ]}
        caption="圖一：交通管理中心情境感知研究與多螢幕工作環境分析"
      />

      <CaseSection label="研究方法" title="情境感知研究（Situational Awareness Study）">
        <p>
          我運用航空和核能工業中成熟的「情境感知研究（Situational Awareness Study）」方法，
          評估操作員對整個交通系統的感知狀態。
          研究發現：AI 的全自動化反而降低了操作員的情境感知能力——
          他們不再主動理解交通狀況，而是被動等待 AI 的警報。
          這導致了一個危險狀況：當 AI 出現盲點或異常時，人類操作員無法有效接管。
        </p>
      </CaseSection>

      <CaseSection label="設計策略" title="「共同態勢感知」：讓人和 AI 看同一張地圖">
        <p>
          設計核心：操作員和 AI 不應該有各自的「世界模型」，
          而應該共享一個統一的「城市態勢感知圖（Shared Situational Awareness）」，
          在這個共同視角上進行協作決策。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          {[
            { title: 'AI 決策透明層', desc: 'AI 的每一個自動調整，都在地圖上以「決策軌跡」顯示——它在做什麼、為什麼、預期效果' },
            { title: '人工介入優先佇列', desc: '系統識別哪些情況超出 AI 能力範圍，提前推送給操作員，而不是等 AI 失敗了才切換' },
            { title: '分區主導設計', desc: '將全市劃分為 AI 主導區和人工重點監控區，操作員明確知道自己負責哪裡' },
            { title: '應急接管協議', desc: '當重大事件發生時，系統自動進入「人工主導模式」，AI 退為建議者角色' },
          ].map((item) => (
            <div key={item.title} className="p-4 bg-bg-surface border border-border rounded-sm">
              <p className="font-display font-600 text-text-primary text-sm mb-2">{item.title}</p>
              <p className="text-text-secondary text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseGallery
        images={[
          { src: 'https://picsum.photos/seed/city-design/1200/750', alt: '智慧城市交通管理界面' },
          { src: 'https://picsum.photos/seed/city-map/600/420', alt: '城市態勢感知地圖' },
          { src: 'https://picsum.photos/seed/city-override/600/420', alt: '人工介入界面' },
        ]}
        caption="圖二：共同態勢感知的智慧城市交通管理中心界面"
      />

      <CaseSection label="反思" title="關鍵基礎設施的 AI 設計需要「可靠的降級模式」">
        <p>
          城市交通管理是攸關公共安全的關鍵基礎設施。
          在這個領域的 AI UX 設計，有一個不可妥協的原則：
          必須為 AI 失敗設計「可靠的降級模式（Graceful Degradation）」。
          AI 應該讓系統更好，但它的存在不能讓系統在 AI 失敗時變得更脆弱。
        </p>
      </CaseSection>

    </CaseLayout>
  )
}
