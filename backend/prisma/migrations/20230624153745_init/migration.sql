-- CreateEnum
CREATE TYPE "Country" AS ENUM ('ES', 'FR', 'DE', 'IT', 'FI');

-- CreateTable
CREATE TABLE "CostOfLiving" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "country" "Country" NOT NULL,
    "city" TEXT NOT NULL,
    "monthlyRent" INTEGER,
    "monthlySalary" INTEGER,
    "lunchPrice" INTEGER,
    "happinessIndex" INTEGER,
    "safetyIndex" INTEGER,
    "nightWalkSafetyIndex" INTEGER,
    "healthcareSatisfactionIndex" INTEGER,
    "infrastructureSatisfactionIndex" INTEGER,
    "environmentQualityIndex" INTEGER,

    CONSTRAINT "CostOfLiving_pkey" PRIMARY KEY ("id")
);
