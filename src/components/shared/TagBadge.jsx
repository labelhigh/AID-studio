export default function TagBadge({ label, accent = false }) {
  return (
    <span
      className={`tag ${
        accent ? 'border-accent/40 text-accent' : ''
      }`}
    >
      {label}
    </span>
  )
}
