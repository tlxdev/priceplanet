import { Injectable } from '@nestjs/common';
import { Country } from '@prisma/client';
import { PrismaService } from 'src/lib/prisma/prisma.service';

import { RecaptchaService } from '../recaptcha/recaptcha.service';
import { CreateCostOfLivingDto, CreateCostOfLivingLanderDto } from './dto/create-cost-of-living.dto';
import { PublicCostOfLivingData } from './interfaces/CostOfLivingInterfaces';

export interface AverageCostOfLiving {
  averageRent: number;
}

@Injectable()
export class CostOfLivingService {
  constructor(private prismaService: PrismaService, private recaptchaService: RecaptchaService) {}

  async createFromLander(createCostOfLivingDto: CreateCostOfLivingLanderDto): Promise<void> {
    await this.prismaService.costOfLiving.create({
      data: {
        country: createCostOfLivingDto.country,
        monthlyRent: createCostOfLivingDto.monthlyRent,
        monthlySalaryBeforeTax: createCostOfLivingDto.monthlySalaryBeforeTax,
        monthlySalaryAfterTax: createCostOfLivingDto.monthlySalaryAfterTax,
        monthlyGroceriesPrice: createCostOfLivingDto.monthlyGroceriesPrice,
        lunchPrice: createCostOfLivingDto.lunchPrice,
        happinessIndex: createCostOfLivingDto.happinessIndex,
        safetyIndex: createCostOfLivingDto.safetyIndex,
        nightWalkSafetyIndex: createCostOfLivingDto.nightWalkSafetyIndex,
        healthcareSatisfactionIndex: createCostOfLivingDto.healthcareSatisfactionIndex,
        infrastructureSatisfactionIndex: createCostOfLivingDto.infrastructureSatisfactionIndex,
        environmentQualityIndex: createCostOfLivingDto.environmentQualityIndex,
      },
    });
  }

  async create(createCostOfLivingDto: CreateCostOfLivingDto): Promise<void> {
    await this.recaptchaService.verifyRecaptcha(createCostOfLivingDto.recaptchaToken);

    await this.prismaService.costOfLiving.create({
      data: {
        country: createCostOfLivingDto.country,
        city: createCostOfLivingDto.city,
        monthlyRent: createCostOfLivingDto.monthlyRent,
        monthlySalaryBeforeTax: createCostOfLivingDto.monthlySalaryBeforeTax,
        monthlySalaryAfterTax: createCostOfLivingDto.monthlySalaryAfterTax,
        monthlyGroceriesPrice: createCostOfLivingDto.monthlyGroceriesPrice,
        lunchPrice: createCostOfLivingDto.lunchPrice,
        happinessIndex: createCostOfLivingDto.happinessIndex,
        safetyIndex: createCostOfLivingDto.safetyIndex,
        nightWalkSafetyIndex: createCostOfLivingDto.nightWalkSafetyIndex,
        healthcareSatisfactionIndex: createCostOfLivingDto.healthcareSatisfactionIndex,
        infrastructureSatisfactionIndex: createCostOfLivingDto.infrastructureSatisfactionIndex,
        environmentQualityIndex: createCostOfLivingDto.environmentQualityIndex,
      },
    });

    return Promise.resolve();
  }

  async getForCountry(country: Country): Promise<PublicCostOfLivingData> {
    const forCountry = await this.prismaService.costOfLiving.findMany({
      where: {
        country: country,
      },
    });

    const countThatHaveMonthlyRent = forCountry.filter((costOfLiving) => costOfLiving.monthlyRent !== null).length;
    const averageRent = forCountry.reduce((acc, curr) => acc + curr.monthlyRent, 0) / countThatHaveMonthlyRent;

    const countThatHaveMonthlySalaryBeforeTax = forCountry.filter((costOfLiving) => costOfLiving.monthlySalaryBeforeTax !== null).length;
    const averageSalaryBeforeTax =
      forCountry.reduce((acc, curr) => acc + curr.monthlySalaryBeforeTax, 0) / countThatHaveMonthlySalaryBeforeTax;

    const countThatHaveMonthlySalaryAfterTax = forCountry.filter((costOfLiving) => costOfLiving.monthlySalaryAfterTax !== null).length;
    const averageSalaryAfterTax =
      forCountry.reduce((acc, curr) => acc + curr.monthlySalaryAfterTax, 0) / countThatHaveMonthlySalaryAfterTax;

    const countThatHaveMonthlyTransportPrice = forCountry.filter((costOfLiving) => costOfLiving.monthlyTransportPrice !== null).length;
    const averageMonthlyTransportPrice =
      forCountry.reduce((acc, curr) => acc + curr.monthlyTransportPrice, 0) / countThatHaveMonthlyTransportPrice;

    const countThatHaveLunchPrice = forCountry.filter((costOfLiving) => costOfLiving.lunchPrice !== null).length;
    const averageLunchPrice = forCountry.reduce((acc, curr) => acc + curr.lunchPrice, 0) / countThatHaveLunchPrice;

    const countThatHaveMonthlyGroceriesPrice = forCountry.filter((costOfLiving) => costOfLiving.monthlyGroceriesPrice !== null).length;
    const averageMonthlyGroceriesPrice =
      forCountry.reduce((acc, curr) => acc + curr.monthlyGroceriesPrice, 0) / countThatHaveMonthlyGroceriesPrice;

    return {
      averageRent,
      averageSalaryBeforeTax,
      averageSalaryAfterTax,

      averageMonthlyTransportPrice,
      averageLunchPrice,
      averageMonthlyGroceriesPrice,
    };
  }
}
