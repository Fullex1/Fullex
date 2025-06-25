import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserSchema } from '../schemas/users.schema';
import { userDto } from './dto/user.dto';
import * as argon2 from "argon2";
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

    async registerUser(createUserDto: userDto) {
      // Check if user exists
      const existingUser = await this.userModel.findOne({ email: createUserDto.email });
      if (existingUser) {
        throw new BadRequestException('User already exists');
      }

      // Hash Password
      const hashedPassword = await argon2.hash(createUserDto.password);
      
      // Save user to the database
      const createdUser = new this.userModel({
        username: createUserDto.username,
        email: createUserDto.email,
        password: hashedPassword,
      });
      const savedUser = await createdUser.save();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = savedUser.toObject();
      return result;
    }

    async loginUser(createUserDto: userDto) {
      // Check if user exists
      const user = await this.userModel.findOne({ email: createUserDto.email });
      if (!user) {
        throw new BadRequestException('Invalid credentials');
      }

      // Check Password
      const isPasswordValid = await argon2.verify(user.password, createUserDto.password);
      if (!isPasswordValid) {
        throw new BadRequestException('Invalid credentials');
      }

      // Return user data (omit password)
      const { password, ...userData } = user.toObject();
      // Generate JWT token
      const token = await this.generateJwtToken(userData);
      return { ...userData, token };
    }

    async generateJwtToken(user: any) {
      const payload = { username: user.username, sub: user._id };
      return this.jwtService.sign(payload);
    }
}
