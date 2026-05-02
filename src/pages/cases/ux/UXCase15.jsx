import CaseLayout from '../CaseLayout'
import CaseSection from '../../../components/cases/CaseSection'
import CaseGallery from '../../../components/cases/CaseGallery'
import { uxCases } from '../../../data/uxCasesData'

const data = uxCases[14]
const prev = uxCases[13]
const next = uxCases[15]

export default function UXCase15() {
  return (
    <CaseLayout caseData={data} prev={prev} next={next}>

      <CaseSection label="背景" title="醫院的排程困境：當每一個調整都牽動整個系統">
        <p>
          台北榮總每天有超過 3,500 名患者、1,200 名醫護人員、420 個床位需要協調。
          手術室、ICU、普通病房、門診的排程相互牽連，
          任何一個環節的異動都可能引發連鎖反應。
          2023 年導入的 AI 排程優化系統能夠處理這種複雜度，
          但行政人員完全不理解 AI 的排程邏輯，
          每次需要手動調整時都「不知道動哪裡才不會搞砸一切」。
        </p>
      </CaseSection>

      <CaseGallery
        images={[
          { src: 'https://picsum.photos/seed/hospital-research/1200/700', alt: '醫院行政流程研究' },
          { src: 'https://picsum.photos/seed/hospital-map/600/400', alt: '排程依賴關係映射' },
          { src: 'https://picsum.photos/seed/hospital-stake/600/400', alt: '利害關係人研究' },
        ]}
        caption="圖一：醫院排程流程研究與複雜依賴關係映射"
      />

      <CaseSection label="研究方法" title="服務藍圖：讓排程的複雜性變得可見">
        <p>
          我使用「服務藍圖（Service Blueprint）」方法，
          將醫院排程系統的所有依賴關係可視化。
          這個過程本身就是一個巨大的發現：
          行政人員以為他們在做的是「排程」，
          但實際上他們在做的是「多目標優化的即時調度」——
          需要同時考慮患者需求、醫師偏好、設備可用性、法規合規等十幾個變量。
        </p>
        <p>
          問題的根源是：AI 在做這個優化，但行政人員沒有任何工具來「理解」
          AI 的優化邏輯，更不要說「修改」它了。
        </p>
      </CaseSection>

      <CaseSection label="設計策略" title="「衝突視覺化」：讓排程調整變得可預測">
        <p>
          核心設計創新：讓 AI 的排程邏輯對行政人員「透明可見」，
          同時讓他們在做任何調整時，能夠「預見後果」再決定是否執行。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          {[
            { title: '衝突預覽模式', desc: '當行政人員移動任何排程時，系統即時顯示「這個調整會影響哪些其他排程」，以橘色高亮標示' },
            { title: 'AI 建議解釋面板', desc: 'AI 的每個排程決策都附帶「因為...所以這樣排」的解釋，用行政人員的語言（不是算法術語）說明' },
            { title: '偏好記憶系統', desc: '系統學習每位醫師和護理長的偏好，並在排程時自動納入考量，同時讓行政人員知道這些偏好的來源' },
            { title: '一鍵回復最佳化', desc: '當行政人員做了手動調整後，系統保留「AI 最優解」作為參考，可隨時比較或一鍵回復' },
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
          { src: 'https://picsum.photos/seed/hospital-design/1200/750', alt: '醫院 AI 排程系統設計' },
          { src: 'https://picsum.photos/seed/hospital-conflict/600/420', alt: '衝突視覺化界面' },
          { src: 'https://picsum.photos/seed/hospital-suggest/600/420', alt: 'AI 建議解釋面板' },
        ]}
        caption="圖二：衝突視覺化與 AI 建議透明化的醫院排程系統"
      />

      <CaseSection label="反思" title="讓複雜系統「對用戶透明」是 UX 的核心挑戰之一">
        <p>
          這個案例是「複雜系統 UX 設計（Complex System UX）」的典型。
          AI 可以處理人腦無法直接理解的複雜優化問題，
          但如果用戶無法理解 AI 的決策邏輯，
          他們要麼完全放棄主動管理，要麼做出破壞整體優化的隨意調整。
          設計師的工作是找到「適當的透明度」——不是把所有算法細節都展示出來，
          而是揭示用戶「需要知道的部分」，讓他們能夠做出有意義的判斷。
        </p>
      </CaseSection>

    </CaseLayout>
  )
}
