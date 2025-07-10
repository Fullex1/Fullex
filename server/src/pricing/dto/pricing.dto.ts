import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString, IsArray } from "class-validator";

export class PricingDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'basic', description: 'Name of the plan' })
    name: string;

    @IsInt()
    @IsNotEmpty()
    @ApiProperty({ example: 250, description: 'Price of the plan' })
    price: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: "BLAH BLAH", description: 'Goal of the plan' })
    goal: string;

    @IsArray()
    @IsNotEmpty()
    @ApiProperty({ example: ['Feature 1', 'Feature 2'], description: 'Features of the plan', type: [String] })
    features: string[];

    @IsArray()
    @ApiProperty({ example: ['Addition 1', 'Addition 2'], description: 'Additions to the plan', type: [String] })
    additions: string[];
}