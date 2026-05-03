const categories = [
  { id: 'all', label: '全部作品' },
  { id: 'ux', label: 'UX 設計' },
  { id: 'ui', label: 'UI 設計' },
  { id: '3d', label: '3D 設計' },
  { id: 'aivideo', label: 'AI 影片' },
]

export default function CategoryFilter({ active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={`font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-sm border transition-all duration-200 ${
            active === cat.id
              ? 'border-accent text-accent bg-accent/10'
              : 'border-border text-text-secondary hover:border-border-light hover:text-text-primary'
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}
