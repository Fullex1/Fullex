import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Rate } from '../schemas/rates.schema';
import { RateDto } from './dto/rate.dto';

@Injectable()
export class RatesService {
  constructor(
    @InjectModel(Rate.name) private rateModel: Model<Rate>,
  ) {}

  async getAllRates() {
    return this.rateModel.find().exec();
  }

  async createRate(rateDto: RateDto){
    const createdRate = new this.rateModel(rateDto);
    return createdRate.save();
  }

  async deleteRate(id: string){
    const result = await this.rateModel.deleteOne({ _id: id }).exec();
    return "Rate deleted successfully";
  }
}
