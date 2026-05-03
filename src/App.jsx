import { Suspense, lazy } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import WorkList from './pages/WorkList'
import { uxCases } from './data/uxCasesData'
import { uiCases } from './data/uiCasesData'
import { threeDCases } from './data/threeDCasesData'
import { aiVideoCases } from './data/aiVideoCasesData'

// UX Cases
const UXCase01 = lazy(() => import('./pages/cases/ux/UXCase01'))
const UXCase02 = lazy(() => import('./pages/cases/ux/UXCase02'))
const UXCase03 = lazy(() => import('./pages/cases/ux/UXCase03'))
const UXCase04 = lazy(() => import('./pages/cases/ux/UXCase04'))
const UXCase05 = lazy(() => import('./pages/cases/ux/UXCase05'))
const UXCase06 = lazy(() => import('./pages/cases/ux/UXCase06'))
const UXCase07 = lazy(() => import('./pages/cases/ux/UXCase07'))
const UXCase08 = lazy(() => import('./pages/cases/ux/UXCase08'))
const UXCase09 = lazy(() => import('./pages/cases/ux/UXCase09'))
const UXCase10 = lazy(() => import('./pages/cases/ux/UXCase10'))
const UXCase11 = lazy(() => import('./pages/cases/ux/UXCase11'))
const UXCase12 = lazy(() => import('./pages/cases/ux/UXCase12'))
const UXCase13 = lazy(() => import('./pages/cases/ux/UXCase13'))
const UXCase14 = lazy(() => import('./pages/cases/ux/UXCase14'))
const UXCase15 = lazy(() => import('./pages/cases/ux/UXCase15'))
const UXCase16 = lazy(() => import('./pages/cases/ux/UXCase16'))
// UI Cases
const UICase01 = lazy(() => import('./pages/cases/ui/UICase01'))
const UICase02 = lazy(() => import('./pages/cases/ui/UICase02'))
const UICase03 = lazy(() => import('./pages/cases/ui/UICase03'))
// 3D Cases
const ThreeDCase01 = lazy(() => import('./pages/cases/threed/ThreeDCase01'))
const ThreeDCase02 = lazy(() => import('./pages/cases/threed/ThreeDCase02'))
// AI Video Cases
const AIVideoCase01 = lazy(() => import('./pages/cases/aivideo/AIVideoCase01'))
const AIVideoCase02 = lazy(() => import('./pages/cases/aivideo/AIVideoCase02'))

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-border border-t-accent rounded-full animate-spin" />
        <p className="font-mono text-xs text-text-muted">載入中...</p>
      </div>
    </div>
  )
}

function UXWorkPage() {
  return <WorkList items={uxCases} category="ux" />
}
function UIWorkPage() {
  return <WorkList items={uiCases} category="ui" />
}
function ThreeDWorkPage() {
  return <WorkList items={threeDCases} category="3d" />
}
function AIVideoWorkPage() {
  return <WorkList items={aiVideoCases} category="aivideo" />
}

export default function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />
      <main className="pt-0">
        <AnimatePresence mode="wait">
          <Suspense fallback={<LoadingFallback />}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/ux" element={<UXWorkPage />} />
              <Route path="/ui" element={<UIWorkPage />} />
              <Route path="/3d" element={<ThreeDWorkPage />} />
              <Route path="/ai-video" element={<AIVideoWorkPage />} />

              {/* UX Cases */}
              <Route path="/cases/ux-001" element={<UXCase01 />} />
              <Route path="/cases/ux-002" element={<UXCase02 />} />
              <Route path="/cases/ux-003" element={<UXCase03 />} />
              <Route path="/cases/ux-004" element={<UXCase04 />} />
              <Route path="/cases/ux-005" element={<UXCase05 />} />
              <Route path="/cases/ux-006" element={<UXCase06 />} />
              <Route path="/cases/ux-007" element={<UXCase07 />} />
              <Route path="/cases/ux-008" element={<UXCase08 />} />
              <Route path="/cases/ux-009" element={<UXCase09 />} />
              <Route path="/cases/ux-010" element={<UXCase10 />} />
              <Route path="/cases/ux-011" element={<UXCase11 />} />
              <Route path="/cases/ux-012" element={<UXCase12 />} />
              <Route path="/cases/ux-013" element={<UXCase13 />} />
              <Route path="/cases/ux-014" element={<UXCase14 />} />
              <Route path="/cases/ux-015" element={<UXCase15 />} />
              <Route path="/cases/ux-016" element={<UXCase16 />} />

              {/* UI Cases */}
              <Route path="/cases/ui-001" element={<UICase01 />} />
              <Route path="/cases/ui-002" element={<UICase02 />} />
              <Route path="/cases/ui-003" element={<UICase03 />} />

              {/* 3D Cases */}
              <Route path="/cases/3d-001" element={<ThreeDCase01 />} />
              <Route path="/cases/3d-002" element={<ThreeDCase02 />} />

              {/* AI Video Cases */}
              <Route path="/cases/av-001" element={<AIVideoCase01 />} />
              <Route path="/cases/av-002" element={<AIVideoCase02 />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
