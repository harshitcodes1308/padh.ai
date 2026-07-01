import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

/**
 * POST /api/auth/save-creator
 * body: { creatorCode: string | null }
 *
 * Saves (or clears) creator_code on the current user's record.
 * Called from onboarding "Who referred you?" step.
 * A null value is valid — means "None" was selected.
 */
export async function POST(request: NextRequest) {
    try {
        const session = await getSession();
        if (!session?.user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { creatorCode } = await request.json();

        if (!process.env.DATABASE_URL && process.env.NODE_ENV !== "production") {
            return NextResponse.json({ success: true, creatorCode: creatorCode || null });
        }

        // Validate — if code provided, it must exist
        if (creatorCode !== null && creatorCode !== undefined && creatorCode !== "") {
            const creator = await prisma.creator.findUnique({
                where: { creatorCode: String(creatorCode) },
            });
            if (!creator) {
                return NextResponse.json({ error: "Invalid creator code" }, { status: 400 });
            }
        }

        await prisma.user.update({
            where: { id: session.user.id },
            data: { creatorCode: creatorCode || null },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("[save-creator]", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}

/**
 * GET /api/auth/save-creator
 * Returns all creators for the dropdown.
 */
export async function GET() {
    try {
        if (!process.env.DATABASE_URL && process.env.NODE_ENV !== "production") {
            return NextResponse.json({ creators: [] });
        }

        const creators = await prisma.creator.findMany({
            select: { creatorName: true, creatorCode: true, discountPercentage: true },
            orderBy: { creatorName: "asc" },
        });
        return NextResponse.json({ creators });
    } catch (error) {
        console.error("[get-creators]", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
