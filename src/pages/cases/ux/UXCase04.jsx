import CaseLayout from '../CaseLayout'
import CaseSection from '../../../components/cases/CaseSection'
import CaseGallery from '../../../components/cases/CaseGallery'
import { uxCases } from '../../../data/uxCasesData'

const data = uxCases[3]
const prev = uxCases[2]
const next = uxCases[4]

export default function UXCase04() {
  return (
    <CaseLayout caseData={data} prev={prev} next={next}>

      <CaseSection label="背景" title="法律 AI 的信任悖論">
        <p>
          理律法律事務所是台灣頂尖的法律機構，2023 年導入了 AI 合約分析工具。
          這套系統能在幾分鐘內分析數百頁的合約，標記風險條款、識別不利條件、
          提出修改建議。技術上非常強大。
        </p>
        <p>
          但律師們面臨一個根本的職業困境：他們在法律上對自己的建議負完全責任。
          如果他們採用了 AI 的分析但 AI 出錯了，後果由他們承擔。
          現有界面的問題是：它讓 AI 看起來比律師還有把握，
          卻沒有提供任何讓律師驗證這種把握的工具。
        </p>
      </CaseSection>

      <CaseGallery
        images={[
          { src: 'https://picsum.photos/seed/legal-research/1200/700', alt: '律師工作流程研究' },
          { src: 'https://picsum.photos/seed/legal-interview/600/400', alt: '律師深度訪談' },
          { src: 'https://picsum.photos/seed/legal-audit/600/400', alt: '現有界面可用性審核' },
        ]}
        caption="圖一：律師工作流程研究與 AI 工具使用行為分析"
      />

      <CaseSection label="研究方法" title="認知走查：律師的推理地圖">
        <p>
          我使用「認知走查法（Cognitive Walkthrough）」和「思考放聲法（Think-aloud Protocol）」，
          與 8 位律師共同分析了 15 份真實合約（已去除敏感資訊）的審查過程。
        </p>
        <p>
          發現律師審查合約有一套嚴格的「推理協議」：
          他們不只看結論，更重要的是建立「可辯護的推理鏈（Defensible Reasoning Chain）」。
          每一個法律判斷都必須能追溯到具體的法條、先例或合約條文。
          現有的 AI 界面只給出結論，律師無從建立這條推理鏈。
        </p>
      </CaseSection>

      <CaseSection label="設計策略" title="可辯護的 AI 輔助：為律師設計推理鏈">
        <p>
          設計核心：讓 AI 分析結果對律師來說是「可辯護的（Defensible）」，
          而不只是「準確的（Accurate）」。
          這兩者的差距，就是 UX 設計需要填補的空間。
        </p>
        <div className="space-y-3 mt-3">
          {[
            { title: '條文溯源面板', desc: 'AI 的每一個風險標記，都直接連結到對應的合約條文原文，以及觸發此判斷的法條依據' },
            { title: '風險三角標記系統', desc: '將風險分為「法規合規風險」、「商業風險」、「模糊地帶」三種類型，讓律師快速定位審查優先順序' },
            { title: '律師批注工作流', desc: '律師可以在 AI 分析旁邊直接批注「同意 / 不同意 / 需要更多資訊」，形成可審計的決策記錄' },
            { title: '不確定性顯式標記', desc: '對於 AI 信心度低於 80% 的判斷，系統自動提示「此處需要人工深度審查」' },
          ].map((item) => (
            <div key={item.title} className="flex gap-4 p-4 border-b border-border last:border-0">
              <span className="text-accent font-mono text-xs mt-0.5 flex-shrink-0">—</span>
              <div>
                <p className="font-display font-600 text-text-primary text-sm mb-1">{item.title}</p>
                <p className="text-text-secondary text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseGallery
        images={[
          { src: 'https://picsum.photos/seed/legal-design/1200/750', alt: '法律 AI 分析界面設計' },
          { src: 'https://picsum.photos/seed/legal-annotation/600/420', alt: '律師批注工作流界面' },
          { src: 'https://picsum.photos/seed/legal-risk/600/420', alt: '風險三角標記系統' },
        ]}
        caption="圖二：可辯護的 AI 輔助法律分析界面"
      />

      <CaseSection label="AI × UX 流程" title="在高風險領域中，設計「人類覆蓋機制」">
        <p>
          法律是高風險領域，任何 AI 設計都必須內建強大的「人類覆蓋機制（Human Override）」。
          我在設計規範中建立了三個層級的人工介入點：
        </p>
        <div className="font-mono text-sm p-5 bg-bg-surface border border-border rounded-sm space-y-2 mt-2">
          <p className="text-accent">// 人類覆蓋機制層級</p>
          <p className="text-text-secondary">Level 1：標記不同意（輕度）— 律師標記 AI 分析有誤，系統記錄並回饋給模型</p>
          <p className="text-text-secondary">Level 2：手動覆蓋（中度）— 律師完全忽略 AI 建議，提交自己的分析</p>
          <p className="text-text-secondary">Level 3：人工審查標記（重度）— 律師標記此合約需要全人工審查，AI 退出</p>
        </div>
      </CaseSection>

      <CaseSection label="反思" title="在專業領域中，AI 的角色是增強專業，不是取代判斷">
        <p>
          法律、醫療、金融這類高風險專業領域的 AI UX 設計，
          有一個核心原則：AI 永遠應該讓專業人士「更有把握」，而不是讓他們「更依賴 AI」。
          當你設計的 AI 工具讓用戶失去了獨立判斷的能力，那是設計的失敗，不是成功。
        </p>
      </CaseSection>

    </CaseLayout>
  )
}
