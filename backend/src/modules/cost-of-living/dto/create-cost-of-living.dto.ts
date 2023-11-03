import { Country } from '@prisma/client';

export class CreateCostOfLivingDto {
  country: Country;
  city: string;
  monthlyRent: number;
  monthlySalaryBeforeTax: number;
  monthlySalaryAfterTax: number;
  monthlyGroceriesPrice: number;
  lunchPrice: number;
  happinessIndex: number;
  safetyIndex: number;
  nightWalkSafetyIndex: number;
  healthcareSatisfactionIndex: number;
  infrastructureSatisfactionIndex: number;
  environmentQualityIndex: number;

  recaptchaToken: string;
}

export class CreateCostOfLivingLanderDto {
  country: Country;
  monthlyRent?: number;
  monthlySalaryBeforeTax?: number;
  monthlySalaryAfterTax?: number;
  monthlyGroceriesPrice?: number;
  lunchPrice?: number;
  happinessIndex?: number;
  safetyIndex?: number;
  nightWalkSafetyIndex?: number;
  healthcareSatisfactionIndex?: number;
  infrastructureSatisfactionIndex?: number;
  environmentQualityIndex?: number;
}
