import {Injectable, NotFoundException} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Posts} from "./post.schema";
import {CreatePostDto} from "./create-post.dto";
import {UpdatePostDto} from "./update-post.dto";

@Injectable()
export class PostService {

    constructor(
        @InjectModel(Posts.name) private postModel: Model<Posts>
    ) {
    }

    async create(post: CreatePostDto): Promise<Posts> {
        return await this.postModel.create(post);
    }

    async getAll(): Promise<Posts[]> {
        return this.postModel.find().populate('authorId');
    }

    async delete(id: string): Promise<void> {
        await this.validatePostExisting(id);

        return this.postModel.findByIdAndDelete(id);
    }

    async getPost(id: string): Promise<Posts> {
        return await this.validatePostExisting(id);
    }

    async update(id: string, user: UpdatePostDto): Promise<Posts> {
        return this.postModel.findByIdAndUpdate(id, user);
    }

    async validatePostExisting(id: string): Promise<Posts> {
        const existingPost = await this.postModel.findById(id).populate('authorId');

        if (!existingPost) {
            throw new NotFoundException(`Post not found`);
        }

        return existingPost;
    }
}