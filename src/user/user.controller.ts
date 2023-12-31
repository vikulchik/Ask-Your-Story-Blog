import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {UserService} from "./user.service";
import {CreateUserDto} from "./create-user.dto";
import {User} from "./user.schema";
import {UpdateUserDto} from "./update-user.dto";
import {ParseObjectIdPipe} from "../app.pipe";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @Get()
    async getAll(): Promise<User[]> {
        return await this.userService.getAll();
    }

    @Post()
    async create(@Body() userDto: CreateUserDto): Promise<User> {
        return await this.userService.create(userDto);
    }

    @Delete(':id')
    async delete(@Param('id', ParseObjectIdPipe) id: string): Promise<void> {
        await this.userService.delete(id);
    }

    @Put(':id')
    async update(@Param('id', ParseObjectIdPipe) id: string, @Body() userDto: UpdateUserDto): Promise<User> {
        return await this.userService.update(id, userDto);
    }

    @Get(':id')
    async getUser(@Param('id', ParseObjectIdPipe) id: string): Promise<User> {
        return await this.userService.getUser(id);
    }
}