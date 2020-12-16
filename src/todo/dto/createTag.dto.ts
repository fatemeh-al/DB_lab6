import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class CreateTagDto {

  @ApiProperty({description:'Enter tag name '})
  readonly name: string;

}