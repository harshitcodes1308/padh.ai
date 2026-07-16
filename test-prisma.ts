import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    const user = await prisma.user.create({
      data: {
        id: "test_user_" + Date.now(),
        email: "test" + Date.now() + "@example.com",
        name: "Test User",
        image: "https://example.com/image.jpg",
        role: 'STUDENT',
        onboardingComplete: false,
        authProvider: 'clerk',
        planType: 'FREE',
        subscriptionStatus: 'ACTIVE'
      },
    });
    console.log("Success:", user.id);
  } catch (err) {
    console.error("Prisma Error:", err);
  } finally {
    await prisma.$disconnect();
  }
}

main();
