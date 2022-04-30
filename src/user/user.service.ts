import { Injectable } from '@nestjs/common';
import {User} from './user.dto';

@Injectable()
export class UserService {
    private user: User[]=[
        {
            'username':'user1',
            'password':"pass1",
            'email':"user1@gmail.com",
            'age':'22'
        },
        
        {
            'username':'user2',
            'password':"pass2",
            'email':"user2@gmail.com",
            'age':'22'

        },

        {
            'username':'user3',
            'password':"pass3",
            'email':"user3@gmail.com",
            'age':'22'

        },

        {   

            'username':'user4',
            'password':"pass4",
            'email':"user4@gmail.com",
            'age':'22'
        }

    ];


    getUserByUserName(userName:string):User{
        return  this.user.find((user:User)=>user.username==userName);
    }


}
