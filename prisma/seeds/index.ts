import { PrismaClient } from '@prisma/client';
import { seedUser } from './seedUser';

const prisma = new PrismaClient();
async function seed(){
    await seedUser(prisma);
}

seed().then(()=>{
    console.log("ALL SEEDING DONE")
})