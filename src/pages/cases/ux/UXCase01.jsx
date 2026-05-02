import CaseLayout from '../CaseLayout'
import CaseSection from '../../../components/cases/CaseSection'
import CaseGallery from '../../../components/cases/CaseGallery'
import { uxCases } from '../../../data/uxCasesData'

const data = uxCases[0]
const prev = null
const next = uxCases[1]

export default function UXCase01() {
  return (
    <CaseLayout caseData={data} prev={prev} next={next}>

      <CaseSection label="背景" title="放射科醫師的信任危機">
        <p>
          2023 年，台大醫院影像科導入了一套 AI 輔助診斷系統，能夠從 CT 和 MRI 影像中自動標記潛在異常區域。
          理論上，這套系統可以幫助醫師更快、更準確地完成診斷。
          然而上線三個月後，數據顯示令人沮喪的結果：AI 的建議採納率僅有 23%，
          大多數放射科醫師表示他們「不知道如何判斷 AI 到底對不對」。
        </p>
        <p>
          更深層的問題浮現了：醫師不是不信任 AI 的能力，而是不信任自己在 AI 輔助下做出的判斷。
          這是一個關於「認知信任」的 UX 問題，不是一個算法問題。
        </p>
      </CaseSection>

      <CaseGallery
        images={[
          { src: 'https://picsum.photos/seed/healthcare-research/1200/700', alt: '放射科工作流程觀察' },
          { src: 'https://picsum.photos/seed/healthcare-2/600/400', alt: 'AI 診斷界面現況' },
          { src: 'https://picsum.photos/seed/healthcare-3/600/400', alt: '醫師訪談記錄' },
        ]}
        caption="圖一：放射科醫師工作環境與現有 AI 診斷界面的觀察研究"
      />

      <CaseSection label="研究方法" title="理解信任的斷裂點在哪裡">
        <p>
          我與一位醫療社會學研究員合作，進行了為期六週的情境訪談。
          研究對象包括 12 位放射科主治醫師和 8 位住院醫師，涵蓋不同年資和科別。
          核心研究問題只有一個：「在什麼情況下，你會跟著 AI 建議走？在什麼情況下，你會拒絕它？」
        </p>
        <p>
          透過「決策思考放聲法（Think-aloud Protocol）」，我們記錄了醫師在面對 AI 建議時的真實心理歷程。
          研究發現三個關鍵的信任斷裂點：
        </p>
        <ul className="list-none space-y-3 pl-4 border-l border-border">
          <li className="text-text-secondary"><span className="text-accent font-display font-600">01 —</span> AI 標記的置信度數字（如「87%」）對醫師來說毫無意義，因為沒有參考基準</li>
          <li className="text-text-secondary"><span className="text-accent font-display font-600">02 —</span> 系統沒有說明它「看到了什麼」，只告訴醫師結果，導致醫師無從驗證</li>
          <li className="text-text-secondary"><span className="text-accent font-display font-600">03 —</span> 當 AI 標記了醫師認為「明顯不是問題」的區域時，整個系統的可信度在醫師心中瞬間崩潰</li>
        </ul>
      </CaseSection>

      <CaseSection label="設計策略" title="從「告訴你答案」到「幫你思考」">
        <p>
          根本的設計策略轉移是：停止讓 AI 扮演「診斷者」的角色，
          改為讓 AI 扮演一個「資深同事」——它會指出值得注意的地方，並說明為什麼值得注意。
        </p>
        <p>
          我們設計了三個核心的設計原則：
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
          {[
            { title: '可見的推理鏈', desc: 'AI 不只顯示「結果」，而是顯示它注意到了哪些視覺特徵，用醫師熟悉的術語呈現' },
            { title: '校準好的信心表達', desc: '用「過去 1,000 個類似案例中，有 X 個被確診」代替抽象的百分比數字' },
            { title: '醫師主導的比較界面', desc: '設計可讓醫師輕鬆「跟 AI 對話」的界面——同意、反對、或標記為不確定' },
          ].map((item) => (
            <div key={item.title} className="p-5 bg-bg-surface border border-border rounded-sm">
              <p className="font-display font-600 text-text-primary text-sm mb-2">{item.title}</p>
              <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseGallery
        images={[
          { src: 'https://picsum.photos/seed/healthcare-design/1200/750', alt: '重設計後的 AI 診斷界面' },
          { src: 'https://picsum.photos/seed/healthcare-wireframe/600/420', alt: '信任校準元件設計' },
          { src: 'https://picsum.photos/seed/healthcare-prototype/600/420', alt: '醫師測試原型過程' },
        ]}
        caption="圖二：重設計後的 AI 診斷輔助界面——可見的推理鏈與校準信心呈現"
      />

      <CaseSection label="AI × UX 協作流程" title="設計師如何與 AI 工程師共同工作">
        <p>
          這個專案最大的挑戰之一是：設計師和 AI 工程師說的是不同的語言。
          工程師關心的是模型精確度（Precision/Recall），設計師關心的是感知信任度。
          我建立了一個「信任設計框架（Trust Design Framework）」，
          作為兩個團隊之間的共同語言。
        </p>
        <div className="my-4 p-6 bg-bg-surface border border-border rounded-sm font-mono text-sm text-text-secondary">
          <p className="text-accent mb-4">// Trust Design Framework</p>
          <p>感知信任 = f（可見性 × 可驗性 × 一致性 × 可控性）</p>
          <p className="mt-3 text-text-muted">可見性：AI 的推理過程可以被觀察</p>
          <p className="text-text-muted">可驗性：用戶能夠自行驗證 AI 的邏輯</p>
          <p className="text-text-muted">一致性：AI 的行為符合用戶的預期模型</p>
          <p className="text-text-muted">可控性：用戶能夠覆蓋或調整 AI 決策</p>
        </div>
        <p>
          這個框架讓工程師理解，「提高模型準確率」和「提高用戶信任感」
          是兩件需要各自設計的事情，並且在工程和設計層面都需要投入。
        </p>
      </CaseSection>

      <CaseSection label="反思" title="信任是設計出來的，不是算法算出來的">
        <p>
          這個案例改變了我對 AI 產品設計的根本理解。
          在 AI 系統中，技術性能只是可信任性的必要條件，而非充分條件。
          一個 99% 準確的 AI，如果用戶無法理解它的推理過程，
          它的實際採納率可能遠低於一個 85% 準確但「透明」的系統。
        </p>
        <p>
          未來的 AI UX 設計師需要成為「信任建築師」——
          設計的不只是界面，而是人與機器之間的認識論關係。
        </p>
      </CaseSection>

    </CaseLayout>
  )
}
