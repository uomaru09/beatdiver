export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-['Bebas_Neue'] text-2xl tracking-widest text-gradient-ocean">BEATDIVER</p>

        <div className="flex gap-8 text-xs text-slate-500 tracking-widest uppercase">
          {['Privacy', 'Terms', 'Shipping', 'Returns'].map(link => (
            <a key={link} href="#" className="hover:text-cyan-400 transition-colors">{link}</a>
          ))}
        </div>

        <p className="text-xs text-slate-600">© 2025 BEATDIVER. All rights reserved.</p>
      </div>
    </footer>
  )
}
