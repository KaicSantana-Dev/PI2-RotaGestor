/*
  Warnings:

  - You are about to drop the `Carro` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Funcionario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `GastosCombustivel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `GastosManutencao` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Usuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "TipoDeGasto" AS ENUM ('Combustivel', 'Manutencao');

-- DropForeignKey
ALTER TABLE "Carro" DROP CONSTRAINT "Carro_motoristaId_fkey";

-- DropForeignKey
ALTER TABLE "GastosCombustivel" DROP CONSTRAINT "GastosCombustivel_carroId_fkey";

-- DropForeignKey
ALTER TABLE "GastosManutencao" DROP CONSTRAINT "GastosManutencao_carroId_fkey";

-- DropTable
DROP TABLE "Carro";

-- DropTable
DROP TABLE "Funcionario";

-- DropTable
DROP TABLE "GastosCombustivel";

-- DropTable
DROP TABLE "GastosManutencao";

-- DropTable
DROP TABLE "Usuario";

-- DropEnum
DROP TYPE "Cargo";

-- DropEnum
DROP TYPE "TipodeGasto";

-- CreateTable
CREATE TABLE "usuarios" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "motorista" BOOLEAN NOT NULL DEFAULT false,
    "cnh" TEXT,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "carros" (
    "id" SERIAL NOT NULL,
    "modelo" TEXT NOT NULL,
    "placa" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'ativo',
    "imagem" TEXT,
    "motoristaId" INTEGER NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "carros_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gastos_combustivel" (
    "id" SERIAL NOT NULL,
    "carroId" INTEGER NOT NULL,
    "valor" DECIMAL(10,2) NOT NULL,
    "posto" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "gastos_combustivel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gastos_manutencao" (
    "id" SERIAL NOT NULL,
    "carroId" INTEGER NOT NULL,
    "valor" DECIMAL(10,2) NOT NULL,
    "local" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "gastos_manutencao_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "carros_placa_key" ON "carros"("placa");

-- AddForeignKey
ALTER TABLE "carros" ADD CONSTRAINT "carros_motoristaId_fkey" FOREIGN KEY ("motoristaId") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "gastos_combustivel" ADD CONSTRAINT "gastos_combustivel_carroId_fkey" FOREIGN KEY ("carroId") REFERENCES "carros"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "gastos_manutencao" ADD CONSTRAINT "gastos_manutencao_carroId_fkey" FOREIGN KEY ("carroId") REFERENCES "carros"("id") ON DELETE CASCADE ON UPDATE CASCADE;
