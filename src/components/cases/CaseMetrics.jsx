import ScrollReveal from '../shared/ScrollReveal'

export default function CaseMetrics({ metrics }) {
  return (
    <ScrollReveal>
      <section className="py-16 border-b border-border">
        <div className="container-content">
          <p className="section-label mb-10">成果指標</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((m, i) => (
              <div
                key={i}
                className="p-8 bg-bg-surface border border-border rounded-sm group hover:border-accent/40 transition-colors"
              >
                <p className="font-display font-700 text-5xl md:text-6xl text-accent mb-3 leading-none">
                  {m.value}
                </p>
                <p className="text-text-secondary text-sm font-display font-500">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}
