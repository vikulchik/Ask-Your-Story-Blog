import {IsDateString, IsEmail, IsString, Length} from "class-validator";
import {userConfig} from "./user-config";

export class UpdateUserDto {
    @IsEmail()
    @IsString()
    email: string;

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
    aboutInfo: string;

    @IsString()
    phoneNumber: string;
}