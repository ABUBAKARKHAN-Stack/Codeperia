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

export const DELETE = async (request: NextRequest) => {
    try {
        const { reviewId } = await request.json()

        if (!reviewId) {
            return NextResponse.json(
                { message: "Review ID is required" },
                { status: 400 }
            );
        }

        await client
            .delete(reviewId)

        return NextResponse.json(
            {
                message: "Review Deleted successfully",
                data: undefined,
            },
            { status: 200 }
        );

    } catch (error: any) {
        return NextResponse.json(
            {
                message: error?.message || "Failed to delete review",
            },
            { status: 500 }
        );
    }
}