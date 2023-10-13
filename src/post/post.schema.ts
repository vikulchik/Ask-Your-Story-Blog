import mongoose, {HydratedDocument} from "mongoose";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

export type PostDocument = HydratedDocument<Posts>;

@Schema({timestamps: true})
export class Posts {
    @Prop()
    text: string;

    @Prop()
    pictureUrl: string;

    @Prop({default: 0})
    likes: number;

    @Prop({type: mongoose.Types.ObjectId, ref: 'User'})
    author: mongoose.Types.ObjectId;

    @Prop()
    createdAt: Date;

    @Prop()
    updatedAt: Date;
}

export const PostSchema = SchemaFactory.createForClass(Posts);