import { z } from "zod";
import { createTRPCRouter, publicProcedure, paidProcedure as protectedProcedure } from "@/server/trpc";
import { refineNotes, generateFlashcards } from '@/lib/notes-ai';
import { examCoreDb } from '@/lib/prisma';

export const contentRouter = createTRPCRouter({
    /**
     * Get all ICSE subjects
     */
    getSubjects: publicProcedure.query(async () => {
        const subjects = await examCoreDb.subject.findMany({
            // orderBy: { orderIndex: "asc" },
        });
        return subjects;
    }),

    /**
     * Get chapters for a specific subject
     */
    getChaptersBySubject: publicProcedure
        .input(z.object({ subjectId: z.string() }))
        .query(async ({ input }) => {
            const chapters = await examCoreDb.chapter.findMany({
                where: { subjectId: input.subjectId },
                orderBy: { orderIndex: "asc" },
                include: {
                    subject: true,
                    _count: {
                        select: { topics: true },
                    },
                },
            });
            return chapters;
        }),

    /**
     * Get topics for a specific chapter
     */
    getTopicsByChapter: publicProcedure
        .input(z.object({ chapterId: z.string() }))
        .query(async ({ input }) => {
            const topics = await examCoreDb.topic.findMany({
                where: { chapterId: input.chapterId },
                orderBy: { orderIndex: "asc" },
            });
            return topics;
        }),

    /**
     * Get content for a specific topic
     */
    getTopicContent: publicProcedure
        .input(z.object({ topicId: z.string() }))
        .query(async ({ input }) => {
            const topic = await examCoreDb.topic.findUnique({
                where: { id: input.topicId },
                include: {
                    chapter: {
                        include: {
                            subject: true,
                        },
                    },
                },
            });
            // We removed Contents from examCoreDb temporarily, returning just topic
            return { ...topic, contents: [] };
        }),

    /**
     * Get notes for current user (optionally filtered by topic)
     */
    getNotes: protectedProcedure
        .input(
            z.object({
                topicId: z.string().optional(),
            })
        )
        .query(async ({ ctx, input }) => {
            const notes = await ctx.prisma.note.findMany({
                where: {
                    studentId: ctx.user.id,
                    ...(input.topicId && { topicId: input.topicId }),
                },
                orderBy: { updatedAt: "desc" },
                include: {
                    flashCards: true,
                },
            });

            // Manually fetch topics
            const topicIds = notes.map((n) => n.topicId).filter(Boolean) as string[];
            const topics = await examCoreDb.topic.findMany({
                where: { id: { in: topicIds } },
                include: { chapter: { include: { subject: true } } },
            });

            return notes.map((note) => ({
                ...note,
                topic: note.topicId ? topics.find((t) => t.id === note.topicId) || null : null,
            }));
        }),

    /**
     * Create a new note
     */
    createNote: protectedProcedure
        .input(
            z.object({
                topicId: z.string().optional(),
                subject: z.string().optional(),
                title: z.string().min(1),
                content: z.string(),
            })
        )
        .mutation(async ({ ctx, input }) => {
            // ... imports

            // Refine with AI
            let refinedContent = input.content;
            try {
                refinedContent = await refineNotes({
                    rawContent: input.content,
                    subject: input.subject, // Pass subject for better context
                });
            } catch (error) {
                console.error('AI Refinement Error:', error);
            }

            const note = await ctx.prisma.note.create({
                data: {
                    studentId: ctx.user.id,
                    topicId: input.topicId || undefined, // Use undefined for optional relation
                    title: input.title,
                    content: refinedContent,
                    tags: input.subject ? [input.subject] : undefined, // Use undefined for optional JSON
                },
            });

            // Generate flashcards
            try {
                const flashcards = await generateFlashcards(refinedContent);

                if (flashcards.length > 0) {
                    await Promise.all(
                        flashcards.map(fc =>
                            ctx.prisma.flashCard.create({
                                data: {
                                    noteId: note.id,
                                    front: fc.question,
                                    back: fc.answer,
                                    difficulty: fc.difficulty.toUpperCase() as any,
                                },
                            })
                        )
                    );
                }
            } catch (error) {
                console.error('Flashcard generation failed:', error);
            }

            return { success: true, note };
        }),

    /**
     * Update an existing note
     */
    updateNote: protectedProcedure
        .input(
            z.object({
                noteId: z.string(),
                title: z.string().min(1).optional(),
                content: z.string().optional(),
            })
        )
        .mutation(async ({ ctx, input }) => {
            const note = await ctx.prisma.note.update({
                where: { id: input.noteId },
                data: {
                    ...(input.title && { title: input.title }),
                    ...(input.content && { content: input.content }),
                },
            });

            return { success: true, note };
        }),

    /**
     * Delete a note
     */
    deleteNote: protectedProcedure
        .input(z.object({ noteId: z.string() }))
        .mutation(async ({ ctx, input }) => {
            await ctx.prisma.note.delete({
                where: { id: input.noteId },
            });

            return { success: true };
        }),
});
