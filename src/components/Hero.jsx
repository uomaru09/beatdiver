import { useLang } from '../context/LangContext'
import translations from '../i18n'

export default function Hero() {
  const { lang } = useLang()
  const t = translations[lang]

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundImage: 'url(./assets/hero-picture.png)', backgroundSize: 'cover', backgroundPosition: 'center top' }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-[#0a0e1a]/30" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 pt-28 pb-24">
        <div className="max-w-2xl">
          {/* Script headline */}
          <h1 className="font-script text-[clamp(3.5rem,10vw,8rem)] leading-none text-white mb-5 drop-shadow-lg">
            Dive into<br />the Beat.
          </h1>

          {/* Japanese tagline */}
          <p className="text-white/80 text-base md:text-lg font-light tracking-wider mb-2">
            {t['hero.tagline']}
          </p>

          {/* English sub */}
          <p className="text-white/60 text-sm tracking-[0.2em] uppercase mb-10">
            {t['hero.sub']}
          </p>

          {/* CTA */}
          <a
            href="#collection"
            className="btn-dark inline-flex items-center gap-3 text-sm"
          >
            {t['hero.cta']}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  )
}
