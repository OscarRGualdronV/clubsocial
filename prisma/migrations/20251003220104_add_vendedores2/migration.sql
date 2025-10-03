/*
  Warnings:

  - You are about to drop the column `nombre` on the `Vendedor` table. All the data in the column will be lost.
  - You are about to drop the column `telefono` on the `Vendedor` table. All the data in the column will be lost.
  - Added the required column `name` to the `Vendedor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vendedor" DROP COLUMN "nombre",
DROP COLUMN "telefono",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT;
