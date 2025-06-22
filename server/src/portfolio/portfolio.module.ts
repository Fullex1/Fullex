import { Module } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';
import { PortfolioController } from './portfolio.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PortfolioSchema } from '../schemas/portfolio.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Portfolio', schema: PortfolioSchema }])],
  providers: [PortfolioService],
  controllers: [PortfolioController]
})
export class PortfolioModule {}
