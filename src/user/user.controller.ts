import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {UserService} from "./user.service";
import {CreateUserDto} from "./create-user.dto";
import {User} from "./user.schema";
import {UpdateUserDto} from "./update-user.dto";

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

    @Delete(':id') // check if id exist
    async delete(@Param('id') id: string): Promise<void> {
        // check if id exist
        await this.userService.delete(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() userDto: UpdateUserDto): Promise<User> {
        return await this.userService.update(id, userDto);
    }

    @Get(':id')
    async getUser(@Param('id') id: string): Promise<User> {
        return await this.userService.getUser(id);
    }
}