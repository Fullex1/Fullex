import { Module } from '@nestjs/common';
import { FaqController } from './faq.controller';
import { FaqService } from './faq.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Faq, FaqSchema } from '../schemas/faq.schema';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Faq', schema:  FaqSchema}]),
    AuthModule
  ],
  controllers: [FaqController],
  providers: [FaqService]
})
export class FaqModule {}
