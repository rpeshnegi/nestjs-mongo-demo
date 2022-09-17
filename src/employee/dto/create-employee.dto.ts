import {
  IsEmail,
  IsNotEmpty,
  IsNumberString,
  ValidateNested,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CreateAddressDto } from './create-address.dto';
import { Type } from 'class-transformer';

export class CreateEmployeeDto {
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
  @Type(() => CreateAddressDto)
  homeAddress: CreateAddressDto;
}
