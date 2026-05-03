import CaseLayout from '../CaseLayout'
import CaseSection from '../../../components/cases/CaseSection'
import CaseGallery from '../../../components/cases/CaseGallery'
import { uxCases } from '../../../data/uxCasesData'

const data = uxCases[4]
const prev = uxCases[3]
const next = uxCases[5]

export default function UXCase05() {
  return (
    <CaseLayout caseData={data} prev={prev} next={next}>

      <CaseSection label="背景" title="當 AI 說「不准貸款」，分析師說「為什麼？」">
        <p>
          國泰世華銀行的風控部門在 2023 年部署了 AI 信用風險評估模型，
          能夠基於數百個維度的數據，在幾秒內對貸款申請作出風險評估。
          模型的整體準確率高達 94%，是業界頂尖水準。
        </p>
        <p>
          但在實際運作中，出現了兩種極端行為：
          資淺分析師完全依賴 AI，幾乎不做獨立判斷；
          資深分析師完全忽略 AI，繼續用舊方法工作。
          這兩種行為都造成了問題：前者放棄了人類判斷的價值，後者浪費了 AI 的能力。
        </p>
      </CaseSection>

      <CaseGallery
        images={[
          { src: 'https://picsum.photos/seed/finance-research/1200/700', alt: '風控分析師工作觀察' },
          { src: 'https://picsum.photos/seed/finance-eye/600/400', alt: '眼動追蹤研究結果' },
          { src: 'https://picsum.photos/seed/finance-decision/600/400', alt: '決策流程映射' },
        ]}
        caption="圖一：風控分析師決策行為研究與眼動追蹤分析"
      />

      <CaseSection label="研究方法" title="眼動追蹤：分析師實際在「看什麼」">
        <p>
          我們使用眼動追蹤設備，記錄了 16 位分析師在使用 AI 界面時的視覺注意力分配。
          結合情境訪談和決策日誌，得到了一個關鍵發現：
        </p>
        <p>
          分析師在做決策時，他們的注意力 67% 集中在「AI 最終結論」（批准/拒絕），
          只有 11% 注意到了 AI 的「風險因子說明」，
          而幾乎沒有人（3%）閱讀了 AI 的「置信區間」說明。
          界面設計本身在引導分析師走向「一鍵依賴」的行為模式。
        </p>
      </CaseSection>

      <CaseSection label="設計策略" title="Human-in-the-Loop：讓分析師重新坐進駕駛座">
        <p>
          設計目標：重新平衡人類判斷與 AI 分析之間的「主導權」，
          讓 AI 成為分析師的強大工具，而不是讓分析師成為 AI 的橡皮圖章。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          {[
            { title: '強制審查節點', desc: '高風險案件必須展開「推理面板」才能提交決策，防止未閱讀直接通過' },
            { title: '可視化置信區間', desc: '用視覺化的「風險分佈圖」代替單一數字，讓分析師理解 AI 的不確定性邊界' },
            { title: '決策稽核軌跡', desc: '每一筆決策都記錄「人工判斷」與「AI 建議」的差異，形成可學習的知識庫' },
            { title: '異常案件推播', desc: '當 AI 判斷與人工歷史判斷出現重大差異時，主動推播給資深分析師複審' },
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
          { src: 'https://picsum.photos/seed/finance-design/1200/750', alt: 'Human-in-the-Loop 風控界面' },
          { src: 'https://picsum.photos/seed/finance-viz/600/420', alt: '風險分佈視覺化' },
          { src: 'https://picsum.photos/seed/finance-audit/600/420', alt: '決策稽核軌跡界面' },
        ]}
        caption="圖二：Human-in-the-Loop 金融風控決策支援界面"
      />

      <CaseSection label="反思" title="設計師需要理解「決策科學」">
        <p>
          這個案例讓我深刻理解到，設計 AI 決策支援工具的設計師，
          必須具備基本的「決策科學（Decision Science）」知識：
          人類如何在不確定性下做決策、哪些因素會導致認知偏差、
          信息呈現的順序和格式如何影響判斷品質。
        </p>
        <p>
          最終，誤判率降低了 38%。但這不只是因為 AI 更準了，
          而是因為人類分析師的判斷品質也提升了。
          好的設計讓人和 AI 都變得更好。
        </p>
      </CaseSection>

    </CaseLayout>
  )
}
