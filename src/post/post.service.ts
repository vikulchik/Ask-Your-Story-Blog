import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Posts} from "./post.schema";
import {CreatePostDto} from "./create-post.dto";
import {UpdatePostDto} from "./update-post.dto";
import {BaseService} from "../common/base-service";

@Injectable()
export class PostService extends BaseService<Posts> {
    constructor(
        @InjectModel(Posts.name) private postModel: Model<Posts>
    ) {
        super();
    }

    async create(post: CreatePostDto): Promise<Posts> {
        return await this.postModel.create(post);
    }

    async getAll(): Promise<Posts[]> {
        return this.postModel.find().populate('authorId');
    }

    async delete(id: string): Promise<void> {
        await this.validateEntityExisting(id, 'Post');

        return this.postModel.findByIdAndDelete(id);
    }

    async getPost(id: string): Promise<Posts> {
        return await this.validateEntityExisting(id, 'Post');
    }

    async update(id: string, post: UpdatePostDto): Promise<Posts> {
        return this.postModel.findByIdAndUpdate(id, post);
    }

    async getById(id: string | number): Promise<Posts> {
        return this.postModel.findById(id).populate('authorId')
    }

}