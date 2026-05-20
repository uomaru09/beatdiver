export default function Story() {
  return (
    <section id="story" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e14] via-[#001a2e]/50 to-[#0a0e14]" />

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Text side */}
        <div>
          <p className="text-cyan-400 tracking-[0.4em] text-sm font-medium uppercase mb-4">Our Story</p>
          <h2 className="text-6xl md:text-7xl font-['Bebas_Neue'] text-white leading-none mb-8">
            MADE FOR<br />
            <span className="text-gradient-ocean">THE WAVE</span>
          </h2>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              BEATDIVERは、サーフィンの本質 ―― 波と対話し、自然の鼓動に身を委ねる体験 ―― からインスピレーションを受けて誕生しました。
            </p>
            <p>
              私たちは海を愛するライダーが、ウォーターでもランドでも自分らしくいられるウェアを作り続けています。素材の一本一本に、波の記憶が宿っています。
            </p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              { value: '2019', label: 'Founded' },
              { value: '40+', label: 'Products' },
              { value: '18', label: 'Countries' },
            ].map(stat => (
              <div key={stat.label}>
                <p className="font-['Bebas_Neue'] text-4xl text-gradient-ocean">{stat.value}</p>
                <p className="text-xs text-slate-500 tracking-widest uppercase mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Visual side */}
        <div className="relative">
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-cyan-900/30 via-blue-900/30 to-indigo-900/30 border border-cyan-900/30 flex items-center justify-center overflow-hidden">
            {/* Decorative wave pattern */}
            <svg viewBox="0 0 400 400" className="w-3/4 text-cyan-500/20" fill="none" stroke="currentColor">
              <path strokeWidth="1" d="M0,200 C50,150 100,250 150,200 C200,150 250,250 300,200 C350,150 400,250 450,200" />
              <path strokeWidth="1" d="M0,220 C50,170 100,270 150,220 C200,170 250,270 300,220 C350,170 400,270 450,220" />
              <path strokeWidth="1" d="M0,240 C50,190 100,290 150,240 C200,190 250,290 300,240 C350,190 400,290 450,240" />
              <circle cx="200" cy="200" r="80" strokeWidth="1" />
              <circle cx="200" cy="200" r="120" strokeWidth="0.5" />
              <circle cx="200" cy="200" r="160" strokeWidth="0.3" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent" />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 -left-4 bg-ocean-glass rounded-2xl p-5">
            <p className="font-['Bebas_Neue'] text-2xl text-cyan-400">EST. 2019</p>
            <p className="text-xs text-slate-500 tracking-widest">SURF & STREET</p>
          </div>
        </div>
      </div>
    </section>
  )
}
