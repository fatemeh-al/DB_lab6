import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class CreateTaskDto {

  @ApiProperty({description:'Enter the userID '})
  readonly userID: number;

  @ApiPropertyOptional({description:'Enter this task itemIDs '})
  readonly itemIDs: number[];

  @ApiProperty({description:'Enter this task categoryID '})
  readonly categoryID: number;

  @ApiPropertyOptional({description:'Enter this task tagIDs'})
  readonly tagIDs: number[];

} 