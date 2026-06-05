import { useLang } from '../context/LangContext'
import translations from '../i18n'

export default function MiddleBand() {
  const { lang } = useLang()
  const t = translations[lang]

  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      {/* Dark dramatic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#080a10] via-[#0d1520] to-[#0a0800]" />
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8">
        <h2 className="font-script text-[clamp(2.5rem,8vw,6.5rem)] text-white leading-tight mb-4">
          {t['mid.line1']}<br />
          {t['mid.line2']}
        </h2>
        <p className="text-white/40 text-xs tracking-[0.35em] uppercase mt-6">
          {t['mid.sub']}
        </p>
        {/* BD logo mark */}
        <div className="mt-10 flex justify-center">
          <span className="font-display text-3xl text-white/20 tracking-widest">BD</span>
        </div>
      </div>
    </section>
  )
}
