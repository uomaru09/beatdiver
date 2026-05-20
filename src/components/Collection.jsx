const products = [
  {
    id: 1,
    name: 'WAVE RIDER TEE',
    category: 'T-Shirt',
    price: '¥8,800',
    badge: 'New',
    color: 'from-cyan-900/40 to-blue-900/40',
    accent: 'bg-cyan-400',
  },
  {
    id: 2,
    name: 'OFFSHORE HOODIE',
    category: 'Hoodie',
    price: '¥18,700',
    badge: 'Best',
    color: 'from-blue-900/40 to-indigo-900/40',
    accent: 'bg-blue-400',
  },
  {
    id: 3,
    name: 'BARREL SHORTS',
    category: 'Shorts',
    price: '¥12,100',
    badge: null,
    color: 'from-teal-900/40 to-cyan-900/40',
    accent: 'bg-teal-400',
  },
  {
    id: 4,
    name: 'DRIFT CAP',
    category: 'Headwear',
    price: '¥6,600',
    badge: 'Limited',
    color: 'from-indigo-900/40 to-blue-900/40',
    accent: 'bg-indigo-400',
  },
]

function ProductCard({ product }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden bg-ocean-glass hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1">
      {/* Product image placeholder */}
      <div className={`h-64 bg-gradient-to-br ${product.color} flex items-center justify-center relative`}>
        {product.badge && (
          <span className={`absolute top-4 left-4 px-3 py-1 ${product.accent} text-black text-xs font-bold rounded-full tracking-wide`}>
            {product.badge}
          </span>
        )}
        {/* Placeholder icon */}
        <svg className="w-20 h-20 text-white/10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 7H4C2.9 7 2 7.9 2 9v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-9 8H9v2H7v-2H5v-2h2v-2h2v2h2v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5S14.67 14 15.5 14s1.5.67 1.5 1.5S16.33 17 15.5 17zm3-3c-.83 0-1.5-.67-1.5-1.5S17.67 11 18.5 11s1.5.67 1.5 1.5S19.33 14 18.5 14z"/>
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e14]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <button className="px-6 py-2 bg-cyan-500 text-black font-semibold rounded-full text-sm tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            Add to Cart
          </button>
        </div>
      </div>

      <div className="p-5">
        <p className="text-xs text-cyan-500 tracking-widest uppercase mb-1">{product.category}</p>
        <h3 className="font-['Bebas_Neue'] text-xl tracking-wide text-white mb-2">{product.name}</h3>
        <p className="text-slate-300 font-medium">{product.price}</p>
      </div>
    </div>
  )
}

export default function Collection() {
  return (
    <section id="collection" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-cyan-400 tracking-[0.4em] text-sm font-medium uppercase mb-3">2025 SS</p>
        <h2 className="text-6xl md:text-8xl font-['Bebas_Neue'] text-white">Collection</h2>
        <p className="mt-4 text-slate-400 max-w-md mx-auto">
          海の色をまとった、波乗り人のための限定コレクション。
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="#"
          className="inline-block px-8 py-3 border border-slate-600 hover:border-cyan-500 text-slate-300 hover:text-cyan-300 rounded-full transition-all duration-200 tracking-wide text-sm"
        >
          View All Products
        </a>
      </div>
    </section>
  )
}
