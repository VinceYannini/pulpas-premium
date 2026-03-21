// Products.tsx — VerdeSer® product catalog
import type { Product } from '@prisma/client';

const WS_BASE = 'https://wa.me/524462630747';

const CATEGORY_CONFIG: Record<string, { color: string; bgGrad: string; emoji: string; label: string; presentations: string[]; ingredients: string; conservacion: string }> = {
  mango:     { color: '#D4A017', bgGrad: 'linear-gradient(135deg,#FFF8DC,#FFF3A0)', emoji: '🥭', label: 'Pulpa de Mango',      presentations: ['1 kg','5 kg','20 kg'], ingredients: '100% Pulpa de Mango',       conservacion: 'Mantener congelado a -18°C' },
  maracuya:  { color: '#E68A00', bgGrad: 'linear-gradient(135deg,#FFF3D0,#FFE5A0)', emoji: '🌺', label: 'Pulpa de Maracuyá',   presentations: ['500g','1 kg','5 kg'],   ingredients: '100% Pulpa de Maracuyá',    conservacion: 'Mantener congelado a -18°C' },
  guanabana: { color: '#2E7D32', bgGrad: 'linear-gradient(135deg,#E8F5E9,#C8E6C9)', emoji: '🍵', label: 'Pulpa de Guanábana',  presentations: ['1 kg','5 kg','20 kg'], ingredients: '100% Pulpa de Guanábana',   conservacion: 'Mantener congelado a -18°C' },
  betabel:   { color: '#C62828', bgGrad: 'linear-gradient(135deg,#FFEBEE,#FFCDD2)', emoji: '🔴', label: 'Jugo de Betabel',     presentations: ['500ml','1 L'],          ingredients: 'Betabel, Manzana, Zanahoria, Limón', conservacion: 'Refrigerar a 4°C' },
  verde:     { color: '#388E3C', bgGrad: 'linear-gradient(135deg,#F1F8E9,#DCEDC8)', emoji: '🥤', label: 'Jugo Verde Detox',    presentations: ['500ml','1 L'],          ingredients: 'Piña, Nopal, Apio, Espinaca',        conservacion: 'Refrigerar a 4°C' },
};

function getCategoryKey(name: string): string {
  const n = name.toLowerCase();
  if (n.includes('mango'))    return 'mango';
  if (n.includes('maracuy'))  return 'maracuya';
  if (n.includes('guan'))     return 'guanabana';
  if (n.includes('betabel'))  return 'betabel';
  if (n.includes('verde') || n.includes('detox')) return 'verde';
  return 'mango';
}

function ProductCard({ product }: { product: Product }) {
  const cat = getCategoryKey(product.name);
  const cfg = CATEGORY_CONFIG[cat];
  const wsMsg = encodeURIComponent(`¡Hola VerdeSer! Me interesa ${product.name}. ¿Cuál es el precio?`);

  return (
    <article className="vs-card" style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Top banner */}
      <div style={{
        background: cfg.bgGrad, padding: '28px 20px 20px',
        textAlign: 'center', position: 'relative',
      }}>
        <span style={{ fontSize: '3.5rem', lineHeight: 1 }}>{cfg.emoji}</span>
        {product.stock > 0 && (
          <div style={{
            position: 'absolute', top: 12, right: 12,
            background: '#2E7D32', color: 'white',
            borderRadius: 999, padding: '3px 10px',
            fontSize: '0.7rem', fontWeight: 700, fontFamily: 'var(--font-heading)',
          }}>
            ✓ En stock
          </div>
        )}
        {product.stock === 0 && (
          <div style={{
            position: 'absolute', top: 12, right: 12,
            background: '#C62828', color: 'white',
            borderRadius: 999, padding: '3px 10px',
            fontSize: '0.7rem', fontWeight: 700, fontFamily: 'var(--font-heading)',
          }}>
            Agotado
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div>
          <h3 style={{
            fontFamily: 'var(--font-heading)', fontWeight: 800,
            fontSize: '1.1rem', color: '#1a1a1a', marginBottom: 4,
          }}>
            {product.name}
          </h3>
          {product.description && (
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: '#555', lineHeight: 1.5 }}>
              {product.description}
            </p>
          )}
        </div>

        {/* Ingredientes */}
        <div style={{ background: '#FAF5E4', borderRadius: 10, padding: '10px 12px' }}>
          <div style={{
            fontFamily: 'var(--font-heading)', fontWeight: 700,
            fontSize: '0.72rem', color: cfg.color, marginBottom: 4,
            textTransform: 'uppercase', letterSpacing: '0.06em',
          }}>
            Ingredientes:
          </div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: '#333' }}>
            {product.description?.includes('Ingredientes:')
              ? product.description.split('Ingredientes:')[1]?.split('\n')[0]?.trim()
              : cfg.ingredients}
          </div>
        </div>

        {/* Presentaciones */}
        <div>
          <div style={{
            fontFamily: 'var(--font-heading)', fontWeight: 700,
            fontSize: '0.72rem', color: '#666',
            textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8,
          }}>
            Presentaciones:
          </div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {cfg.presentations.map(p => (
              <span key={p} style={{
                background: 'white', border: `1px solid ${cfg.color}40`,
                borderRadius: 8, padding: '4px 10px',
                fontFamily: 'var(--font-heading)', fontWeight: 700,
                fontSize: '0.75rem', color: cfg.color,
              }}>
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Conservación */}
        <div style={{
          background: 'rgba(0,0,0,0.03)', borderRadius: 8,
          padding: '8px 12px', display: 'flex', gap: 6, alignItems: 'center',
        }}>
          <span style={{ fontSize: '0.9rem' }}>❄️</span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: '#444' }}>
            {cfg.conservacion}
          </span>
        </div>

        {/* Price row */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          paddingTop: 8, borderTop: '1px solid #eee', marginTop: 'auto',
        }}>
          <div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: '#888' }}>Desde</div>
            <div style={{
              fontFamily: 'var(--font-heading)', fontWeight: 800,
              fontSize: '1.4rem', color: cfg.color,
            }}>
              ${product.price.toFixed(0)}
              <span style={{ fontSize: '0.65rem', fontWeight: 600, color: '#888', marginLeft: 2 }}>MXN</span>
            </div>
          </div>
          <a
            href={product.stock > 0 ? `${WS_BASE}?text=${wsMsg}` : '#'}
            target={product.stock > 0 ? '_blank' : undefined}
            rel="noopener noreferrer"
            style={{
              background: product.stock > 0 ? cfg.color : '#ccc',
              color: product.stock > 0 ? '#1B5E20' : 'white',
              fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.8rem',
              padding: '10px 18px', borderRadius: 999, textDecoration: 'none',
              transition: 'all 0.2s', cursor: product.stock > 0 ? 'pointer' : 'not-allowed',
              pointerEvents: product.stock > 0 ? 'auto' : 'none',
            }}
          >
            {product.stock > 0 ? '🛒 Pedir' : 'Sin stock'}
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Products({ products }: { products: Product[] }) {
  const WS_CATALOG = encodeURIComponent('¡Hola VerdeSer! Quiero ver el catálogo completo con precios de mayoreo.');

  return (
    <section id="catalogo" style={{ padding: '80px 20px', background: '#FAF5E4' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(27,94,32,0.08)', border: '1px solid rgba(27,94,32,0.2)',
            color: '#2E7D32', padding: '5px 16px', borderRadius: 999,
            fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.78rem',
            letterSpacing: '0.08em', marginBottom: 14,
          }}>
            🌿 CATÁLOGO DE PRODUCTOS
          </span>
          <h2 style={{
            fontFamily: 'var(--font-heading)', fontWeight: 900,
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#1a1a1a', marginBottom: 12,
          }}>
            Nuestros <span style={{ color: '#2E7D32' }}>Sabores Naturales</span>
          </h2>
          <div className="vs-divider" style={{ maxWidth: 400, margin: '0 auto 16px' }}>
            Selección Premium
          </div>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '1rem', color: '#555',
            maxWidth: 600, margin: '0 auto',
          }}>
            Pulpa 100% natural, sin conservadores ni colorantes. Desde los clásicos hasta los más exóticos.
          </p>
        </div>

        {/* Products grid */}
        {products.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 24,
          }}>
            {products.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        ) : (
          /* Fallback showcards when DB is empty */
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
            {Object.entries(CATEGORY_CONFIG).map(([key, cfg]) => (
              <article key={key} className="vs-card">
                <div style={{ background: cfg.bgGrad, padding: '28px 20px', textAlign: 'center' }}>
                  <span style={{ fontSize: '3.5rem' }}>{cfg.emoji}</span>
                </div>
                <div style={{ padding: 20 }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.1rem', marginBottom: 8 }}>
                    {cfg.label}
                  </h3>
                  <div style={{ background: '#FAF5E4', borderRadius: 10, padding: '10px 12px', marginBottom: 10 }}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.7rem', color: cfg.color, marginBottom: 4, textTransform: 'uppercase' }}>Ingredientes:</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: '#333' }}>{cfg.ingredients}</div>
                  </div>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 12 }}>
                    {cfg.presentations.map(p => (
                      <span key={p} style={{ background: 'white', border: `1px solid ${cfg.color}40`, borderRadius: 8, padding: '4px 10px', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.75rem', color: cfg.color }}>{p}</span>
                    ))}
                  </div>
                  <a href={`${WS_BASE}?text=${encodeURIComponent(`¡Hola! Me interesa ${cfg.label} de VerdeSer.`)}`}
                    target="_blank" rel="noopener noreferrer"
                    style={{ display: 'block', background: cfg.color, color: '#1B5E20', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.85rem', padding: '10px', borderRadius: 999, textDecoration: 'none', textAlign: 'center' }}>
                    🛒 Pedir por WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <a href={`${WS_BASE}?text=${WS_CATALOG}`}
            target="_blank" rel="noopener noreferrer"
            className="btn-primary">
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}>
              <path d="M12.031 2.053c-5.46 0-9.889 4.428-9.889 9.888 0 1.745.454 3.447 1.317 4.954L2.083 22l5.267-1.382c1.464.796 3.12 1.215 4.814 1.215 5.462 0 9.894-4.428 9.894-9.887 0-5.46-4.432-9.893-9.895-9.893z"/>
            </svg>
            Solicitar Catálogo Completo
          </a>
        </div>
      </div>
    </section>
  );
}
