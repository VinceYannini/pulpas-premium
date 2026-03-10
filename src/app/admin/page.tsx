import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
    const [productsCount, ordersCount, totalRevenueResult, lowStockProducts] = await Promise.all([
        prisma.product.count(),
        prisma.order.count(),
        prisma.order.aggregate({
            _sum: { totalAmount: true },
            where: { status: 'PAID' }
        }),
        prisma.product.findMany({
            where: { stock: { lt: 10 } },
            take: 5
        })
    ]);

    const totalRevenue = totalRevenueResult._sum.totalAmount || 0;

    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">Dashboard General</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
                    <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Ingresos (Pagados)</h3>
                    <p className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">${totalRevenue.toFixed(2)}</p>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
                    <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Pedidos Totales</h3>
                    <p className="text-4xl font-bold">{ordersCount}</p>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
                    <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Productos Catalogados</h3>
                    <p className="text-4xl font-bold">{productsCount}</p>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                    Stock Bajo - Reabastecimiento Sugerido
                </h2>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-200 dark:border-slate-700">
                                <th className="pb-3 px-4 font-medium text-slate-500 dark:text-slate-400">Producto</th>
                                <th className="pb-3 px-4 font-medium text-slate-500 dark:text-slate-400 text-right">Stock Actual</th>
                                <th className="pb-3 px-4 font-medium text-slate-500 dark:text-slate-400">Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lowStockProducts.length === 0 ? (
                                <tr>
                                    <td colSpan={3} className="py-8 text-center text-slate-500">Todo tu inventario tiene buen stock.</td>
                                </tr>
                            ) : (
                                lowStockProducts.map(product => (
                                    <tr key={product.id} className="border-b border-slate-100 dark:border-slate-800 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                        <td className="py-4 px-4 font-medium">{product.name}</td>
                                        <td className="py-4 px-4 text-right">
                                            <span className={`font-bold ${product.stock === 0 ? 'text-rose-500' : 'text-amber-500'}`}>
                                                {product.stock}
                                            </span>
                                        </td>
                                        <td className="py-4 px-4">
                                            {product.stock === 0 ? (
                                                <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-md bg-rose-100 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400">Agotado</span>
                                            ) : (
                                                <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-md bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400">Por agotar</span>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
