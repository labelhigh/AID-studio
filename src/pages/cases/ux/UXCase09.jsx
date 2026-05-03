import CaseLayout from '../CaseLayout'
import CaseSection from '../../../components/cases/CaseSection'
import CaseGallery from '../../../components/cases/CaseGallery'
import { uxCases } from '../../../data/uxCasesData'

const data = uxCases[8]
const prev = uxCases[7]
const next = uxCases[9]

export default function UXCase09() {
  return (
    <CaseLayout caseData={data} prev={prev} next={next}>

      <CaseSection label="背景" title="採購經理的直覺 vs. AI 的預測：一場沒有勝者的對抗">
        <p>
          全聯福利中心是台灣最大的零售連鎖，每天管理超過 10,000 個 SKU 的庫存。
          2023 年導入的 AI 需求預測系統，聲稱可以將庫存預測準確率提升到 92%。
          但六個月後，採購部門的使用率只有 35%，
          大多數採購經理仍然依賴自己多年的直覺判斷做訂貨決策。
        </p>
        <p>
          資深採購經理的直覺往往源自多年積累的市場洞察，
          他們不是在「反對」AI，而是在「保護」自己認為 AI 看不到的東西：
          地區文化差異、節慶習俗、本地消費者習慣，
          以及某種難以言說的「市場感覺」。
        </p>
      </CaseSection>

      <CaseGallery
        images={[
          { src: 'https://picsum.photos/seed/supply-research/1200/700', alt: '採購部門田野研究' },
          { src: 'https://picsum.photos/seed/supply-mental/600/400', alt: '心理模型訪談' },
          { src: 'https://picsum.photos/seed/supply-decision/600/400', alt: '決策流程分析' },
        ]}
        caption="圖一：採購部門工作流程研究與 AI 信任阻力分析"
      />

      <CaseSection label="研究方法" title="心理模型研究：理解直覺的結構">
        <p>
          我使用「心理模型訪談法（Mental Model Interview）」，
          與 22 位採購經理深度對話，試圖理解他們的「直覺」到底是如何構成的。
          發現他們的決策並不是純感性的，而是有嚴密內部邏輯的——
          只是這個邏輯是隱性的、無法被現有 AI 系統看見的。
        </p>
        <p>
          核心洞察：採購經理不是在「拒絕數據」，
          而是在「補充 AI 看不到的上下文」。
          解決方案不是讓 AI 取代他們的判斷，
          而是設計一個讓 AI 和直覺可以「對話」的界面。
        </p>
      </CaseSection>

      <CaseSection label="設計策略" title="設計「AI + 直覺」的協作預測平台">
        <p>
          核心設計創新：「情境覆蓋（Context Override）」功能。
          採購經理可以在 AI 預測旁邊，手動添加系統性的上下文因子——
          節慶、天氣、本地活動、競爭對手促銷——然後 AI 重新計算預測結果。
          這個設計讓采購經理的直覺變成了「可量化的輸入」，而不是「可被 AI 否定的感覺」。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {[
            { title: '不確定性視覺化', desc: 'AI 預測結果以「預測區間」而非「單一數字」呈現，讓採購理解 AI 的信心邊界' },
            { title: '情境覆蓋工具', desc: '結構化的上下文因子輸入面板，讓直覺判斷成為 AI 的「輸入參數」' },
            { title: '預測回顧儀表板', desc: '定期回顧 AI 預測 vs. 實際銷量 vs. 人工調整的差距，讓採購從歷史中學習' },
            { title: '場景模擬器', desc: '「如果我訂 X 量會發生什麼」的情境模擬，讓決策前就能預見不同選擇的後果' },
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
          { src: 'https://picsum.photos/seed/supply-design/1200/750', alt: 'AI 需求預測協作界面' },
        ]}
        caption="圖二：AI + 情境覆蓋的協作供應鏈預測平台"
      />

      <CaseSection label="反思" title="「人類知識」是 AI 系統最被忽視的輸入">
        <p>
          這個案例讓我重新思考「AI 系統的知識邊界」。
          資深採購經理的直覺，實際上是幾十年人類知識的結晶。
          一個好的 AI 系統設計，不應該讓這些知識被邊緣化，
          而應該設計一個通道，讓人類的隱性知識能夠流入 AI 的決策過程，
          讓兩者真正協作，而不是對抗。
        </p>
      </CaseSection>

    </CaseLayout>
  )
}
