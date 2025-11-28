/*
  Warnings:

  - You are about to drop the column `modelo` on the `manutencoes` table. All the data in the column will be lost.
  - You are about to drop the column `placa` on the `manutencoes` table. All the data in the column will be lost.
  - You are about to alter the column `valor` on the `manutencoes` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(10,2)`.
  - Added the required column `carroId` to the `manutencoes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "gastos_combustivel" ADD COLUMN     "litros" DECIMAL(10,2),
ADD COLUMN     "quilometragem" DECIMAL(10,2);

-- AlterTable
ALTER TABLE "manutencoes" DROP COLUMN "modelo",
DROP COLUMN "placa",
ADD COLUMN     "carroId" INTEGER NOT NULL,
ADD COLUMN     "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "valor" SET DATA TYPE DECIMAL(10,2);

-- AddForeignKey
ALTER TABLE "manutencoes" ADD CONSTRAINT "manutencoes_carroId_fkey" FOREIGN KEY ("carroId") REFERENCES "carros"("id") ON DELETE CASCADE ON UPDATE CASCADE;
