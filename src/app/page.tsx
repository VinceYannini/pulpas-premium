import prisma from '@/lib/prisma';
import Image from 'next/image';

export const dynamic = 'force-dynamic'; // Ensure we always get the latest stock

export default async function Home() {
  const products = await prisma.product.findMany({
    where: { isPublic: true },
    orderBy: { createdAt: 'desc' },
  });

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
              className="group relative overflow-hidden rounded-3xl bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1 duration-300"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                    {product.name}
                  </h2>
                  <span className="inline-flex items-center rounded-full bg-indigo-50 dark:bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-700 dark:text-indigo-400 ring-1 ring-inset ring-indigo-700/10 dark:ring-indigo-400/20">
                    ${product.price.toFixed(2)} MXN
                  </span>
                </div>

                <p className="text-slate-600 dark:text-slate-400 mb-6 min-h-[3rem] font-medium text-sm">
                  {product.description || 'Deliciosa pulpa natural, lista para preparar y disfrutar.'}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-200/50 dark:border-white/5">
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${product.stock > 0 ? 'bg-emerald-500' : 'bg-rose-500'}`}></div>
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      {product.stock > 0 ? `${product.stock} Disponibles` : 'Agotado'}
                    </span>
                  </div>

                  <button
                    disabled={product.stock === 0}
                    className="flex shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-5 py-2 text-sm font-semibold text-white shadow-md hover:from-indigo-400 hover:to-purple-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95"
                  >
                    {product.stock > 0 ? 'Ordenar' : 'Sin Stock'}
                  </button>
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

      <footer className="mt-24 border-t border-slate-200/50 dark:border-white/10 pt-8 pb-12 text-center">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} PULPAS Premium. Todos los derechos reservados.
        </p>
      </footer>
    </main>
  );
}
