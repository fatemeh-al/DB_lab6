import { Body, Controller, Get, Post } from '@nestjs/common';
import GenreServices from './genre.service';
import CreateGenreDto from './dto/createGenre.dto';
import {ApiResponse, ApiQuery, ApiOperation, ApiBody} from '@nestjs/swagger';

@Controller('genre')
export default class GenreController {
  constructor(private readonly genreServices: GenreServices) {}
  
  @ApiOperation({ summary: 'Create genre' })
  @ApiResponse({status: 200})
  @ApiBody({description: 'Enter genre information', type: CreateGenreDto})
  @Post('post')
  postGenre( @Body() genre: CreateGenreDto) {
    return this.genreServices.insert(genre);
  }

  @ApiOperation({ summary: 'Get all genres' })
  @ApiResponse({status: 200})
  @Get()
  getAll() {
    return this.genreServices.getAllGenre();
  }
}