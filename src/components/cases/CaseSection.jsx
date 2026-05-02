import ScrollReveal from '../shared/ScrollReveal'

export default function CaseSection({ label, title, children, highlight = false }) {
  return (
    <ScrollReveal>
      <section className={`py-14 border-b border-border ${highlight ? 'bg-bg-surface -mx-6 px-6 md:-mx-0 md:px-0' : ''}`}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left label */}
          <div className="md:col-span-3">
            {label && <p className="section-label sticky top-24">{label}</p>}
          </div>
          {/* Content */}
          <div className="md:col-span-9">
            {title && (
              <h2 className="font-display font-600 text-2xl md:text-3xl text-text-primary mb-6 leading-tight">
                {title}
              </h2>
            )}
            <div className="text-text-secondary text-base leading-relaxed space-y-4">
              {children}
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}
