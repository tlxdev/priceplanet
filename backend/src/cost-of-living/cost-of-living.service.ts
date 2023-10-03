import { Injectable } from '@nestjs/common';
import { CreateCostOfLivingDto } from './dto/create-cost-of-living.dto';
import { UpdateCostOfLivingDto } from './dto/update-cost-of-living.dto';
import { PrismaService } from 'src/lib/prisma/prisma.service';

@Injectable()
export class CostOfLivingService {
  constructor(private prismaService: PrismaService) {}

  async create(createCostOfLivingDto: CreateCostOfLivingDto): Promise<void> {
    await this.prismaService.costOfLiving.create({
      data: createCostOfLivingDto,
    });

    return Promise.resolve();
  }

  findAll() {
    return `This action returns all costOfLiving`;
  }

  findOne(id: number) {
    return `This action returns a #${id} costOfLiving`;
  }

  update(id: number, updateCostOfLivingDto: UpdateCostOfLivingDto) {
    return `This action updates a #${id} costOfLiving`;
  }

  remove(id: number) {
    return `This action removes a #${id} costOfLiving`;
  }
}
