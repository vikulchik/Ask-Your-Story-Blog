import {UserController} from "../../src/user/user.controller";
import {UserService} from "../../src/user/user.service";
import {Test, TestingModule} from "@nestjs/testing";

describe('UserController', () => {
    let userController: UserController;

    beforeEach(async () => {
        const user: TestingModule = await Test.createTestingModule({
            controllers: [UserController],
            providers: [UserService],
        }).compile();

        userController = user.get<UserController>(UserController);
    });
});