import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';

export default class CreateGenreDto {
  @ApiProperty({description: 'Enter genre name > ', type: String})
  readonly type: string;
}