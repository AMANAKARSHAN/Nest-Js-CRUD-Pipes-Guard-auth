import { Controller,Post,Get, UseGuards,} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport/dist/auth.guard';

@Controller('user')
export class UserController {
    constructor(){

    }

    @Get('')
    @UseGuards(AuthGuard('local'))
    auth():string{
        return "aman";
    }
    



}
