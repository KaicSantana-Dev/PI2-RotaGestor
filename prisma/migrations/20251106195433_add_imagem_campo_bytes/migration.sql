/*
  Warnings:

  - Added the required column `hora` to the `gastos_manutencao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `servico` to the `gastos_manutencao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "gastos_manutencao" ADD COLUMN     "hora" TEXT NOT NULL,
ADD COLUMN     "servico" TEXT NOT NULL;
