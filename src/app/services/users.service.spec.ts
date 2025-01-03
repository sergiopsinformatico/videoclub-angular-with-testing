import { User } from "../models/user.model";
import { LoggerService } from "./logger.service";
import { UsersService } from "./users.service";

describe('UsersService', () => {

    let newUser: User;

    beforeEach(() => {
        newUser = new User({
            'id': 'prueba',
            'name': 'prueba',
            'familyName': 'prueba',
            'birthdate': 'fecha',
            'address': 'dir'
        });
        console.log("-- Users: Load BeforeEach--");
    });

    it('Users -> Test 01: Create user', () => {

        console.log("-- Users -> Test 01: Create user --");

        const loggerService = new LoggerService();
        spyOn(loggerService, 'loggerInsertMessage');

        const userService = new UsersService(loggerService);

        userService.createUser(newUser);
        expect(userService.getUser(newUser.getId()).getId()).toBe(newUser.getId());
        expect(loggerService.loggerInsertMessage).toHaveBeenCalledTimes(1);
        userService.deleteUser(newUser);
    });

    it('Users -> Test 02: Delete user', () => {

        console.log("-- Users -> Test 02: Delete user --");

        const loggerService = jasmine.createSpyObj('LoggerService', ["loggerInsertMessage", "loggerUpdateMessage", "loggerReadMessage", "loggerDeleteMessage"]);

        const userService = new UsersService(loggerService);

        userService.createUser(newUser);
        userService.deleteUser(newUser);

        let userDeleted = userService.getUser(newUser.getId());
        expect(userDeleted).toBe(null);

        expect(loggerService.loggerInsertMessage).toHaveBeenCalledTimes(1);
        expect(loggerService.loggerDeleteMessage).toHaveBeenCalledTimes(1);
    });

});