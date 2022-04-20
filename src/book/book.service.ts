import { Injectable } from '@nestjs/common';
import { Book } from './data/book.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BookService {
  private books: Book[] = [
    {
      id: '1',
      author: 'Thibaut Meurisse',
      title: 'Master your Emotions',
      published: '2018',
    },

    {
      id: '2',
      author: 'Swami vivekananda',
      title: 'Believe in Yourself',
      published: '2000',
    },

    {
      id: '3',
      author: 'Parmahansh Yogananda',
      title: 'Yogi',
      published: '1998',
    },

    {
      id: '4',
      author: 'Mark Mansion',
      title: 'Subtle art of not giving fucked',
      published: '2012',
    },
  ];

  checkIndex(book: Book): number {
    let index = null;
    index = this.books.findIndex((currentBook) => {
      return currentBook.id == book.id;
    });
    if (index == null) return -1;
    else return index;
  }

  //Add books
  addBookService(book: Book): string {
    //book.id=uuidv4();
    this.books.push(book);
    return 'Book has been successfully added';
  }

  // Update books
  updateBookService(book: Book): string {
    const index = this.books.findIndex((currentBook) => {
      return currentBook.id == book.id;
    });

    this.books[index] = book;
    return 'Book has been successfully updated';
  }

  //delete books

  deleteBookService(bookId: string): string {
    this.books = this.books.filter((book) => {
      return book.id != bookId;
    });

    return 'Book has been successfully deleted';
  }

  findAllBooks(): Book[] {
    return this.books;
  }
}
