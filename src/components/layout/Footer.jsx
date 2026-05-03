import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border mt-32">
      <div className="container-content py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <p className="font-display font-600 text-lg text-text-primary mb-2">Lin Yu</p>
            <p className="text-text-secondary text-sm leading-relaxed">
              UX/AI 設計師<br />
              專注於將人工智能的複雜性<br />
              轉化為可信任的人類體驗。
            </p>
          </div>

          {/* Work Links */}
          <div>
            <p className="section-label mb-4">作品分類</p>
            <ul className="space-y-2">
              {[
                { label: 'UX 設計 (16)', href: '/ux' },
                { label: 'UI 設計 (3)', href: '/ui' },
                { label: '3D 設計 (2)', href: '/3d' },
                { label: 'AI 影片 (2)', href: '/ai-video' },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="text-text-secondary hover:text-accent transition-colors text-sm"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="section-label mb-4">聯絡方式</p>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <a href="mailto:linyu@design.studio" className="hover:text-accent transition-colors">
                  linyu@design.studio
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://behance.net" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                  Behance
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6">
          <p className="font-mono text-xs text-text-muted">
            © {year} Lin Yu. All rights reserved.
          </p>
          <p className="font-mono text-xs text-text-muted">
            設計 × 工程 × 人工智能 — 台北
          </p>
        </div>
      </div>
    </footer>
  )
}
