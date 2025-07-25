import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Faq {
  @Prop()
  question: string;

  @Prop()
  answer: string;
}

export const FaqSchema = SchemaFactory.createForClass(Faq);