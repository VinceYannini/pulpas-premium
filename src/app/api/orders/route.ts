import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
    try {
        const orders = await prisma.order.findMany({
            include: {
                customer: true,
                items: {
                    include: {
                        product: true
                    }
                }
            },
            orderBy: { createdAt: 'desc' }
        });
        return NextResponse.json(orders);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch orders' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // Calculate total amount from items if not provided
        let totalAmount = data.totalAmount;
        if (!totalAmount && data.items && data.items.length > 0) {
            totalAmount = data.items.reduce((acc: number, item: any) => acc + (item.price * item.quantity), 0);
        }

        const newOrder = await prisma.order.create({
            data: {
                customerId: data.customerId,
                totalAmount: totalAmount,
                status: data.status || 'PENDING',
                deliveryStatus: data.deliveryStatus || 'PENDING',
                deliveryZone: data.deliveryZone,
                deliveryDate: data.deliveryDate ? new Date(data.deliveryDate) : null,
                items: {
                    create: data.items.map((item: any) => ({
                        productId: item.productId,
                        quantity: item.quantity,
                        price: item.price
                    }))
                }
            },
            include: {
                customer: true,
                items: true
            }
        });

        // Optionally update inventory here (subtract stock)
        for (const item of data.items) {
            await prisma.product.update({
                where: { id: item.productId },
                data: { stock: { decrement: item.quantity } }
            });
        }

        return NextResponse.json(newOrder, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create order' }, { status: 500 });
    }
}
