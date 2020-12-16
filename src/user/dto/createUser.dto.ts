import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';

export default class CreateUserDto {
    @ApiProperty({description: 'Enter user name > ', default: 'Fatemeh', type: String})
    readonly name: string;

    readonly books: number[] ;

    @ApiProperty({description:'Enter the user\'s password ', minLength: 8, default: '12345678', maxLength: 50})
    readonly password: string;

    // @ApiProperty({description:'Enter the taskIDs ', default: [1]})
    // readonly taskIDs: number[];
}