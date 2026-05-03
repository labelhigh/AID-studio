import CaseLayout from '../CaseLayout'
import CaseSection from '../../../components/cases/CaseSection'
import CaseGallery from '../../../components/cases/CaseGallery'
import { uxCases } from '../../../data/uxCasesData'

const data = uxCases[5]
const prev = uxCases[4]
const next = uxCases[6]

export default function UXCase06() {
  return (
    <CaseLayout caseData={data} prev={prev} next={next}>

      <CaseSection label="背景" title="個人化學習的悖論：AI 知道最好，但學生不這麼想">
        <p>
          均一教育平台是台灣最大的免費線上學習平台，服務超過 100 萬名學生。
          2023 年，平台導入了 AI 個人化學習路徑系統，
          能夠根據每位學生的學習歷程、錯誤模式、知識缺口，
          自動生成客製化的學習計畫。
        </p>
        <p>
          問題是：學生不願意跟著 AI 規劃的路徑走。
          訪談發現，學生的理由驚人地一致：「我不知道 AI 為什麼要我學這個，感覺很奇怪。」
          即使 AI 的推薦在教育學上完全正確，學生的心理阻力讓效果大打折扣。
        </p>
      </CaseSection>

      <CaseGallery
        images={[
          { src: 'https://picsum.photos/seed/education-research/1200/700', alt: '學生學習行為觀察' },
          { src: 'https://picsum.photos/seed/education-parent/600/400', alt: '家長與學生訪談' },
          { src: 'https://picsum.photos/seed/education-journey/600/400', alt: '學習旅程映射' },
        ]}
        caption="圖一：學生學習行為研究與 AI 推薦接受度分析"
      />

      <CaseSection label="研究方法" title="理解學生的「學習自我概念」">
        <p>
          我與教育心理學者合作，針對 3 個年齡層（小學高年級、國中、高中）共 48 位學生
          進行了「學習自我概念（Learning Self-concept）」深度訪談。
          核心問題：「你覺得自己的學習是誰在主導？」
        </p>
        <p>
          發現：學生對學習的「控制感」是接受 AI 推薦的核心前提。
          當他們感覺 AI 是「幫我」而不是「替我決定」時，接受度大幅提升。
          此外，他們需要理解「我現在在哪裡」和「我需要去哪裡」的學習地圖，
          才能對 AI 的推薦建立信任。
        </p>
      </CaseSection>

      <CaseSection label="設計策略" title="「看得見的學習旅程」設計">
        <p>
          核心設計轉移：從「AI 幫你安排學習」改為「AI 幫你看見自己的學習旅程」。
          學生不是被安排的對象，而是旅程的主角。
        </p>
        <div className="space-y-3 mt-3">
          {[
            { num: '01', title: '學習地圖視覺化', desc: '用星球地圖比喻展示知識體系：學生看見自己「已掌握的星球」和「下一個目標星球」，AI 推薦變成「航行建議」' },
            { num: '02', title: '推薦理由透明化', desc: '每個 AI 推薦的學習內容，都附上「因為你在這個題目錯了 3 次，所以我建議...」的說明，讓學生理解邏輯' },
            { num: '03', title: '自主選擇保留', desc: '學生可以「接受」或「暫時跳過」AI 推薦，但跳過後 AI 會說明「這樣的影響是...」，保留知情權' },
          ].map((item) => (
            <div key={item.num} className="flex gap-5 py-4 border-b border-border last:border-0">
              <span className="font-mono text-2xl text-text-muted font-700 flex-shrink-0">{item.num}</span>
              <div>
                <p className="font-display font-600 text-text-primary mb-1">{item.title}</p>
                <p className="text-text-secondary text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseGallery
        images={[
          { src: 'https://picsum.photos/seed/education-design/1200/750', alt: '學習地圖視覺化設計' },
          { src: 'https://picsum.photos/seed/education-map/600/420', alt: '知識星球地圖界面' },
          { src: 'https://picsum.photos/seed/education-recommend/600/420', alt: 'AI 推薦透明化設計' },
        ]}
        caption="圖二：可見的學習旅程與 AI 推薦透明化設計"
      />

      <CaseSection label="反思" title="教育科技的設計，要先理解學習心理學">
        <p>
          這個案例讓我明白，不同領域的 AI UX 設計，需要設計師深入理解該領域的「人類行為科學」。
          教育領域需要理解學習心理學和自我決定理論（Self-Determination Theory）；
          醫療領域需要理解認知偏誤和臨床決策科學；
          金融領域需要理解行為經濟學。
          AI 的能力只是工具，人類行為的理解才是設計的基礎。
        </p>
      </CaseSection>

    </CaseLayout>
  )
}
