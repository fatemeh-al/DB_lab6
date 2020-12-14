import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';

export default class CreateUserDto {
    @ApiProperty({description: 'Enter user name > ', default: 'Fatemeh', type: String})
    readonly name: string;

    readonly books: number[] ;
}