import mongoose, {HydratedDocument} from "mongoose";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

export type PostDocument = HydratedDocument<Posts>;

@Schema({
    timestamps: true,
    toJSON: {
        transform: function (doc, ret) {
            ret.author = ret.authorId;
            delete ret.authorId;
        },
    },
})
export class Posts {
    @Prop()
    text: string;

    @Prop()
    pictureUrl: string;

    @Prop({default: 0})
    likes: number;

    @Prop({type: mongoose.Types.ObjectId, ref: 'User'})
    authorId: mongoose.Types.ObjectId;

    @Prop()
    createdAt: Date;

    @Prop()
    updatedAt: Date;
}

export const PostSchema = SchemaFactory.createForClass(Posts);