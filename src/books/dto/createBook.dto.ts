import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';

export default class CreateBookDto {
    @ApiProperty({description: 'Enter book name > ', type: String})
    readonly name: string;

    @ApiProperty({description: 'Enter book owner id > ', type: Number})
    readonly userID: number;

    @ApiProperty({description: 'Enter book genre IDs ', type: Array})
    readonly genreIDs: number[];
  }