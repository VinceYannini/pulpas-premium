import prisma from '@/lib/prisma';
import Image from 'next/image';
import fresaImg from '../../public/img/pulpa-fresa.png';
import mangoImg from '../../public/img/pulpa-mango.png';

export default async function Home() {
  const products = await prisma.product.findMany({
    where: { isPublic: true },
    orderBy: { createdAt: 'desc' },
  });

  // Reemplazar este número por el de tu Agente de WhatsApp
  const wsNumber = '524462630747';

  return (
    <main className="min-h-screen p-6 md:p-12 max-w-7xl mx-auto">
      <header className="mb-12 text-center md:text-left pt-10">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 drop-shadow-sm">
          PULPAS Premium
        </h1>
        <p className="text-lg md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl font-light">
          Catálogo digital interactivo. Descubre nuestros sabores naturales, sin conservadores.
        </p>
      </header>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col relative overflow-hidden rounded-3xl bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1 duration-300"
            >
              <div className="relative w-full h-64 bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <Image
                  src={product.name.toLowerCase().includes('fresa') ? fresaImg : mangoImg}
                  alt={product.name}
                  fill
                  placeholder="blur"
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                    {product.name}
                  </h2>
                  <span className="inline-flex items-center rounded-full bg-indigo-50 dark:bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-700 dark:text-indigo-400 ring-1 ring-inset ring-indigo-700/10 dark:ring-indigo-400/20">
                    ${product.price.toFixed(2)}
                  </span>
                </div>

                <p className="text-slate-600 dark:text-slate-400 mb-6 min-h-[3rem] font-medium text-sm">
                  {product.description || 'Deliciosa pulpa natural, lista para preparar y disfrutar.'}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-200/50 dark:border-white/5">
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${product.stock > 0 ? 'bg-emerald-500' : 'bg-rose-500'}`}></div>
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      {product.stock > 0 ? `${product.stock} Dispo.` : 'Agotado'}
                    </span>
                  </div>

                  <a
                    href={product.stock > 0 ? `https://wa.me/${wsNumber}?text=${encodeURIComponent(`Hola, vi en el catálogo la ${product.name} y me gustaría ordenar.`)}` : '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex shrink-0 items-center justify-center rounded-full px-5 py-2 text-sm font-semibold text-white shadow-md transition-all active:scale-95 ${product.stock > 0 ? 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 focus-visible:outline-emerald-500' : 'bg-slate-400 cursor-not-allowed opacity-50'}`}
                  >
                    {product.stock > 0 ? 'Pedir por WhatsApp' : 'Sin Stock'}
                  </a>
                </div>
              </div>
            </div>
          ))}

          {products.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <h3 className="text-2xl font-bold text-slate-700 dark:text-slate-300">¡Vaya! No hay pulpas disponibles hoy.</h3>
              <p className="text-slate-500 mt-2">Vuelve más tarde para ver el inventario actualizado.</p>
            </div>
          )}
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${wsNumber}?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20las%20pulpas`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-50 flex items-center justify-center w-16 h-16 bg-emerald-500 text-white rounded-full shadow-2xl hover:bg-emerald-400 hover:scale-110 transition-all duration-300 group"
        aria-label="Contactar por WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M12.031 2.053c-5.46 0-9.889 4.428-9.889 9.888 0 1.745.454 3.447 1.317 4.954L2.083 22l5.267-1.382c1.464.796 3.12 1.215 4.814 1.215 5.462 0 9.894-4.428 9.894-9.887 0-5.46-4.432-9.893-9.895-9.893zm-.031 16.488c-1.47 0-2.914-.395-4.178-1.144l-.3-.178-3.1.813.828-3.023-.195-.311c-.822-1.309-1.256-2.822-1.256-4.385 0-4.593 3.738-8.33 8.333-8.33 4.594 0 8.331 3.738 8.331 8.331 0 4.591-3.737 8.33-8.331 8.33h-.132zm4.569-6.225c-.25-.125-1.481-.734-1.712-.818-.231-.083-.4-.125-.568.125-.169.25-.646.818-.793.985-.147.167-.294.188-.544.063-.25-.125-1.056-.39-2.013-1.246-.744-.666-1.246-1.49-1.393-1.74-.147-.25-.016-.385.109-.509.112-.112.25-.292.375-.438.125-.146.167-.25.25-.417.083-.167.042-.313-.021-.438-.063-.125-.568-1.369-.778-1.874-.204-.492-.411-.425-.568-.433-.146-.007-.313-.007-.48-.007s-.438.063-.667.313c-.229.25-.875.855-.875 2.085s.896 2.418 1.021 2.585c.125.167 1.761 2.686 4.267 3.766 2.054.885 2.52.813 3.063.771.554-.042 1.758-.719 2.008-1.416.25-.698.25-1.292.175-1.417-.075-.124-.275-.198-.525-.323z" />
        </svg>
        <span className="absolute right-full mr-4 bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden lg:block">¡Chatea con nuestro asistente!</span>
      </a>

      <footer className="mt-24 border-t border-slate-200/50 dark:border-white/10 pt-8 pb-12 text-center">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} PULPAS Premium. Todos los derechos reservados.
        </p>
      </footer>
    </main>
  );
}
