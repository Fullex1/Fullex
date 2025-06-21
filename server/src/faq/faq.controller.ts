import { Controller, Get, Post, Delete, Body, Param, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiBearerAuth } from '@nestjs/swagger';
import { FaqService } from './faq.service';
import { FaqDto } from './dto/faq.dto';
import { Faq } from '../schemas/faq.schema';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('faq')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
@Controller('faq')
export class FaqController {
  constructor(private readonly faqService: FaqService) {}

  @Get()
  @ApiOperation({ summary: 'Get all FAQs' })
  @ApiResponse({ status: 200, description: 'List of FAQs', type: [FaqDto] })
  async getAllFaqs(){
    return this.faqService.getAllFaqs();
  }

  @Post()
  @ApiOperation({ summary: 'Create a new FAQ' })
  @ApiResponse({ status: 201, description: 'FAQ created successfully', type: FaqDto })
  @ApiBody({ type: FaqDto })
  async createFaq(@Body() faqDto: FaqDto, @Request() req){
    return this.faqService.createFaq(faqDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an FAQ by ID' })
  @ApiResponse({ status: 200, description: 'FAQ deleted successfully' })
  async deleteFaq(@Param('id') id: string) {
    return this.faqService.deleteFaq(id);
  }
}
