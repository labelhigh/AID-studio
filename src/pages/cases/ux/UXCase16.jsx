import CaseLayout from '../CaseLayout'
import CaseSection from '../../../components/cases/CaseSection'
import CaseGallery from '../../../components/cases/CaseGallery'
import { uxCases } from '../../../data/uxCasesData'

const data = uxCases[15]
const prev = uxCases[14]
const next = null

export default function UXCase16() {
  return (
    <CaseLayout caseData={data} prev={prev} next={next}>

      <CaseSection label="背景" title="AI 遇上田間：為中高齡農民設計信任的故事">
        <p>
          農業部數位農業計畫希望透過 AI 作物管理系統，
          幫助台灣農民提升種植效率、減少農藥使用、提高作物產量。
          系統可以根據土壤數據、天氣預報、市場行情，
          為農民提供精準的施肥、澆水、採收時機建議。
        </p>
        <p>
          但這個計畫面對的用戶群體，與絕大多數科技產品完全不同：
          主要用戶是 55-70 歲的中高齡農民，許多人從未用過智慧型手機，
          部分用戶有低識字率，生活在偏遠地區，網路訊號不穩定。
          這是一個真正意義上的「包容性設計（Inclusive Design）」挑戰。
        </p>
      </CaseSection>

      <CaseGallery
        images={[
          { src: 'https://picsum.photos/seed/agri-field/1200/700', alt: '農村田野研究' },
          { src: 'https://picsum.photos/seed/agri-farmer/600/400', alt: '農民訪談與觀察' },
          { src: 'https://picsum.photos/seed/agri-context/600/400', alt: '使用情境研究' },
        ]}
        caption="圖一：農村田野研究——理解中高齡農民的真實使用情境"
      />

      <CaseSection label="研究方法" title="田野研究：設計師必須親自下田">
        <p>
          這個案例讓我第一次真正做到了「極端情境下的包容性研究」。
          我花了三週時間走訪嘉義、雲林、屏東的農場，
          與 28 位農民共同生活、觀察、訪談。
        </p>
        <p>
          研究揭示了幾個重要的設計前提：
          農民的決策是高度「情境嵌入（Context-embedded）」的——
          他們看天色、聞土壤、感受濕度，做出的判斷是整合多感官信息的結果。
          任何 AI 建議系統，如果忽視這個情境知識，都會被農民拒絕。
          此外，農民對「祖先傳下來的知識」有深厚的情感連結，
          AI 建議如果與傳統知識衝突，必須提供足夠的說明才能被接受。
        </p>
      </CaseSection>

      <CaseSection label="設計策略" title="四個包容性設計原則">
        <p>
          這個案例讓我發展出了「農業 AI 包容性設計四原則」，
          這些原則後來被廣泛應用於面向非典型用戶的 AI 系統設計。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          {[
            { num: '01', title: '視覺優先，文字輔助', desc: '所有建議以圖示+顏色為主要傳達，文字說明可選。紅色番茄 = 需要澆水，綠色葉片 = 今天可以施肥' },
            { num: '02', title: '離線優先架構', desc: '核心功能不依賴網路連線。AI 建議預先下載到設備，離線環境下仍可使用' },
            { num: '03', title: '尊重傳統知識', desc: '當 AI 建議與農民習慣做法不同時，系統說明「兩種做法的差異和預期結果」，讓農民自己選擇' },
            { num: '04', title: '漸進信任建構', desc: '第一年只用 AI 做「記錄幫手」，讓農民在低風險狀況下建立對 AI 的基本信任，再逐步開放建議功能' },
          ].map((item) => (
            <div key={item.num} className="p-5 bg-bg-surface border border-border rounded-sm">
              <span className="font-mono text-xs text-text-muted">{item.num}</span>
              <p className="font-display font-600 text-text-primary text-sm mt-2 mb-2">{item.title}</p>
              <p className="text-text-secondary text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseGallery
        images={[
          { src: 'https://picsum.photos/seed/agri-design/1200/750', alt: 'AI 農業管理系統界面設計' },
          { src: 'https://picsum.photos/seed/agri-ui/600/420', alt: '視覺優先界面設計' },
          { src: 'https://picsum.photos/seed/agri-paper/600/420', alt: '紙本原型測試' },
        ]}
        caption="圖二：視覺優先、離線優先的農業 AI 包容性設計"
      />

      <CaseSection label="AI × UX 流程" title="當 AI 必須「說農民的語言」">
        <p>
          這個案例最大的技術挑戰是：
          如何讓語言模型的輸出「本地化」到農民能理解的層次。
          我建立了一套「輸出適性框架（Output Adaptation Framework）」：
          AI 的建議必須先翻譯成「農民語言」——不用術語，用農民熟悉的描述方式。
        </p>
        <div className="font-mono text-sm p-5 bg-bg-surface border border-border rounded-sm space-y-3 mt-2">
          <p className="text-accent">// AI 建議語言轉譯示例</p>
          <div>
            <p className="text-text-muted">原始 AI 輸出：</p>
            <p className="text-text-secondary">「土壤含水量低於最適生長值 23%，建議立即灌溉 15mm。」</p>
          </div>
          <div>
            <p className="text-text-muted">農民語言轉譯：</p>
            <p className="text-accent">「🌱 田裡水分不夠了，今天下午可以澆水，像平常一樣澆就好。」</p>
          </div>
        </div>
      </CaseSection>

      <CaseSection label="反思" title="包容性設計不是「降低標準」，而是「拓展邊界」">
        <p>
          這是我職涯中最有意義的一個設計案例。
          它讓我意識到，科技產品的默認用戶預設（年輕、識字、都市、有技術背景）
          排除了世界上大多數的真實人口。
          當我們設計 AI 系統時，必須問：「這個系統的邊界在哪裡？
          有誰被系統性地排除在外？」
          農民採用率達到 68%，對我來說不只是一個指標，
          而是 68% 的真實人們，因為好的設計，
          得以從 AI 時代的紅利中獲益，而不是被遺棄在數位鴻溝的另一端。
        </p>
      </CaseSection>

    </CaseLayout>
  )
}
