import CaseLayout from '../CaseLayout'
import CaseSection from '../../../components/cases/CaseSection'
import CaseGallery from '../../../components/cases/CaseGallery'
import { uxCases } from '../../../data/uxCasesData'

const data = uxCases[9]
const prev = uxCases[8]
const next = uxCases[10]

export default function UXCase10() {
  return (
    <CaseLayout caseData={data} prev={prev} next={next}>

      <CaseSection label="背景" title="設計師的身份危機：當 AI 能畫比你還好的圖">
        <p>
          聯合利華台灣品牌設計部門在 2024 年初開始大規模使用 AI 設計工具——
          Adobe Firefly、Midjourney、DALL-E 3。
          工具非常強大，但三個月後，設計總監發現了一個奇怪的問題：
          設計師的產出速度提升了，但品牌一致性急遽下滑。
        </p>
        <p>
          深入調查後發現：設計師陷入了「AI 生成陷阱」——
          他們習慣性地接受 AI 第一個生成的結果，
          因為它「看起來夠好」，但卻失去了對品牌核心精神的堅守。
          更深層的問題是，設計師對自己的創意判斷失去了信心。
        </p>
      </CaseSection>

      <CaseGallery
        images={[
          { src: 'https://picsum.photos/seed/creative-research/1200/700', alt: '設計師工作流程研究' },
          { src: 'https://picsum.photos/seed/creative-session/600/400', alt: '設計工作坊' },
          { src: 'https://picsum.photos/seed/creative-brand/600/400', alt: '品牌一致性審核' },
        ]}
        caption="圖一：設計師 AI 工具使用行為研究與品牌一致性分析"
      />

      <CaseSection label="研究方法" title="設計工作坊：解構「創意自主性」的危機">
        <p>
          我採用「設計工作坊（Design Studio Workshop）」和「日誌研究（Diary Study）」的混合方法，
          讓設計師記錄了四週內每一個使用 AI 工具的決策時刻：
          「為什麼選擇這個 AI 生成結果？」「你改了什麼？為什麼？」「你放棄了什麼？為什麼？」
        </p>
        <p>
          研究揭示了一個設計師「創意自主性（Creative Agency）」的流失模式：
          隨著 AI 工具使用時間增加，設計師的「主動創意決策」比例下降，
          「被動接受 AI 建議」比例上升。
          他們的設計行為從「創造者」逐漸變成「策展人」，最終變成「確認者」。
        </p>
      </CaseSection>

      <CaseSection label="設計策略" title="「創意控制框架」：讓設計師重新主導 AI">
        <p>
          我設計了一套「創意控制框架（Creative Control Framework）」，
          定義了設計師在不同工作階段如何使用 AI 工具，
          以及在哪些決策點必須回歸人類判斷。
        </p>
        <div className="space-y-2 mt-3">
          {[
            { stage: '發想階段（Ideation）', ai: 'AI 廣撒網生成多個方向，設計師選擇方向，不是選擇結果', control: '人主導' },
            { stage: '迭代階段（Iteration）', ai: 'AI 基於設計師指定的方向進行深化，設計師主動修改和引導', control: '人AI協作' },
            { stage: '精煉階段（Refinement）', ai: 'AI 輔助細節處理，設計師進行品牌一致性的最終把關', control: '人主導' },
            { stage: '品牌決策點', ai: 'AI 完全退出，純人類判斷，需要設計總監批准', control: '純人類' },
          ].map((item) => (
            <div key={item.stage} className="flex items-start gap-4 py-3 border-b border-border last:border-0">
              <div className="flex-1">
                <p className="font-display font-600 text-text-primary text-sm mb-1">{item.stage}</p>
                <p className="text-text-secondary text-xs">{item.ai}</p>
              </div>
              <span className="tag flex-shrink-0">{item.control}</span>
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseGallery
        images={[
          { src: 'https://picsum.photos/seed/creative-design/1200/750', alt: '創意控制框架工作流程' },
          { src: 'https://picsum.photos/seed/creative-workflow/600/420', alt: 'AI 設計工具整合界面' },
          { src: 'https://picsum.photos/seed/creative-output/600/420', alt: '設計輸出品質對比' },
        ]}
        caption="圖二：創意控制框架與 AI 設計工作流程整合"
      />

      <CaseSection label="反思" title="AI 時代設計師最重要的能力是「創意判斷力」">
        <p>
          這個案例讓我意識到，AI 工具的快速普及正在改變「設計師的核心能力定義」。
          技術執行能力（能畫圖、能排版）的門檻已被 AI 大幅降低。
          真正有價值的是設計師的「創意判斷力」——知道什麼是好的、什麼是對品牌是對的、
          以及為什麼選擇某個方向而不是另一個。
          這種判斷力只能來自人類的文化理解、情感感知和批判性思維。
        </p>
      </CaseSection>

    </CaseLayout>
  )
}
