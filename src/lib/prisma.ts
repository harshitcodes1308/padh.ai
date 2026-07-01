import { PrismaClient } from "@prisma/client";
import { PrismaClient as ExamCoreClient } from "@prisma-exam-core/client";

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
    examCoreDb: ExamCoreClient | undefined;
};

export const prisma =
    globalForPrisma.prisma ??
    new PrismaClient({
        log:
            process.env.NODE_ENV === "development"
                ? ["query", "error", "warn"]
                : ["error"],
    });

export const examCoreDb =
    globalForPrisma.examCoreDb ??
    new ExamCoreClient({
        log:
            process.env.NODE_ENV === "development"
                ? ["query", "error", "warn"]
                : ["error"],
    });

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
    globalForPrisma.examCoreDb = examCoreDb;
}
