import {IsNotEmpty, IsNumber, IsString} from "class-validator";

export class UpdatePostDto {
    @IsString()
    @IsNotEmpty()
    text: string;

    @IsString()
    pictureUrl: string;

    @IsNumber()
    likes: number;
}