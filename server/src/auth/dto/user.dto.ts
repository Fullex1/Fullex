import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString, IsStrongPassword } from 'class-validator';

export class userDto {
    @IsString()
    @IsOptional()
    id?: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'Omar', description: 'Username of the user' })
    username: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({ example: 'john@example.com', description: 'Email address' })
    email: string;

    @IsString()
    @IsNotEmpty()
    @IsStrongPassword()
    @ApiProperty({ example: 'strongPassword123', description: 'User password' })
    password: string;
}