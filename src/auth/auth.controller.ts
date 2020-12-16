import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {LocalAuthGuard} from './local-auth.guard';

@Controller('auth')
export class AuthController {}
