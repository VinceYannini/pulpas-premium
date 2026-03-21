import prisma from '@/lib/prisma';
import type { Product } from '@prisma/client';
import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import Products from '@/components/landing/Products';
import B2B from '@/components/landing/B2B';
import Contact from '@/components/landing/Contact';
import FloatingCTA from '@/components/landing/FloatingCTA';

export default async function Home() {
  // Fetch public products from database
  let products: Product[] = [];
  try {
    products = await prisma.product.findMany({
      where: { isPublic: true },
      orderBy: { createdAt: 'desc' },
    });
  } catch {
    // Database might not be seeded — Products component handles empty array gracefully
    products = [];
  }

  return (
    <>
      {/* Fixed navigation */}
      <Navbar />

      {/* Hero — full-screen green brand section */}
      <Hero />

      {/* Product catalog */}
      <Products products={products} />

      {/* B2B Mayoreo section */}
      <B2B />

      {/* Contact / Lead capture */}
      <Contact />

      {/* Footer */}
      <footer style={{
        background: '#1B5E20',
        borderTop: '4px solid #D4A017',
        padding: '32px 24px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          {/* Logo row */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 12,
          }}>
            <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" rx="8" fill="rgba(255,255,255,0.1)"/>
              <path d="M20 8 C20 8 14 16 14 22 C14 27 17 31 20 33 C20 33 20 20 26 14 C23 12 20 8 20 8Z" fill="white"/>
              <rect x="22" y="10" width="8" height="6" rx="1" fill="#D4A017"/>
            </svg>
            <span style={{
              fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '1.2rem', color: 'white',
            }}>
              Verde<span style={{ color: '#D4A017' }}>Ser</span>
              <sup style={{ fontSize: '0.5em', opacity: 0.7 }}>®</sup>
            </span>
          </div>

          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '0.8rem',
            color: 'rgba(255,255,255,0.55)',
          }}>
            © {new Date().getFullYear()} VerdeSer® — Lo Mejor de la Fruta. Todos los derechos reservados.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '0.72rem',
            color: 'rgba(255,255,255,0.35)', marginTop: 4,
          }}>
            Querétaro, México · hola@verdeser.mx · +52 446 263 0747
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp button */}
      <FloatingCTA />
    </>
  );
}
