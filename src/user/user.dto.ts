import { IsString } from "class-validator";

export class User{

@IsString()
username: string;

@IsString()
password:string;

@IsString()
email:string;

@IsString()
age:string;

}