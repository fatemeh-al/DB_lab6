import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class CreateItemDto {

  @ApiProperty({description:'Enter item content '})
  readonly content: string;

  @ApiProperty({description:'Enter this item taskID '})
  readonly taskID: number;
} 