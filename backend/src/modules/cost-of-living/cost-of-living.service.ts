import { Injectable } from '@nestjs/common';
import { Country } from '@prisma/client';
import { PrismaService } from 'src/lib/prisma/prisma.service';
import { CreateCostOfLivingDto } from './dto/create-cost-of-living.dto';
import { PublicCostOfLivingData } from './interfaces/CostOfLivingInterfaces';

export interface AverageCostOfLiving {
  averageRent: number;
}

@Injectable()
export class CostOfLivingService {
  constructor(private prismaService: PrismaService) {}

  async create(createCostOfLivingDto: CreateCostOfLivingDto): Promise<void> {
    await this.prismaService.costOfLiving.create({
      data: createCostOfLivingDto,
    });

    return Promise.resolve();
  }

  async getForCountry(country: Country): Promise<PublicCostOfLivingData> {
    const forCountry = await this.prismaService.costOfLiving.findMany({
      where: {
        country: country,
      },
    });

    const averageRent = forCountry.reduce((acc, curr) => acc + curr.monthlyRent, 0) / forCountry.length;

    const averageSalaryBeforeTax = forCountry.reduce((acc, curr) => acc + curr.monthlySalaryBeforeTax, 0) / forCountry.length;
    const averageSalaryAfterTax = forCountry.reduce((acc, curr) => acc + curr.monthlySalaryAfterTax, 0) / forCountry.length;

    const averageMonthlyTransportPrice = forCountry.reduce((acc, curr) => acc + curr.monthlyTransportPrice, 0) / forCountry.length;
    const averageLunchPrice = forCountry.reduce((acc, curr) => acc + curr.lunchPrice, 0) / forCountry.length;

    const averageMonthlyGroceriesPrice = forCountry.reduce((acc, curr) => acc + curr.monthlyGroceriesPrice, 0) / forCountry.length;

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
