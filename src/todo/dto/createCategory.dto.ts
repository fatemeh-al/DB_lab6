import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class CreateCategoryDto {

  @ApiProperty({description:'Enter category name '})
  readonly name: string;

  @ApiProperty({description:'Enter this category taskIDs'})
  readonly taskIDs: number[];
  
}