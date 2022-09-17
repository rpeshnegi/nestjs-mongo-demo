import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Type } from 'class-transformer';
import { Document } from 'mongoose';
import { softDeletePlugin } from 'soft-delete-plugin-mongoose';
import { Address, AddressSchema } from './address.entity';

export type EmployeeDocument = Employee & Document;

@Schema()
export class Employee {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  phoneNumber: number;

  @Prop()
  dateOfEmployment: Date;

  @Prop()
  dateOfBirth: Date;

  @Prop({ type: AddressSchema })
  @Type(() => Address)
  homeAddress: Address;
}

// export const EmployeeSchema = SchemaFactory.createForClass(Employee);
export const EmployeeSchema = SchemaFactory.createForClass(Employee).plugin(softDeletePlugin);
