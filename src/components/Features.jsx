import { useLang } from '../context/LangContext'
import translations from '../i18n'

const icons = {
  ocean: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12c2-2 4 2 6 0s4-2 6 0 4 2 6 0M3 17c2-2 4 2 6 0s4-2 6 0 4 2 6 0M3 7c2-2 4 2 6 0s4-2 6 0 4 2 6 0" />
    </svg>
  ),
  music: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
    </svg>
  ),
  rock: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19c-1.1 0-2-.9-2-2V7.5L4 6l1-3 4 1.5V3h2v1.5l4-1.5 1 3-3 1.5V17c0 1.1-.9 2-2 2H9z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a9 9 0 11-9 9" />
    </svg>
  ),
  beach: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 0c0 4-4 7-4 7h8S12 8 12 4zm0 0V3M8 21h8M12 10v11M5 21a7 7 0 0114 0" />
    </svg>
  ),
}

export default function Features() {
  const { lang } = useLang()
  const t = translations[lang]

  const items = [
    { key: 'ocean', icon: icons.ocean },
    { key: 'music', icon: icons.music },
    { key: 'rock',  icon: icons.rock },
    { key: 'beach', icon: icons.beach },
  ]

  return (
    <section className="bg-[#0d0f1a] border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {items.map(({ key, icon }, i) => (
          <div
            key={key}
            className={`flex flex-col items-center text-center px-8 py-14 gap-5 ${
              i < items.length - 1 ? 'border-b md:border-b-0 md:border-r border-white/5' : ''
            } ${i === 1 ? 'border-b md:border-b-0' : ''}`}
          >
            <span className="text-[#c8a96e]">{icon}</span>
            <h3 className="font-display text-sm tracking-[0.2em] text-white">
              {t[`features.${key}.title`]}
            </h3>
            <p className="text-white/50 text-xs leading-relaxed">
              {t[`features.${key}.desc`]}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
