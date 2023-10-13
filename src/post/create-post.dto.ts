import {IsNotEmpty, IsString} from "class-validator";

export class CreatePostDto {
    @IsString()
    @IsNotEmpty()
    text: string;

    @IsString()
    pictureUrl: string;

    @IsNotEmpty()
    author: string;
}