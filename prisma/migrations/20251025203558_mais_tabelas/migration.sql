/*
  Warnings:

  - A unique constraint covering the columns `[motoristaId]` on the table `Carro` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `URL_Imagem` to the `Carro` table without a default value. This is not possible if the table is not empty.
  - Added the required column `motoristaId` to the `Carro` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Cargo" AS ENUM ('Gerente', 'Motorista', 'Administrador');

-- AlterTable
ALTER TABLE "Carro" ADD COLUMN     "URL_Imagem" TEXT NOT NULL,
ADD COLUMN     "motoristaId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Funcionario" (
    "id" SERIAL NOT NULL,
    "Nome" TEXT NOT NULL,
    "CPF" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Cargo" "Cargo" NOT NULL,

    CONSTRAINT "Funcionario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Carro_motoristaId_key" ON "Carro"("motoristaId");

-- AddForeignKey
ALTER TABLE "Carro" ADD CONSTRAINT "Carro_motoristaId_fkey" FOREIGN KEY ("motoristaId") REFERENCES "Funcionario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
