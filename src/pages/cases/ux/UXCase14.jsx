import CaseLayout from '../CaseLayout'
import CaseSection from '../../../components/cases/CaseSection'
import CaseGallery from '../../../components/cases/CaseGallery'
import { uxCases } from '../../../data/uxCasesData'

const data = uxCases[13]
const prev = uxCases[12]
const next = uxCases[14]

export default function UXCase14() {
  return (
    <CaseLayout caseData={data} prev={prev} next={next}>

      <CaseSection label="背景" title="在警報海嘯中找到真正的針：資安分析師的困境">
        <p>
          中華資安國際的 SOC（Security Operations Center）分析師每天面對超過 50,000 個 AI 生成的安全警報。
          導入 AI 威脅偵測系統後，警報數量反而增加了——
          因為 AI 比人類更擅長發現「潛在異常」，
          但也製造了大量的「誤報（False Positives）」。
        </p>
        <p>
          結果是：分析師的工作從「調查真實威脅」變成了「驗證 AI 是否真的發現了威脅」。
          真正的高危威脅在警報洪流中被淹沒，分析師因為過度疲勞開始習慣性地批量關閉警報。
          這正是攻擊者最樂見的情況。
        </p>
      </CaseSection>

      <CaseGallery
        images={[
          { src: 'https://picsum.photos/seed/security-research/1200/700', alt: 'SOC 工作環境研究' },
          { src: 'https://picsum.photos/seed/security-cognitive/600/400', alt: '認知任務分析' },
          { src: 'https://picsum.photos/seed/security-alert/600/400', alt: '警報模式分析' },
        ]}
        caption="圖一：SOC 環境研究、認知負荷評估與警報模式分析"
      />

      <CaseSection label="研究方法" title="認知任務分析：理解分析師如何「看見威脅」">
        <p>
          我使用「認知任務分析（Cognitive Task Analysis）」方法，
          與 6 位資深安全分析師共同解構「識別真實威脅」的思維過程。
          研究發現，資深分析師在看警報時，並不是逐一評估，
          而是先建立「整體威脅圖景」，再尋找「異常模式」。
          但現有界面是以「警報列表」呈現，完全不支持這種整體性的威脅感知方式。
        </p>
      </CaseSection>

      <CaseSection label="設計策略" title="從「警報列表」到「威脅圖景」的界面重構">
        <p>
          核心設計轉移：停止讓分析師逐一「處理警報」，
          改為幫助他們「理解威脅圖景」——看見攻擊的整體脈絡、路徑和意圖。
        </p>
        <div className="space-y-3 mt-3">
          {[
            { title: '威脅關聯圖（Threat Graph）', desc: 'AI 自動將相關警報聚合成「攻擊事件」，以視覺化的攻擊路徑圖呈現，而非孤立的警報列表' },
            { title: '攻擊者視角模式', desc: '系統自動標注「如果這是真實攻擊，攻擊者的下一步可能是...」幫助分析師預判攻擊路徑' },
            { title: '智能警報分類', desc: '基於歷史數據，AI 將警報分為「高可信度/需驗證/低優先」三類，前者需立即處理，後者可批量審閱' },
            { title: '壓力感知儀表板', desc: '當值班分析師的未處理佇列超過閾值時，自動提示需要增援，防止過度疲勞導致的漏報' },
          ].map((item) => (
            <div key={item.title} className="p-4 border-l-2 border-accent/30 pl-5">
              <p className="font-display font-600 text-text-primary text-sm mb-1">{item.title}</p>
              <p className="text-text-secondary text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseGallery
        images={[
          { src: 'https://picsum.photos/seed/security-design/1200/750', alt: 'AI 資安威脅偵測平台設計' },
          { src: 'https://picsum.photos/seed/security-graph/600/420', alt: '威脅關聯圖界面' },
          { src: 'https://picsum.photos/seed/security-triage/600/420', alt: '智能警報分類界面' },
        ]}
        caption="圖二：威脅圖景視覺化與智能警報分類資安平台"
      />

      <CaseSection label="反思" title="高壓、高風險環境的 UX 設計需要「降低決策成本」">
        <p>
          資安 UX 設計教會我一個重要原則：在高壓環境中，
          「降低每個決策的認知成本」比「增加信息量」更重要。
          我們的本能是給分析師更多數據，讓他們做出更好的判斷。
          但研究告訴我們，當人在壓力下、疲勞時，
          更多的信息反而導致更差的決策。
          設計師的工作是「過濾信息」，而不是「展示信息」。
        </p>
      </CaseSection>

    </CaseLayout>
  )
}
