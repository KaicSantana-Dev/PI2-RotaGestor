-- CreateTable
CREATE TABLE "manutencoes" (
    "id" SERIAL NOT NULL,
    "modelo" TEXT NOT NULL,
    "placa" TEXT NOT NULL,
    "servico" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "oficina" TEXT NOT NULL,
    "hora" TEXT NOT NULL,
    "data" DATE NOT NULL,

    CONSTRAINT "manutencoes_pkey" PRIMARY KEY ("id")
);
