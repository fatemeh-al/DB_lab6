import { Body, Controller, Get, ParseIntPipe, Post, Put, Delete, UseGuards, Query } from '@nestjs/common';
import { TodoService } from './todo.service';
import CreateTaskDto from './dto/createTask.dto';
import CreateCategoryDto from './dto/createCategory.dto';
import CreateTagDto from './dto/createTag.dto';
import CreateItemDto from './dto/createItem.dto';
import { AuthGuard } from '@nestjs/passport';
import {ApiResponse,ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Post('addTag')
    @ApiResponse({ status: 201, description: 'Create tag' })
    @ApiResponse({ status: 401, description: 'You should login first' })
    addTag( @Body() tag: CreateTagDto) {
        return this.todoService.addTag(tag);
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Post('addPost')
    @ApiResponse({ status: 201, description: 'Create task' })
    @ApiResponse({ status: 401, description: 'You should login first' })
    addTask( @Body() task: CreateTaskDto) {
        return this.todoService.addTask(task);
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Post('addItem')
    @ApiResponse({ status: 201, description: 'Create item' })
    @ApiResponse({ status: 401, description: 'You should login first' })
    addItem( @Body() item: CreateItemDto) {
        return this.todoService.addItem(item);
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Post('addCategory')
    @ApiResponse({ status: 201, description: 'Create category' })
    @ApiResponse({ status: 401, description: 'You should login first' })
    addCategory( @Body() category: CreateCategoryDto) {
        return this.todoService.addCategory(category);
    }

}
