const items = [
  { id: 1, label: 'Dawn Patrol', color: 'from-orange-900/30 to-cyan-900/30', span: 'col-span-2 row-span-2' },
  { id: 2, label: 'Offshore Style', color: 'from-blue-900/30 to-indigo-900/30', span: '' },
  { id: 3, label: 'Beach Vibes', color: 'from-teal-900/30 to-blue-900/30', span: '' },
  { id: 4, label: 'Sunset Session', color: 'from-purple-900/30 to-blue-900/30', span: 'col-span-2' },
]

export default function Lookbook() {
  return (
    <section id="lookbook" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-cyan-400 tracking-[0.4em] text-sm font-medium uppercase mb-3">Visual</p>
        <h2 className="text-6xl md:text-8xl font-['Bebas_Neue'] text-white">Lookbook</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
        {items.map(item => (
          <div
            key={item.id}
            className={`${item.span} relative rounded-2xl bg-gradient-to-br ${item.color} border border-white/5 overflow-hidden group cursor-pointer`}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-16 h-16 text-white/5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
              </svg>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e14]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
              <span className="font-['Bebas_Neue'] text-xl tracking-wide text-white">{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
