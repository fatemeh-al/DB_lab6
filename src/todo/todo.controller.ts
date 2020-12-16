import { Body, Controller, Get, ParseIntPipe, Post, Put, Delete, UseGuards} from '@nestjs/common';
import { TodoService } from './todo.service';
import CreateTaskDto from './dto/createTask.dto';
import CreateCategoryDto from './dto/createCategory.dto';
import CreateTagDto from './dto/createTag.dto';
import CreateItemDto from './dto/createItem.dto';
import EditTaskDto from './dto/editTask.dto';
import { AuthGuard } from '@nestjs/passport';
import {ApiResponse,ApiBearerAuth, ApiBody} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Post('addTag')
    @ApiResponse({ status: 201, description: 'Create tag' })
    @ApiResponse({ status: 401, description: 'You should login first' })
    @ApiBody({description: 'Enter tag information', type: [CreateTagDto]})
    addTag( @Body() tag: CreateTagDto) {
        return this.todoService.addTag(tag);
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Post('addTask')
    @ApiResponse({ status: 201, description: 'Create task' })
    @ApiResponse({ status: 401, description: 'You should login first' })
    @ApiBody({description: 'Enter task information', type: [CreateTaskDto]})
    addTask( @Body() task: CreateTaskDto) {
        return this.todoService.addTask(task);
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Post('addItem')
    @ApiResponse({ status: 201, description: 'Create item' })
    @ApiResponse({ status: 401, description: 'You should login first' })
    @ApiBody({description: 'Enter item indormation', type: [CreateItemDto]})
    addItem( @Body() item: CreateItemDto) {
        return this.todoService.addItem(item);
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Post('addCategory')
    @ApiResponse({ status: 201, description: 'Create category' })
    @ApiResponse({ status: 401, description: 'You should login first' })
    @ApiBody({description: 'Enter category information', type: [CreateCategoryDto]})
    addCategory( @Body() category: CreateCategoryDto) {
        return this.todoService.addCategory(category);
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Delete('deleteTask')
    @ApiResponse({ status: 200, description: 'Delete a task' })
    @ApiResponse({ status: 401, description: 'You should login first' })
    @ApiBody({description: 'Enter taskID', type: [Number]})
    deleteTask( @Body('taskID', ParseIntPipe) taskID: number) {
        return this.todoService.deleteTask(taskID);
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Put('editTask')
    @ApiResponse({ status: 200, description: 'Edit a task' })
    @ApiResponse({ status: 401, description: 'You should login first' })
    @ApiBody({description: 'Enter task new information', type: [EditTaskDto]})
    editTask( @Body() task: EditTaskDto) {
        return this.todoService.editTask(task);
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Delete('deleteItem')
    @ApiResponse({ status: 200, description: 'Delete an item' })
    @ApiResponse({ status: 401, description: 'You should login first' })
    @ApiBody({description: 'Enter itemID', type: [Number]})
    deleteItem( @Body('itemID', ParseIntPipe) itemID: number) {
        return this.todoService.deleteItem(itemID);
    }

}
