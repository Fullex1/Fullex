import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, Min, Max } from 'class-validator';

export class RateDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Omar', description: 'The name of the user who rated' })
  userName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Great service!', description: 'Description of the rating' })
  description: string;

  @IsNumber()
  @Min(1)
  @Max(5)
  @IsNotEmpty()
  @ApiProperty({ example: 5, description: 'Number of stars (1-5)' })
  stars: number;
}
