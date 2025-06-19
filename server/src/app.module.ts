import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { FaqModule } from './faq/faq.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { ServicesModule } from './services/services.module';
import { RatesModule } from './rates/rates.module';
import { PricingModule } from './pricing/pricing.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI!),
    FaqModule, 
    PortfolioModule, 
    ServicesModule, 
    RatesModule, 
    PricingModule, 
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
