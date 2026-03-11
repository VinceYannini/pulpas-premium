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
                    href={product.stock > 0 ? `https://wa.me/${wsNumber}?text=${encodeURIComponent('Más información sobre las PULPAS ...')}` : '#'}
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

      {/* About Us & Shipping Section */}
      <section className="mt-24 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

          {/* Quiénes Somos */}
          <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500 mb-6 drop-shadow-sm">
              ¿Quiénes Somos?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-6 text-lg">
              En <strong className="text-slate-800 dark:text-white">PULPAS Premium</strong>, creemos que la naturaleza hace el mejor trabajo.
              Somos una empresa orgullosamente mexicana dedicada a extraer, procesar y congelar
              la mejor selección de fruta del campo para llevarla directamente hasta tu mesa.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-slate-700 dark:text-slate-200">
                <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-500/20 flex items-center justify-center mr-4 text-orange-600 dark:text-orange-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                </div>
                <span className="font-semibold text-lg">100% Fruta Natural</span>
              </li>
              <li className="flex items-center text-slate-700 dark:text-slate-200">
                <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-500/20 flex items-center justify-center mr-4 text-orange-600 dark:text-orange-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                </div>
                <span className="font-semibold text-lg">Sin químicos ni conservadores</span>
              </li>
              <li className="flex items-center text-slate-700 dark:text-slate-200">
                <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-500/20 flex items-center justify-center mr-4 text-orange-600 dark:text-orange-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                </div>
                <span className="font-semibold text-lg">Procesos estandarizados de calidad</span>
              </li>
            </ul>
          </div>

          {/* Envíos a todo México */}
          <div className="bg-slate-900 dark:bg-slate-950 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden group border border-slate-700">
            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
              <svg className="w-full h-full text-indigo-500" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,100 C20,0 50,50 100,0 L100,100 Z" fill="currentColor" />
              </svg>
            </div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="bg-indigo-500/20 w-16 h-16 flex items-center justify-center rounded-2xl mb-6 shadow-[0_0_30px_rgba(99,102,241,0.3)]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-indigo-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Envíos a Todo México
              </h2>
              <p className="text-slate-400 font-medium leading-relaxed mb-6 text-lg flex-1">
                Garantizamos que el sabor natural llegue intacto hasta tu negocio o domicilio.
                Contamos con <strong className="text-indigo-400">logística nacional en frío</strong> para asegurar que
                nuestros productos conserven sus nutrientes, color y textura óptima.
              </p>

              <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-semibold">Cobertura Nacional</span>
                  <span className="text-green-400 flex items-center text-sm font-bold">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2"></span>
                    Activa
                  </span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full w-full"></div>
                </div>
                <p className="text-xs text-slate-400 mt-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-1 text-slate-500"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                  Monitoreo de temperatura 24/7 en tránsito.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Lead Capture Sector */}
      <section className="mt-24 mb-12 max-w-4xl mx-auto bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl shadow-xl overflow-hidden relative">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-pink-500/20 dark:bg-pink-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-indigo-500/20 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="p-8 md:p-12 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500 mb-4 tracking-tight">
              ¿Listo para probarlas?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 font-medium max-w-2xl mx-auto">
              Déjanos tus datos y nuestro asistente inteligente te contactará de inmediato por WhatsApp para resolver tus dudas o tomar tu pedido.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Nombre completo</label>
                <input type="text" id="name" className="w-full px-4 py-3 rounded-2xl bg-white/60 dark:bg-slate-800/60 border border-indigo-100 dark:border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all dark:text-white" placeholder="Ej. Juan Pérez" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">WhatsApp</label>
                <input type="tel" id="phone" className="w-full px-4 py-3 rounded-2xl bg-white/60 dark:bg-slate-800/60 border border-indigo-100 dark:border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all dark:text-white" placeholder="Ej. 55 1234 5678" />
              </div>
            </div>

            <div>
              <label htmlFor="interest" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">¿En qué estás interesado?</label>
              <select id="interest" className="w-full px-4 py-3 rounded-2xl bg-white/60 dark:bg-slate-800/60 border border-indigo-100 dark:border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all dark:text-white appearance-none">
                <option value="">Selecciona una opción</option>
                <option value="menudeo">Probar algunos sabores (Menudeo)</option>
                <option value="mayoreo">Venta para mi negocio (Mayoreo / Cajas)</option>
                <option value="duda">Tengo una duda general</option>
              </select>
            </div>

            <a
              href={`https://wa.me/${wsNumber}?text=${encodeURIComponent('Más información sobre las PULPAS ...')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 mt-4 rounded-xl shadow-lg shadow-indigo-500/30 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold text-lg hover:from-indigo-400 hover:to-purple-400 hover:-translate-y-0.5 transition-all flex justify-center items-center space-x-2 cursor-pointer"
            >
              <span>Enviar y contactar por WhatsApp</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M3.478 2.404a.75.75 0 00-.926.941l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.404z" />
              </svg>
            </a>
          </form>

          <div className="mt-8 flex items-center justify-center space-x-4">
            <div className="h-px bg-slate-200 dark:bg-slate-700 flex-1"></div>
            <span className="text-slate-400 dark:text-slate-500 font-medium text-xs uppercase tracking-wider">La forma más rápida</span>
            <div className="h-px bg-slate-200 dark:bg-slate-700 flex-1"></div>
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href={`https://wa.me/${wsNumber}?text=${encodeURIComponent('Más información sobre las PULPAS ...')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-6 py-3 font-semibold hover:bg-emerald-500 hover:text-white transition-all border border-emerald-500/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12.031 2.053c-5.46 0-9.889 4.428-9.889 9.888 0 1.745.454 3.447 1.317 4.954L2.083 22l5.267-1.382c1.464.796 3.12 1.215 4.814 1.215 5.462 0 9.894-4.428 9.894-9.887 0-5.46-4.432-9.893-9.895-9.893zm-.031 16.488c-1.47 0-2.914-.395-4.178-1.144l-.3-.178-3.1.813.828-3.023-.195-.311c-.822-1.309-1.256-2.822-1.256-4.385 0-4.593 3.738-8.33 8.333-8.33 4.594 0 8.331 3.738 8.331 8.331 0 4.591-3.737 8.33-8.331 8.33h-.132zm4.569-6.225c-.25-.125-1.481-.734-1.712-.818-.231-.083-.4-.125-.568.125-.169.25-.646.818-.793.985-.147.167-.294.188-.544.063-.25-.125-1.056-.39-2.013-1.246-.744-.666-1.246-1.49-1.393-1.74-.147-.25-.016-.385.109-.509.112-.112.25-.292.375-.438.125-.146.167-.25.25-.417.083-.167.042-.313-.021-.438-.063-.125-.568-1.369-.778-1.874-.204-.492-.411-.425-.568-.433-.146-.007-.313-.007-.48-.007s-.438.063-.667.313c-.229.25-.875.855-.875 2.085s.896 2.418 1.021 2.585c.125.167 1.761 2.686 4.267 3.766 2.054.885 2.52.813 3.063.771.554-.042 1.758-.719 2.008-1.416.25-.698.25-1.292.175-1.417-.075-.124-.275-.198-.525-.323z" />
              </svg>
              <span>Escribir directo al WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${wsNumber}?text=${encodeURIComponent('Más información sobre las PULPAS ...')}`}
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
