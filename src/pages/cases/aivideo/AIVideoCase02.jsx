import CaseLayout from '../CaseLayout'
import CaseSection from '../../../components/cases/CaseSection'
import CaseGallery from '../../../components/cases/CaseGallery'
import { aiVideoCases } from '../../../data/aiVideoCasesData'

const data = aiVideoCases[1]
const prev = aiVideoCases[0]
const next = null

export default function AIVideoCase02() {
  return (
    <CaseLayout caseData={data} prev={prev} next={next}>

      <CaseSection label="背景" title="探索 AI 輔助動效設計的創作邊界">
        <p>
          動態影像設計（Motion Design）是視覺設計中技術門檻最高的領域之一。
          傳統的 After Effects 工作流需要紮實的關鍵幀動畫技術和大量時間。
          這個個人創作計畫探索了一個問題：
          當 Runway ML、Midjourney 等 AI 工具介入動效工作流時，
          創作者的角色如何轉變，創作的可能性如何擴展？
        </p>
      </CaseSection>

      <CaseSection label="創作探索" title="AI + 人類的動效共創工作流">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          {[
            { tool: 'Midjourney → 風格提煉', desc: '生成靜態視覺風格參考，確立動態影像的整體美學方向' },
            { tool: 'Runway ML → 動態轉換', desc: '將靜態圖像轉化為動態影像，探索圖像的「時間維度」' },
            { tool: 'After Effects → 精煉整合', desc: '對 AI 生成的動態素材進行精細化後製，加入節奏感和敘事性' },
            { tool: 'DaVinci Resolve → 色彩', desc: '色彩校正和最終輸出，確保跨平台的視覺一致性' },
          ].map((item) => (
            <div key={item.tool} className="p-4 bg-bg-surface border border-border rounded-sm">
              <p className="font-mono text-xs text-accent mb-2">{item.tool}</p>
              <p className="text-text-secondary text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseGallery
        images={[
          { src: 'https://picsum.photos/seed/motion-design-1/1200/700', alt: 'AI 動態影像作品' },
          { src: 'https://picsum.photos/seed/motion-design-2/600/420', alt: 'AI 生成素材' },
          { src: 'https://picsum.photos/seed/motion-design-3/600/420', alt: '後製整合工作流' },
        ]}
        caption="圖一：AI 輔助動態影像創作作品集"
      />

      <CaseSection label="反思" title="AI 工具讓動效設計回歸「創意本質」">
        <p>
          這個探索計畫讓我深刻體會到，AI 工具正在讓動效設計回歸它的本質：
          創意表達和情感傳遞，而不是技術執行。
          當一個設計師可以透過 AI 快速實現腦中的視覺想法時，
          真正的競爭力來自於「有沒有值得實現的視覺想法」，
          而不是「有沒有能力去執行它」。
          這是 AI 帶給創意工作者最好的禮物，也是最大的挑戰。
        </p>
      </CaseSection>

    </CaseLayout>
  )
}
