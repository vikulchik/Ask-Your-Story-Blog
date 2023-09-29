import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {User, UserSchema} from "./user/User";
import {MongooseModule} from "@nestjs/mongoose";
import {ConfigModule} from '@nestjs/config';
import * as process from "process";
import {UserModule} from "./user/user.module";

@Module({
    imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRoot(
            `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@${process.env.HOST}:${process.env.PORT}`,
            {dbName: `${process.env.MONGO_INITDB_DATABASE}`}),
        MongooseModule.forFeature([{
            name: User.name,
            schema: UserSchema,
        }]),
        UserModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
