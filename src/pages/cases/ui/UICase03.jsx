import CaseLayout from '../CaseLayout'
import CaseSection from '../../../components/cases/CaseSection'
import CaseGallery from '../../../components/cases/CaseGallery'
import { uiCases } from '../../../data/uiCasesData'

const data = uiCases[2]
const prev = uiCases[1]
const next = null

export default function UICase03() {
  return (
    <CaseLayout caseData={data} prev={prev} next={next}>

      <CaseSection label="背景" title="重新定義人機對話的視覺語言">
        <p>
          ChatGPT 的出現讓「對話框 + 文字輸入」成為 AI 界面的默認模板。
          但這個模板誕生於文字為主的 Web 時代，並不適合所有 AI 使用情境。
          LINE 台灣的 AI 團隊需要設計一套更豐富、更有表達力的對話界面模式庫，
          支持多模態輸入（文字、語音、圖片）、複雜的工具調用呈現、
          以及符合亞洲用戶習慣的對話體驗。
        </p>
      </CaseSection>

      <CaseSection label="設計研究" title="分析 20 個 AI 對話產品的界面模式">
        <p>
          我系統性地分析了全球 20 個主流 AI 對話產品的界面設計，
          整理出現有界面的共同缺陷：
        </p>
        <div className="space-y-2 mt-3">
          {[
            '對話歷史缺乏有意義的組織方式，無法找回重要對話',
            'AI 工具調用（Tool Use）的過程和結果呈現不清晰',
            '多輪對話中的上下文參照關係無法視覺化',
            'AI 的「思考過程」缺乏適當的等待體驗設計',
            '深色/淺色模式切換時，AI 生成內容與用戶輸入的區分度不足',
          ].map((item, i) => (
            <div key={i} className="flex gap-3 py-2">
              <span className="text-text-muted font-mono text-xs mt-0.5 flex-shrink-0">{`0${i+1}`}</span>
              <p className="text-text-secondary text-sm">{item}</p>
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseGallery
        images={[
          { src: 'https://picsum.photos/seed/chat-design/1200/750', alt: 'AI 對話界面模式庫' },
          { src: 'https://picsum.photos/seed/chat-multimodal/600/420', alt: '多模態輸入界面' },
          { src: 'https://picsum.photos/seed/chat-dark/600/420', alt: '深色模式設計' },
        ]}
        caption="圖一：AI 對話界面設計模式庫完整展示"
      />

      <CaseSection label="設計系統" title="36 個對話界面互動模式">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
          {[
            { category: '輸入模式', patterns: ['文字輸入增強', '語音轉文字', '圖片上傳分析', '多模態混合輸入'] },
            { category: 'AI 狀態模式', patterns: ['思考等待動效', '串流輸出動效', '工具調用狀態', '錯誤重試狀態'] },
            { category: '對話組織', patterns: ['上下文書籤', '對話分支', '引用與參照', '對話摘要生成'] },
          ].map((cat) => (
            <div key={cat.category} className="p-5 bg-bg-surface border border-border rounded-sm">
              <p className="font-display font-600 text-text-primary text-sm mb-3">{cat.category}</p>
              <ul className="space-y-1">
                {cat.patterns.map((p) => (
                  <li key={p} className="text-text-secondary text-xs flex gap-2">
                    <span className="text-accent">—</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CaseSection>

    </CaseLayout>
  )
}
