// FloatingCTA.tsx — VerdeSer® floating WhatsApp button
'use client';
import { useState, useEffect } from 'react';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const WS = `https://wa.me/524462630747?text=${encodeURIComponent('¡Hola VerdeSer! Me gustaría recibir más información.')}`;

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href={WS}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      style={{
        position: 'fixed', bottom: 28, right: 28, zIndex: 9999,
        width: 60, height: 60,
        background: '#25D366',
        borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 8px 32px rgba(37,211,102,0.45)',
        textDecoration: 'none',
        opacity: visible ? 1 : 0,
        transform: visible ? 'scale(1)' : 'scale(0)',
        transition: 'opacity 0.3s, transform 0.3s',
        animation: visible ? 'pulseGreen 2s infinite' : 'none',
      }}
      title="¡Chatea con nuestro asistente!"
    >
      {/* WhatsApp icon */}
      <svg viewBox="0 0 24 24" fill="white" style={{ width: 30, height: 30 }}>
        <path d="M12.031 2.053c-5.46 0-9.889 4.428-9.889 9.888 0 1.745.454 3.447 1.317 4.954L2.083 22l5.267-1.382c1.464.796 3.12 1.215 4.814 1.215 5.462 0 9.894-4.428 9.894-9.887 0-5.46-4.432-9.893-9.895-9.893zm-.031 16.488c-1.47 0-2.914-.395-4.178-1.144l-.3-.178-3.1.813.828-3.023-.195-.311c-.822-1.309-1.256-2.822-1.256-4.385 0-4.593 3.738-8.33 8.333-8.33 4.594 0 8.331 3.738 8.331 8.331 0 4.591-3.737 8.33-8.331 8.33h-.132zm4.569-6.225c-.25-.125-1.481-.734-1.712-.818-.231-.083-.4-.125-.568.125-.169.25-.646.818-.793.985-.147.167-.294.188-.544.063-.25-.125-1.056-.39-2.013-1.246-.744-.666-1.246-1.49-1.393-1.74-.147-.25-.016-.385.109-.509.112-.112.25-.292.375-.438.125-.146.167-.25.25-.417.083-.167.042-.313-.021-.438-.063-.125-.568-1.369-.778-1.874-.204-.492-.411-.425-.568-.433-.146-.007-.313-.007-.48-.007s-.438.063-.667.313c-.229.25-.875.855-.875 2.085s.896 2.418 1.021 2.585c.125.167 1.761 2.686 4.267 3.766 2.054.885 2.52.813 3.063.771.554-.042 1.758-.719 2.008-1.416.25-.698.25-1.292.175-1.417-.075-.124-.275-.198-.525-.323z"/>
      </svg>
    </a>
  );
}
