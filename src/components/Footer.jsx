import { useState } from 'react'
import { useLang } from '../context/LangContext'
import translations from '../i18n'

function SpotifyIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  )
}

export default function Footer() {
  const { lang } = useLang()
  const t = translations[lang]
  const [email, setEmail] = useState('')

  return (
    <footer id="contact" className="bg-[#08090f] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

        {/* Column 1: Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="font-display text-3xl text-white tracking-widest">BD</span>
            <div>
              <p className="font-display text-lg text-white tracking-widest leading-none">BEAT DIVER</p>
            </div>
          </div>
          <p className="text-white/40 text-xs leading-relaxed max-w-xs">
            {t['footer.desc']}
          </p>
        </div>

        {/* Column 2: Playlist */}
        <div>
          <p className="text-[#c8a96e] text-[10px] tracking-[0.4em] font-semibold uppercase mb-5">
            {t['footer.playlist']}
          </p>
          <div className="flex items-center gap-4 p-4 bg-white/5 rounded-sm border border-white/8 hover:border-white/15 transition-colors cursor-pointer group">
            <div className="text-[#1DB954] group-hover:scale-105 transition-transform">
              <SpotifyIcon />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium truncate">{t['footer.playlistName']}</p>
              <p className="text-white/40 text-xs truncate">{t['footer.playlistSub']}</p>
              <p className="text-white/30 text-xs">{t['footer.playlistBy']}</p>
            </div>
            <SpotifyIcon />
          </div>
        </div>

        {/* Column 3: Follow Us + Newsletter */}
        <div className="flex flex-col gap-8">
          {/* Follow Us */}
          <div>
            <p className="text-[#c8a96e] text-[10px] tracking-[0.4em] font-semibold uppercase mb-4">
              {t['footer.follow']}
            </p>
            <div className="flex gap-4">
              <a
                href="https://open.spotify.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-[#1DB954] transition-colors"
                aria-label="Spotify"
              >
                <SpotifyIcon />
              </a>
              <a
                href="https://www.instagram.com/beatdiver/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <p className="text-[#c8a96e] text-[10px] tracking-[0.4em] font-semibold uppercase mb-4">
              {t['footer.newsletter']}
            </p>
            <form
              onSubmit={e => { e.preventDefault(); setEmail('') }}
              className="flex border border-white/20 hover:border-white/30 transition-colors"
            >
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder={t['footer.newsletterPlaceholder']}
                className="flex-1 bg-transparent px-4 py-3 text-xs text-white placeholder-white/30 focus:outline-none min-w-0"
              />
              <button
                type="submit"
                className="px-4 text-white/60 hover:text-white hover:bg-white/5 transition-colors border-l border-white/20"
                aria-label="Subscribe"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 px-8 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/25">
          <p>{t['footer.copy']}</p>
          <div className="flex gap-6">
            {['footer.privacy', 'footer.legal', 'footer.contact'].map(key => (
              <a key={key} href="#" className="hover:text-white/50 transition-colors tracking-wide">
                {t[key]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
