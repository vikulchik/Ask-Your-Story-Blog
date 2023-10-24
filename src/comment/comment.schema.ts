import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import mongoose, {HydratedDocument} from "mongoose";

export type PostDocument = HydratedDocument<Comment>;

@Schema({
    timestamps: true,
    toJSON: {
        transform: function (doc, ret) {
            ret.author = ret.authorId;
            delete ret.authorId;
        },
    },
})
export class Comment {
    @Prop()
    text: string;

    @Prop({default: 0})
    likes: number;

    @Prop({type: mongoose.Types.ObjectId, ref: 'User'})
    authorId: mongoose.Types.ObjectId;

    @Prop({type: mongoose.Types.ObjectId, ref: 'Posts'})
    postId: mongoose.Types.ObjectId;

    @Prop()
    createdAt: Date;

    @Prop()
    updatedAt: Date;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);