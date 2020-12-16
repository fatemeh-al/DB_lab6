import { Controller, Get, Request, Post, UseGuards, Query } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
// import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {

    constructor(private authService: AuthService) {}


    @ApiBearerAuth()
    @UseGuards(LocalAuthGuard)
    @ApiResponse({ status: 201, description: 'Logged in' })
    @ApiResponse({ status: 401, description: 'Incorrect username or password' })
    @Post('auth/login')
    async login(@Query('username') username: String, @Query('password') password: String) {
      return this.authService.login(username, password);
    }
}
