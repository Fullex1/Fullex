import { Controller, Get, Post, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiBearerAuth } from '@nestjs/swagger';
import { PricingService } from './pricing.service';
import { PricingDto } from './dto/pricing.dto';
import { Pricing } from '../schemas/pricing.schema';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('pricing')
@UseGuards(AuthGuard('jwt'))
@Controller('pricing')
export class PricingController {
    constructor(private readonly pricingService: PricingService) {}

    @Get()
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Get all pricing entries' })
    @ApiResponse({ status: 200, description: 'List of pricing entries', type: [PricingDto] })
    @ApiResponse({ status: 401, description: 'Unauthorized'})
    @ApiResponse({ status: 500, description: 'Internal Server Error'})
    async getAllPricing() {
        return this.pricingService.getAllPricing();
    }

    @Post()
    @ApiOperation({ summary: 'Create a new pricing entry' })
    @ApiResponse({ status: 201, description: 'Pricing entry created successfully', type: PricingDto })
    @ApiResponse({ status: 401, description: 'Unauthorized'})
    @ApiResponse({ status: 500, description: 'Internal Server Error'})
    @ApiBearerAuth()
    @ApiBody({ type: PricingDto })
    async createPricing(@Body() pricingDto: PricingDto) {
        return this.pricingService.createPricing(pricingDto);
    }

    @Delete(':id')
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Delete a pricing entry by ID' })
    @ApiResponse({ status: 200, description: 'Pricing entry deleted successfully' })
    @ApiResponse({ status: 401, description: 'Unauthorized'})
    @ApiResponse({ status: 500, description: 'Internal Server Error'})
    async deletePricing(@Param('id') id: string) {
        return this.pricingService.deletePricing(id);
    }
}
