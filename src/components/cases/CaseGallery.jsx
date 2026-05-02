import ScrollReveal from '../shared/ScrollReveal'

export default function CaseGallery({ images = [], caption }) {
  if (images.length === 0) return null

  const [main, ...rest] = images

  return (
    <ScrollReveal>
      <section className="py-14 border-b border-border">
        <div className="container-content">
          {/* Main image */}
          <div className="rounded-sm overflow-hidden mb-4">
            <img src={main.src} alt={main.alt || caption} className="w-full h-auto object-cover" />
          </div>

          {/* Secondary images */}
          {rest.length > 0 && (
            <div className={`grid gap-4 ${rest.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
              {rest.map((img, i) => (
                <div key={i} className="rounded-sm overflow-hidden">
                  <img src={img.src} alt={img.alt || `Gallery ${i + 2}`} className="w-full h-64 object-cover" />
                </div>
              ))}
            </div>
          )}

          {caption && (
            <p className="font-mono text-xs text-text-muted mt-4 text-center">{caption}</p>
          )}
        </div>
      </section>
    </ScrollReveal>
  )
}
