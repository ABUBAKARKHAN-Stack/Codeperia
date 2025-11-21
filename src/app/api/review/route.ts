import { client } from '@/sanity/lib/client';
import { NextRequest, NextResponse } from 'next/server'

export const POST = async (request: NextRequest) => {
    try {
        const body = await request.json();

        if (!body) {
            return NextResponse.json(
                { message: "Invalid request body" },
                { status: 400 }
            );
        }

        const review = await client.create({
            _type: "review",
            ...body,
        });

        return NextResponse.json(
            {
                message: "Review created successfully",
                data: review,
            },
            { status: 201 }
        );
    } catch (error: any) {
        console.error("Error Creating Review :: ", error);

        return NextResponse.json(
            {
                message: error?.message || "Failed to create review",
            },
            { status: 500 }
        );
    }
};
