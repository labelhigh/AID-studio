import PageTransition from '../../components/layout/PageTransition'
import CaseHero from '../../components/cases/CaseHero'
import CaseMetrics from '../../components/cases/CaseMetrics'
import CaseNav from '../../components/cases/CaseNav'
import Footer from '../../components/layout/Footer'

export default function CaseLayout({ caseData, prev, next, children }) {
  return (
    <PageTransition>
      <CaseHero caseData={caseData} />

      <div className="container-content">
        {children}
      </div>

      <CaseMetrics metrics={caseData.metrics} />
      <CaseNav prev={prev} next={next} />
    </PageTransition>
  )
}
