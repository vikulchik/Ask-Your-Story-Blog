import {Injectable} from '@nestjs/common';
import {User} from "./user/User";
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";

@Injectable()
export class AppService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {
    }

    async getHello(): Promise<string> {
        return 'Hello World!';
    }
}
