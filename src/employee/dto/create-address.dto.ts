import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class CreateAddressDto {
  @ApiProperty()
  @IsNotEmpty()
  city: string;

  @ApiProperty()
  @IsNotEmpty()
  zipCode: number;

  @ApiProperty()
  @IsNotEmpty()
  addressline1: string;

  @ApiProperty()
  addressline2: string;
}
