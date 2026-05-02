import CaseLayout from '../CaseLayout'
import CaseSection from '../../../components/cases/CaseSection'
import CaseGallery from '../../../components/cases/CaseGallery'
import { uiCases } from '../../../data/uiCasesData'

const data = uiCases[0]
const prev = null
const next = uiCases[1]

export default function UICase01() {
  return (
    <CaseLayout caseData={data} prev={prev} next={next}>

      <CaseSection label="背景" title="AI 時代需要全新的設計語言">
        <p>
          傳統設計系統是為人與人之間的互動設計的——按鈕、表單、導航、卡片。
          但在 AI 介入的界面中，出現了全新的互動模式：
          串流文字輸出、不確定性呈現、AI 思考狀態、置信度視覺化、
          多輪對話記憶、AI 行動確認……這些模式在傳統設計系統中根本不存在。
        </p>
        <p>
          更重要的是，AI 功能需要一套標準化的「溝通語言」：
          當 AI 在思考時，用什麼樣的動效？
          當 AI 不確定時，用什麼視覺語言表達？
          當 AI 出錯時，如何讓用戶優雅地修正？
          這套語言必須被系統化地定義，才能在產品中保持一致。
        </p>
      </CaseSection>

      <CaseGallery
        images={[
          { src: 'https://picsum.photos/seed/ds-audit/1200/700', alt: 'AI 產品元件審計' },
          { src: 'https://picsum.photos/seed/ds-pattern/600/400', alt: 'AI 互動模式研究' },
          { src: 'https://picsum.photos/seed/ds-token/600/400', label: 'Design Token 架構' },
        ]}
        caption="圖一：AI 產品元件審計與 AI 互動模式研究"
      />

      <CaseSection label="設計系統架構" title="AI-Native 設計系統的三個層次">
        <div className="space-y-4 mt-2">
          {[
            {
              title: 'Foundation Layer（基礎層）',
              items: ['AI 色彩語義系統：用顏色區分 AI 生成內容 vs. 人類內容', 'AI 動效時序標準：串流、思考、確認的動效規範', 'Typography for AI：AI 輸出文字的特殊排版規則'],
            },
            {
              title: 'Component Layer（元件層）',
              items: ['AI 狀態指示器（AI Status Indicator）', '不確定性量表（Confidence Meter）', '串流文字元件（Streaming Text）', 'AI 行動確認對話框（AI Action Confirmation）', '人類覆蓋控制器（Human Override Control）'],
            },
            {
              title: 'Pattern Layer（模式層）',
              items: ['AI Onboarding 模式', 'Human-in-the-Loop 模式', 'AI 推薦接受/拒絕模式', '錯誤修正與學習模式'],
            },
          ].map((layer) => (
            <div key={layer.title} className="p-5 bg-bg-surface border border-border rounded-sm">
              <p className="font-display font-600 text-text-primary mb-3">{layer.title}</p>
              <ul className="space-y-1">
                {layer.items.map((item) => (
                  <li key={item} className="text-text-secondary text-sm flex gap-2">
                    <span className="text-accent flex-shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseSection label="Design.md" title="設計系統文件的新形式：Design.md">
        <p>
          受 README.md 的啟發，我開發了「Design.md」規範——
          一種讓設計決策像代碼文檔一樣可版本化、可協作、可機器讀取的設計文件格式。
        </p>
        <div className="font-mono text-sm p-5 bg-bg-surface border border-border rounded-sm space-y-2 mt-3 overflow-x-auto">
          <p className="text-accent"># AI Confidence Meter</p>
          <p className="text-text-muted">## Purpose</p>
          <p className="text-text-secondary">Communicates AI certainty level to users.</p>
          <p className="text-text-muted mt-2">## Variants</p>
          <p className="text-text-secondary">- `high` (90-100%): Solid fill, no tooltip needed</p>
          <p className="text-text-secondary">- `medium` (70-89%): Striped fill, tooltip with context</p>
          <p className="text-text-secondary">- `low` (&lt;70%): Empty with warning icon, always show tooltip</p>
          <p className="text-text-muted mt-2">## Do</p>
          <p className="text-text-secondary">✓ Always pair with a plain-language explanation</p>
          <p className="text-text-secondary">✓ Link to source data when confidence is low</p>
          <p className="text-text-muted mt-2">## Don't</p>
          <p className="text-text-secondary">✗ Show percentages without context</p>
          <p className="text-text-secondary">✗ Use &lt;70% confidence for autonomous AI actions</p>
        </div>
        <p className="mt-4">
          Design.md 格式讓設計師、工程師、PM 都能在同一份文件中理解設計意圖，
          並且可以隨產品迭代持續更新，避免了傳統設計文件快速過時的問題。
        </p>
      </CaseSection>

      <CaseGallery
        images={[
          { src: 'https://picsum.photos/seed/ds-components/1200/750', alt: 'AI 設計系統元件庫展示' },
          { src: 'https://picsum.photos/seed/ds-figma/600/420', alt: 'Figma 設計系統組織' },
          { src: 'https://picsum.photos/seed/ds-doc/600/420', alt: 'Design.md 文件界面' },
        ]}
        caption="圖二：AI 設計系統元件庫與 Design.md 文件規範"
      />

      <CaseSection label="反思" title="設計系統是產品品質的基礎設施">
        <p>
          建立 AI 設計系統的過程讓我意識到：
          設計系統不只是「可復用的元件集合」，
          更是「設計決策的知識庫」。
          當我們在設計系統中定義「AI 不確定性應該如何呈現」，
          我們實際上是在定義「這個產品如何對待用戶的認知安全」。
          設計系統的每一個決策，都在影響千萬個用戶的認知體驗。
        </p>
      </CaseSection>

    </CaseLayout>
  )
}
