import { Controller, Get, Post, Delete, Body, Param, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiBearerAuth } from '@nestjs/swagger';
import { RatesService } from './rates.service';
import { RateDto } from './dto/rate.dto';
import { Rate } from '../schemas/rates.schema';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('rates')
@Controller('rates')
export class RatesController {
    constructor(private readonly ratesService: RatesService) {}

    @Get()
    @ApiOperation({ summary: 'Get all rates' })
    @ApiResponse({ status: 200, description: 'List of rates', type: [RateDto] })
    @ApiResponse({ status: 401, description: 'Unauthorized'})
    @ApiResponse({ status: 500, description: 'Internal Server Error'})
    async getAllRates() {
        return this.ratesService.getAllRates();
    }

    @Post()
    @ApiOperation({ summary: 'Create a new rate' })
    @ApiResponse({ status: 201, description: 'Rate created successfully', type: RateDto })
    @ApiResponse({ status: 401, description: 'Unauthorized'})
    @ApiResponse({ status: 500, description: 'Internal Server Error'})
    @ApiBody({ type: RateDto })
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    async createRate(@Body() rateDto: RateDto) {
        return this.ratesService.createRate(rateDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a rate by ID' })
    @ApiResponse({ status: 200, description: 'Rate deleted successfully' })
    @ApiResponse({ status: 401, description: 'Unauthorized'})
    @ApiResponse({ status: 500, description: 'Internal Server Error'})
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    async deleteRate(@Param('id') id: string) {
        return this.ratesService.deleteRate(id);
    }
}
