import { Controller, Post, Get, Body, UseInterceptors, UploadedFiles, UseGuards, UploadedFile, BadRequestException, Delete, Param, Query } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';
import { PortfolioDto } from './dto/portfolio.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiConsumes, ApiBearerAuth } from '@nestjs/swagger';
import { FilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('portfolio')
@Controller('portfolio')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Get()
  @ApiOperation({ summary: 'Get all portfolios' })
  @ApiResponse({ status: 200, description: 'List of portfolios' })
  @ApiResponse({ status: 401, description: 'Unauthorized'})
  @ApiResponse({ status: 500, description: 'Internal Server Error'})
  async getAllPortfolios() {
    return this.portfolioService.getAllPortfolios();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a single portfolio by id' })
  @ApiResponse({ status: 200, description: 'Portfolio found' })
  @ApiResponse({ status: 404, description: 'Portfolio not found' })
  async getPortfolioById(@Param('id') id: string) {
    return this.portfolioService.getPortfolioById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new portfolio with multiple images' })
  @ApiConsumes('multipart/form-data')
  @ApiResponse({ status: 201, description: 'Portfolio created successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized'})
  @ApiResponse({ status: 500, description: 'Internal Server Error'})
  @UseInterceptors(FilesInterceptor('images'))
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async createPortfolio(
    @UploadedFiles() files: Express.Multer.File[],
    @Body() portfolioDto: PortfolioDto
  ) {
    if (!files || files.length === 0) {
      throw new BadRequestException('At least one image file is required');
    }
    return this.portfolioService.createPortfolio(portfolioDto, files);
  }

  @Delete('image/:portfolioId')
  @ApiOperation({ summary: 'Delete an image from a portfolio' })
  @ApiResponse({ status: 200, description: 'Image deleted successfully' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 401, description: 'Unauthorized'})
  @ApiResponse({ status: 500, description: 'Internal Server Error'})
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async deletePortfolioImage(
    @Param('portfolioId') portfolioId: string,
  ) {
    return this.portfolioService.deletePortfolio(portfolioId);
  }
}
