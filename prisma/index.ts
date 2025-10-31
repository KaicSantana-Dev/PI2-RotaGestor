import { PrismaClient } from '../generated/prisma/index.js';

export const prisma = new PrismaClient();

export async function connect() {
  await prisma.$connect();
}
