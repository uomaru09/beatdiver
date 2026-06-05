import { useLang } from '../context/LangContext'
import translations from '../i18n'

const categories = [
  {
    id: 'tshirt',
    name: 'T-SHIRT',
    image: 'https://picsum.photos/seed/bd-tshirt/400/500',
    color: 'from-[#1a2744] to-[#0d1a2e]',
  },
  {
    id: 'tanktop',
    name: 'TANK TOP',
    image: 'https://picsum.photos/seed/bd-tank/400/500',
    color: 'from-[#1a1a0d] to-[#0d1520]',
  },
  {
    id: 'cap',
    name: 'CAP',
    image: 'https://picsum.photos/seed/bd-cap/400/500',
    color: 'from-[#0d1a1a] to-[#0a0e14]',
  },
  {
    id: 'hoodie',
    name: 'HOODIE',
    image: 'https://picsum.photos/seed/bd-hoodie/400/500',
    color: 'from-[#1a0d1a] to-[#0d0f1a]',
  },
  {
    id: 'goods',
    name: 'GOODS',
    image: 'https://picsum.photos/seed/bd-goods/400/500',
    color: 'from-[#1a1000] to-[#0d0f1a]',
  },
]

function CategoryCard({ cat }) {
  return (
    <a
      href="#"
      className="group relative overflow-hidden block"
    >
      <div className={`aspect-[3/4] bg-gradient-to-b ${cat.color} relative overflow-hidden`}>
        <img
          src={cat.image}
          alt={cat.name}
          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
        <span className="font-display text-sm tracking-[0.2em] text-white">{cat.name}</span>
        <span className="text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-200">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </a>
  )
}

export default function Collection() {
  const { lang } = useLang()
  const t = translations[lang]

  return (
    <section id="collection" className="py-20 bg-[#0d0f1a]">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-8 mb-10 flex items-end justify-between">
        <div>
          <p className="text-[#c8a96e] text-[10px] tracking-[0.4em] font-semibold uppercase mb-3">
            {t['collection.label']}
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-white flex items-center gap-4">
            Collection
            {/* Wave/music motif */}
            <svg className="w-8 h-8 text-[#c8a96e] opacity-60" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12c2-2 4 2 6 0s4-2 6 0 4 2 6 0" />
            </svg>
          </h2>
        </div>
        <a
          href="#"
          className="hidden md:inline-flex items-center gap-2 text-xs text-white/50 hover:text-white tracking-[0.15em] uppercase transition-colors"
        >
          {t['collection.viewAll']}
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

      {/* Category grid */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {categories.map(cat => (
            <CategoryCard key={cat.id} cat={cat} />
          ))}
        </div>
      </div>

      {/* Mobile view all */}
      <div className="md:hidden text-center mt-8">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-xs text-white/50 hover:text-white tracking-[0.15em] uppercase transition-colors"
        >
          {t['collection.viewAll']}
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  )
}
