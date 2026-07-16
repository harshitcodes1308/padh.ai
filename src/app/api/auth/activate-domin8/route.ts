import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
    try {
        const { userId } = await auth();
        if (!userId) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });

        const { code } = await req.json();

        if (code !== process.env.DOMIN8_ACCESS_CODE) {
            return NextResponse.json({ success: false, error: "Invalid code" }, { status: 400 });
        }

        await prisma.user.update({
            where: { id: userId },
            data: { 
                planType: "YEARLY",
                subscriptionStatus: "ACTIVE",
                isPaid: true
            }
        });

        return NextResponse.json({ success: true });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
