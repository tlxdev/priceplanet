import { Module } from '@nestjs/common';
import { RecaptchaModule } from '../recaptcha/recaptcha.module';
import { CostOfLivingController } from './cost-of-living.controller';
import { CostOfLivingService } from './cost-of-living.service';

@Module({
  controllers: [CostOfLivingController],
  providers: [CostOfLivingService],
  imports: [RecaptchaModule],
})
export class CostOfLivingModule {}
