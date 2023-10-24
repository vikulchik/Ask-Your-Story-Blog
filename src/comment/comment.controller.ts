import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {CommentService} from "./comment.service";
import {CreateCommentDto} from "./create-comment.dto";
import {Comment} from "./comment.schema";
import {ParseObjectIdPipe} from "../app.pipe";
import {UpdateCommentDto} from "./update-comment.dto";

@Controller('comment')
export class CommentController {
    constructor(private readonly commentService: CommentService) {
    }

    @Post()
    async create(@Body() commentDto: CreateCommentDto): Promise<Comment> {
        return await this.commentService.create(commentDto);
    }

    @Get()
    async getAll(): Promise<Comment[]> {
        return await this.commentService.getAll();
    }

    @Delete(':id')
    async delete(@Param('id', ParseObjectIdPipe) id: string): Promise<void> {
        await this.commentService.delete(id);
    }

    @Put(':id')
    async update(@Param('id', ParseObjectIdPipe) id: string, @Body() commentDto: UpdateCommentDto): Promise<Comment> {
        return await this.commentService.update(id, commentDto);
    }
}