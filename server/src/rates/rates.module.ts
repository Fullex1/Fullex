import { Module } from '@nestjs/common';
import { RatesController } from './rates.controller';
import { RatesService } from './rates.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RateSchema } from 'src/schemas/rates.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Rates', schema: RateSchema }])],
  controllers: [RatesController],
  providers: [RatesService]
})
export class RatesModule {}
