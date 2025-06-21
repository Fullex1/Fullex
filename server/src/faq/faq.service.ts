import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Faq } from '../schemas/faq.schema';
import { FaqDto } from './dto/faq.dto';

@Injectable()
export class FaqService {
  constructor(
    @InjectModel(Faq.name) private faqModel: Model<Faq>,
  ) {}

  async getAllFaqs(): Promise<Faq[]> {
    return this.faqModel.find().exec();
  }

  async createFaq(faqDto: FaqDto): Promise<Faq> {
    const createdFaq = new this.faqModel(faqDto);
    return createdFaq.save();
  }

  async deleteFaq(id: string): Promise<{ deleted: boolean }> {
    const result = await this.faqModel.deleteOne({ _id: id }).exec();
    return { deleted: result.deletedCount > 0 };
  }
}
