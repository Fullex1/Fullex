import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { FaqModule } from './faq/faq.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { RatesModule } from './rates/rates.module';
import { PricingModule } from './pricing/pricing.module';
import { AuthModule } from './auth/auth.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI!),
    FaqModule, 
    PortfolioModule, 
    RatesModule, 
    PricingModule, 
    AuthModule, CloudinaryModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
