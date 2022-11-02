/*
  Warnings:

  - You are about to alter the column `cep` on the `address` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `VarChar(10)`.

*/
-- AlterTable
ALTER TABLE "address" ALTER COLUMN "cep" SET DATA TYPE VARCHAR(10);
