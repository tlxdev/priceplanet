import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './lib/prisma/prisma.module';
import { CostOfLivingModule } from './modules/cost-of-living/cost-of-living.module';

@Module({
  imports: [
    PrismaModule,
    CostOfLivingModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
  // Global services below
  exports: [],
})
export class AppModule {}
