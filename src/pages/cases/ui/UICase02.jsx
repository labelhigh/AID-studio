import CaseLayout from '../CaseLayout'
import CaseSection from '../../../components/cases/CaseSection'
import CaseGallery from '../../../components/cases/CaseGallery'
import { uiCases } from '../../../data/uiCasesData'

const data = uiCases[1]
const prev = uiCases[0]
const next = uiCases[2]

export default function UICase02() {
  return (
    <CaseLayout caseData={data} prev={prev} next={next}>

      <CaseSection label="背景" title="讓 AI 數據洞察變成每個人都能讀懂的故事">
        <p>
          AI 分析系統可以生成令人眼花撩亂的洞察，
          但這些洞察如果以技術人員的視角呈現，
          對決策層來說毫無意義。
          91APP 的數據部門需要一套儀表板設計套件，
          能夠將 AI 的複雜分析結果，轉化為業務決策者可以直接使用的視覺化呈現。
        </p>
      </CaseSection>

      <CaseSection label="設計挑戰" title="AI 數據視覺化的五個特殊問題">
        <div className="space-y-3 mt-2">
          {[
            { title: '不確定性呈現', desc: 'AI 預測帶有置信區間，傳統圖表無法優雅地呈現「可能範圍」而非「精確數字」' },
            { title: '異常高亮', desc: 'AI 偵測到的異常需要在視覺上突出，但不能造成「異常即問題」的誤解' },
            { title: '時間序列與預測整合', desc: '歷史數據和 AI 預測必須在同一個視覺空間中清晰區分，但又保持視覺連貫性' },
            { title: '鑽取層次設計', desc: 'AI 洞察通常有多個層次的細節，設計必須支持從摘要到細節的流暢鑽取' },
            { title: '更新頻率視覺化', desc: '即時更新的 AI 數據，如何讓用戶知道「這個數字是幾秒前的」而不造成焦慮' },
          ].map((item) => (
            <div key={item.title} className="flex gap-4 py-3 border-b border-border last:border-0">
              <span className="text-accent font-mono text-xs mt-0.5 flex-shrink-0">—</span>
              <div>
                <p className="font-display font-600 text-text-primary text-sm mb-1">{item.title}</p>
                <p className="text-text-secondary text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseGallery
        images={[
          { src: 'https://picsum.photos/seed/dashboard-design/1200/750', alt: 'AI 儀表板套件設計展示' },
          { src: 'https://picsum.photos/seed/dashboard-chart/600/420', alt: 'AI 預測圖表元件' },
          { src: 'https://picsum.photos/seed/dashboard-anomaly/600/420', alt: '異常偵測視覺化' },
        ]}
        caption="圖一：AI 智能分析儀表板套件完整展示"
      />

      <CaseSection label="設計解法" title="48 個專為 AI 數據設計的視覺化元件">
        <p>
          儀表板套件包含 48 個元件，分為五個類別，
          每個元件都針對 AI 數據的特殊需求進行了定制設計。
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
          {[
            { count: '12', label: '預測圖表元件', desc: '含置信區間的折線圖、面積圖' },
            { count: '8', label: '異常偵測元件', desc: '熱圖、散點圖、觸發指示器' },
            { count: '10', label: '即時數據元件', desc: '計量表、脈動指示器、數字滾動' },
            { count: '9', label: 'AI 洞察卡片', desc: '摘要卡、趨勢卡、警示卡' },
            { count: '9', label: '篩選與鑽取', desc: '時間軸篩選器、階層導航' },
          ].map((item) => (
            <div key={item.label} className="p-4 bg-bg-surface border border-border rounded-sm text-center">
              <p className="font-display font-700 text-3xl text-accent mb-1">{item.count}</p>
              <p className="font-display font-600 text-text-primary text-xs mb-1">{item.label}</p>
              <p className="text-text-muted text-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </CaseSection>

    </CaseLayout>
  )
}
