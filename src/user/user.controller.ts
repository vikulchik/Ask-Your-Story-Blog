import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {UserService} from "./user.service";
import {User} from "./User";
import {UserDto} from "./user.dto";

@Controller('')
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @Get('')
    async getAllUsers(): Promise<User[]> {
        return await this.userService.getAllUsers();
    }

    @Post('registration')
    async create(@Body() userDto: UserDto): Promise<User> {
        return await this.userService.create(userDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        await this.userService.delete(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() response: UserDto): Promise<User> {
        return await this.userService.update(id, response);
    }

    @Get(':id')
    async getUser(@Param('id') id: string): Promise<User> {
        return await this.userService.getUser(id);
    }
}