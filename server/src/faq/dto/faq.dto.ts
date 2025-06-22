import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class FaqDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'question ', description: 'the question' })
  question: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Yes ', description: 'Answer Of the question' })
  answer: string;
}
