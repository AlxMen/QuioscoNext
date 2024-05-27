/*
  Warnings:

  - Added the required column `quatity` to the `OrderProducts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OrderProducts" ADD COLUMN     "quatity" INTEGER NOT NULL;
