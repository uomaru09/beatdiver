import { useState, useEffect } from 'react'
import { useLang } from '../context/LangContext'
import translations from '../i18n'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, toggleLang } = useLang()
  const t = translations[lang]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Collection', 'Story', 'Lookbook', 'Contact']

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0a0e14]/90 backdrop-blur-md border-b border-cyan-900/30' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-3xl font-['Bebas_Neue'] tracking-widest text-gradient-ocean">
          BEATDIVER
        </a>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8">
          {links.map(link => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors tracking-widest uppercase"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 text-xs font-semibold tracking-widest text-slate-400 hover:text-cyan-400 transition-colors"
            aria-label="Toggle language"
          >
            <span className={lang === 'en' ? 'text-cyan-400' : 'text-slate-600'}>EN</span>
            <span className="text-slate-600">/</span>
            <span className={lang === 'ja' ? 'text-cyan-400' : 'text-slate-600'}>JP</span>
          </button>

          <a
            href="#collection"
            className="px-5 py-2 bg-cyan-500 hover:bg-cyan-400 text-black text-sm font-semibold rounded-full transition-colors tracking-wide"
          >
            {t['nav.shopNow']}
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="text-xs font-semibold tracking-widest text-slate-400 hover:text-cyan-400 transition-colors"
            aria-label="Toggle language"
          >
            <span className={lang === 'en' ? 'text-cyan-400' : 'text-slate-600'}>EN</span>
            <span className="text-slate-600">/</span>
            <span className={lang === 'ja' ? 'text-cyan-400' : 'text-slate-600'}>JP</span>
          </button>
          <button
            className="text-slate-300"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0e14]/95 backdrop-blur-md border-t border-cyan-900/20 px-6 py-4 flex flex-col gap-4">
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-slate-300 hover:text-cyan-400 transition-colors tracking-widest uppercase text-sm"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
