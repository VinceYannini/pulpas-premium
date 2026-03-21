// Navbar.tsx — VerdeSer® brand navigation
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export function VerdeLogo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="8" fill="#2E7D32"/>
        {/* Leaf shape */}
        <path d="M20 6 C12 6 8 14 8 20 C8 26 12 32 20 34 C28 32 32 26 32 20 C32 14 28 6 20 6Z" fill="white" opacity="0.15"/>
        <path d="M20 8 C20 8 14 16 14 22 C14 27 17 31 20 33 C20 33 20 20 26 14 C23 12 20 8 20 8Z" fill="white"/>
        <path d="M20 8 C20 8 26 16 26 22 C26 27 23 31 20 33" stroke="white" strokeWidth="1.5" fill="none" opacity="0.5"/>
        {/* Small square accent */}
        <rect x="22" y="10" width="8" height="6" rx="1" fill="#D4A017" opacity="0.9"/>
      </svg>
      <div>
        <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.3rem', color: 'white', lineHeight: 1 }}>
          Verde<span style={{ color: '#D4A017' }}>Ser</span>
          <sup style={{ fontSize: '0.5em', color: 'rgba(255,255,255,0.7)' }}>®</sup>
        </div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.08em', marginTop: '1px' }}>
          CALIDAD RESPONSABLE
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const WS = 'https://wa.me/524462630747';

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(27, 94, 32, 0.97)' : '#1B5E20',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.3)' : 'none',
      transition: 'all 0.3s ease',
      padding: '0 24px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        <VerdeLogo />

        {/* Desktop Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="desktop-nav">
          {['#catalogo', '#negocios', '#contacto'].map((href, i) => (
            <Link key={i} href={href} style={{
              fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.9rem',
              color: 'rgba(255,255,255,0.85)', textDecoration: 'none',
              transition: 'color 0.2s', letterSpacing: '0.04em'
            }}
            onMouseEnter={e => (e.target as HTMLElement).style.color = '#F5C842'}
            onMouseLeave={e => (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.85)'}
            >
              {['Catálogo', 'Mayoreo', 'Contacto'][i]}
            </Link>
          ))}
          <a href={`${WS}?text=${encodeURIComponent('¡Hola! Quiero pedir pulpas VerdeSer.')}`}
            target="_blank" rel="noopener noreferrer" className="btn-gold"
            style={{ padding: '10px 22px', fontSize: '0.85rem' }}>
            Pedir Ahora 🌿
          </a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          padding: 8, display: 'none', color: 'white'
        }} className="mobile-menu-btn" aria-label="Menú">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: '#1B5E20', borderTop: '1px solid rgba(255,255,255,0.1)',
          padding: '16px 24px 24px', display: 'flex', flexDirection: 'column', gap: 16
        }}>
          {['#catalogo', '#negocios', '#contacto'].map((href, i) => (
            <Link key={i} href={href} onClick={() => setMenuOpen(false)} style={{
              fontFamily: 'var(--font-heading)', fontWeight: 600,
              color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontSize: '1rem'
            }}>
              {['🌿 Catálogo', '🏪 Mayoreo', '📞 Contacto'][i]}
            </Link>
          ))}
          <a href={`${WS}?text=${encodeURIComponent('¡Hola! Quiero pedir pulpas VerdeSer.')}`}
            target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ textAlign: 'center' }}>
            Pedir Ahora por WhatsApp
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
