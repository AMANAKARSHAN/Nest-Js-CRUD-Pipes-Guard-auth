import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { config } from "process";
import { BookModule } from "./book/book.module";
import { BookService } from "./book/book.service";
import { UserModule } from "./user/user.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [
    BookModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".local.env",
      //envFilePath:".prod.env"
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [BookService],
})
export class AppModule {}
