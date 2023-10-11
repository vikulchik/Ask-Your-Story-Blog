import {ConflictException, Injectable, NotFoundException} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {User} from "./user.schema";
import {Model} from "mongoose";
import {CreateUserDto} from "./create-user.dto";
import {UpdateUserDto} from "./update-user.dto";

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {
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
        await this.validateUserExisting(id);

        return this.userModel.findByIdAndDelete(id);
    }

    async update(id: string, user: UpdateUserDto): Promise<User> {
        return this.userModel.findByIdAndUpdate(id, user);
    }

    async validateUserExisting(id: string): Promise<User> {
        const existingUser = await this.userModel.findById(id);

        if (!existingUser) {
            throw new NotFoundException(`User not found`);
        }

        return existingUser;
    }

    async getUser(id: string): Promise<User> {
        return await this.validateUserExisting(id);
    }
}