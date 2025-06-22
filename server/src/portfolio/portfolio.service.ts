import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Portfolio } from '../schemas/portfolio.schema';
import { PortfolioDto } from './dto/portfolio.dto';

@Injectable()
export class PortfolioService {
  constructor(
    @InjectModel(Portfolio.name) private portfolioModel: Model<Portfolio>,
  ) {}

  async getAllPortfolios(){
    return this.portfolioModel.find().exec();
  }

  async createPortfolio(portfolioDto: PortfolioDto): Promise<Portfolio> {
    const createdPortfolio = new this.portfolioModel(portfolioDto);
    return createdPortfolio.save();
  }

//   async deletePortfolio(id: string): Promise<{ deleted: boolean }> {
//     const result = await this.portfolioModel.deleteOne({ _id: id }).exec();
//     return { deleted: result.deletedCount > 0 };
//   }
}
