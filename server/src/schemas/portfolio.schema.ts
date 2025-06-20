import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Portfolio {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  images: string[];
}

export const PortfolioSchema = SchemaFactory.createForClass(Portfolio);