import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument} from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({timestamps: true})
export class User {
    @Prop()
    email: string;

    @Prop()
    username: string;

    @Prop()
    firstname: string;

    @Prop()
    lastname: string;

    @Prop()
    dateOfBirth: string;

    @Prop()
    city: string;

    @Prop()
    aboutInfo: string;

    @Prop()
    phoneNumber: string;
    
    @Prop()
    createdAt: Date;

    @Prop()
    updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);