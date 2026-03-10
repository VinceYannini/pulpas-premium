export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex text-slate-800 dark:text-slate-200">
            {/* Sidebar */}
            <aside className="w-64 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 hidden md:block">
                <div className="h-full flex flex-col p-4">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">PULPAS Admin</h2>
                    </div>
                    <nav className="space-y-2 flex-1">
                        <a href="/admin" className="block px-4 py-2 rounded-lg bg-indigo-50 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300 font-medium">Dashboard</a>
                        <a href="/admin/products" className="block px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 font-medium">Inventario</a>
                        <a href="/admin/orders" className="block px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 font-medium">Pedidos</a>
                        <a href="/admin/customers" className="block px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 font-medium">Clientes</a>
                        <a href="/admin/finance" className="block px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 font-medium">Finanzas</a>
                    </nav>
                    <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                        <p className="text-sm text-slate-500 dark:text-slate-400">Sesión iniciada como Admin</p>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8">
                {children}
            </main>
        </div>
    )
}
