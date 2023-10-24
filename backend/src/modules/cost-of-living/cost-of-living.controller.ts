import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Country } from '@prisma/client';
import { CostOfLivingService } from './cost-of-living.service';
import { CreateCostOfLivingDto } from './dto/create-cost-of-living.dto';
import { PublicCostOfLivingData } from './interfaces/CostOfLivingInterfaces';

@Controller('cost-of-living')
export class CostOfLivingController {
  constructor(private readonly costOfLivingService: CostOfLivingService) {}

  @Post()
  create(@Body() createCostOfLivingDto: CreateCostOfLivingDto): Promise<void> {
    return this.costOfLivingService.create(createCostOfLivingDto);
  }

  @Get('/country/:country')
  getForCountry(@Param('country') country: Country): Promise<PublicCostOfLivingData> {
    return this.costOfLivingService.getForCountry(country);
  }
}
