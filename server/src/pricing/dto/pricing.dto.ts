import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class PricingDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'basic ', description: 'name of the plan' })
    name: string;

    @IsInt()
    @IsNotEmpty()
    @ApiProperty({ example: '250', description: 'price of the plan' })
    price: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: ['jdj', 'sjsj'], description: 'features of the plan' })
    features: string[];
}