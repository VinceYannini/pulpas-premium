// Hero.tsx — VerdeSer® premium hero section
'use client';

const WS_BASE = 'https://wa.me/524462630747';

export default function Hero() {
  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 50%, #1B5E20 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 72,
      }}
    >
      {/* Background leaf pattern */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {[...Array(6)].map((_, i) => (
          <svg
            key={i}
            viewBox="0 0 80 80"
            style={{
              position: 'absolute',
              opacity: 0.04 + i * 0.01,
              width: 120 + i * 40,
              height: 120 + i * 40,
              top: `${[10, 60, 20, 70, 5, 45][i]}%`,
              left: `${[5, 80, 50, 20, 90, 40][i]}%`,
              animation: `leafFloat ${4 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
              fill: 'white',
              transform: `rotate(${i * 60}deg)`,
            }}
          >
            <path d="M40 5 C20 5 8 20 8 40 C8 60 20 72 40 75 C60 72 72 60 72 40 C72 20 60 5 40 5Z" />
            <path d="M40 5 C40 5 28 25 28 42 C28 58 35 68 40 75 C40 75 40 40 55 25 C49 16 40 5 40 5Z" opacity="0.6"/>
          </svg>
        ))}
        {/* Gold horizontal line */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 4,
          background: 'linear-gradient(to right, transparent, #D4A017, #F5C842, #D4A017, transparent)'
        }} />
      </div>

      {/* Content */}
      <div style={{
        maxWidth: 1100, margin: '0 auto', padding: '60px 24px',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60,
        alignItems: 'center', position: 'relative', zIndex: 1,
      }} className="hero-grid">

        {/* Left text column */}
        <div>
          {/* Eyebrow badge */}
          <div className="animate-fade-up" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(212,160,23,0.2)', border: '1px solid rgba(212,160,23,0.5)',
            color: '#F5C842', padding: '6px 16px', borderRadius: 999,
            fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em',
            marginBottom: 20, fontFamily: 'var(--font-heading)',
          }}>
            🌿 CALIDAD RESPONSABLE
          </div>

          {/* Main headline */}
          <h1 className="animate-fade-up delay-100" style={{
            fontSize: 'clamp(2.4rem, 6vw, 4rem)',
            fontWeight: 900, color: 'white', marginBottom: 12, lineHeight: 1.05,
          }}>
            La Fruta que tu<br />
            <span style={{ color: '#F5C842' }}>Negocio Merece</span><br />
            Tener. 🥭
          </h1>

          {/* Divider */}
          <div className="animate-fade-up delay-200" style={{
            display: 'flex', alignItems: 'center', gap: 10, margin: '20px 0',
          }}>
            <div style={{ height: 1, flex: 1, background: 'rgba(212,160,23,0.5)' }} />
            <span style={{ color: '#D4A017', fontStyle: 'italic', fontFamily: 'var(--font-heading)', fontSize: '0.85rem' }}>
              100% Fruta Natural
            </span>
            <div style={{ height: 1, flex: 1, background: 'rgba(212,160,23,0.5)' }} />
          </div>

          {/* Subheadline */}
          <p className="animate-fade-up delay-200" style={{
            fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)',
            lineHeight: 1.7, marginBottom: 28, fontFamily: 'var(--font-body)',
          }}>
            Pulpa 100% natural, sin conservadores ni azúcar añadida.
            Surtimos a <strong style={{ color: '#F5C842' }}>+50 negocios en QRO</strong> y enviamos a todo México.
          </p>

          {/* Trust badges */}
          <div className="animate-fade-up delay-300" style={{
            display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 36,
          }}>
            {['✓ 100% Pulpa Natural', '✓ Sin Conservadores', '✓ Eco-Friendly'].map((badge) => (
              <span key={badge} style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
                color: 'white', padding: '7px 16px', borderRadius: 999,
                fontSize: '0.82rem', fontWeight: 600, fontFamily: 'var(--font-body)',
              }}>
                {badge}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="animate-fade-up delay-400" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a
              href="#catalogo"
              className="btn-gold animate-pulse-gold"
              style={{ fontSize: '1rem' }}
            >
              Ver Catálogo
            </a>
            <a
              href={`${WS_BASE}?text=${encodeURIComponent('¡Hola VerdeSer! Quiero información sobre sus pulpas.')}`}
              target="_blank" rel="noopener noreferrer"
              className="btn-outline"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}>
                <path d="M12.031 2.053c-5.46 0-9.889 4.428-9.889 9.888 0 1.745.454 3.447 1.317 4.954L2.083 22l5.267-1.382c1.464.796 3.12 1.215 4.814 1.215 5.462 0 9.894-4.428 9.894-9.887 0-5.46-4.432-9.893-9.895-9.893z"/>
              </svg>
              Escribir por WhatsApp
            </a>
          </div>
        </div>

        {/* Right product showcase */}
        <div className="animate-fade-in delay-300 hero-visual" style={{ position: 'relative' }}>
          {/* Main product display */}
          <div style={{
            background: 'rgba(255,255,255,0.07)', backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.15)', borderRadius: 28,
            padding: 32, textAlign: 'center',
          }}>
            {/* Logo large */}
            <div style={{ marginBottom: 20 }}>
              <svg width="80" height="80" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="10" fill="rgba(255,255,255,0.15)"/>
                <path d="M20 6 C12 6 8 14 8 20 C8 26 12 32 20 34 C28 32 32 26 32 20 C32 14 28 6 20 6Z" fill="white" opacity="0.1"/>
                <path d="M20 8 C20 8 14 16 14 22 C14 27 17 31 20 33 C20 33 20 20 26 14 C23 12 20 8 20 8Z" fill="white"/>
                <rect x="22" y="10" width="8" height="6" rx="1" fill="#D4A017"/>
              </svg>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '2rem', color: 'white', marginTop: 8 }}>
                Verde<span style={{ color: '#F5C842' }}>Ser</span><sup style={{ fontSize: '0.5em', opacity: 0.7, verticalAlign: 'super' }}>®</sup>
              </div>
            </div>

            {/* Product highlights grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 24 }}>
              {[
                { emoji: '🥭', name: 'Pulpa de Mango', size: '1kg · 5kg · 20kg' },
                { emoji: '🌺', name: 'Pulpa Maracuyá', size: '1kg · 5kg · 20kg' },
                { emoji: '🍵', name: 'Pulpa Guanábana', size: '1kg · 5kg · 20kg' },
                { emoji: '🥤', name: 'Jugo Verde Detox', size: '500ml · 1L' },
                { emoji: '🔴', name: 'Jugo de Betabel', size: '500ml · 1L' },
              ].map(p => (
                <div key={p.name} style={{
                  background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 14, padding: '12px 10px', textAlign: 'center',
                }}>
                  <div style={{ fontSize: '1.6rem', marginBottom: 4 }}>{p.emoji}</div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.72rem', color: 'white', lineHeight: 1.3 }}>{p.name}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', color: 'rgba(212,160,23,0.85)', marginTop: 3 }}>{p.size}</div>
                </div>
              ))}
              <div style={{
                background: 'rgba(212,160,23,0.15)', border: '1px solid rgba(212,160,23,0.3)',
                borderRadius: 14, padding: '12px 10px', textAlign: 'center', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
              }}>
                <div>
                  <div style={{ fontSize: '1.6rem' }}>+</div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.72rem', color: '#F5C842' }}>Más sabores</div>
                </div>
              </div>
            </div>

            <a
              href="#catalogo"
              style={{
                display: 'block', background: '#D4A017', color: '#1B5E20',
                fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.9rem',
                padding: '12px', borderRadius: 12, textDecoration: 'none', textAlign: 'center',
              }}
            >
              Ver Catálogo Completo →
            </a>
          </div>

          {/* Floating stat badges */}
          <div style={{
            position: 'absolute', top: -16, right: -16,
            background: '#D4A017', borderRadius: 999, padding: '8px 16px',
            fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.75rem',
            color: '#1B5E20', boxShadow: '0 4px 16px rgba(212,160,23,0.4)',
            whiteSpace: 'nowrap',
          }}>
            +50 negocios surítidos 🏪
          </div>
          <div style={{
            position: 'absolute', bottom: -16, left: -16,
            background: 'rgba(27,94,32,0.9)', border: '2px solid rgba(212,160,23,0.5)',
            borderRadius: 999, padding: '8px 16px',
            fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.75rem',
            color: '#F5C842', whiteSpace: 'nowrap',
          }}>
            Envíos Nx Fría a todo MX 🚚
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .hero-visual { display: none !important; }
        }
      `}</style>
    </section>
  );
}
