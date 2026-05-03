import { Link } from 'react-router-dom'
import ScrollReveal from '../shared/ScrollReveal'

export default function CaseNav({ prev, next }) {
  return (
    <ScrollReveal>
      <section className="py-16 border-t border-border">
        <div className="container-content">
          <p className="section-label mb-8 text-center">更多案例</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {prev ? (
              <Link
                to={`/cases/${prev.id}`}
                className="group p-6 bg-bg-surface border border-border rounded-sm hover:border-border-light transition-all"
              >
                <p className="font-mono text-xs text-text-muted mb-2">← 上一個</p>
                <p className="case-number mb-1">{prev.number}</p>
                <h3 className="font-display font-600 text-lg text-text-primary group-hover:text-accent transition-colors leading-snug">
                  {prev.title}
                </h3>
              </Link>
            ) : <div />}

            {next ? (
              <Link
                to={`/cases/${next.id}`}
                className="group p-6 bg-bg-surface border border-border rounded-sm hover:border-border-light transition-all text-right"
              >
                <p className="font-mono text-xs text-text-muted mb-2">下一個 →</p>
                <p className="case-number mb-1">{next.number}</p>
                <h3 className="font-display font-600 text-lg text-text-primary group-hover:text-accent transition-colors leading-snug">
                  {next.title}
                </h3>
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}
