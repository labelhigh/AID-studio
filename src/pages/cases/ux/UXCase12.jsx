import CaseLayout from '../CaseLayout'
import CaseSection from '../../../components/cases/CaseSection'
import CaseGallery from '../../../components/cases/CaseGallery'
import { uxCases } from '../../../data/uxCasesData'

const data = uxCases[11]
const prev = uxCases[10]
const next = uxCases[12]

export default function UXCase12() {
  return (
    <CaseLayout caseData={data} prev={prev} next={next}>

      <CaseSection label="背景" title="AI 招募的偏見陷阱：當算法強化了人類的偏見">
        <p>
          台灣微軟人力資源部在 2023 年導入了 AI 履歷篩選和面試輔助系統，
          目標是提升招募效率、降低人工偏見。
          但六個月後的內部審查發現了一個令人不安的結果：
          特定背景的候選人被推薦率顯著下降，而這個現象竟與歷史錄取模式高度相關。
          AI 不只是「學習了」人類的偏見，而且在規模化應用下放大了這些偏見。
        </p>
        <p>
          HR 部門面臨了一個設計困境：
          他們無法直接「關掉 AI 偏見」，因為偏見在訓練數據中；
          但也不能完全放棄 AI，因為它確實帶來了效率提升。
          解決方案需要在界面設計層面進行干預。
        </p>
      </CaseSection>

      <CaseGallery
        images={[
          { src: 'https://picsum.photos/seed/hr-research/1200/700', alt: 'HR 招募流程研究' },
          { src: 'https://picsum.photos/seed/hr-bias/600/400', alt: '偏見模式分析' },
          { src: 'https://picsum.photos/seed/hr-interview/600/400', alt: '招募人員訪談' },
        ]}
        caption="圖一：HR 招募流程偏見審計與 AI 偏見模式分析"
      />

      <CaseSection label="研究方法" title="偏見審計：讓隱性偏見變得可見">
        <p>
          我與 D&I（多元共融）顧問合作，進行了為期兩個月的「偏見審計（Bias Audit）」。
          分析了過去兩年 3,200 份 AI 推薦記錄，對比候選人背景、AI 評分和最終錄取結果。
          同時進行了「盲目偏見工作坊（Implicit Bias Workshop）」，
          讓招募人員認識到自己在閱讀履歷時的隱性偏見模式。
        </p>
      </CaseSection>

      <CaseSection label="設計策略" title="「公平性儀表板」：讓偏見無法隱身">
        <p>
          核心設計策略：在界面層面建立「公平性防護欄（Fairness Guardrails）」，
          讓招募人員在決策時始終能看到潛在的偏見警示。
        </p>
        <div className="space-y-3 mt-3">
          {[
            { title: '公平性儀表板', desc: '即時顯示當前招募輪次的各背景候選人比例，當比例偏斜超過閾值時自動警告' },
            { title: '盲選模式', desc: '可選擇性隱藏候選人的姓名、照片、就讀學校、居住地等非相關信息，聚焦能力評估' },
            { title: 'AI 信心分數背景說明', desc: '每個 AI 評分旁邊顯示「此評分主要基於...」的說明，讓招募人員評估該評分是否合適' },
            { title: '多元性補償機制', desc: '當 AI 推薦列表多元性不足時，系統自動補充「符合能力門檻的多元候選人」供參考' },
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
          { src: 'https://picsum.photos/seed/hr-design/1200/750', alt: '公平性儀表板設計' },
          { src: 'https://picsum.photos/seed/hr-blind/600/420', alt: '盲選模式界面' },
          { src: 'https://picsum.photos/seed/hr-diversity/600/420', alt: '多元性補償界面' },
        ]}
        caption="圖二：AI 招募公平性儀表板與偏見緩解設計"
      />

      <CaseSection label="反思" title="AI 倫理不能只靠工程，需要 UX 設計的介入">
        <p>
          這個案例讓我確信：AI 倫理問題不能只在模型訓練層面解決，
          必須在 UX 設計層面同步介入。
          界面設計可以成為「偏見的放大器」，也可以成為「偏見的緩衝器」。
          這取決於設計師是否意識到這個責任，並有意識地設計「公平性機制」。
          在 AI 時代，UX 設計師需要同時是倫理設計師。
        </p>
      </CaseSection>

    </CaseLayout>
  )
}
