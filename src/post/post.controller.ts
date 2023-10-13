import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {PostService} from "./post.service";
import {Posts} from "./post.schema";
import {CreatePostDto} from "./create-post.dto";
import {ParseObjectIdPipe} from "../app.pipe";
import {UpdatePostDto} from "./update-post.dto";

@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService) {
    }

    @Post()
    async create(@Body() postDto: CreatePostDto): Promise<Posts> {
        return await this.postService.create(postDto);
    }

    @Get()
    async getAll(): Promise<Posts[]> {
        return await this.postService.getAll();
    }

    @Delete(':id')
    async delete(@Param('id', ParseObjectIdPipe) id: string): Promise<void> {
        await this.postService.delete(id);
    }

    @Get(':id')
    async getPost(@Param('id', ParseObjectIdPipe) id: string): Promise<Posts> {
        return await this.postService.getPost(id);
    }

    @Put(':id')
    async update(@Param('id', ParseObjectIdPipe) id: string, @Body() postDto: UpdatePostDto): Promise<Posts> {
        return await this.postService.update(id, postDto);
    }
}
