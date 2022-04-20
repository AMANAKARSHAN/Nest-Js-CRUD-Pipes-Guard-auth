import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AuthModule } from "src/auth/auth.module";

import { BookController } from "./book.controller";
import { BookMiddleWare } from "./book.middleware";
import { BookService } from "./book.service";

@Module({
  imports: [AuthModule],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(BookMiddleWare).forRoutes("book/findAll");
  }
}
