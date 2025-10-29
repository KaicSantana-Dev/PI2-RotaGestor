import { PrismaClient  } from '../generated/prisma/index.js';
const prisma = new PrismaClient()

async function getVeiculos() {
    const user = await prisma.veiculos.findMany()
    console.log(user)
}

getVeiculos()