import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class PortfolioDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Project ', description: 'Project name' })
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Project ', description: 'Project description' })
  description: string;

  @IsNotEmpty()
  @ApiProperty({ example: ['image1.jpg', 'image2.jpg'], description: 'Project images' })
  images: string[];
}
