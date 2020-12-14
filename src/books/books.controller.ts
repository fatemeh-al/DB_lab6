import { BooksService } from './books.service';
import CreateBookDto from './dto/createBook.dto';
import { Body, Controller, Delete, Get, Post, ParseIntPipe,Put } from '@nestjs/common';
import {ApiResponse, ApiQuery, ApiOperation, ApiBody} from '@nestjs/swagger';
import UpdateBookDto from './dto/updateBook.dto';

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

    @ApiOperation({ summary: 'Update a book information' })
    @ApiResponse({status: 200})
    @Put('update')
    update(@Body() book: UpdateBookDto){
        return this.bookService.updateBook(book);
    }

    @ApiOperation({ summary: 'Delete a book by id' })
    @ApiResponse({status: 200})
    @Delete('delete')
    delete(@Body('bookId', ParseIntPipe) bookId: number){
        return this.bookService.deleteBook(bookId);
    }
}
