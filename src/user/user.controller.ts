import { Body, Controller, Get, ParseIntPipe, Post, Put , UseGuards} from '@nestjs/common';
import { UserServices } from './user.service';
import CreateUserDto from './dto/createUser.dto';
import {ApiResponse, ApiQuery, ApiOperation, ApiBody, ApiBearerAuth} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

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

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 200, description: 'Get all users' })
  @ApiResponse({ status: 401, description: 'You should login first' })
  @ApiOperation({ summary: 'Get all users' })
  @Get()
  getAll() {
    return this.usersServices.getAllUsers();
  }

}