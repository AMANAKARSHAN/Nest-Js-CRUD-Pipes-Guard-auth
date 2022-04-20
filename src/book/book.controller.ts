import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
  UseInterceptors,
  ValidationPipe,
  Request,
} from '@nestjs/common';
import { BookGuard } from './book.guard';
import { BookInterceptor } from './book.interceptor';
import { BookPipe } from './book.pipe';
import { BookService } from './book.service';
import { Book } from './data/book.dto';
//import { Request,Response } from 'express';
import { AuthGuard } from '@nestjs/passport';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  @UseInterceptors(new BookInterceptor())
  @Post('addAuto')
  addBookAuto(@Body() book: Book): string {
    this.bookService.addBookService(book);
    return 'Book is successfully added Automatically';
  }

  @UseGuards(AuthGuard('local'))
  @Get('/findAll')
  getAllBooks(@Request() req): Book[] {
    return this.bookService.findAllBooks();
  }

  //just to learn about pipes
  @Get(':id')
  getBookById(@Param('id', ParseIntPipe) bookId: number): string {
    console.log(bookId, typeof bookId);
    return 'book by Id';
  }

  @Put('/update')
  updateBooks(@Body() book: Book): string {
    return this.bookService.updateBookService(book);
  }

  @Delete('/delete/:id')
  deleteBook(@Param('id') bookId: string): string {
    return this.bookService.deleteBookService(bookId);
  }

  // //Instead of writing so many things in pipe we can simply use function ValidationPipe() to check the type

  // @Post('/add')
  // addBook(@Body(new ValidationPipe()) book: Book):string{
  //     this.bookService.addBookService(book);
  //     return "Book is successfully added";

  // }

  @UseGuards(new BookGuard())
  @Post('/add')
  addBook(@Body(new BookPipe()) book: Book): string {
    this.bookService.addBookService(book);
    return 'Book is successfully added';
  }
}
