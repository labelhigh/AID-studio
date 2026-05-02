import CaseLayout from '../CaseLayout'
import CaseSection from '../../../components/cases/CaseSection'
import CaseGallery from '../../../components/cases/CaseGallery'
import { threeDCases } from '../../../data/threeDCasesData'

const data = threeDCases[0]
const prev = null
const next = threeDCases[1]

export default function ThreeDCase01() {
  return (
    <CaseLayout caseData={data} prev={prev} next={next}>

      <CaseSection label="背景" title="為 ASUS AI 產品線打造可互動的三維品牌語言">
        <p>
          ASUS 的 AI 產品線需要一套能在網頁上流暢互動的 3D 品牌視覺資產，
          以在數位行銷中傳達 AI 技術的未來感與精密性。
          傳統的平面視覺已不足以呈現這種層次，
          而靜態 3D 渲染圖無法提供用戶想要的「探索感」。
        </p>
        <p>
          挑戰在於：3D 資產需要在網頁環境中以 60fps 流暢運行，
          同時保持視覺品質，並且在行動設備上也能正常顯示。
        </p>
      </CaseSection>

      <CaseGallery
        images={[
          { src: 'https://picsum.photos/seed/3d-brand-1/1200/750', alt: 'AI 品牌 3D 視覺識別' },
          { src: 'https://picsum.photos/seed/3d-brand-2/600/420', alt: 'Blender 建模過程' },
          { src: 'https://picsum.photos/seed/3d-brand-3/600/420', alt: 'Spline 互動設定' },
        ]}
        caption="圖一：ASUS AI 品牌三維視覺識別完整展示"
      />

      <CaseSection label="技術流程" title="Blender → Spline → Web 的三維製作流程">
        <div className="space-y-3 mt-2">
          {[
            { step: '01', tool: 'Concept → Blender', desc: '在 Blender 中建立高精度模型，確保幾何細節和材質品質。使用 PBR 材質流程確保光照真實感' },
            { step: '02', tool: 'Blender → Spline', desc: '將優化後的低面數模型匯入 Spline，設定互動邏輯、懸停效果、滾動觸發動效' },
            { step: '03', tool: 'Spline → Web', desc: '透過 Spline 的 Web Export 功能，將 3D 場景嵌入網頁，配合 React 組件管理互動狀態' },
          ].map((item) => (
            <div key={item.step} className="flex gap-5 py-4 border-b border-border last:border-0">
              <span className="font-mono text-xl text-text-muted font-700 flex-shrink-0">{item.step}</span>
              <div>
                <p className="font-display font-600 text-text-primary text-sm mb-1">{item.tool}</p>
                <p className="text-text-secondary text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </CaseSection>

    </CaseLayout>
  )
}
