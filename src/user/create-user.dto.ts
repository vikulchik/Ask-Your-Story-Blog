import {IsDateString, IsEmail, IsNotEmpty, IsString, Length} from "class-validator";
import {userConfig} from "./user-config";

export class CreateUserDto {
    @IsEmail()
    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    @Length(userConfig.userNameMinLength, userConfig.userNameMaxLength)
    username: string;

    @IsString()
    firstname: string;

    @IsString()
    lastname: string;

    @IsDateString()
    dateOfBirth: Date;

    @IsString()
    city: string;

    @IsString()
    @Length(userConfig.aboutInfoMinLength, userConfig.aboutInfoMaxLength)
    aboutInfo: string;

    @IsString()
    phoneNumber: string;
}