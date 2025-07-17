import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Portfolio } from '../schemas/portfolio.schema';
import { PortfolioDto } from './dto/portfolio.dto';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Injectable()
export class PortfolioService {
  constructor(
    @InjectModel(Portfolio.name) private portfolioModel: Model<Portfolio>,
    private cloudnaryService : CloudinaryService
  ) {}

  async getAllPortfolios(){
    return this.portfolioModel.find().exec();
  }

  async getPortfolioById(id: string) {
    return this.portfolioModel.findById(id).exec();
  }

  async createPortfolio(portfolioDto: PortfolioDto, files: Express.Multer.File[]) {
    if (!files || files.length === 0) {
      throw new BadRequestException('At least one image file is required');
    }

    // Upload all images to Cloudinary and collect their URLs
    const imageUrls: string[] = [];
    for (const file of files) {
      const uploadResult = await this.cloudnaryService.uploadFile(file);
      if (uploadResult && uploadResult.secure_url) {
        imageUrls.push(uploadResult.secure_url);
      }
    }

    if (imageUrls.length === 0) {
      throw new BadRequestException('Failed to upload images to Cloudinary');
    }

    const createdPortfolio = new this.portfolioModel({
      title: portfolioDto.title,
      description: portfolioDto.description,
      images: imageUrls,
    });
    return createdPortfolio.save();
  }

  async deletePortfolio(id: string) {
    // Retrieve the portfolio
    const portfolio = await this.portfolioModel.findById(id);
    if (!portfolio) {
      return { deleted: false };
    }

    // Delete all images from Cloudinary
    for (const imageUrl of portfolio.images) {
      const matches = imageUrl.match(/\/upload\/([^\.]+)\./);
      let publicId = '';
      if (matches && matches[1]) {
        publicId = matches[1];
      } else {
        const urlParts = imageUrl.split('/');
        const lastPart = urlParts[urlParts.length - 1];
        publicId = lastPart.split('.')[0];
      }
      await this.cloudnaryService.deleteFile(publicId);
    }

    // Delete the portfolio document
    const result = await this.portfolioModel.deleteOne({ _id: id }).exec();
    // Return the result
    return { deleted: result.deletedCount > 0 };
  }
}
