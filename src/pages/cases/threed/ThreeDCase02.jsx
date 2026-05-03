import CaseLayout from '../CaseLayout'
import CaseSection from '../../../components/cases/CaseSection'
import CaseGallery from '../../../components/cases/CaseGallery'
import { threeDCases } from '../../../data/threeDCasesData'

const data = threeDCases[1]
const prev = threeDCases[0]
const next = null

export default function ThreeDCase02() {
  return (
    <CaseLayout caseData={data} prev={prev} next={next}>

      <CaseSection label="背景" title="設計一個 AI 策展人帶你逛的虛擬展覽">
        <p>
          台北當代藝術館希望在實體展覽之外，建立一個線上虛擬展覽空間，
          讓無法親自到場的觀眾也能體驗展覽。
          但他們不想要的是「把實體展覽拍成照片放到網頁上」，
          而是想要一個「真正的虛擬空間體驗」——
          觀眾可以在 3D 空間中移動、探索，
          並且有一個 AI 策展人伴隨引導和解說。
        </p>
      </CaseSection>

      <CaseGallery
        images={[
          { src: 'https://picsum.photos/seed/metaverse-design/1200/750', alt: '元宇宙展覽空間設計' },
          { src: 'https://picsum.photos/seed/metaverse-interior/600/420', alt: '虛擬展廳內部設計' },
          { src: 'https://picsum.photos/seed/metaverse-ui/600/420', alt: '空間導覽 UI 設計' },
        ]}
        caption="圖一：台北當代藝術館虛擬展覽空間完整設計"
      />

      <CaseSection label="設計挑戰" title="讓用戶在 3D 空間中不迷路">
        <p>
          虛擬空間設計最大的 UX 挑戰是「空間迷失感（Spatial Disorientation）」。
          不像實體空間有重力、光線方向、聲音線索幫助定向，
          虛擬空間的用戶很容易迷失方向，不知道自己在哪裡、已經看過哪些、還有哪些未探索。
        </p>
        <p>
          我設計了一套「空間導航系統」：
          小地圖常駐角落、探索進度追蹤、
          AI 策展人作為「聲音錨點」引導用戶、
          以及空間中清晰的視覺指引路徑。
        </p>
      </CaseSection>

    </CaseLayout>
  )
}
