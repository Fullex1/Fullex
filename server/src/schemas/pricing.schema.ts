import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';


@Schema()
export class Pricing {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  goal: string;

  @Prop({ type: [String] })
  features: string[];

  @Prop({ type: [String] })
  additions: string[];
}

export const PricingSchema = SchemaFactory.createForClass(Pricing);