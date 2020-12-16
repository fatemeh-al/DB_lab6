import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class EditTaskDto {

  @ApiProperty({description:'Enter taskID '})
  readonly taskID: number;

  @ApiProperty({description:'Enter userID ' })
  readonly userID: number;

  @ApiProperty({description:'Enter itemIDs '})
  readonly itemIDs: number[];

  @ApiProperty({description:'Enter categoryID '})
  readonly categoryID: number;

  @ApiPropertyOptional({description:'Enter tagIDs '})
  readonly tagIDs: number[];

} 