import CaseLayout from '../CaseLayout'
import CaseSection from '../../../components/cases/CaseSection'
import CaseGallery from '../../../components/cases/CaseGallery'
import { uxCases } from '../../../data/uxCasesData'

const data = uxCases[7]
const prev = uxCases[6]
const next = uxCases[8]

export default function UXCase08() {
  return (
    <CaseLayout caseData={data} prev={prev} next={next}>

      <CaseSection label="背景" title="AI 客服的挫折循環：為什麼用戶總是要求「真人」？">
        <p>
          momo 購物網每天處理超過 50,000 筆客服請求。
          2023 年底導入 AI 對話客服後，自動解決率只有 31%，
          而用戶要求轉接真人客服的比例高達 64%。
          更令人擔憂的是，轉接真人後的滿意度評分也下降了——
          因為用戶已經在 AI 階段耗盡了耐心。
        </p>
        <p>
          問題不只是 AI 能力不足，更深層的問題是：
          對話設計沒有正確設定用戶對 AI 的期望，
          而且 AI 到真人的轉接體驗設計得很差，
          讓用戶感覺自己「被踢皮球」。
        </p>
      </CaseSection>

      <CaseGallery
        images={[
          { src: 'https://picsum.photos/seed/customer-flow/1200/700', alt: '對話流程分析' },
          { src: 'https://picsum.photos/seed/customer-emotion/600/400', alt: '情感歷程映射' },
          { src: 'https://picsum.photos/seed/customer-drop/600/400', alt: '放棄點分析' },
        ]}
        caption="圖一：客服對話流程分析與用戶情感歷程映射"
      />

      <CaseSection label="研究方法" title="對話分析：讀懂 10,000 條聊天記錄背後的情感">
        <p>
          我分析了 10,000 條真實的 AI 客服對話記錄，
          同時對 30 位曾要求轉接真人的用戶進行了深度訪談。
          使用「情感歷程映射（Emotional Journey Mapping）」，
          標記每一個對話節點用戶的情緒狀態。
        </p>
        <p>
          發現了三個關鍵的「挫折升級點（Escalation Triggers）」：
        </p>
        <div className="space-y-2 mt-2">
          {[
            '當 AI 要求用戶「重新描述問題」超過 2 次時，憤怒情緒急劇上升',
            '當用戶的問題涉及金錢退款，AI 給出「系統正在處理」的模糊回應時',
            '當 AI 提供的解決方案需要用戶去做超過 3 個步驟的複雜操作時',
          ].map((item, i) => (
            <div key={i} className="flex gap-3 p-3 border-l-2 border-accent/30 pl-4">
              <span className="text-accent font-mono text-xs mt-0.5 flex-shrink-0">{`0${i+1}`}</span>
              <p className="text-text-secondary text-sm">{item}</p>
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseSection label="設計策略" title="重新設計 AI 與人類的「協作邊界」">
        <p>
          核心設計策略：AI 和真人客服不是「替代關係」，而是「接力關係」。
          設計目標是讓這個接力棒的傳遞對用戶來說完全無縫。
        </p>
        <div className="space-y-3 mt-3">
          {[
            { title: '主動升級機制', desc: 'AI 在檢測到用戶情緒升高（重複同樣問題、句子中出現特定關鍵詞）時，主動提議轉接，不等用戶憤怒到自己要求' },
            { title: '對話記憶傳承', desc: '轉接真人時，AI 自動生成「對話摘要」傳給客服人員，用戶不需要重新解釋問題' },
            { title: '時間承諾機制', desc: '當 AI 說「正在處理」時，必須附帶具體時間承諾和進度通知，消除模糊感' },
            { title: '期望設定前置', desc: '對話開始時，AI 主動說明自己能做什麼、不能做什麼，避免期望落差' },
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
          { src: 'https://picsum.photos/seed/customer-design/1200/750', alt: 'AI 客服對話界面重設計' },
          { src: 'https://picsum.photos/seed/customer-handoff/600/420', alt: 'AI 到真人的無縫轉接設計' },
          { src: 'https://picsum.photos/seed/customer-emotion-ui/600/420', alt: '情緒偵測提示設計' },
        ]}
        caption="圖二：AI 對話客服系統與無縫人工轉接界面設計"
      />

      <CaseSection label="反思" title="對話設計是新的 UX 邊疆">
        <p>
          Conversational AI 的 UX 設計是一個全新的設計領域，
          它需要設計師理解語言學、對話心理學、情感設計，
          同時還要理解 AI 大型語言模型的能力邊界。
          在這個案例中，最大的設計突破不是讓 AI 更聰明，
          而是讓 AI 學會「知道自己的極限」，並優雅地承認。
        </p>
      </CaseSection>

    </CaseLayout>
  )
}
