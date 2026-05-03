import CaseLayout from '../CaseLayout'
import CaseSection from '../../../components/cases/CaseSection'
import CaseGallery from '../../../components/cases/CaseGallery'
import { aiVideoCases } from '../../../data/aiVideoCasesData'

const data = aiVideoCases[0]
const prev = null
const next = aiVideoCases[1]

export default function AIVideoCase01() {
  return (
    <CaseLayout caseData={data} prev={prev} next={next}>

      <CaseSection label="背景" title="重新定義品牌影片的製作成本與創作邊界">
        <p>
          一支傳統品牌影片的製作成本通常在 NT$300,000 到 NT$3,000,000 之間，
          需要 4-8 週的製作週期，涉及導演、攝影師、演員、後製團隊。
          對台灣的中小型新創品牌來說，這幾乎是不可能負擔的成本。
        </p>
        <p>
          Runway ML、Sora 等 AI 視頻生成工具的出現，
          讓「一個人完成品牌影片」成為可能。
          這個專案是與台灣新創品牌聯盟合作，
          探索 AI 工具如何讓品牌說出自己的故事，而不犧牲創作品質。
        </p>
      </CaseSection>

      <CaseSection label="製作流程" title="AI 影片導演的工作方法">
        <div className="space-y-3 mt-2">
          {[
            { phase: '品牌故事提煉', desc: 'Prompt 工程是 AI 影片製作的核心技能。我花 60% 的時間在「把品牌精神轉化為 AI 能理解的視覺語言」上' },
            { phase: 'AI 生成與篩選', desc: '每個 10 秒片段平均生成 20-40 個版本，從中選擇最符合品牌調性的片段，這需要強大的視覺判斷力' },
            { phase: '後製整合', desc: '用 After Effects 進行視覺一致性整合、色彩校正和音樂配合，讓 AI 生成片段看起來像一部統一的作品' },
          ].map((item) => (
            <div key={item.phase} className="p-4 border-l-2 border-accent/30 pl-5">
              <p className="font-display font-600 text-text-primary text-sm mb-1">{item.phase}</p>
              <p className="text-text-secondary text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseGallery
        images={[
          { src: 'https://picsum.photos/seed/aivideo-brand/1200/700', alt: 'AI 品牌影片截圖' },
          { src: 'https://picsum.photos/seed/aivideo-process/600/420', alt: 'AI 生成過程' },
          { src: 'https://picsum.photos/seed/aivideo-edit/600/420', alt: '後製整合過程' },
        ]}
        caption="圖一：AI 生成品牌影片製作流程與最終成果"
      />

      <CaseSection label="反思" title="AI 影片的創作門檻轉移：從「執行」到「視覺判斷」">
        <p>
          AI 視頻工具最深刻的影響不是「節省成本」，
          而是改變了「創作門檻的本質」。
          過去的門檻是技術執行能力（攝影技術、剪輯技術）；
          現在的門檻是「視覺判斷力和創作意圖的精確表達」。
          一個有強大視覺審美和清晰品牌思維的創作者，
          比一個只有技術執行能力的人更有競爭優勢。
          這是 AI 時代對創作者的重新排位。
        </p>
      </CaseSection>

    </CaseLayout>
  )
}
