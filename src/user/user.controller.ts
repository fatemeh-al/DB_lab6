import { Body, Controller, Get, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UserServices } from './user.service';
import CreateUserDto from './dto/createUser.dto';
import {ApiResponse, ApiQuery, ApiOperation, ApiBody} from '@nestjs/swagger';

@Controller('users')
export class UserController {
  constructor(private readonly usersServices: UserServices) {}

  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({status: 200})
  @ApiBody({description: 'Enter user information', type: [CreateUserDto]})
  @Post('post')
  postUser( @Body() user: CreateUserDto) {
    return this.usersServices.insert(user);
  }

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({status: 200})
  @Get()
  getAll() {
    return this.usersServices.getAllUsers();
  }

  @ApiOperation({ summary: 'Get one user\'s books' })
  @ApiResponse({ status: 200, description: 'Found books'})
  @ApiBody({description: 'Enter user id', type: Number})
  @Get('books')
  getBooks( @Body('userID', ParseIntPipe) userID: number ) {
    return this.usersServices.getBooksOfUser(userID);
  }
}