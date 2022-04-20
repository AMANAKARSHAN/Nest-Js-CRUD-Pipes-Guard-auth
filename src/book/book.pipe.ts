import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from "@nestjs/common";
import { Book } from "./data/book.dto";
import { BookService } from "./book.service";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { json } from "stream/consumers";

@Injectable()
export class BookPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
    //Start : to check type

    //class transformer obj convert class
    const bookClass = plainToInstance(Book, value);

    //const Validation
    const errors = await validate(bookClass);

    if (errors.length > 0) {
      throw new BadRequestException("validation Failed " + errors);
    }

    //End : to end type

    if (value.id != "0") return value;
    else throw new BadRequestException("Please id except 0");
  }
}
