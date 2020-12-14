import { BooksService } from './books.service';
import CreateBookDto from './dto/createBook.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import {ApiResponse, ApiQuery, ApiOperation, ApiBody} from '@nestjs/swagger';

@Controller('books')
export class BooksController {
    constructor(private readonly bookService: BooksService) {}

    @ApiOperation({ summary: 'Create book' })
    @ApiResponse({status: 200})
    @ApiBody({description: 'Enter book information', type: CreateBookDto})
    @Post('post')
    postBook( @Body() book: CreateBookDto) {
        return this.bookService.insert(book);
    }

    @ApiOperation({ summary: 'Get all books' })
    @ApiResponse({status: 200})
    @Get()
    getAll() {
        return this.bookService.getAllBooks();
    }
}
