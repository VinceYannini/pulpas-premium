// B2B.tsx — VerdeSer® B2B / Mayoreo section
export default function B2B() {
  const WS = 'https://wa.me/524462630747';
  const wsMayoreo = encodeURIComponent('¡Hola VerdeSer! Me interesa información de precios de Mayoreo para mi negocio.');

  const benefits = [
    { icon: '📦', title: 'Stock Garantizado', desc: 'Producción continua para que nunca te fallen los suministros.' },
    { icon: '🌡️', title: 'Cadena de Frío', desc: 'Logística especializada para mantener calidad en todo momento.' },
    { icon: '✅', title: 'Trazabilidad', desc: 'Control de calidad documentado en cada lote de producción.' },
    { icon: '🚚', title: 'Entrega Confiable', desc: 'Rutas de entrega en QRO y envíos nacionales coordinados.' },
  ];

  const priceRows = [
    { cat: 'Pulpa de Frutas', items: [
      { name: 'Pulpa de Mango',    unit: '1 kg / bolsa', price: '$200' },
      { name: 'Pulpa de Maracuyá', unit: '1 kg / bolsa', price: '$200' },
      { name: 'Pulpa Frutos Rojos',unit: '1 kg / bolsa', price: '$800' },
      { name: 'Pulpa de Guanábana',unit: '1 kg / bolsa', price: '$850' },
    ]},
    { cat: 'Jugos Naturales', items: [
      { name: 'Jugo Verde Detox',  unit: 'Botella 500 ml', price: '$25' },
      { name: 'Jugo Verde Detox',  unit: 'Botella 1 Litro', price: '$44' },
      { name: 'Jugo de Betabel',   unit: 'Botella 500 ml', price: '$28' },
      { name: 'Jugo de Betabel',   unit: 'Botella 1 Litro', price: '$48' },
    ]},
  ];

  return (
    <section id="negocios" style={{ background: '#1B5E20' }}>
      {/* Top divider */}
      <div style={{ height: 4, background: 'linear-gradient(to right, transparent, #D4A017, #F5C842, #D4A017, transparent)' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 20px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(212,160,23,0.15)', border: '1px solid rgba(212,160,23,0.4)',
            color: '#F5C842', padding: '5px 16px', borderRadius: 999,
            fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.78rem',
            letterSpacing: '0.08em', marginBottom: 14,
          }}>
            🏪 PROGRAMA B2B — MAYOREO
          </span>
          <h2 style={{
            fontFamily: 'var(--font-heading)', fontWeight: 900,
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'white', marginBottom: 12,
          }}>
            ¿Tienes un Negocio?<br />
            <span style={{ color: '#F5C842' }}>Impulsa tus Márgenes.</span>
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '1rem',
            color: 'rgba(255,255,255,0.75)', maxWidth: 600, margin: '0 auto',
          }}>
            Surtimos a más de <strong style={{ color: '#F5C842' }}>50 restaurantes, cafeterías y revendedores</strong> en Querétaro.
            Olvídate de mermas con pulpa 100% natural lista para servir.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'start' }} className="b2b-grid">
          {/* Left: benefits */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.2rem',
              color: '#F5C842', marginBottom: 24,
            }}>
              ¿Por qué elegir VerdeSer?
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {benefits.map(b => (
                <div key={b.title} style={{
                  display: 'flex', gap: 16, alignItems: 'flex-start',
                  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 16, padding: '16px 20px',
                  transition: 'background 0.2s',
                }}>
                  <span style={{ fontSize: '1.8rem', flexShrink: 0 }}>{b.icon}</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'white', fontSize: '0.95rem', marginBottom: 4 }}>{b.title}</div>
                    <div style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.65)', fontSize: '0.85rem', lineHeight: 1.5 }}>{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            {/* Testimonial */}
            <div style={{
              background: 'rgba(212,160,23,0.1)', border: '1px solid rgba(212,160,23,0.3)',
              borderRadius: 16, padding: '20px 24px', marginTop: 24,
            }}>
              <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: 12 }}>
                "Incrementamos las ventas de smoothies un 30% gracias a la rapidez de la pulpa VerdeSer."
              </p>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: '#F5C842', fontSize: '0.8rem' }}>
                — Cafetería Local, Querétaro
              </div>
            </div>
          </div>

          {/* Right: price list */}
          <div>
            <div style={{
              background: 'white', borderRadius: 20, overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
            }}>
              {/* Price list header */}
              <div style={{
                background: '#1B5E20', padding: '20px 24px',
                display: 'flex', alignItems: 'center', gap: 12,
              }}>
                <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
                  <rect width="40" height="40" rx="8" fill="rgba(255,255,255,0.15)"/>
                  <path d="M20 8 C20 8 14 16 14 22 C14 27 17 31 20 33 C20 33 20 20 26 14 C23 12 20 8 20 8Z" fill="white"/>
                  <rect x="22" y="10" width="8" height="6" rx="1" fill="#D4A017"/>
                </svg>
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '1rem', color: 'white' }}>
                    Verde<span style={{ color: '#D4A017' }}>Ser</span>®
                  </div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.06em' }}>
                    LISTA DE PRECIOS — MAYOREO
                  </div>
                </div>
              </div>

              <div style={{ padding: '20px 24px' }}>
                {priceRows.map(row => (
                  <div key={row.cat} style={{ marginBottom: 20 }}>
                    <div style={{
                      fontFamily: 'var(--font-heading)', fontWeight: 800,
                      fontSize: '0.78rem', color: '#2E7D32',
                      textTransform: 'uppercase', letterSpacing: '0.06em',
                      marginBottom: 10, borderBottom: '2px solid #C8E6C9', paddingBottom: 6,
                    }}>
                      {row.cat}
                    </div>
                    {row.items.map(item => (
                      <div key={`${item.name}-${item.unit}`} style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        padding: '8px 0', borderBottom: '1px solid #f0f0f0',
                      }}>
                        <div>
                          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.85rem', color: '#1a1a1a' }}>{item.name}</div>
                          <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: '#888' }}>{item.unit}</div>
                        </div>
                        <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1rem', color: '#D4A017' }}>{item.price}</div>
                      </div>
                    ))}
                  </div>
                ))}

                {/* Footer badges */}
                <div style={{ display: 'flex', gap: 8, marginTop: 12, justifyContent: 'center' }}>
                  {['🌿 100% Pulpa', '✗ Sin Conservadores', '♻ Eco-Friendly'].map(b => (
                    <span key={b} style={{
                      fontFamily: 'var(--font-body)', fontSize: '0.65rem', fontWeight: 600,
                      color: '#2E7D32', background: '#E8F5E9', borderRadius: 999, padding: '3px 8px',
                    }}>{b}</span>
                  ))}
                </div>

                <a href={`${WS}?text=${wsMayoreo}`}
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'block', marginTop: 16, background: '#D4A017', color: '#1B5E20',
                    fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.9rem',
                    padding: '14px', borderRadius: 12, textDecoration: 'none', textAlign: 'center',
                  }}>
                  Solicitar Cotización B2B →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: 4, background: 'linear-gradient(to right, transparent, #D4A017, #F5C842, #D4A017, transparent)' }} />

      <style>{`
        @media (max-width: 768px) {
          .b2b-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
