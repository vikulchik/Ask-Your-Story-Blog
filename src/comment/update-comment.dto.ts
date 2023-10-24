import {IsNotEmpty, IsNumber, IsString} from "class-validator";

export class UpdateCommentDto {
    @IsString()
    @IsNotEmpty()
    text: string;

    @IsNumber()
    likes: number;
}