import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    console.log('Seeding database...')

    // 1. Create Admin User
    const admin = await prisma.user.upsert({
        where: { email: 'admin@pulpas.com' },
        update: {},
        create: {
            email: 'admin@pulpas.com',
            name: 'Admin PULPAS',
            password: 'hashed_password_here', // In a real app, hash this
            role: 'ADMIN',
        },
    })
    console.log('Created Admin user')

    // 2. Create Products
    const pulpaFresa = await prisma.product.create({
        data: {
            name: 'Pulpa de Fresa (500g)',
            description: 'Pulpa natural de fresa, sin conservadores',
            price: 45.0,
            wholesalePrice: 35.0,
            cost: 20.0,
            stock: 50,
            isPublic: true,
        },
    })
    const pulpaMango = await prisma.product.create({
        data: {
            name: 'Pulpa de Mango (500g)',
            description: 'Pulpa natural de mango petacón',
            price: 50.0,
            wholesalePrice: 40.0,
            cost: 25.0,
            stock: 30,
            isPublic: true,
        },
    })
    console.log('Created Products')

    // 3. Create Customers
    const customer1 = await prisma.customer.create({
        data: {
            name: 'Juan Pérez',
            phone: '5551234567',
            type: 'MENUDEO',
            points: 10,
        },
    })
    const customer2 = await prisma.customer.create({
        data: {
            name: 'Cafetería La Parroquia',
            phone: '5559876543',
            type: 'MAYOREO',
            points: 50,
        },
    })
    console.log('Created Customers')

    // 4. Create an Order
    const order1 = await prisma.order.create({
        data: {
            customerId: customer1.id,
            totalAmount: 95.0,
            status: 'PAID',
            deliveryStatus: 'DELIVERED',
            deliveryZone: 'Centro',
            items: {
                create: [
                    {
                        productId: pulpaFresa.id,
                        quantity: 1,
                        price: 45.0,
                    },
                    {
                        productId: pulpaMango.id,
                        quantity: 1,
                        price: 50.0,
                    },
                ],
            },
        },
    })
    console.log('Created Order')

    // 5. Create an Expense
    const expense1 = await prisma.expense.create({
        data: {
            description: 'Compra de 20kg de Fresa',
            amount: 400.0,
            category: 'MATERIA_PRIMA',
        },
    })
    console.log('Created Expense')

    console.log('Seeding finished.')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
