import { FaWater, FaHeadphones, FaGuitar } from 'react-icons/fa'
import { GiPalmTree } from 'react-icons/gi'
import { useLang } from '../context/LangContext'
import translations from '../i18n'

const icons = {
  ocean: <FaWater className="w-8 h-8" />,
  music: <FaHeadphones className="w-8 h-8" />,
  rock:  <FaGuitar className="w-8 h-8" />,
  beach: <GiPalmTree className="w-8 h-8" />,
}

const columns = [
  { key: 'ocean', bg: 'bg-[#060d18]', accent: 'from-[#0a3a5c]/40 to-transparent' },
  { key: 'music', bg: 'bg-[#0a0a10]', accent: 'from-[#1a0a2e]/40 to-transparent' },
  { key: 'rock',  bg: 'bg-[#0f0a08]', accent: 'from-[#2a1000]/40 to-transparent' },
  { key: 'beach', bg: 'bg-[#0a0d08]', accent: 'from-[#1a2800]/40 to-transparent' },
]

export default function Features() {
  const { lang } = useLang()
  const t = translations[lang]

  return (
    <section className="border-t border-white/5">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {columns.map(({ key, bg, accent }, i) => (
          <div
            key={key}
            className={`relative flex flex-col items-center text-center px-8 py-16 gap-5 ${bg} ${
              i < columns.length - 1 ? 'border-b md:border-b-0 md:border-r border-white/8' : ''
            } ${i === 1 ? 'border-b md:border-b-0' : ''}`}
          >
            <div className={`absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t ${accent} pointer-events-none`} />

            <span className="relative text-[#c8a96e]">{icons[key]}</span>
            <h3 className="relative font-display text-sm tracking-[0.25em] text-white">
              {t[`features.${key}.title`]}
            </h3>
            <p className="relative text-white/45 text-xs leading-relaxed">
              {t[`features.${key}.desc`]}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
