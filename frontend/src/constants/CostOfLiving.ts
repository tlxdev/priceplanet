import { Country } from './Country';

enum Currency {
  USD = 'USD',
  EUR = 'EUR',
  GBP = 'GBP',
  JPY = 'JPY',
  CHF = 'CHF',
  AUD = 'AUD',
  CAD = 'CAD',
  NZD = 'NZD',
  SEK = 'SEK',
  NOK = 'NOK',
  DKK = 'DKK',
  ISK = 'ISK',
  RUB = 'RUB',
  PLN = 'PLN',
}

interface CountryDetails {
  country: Country;
  costToFormCompany: number;
  currency: Currency;
}

export interface EMPLOYMENT_TYPE {
  FULL_TIME: 'FULL_TIME';
  PART_TIME: 'PART_TIME';
  SELF_EMPLOYED: 'SELF_EMPLOYED';
  STUDENT: 'STUDENT';
  RETIRED: 'RETIRED';
  UNEMPLOYED: 'UNEMPLOYED';
}

export interface AddCountryDetailsForm {
  city?: string;
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

  environmentalQualityIndex?: number;
}


export type AddCountryDetailsFormFromLanderDto = AddCountryDetailsForm & {
  country: Country;
};

export type AddCountryDetailsFormDto = AddCountryDetailsForm & {
  country: Country;

  recaptchaToken: string;
};

export interface CountryCostOfLiving {
  averageRentMonthly: number;
  averageFoodExpensesMonthly: number;

  averageLunchPrice: number;

  averageInternetBill: number;
  averagePhoneBill: number;

  averagePublicTransportCost: number;
  averageGymMembershipCost: number;

  averageGasPrice: number;

  averageCarInsurance: number;
  averageCarMaintenance: number;

  averageHealthInsurance: number;

  averageTaxRate: number;

  averageSalary: number;

  averageHousePrice: number;
  averageMortgageRate: number;

  averageChildcareCost: number;

  averageUniversityTuition: number;

  averageHappinessIndex: number;
  averageSafetyIndex: number;
  averageNightWalkSafetyIndex: number;
  averageHealthcareSatisfactionIndex: number;
  averageEducationSatisfactionIndex: number;
  averageEnvironmentalQualityIndex: number;
  averageEconomyIndex: number;
  averageInfrastructureSatisfactionIndex: number;

  averageTaxationOpinionIndex: number;
}
