import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'UX 設計', href: '/ux' },
  { label: 'UI 設計', href: '/ui' },
  { label: '3D 設計', href: '/3d' },
  { label: 'AI 影片', href: '/ai-video' },
  { label: '關於', href: '/about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-bg-primary/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
        }`}
      >
        <div className="container-content">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <span className="font-display font-700 text-base text-text-primary tracking-tight">
                Lin Yu
              </span>
              <span className="font-mono text-xs text-accent opacity-80 group-hover:opacity-100 transition-opacity">
                ×AI
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-2 font-body text-sm transition-all duration-200 rounded-sm ${
                    location.pathname.startsWith(link.href)
                      ? 'text-accent'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile Menu Button */}
            <div className="flex items-center gap-3">
              <a
                href="mailto:linyu@design.studio"
                className="hidden md:inline-flex items-center gap-1.5 text-sm font-display font-500 text-text-secondary hover:text-accent transition-colors border border-border hover:border-accent px-3 py-1.5 rounded-sm"
              >
                聯絡我
                <span className="text-accent">→</span>
              </a>
              {/* Mobile hamburger */}
              <button
                className="md:hidden flex flex-col gap-1.5 p-1"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <span className={`block w-5 h-px bg-text-primary transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
                <span className={`block w-5 h-px bg-text-primary transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-5 h-px bg-text-primary transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-bg-surface/98 backdrop-blur-md border-b border-border"
          >
            <nav className="container-content py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`py-3 font-display text-base border-b border-border last:border-0 transition-colors ${
                    location.pathname.startsWith(link.href)
                      ? 'text-accent'
                      : 'text-text-secondary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="mailto:linyu@design.studio"
                className="mt-4 text-sm text-text-secondary hover:text-accent transition-colors"
              >
                linyu@design.studio
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
