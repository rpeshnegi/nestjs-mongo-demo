import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Address {
  @Prop()
  city: string;

  @Prop()
  zipCode: string;

  @Prop()
  addressline1: string;

  @Prop()
  addressline2: string;
}

export const AddressSchema = SchemaFactory.createForClass(Address);
