import {ConflictException, Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {User} from "./user.schema";
import {Model} from "mongoose";
import {CreateUserDto} from "./create-user.dto";
import {UpdateUserDto} from "./update-user.dto";
import {BaseService} from "../common/base-service";

@Injectable()
export class UserService extends BaseService<User> {

    constructor(@InjectModel(User.name) private userModel: Model<User>) {
        super();
    }

    async getAll(): Promise<User[]> {
        return this.userModel.find();
    }

    async create(user: CreateUserDto): Promise<User> {
        const {email} = user;
        const existingUser = await this.userModel.findOne({email});

        if (existingUser) {
            throw new ConflictException('User already exists!')
        }

        return await this.userModel.create(user);
    }

    async delete(id: string): Promise<void> {
        await this.validateEntityExisting(id, 'User');

        return this.userModel.findByIdAndDelete(id);
    }

    async update(id: string, user: UpdateUserDto): Promise<User> {
        return this.userModel.findByIdAndUpdate(id, user);
    }

    async getUser(id: string): Promise<User> {
        return await this.validateEntityExisting(id, 'User');
    }

    async getById(id: string | number): Promise<User> {
        return this.userModel.findById(id);
    }
}