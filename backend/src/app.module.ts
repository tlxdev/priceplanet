import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CostOfLivingModule } from './cost-of-living/cost-of-living.module';
import { PrismaModule } from './lib/prisma/prisma.module';

@Module({
  imports: [PrismaModule, CostOfLivingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
