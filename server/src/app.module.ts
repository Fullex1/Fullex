import { Module } from '@nestjs/common';
import { FaqModule } from './faq/faq.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { ServicesModule } from './services/services.module';
import { RatesModule } from './rates/rates.module';
import { PricingModule } from './pricing/pricing.module';


@Module({
  imports: [FaqModule, PortfolioModule, ServicesModule, RatesModule, PricingModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
