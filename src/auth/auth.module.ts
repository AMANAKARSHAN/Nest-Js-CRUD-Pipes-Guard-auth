import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { BookModule } from 'src/book/book.module';
import { BookService } from 'src/book/book.service';
//import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [PassportModule],
  controllers: [],
  providers: [LocalStrategy, UserService, BookService],
})
export class AuthModule {}
