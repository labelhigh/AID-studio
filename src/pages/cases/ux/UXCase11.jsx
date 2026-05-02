import CaseLayout from '../CaseLayout'
import CaseSection from '../../../components/cases/CaseSection'
import CaseGallery from '../../../components/cases/CaseGallery'
import { uxCases } from '../../../data/uxCasesData'

const data = uxCases[10]
const prev = uxCases[9]
const next = uxCases[11]

export default function UXCase11() {
  return (
    <CaseLayout caseData={data} prev={prev} next={next}>

      <CaseSection label="背景" title="假訊息的軍備競賽：設計記者的 AI 真相守門體驗">
        <p>
          在生成式 AI 爆發的 2023-2024 年，假訊息的製造速度已經遠超人工查核的能力。
          台灣事實查核中心每天需要處理超過 200 條可疑訊息，
          但查核人員只有 12 位。每條查核需要平均 4-6 小時的人工調查。
        </p>
        <p>
          他們導入了 AI 輔助查核工具，能夠自動分析文章的來源可信度、
          識別深度偽造圖片、追蹤訊息擴散路徑。
          但查核人員的使用率很低，主要原因是：
          AI 的判斷缺乏「可辯護的證據鏈」，
          無法直接用於公開發布的查核報告。
        </p>
      </CaseSection>

      <CaseGallery
        images={[
          { src: 'https://picsum.photos/seed/media-research/1200/700', alt: '查核流程研究' },
          { src: 'https://picsum.photos/seed/media-workflow/600/400', alt: '查核工作流程映射' },
          { src: 'https://picsum.photos/seed/media-bias/600/400', alt: '認知負擔評估' },
        ]}
        caption="圖一：事實查核工作流程研究與認知負擔分析"
      />

      <CaseSection label="研究方法" title="工作流程映射：理解查核的「可辯護性標準」">
        <p>
          我與 8 位資深查核員進行了「工作流程映射（Workflow Mapping）」研究，
          詳細記錄了每一條查核的完整過程。
          核心發現是查核員有一套嚴格的「可辯護性標準」：
          每一個查核結論必須能夠被讀者獨立驗證。
          AI 工具的問題是，它的判斷雖然準確，但「黑箱式」的邏輯無法轉化為可公開的查核依據。
        </p>
      </CaseSection>

      <CaseSection label="設計策略" title="設計「可引用的 AI 分析」界面">
        <p>
          設計目標：讓 AI 分析的每一個環節都「可引用、可驗證、可解釋」，
          讓查核員能夠直接將 AI 輔助納入查核報告中，而不是另起爐灶。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          {[
            { title: '來源追溯面板', desc: 'AI 的每個分析結論都連結到具體的數據來源：哪個資料庫、哪個時間點、哪個版本的訓練數據' },
            { title: '信心量尺設計', desc: '用「強烈質疑 / 部分疑慮 / 目前無法判斷」三段式量尺，代替二元「真/假」判斷' },
            { title: '圖像真偽分析視覺化', desc: '深度偽造偵測結果以「熱圖覆蓋（Heatmap Overlay）」方式呈現，讓查核員看見 AI 在注意什麼區域' },
            { title: '擴散路徑時間軸', desc: '訊息擴散路徑以可互動的時間軸視覺化，查核員可匯出為報告附件' },
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
          { src: 'https://picsum.photos/seed/media-design/1200/750', alt: 'AI 事實查核界面設計' },
        ]}
        caption="圖二：可引用的 AI 輔助事實查核系統界面"
      />

      <CaseSection label="反思" title="AI 輔助工具的「可辯護性設計」是民主社會的基礎設施">
        <p>
          這個案例讓我思考一個更大的社會問題：
          在假訊息泛濫的時代，AI 事實查核工具是民主社會的重要基礎設施。
          這些工具的 UX 設計不只影響效率，更影響公共信任。
          一個設計不當的 AI 查核工具，可能讓查核員更快得出結論，
          但如果結論無法被公眾驗證，反而會加速信任的崩潰。
        </p>
      </CaseSection>

    </CaseLayout>
  )
}
