import { useLang } from '../context/LangContext'
import translations from '../i18n'

const items = [
  { id: 1, seed: 'bd-look1', span: 'col-span-2 row-span-2' },
  { id: 2, seed: 'bd-look2', span: '' },
  { id: 3, seed: 'bd-look3', span: '' },
  { id: 4, seed: 'bd-look4', span: 'col-span-2' },
]

export default function Lookbook() {
  const { lang } = useLang()
  const t = translations[lang]

  return (
    <section id="lookbook" className="py-20 bg-[#0d0f1a]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-10">
          <p className="text-[#c8a96e] text-[10px] tracking-[0.4em] font-semibold uppercase mb-3">
            {t['lookbook.label']}
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-white">
            {t['lookbook.heading']}
          </h2>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-3 gap-3 auto-rows-[200px]">
          {items.map(item => (
            <div
              key={item.id}
              className={`${item.span} relative rounded-sm overflow-hidden group cursor-pointer bg-[#111827]`}
            >
              <img
                src={`https://picsum.photos/seed/${item.seed}/600/400`}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
