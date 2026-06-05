import { useLang } from '../context/LangContext'
import translations from '../i18n'

export default function Hero() {
  const { lang } = useLang()
  const t = translations[lang]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient simulating beach/ocean scene */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a2744] via-[#0d1a2e] to-[#0a1520]" />
      {/* Warm overlay for beach feeling */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d0f1a]/60 via-transparent to-[#1a1000]/40" />

      {/* Decorative image placeholder (right side merchandise spread) */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20">
        <div className="w-full h-full bg-gradient-to-l from-[#c8a96e]/20 to-transparent" />
      </div>

      {/* Subtle wave lines */}
      <div className="absolute bottom-0 left-0 right-0 opacity-10">
        <svg viewBox="0 0 1440 120" className="w-full" preserveAspectRatio="none">
          <path fill="#c8a96e" d="M0,60L80,53C160,47,320,33,480,40C640,47,800,73,960,76.7C1120,80,1280,60,1360,50L1440,40L1440,120L0,120Z" />
        </svg>
      </div>

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
