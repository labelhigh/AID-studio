import CaseLayout from '../CaseLayout'
import CaseSection from '../../../components/cases/CaseSection'
import CaseGallery from '../../../components/cases/CaseGallery'
import { uxCases } from '../../../data/uxCasesData'

const data = uxCases[2]
const prev = uxCases[1]
const next = uxCases[3]

export default function UXCase03() {
  return (
    <CaseLayout caseData={data} prev={prev} next={next}>

      <CaseSection label="背景" title="開發者與 AI 之間的摩擦戰爭">
        <p>
          91APP 的工程部門在 2024 年初開始使用 GitHub Copilot 和一套自建的 AI Code Review 工具。
          按理說，這應該是提升效率的好事。但三個月後，資深工程師卻在內部反彈：
          「這個工具讓我的工作更難做，不是更簡單。」
        </p>
        <p>
          AI 的建議干擾了他們的思維流程（Flow State），
          強制性的審查提示打斷了開發者的編碼節奏，
          而且 AI 常常提出「技術上正確但業務上完全不合適」的修改建議，
          讓開發者必須花大量時間解釋為什麼不採用。
        </p>
      </CaseSection>

      <CaseGallery
        images={[
          { src: 'https://picsum.photos/seed/developer-shadow/1200/700', alt: '開發者工作流程觀察' },
          { src: 'https://picsum.photos/seed/developer-flow/600/400', alt: 'Flow State 中斷分析' },
          { src: 'https://picsum.photos/seed/developer-context/600/400', alt: '上下文感知研究' },
        ]}
        caption="圖一：開發者工作流程觀察與 AI 干擾點分析"
      />

      <CaseSection label="研究方法" title="Shadow Research：與代碼共同存在">
        <p>
          我花了兩週時間坐在工程師旁邊，觀察他們如何與 AI 工具互動。
          這種「跟班研究（Shadowing）」讓我看到了問卷和訪談永遠無法捕捉的東西：
          開發者的挫折不在於 AI「說什麼」，而在於 AI「何時說」和「如何說」。
        </p>
        <p>
          關鍵發現：開發者有兩種截然不同的工作模式——
          「構思模式（Ideation）」和「執行模式（Execution）」。
          在構思模式中，他們歡迎 AI 提建議；
          在執行模式中，任何打斷都是干擾。
          現有的 AI 工具無法識別這兩種模式，只會不分場合地介入。
        </p>
      </CaseSection>

      <CaseSection label="設計策略" title="設計「感知上下文」的 AI 協作界面">
        <p>
          核心設計原則：AI 必須感知開發者的工作狀態，在正確的時機提供正確的輔助。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          {[
            { title: '靜默模式', desc: '當開發者連續輸入超過 2 分鐘未停頓時，AI 進入靜默模式，只記錄不提示' },
            { title: '暫停點觸發', desc: '只在開發者主動停頓（超過 8 秒未輸入）時，才顯示 AI 的建議氣泡' },
            { title: '業務上下文綁定', desc: 'AI 的 Code Review 建議必須附帶「業務影響評估」，不只看技術正確性' },
            { title: '一鍵暫停協議', desc: '開發者可隨時按一個鍵讓 AI 完全靜默 15 分鐘，無需解釋' },
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
          { src: 'https://picsum.photos/seed/developer-design/1200/750', alt: '重設計的 AI 協作界面' },
        ]}
        caption="圖二：感知上下文的 AI Code Review 界面設計"
      />

      <CaseSection label="AI × UX 協作流程" title="設計師如何與工程師共同定義「AI 介入邊界」">
        <p>
          這個案例讓我發展出了一套「AI 介入邊界設計（AI Intervention Boundary Design）」方法論。
          核心問題不是「AI 能做什麼」，而是「AI 在什麼情況下不應該做什麼」。
        </p>
        <p>
          我與工程師共同繪製了「AI 介入決策樹」：
          對於每一種可能的 AI 介入場景，明確定義觸發條件、介入方式、
          退出機制和用戶覆蓋權。這個決策樹後來成為工程實作的設計規範。
        </p>
      </CaseSection>

      <CaseSection label="反思" title="最好的 AI 設計，有時是「讓 AI 閉嘴」">
        <p>
          這個案例挑戰了一個常見的 AI 產品設計假設：
          「提供更多 AI 功能 = 更好的用戶體驗」。
          有時候，最好的設計決策是給用戶一個清晰、簡單的「關掉 AI」按鈕。
          尊重用戶的自主性和工作流程，比塞入更多功能更重要。
        </p>
      </CaseSection>

    </CaseLayout>
  )
}
