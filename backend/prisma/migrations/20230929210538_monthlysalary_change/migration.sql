/*
  Warnings:

  - You are about to drop the column `monthlySalary` on the `CostOfLiving` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CostOfLiving" DROP COLUMN "monthlySalary",
ADD COLUMN     "monthlySalaryAfterTax" INTEGER,
ADD COLUMN     "monthlySalaryBeforeTax" INTEGER;
