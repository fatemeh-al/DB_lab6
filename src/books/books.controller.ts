import { BooksService } from './books.service';
import CreateBookDto from './dto/createBook.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('books')
export class BooksController {
    constructor(private readonly bookService: BooksService) {}

    @Post('post')
    postBook( @Body() book: CreateBookDto) {
        return this.bookService.insert(book);
    }

    @Get()
    getAll() {
        return this.bookService.getAllBooks();
    }
}
