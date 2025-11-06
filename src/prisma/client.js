import { PrismaClient } from "@prisma/client"

// Instância única do Prisma Client (singleton pattern)
const prisma = new PrismaClient({
  log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
})

// Tratamento de erros de conexão
prisma
  .$connect()
  .then(() => {
    console.log("✅ Conectado ao banco de dados PostgreSQL")
  })
  .catch((error) => {
    console.error("❌ Erro ao conectar ao banco de dados:", error)
    process.exit(1)
  })

// Desconectar ao encerrar o processo
process.on("beforeExit", async () => {
  await prisma.$disconnect()
})

export default prisma
