import { useLang } from '../context/LangContext'
import translations from '../i18n'

export default function Contact() {
  const { lang } = useLang()
  const t = translations[lang]

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e14] via-[#001a2e]/30 to-[#0a0e14]" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <p className="text-cyan-400 tracking-[0.4em] text-sm font-medium uppercase mb-4">{t['contact.sub']}</p>
        <h2 className="text-6xl md:text-8xl font-['Bebas_Neue'] text-white mb-6">
          Ride the<br />
          <span className="text-gradient-ocean">Newsletter</span>
        </h2>
        <p className="text-slate-400 mb-10">
          {t['contact.desc']}
        </p>

        <form className="flex flex-col sm:flex-row gap-3" onSubmit={e => e.preventDefault()}>
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 px-5 py-3 bg-white/5 border border-white/10 rounded-full text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-full transition-all duration-200 tracking-wide hover:scale-105 whitespace-nowrap"
          >
            {t['contact.subscribe']}
          </button>
        </form>
      </div>
    </section>
  )
}
