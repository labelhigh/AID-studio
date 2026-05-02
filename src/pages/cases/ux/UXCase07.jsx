import CaseLayout from '../CaseLayout'
import CaseSection from '../../../components/cases/CaseSection'
import CaseGallery from '../../../components/cases/CaseGallery'
import { uxCases } from '../../../data/uxCasesData'

const data = uxCases[6]
const prev = uxCases[5]
const next = uxCases[7]

export default function UXCase07() {
  return (
    <CaseLayout caseData={data} prev={prev} next={next}>

      <CaseSection label="背景" title="警報海嘯：當 AI 品控系統讓操作員精神崩潰">
        <p>
          台積電某廠區部署了一套 AI 視覺檢測系統，能夠在晶圓生產線上即時偵測瑕疵。
          系統每天產生超過 3,000 個警報。操作員必須在 15 秒內對每個警報作出判斷。
          上線六個月後，廠區出現了嚴重問題：
        </p>
        <p>
          操作員開始出現「警報疲勞（Alert Fatigue）」——
          對警報反應遲鈍、批量忽略、甚至完全依賴 AI 自動處理而不再人工確認。
          最終導致一批有瑕疵的晶圓通過了品管，造成重大損失。
        </p>
      </CaseSection>

      <CaseGallery
        images={[
          { src: 'https://picsum.photos/seed/manufacturing-field/1200/700', alt: '廠線工作環境觀察' },
          { src: 'https://picsum.photos/seed/manufacturing-stress/600/400', alt: '操作員壓力研究' },
          { src: 'https://picsum.photos/seed/manufacturing-alert/600/400', alt: '警報流分析' },
        ]}
        caption="圖一：廠線工作環境田野研究與警報疲勞分析"
      />

      <CaseSection label="研究方法" title="田野研究：進入廠線看懂操作員的真實世界">
        <p>
          這個案例需要的不是用戶訪談，而是田野研究。
          我穿上無塵衣，在廠線觀察了 3 週，記錄了操作員與警報系統的完整互動。
          同時追蹤了 12 週的警報數據，分析哪些警報被忽視、哪些被優先處理。
        </p>
        <p>
          關鍵發現：操作員面臨的認知問題不是「警報太多」，
          而是「警報沒有優先順序」。
          一個「可能有輕微刮痕」的警報和一個「關鍵尺寸超標」的警報，
          在系統中看起來完全一樣。操作員無法快速區分哪個是緊急的。
        </p>
      </CaseSection>

      <CaseSection label="設計策略" title="警報分層：設計「只看最重要的事」的界面">
        <p>
          設計核心原則：減少操作員的認知負擔，讓他們將有限的注意力集中在真正重要的事情上。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
          {[
            { level: 'P1', color: 'text-red-400', title: '立即停線', desc: '影響晶圓存活率的關鍵缺陷，自動推送到主螢幕最上方，閃爍提示' },
            { level: 'P2', color: 'text-yellow-400', title: '人工確認', desc: '可能影響良率的缺陷，需在 60 秒內確認，進入「待確認」佇列' },
            { level: 'P3', color: 'text-text-secondary', title: '後台記錄', desc: '輕微異常，AI 自動處理並記錄，每班結束後統一審閱' },
          ].map((item) => (
            <div key={item.level} className="p-5 bg-bg-surface border border-border rounded-sm">
              <span className={`font-mono text-xs font-700 ${item.color}`}>{item.level}</span>
              <p className="font-display font-600 text-text-primary text-sm mt-2 mb-1">{item.title}</p>
              <p className="text-text-secondary text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-5">
          此外，我設計了「物理-數位整合界面」：
          將界面從純螢幕操作改為配合廠線實體燈號的混合系統，
          讓操作員不需要時刻盯著螢幕，透過周邊視覺就能感知系統狀態。
        </p>
      </CaseSection>

      <CaseGallery
        images={[
          { src: 'https://picsum.photos/seed/manufacturing-design/1200/750', alt: '警報分層界面設計' },
          { src: 'https://picsum.photos/seed/manufacturing-ui/600/420', alt: '廠線儀表板' },
          { src: 'https://picsum.photos/seed/manufacturing-physical/600/420', alt: '物理數位整合' },
        ]}
        caption="圖二：三層警報分層系統與物理-數位整合界面"
      />

      <CaseSection label="反思" title="工業 UX：設計師必須親自去現場">
        <p>
          這個案例最重要的設計原則之一是：工業環境的 UX 設計，
          必須考慮人類在長時間高壓工作中的認知特性。
          設計師不能坐在辦公室靠假設工作，必須親自去到用戶的真實環境中觀察。
          廠線的噪音、光線、物理疲勞，都是界面設計必須回應的真實情況。
        </p>
      </CaseSection>

    </CaseLayout>
  )
}
