/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "TipodeGasto" AS ENUM ('Combustivel', 'Manutencao');

-- DropTable
DROP TABLE "public"."user";

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "Nome" TEXT NOT NULL,
    "Senha" TEXT NOT NULL,
    "Email" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Carro" (
    "id" SERIAL NOT NULL,
    "Modelo" TEXT NOT NULL,
    "Placa" TEXT NOT NULL,
    "Ano" INTEGER NOT NULL,
    "Marca" TEXT NOT NULL,

    CONSTRAINT "Carro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GastosCombustivel" (
    "id" SERIAL NOT NULL,
    "carroId" INTEGER NOT NULL,
    "Valor" DECIMAL(65,30) NOT NULL,
    "Gasto" "TipodeGasto" NOT NULL,
    "Data" TIMESTAMP(3) NOT NULL,
    "Posto" TEXT NOT NULL,

    CONSTRAINT "GastosCombustivel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GastosManutencao" (
    "id" SERIAL NOT NULL,
    "carroId" INTEGER NOT NULL,
    "Valor" DECIMAL(65,30) NOT NULL,
    "Gasto" "TipodeGasto" NOT NULL,
    "Data" TIMESTAMP(3) NOT NULL,
    "Local" TEXT NOT NULL,

    CONSTRAINT "GastosManutencao_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "GastosCombustivel" ADD CONSTRAINT "GastosCombustivel_carroId_fkey" FOREIGN KEY ("carroId") REFERENCES "Carro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GastosManutencao" ADD CONSTRAINT "GastosManutencao_carroId_fkey" FOREIGN KEY ("carroId") REFERENCES "Carro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
