import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { userDto } from './dto/user.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'Register a new user' })
  @ApiResponse({ status: 201, description: 'User registered successfully.' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  @ApiBody({ type: userDto })
  async register(@Body() createUserDto: userDto) {
    return this.authService.registerUser(createUserDto);
  }

  @Post('login')
  @ApiOperation({ summary: 'Login user' })
  @ApiResponse({ status: 200, description: 'User logged in successfully.' })
  @ApiResponse({ status: 401, description: 'Invalid credentials.' })
  @ApiBody({ type: userDto })
  async login(@Body() loginUserDto: userDto) {
    return this.authService.loginUser(loginUserDto);
  }
}
