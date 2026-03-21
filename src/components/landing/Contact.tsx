// Contact.tsx — VerdeSer® contact / lead capture section
'use client';

export default function Contact() {
  const WS = 'https://wa.me/524462630747';

  return (
    <section id="contacto" style={{ padding: '80px 20px', background: '#FAF5E4' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }} className="contact-grid">

          {/* Left: Contact info */}
          <div>
            <span style={{
              display: 'inline-block',
              background: 'rgba(27,94,32,0.08)', border: '1px solid rgba(27,94,32,0.2)',
              color: '#2E7D32', padding: '5px 16px', borderRadius: 999,
              fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.78rem',
              letterSpacing: '0.08em', marginBottom: 16,
            }}>
              📞 CONTÁCTANOS
            </span>
            <h2 style={{
              fontFamily: 'var(--font-heading)', fontWeight: 900,
              fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', color: '#1a1a1a', marginBottom: 16,
            }}>
              ¿Tienes Dudas?<br />
              <span style={{ color: '#2E7D32' }}>Estamos aquí.</span>
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)', color: '#555',
              fontSize: '0.95rem', lineHeight: 1.7, marginBottom: 32,
            }}>
              Nuestro asistente inteligente y nuestro equipo humano están
              listos para atenderte. Respuesta inmediata por WhatsApp.
            </p>

            {/* Contact details */}
            {[
              { icon: '📱', label: 'WhatsApp', value: '+52 446 263 0747', href: `${WS}?text=${encodeURIComponent('¡Hola VerdeSer! Tengo una pregunta.')}` },
              { icon: '📧', label: 'Email', value: 'hola@verdeser.mx', href: 'mailto:hola@verdeser.mx' },
              { icon: '📍', label: 'Ubicación', value: 'Querétaro, México', href: '#' },
            ].map(c => (
              <a key={c.label} href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: 16,
                  padding: '16px 20px', borderRadius: 16, marginBottom: 12,
                  background: 'white', border: '1px solid #D9D0BB',
                  textDecoration: 'none', transition: 'all 0.2s',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}
              >
                <span style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: 'rgba(27,94,32,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.3rem', flexShrink: 0,
                }}>
                  {c.icon}
                </span>
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.72rem', color: '#2E7D32', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{c.label}</div>
                  <div style={{ fontFamily: 'var(--font-body)', color: '#1a1a1a', fontWeight: 600, fontSize: '0.95rem' }}>{c.value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Right: WhatsApp CTA card */}
          <div>
            <div style={{
              background: 'white', borderRadius: 24,
              border: '1px solid #D9D0BB',
              overflow: 'hidden',
              boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
            }}>
              {/* Card header */}
              <div style={{
                background: 'linear-gradient(135deg, #1B5E20, #2E7D32)',
                padding: '28px 28px 24px',
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-heading)', fontWeight: 900,
                  fontSize: '1.5rem', color: 'white', marginBottom: 6,
                }}>
                  ¿Listo para Probarlas?
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
                  Déjanos tus datos y nuestro asistente de IA te contactará de inmediato.
                </p>
              </div>

              <div style={{ padding: 28 }}>
                {/* Form fields */}
                {[
                  { id: 'contact-name', type: 'text', label: 'Nombre completo', placeholder: 'Ej. Juan Pérez' },
                  { id: 'contact-phone', type: 'tel', label: 'WhatsApp', placeholder: 'Ej. 55 1234 5678' },
                ].map(f => (
                  <div key={f.id} style={{ marginBottom: 16 }}>
                    <label htmlFor={f.id} style={{
                      display: 'block', fontFamily: 'var(--font-heading)', fontWeight: 700,
                      fontSize: '0.78rem', color: '#333', marginBottom: 6,
                      textTransform: 'uppercase', letterSpacing: '0.04em',
                    }}>
                      {f.label}
                    </label>
                    <input id={f.id} type={f.type} placeholder={f.placeholder} style={{
                      width: '100%', padding: '12px 16px',
                      border: '1.5px solid #D9D0BB', borderRadius: 12,
                      fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: '#1a1a1a',
                      outline: 'none', background: '#FAFAFA',
                    }} />
                  </div>
                ))}

                {/* Interest selector */}
                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="contact-interest" style={{
                    display: 'block', fontFamily: 'var(--font-heading)', fontWeight: 700,
                    fontSize: '0.78rem', color: '#333', marginBottom: 6,
                    textTransform: 'uppercase', letterSpacing: '0.04em',
                  }}>
                    ¿En qué estás interesado?
                  </label>
                  <select id="contact-interest" style={{
                    width: '100%', padding: '12px 16px',
                    border: '1.5px solid #D9D0BB', borderRadius: 12,
                    fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: '#1a1a1a',
                    outline: 'none', background: '#FAFAFA', appearance: 'none',
                  }}>
                    <option value="">Selecciona una opción</option>
                    <option value="menudeo">Probar algunos sabores (Menudeo)</option>
                    <option value="mayoreo">Venta para mi negocio (Mayoreo / Cajas)</option>
                    <option value="duda">Tengo una duda general</option>
                  </select>
                </div>

                {/* Primary CTA */}
                <a
                  href={`${WS}?text=${encodeURIComponent('¡Hola VerdeSer! Me gustaría recibir más información.')}`}
                  target="_blank" rel="noopener noreferrer"
                  className="btn-gold"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '1rem', marginBottom: 12 }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}>
                    <path d="M3.478 2.404a.75.75 0 00-.926.941l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.404z" />
                  </svg>
                  Enviar y Contactar por WhatsApp
                </a>

                <div style={{ textAlign: 'center', margin: '8px 0' }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: '#888' }}>— o —</span>
                </div>
                <a
                  href={`${WS}?text=${encodeURIComponent('¡Hola! Me gustaría recibir más información sobre las pulpas de VerdeSer.')}`}
                  target="_blank" rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.9rem', marginTop: 8 }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}>
                    <path d="M12.031 2.053c-5.46 0-9.889 4.428-9.889 9.888 0 1.745.454 3.447 1.317 4.954L2.083 22l5.267-1.382c1.464.796 3.12 1.215 4.814 1.215 5.462 0 9.894-4.428 9.894-9.887 0-5.46-4.432-9.893-9.895-9.893z"/>
                  </svg>
                  Escribir Directo al WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        .contact-grid a:hover {
          border-color: #2E7D32 !important;
          box-shadow: 0 4px 20px rgba(46,125,50,0.15) !important;
        }
      `}</style>
    </section>
  );
}
