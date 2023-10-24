import {IsNotEmpty, IsString} from "class-validator";

export class CreateCommentDto {
    @IsString()
    @IsNotEmpty()
    text: string;

    @IsNotEmpty()
    authorId: string;
    
    @IsNotEmpty()
    postId: string;
}