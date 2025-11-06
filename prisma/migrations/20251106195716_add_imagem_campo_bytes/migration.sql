/*
  Warnings:

  - Added the required column `imagem` to the `carros` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "carros" DROP COLUMN "imagem",
ADD COLUMN     "imagem" BYTEA NOT NULL;
