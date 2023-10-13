import {IsNotEmpty, IsNumber, IsString} from "class-validator";

export class UpdatePostDto {
    @IsString()
    @IsNotEmpty()
    text: string;

    @IsNumber()
    likes: number;
}