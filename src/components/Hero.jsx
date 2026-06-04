import { useLang } from '../context/LangContext'
import translations from '../i18n'

export default function Hero() {
  const { lang } = useLang()
  const t = translations[lang]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated ocean background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#001a2e] via-[#003d5c] to-[#0a0e14]" />

      {/* Wave SVG layers */}
      <div className="absolute bottom-0 left-0 right-0 h-64 opacity-30">
        <svg viewBox="0 0 1440 320" className="w-full" preserveAspectRatio="none">
          <path
            fill="#00d4ff"
            d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,138.7C672,139,768,181,864,197.3C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-48 opacity-20">
        <svg viewBox="0 0 1440 320" className="w-full" preserveAspectRatio="none">
          <path
            fill="#0077ff"
            d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,213.3C840,224,960,224,1080,208C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p className="text-cyan-400 tracking-[0.4em] text-sm font-medium uppercase mb-4">
          {t['hero.sub']}
        </p>
        <h1 className="text-[clamp(4rem,15vw,12rem)] leading-none font-['Bebas_Neue'] text-gradient-ocean mb-6">
          BEAT<br />DIVER
        </h1>
        <p className="text-slate-300 text-lg md:text-xl font-light max-w-xl mx-auto mb-10 leading-relaxed whitespace-pre-line">
          {t['hero.desc']}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#collection"
            className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-full transition-all duration-200 tracking-wide hover:scale-105"
          >
            {t['hero.cta1']}
          </a>
          <a
            href="#story"
            className="px-8 py-4 border border-cyan-500/50 hover:border-cyan-400 text-cyan-300 hover:text-cyan-200 rounded-full transition-all duration-200 tracking-wide hover:scale-105"
          >
            {t['hero.cta2']}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-slate-500 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
