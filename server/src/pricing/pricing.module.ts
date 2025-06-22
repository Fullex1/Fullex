import { Module } from '@nestjs/common';
import { PricingService } from './pricing.service';
import { PricingController } from './pricing.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pricing, PricingSchema } from '../schemas/pricing.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Pricing', schema: PricingSchema }])],
  providers: [PricingService],
  controllers: [PricingController]
})
export class PricingModule {}
