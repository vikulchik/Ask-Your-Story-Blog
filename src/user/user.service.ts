import {ConflictException, Injectable, NotFoundException} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {User} from "./User";
import {Model} from "mongoose";
import {UserDto} from "./user.dto";

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {
    }

    async getAllUsers(): Promise<User[]> {
        return this.userModel.find();
    }

    async create(user: UserDto): Promise<User> {
        const {email} = user;
        const existingUser = await this.userModel.findOne({email});

        if (existingUser) {
            throw new ConflictException('User already exists!')
        }

        return await this.userModel.create(user);
    }

    async delete(id: string): Promise<void> {
        return this.userModel.findByIdAndDelete(id);
    }

    async update(id: string, user: UserDto): Promise<User> {
        return this.userModel.findByIdAndUpdate(id, user);
    }

    async getUser(id: string): Promise<User> {
        const existingUser = await this.userModel.findById(id);

        if (!existingUser) {
            throw new NotFoundException(`User #${id} not found`);
        }

        return existingUser;
    }
}