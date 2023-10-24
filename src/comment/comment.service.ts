import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Comment} from "./comment.schema";
import {CreateCommentDto} from "./create-comment.dto";
import {UpdateCommentDto} from "./update-comment.dto";
import {BaseService} from "../common/base-service";

@Injectable()
export class CommentService extends BaseService<Comment> {
    constructor(
        @InjectModel(Comment.name) private commentModel: Model<Comment>
    ) {
        super();
        console.log("CHECK:", Comment.name);
    }

    async create(comment: CreateCommentDto): Promise<Comment> {
        return await this.commentModel.create(comment);
    }

    async getAll(): Promise<Comment[]> {
        return this.commentModel.find().populate('authorId');
    }

    async delete(id: string): Promise<void> {
        await this.validateEntityExisting(id, 'Comment');

        return this.commentModel.findByIdAndDelete(id);
    }

    async update(id: string, comment: UpdateCommentDto): Promise<Comment> {
        return this.commentModel.findByIdAndUpdate(id, comment);
    }

    async getById(id: string | number): Promise<Comment> {
        return this.commentModel.findById(id).populate('authorId')
    }
}