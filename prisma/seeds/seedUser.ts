import { PrismaClient } from '@prisma/client';
import bcrypt from "bcrypt";

export async function seedUser(prisma: PrismaClient) {
    const countUser = await prisma.user.count();

    if (countUser === 0) {
        await prisma.user.createMany({
            data: [
                {
                    fullName: "Adi Murianto",
                    email: "admin@admin.com",
                    password: await bcrypt.hash("admin", 12)
                }
            ]
        });

        console.log("Users seeded");
    } else {
        console.log("Users already seeded");
    }
} 