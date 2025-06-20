import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';


@Schema()
export class Pricing {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  features: string[];
}

export const PricingSchema = SchemaFactory.createForClass(Pricing);