import CaseLayout from '../CaseLayout'
import CaseSection from '../../../components/cases/CaseSection'
import CaseGallery from '../../../components/cases/CaseGallery'
import { uxCases } from '../../../data/uxCasesData'

const data = uxCases[1]
const prev = uxCases[0]
const next = uxCases[2]

export default function UXCase02() {
  return (
    <CaseLayout caseData={data} prev={prev} next={next}>

      <CaseSection label="背景" title="5,000 人組織的 AI 導入困境">
        <p>
          中華電信企業部門在 2023 年底導入了內部 AI 知識助手——一個可以回答員工問題、
          查找內部文件、協助撰寫報告的企業 AI 平台。
          導入後第一個月，系統使用率只有 8%。
          IT 部門給的解釋是「員工不習慣」，但我的調查發現問題遠比這複雜。
        </p>
        <p>
          這不是一個技術採用問題，而是一個組織文化與心理安全問題：
          員工害怕「依賴 AI 被認為不專業」，
          主管害怕「AI 的答案出錯讓自己承擔責任」，
          IT 部門害怕「過度承諾 AI 能力而被問責」。
        </p>
      </CaseSection>

      <CaseGallery
        images={[
          { src: 'https://picsum.photos/seed/enterprise-field/1200/700', alt: '員工行為觀察研究' },
          { src: 'https://picsum.photos/seed/enterprise-interview/600/400', alt: '深度訪談' },
          { src: 'https://picsum.photos/seed/enterprise-map/600/400', alt: '組織阻力圖譜' },
        ]}
        caption="圖一：多層次利害關係人研究與組織採用阻力圖譜"
      />

      <CaseSection label="研究方法" title="繪製 AI 採用阻力地圖">
        <p>
          我運用「利害關係人圖譜（Stakeholder Mapping）」和「日誌研究（Diary Study）」，
          追蹤了三個部門共 45 名員工連續四週的 AI 工具使用行為。
          同時進行了 20 場一對一深度訪談，涵蓋基層員工、中階主管和 C-level 高管。
        </p>
        <p>研究發現了三個截然不同的使用者心理模型：</p>
        <div className="space-y-3 mt-2">
          {[
            { type: '「技術擔憂者」(38%)', desc: '擔心 AI 輸出不準確，不敢依賴。需要：可驗證性設計 + 信心校準' },
            { type: '「角色威脅者」(29%)', desc: '擔心自己的專業知識被 AI 取代，故意不使用。需要：AI 作為工具而非替代者的定位設計' },
            { type: '「價值懷疑者」(33%)', desc: '不清楚 AI 能幫什麼，試用後沒看到效果就放棄。需要：明確的價值感知設計 + onboarding 流程' },
          ].map((item) => (
            <div key={item.type} className="p-4 border-l-2 border-accent/40 pl-5">
              <p className="font-display font-600 text-text-primary text-sm mb-1">{item.type}</p>
              <p className="text-text-secondary text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseSection label="設計策略" title="漸進式信任建構的 Onboarding 體驗">
        <p>
          核心設計策略是「信任階梯（Trust Ladder）」：
          不強迫員工一次接受 AI 的全部能力，
          而是設計一個循序漸進的體驗路徑，讓員工在低風險任務中建立信心，
          再逐步擴展到更重要的工作。
        </p>
        <p>
          第一階段（第 1-2 週）：只展示「資訊查詢」功能——讓員工用 AI 查找公司內部政策文件。
          成功率高、風險低、能快速感受到價值。
        </p>
        <p>
          第二階段（第 3-4 週）：引入「草稿輔助」——AI 幫員工生成報告草稿，員工負責審閱修改。
          明確的角色分工讓員工感受到自己仍然「在主導」。
        </p>
        <p>
          第三階段（第 5 週以後）：開放「決策建議」功能，但配合完整的「AI 推理透明化」設計，
          讓員工理解 AI 建議的依據。
        </p>
      </CaseSection>

      <CaseGallery
        images={[
          { src: 'https://picsum.photos/seed/enterprise-design/1200/750', alt: '信任階梯 Onboarding 設計' },
          { src: 'https://picsum.photos/seed/enterprise-flow/600/420', alt: 'AI 助手對話界面' },
          { src: 'https://picsum.photos/seed/enterprise-dashboard/600/420', alt: '使用進度儀表板' },
        ]}
        caption="圖二：信任階梯 Onboarding 流程設計與 AI 助手界面"
      />

      <CaseSection label="AI × UX 流程" title="重新定義「AI 人格設計」">
        <p>
          這個案例讓我意識到，企業 AI 助手的「人格設計」是一個被嚴重忽視的設計領域。
          我們為 AI 設計了一套明確的溝通原則：
        </p>
        <div className="font-mono text-sm p-5 bg-bg-surface border border-border rounded-sm space-y-2">
          <p className="text-accent">// AI 助手溝通原則</p>
          <p className="text-text-secondary">✓ 永遠說明「為什麼」，不只說「是什麼」</p>
          <p className="text-text-secondary">✓ 主動說明自己的不確定性</p>
          <p className="text-text-secondary">✓ 建議而非指令——保留用戶的決策主權</p>
          <p className="text-text-secondary">✓ 承認錯誤比掩蓋錯誤更能建立信任</p>
          <p className="text-text-secondary">✓ 用員工的語言說話，而非技術術語</p>
        </div>
        <p>
          這些原則後來被寫入了 AI 系統的 Prompt Engineering 規範，
          成為企業 AI 產品設計的標準化指引。
        </p>
      </CaseSection>

      <CaseSection label="反思" title="組織變革的 UX 設計是長期工程">
        <p>
          這個案例最大的教訓是：企業 AI 導入不只是產品設計問題，也是組織設計問題。
          UX 設計師必須理解組織心理學，設計的不只是使用者界面，
          而是整個組織與新技術之間的關係轉型體驗。
        </p>
        <p>
          最終使用率從 8% 提升到 71%，但我認為更重要的成果是：
          員工開始把 AI 視為「同事」而非「威脅」。
          這種認知轉變才是真正的設計成果。
        </p>
      </CaseSection>

    </CaseLayout>
  )
}
