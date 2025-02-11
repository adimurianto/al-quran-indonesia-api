import { PrismaClient } from '@prisma/client';
import { seedUser } from './seedUser';
import { seedQuran } from './seedQuran';
import { seedSura } from './seedSura';

const prisma = new PrismaClient();
async function seed(){
    await seedUser(prisma);
    await seedSura(prisma);
    await seedQuran(prisma);
}

seed().then(()=>{
    console.log("ALL SEEDING DONE")
})