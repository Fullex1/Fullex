import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pricing } from '../schemas/pricing.schema';
import { PricingDto } from './dto/pricing.dto';

@Injectable()
export class PricingService {
  constructor(
    @InjectModel(Pricing.name) private pricingModel: Model<Pricing>,
  ) {}

  async getAllPricing() {
    return this.pricingModel.find().exec();
  }

  async createPricing(pricingDto: PricingDto){    
    const createdPricing = new this.pricingModel(pricingDto);
    return createdPricing.save();
  }

  async deletePricing(id: string) {
    const result = await this.pricingModel.deleteOne({ _id: id }).exec();
    return "The question has deleted successfully";
  }
}
