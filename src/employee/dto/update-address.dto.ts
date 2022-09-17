import { ApiProperty } from '@nestjs/swagger';
export class UpdateAddressDto {
    @ApiProperty()
    city: string;

    @ApiProperty()
    zipCode: number;

    @ApiProperty()
    addressline1: string;

    @ApiProperty()
    addressline2: string;
}
