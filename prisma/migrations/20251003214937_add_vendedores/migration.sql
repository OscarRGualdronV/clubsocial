-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'VENDEDOR';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "vendedorId" TEXT;

-- CreateTable
CREATE TABLE "Vendedor" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "email" TEXT,
    "telefono" TEXT,

    CONSTRAINT "Vendedor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Vendedor_email_key" ON "Vendedor"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_vendedorId_fkey" FOREIGN KEY ("vendedorId") REFERENCES "Vendedor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
