import { useLang } from '../context/LangContext'
import translations from '../i18n'

export default function Concept() {
  const { lang } = useLang()
  const t = translations[lang]

  return (
    <section id="about" className="grid md:grid-cols-2 min-h-[600px]">
      {/* Left: CONCEPT */}
      <div className="relative flex flex-col justify-center px-10 md:px-16 py-20 bg-[#0d1520] overflow-hidden">
        {/* Background photo */}
        <img
          src="./assets/concept-scubadiving.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[#0a1a2e]/70" />

        <div className="relative z-10">
          <p className="text-[#c8a96e] text-[10px] tracking-[0.4em] font-semibold uppercase mb-6">
            {t['concept.label']}
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white leading-tight mb-6">
            {t['concept.heading1']}<br />
            {t['concept.heading2']}
          </h2>
          <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-sm">
            {t['concept.body']}
          </p>
          <a href="#" className="btn-outline-light text-xs">
            {t['concept.cta']}
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Right: ABOUT */}
      <div className="relative flex flex-col justify-center px-10 md:px-16 py-20 bg-[#111827] overflow-hidden">
        {/* Background photo */}
        <img
          src="./assets/about-picture.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[#0d0a00]/65" />

        <div className="relative z-10">
          <p className="text-[#c8a96e] text-[10px] tracking-[0.4em] font-semibold uppercase mb-6">
            {t['about.label']}
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white leading-tight mb-6">
            {t['about.heading1']}<br />
            {t['about.heading2']}
          </h2>
          <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-sm">
            {t['about.body']}
          </p>
          {/* Signature */}
          <span className="font-script text-3xl text-white/80">Beat Diver</span>
        </div>
      </div>
    </section>
  )
}
