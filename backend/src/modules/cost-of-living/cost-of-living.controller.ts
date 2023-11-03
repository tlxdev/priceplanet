import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Country } from '@prisma/client';
import { CostOfLivingService } from './cost-of-living.service';
import { CreateCostOfLivingDto, CreateCostOfLivingLanderDto } from './dto/create-cost-of-living.dto';
import { PublicCostOfLivingData } from './interfaces/CostOfLivingInterfaces';

@Controller('cost-of-living')
export class CostOfLivingController {
  constructor(private readonly costOfLivingService: CostOfLivingService) {}

  @Post()
  create(@Body() createCostOfLivingDto: CreateCostOfLivingDto): Promise<void> {
    return this.costOfLivingService.create(createCostOfLivingDto);
  }

  @Post('/from-lander')
  createFromLander(@Body() createCostOfLivingFromLanderDto: CreateCostOfLivingLanderDto): Promise<void> {
    return this.costOfLivingService.createFromLander(createCostOfLivingFromLanderDto);
  }

  @Get('/country/:country')
  getForCountry(@Param('country') country: Country): Promise<PublicCostOfLivingData> {
    return this.costOfLivingService.getForCountry(country);
  }
}
