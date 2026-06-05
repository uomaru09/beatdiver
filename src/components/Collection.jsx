import { useLang } from '../context/LangContext'
import translations from '../i18n'

const categories = [
  {
    id: 'tshirt',
    name: 'T-SHIRT',
    image: 'https://picsum.photos/seed/bd-tshirt/400/500',
    bg: 'from-[#0a1a2e] via-[#0d2a4a] to-[#061018]',
  },
  {
    id: 'tanktop',
    name: 'TANK TOP',
    image: 'https://picsum.photos/seed/bd-tank/400/500',
    bg: 'from-[#1a1206] via-[#2a1e08] to-[#0d0a04]',
  },
  {
    id: 'cap',
    name: 'CAP',
    image: 'https://picsum.photos/seed/bd-cap/400/500',
    bg: 'from-[#081810] via-[#0d2218] to-[#040e08]',
  },
  {
    id: 'hoodie',
    name: 'HOODIE',
    image: 'https://picsum.photos/seed/bd-hoodie/400/500',
    bg: 'from-[#10080a] via-[#1e0e14] to-[#080408]',
  },
  {
    id: 'goods',
    name: 'GOODS',
    image: 'https://picsum.photos/seed/bd-goods/400/500',
    bg: 'from-[#14100a] via-[#221a0e] to-[#0a0806]',
  },
]

function CategoryCard({ cat }) {
  return (
    <a href="#" className="group relative overflow-hidden block">
      <div className={`aspect-[2/3] bg-gradient-to-b ${cat.bg} relative overflow-hidden`}>
        {/* Photo overlay */}
        <img
          src={cat.image}
          alt={cat.name}
          className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-40 group-hover:opacity-55 group-hover:scale-105 transition-all duration-500"
        />
        {/* Bottom gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        {/* Category name + arrow */}
        <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
          <span className="font-display text-sm tracking-[0.2em] text-white">{cat.name}</span>
          <span className="text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
    </a>
  )
}

export default function Collection() {
  const { lang } = useLang()
  const t = translations[lang]

  return (
    <section id="collection" className="py-16 bg-[#0a0c12]">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-8 mb-8 flex items-end justify-between">
        <div>
          <h2 className="font-display text-5xl md:text-6xl text-white">
            Collection
          </h2>
        </div>
        <a href="#" className="hidden md:inline-flex items-center gap-2 text-xs text-white/40 hover:text-white tracking-[0.15em] uppercase transition-colors">
          {t['collection.viewAll']}
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

      {/* Category grid */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          {categories.map(cat => (
            <CategoryCard key={cat.id} cat={cat} />
          ))}
        </div>
      </div>

      <div className="md:hidden text-center mt-8">
        <a href="#" className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-white tracking-[0.15em] uppercase transition-colors">
          {t['collection.viewAll']}
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  )
}
