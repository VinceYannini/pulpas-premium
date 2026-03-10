import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
    try {
        const products = await prisma.product.findMany({
            orderBy: { createdAt: 'desc' }
        });
        return NextResponse.json(products);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const newProduct = await prisma.product.create({
            data: {
                name: data.name,
                description: data.description,
                price: data.price,
                wholesalePrice: data.wholesalePrice,
                cost: data.cost,
                stock: data.stock !== undefined ? data.stock : 0,
                isPublic: data.isPublic !== undefined ? data.isPublic : true,
            }
        });
        return NextResponse.json(newProduct, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
    }
}
