import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeDto } from './create-employee.dto';
import {
  IsEmail,
  IsNotEmpty,
  IsNumberString,
  ValidateNested,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UpdateAddressDto } from './update-address.dto';
export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumberString()
  phoneNumber: string;

  @ApiProperty()
  @IsNotEmpty()
  dateOfEmployment: Date;

  @ApiProperty()
  @IsNotEmpty()
  dateOfBirth: Date;

  @ApiProperty()
  @ValidateNested()
  homeAddress: UpdateAddressDto;
}
