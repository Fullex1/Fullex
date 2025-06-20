import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Rate {
  @Prop({ required: true })
  userName: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, min: 1, max: 5 })
  stars: number;
}

export const RateSchema = SchemaFactory.createForClass(Rate);